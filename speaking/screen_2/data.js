import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";
import levelVideoManager from "../../../../common_assets/videos/video_manager";
module.exports = {
  screenTitle: {
    titleImage: levelImageManager.images.screenTitle.speaking_lets_practice,
    titleAudio: levelAudioManager.audios.screenTitle.speaking_lets_practice_sentences,
    title: "Sentences",
    subTitle: {
      title: "Sing Together",
      textAlign: "left"
      // textAlign: "left|right|center"
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
  "prepareData": {
    tocTitle: "Let's Practice Sentences",
    //"howItWorks":" Tap to play the song. </br>Notes <li>Need to create some way to stop, pause and play the song while it is playing. </li> ",
    learningObjectives:"<li>Repeated practice of dialogue and language structures used</li><li>Build confidence & memorize language structures</li>",
    studentEngagement:"<li>Whole-class production</li>",
    teachingProcedure:"<li>Play the song and sing along, while doing simple actions.</li><li>Encourage students to join in when they feel confident to do so.</li><li>Sing the song as a whole class (1-2 times).</li>",
    videoData: [
      {
        // "video": require("./assets/videos/intro_01.mp4"),
        // "poster": require("./assets/images/scr_33_summary_image_01.png")
      }
    ],
    gameActivity:"FALSE"
  },
  // ===== Preloading the data ======
  "preloadData": {
    "audios": [],
    "images": [levelImageManager.images.warm_up_screen1_thmb,levelImageManager.images.warm_up_screen1_bg]
  }
};
