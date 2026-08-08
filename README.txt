RISTORANTE ROSSINI — Firebase 6-Language Menu
================================================

Languages:
Italian, English, German, Spanish, Portuguese, French.

What was added
--------------
1. Public menu language switcher for all 6 languages.
2. Firestore translation structure under each dish:
   translations.en / de / es / pt / fr
3. Admin Panel "Translate / refresh" button for every dish.
4. New-dish flow automatically generates translations before saving.
5. Category translations.
6. Secure Firebase Callable Cloud Function using a Gemini API key stored as a Firebase Secret.
7. Firebase Hosting + Functions configuration for project ristorante-rossini.

IMPORTANT
---------
The AI translation function needs a Gemini API key stored as a Firebase Secret.
Do NOT paste a Gemini API key into index.html or admin/index.html.

Deploy from a computer
----------------------
1. Install Firebase CLI and log in:
   firebase login

2. From this folder:
   firebase use ristorante-rossini

3. Set the secret (one time):
   firebase functions:secrets:set GEMINI_API_KEY

   Paste your Gemini API key when prompted.

4. Install function dependencies:
   cd functions
   npm install
   cd ..

5. Deploy:
   firebase deploy --only hosting,functions,firestore:rules

If your Firebase project asks you to enable billing for Cloud Functions, follow
Firebase's current billing/plan requirements. Hosting itself is separate from
the AI function.

After deployment
----------------
Open:
   https://ristorante-rossini.web.app/

Admin:
   https://ristorante-rossini.web.app/admin/

The existing Firebase Authentication admin account is used for the Admin Panel.
Do not remove the existing authenticated admin user.

How to use AI translation
-------------------------
Admin -> Add menu item
1. Enter Italian name, description, category and badge.
2. Tap "Translate Italian -> 5 languages".
3. Review the generated English/German/Spanish/Portuguese/French text.
4. Tap "Add item".

For an existing dish:
1. Open Admin -> Current menu.
2. Tap "Translate / refresh".
3. Review translations.
4. Tap "Save changes".

Existing dishes
---------------
Existing dishes that only have the old description/descriptionEn fields will
continue to work. They will show Italian and English immediately. Use
"Translate / refresh" once for each existing dish to populate all five new
translation fields.

Security
--------
The public menu can read Firestore menu documents. Menu writes remain restricted
to authenticated Firebase users by firestore.rules. The Gemini key is kept
server-side in Firebase Secret Manager and is never sent to the public menu.

Mobile note
-----------
The ZIP is Firebase-ready, but Firebase CLI deployment is normally easiest from
a computer. You can also open the project in Firebase Studio and deploy the same
firebase.json/functions setup from there.
