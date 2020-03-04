
var isConnected = false;
var connectedChannel = ""


const {
  chat,
  api
} = new TwitchJs({
  log: { enabled: false },
});


function DisconnectTwitchChat(){
chat.disconnect();
document.getElementById("status").innerHTML = "disconnected";
document.getElementById("status").style.color ="red";
  };



function ConnectTwitchChat() {
  const channel = "halfbloood";

  


    // Connect to Twitch 
    
    chat.connect().then(() => {
      chat.join(channel).then(() => {
        isConnected = true;
        connectedChannel = channel;
        document.getElementById("status").innerHTML = "connected";
        document.getElementById("status").style.color ="green";
        console.log("connected boy updated2");
       // document.getElementById("connect_btn").style.background = "#32CD32"
      
      }).catch(function(err) {
        console.log(err);
        document.getElementById("status").innerHTML = "Error: Edgar fucked up";
        document.getElementById("status").style.color ="red";
      })
    }).catch(function(err) {
      console.log(err);
      document.getElementById("status").innerHTML = "Error: Cant connect";
      document.getElementById("status").style.color ="red";
    });

    chat.on('*', message => {

     // console.log(message.tags["customRewardId"]);
   var clean_message = DOMPurify.sanitize(message.message, { ALLOWED_TAGS: ['b'] });

  if((message.tags["customRewardId"] ==="99c5af66-501a-43cf-b71e-903dadbc0f31") ){
    console.log("Scav sound");
    console.log(clean_message);
    ScavSounds(clean_message);
    
  }else if(message.tags["customRewardId"] ==="feff768e-40e6-4888-9fcb-5ee7ad446e87"){
   console.log("Grenade sound");
    GrenadeSoundNew(clean_message);
  }
  else if(message.tags["customRewardId"] ==="0c0e8980-291f-4145-8155-5ea0d2a80f9b" ){
    console.log("Raider sound");
    RaiderSounds(clean_message);
  }
  else{
  }

  })
  };



function ScavSounds(passedMessage){
  console.log("working2");
  console.log("passed message:" + passedMessage);
 
//aheadleft
var sound5 = document.getElementById("scav5");
var sound6 = document.getElementById("scav6");
var sound8 = document.getElementById("scav8");
var sound11 = document.getElementById("scav11");
var sound16 = document.getElementById("scav16");
var sound18 = document.getElementById("scav18");
var sound20 = document.getElementById("scav20");

//aheadright
var sound1 = document.getElementById("scav1");
var sound13 = document.getElementById("scav13");
var sound15 = document.getElementById("scav15");
var sound21 = document.getElementById("scav21");

//left
var sound2 = document.getElementById("scav2");
var sound9 = document.getElementById("scav9");
var sound14 = document.getElementById("scav14");
var sound17 = document.getElementById("scav17");

//right
var sound3 = document.getElementById("scav3");
var sound4 = document.getElementById("scav4");
var sound7 = document.getElementById("scav7");
var sound10 = document.getElementById("scav10");
var sound12 = document.getElementById("scav12");
var sound19 = document.getElementById("scav19");


if(passedMessage =="left"){
  var sounds = new Array(sound2, sound9, sound14, sound17);
  var randomSound = Math.floor(Math.random() * 4);
  PlaySound(sounds[randomSound]);
}
else if(passedMessage =="aheadleft"){
  var sounds = new Array(sound5, sound6, sound8, sound11, sound16, sound18, sound20);
   var randomSound = Math.floor(Math.random() * 7);
  PlaySound(sounds[randomSound]);

}
else if(passedMessage =="aheadright"){
  var sounds = new Array(sound1, sound13, sound15, sound21);
  var randomSound = Math.floor(Math.random() * 4);
 PlaySound(sounds[randomSound]);

}
else if(passedMessage == "right"){
  var sounds = new Array(sound3, sound4, sound7, sound10, sound12, sound19);
  var randomSound = Math.floor(Math.random() * 6);
 
  PlaySound(sounds[randomSound]);
 
}else{
var sounds = new Array(sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13, sound14, sound15, sound16, sound17, sound18, sound19, sound20, sound21);
var randomSound = Math.floor(Math.random() * 21);
PlaySound(sounds[randomSound]);
}

};

function RaiderSounds(passedMessage){
  console.log("raider working");
//left
 var sound1 = document.getElementById("raider1");
var sound5 = document.getElementById("raider5");
//right
var sound2 = document.getElementById("raider2");
var sound4 = document.getElementById("raider4");
//aheadleft
var sound3 = document.getElementById("raider3");
//aheadright
var sound6 = document.getElementById("raider6");

if(passedMessage =="left"){
  var sounds = new Array(sound1, sound5);
  var randomSound = Math.floor(Math.random() * 2);
  PlaySound(sounds[randomSound]);
}
else if(passedMessage =="right"){
  var sounds = new Array(sound2, sound4);
   var randomSound = Math.floor(Math.random() * 2);
  PlaySound(sounds[randomSound]);
}
else if(passedMessage =="aheadleft"){ 
 PlaySound(sound3);
}
else if(passedMessage == "aheadright"){
  PlaySound(sound6);
}else{
var sounds = new Array(sound1, sound2, sound3, sound4, sound5, sound6);
var randomSound = Math.floor(Math.random() * 6);
PlaySound(sounds[randomSound]);
  }
};



function GrenadeSounds(passedMessage){
var sound1 = document.getElementById("grenade1");
var sound2 = document.getElementById("grenade2");
var sound3 = document.getElementById("grenade3");
var sounds = new Array(sound1, sound2, sound3);
var randomSound = Math.floor(Math.random() * 3);
PlaySound(sounds[randomSound]);
};

function GrenadeSoundNew(passedMessage){

//left  
var sound1 = document.getElementById("grenade4");
//leftahead
var sound4 = document.getElementById("grenade7");
var sound6 = document.getElementById("grenade9");
var sound9 = document.getElementById("grenade12");
//right
var sound2 = document.getElementById("grenade5");
var sound5 = document.getElementById("grenade8");
var sound7 = document.getElementById("grenade10");
var sound8 = document.getElementById("grenade11");
//rightahead
var sound3 = document.getElementById("grenade6");

if(passedMessage =="left"){
  PlaySound(sound1);
}
else if(passedMessage =="rightahead"){
  PlaySound(sound3);
}
else if(passedMessage =="leftahead"){ 
 var sounds = new Array(sound4, sound6, sound9);
var randomSound = Math.floor(Math.random() * 3);
PlaySound(sounds[randomSound]);
}
else if(passedMessage == "right"){
 var sounds = new Array(sound2, sound5, sound7, sound8);
var randomSound = Math.floor(Math.random() * 4);
PlaySound(sounds[randomSound]);
}else{
var sounds = new Array(sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9);
var randomSound = Math.floor(Math.random() * 9);
PlaySound(sounds[randomSound]);
}

};



function PlaySound(passedSound){
  var winSound = passedSound;
  console.log(winSound);
  winSound.volume = 0.4;
  winSound.play();
}





















