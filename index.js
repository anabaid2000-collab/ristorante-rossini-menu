const {onCall,HttpsError} = require("firebase-functions/v2/https");
const {defineSecret} = require("firebase-functions/params");
const {GoogleGenAI} = require("@google/genai");

const GEMINI_API_KEY = defineSecret("GEMINI_API_KEY");

const LANGS = ["en","de","es","pt","fr"];

exports.translateMenuItem = onCall(
  {region:"us-central1",secrets:[GEMINI_API_KEY],timeoutSeconds:60,memory:"256MiB"},
  async (request) => {
    if (!request.auth) throw new HttpsError("unauthenticated","You must be signed in.");
    const source = request.data?.source || {};
    if (!String(source.name || "").trim()) {
      throw new HttpsError("invalid-argument","Italian dish/category name is required.");
    }

    const ai = new GoogleGenAI({apiKey:GEMINI_API_KEY.value()});
    const prompt = `You are a professional Italian restaurant translator.
Translate the following Italian menu data into exactly these languages: English (en), German (de), Spanish (es), Portuguese (pt), French (fr).
Preserve food names when they are normally kept in Italian, but provide a natural translation or explanatory wording when useful.
Do not invent ingredients, prices, allergens, or claims.
Return ONLY valid JSON with this exact structure:
{
  "en":{"name":"","description":"","category":"","badge":""},
  "de":{"name":"","description":"","category":"","badge":""},
  "es":{"name":"","description":"","category":"","badge":""},
  "pt":{"name":"","description":"","category":"","badge":""},
  "fr":{"name":"","description":"","category":"","badge":""}
}
Italian source:
${JSON.stringify({
  name:String(source.name||""),
  description:String(source.description||""),
  category:String(source.category||""),
  badge:String(source.badge||"")
})}`;

    try {
      const response = await ai.models.generateContent({
        model:"gemini-2.5-flash",
        contents:prompt,
        config:{responseMimeType:"application/json",temperature:0.2}
      });
      let text = response.text || "";
      text = text.replace(/^```json\s*/i,"").replace(/```\s*$/,"").trim();
      const translations = JSON.parse(text);
      for (const l of LANGS) {
        if (!translations[l]) translations[l]={};
        for (const k of ["name","description","category","badge"]) {
          if (typeof translations[l][k] !== "string") translations[l][k]="";
        }
      }
      return {translations};
    } catch (err) {
      console.error("Translation failed",err);
      throw new HttpsError("internal","AI translation failed. Check your Gemini API key and function logs.");
    }
  }
);
