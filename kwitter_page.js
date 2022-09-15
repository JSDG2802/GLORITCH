    var firebaseConfig = {
    apiKey: "AIzaSyASUw7TlabglGuGYKeQruqipteFJM4IcpM",
    authDomain: "fire-base-red-social.firebaseapp.com",
    projectId: "fire-base-red-social",
    storageBucket: "fire-base-red-social.appspot.com",
    messagingSenderId: "504693510510",
    appId: "1:504693510510:web:917ffc087656b8e6e1317f",
    measurementId: "G-N2131B3Z99"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");


//document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!" + "Bienvenido a la sala: " + room_name;

function send() {
   msg = document.getElementById("msg").value;
   firebase.database(.ref(room_name).push({
    name: user_name,
    message:msg,
    Like:0
    });

    document.getElementById("msg").value = "";
}

function getData() {
   firebase.database().ref("/" + room_name).on('value',function(snapshot){
   document.getElementById ("outpout").innerHTML = "";
   snapshot.forEach(function(childsnapshot){
    childkey = childSnapshot.key;
    childData = childsnapshot.val();
    if (childkey = !"purpose"){
        firebase_message_id =  childKey;
        message_data = childData;
        console.log(firebase_message_id);
        console.log(message_data);
        name = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];
        name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
        message_with_tag = "<h4 class = 'message_h4'>+ message +</h4>";
        like_button = "<button class = 'btn btn-warning' id = "id = " + firebase_message_id + "value= " + like + "onclick = 'updateLike(this.id)'"></button>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
         row = name_with_tag + message_with_tag + like_button + span_with_tag;
          document.getElementById("output").innerHTML += row;
        }
            }
        });
    });
}
getData();

function updateLike(message_id) {
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like: updated_likes
    });

}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  localStorage.replace("index.html");
}