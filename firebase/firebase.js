
var admin = require("firebase-admin");
var path = require("path");

admin.initializeApp({
  credential: admin.credential.cert(path.resolve(__dirname, "../firebase-serviceAccountKey.json")),
  databaseURL: "https://angle-control.firebaseio.com"
});


module.exports = admin.database();
