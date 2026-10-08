const {onCall,HttpsError} = require("firebase-functions/v2/https");
const {defineSecret} = require("firebase-functions/params");
const {GoogleGenAI} = require("@google/genai");

const GEMINI_API_KEY = defineSecret("GEMINI_API_KEY");
const ADMIN_UID = "X9dMH5dbdNMrZuaeHiz3p8f88UC3";
const LANGS = ["en","de","es","pt","fr"];

exports.translateMenuItem = onCall(
  {region:"us-central1",secrets:[GEMINI_API_KEY],timeoutSeconds:60,memory:"256MiB"},
  async (request) => {
    if (!request.auth) throw new HttpsError("unauthenticated","Please sign in.");
    if (request.auth.uid !== ADMIN_UID) throw new HttpsError("permission-denied","Only the authorized menu administrator can translate items.");

    const source = request.data?.source || {};
    if (!String(source.name || "").trim()) {
      throw new HttpsError("invalid-argument","Italian dish name is required.");
    }

    const ai = new GoogleGenAI({apiKey:GEMINI_API_KEY.value()});
    const prompt = `You are a professional Italian restaurant menu translator.
Translate the following Italian menu data into exactly these languages: English (en), German (de), Spanish (es), Portuguese (pt), French (fr).
Preserve food names when normally kept in Italian. Use natural, concise menu language.
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
      const raw = String(response.text || "").replace(/^\`\`\`json\s*/i,"").replace(/\`\`\`\s*$/,"").trim();
      const translations = JSON.parse(raw);
      for (const lang of LANGS) {
        if (!translations[lang]) translations[lang]={};
        for (const key of ["name","description","category","badge"]) {
          if (typeof translations[lang][key] !== "string") translations[lang][key]="";
        }
      }
      return {translations};
    } catch (err) {
      console.error("Translation failed",err);
      throw new HttpsError("internal","AI translation failed. Check the Gemini secret and function logs.");
    }
  }
);
