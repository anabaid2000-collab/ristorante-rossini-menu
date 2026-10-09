<div align="center">

# 🍝 Ristorante Rossini Menu

**A multilingual restaurant menu website powered by Firebase.**

[🌐 Open Live Website](https://ristorante-rossini.web.app/) · [📦 View Repository](https://github.com/anabaid2000-collab/ristorante-rossini-menu)

![HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?logo=firebase&logoColor=black)

</div>

---

## ✨ About the Project

When people travel from one country to another, reading a restaurant menu in an unfamiliar language can be challenging. Understanding the available dishes and placing an order with confidence can become difficult.

**I created Ristorante Rossini Menu to make this experience easier.** Visitors can select their preferred language and explore the restaurant menu in a language they understand, making it easier to discover dishes and place orders—even if they don't speak the local language.

Guests can also simply scan the QR code in this README using their phone's camera to access and view the menu directly.

**My goal** is to make restaurant dining more welcoming, accessible, and convenient for international guests.

## 📱 Scan to Visit the Website

Just scan this QR code with your phone camera to view the live Ristorante Rossini menu.

<div align="center">

[![Ristorante Rossini website QR code](https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=12&data=https%3A%2F%2Fristorante-rossini.web.app%2F)](https://ristorante-rossini.web.app/)

**[Open Ristorante Rossini Menu](https://ristorante-rossini.web.app/)**

</div>

## 🌍 Languages

The project is intended to support six menu languages:

- 🇮🇹 Italian
- 🇬🇧 English
- 🇩🇪 German
- 🇪🇸 Spanish
- 🇵🇹 Portuguese
- 🇫🇷 French

Language translation and admin features depend on the corresponding Firebase configuration and deployed functions being set up correctly.

## 🧰 Built With

- **HTML, CSS and JavaScript** — website interface and behaviour
- **Firebase Hosting** — live website hosting
- **Cloud Firestore and Firebase Security Rules** — menu data and access control
- **Firebase Cloud Functions** — server-side functionality, where configured

## 🚀 Live Demo

Visit the website: **https://ristorante-rossini.web.app/**

## 🛠️ Deployment

Deploy the website files to Firebase Hosting from the configured project directory:

```bash
firebase deploy --only hosting
```

If you are updating configured Cloud Functions or Firestore rules as well, use the appropriate deployment targets, for example:

```bash
firebase deploy --only hosting,functions,firestore:rules
```

Run the second command only after confirming the Functions and Firestore configuration is ready.

## 🔐 Security Notes

- Never commit API keys, passwords, service-account files, or other secrets.
- Keep AI provider keys in Firebase Secret Manager or another appropriate server-side secret store.
- Review Firestore rules before deploying changes.
- Do not remove the existing authenticated admin account when maintaining the Admin Panel.

## 📁 Repository

The default branch is `main`. The live site is hosted separately on Firebase Hosting; committing to GitHub does not by itself deploy the site unless a deployment workflow is configured.

## 👩‍💻 Maintainer

GitHub: [@anabaid2000-collab](https://github.com/anabaid2000-collab)
