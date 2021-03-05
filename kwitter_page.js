//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDdqzTm_Obs7L2ZajjhisHHKbcF72TuzCE",
      authDomain: "kwitter-b11db.firebaseapp.com",
      databaseURL: "https://kwitter-b11db-default-rtdb.firebaseio.com",
      projectId: "kwitter-b11db",
      storageBucket: "kwitter-b11db.appspot.com",
      messagingSenderId: "563645765854",
      appId: "1:563645765854:web:353b1dfbc092f7ecd80a4f",
      measurementId: "G-CTH7XP6QKD"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,message:msg,like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
