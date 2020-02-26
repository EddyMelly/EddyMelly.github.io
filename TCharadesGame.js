const MAX_REPEAT_OF_WORDS = 30;

var isConnected = false;
var connectedChannel = ""

var display_ChosenWord = "--Game Has Not Started--";
var chosenWord = "";
var image_ChosenWord = "";
var wordFound = false;
var intervalTimer = null;
var gameFailed;
var list_of_categories = [];

var pop_window = null;



const {
  chat,
  api
} = new TwitchJs({
  log: { enabled: false },
});

function StartGame() {
  ConnectTwitchChat();
};



function ConnectTwitchChat() {
  const channel = "halfbloood";

  

   // const handleMessage = message => {
    //    if (message.event === "PRIVMSG") {
    //      if (!wordFound && message.message != null) {
     //       if (!gameFailed) {
     //         var clean_message = DOMPurify.sanitize(message.message, {ALLOWED_TAGS: ['b']})
    //          document.getElementById("wb_output").innerHTML = ("<strong style=\"color:" + message.tags["color"] + "; \">" + message.username + "</strong>: " + clean_message);
    //          var regex_f_p = document.getElementById("first_word_detect_box").checked ? "^" : "";
     //         if (message.message.toLowerCase().search("\\b" + regex_f_p + chosenWord + "\\b") != -1) {
    //            WordGuessed();
      //        }

     //       }
    //      }
    //    };

     // }
      // Listen for all events.
    //chat.on(TwitchJs.Chat.Events.ALL, handleMessage);

    // Connect ...
    chat.connect().then(() => {
      chat.join(channel).then(() => {
        isConnected = true;
        connectedChannel = channel;
        document.getElementById("theWord").innerHTML = "connected";
        console.log("connected boy updated");
       // NextRound();
      }).catch(function(err) {
        console.log(err);
        document.getElementById("theWord").innerHTML = "Error: Edgar fucked up";
      })
    }).catch(function(err) {
      console.log(err);
      document.getElementById("theWord").innerHTML = "Error: Cant connect";
    });

    chat.on('*', message => {
  if(message.tags["customRewardId"] ==="f5929bb4-198e-43e2-9542-da16ef3a3301" ){
    console.log("yo check this out");
  }else{
    console.log("not the one")
  }

})

  };

function StartTimer(duration) {
  var timer = duration,
    minutes, seconds;

  var runner = function() {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);
    // console.log(pop_window);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("timer_ouput").innerHTML = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = 0;
      WordNotGuessed();
    }
  };
  runner();
  intervalTimer = setInterval(runner, 1000);
}

function StopTimer() {
  if (intervalTimer != null) {
    clearInterval(intervalTimer);
  }
}



function WordGuessed() {
  console.log("WORD GUEESED!");
  wordFound = true;
  document.getElementById("timer_ouput").style.color = "green";
  var winSound = document.getElementById("kids_hooray");
  winSound.volume = 0.5;
  
  winSound.play();
  GameEnd();
}

function TestSounds(){
  console.log("working");
var sound1 = document.getElementById("kids_hooray");
var sound2 = document.getElementById("lose_s");
var sound3 = document.getElementById("btn_click");

var sounds = new Array(sound1, sound2, sound3);
var randomSound = Math.floor(Math.random() * 3);
var winSound = sounds[randomSound];
console.log(winSound);
winSound.volume = 0.5;
winSound.play();
}



















