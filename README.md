<div align="center">

# 🍝 Ristorante Rossini Menu

**A multilingual restaurant menu website powered by Firebase.**

[🌐 Open Live Website](https://ristorante-rossini.web.app/) · [🔐 Admin Panel](https://ristorante-rossini.web.app/admin/) · [📦 View Repository](https://github.com/anabaid2000-collab/ristorante-rossini-menu)

![HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?logo=firebase&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/Deploy-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)

</div>

---

## ✨ About the Project

When people travel from one country to another, reading a restaurant menu in an unfamiliar language can be challenging. Understanding the available dishes and placing an order with confidence can become difficult.

**I created Ristorante Rossini Menu to make this experience easier.** Visitors can select their preferred language and explore the restaurant menu in a language they understand, making it easier to discover dishes and place orders—even if they don't speak the local language.

**My goal** is to make restaurant dining more welcoming, accessible, and convenient for international guests.

## 📱 QR Code

<div align="center">

![QR code to open Ristorante Rossini Menu](https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=12&data=https%3A%2F%2Fristorante-rossini.web.app%2F)

</div>

## 🌍 Languages

The project supports six menu languages:

- 🇮🇹 Italian
- 🇬🇧 English
- 🇩🇪 German
- 🇪🇸 Spanish
- 🇵🇹 Portuguese
- 🇫🇷 French

## 🧰 Built With

- **HTML, CSS and JavaScript** — website interface and behaviour
- **Firebase Hosting** — live website hosting
- **Cloud Firestore and Firebase Security Rules** — menu data and access control
- **Firebase Cloud Functions** — server-side functionality, where configured
- **GitHub Actions** — automated deployment to Firebase Hosting

## 🚀 Live Demo

- **Website:** https://ristorante-rossini.web.app/
- **Admin Panel:** https://ristorante-rossini.web.app/admin/

## 🚀 Deployment Guide

The website is hosted on Firebase Hosting. The GitHub Actions workflow automatically deploys the site when changes are pushed to the `main` branch.

### Automatic Deployment (Recommended)

1. Make and save your changes to the project files.
2. Commit and push the changes to the `main` branch.
3. Open [GitHub Actions](https://github.com/anabaid2000-collab/ristorante-rossini-menu/actions).
4. Open the latest **Deploy Firebase Hosting** workflow run.
5. Wait until its status shows **Success**.
6. Visit the [live website](https://ristorante-rossini.web.app/) and refresh the page to verify the changes.

### Manual Deployment Using Firebase CLI

If you need to deploy manually, open Google Cloud Shell or a terminal where Firebase CLI is installed and run:

```bash
cd ~/ristorante-rossini-menu
git pull origin main
firebase use ristorante-rossini
firebase deploy --only hosting
```

If the project directory is not at `~/ristorante-rossini-menu`, first change to the directory where you cloned the repository.

After deployment, Firebase CLI will show the deployment result and hosting URL.

### Deployment Requirements

- Access to the GitHub repository
- The GitHub Actions workflow enabled
- The repository secret `FIREBASE_SERVICE_ACCOUNT_RISTORANTE_ROSSINI` configured for automated deployment
- Firebase CLI installed and authenticated for manual deployment

## 🔐 Security Notes

- Never commit API keys, passwords, service-account JSON files, or other secrets to the repository.
- Keep the Firebase service-account credential in GitHub Actions secrets; never paste its contents into source files or README.
- Review Firestore rules before deploying changes to them.
- Preserve the existing Firebase Authentication and admin configuration when maintaining the Admin Panel.

## 📁 Repository

The default branch is `main`. The live website is hosted on Firebase Hosting, and the GitHub Actions workflow deploys changes pushed to `main`.

- **Source code:** [GitHub Repository](https://github.com/anabaid2000-collab/ristorante-rossini-menu)
- **Deployment history:** [GitHub Actions](https://github.com/anabaid2000-collab/ristorante-rossini-menu/actions)

## 👩‍💻 Maintainer

GitHub: [@anabaid2000-collab](https://github.com/anabaid2000-collab)
