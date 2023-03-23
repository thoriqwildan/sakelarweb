const firebaseConfig = {
  apiKey: "AIzaSyA4uU24oe2iI7-xtT1MbKHgZSu_xLjo7dE",
  authDomain: "sakelarweb.firebaseapp.com",
  databaseURL: "https://sakelarweb-default-rtdb.firebaseio.com",
  projectId: "sakelarweb",
  storageBucket: "sakelarweb.appspot.com",
  messagingSenderId: "577953064166",
  appId: "1:577953064166:web:64f3949f920ac93baa8727",
  measurementId: "G-1JBYTSETM8",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

$(document).ready(function () {
  var database = app.database();
  var StatusRelay1;
  var StatusRelay2;
  var StatusRelay3;

  database
    .ref()
    .child("sakelarweb")
    .on("value", function (snap) {
      StatusRelay1 = snap.val().StatusRelay1;
      StatusRelay2 = snap.val().StatusRelay2;
      StatusRelay3 = snap.val().StatusRelay3;

      if (StatusRelay1 == "ON") {
        document.getElementById("unact").style.display = "none";
        document.getElementById("act").style.display = "block";
      } else {
        document.getElementById("unact").style.display = "block";
        document.getElementById("act").style.display = "none";
      }

      if (StatusRelay2 == "ON") {
        document.getElementById("unact1").style.display = "none";
        document.getElementById("act1").style.display = "block";
      } else {
        document.getElementById("unact1").style.display = "block";
        document.getElementById("act1").style.display = "none";
      }
      if (StatusRelay3 == "ON") {
        document.getElementById("unact2").style.display = "none";
        document.getElementById("act2").style.display = "block";
      } else {
        document.getElementById("unact2").style.display = "block";
        document.getElementById("act2").style.display = "none";
      }
    });

  $(".toggle-btn").click(function () {
    var firebaseRef = app
      .database()
      .ref()
      .child("sakelarweb/" + "StatusRelay1");
    if (StatusRelay1 == "ON") {
      firebaseRef.set("OFF");
      StatusRelay1 = "OFF";
    } else {
      firebaseRef.set("ON");
      StatusRelay1 = "ON";
    }
  });

  $(".toggle-btn1").click(function () {
    var firebaseRef = app
      .database()
      .ref()
      .child("sakelarweb/" + "StatusRelay2");
    if (StatusRelay2 == "ON") {
      firebaseRef.set("OFF");
      StatusRelay2 = "OFF";
    } else {
      firebaseRef.set("ON");
      StatusRelay2 = "ON";
    }
  });
  $(".toggle-btn2").click(function () {
    var firebaseRef = app
      .database()
      .ref()
      .child("sakelarweb/" + "StatusRelay3");
    if (StatusRelay3 == "ON") {
      firebaseRef.set("OFF");
      StatusRelay3 = "OFF";
    } else {
      firebaseRef.set("ON");
      StatusRelay3 = "ON";
    }
  });
});
