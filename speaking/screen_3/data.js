import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";
module.exports = {
  screenTitle: {
    // ==== screenTitle data object is used for screen level audio and images ====
    titleImage: levelImageManager.images.screenTitle.speaking_lets_practice,
    titleAudio: levelAudioManager.audios.screenTitle.speaking_lets_practice_sentences,
    title: "Sentences",
    subTitle: {
      title: "Say It Together",
      textAlign: "left"
    },
    fontColor: "#333333"
  },

  // ==== To load iframe ====
  "htmlSrc": "src/courses/level_1/unit_1/week_1/speaking/screen_3/iframe_data/speech_bubble_answer_ancc.html",
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
  "frameNumber": [
    222, 392, 563
  ],
  // ==== instText is used to give instruction text(itext) at the bottom of the screen ====
  "instText": "Tap <span class='boldStyle'>PLAY</span> to start. Tap the characters to hear what they say.",
  // ==== scaleElements scales the element which are in it's array (id's and classes) ====
  "scaleElements": [
    "#spch_bubl_ans_m .sprite", "#spch_bubl_ans_m .clouds", "#spch_bubl_ans_m .playButtonContainer", "#spch_bubl_ans_m .loading"
  ],
  // ==== backgroundImage provides background image to the screen ====
  "backgroundImage": levelImageManager.images.speaking.backgroundimage,
  // ==== spriteData contains data required to create  sprite animation ====
  "spriteData": [
    {
      id: 0,
      // ==== frames data object object contains animation's width, height and number of frames ====
      frames: {
        width: unitImageManager.sprites.samStandData.data.frames.width,
        height: unitImageManager.sprites.samStandData.data.frames.height,
        numFrames: unitImageManager.sprites.samStandData.data.frames.count
      },
      // ==== animations data object contains information of animations to play ====
      animations: {
        /*
              1st element : screen number for setting first frame
              2nd element : screen number for setting last frames
              3rd element : For playing animation in infinite loop
                          If true : animation plays in infinite loop
                          If false : animation doesn't plays in infinite loop
          */
        stand_0: [
          0, unitImageManager.sprites.samStandData.data.frames.count - 1,
          true
        ]
      },
      // ==== images contains all the images used in sprite ====
      images: unitImageManager.sprites.samStandData.images,
      // ==== elemId is used to provide custom element id ====
      elemId: "sam",
      // ==== audio is used to give sound to the animation ====
      canvasId: "myCanvas_0",
      // ==== label gives label for animation ====
      label: "sam",
      // ==== ost is used to give onscreen text ====
      ost: "Hello!"
    }

  ],

  // ===== ostArr array contains on screen text ======
  "ostArr": [
    "", ""
  ],
  // ===== ostAudio array contains on screen text audio ======
  "ostAudio": levelAudioManager.audios.speaking.female,

  // ===== Prepare Mode data in HTML format ======
  "prepareData": {
    tocTitle: "Let's Practice Sentences",
    //"howItWorks": " Tap the speech bubble to listen to the sentence. Tap the character to listen to only the name of that character.  </br><u>Notes</u> <li>Dialogues should appear in the sequence scripted. </li> ",
    learningObjectives: "<li><i>Respond</i> to questions with correct pronunciation and language structures</li><li>Develop confidence and fluency in spoken language</li>",
    studentEngagement: "<li>Whole-class production</li><li>Group production</li>",
    teachingProcedure: "<li>Have students listen to the question, then guide them to say the correct response (as a whole class). Click the character (or speech bubble) to check.</li><li>Click <span class='boldStyle'>NEXT</span> and repeat. Continue until students show enough confidence to play a game.<br><u>Play a game: Telephone Race</u><br>Divide the class into two teams, with each team sitting in a line. One teacher guides each team (both teams play at the same time). Whisper the sentence to the first student in the line (e.g. ‘My name is Tom’). That student then turns and whispers it to their neighbor, and so on, down the line. When the sentence reaches the last student in the line, they should shout out the sentence and run to the board to touch the character. After one round, have students shuffle the in their seats, so that a different student can be the last in the line. <br>NOTE: The first time you play the game, be sure to model how to play first.</li>",
    videoData: [{}],
    gameActivity:"FALSE"
  },
  // ===== preloadData data object contains data used for preloading ======
  "preloadData": {
    "audios": [],
    "videos": [],
    "images": [levelImageManager.images.speaking.backgroundimage]
  }
};
