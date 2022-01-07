//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDCpfmfCX_y7-miudr2Ob56odnllmpgSYA",
      authDomain: "kwitter-e30d8.firebaseapp.com",
      projectId: "kwitter-e30d8",
      storageBucket: "kwitter-e30d8.appspot.com",
      messagingSenderId: "471655759530",
      appId: "1:471655759530:web:d1617afef58a37dc355ad3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");


function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
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
