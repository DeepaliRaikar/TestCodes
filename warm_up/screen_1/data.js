{
    "Level": "L2",
    "Unit": "U2",
    "TOC Text": "1. Let's Remember Songs",
    "Instruction Text": "Tap PLAY to hear the song.",
    "Learning Objectives": "•  Build confidence\r\n",
    "Student Engagement": "•  Whole-class production",
    "Teaching Procedure": "•  Sing the song and encourage students to join in when they feel comfortable."
  },
  // ===== preloadData data object contains data used for preloading ====== //
	oading ====== //
	ect is used for screen level audio and images ==== //
  screenTitle: {
    titleImage: levelImageManager.images.screenTitle.warm_up_lets_remember,
    titleAudio: levelAudioManager.audios.screenTitle.lets_remember_songs_man_1,
    title: "Songs",
    subTitle: {
      title: "Sing Together",
      textAlign: "left"
    },
    fontColor: "#333333"
  },
  // ===== Need to add title ======
  "title": "Sing Together",
  /* minScale is used to scale the elements
     If true : Enable scaling
     If false : Disable scaling
  */
  "minScale": false,
  // ==== scaleElements scales the element which are in it's array (id's and classes) ==== //
  "scaleElements": ["#vid_ply_m .btn_play"],
  // ==== videoDetails contains video and it's image ==== //
  "videoDetails": {
    "video": levelVideoManager.videos.warm_up_01,
    "poster": levelImageManager.images.warm_up.screen_1_bg
  },
  // ==== backgroundImage provide background image to the screen ==== //
  "backgroundImage": levelImageManager.images.warm_up_screen1_bg,
  // ==== video_scr gives video in template ==== //
  "video_scr": levelImageManager.images.warm_up.screen_1_bg,
  "btncolor": "#6b2d80",
  "play_button": levelImageManager.images.warm_up.play_button,
  "instructionText": "Tap <span class='boldStyle'>PLAY</span> to hear the song.",

  // ===== ostArr array contains on screen text ====== //
  "ostArr": [],
  // ===== Prepare Mode data in HTML format ====== //
  "prepareData":{
    "Level": "L1",
    "Unit": "U1",
    "TOC Text": "1. Let's Remember Songs",
    "Instruction Text": "Tap PLAY to hear the song.",
    "Learning Objectives": "•  Build confidence\r\n",
    "Student Engagement": "•  Whole-class production",
    "Teaching Procedure": "•  Sing the song and encourage students to join in when they feel comfortable."
  },
  // ===== preloadData data object contains data used for preloading ====== //
	"preloadData": {
    "audios": [levelAudioManager.audios.screenTitle.lets_remember_songs_man_1],
    "images": [levelImageManager.images.screenTitle.warm_up_lets_remember,levelImageManager.images.warm_up.screen_1_bg, levelVideoManager.videos.warm_up_01]
  }
};
