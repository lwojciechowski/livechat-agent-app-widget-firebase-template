# LiveChat Agent App widget Firebase template

This repo provides template for creating Agent App Widget using Firebase services. Following things are provided:

- Agent App Widget iframe made with Create React App (at root folder).
- Firebase Cloud Functions authorization mechanism that logs in user using LC tokens.
- Hosting config for AAW.

# Setup

1. Create Firebase account
2. Setup Firebase CLI (https://firebase.google.com/docs/cli)
3. Create web project and copy configuration json to `src/App.js` file.
4. When testing functions locally you can download `serviceAccount.json` for
   `firebase-admin` and run the environment `GOOGLE_APPLICATION_CREDENTIALS='se.json' npm run serve`
   from `functions/` folder.

### Notes
This solution will work only with Blaze plan on Firebase. The Spark plan limits
outbound network connections. The Blaze plan still have quota limits for the
Spark plan so you can attach card and use the service for free or use the
template locally.

