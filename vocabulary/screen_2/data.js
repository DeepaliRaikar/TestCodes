import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";
import unitAudioManager from "../../../common_assets/audios/audio_manager";

module.exports = {
  screenTitle: {
    // ==== screenTitle data object is used for screen level audio and images ==== //
    titleImage: levelImageManager.images.screenTitle.vocabulary_lets_practice,
    titleAudio: levelAudioManager.audios.screenTitle.lets_practice_words_man_1,
    title: "Words",
    subTitle: {
      title: "Say It Together",
      textAlign: "left"

    },
    fontColor: "#333"
  },

  // ==== itext is used to give instruction text(itext) at the bottom of the screen ==== //
  "itext": "Tap the pictures to hear the words. Tap <span class='boldStyle'>RESET</span> to shuffle the pictures.",
  /* minScale is used to scale the elements
     If true : Enable scaling
     If false : Disable scaling
  */
  "minScale": true,
  // ==== scaleElements scales the element which are in it's array (id's and classes) ==== //
  "scaleElements": ["#fc_v_1 .itemborder"],
  // ==== backgroundImage provide background image to the screen ==== //
  "backgroundImg": levelImageManager.images.backgroundimage,
  // ==== spriteData contains data required to create  sprite animation ==== //
  "spriteData": [
    {
      id: 1,
      // ==== frames data object object contains animation's width, height and number of frames ==== //
      frames: {
        width: unitImageManager.sprites.updatedTable.data.frames.width,
        height: unitImageManager.sprites.updatedTable.data.frames.height,
        numFrames: unitImageManager.sprites.updatedTable.data.frames.count
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
        run: [
          0, unitImageManager.sprites.updatedTable.data.frames.count - 1,
          false
        ],
        // ==== lastframe  provides images between the first and the last element in the array ==== //
        lastframe: [
          /*
              3rd element : For repeating lastframe
                          If true : repeat lastframe
                          If false : doesn't repeat lastframe
          */
          unitImageManager.sprites.updatedTable.data.frames.count - 2,
          unitImageManager.sprites.updatedTable.data.frames.count - 1,
          false
        ]
      },
      // ==== images contains all the images used in sprite ==== //
      images: unitImageManager.sprites.updatedTable.images,
      // ==== elemId is used to provide custom element id ==== //
      elemId: "table",
      // ==== canvasId is used to provide  custom canvsas id ==== //
      canvasId: "myCanvas_0",
      // ==== audio is used to give sound to the animation ==== //
      audio: unitAudioManager.audios.warm_up.table_woman,
      // ==== scaling givesscale property to the element ==== //
      scaling: "0.4",
      // ==== label gives label for animation ==== //
      label: "Boy",
      // ==== ost is used to give onscreen text ==== //
      ost: "Hello!"
    }, {
      id: 2,
      frames: {
        width: unitImageManager.sprites.updatedChair.data.frames.width,
        height: unitImageManager.sprites.updatedChair.data.frames.height,
        numFrames: unitImageManager.sprites.updatedChair.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.updatedChair.data.frames.count - 1,
          false
        ],
        lastframe: [
          unitImageManager.sprites.updatedChair.data.frames.count - 2,
          unitImageManager.sprites.updatedChair.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.updatedChair.images,
      elemId: "chair",
      canvasId: "myCanvas_1",
      audio: unitAudioManager.audios.warm_up.chair_woman,
      scaling: "0.35",
      label: "Girl",
      ost: "Hello!"
    }, {
      id: 3,
      frames: {
        width: unitImageManager.sprites.bin.data.frames.width,
        height: unitImageManager.sprites.bin.data.frames.height,
        numFrames: unitImageManager.sprites.bin.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.bin.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.bin.images,
      elemId: "bin",
      canvasId: "myCanvas_2",
      audio: unitAudioManager.audios.warm_up.bin_woman,
      scaling: "0.4",
      label: "Girl",
      ost: "Hello!"
    }, {
      id: 4,
      frames: {
        width: unitImageManager.sprites.cupboard.data.frames.width,
        height: unitImageManager.sprites.cupboard.data.frames.height,
        numFrames: unitImageManager.sprites.cupboard.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.cupboard.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.cupboard.images,
      elemId: "cupboard",
      canvasId: "myCanvas_3",
      audio: unitAudioManager.audios.warm_up.cupboard_woman,
      label: "Girl",
      ost: "Hello!"
    }],

  "ostArr": [],
  // ===== Prepare Mode data in HTML format ====== //
  "prepareData": {
    tocTitle: "Let's Practice Words",
    //"howItWorks": "  Tap an image to hear the audio.  Tap the ‘next’ button to get a new set of words.</br><u>Notes</u>:<li>Refer to existing SEE program – lesson 1</li>",
    learningObjectives: "<li>Correctly identify words when presented with an image</li><li>Produce words with correct pronunciation</li><li>Build confidence & memorize words</li>",
    studentEngagement: "<li>Group production</li>",
    teachingProcedure: "<li>Encourage the whole class to say the words as you point to the pictures on the board, then tap the pictures to check.</li><li>Tap <span class='boldStyle'>RESET</span> and repeat.<br><u>Play a Game: Jump to the Lines</u><br>Use some colored tape to make four lines on the floor. Place a basket by the last line. Invite 3-4 students to stand at the first line and give each student a ball. When you point to the first picture on the board, students should jump to the next line as they say the word. Repeat. When students reach the last line, they can throw their balls into the basket. Tap <span class='boldStyle'>RESET</span> and invite a different group of students to play.</li>",
    videoData:[{}],
    gameActivity:"FALSE"

  },
  // ===== preloadData data object contains data used for preloading ====== //
  "preloadData": {
    "audios": [
      levelAudioManager.audios.screenTitle.vocabulary_lets_parctice_words, unitAudioManager.audios.warm_up.cupboard_woman, unitAudioManager.audios.warm_up.bin_woman, unitAudioManager.audios.warm_up.chair_woman, unitAudioManager.audios.warm_up.table_woman
    ],
    "images": [levelImageManager.images.screenTitle.vocabulary_lets_practice]
  }
};
