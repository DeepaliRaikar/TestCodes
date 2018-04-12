{
    "Level": "L2",
    "Unit": "U2",
    "TOC Text": "2. Let's Practice Sentences",
    "Instruction Text": "Tap PLAY to hear the song.",
    "Learning Objectives": "•  Repeated practice of dialogue and language structures\r\n•  Build confidence & memorize language structures",
    "Student Engagement": "• Whole-class production",
    "Teaching Procedure": "•  Play the song and sing along, while doing simple actions.\r\n•  Encourage students to join in when they feel confident to do so.\r\n•  Sing the song as a whole class (1-2 times).\r\n",
    "Video": "*"
  },
  // ===== preloadData data object contains data used for preloading ====== //
	oading ====== //
	},
    fontColor: "#333333"
  },
  // ===== Need to add title ======
  "title": "Sing Together",
  // ===== Elements that needs to be scaled ======
  "minScale": false,"scaleElements": ["#vid_ply_m .spriteObject", "#vid_ply_m .btn_play"],

  "backgroundImage":levelImageManager.images.warm_up_screen1_bg,

  "thmbImg":levelImageManager.images.warm_up_screen1_thmb,
  "video_scr":levelImageManager.images.speaking.thumbImg,
  "btncolor": "#33bb72",
  "play_button": levelImageManager.images.warm_up.play_button,
  "instructionText": "Tap <span class='boldStyle'>PLAY</span> to hear the song.",
  "videoDetails": {
    "video": require("./assets/videos/l1_u1_w1_spe_02.mp4"),
    "poster": require("./assets/images/l1_u1_w1_spe_02.jpg"),
  },
  // ===== Variable in place of "bird" to be updated ======
  "spriteData": [
    {
      id:1,
      frames: {
        width: unitImageManager.sprites.bird.data.frames.width,
        height: unitImageManager.sprites.bird.data.frames.height,
        numFrames: unitImageManager.sprites.bird.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.bird.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.bird.images,
      // ===== Please provide custom element ID, recoment to use single word without capital ======
      elemId: "bird",
      // ===== Please provide custom canvas ID if need to access for processing ======
      canvasId: "myCanvas_0",
      audio: levelAudioManager.audios.warm_up.bird,
      label: "Bird"
    }
  ],
  "ostArr": [],
  // ===== Prepare Mode data in HTML format ======
  "prepareData":{
    "Level": "L1",
    "Unit": "U1",
    "TOC Text": "2. Let's Practice Sentences",
    "Instruction Text": "Tap PLAY to hear the song.",
    "Learning Objectives": "•  Repeated practice of dialogue and language structures\r\n•  Build confidence & memorize language structures",
    "Student Engagement": "• Whole-class production",
    "Teaching Procedure": "•  Play the song and sing along, while doing simple actions.\r\n•  Encourage students to join in when they feel confident to do so.\r\n•  Sing the song as a whole class (1-2 times).\r\n",
    "Video": "*"
  },
  // ===== preloadData data object contains data used for preloading ====== //
	"preloadData": {
    "audios": [],
    "images": [levelImageManager.images.warm_up_screen1_thmb,levelImageManager.images.warm_up_screen1_bg]
  }
};
