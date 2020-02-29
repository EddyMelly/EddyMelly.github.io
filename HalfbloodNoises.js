
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

  if(message.tags["customRewardId"] ==="99c5af66-501a-43cf-b71e-903dadbc0f31" ){
    console.log("Scav sound");
    ScavSounds();
    
  }else if(message.tags["customRewardId"] ==="feff768e-40e6-4888-9fcb-5ee7ad446e87"){
   console.log("Grenade sound");
    GrenadeSoundNew();
  }
  else if(message.tags["customRewardId"] ==="0c0e8980-291f-4145-8155-5ea0d2a80f9b"){
    console.log("Raider sound");
    RaiderSounds();
  }
  else{
  }

  })
  };



function ScavSounds(){
  console.log("working2");

var sound1 = document.getElementById("scav1");
var sound2 = document.getElementById("scav2");
var sound3 = document.getElementById("scav3");
var sound4 = document.getElementById("scav4");
var sound5 = document.getElementById("scav5");
var sound6 = document.getElementById("scav6");
var sound7 = document.getElementById("scav7");
var sound8 = document.getElementById("scav8");
var sound9 = document.getElementById("scav9");
var sound10 = document.getElementById("scav10");
var sound11 = document.getElementById("scav11");
var sound12 = document.getElementById("scav12");
var sound13 = document.getElementById("scav13");
var sound14 = document.getElementById("scav14");
var sound15 = document.getElementById("scav15");
var sound16 = document.getElementById("scav16");
var sound17 = document.getElementById("scav17");
var sound18 = document.getElementById("scav18");
var sound19 = document.getElementById("scav19");
var sound20 = document.getElementById("scav20");
var sound21 = document.getElementById("scav21");
var sounds = new Array(sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13, sound14, sound15, sound16, sound17, sound18, sound19, sound20, sound21);
var randomSound = Math.floor(Math.random() * 21);
var winSound = sounds[randomSound];
console.log(winSound);
winSound.volume = 0.5;
winSound.play();
};

function RaiderSounds(){
  console.log("raider working");
 var sound1 = document.getElementById("raider1");
var sound2 = document.getElementById("raider2");
var sound3 = document.getElementById("raider3");
var sound4 = document.getElementById("raider4");
var sound5 = document.getElementById("raider5");


var sounds = new Array(sound1, sound2, sound3, sound4, sound5);
var randomSound = Math.floor(Math.random() * 5);
var winSound = sounds[randomSound];
console.log(winSound);
winSound.volume = 0.5;
winSound.play();
};



function GrenadeSounds(){
  var sound1 = document.getElementById("grenade1");
var sound2 = document.getElementById("grenade2");
var sound3 = document.getElementById("grenade3");

var sounds = new Array(sound1, sound2, sound3);
var randomSound = Math.floor(Math.random() * 3);
var winSound = sounds[randomSound];
console.log(winSound);
winSound.volume = 0.5;
winSound.play();
}

function GrenadeSoundNew(){
var winSound = document.getElementById("grenade4");

console.log(winSound);
winSound.volume = 0.5;
winSound.play();
}





















