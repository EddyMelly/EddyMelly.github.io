
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
    var clean_message = DOMPurify.sanitize(message.message, { ALLOWED_TAGS: ['b'] });

    console.log(message.tags["customRewardId"]);
    // eb39f201-6c10-4204-a5ae-1c2a3c81b505

    if((message.tags["customRewardId"] ==="99c5af66-501a-43cf-b71e-903dadbc0f31") ){
    console.log("Scav sound");
    console.log(clean_message);
    ScavSounds(clean_message);
    }
    else if(message.tags["customRewardId"] ==="feff768e-40e6-4888-9fcb-5ee7ad446e87"){
    console.log("Grenade sound");
    GrenadeSoundNew(clean_message);
    }
    else if(message.tags["customRewardId"] ==="0c0e8980-291f-4145-8155-5ea0d2a80f9b" ){
    console.log("Raider sound");
    RaiderSounds(clean_message);
    }
    else if(message.tags["customRewardId"] === "eb39f201-6c10-4204-a5ae-1c2a3c81b505"){
      console.log("WICK TIME");
      JohnWick("play");
    }
    else{
    }
  })
};

function GatherElements(passedIntStart, passedIntEnd, passedName){
  var elementList = new Array;
  for(var i = passedIntStart; i < passedIntEnd+1; i++){
    var tempElement = document.getElementById(passedName+i);
    //console.log(tempElement);
    elementList.push(tempElement);
  }
return elementList;
};


function JohnWick(instruction){
  var winSound = document.getElementById("wick1");
  if(instruction === "play"){
    winSound.volume = 0.4;
  winSound.play();
  }else if(instruction ==="pause"){
    winSound.pause()
    winSound.currentTime =0;
  }
  else{}
};


function ScavSounds(passedMessage){

var scavList = new Array;
scavList = GatherElements(1,21,"scav");
var surpriseChance = Math.random() >= 0.5;


if(passedMessage =="left"){
  var sounds = new Array(scavList[1], scavList[8], scavList[13], scavList[16]);
  var randomSound = Math.floor(Math.random() * 4);
  PlaySound(sounds[randomSound]);
  if(surpriseChance === true){
    SurpriseSound("left");
  }
}
else if(passedMessage =="leftahead"){
  var sounds = new Array(scavList[4], scavList[5], scavList[7], scavList[10], scavList[15], scavList[17], scavList[19]);
   var randomSound = Math.floor(Math.random() * 7);
  PlaySound(sounds[randomSound]);
  if(surpriseChance === true){
    SurpriseSound("ahead");
  }
}
else if(passedMessage =="rightahead"){
  var sounds = new Array(scavList[0], scavList[12], scavList[14], scavList[20]);
  var randomSound = Math.floor(Math.random() * 4);
 PlaySound(sounds[randomSound]);
 if(surpriseChance === true){
    SurpriseSound("ahead");
  }
}
else if(passedMessage == "right"){
  var sounds = new Array(scavList[2], scavList[3], scavList[6], scavList[9], scavList[11], scavList[18]);
  var randomSound = Math.floor(Math.random() * 6); 
  PlaySound(sounds[randomSound]);
  if(surpriseChance === true){
    SurpriseSound("right");
  }
}
else{
var randomSound = Math.floor(Math.random() * 21);
PlaySound(scavList[randomSound]);
}
};

function SurpriseSound(direction){
  
if(direction === "left"){
  var surpriseList = new Array;
  surpriseList = GatherElements(1,4,"surpriseleft");
  var randomSound = Math.floor(Math.random() * 4);
  setTimeout(function(){
    PlaySound(surpriseList[randomSound])
    }, 1000);
}else if(direction ==="right"){
  var surpriseList = new Array;
  surpriseList = GatherElements(1,4,"surpriseright");
  var randomSound = Math.floor(Math.random() * 4);
  setTimeout(function(){
    PlaySound(surpriseList[randomSound])
    }, 1000);
}else{
   var surpriseList = new Array;
  surpriseList = GatherElements(1,4,"surprise");
  var randomSound = Math.floor(Math.random() * 4);
  setTimeout(function(){
    PlaySound(surpriseList[randomSound])
    }, 1000);
}

};



function RaiderSounds(passedMessage){
var raiderList = new Array;
raiderList = GatherElements(1,6,"raider");

if(passedMessage =="left"){
  var sounds = new Array(raiderList[0], raiderList[4]);
  var randomSound = Math.floor(Math.random() * 2);
  PlaySound(sounds[randomSound]);
}
else if(passedMessage =="right"){
  var sounds = new Array(raiderList[1], raiderList[3]);
  var randomSound = Math.floor(Math.random() * 2);
  PlaySound(sounds[randomSound]);
}
else if(passedMessage =="leftahead"){ 
  PlaySound(raiderList[2]);
}
else if(passedMessage == "rightahead"){
  PlaySound(raiderList[5]);
}else{
  
  var randomSound = Math.floor(Math.random() * 6);
  PlaySound(raiderList[randomSound]);
}
};



function GrenadeSounds(passedMessage){
var grenadeList = new Array; 
grenadeList = GatherElements(1,3,"grenade");

var sounds = new Array(grenadeList[0], grenadeList[2]);
};





function GrenadeSoundNew(passedMessage){

var grenadeList = new Array;
grenadeList = GatherElements(4,12,"grenade");

if(passedMessage =="left"){
  PlaySound(grenadeList[0]);
}
else if(passedMessage =="rightahead"){
  PlaySound(grenadeList[2]);
}
else if(passedMessage =="leftahead"){ 
  var sounds = new Array(grenadeList[3], grenadeList[5], grenadeList[8]);
  var randomSound = Math.floor(Math.random() * 3);
  PlaySound(sounds[randomSound]);
}
else if(passedMessage == "right"){
  var sounds = new Array(grenadeList[1], grenadeList[4], grenadeList[6], grenadeList[7]);
  var randomSound = Math.floor(Math.random() * 4);
  PlaySound(sounds[randomSound]);
}else{
  var randomSound = Math.floor(Math.random() * 9);
  PlaySound(grenadeList[randomSound]);
}
};



function PlaySound(passedSound){
  var winSound = passedSound;
  console.log(winSound);
  winSound.volume = 0.5;
  winSound.play();
};





















