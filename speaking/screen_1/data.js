import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";
module.exports = {
  screenTitle: {
    // ==== screenTitle data object is used for screen level audio and images ==== //
    titleImage: levelImageManager.images.screenTitle.speaking_lets_learn,
    titleAudio: levelAudioManager.audios.screenTitle.speaking_lets_learn_sentences,
    title: "Sentences",
    subTitle: {
      title: "Listen and Repeat",
      textAlign: "left"
    },
    fontColor: "#333333"
  },
  // ==== To load iframe ==== //
  "htmlSrc": "src/courses/level_1/unit_1/week_1/speaking/screen_1/iframe_data/html_canvas_speaking_test.html",
  /* minScale is used to scale the elements
     If true : Enable scaling
     If false : Disable scaling
  */
  "minScale": true,
  /* cloud animation
     If true : Enable cloud animation
     If false : Disable cloud animation
  */
  "clouds": true,
  // ==== scaleElements scales the element which are in it's array (id's and classes) ==== //
  "scaleElements": ["#spch_bubl_m .sprite","#spch_bubl_m .clouds","#spch_bubl_m .playButtonContainer","#spch_bubl_m .loading"],
  "frameNumber":[263,498,701],
  // ==== instText is used to give instruction text(itext) at the bottom of the screen ==== //
  "instText": "Tap <span class='boldStyle'>PLAY</span> to start. Tap <span class='boldStyle'>NEXT</span> for more conversations.",
  // ==== backgroundImage provides background image to the screen ==== //
  "backgroundImage": levelImageManager.images.speaking.backgroundimage,
  // ==== spriteData contains data required to create  sprite animation ==== //
  "spriteData": [
    {
      id: 0,
      // ==== frames data object object contains animation's width, height and number of frames ==== //
      frames: {
        width: unitImageManager.sprites.samStandData.data.frames.width,
        height: unitImageManager.sprites.samStandData.data.frames.height,
        numFrames: unitImageManager.sprites.samStandData.data.frames.count
      },
      // ==== animations data object contains information of animations to play ==== //
      animations: {
        /*
              1st element : screen number for setting first frame
              2nd element : screen number for setting last frames
              3rd element : For playing animation in infinite loop
                          If true : animation plays in infinite loop
                          If false : animation doesn't plays in infinite loop
          */
        stand_0: [0, unitImageManager.sprites.samStandData.data.frames.count - 1, true]

      },
      // ==== images contains all the images used in sprite ==== //
      images: unitImageManager.sprites.samStandData.images,
      // ==== elemId is used to provide custom element id ==== //
      elemId: "sam",
      // ==== audio is used to give sound to the animation ==== //
      canvasId: "myCanvas_0",
      // ==== label gives label for animation ==== //
      label: "sam",
      // ==== ost is used to give onscreen text ==== //
      ost: "Hello!"
    }

  ],

  // ===== ostArr array contains on screen text ====== //
  "ostArr": ["",""],
  // ===== ostAudio array contains on screen text audio ====== //
  "ostAudio": levelAudioManager.audios.speaking.female,

  // ===== Prepare Mode data in HTML format ====== //
  "prepareData": {
    tocTitle: "Let's Learn Sentences",
    //"howItWorks": " Tap the speech bubble to listen to the sentence. Tap the character to listen to only the name of that character.  </br><u>Notes</u> <li>Dialogues should appear in the sequence scripted. </li> ",
    learningObjectives: "<li>Understand the meaning of the dialogue and language structures</li><li> Listen to and repeat the <i>response</i> part of the dialogue with correct pronunciation and intonation</li>",
    studentEngagement: "<li>Look and listen</li><li> Whole-class listen and repeat</li>",
    teachingProcedure: "<li>Allow students to listen to the dialogue.</li><li>Use actions and expressive voice to help students understand the meaning of the language.</li><li>Encourage students to repeat the response part of the dialogue, with actions.</li><li>Tap <span class='boldStyle'>NEXT</span> for more dialogues.</li>",
    videoData: [{}],
    gameActivity:"FALSE"

  },
  // ===== preloadData data object contains data used for preloading ====== //
  "preloadData": {
    "audios": [],
    "videos": [],
    "images": [levelImageManager.images.speaking.backgroundimage]
  }
};
