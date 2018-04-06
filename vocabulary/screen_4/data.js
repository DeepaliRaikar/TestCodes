import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";
import unitAudioManager from "../../../common_assets/audios/audio_manager";

module.exports = {
  screenTitle: {
    // ==== screenTitle data object is used for screen level audio and images ==== //
    titleImage: levelImageManager.images.screenTitle.vocabulary_lets_use,
    titleAudio: levelAudioManager.audios.screenTitle.lets_use_words_man_1,
    title: "Words",
    subTitle: {
      title: "Say It In a Sentence",
      textAlign: "left"
    },
    fontColor: "#333"
  },


  "title": "Let's Use Words Say It in a Sentence",
  /* minScale is used to scale the elements
     If true : Enable scaling
     If false : Disable scaling
  */
  "minScale": true,
  // ==== scaleElements scales the element which are in it's array (id's and classes) ==== //
  "scaleElements": ["#mur_arrow_m .ObjectContainer"],
  // ==== instructionText is used to give instruction text(itext) at the bottom of the screen ==== //
  "instructionText": "Tap the highlighted object to hear the sentence. Tap <span class='boldStyle'>NEXT</span> to continue.",
  // ==== backgroundImage provide background image to the screen ==== //
  "backgroundImg": levelImageManager.backgroundImg,
  /* questionText shows question text at the top middle of the screen
     If true : Enable question text
     If false : Disable disable question text
  */
  "questionText": false,
  // ==== items arrau contains images other than sprites ==== //
  "items": [],
  // ==== svgData contains svg data ==== //
  "svgData": "",
  // ==== spriteData contains data required to create  sprite animation ==== //
  "spriteData": [
    {
      id: 1,
      frames: {
        // ==== frames data object object contains animation's width, height and number of frames ==== //
        width: unitImageManager.sprites.updatedTable.data.frames.width,
        height: unitImageManager.sprites.updatedTable.data.frames.height,
        numFrames: unitImageManager.sprites.updatedTable.data.frames.count
      },
      // ==== animations data object contains information of animations to play ==== //
      animations: {
        run: [
          /*
              1st element : screen number for setting first frame
              2nd element : screen number for setting last frames
              3rd element : For playing animation in infinite loop
                          If true : animation plays in infinite loop
                          If false : animation doesn't plays in infinite loop
          */
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

      // ==== CSS for canvasParent div ==== //
      styles: {
        "width": "100%",
        "height": "100%",
        "transform-origin": "left center 0px",
        "bottom": "31%",
        "left": "6%",
        "position": "absolute",
        "transform": "scale(0.58) translate(-50%, -50%)"
      },
      // ==== CSS for div containing highlited/glowing image ==== //
      glowimg: {
        "top": "-10%",
        "left": "7%",
        "transform-origin": "top left",
        "position": "absolute",
        "transform": "scale(0.58) translate(-50%, -50%)",
        "visibility": "hidden"
      },
      // ==== CSS for parent div ==== //
      parentStyles: {
        "width": "380px",
        "height": "350px",
        "transform-origin": "left center 0px",
        "bottom": "10%",
        "left": "10%",
        "position": "absolute",
        "z-index": "1",
        "cursor": "pointer"
      },
      // ==== highlighted image of the sprite ==== //
      highlight: levelImageManager.images.vocabulary.table_outline,
      // ==== images contains all the images used in sprite ==== //
      images: unitImageManager.sprites.updatedTable.images,
      // ==== elemId is used to provide custom element id ==== //
      elemId: "table",
      // ==== canvasId is used to provide  custom canvsas id ==== //
      canvasId: "myCanvas_0",
      // ==== audio is used to give sound to the animation ==== //
      audio: unitAudioManager.audios.vocabulary.a_table_woman_1,
      // ==== label gives label for animation ==== //
      label: "Table",
      // ==== ost is used to give onscreen text ==== //
      ost: "Table!",
      // ==== To give scaling property ==== //
      scaling: "1"
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
      styles: {
        "display": "block",
        "top": "14%",
        "right": "25%",
        "transform-origin": "left top 0px",
        "transform": "scale(0.51) translate(-50%, -50%)"
      },
      glowimg: {
        "position": "absolute",
        "height": "165px",
        "width": "133px",
        "bottom": "60%",
        "transform-origin": "left top 0px",
        "left": "-36.6%",
        "transform": "scale(0.51) translate(-50%, -50%)",
        "visibility": "hidden"
      },
      parentStyles: {
        "position": "absolute",
        "z-index": "1",
        "bottom": "13%",
        "left": "37%",
        "height": "405px",
        "width": "245px"
      },
      highlight: levelImageManager.images.vocabulary.chair2_outline,
      images: unitImageManager.sprites.updatedChair.images,
      elemId: "chair",
      canvasId: "myCanvas_1",
      audio: unitAudioManager.audios.vocabulary.a_chair_woman_1,
      label: "Chair",
      ost: "Chair!",
      scaling: "1"
    }, {
      id: 3,
      frames: {
        width: unitImageManager.sprites.bin.data.frames.width,
        height: unitImageManager.sprites.bin.data.frames.height,
        numFrames: unitImageManager.sprites.bin.data.frames.count
      },
      animations: {
        lastframe: [
          13, 14, false
        ],
        run: [
          7, unitImageManager.sprites.bin.data.frames.count - 1,
          false
        ]
      },
      styles: {
        "width": "100%",
        "height": "100%",
        "bottom": "34%",
        "transform-origin": "left top 0px",
        "right": "62%",
        "z-index": "1",
        "transform": "scale(0.28) translate(-50%, -50%)"
      },
      glowimg: {
        "transform-origin": "left top 0px",
        "position": "absolute",
        "bottom": "36%",
        "right": "61%",
        "transform": "scale(0.28) translate(-50%, -50%)",
        "visibility": "hidden"
      },
      parentStyles: {
        "height": "148px",
        "width": "118px",
        "transform-origin": "right bottom 0px",
        "bottom": "20%",
        "right": "36%",
        "position": "absolute"
      },
      highlight: levelImageManager.images.vocabulary.bin_outline,
      images: unitImageManager.sprites.bin.images,
      elemId: "bin",
      canvasId: "myCanvas_2",
      audio: unitAudioManager.audios.vocabulary.a_bin_woman_1,
      label: "Bin",
      ost: "Bin!",
      scaling: "1"
    }, {
      id: 4,
      frames: {
        width: unitImageManager.sprites.cupboard2.data.frames.width,
        height: unitImageManager.sprites.cupboard2.data.frames.height,
        numFrames: unitImageManager.sprites.cupboard2.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.cupboard2.data.frames.count - 1,
          false
        ]
      },
      styles: {
        "width": "100%",
        "height": "100%",
        "transform-origin": "left center 0px",
        "bottom": "-2%",
        "left": "-13.4%",
        "position": "absolute",
        "transform": "scale(0.64) translate(-50%, -50%)"
      },
      glowimg: {
        "bottom": "-20%",
        "left": "-13.4%",
        "transform-origin": "left top 0px",
        "position": "absolute",
        "transform": "scale(0.64) translate(-50%, -50%)",
        "visibility": "hidden"
      },
      parentStyles: {
        "width": "375px",
        "height": "505px",
        "transform-origin": "left center 0px",
        "bottom": "17%",
        "right": "11%",
        "position": "absolute",
        "z-index": "1"
      },
      highlight: levelImageManager.images.vocabulary.cupboard_outline,
      audio: unitAudioManager.audios.vocabulary.a_cupboard_woman_1,
      images: unitImageManager.sprites.cupboard2.images,
      elemId: "cupboard",
      canvasId: "myCanvas_3",
      label: "Cupboard",
      ost: "Cupboard!",
      scaling: "1"
    }
  ],

  // ===== ostArr array contains on screen text ====== //
  "ostArr": [],
  // ===== Prepare Mode data in HTML format ====== //
  "prepareData": {
    tocTitle: "Let's Use Words",
    //"howItWorks": " Tap the question to hear the audio. Tap any picture to hear the sentence. </br><u>Notes</u> <li>Week 1 will only feature four words </li><li>Can be the same mural as used in the Warm-up section (but here with active clickable spots for audio) </li> ",
    learningObjectives: " <li>Understand the meaning of the target sentence structure</li><li>Use words in the target sentence structure</li> ",
    studentEngagement: " <li>Whole-class listen and repeat</li><li>Whole-class production</li><li>Group/individual production</li> ",
    teachingProcedure: " <li>Point to the highlighted picture and ask your co-teacher: 'What's this?'.</li><li>Your co-teacher should use the target language to answer (e.g. 'A table.'), then tap the image to check. Have students repeat the sentence.</li><li>Tap <span class='boldStyle'>NEXT</span> to highlight a different word. Ask students: 'What's this?'.</li><li>Click the picture to check and have the whole class repeat the sentence.</li><li>Continue.</li><li>As students develop confidence, have the whole class produce the sentences without listening first.</li><li>Finally, have students take turns to say the sentences individually.</li>",
    videoData: [
      {
        
      }
    ],
    gameActivity:"FALSE"

  },
  // ===== preloadData data object contains data used for preloading ====== //
  "preloadData": {
    "audios": [
      levelAudioManager.audios.screenTitle.vocabulary_lets_parctice_words,
      unitAudioManager.audios.vocabulary.table,
      unitAudioManager.audios.vocabulary.chair,
      unitAudioManager.audios.vocabulary.dustbin,
      unitAudioManager.audios.vocabulary.cupboard
    ],
    "videos": [],
    "images": [
      levelImageManager.images.vocabulary.cupboard_glow,
      levelImageManager.images.vocabulary.updated_cupboard,
      levelImageManager.images.vocabulary.bin_glow_1,
      levelImageManager.images.vocabulary.updated_bin,
      levelImageManager.images.vocabulary.chair_glow,
      levelImageManager.images.vocabulary.updated_chair,
      levelImageManager.images.vocabulary.table_glow,
      levelImageManager.images.vocabulary.updated_table,
      levelImageManager.backgroundImg,
      levelImageManager.images.screenTitle.vocabulary_lets_use,
      levelImageManager.images.vocabulary.table_outline,
      levelImageManager.images.vocabulary.chair2_outline,
      levelImageManager.images.vocabulary.bin_outline,
      levelImageManager.images.vocabulary.cupboard_outline,
      require("./assets/images/vocabulary_4_bg.jpg")
    ]
  }
};
