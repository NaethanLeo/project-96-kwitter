//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyBT4CWxKUJ5QZ_NqaF4cAjoXayBwkMDuCA",
      authDomain: "kwitter-c294a.firebaseapp.com",
      databaseURL: "https://kwitter-c294a-default-rtdb.firebaseio.com",
      projectId: "kwitter-c294a",
      storageBucket: "kwitter-c294a.appspot.com",
      messagingSenderId: "891487358163",
      appId: "1:891487358163:web:7facfab0c7ef758516d826"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}