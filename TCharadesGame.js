
var isConnected = false;
var connectedChannel = ""


const {
  chat,
  api
} = new TwitchJs({
  log: { enabled: false },
});

function StartGame() {
  ConnectTwitchChat();
};

function DisconnectTwitchChat(){
chat.disconnect();
document.getElementById("status").innerHTML = "disconnected";
  };



function ConnectTwitchChat() {
  const channel = "halfbloood";

  


    // Connect to Twitch 
    
    chat.connect().then(() => {
      chat.join(channel).then(() => {
        isConnected = true;
        connectedChannel = channel;
        document.getElementById("status").innerHTML = "connected";
        console.log("connected boy updated2");
        document.getElementById("connect_btn").style.background = "#32CD32"
      
      }).catch(function(err) {
        console.log(err);
        document.getElementById("status").innerHTML = "Error: Edgar fucked up";
      })
    }).catch(function(err) {
      console.log(err);
      document.getElementById("status").innerHTML = "Error: Cant connect";
    });

    chat.on('*', message => {
  if(message.tags["customRewardId"] ==="f5929bb4-198e-43e2-9542-da16ef3a3301" ){
    console.log("yo check this out");
    var clean_message = DOMPurify.sanitize(message.message, { ALLOWED_TAGS: ['b'] })
    document.getElementById("wb_output").innerHTML = ("<strong style=\"color:" + message.tags["color"] + "; \">" + message.username + "</strong>: " + clean_message);
    TestSounds();

  }else{
    console.log("not the one")
  }

})

  };








function TestSounds(){
  console.log("working2");
var sound1 = document.getElementById("grenade1");
var sound2 = document.getElementById("grenade2");
var sound3 = document.getElementById("grenade3");
var sound4 = document.getElementById("scav1");
var sound5 = document.getElementById("scav2");
var sound6 = document.getElementById("scav3");
var sound7 = document.getElementById("scav4");
var sound8 = document.getElementById("scav5");
var sound9 = document.getElementById("scav6");
var sound10 = document.getElementById("scav7");
var sound11 = document.getElementById("scav8");
var sound12 = document.getElementById("scav9");
var sound13 = document.getElementById("scav10");
var sound14 = document.getElementById("scav11");
var sound15 = document.getElementById("scav12");
var sound16 = document.getElementById("scav13");
var sound17 = document.getElementById("scav14");
var sound18 = document.getElementById("scav15");
var sound19 = document.getElementById("scav16");
var sound20 = document.getElementById("scav17");
var sound21 = document.getElementById("scav18");
var sound22 = document.getElementById("scav19");
var sound23 = document.getElementById("scav20");
var sound24 = document.getElementById("scav21");
var sounds = new Array(sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13, sound14, sound15, sound16, sound17, sound18, sound19, sound20, sound21, sound22, sound23, sound24);
var randomSound = Math.floor(Math.random() * 23);
var winSound = sounds[randomSound];
console.log(winSound);
winSound.volume = 0.5;
winSound.play();
};



















