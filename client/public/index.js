// 2. This code loads the IFrame Player API code asynchronously.
// var tag = document.createElement("script");

// tag.async = "async";
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    console.log("onYouTubeIframeAPIReady");
  player = new YT.Player("player", {
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.


// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function stopVideo() {
    console.log("stop");
  player.stopVideo();
}

function onPlayerReady(event) {
    console.log("onPlayerReady");
    document.getElementsByClassName('player').style.borderColor = '#FF6D00';
  }
  function changeBorderColor(playerStatus) {
      console.log("changeBorderColor", playerStatus);
    var color;
    if (playerStatus == -1) {
      console.log("-1");
      color = "#37474F"; // unstarted = gray
    } else if (playerStatus == 0) {
      console.log("0");
      color = "#FFFF00"; // ended = yellow
    } else if (playerStatus == 1) {
      console.log("1");
      color = "#33691E"; // playing = green
    } else if (playerStatus == 2) {
      console.log("2");
      color = "#DD2C00"; // paused = red
    } else if (playerStatus == 3) {
      console.log("3");
      color = "#AA00FF"; // buffering = purple
    } else if (playerStatus == 5) {
      console.log("5");
      color = "#FF6DOO"; // video cued = orange
    }
    if (color) {
      document.getElementsByClassName('player').style.borderColor = color;
    }
  }
  function onPlayerStateChange(event) {
    console.log("onPlayerStateChange: ", event.data)
    changeBorderColor(event.data);
  }
