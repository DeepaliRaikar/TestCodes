import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";

module.exports = {
  // ==== screenTitle data object is used for screen level audio and images ==== //
  screenTitle: {
    titleImage: levelImageManager.images.screenTitle.writing_lets_learn,
    titleAudio: levelAudioManager.audios.screenTitle.writing_lets_learn_big_and_small_letters,
    title: "Big and Small Letters",
    subTitle: {
      title: "Look, Listen and Do It Together",
      textAlign: "left"
    },
    fontColor: "#333333"
  },

  /* minScale is used to scale the elements
     If true : Enable scaling
     If false : Disable scaling
  */
  "minScale": true,
  // ==== scaleElements scales the element which are in it's array (id's and classes) ==== //
  "scaleElements": ["#write_letr_m #writing_board"],
  // ==== backgroundImg provides background image ==== //
  "backgroundImg": levelImageManager.images.backgroundimage,
  // ==== boardData data object contains data of board ==== //
  "boardData": {
    bgImg: [require("./assets/images/l1_u1_w1_wri_02.png")],
    button: [
      {
        text: "Pen",
        img: [require("./assets/images/lets_learn_big_and_small_letters_small_m_01.png")]
      }, {
        text: "Fun",
        img: [require("./assets/images/car_icon.png")]

      }
    ]
  },
  // ==== instructionText is used to give instruction text(itext) at the bottom of the screen ==== //
  "instructionText": "Tap the letters to see the strokes. Tap <span class='boldStyle'>FUN</span> to change the mode.",
  // ==== spriteData contains data required to create  sprite animation ==== //
  "spriteData": [
    {
      id: 0,
      // ==== frames data object object contains animation's width, height and number of frames ==== //
      frames: {
        width: unitImageManager.sprites.funModeBigMStrokeData.data.frames.width,
        height: unitImageManager.sprites.funModeBigMStrokeData.data.frames.height,
        numFrames: unitImageManager.sprites.funModeBigMStrokeData.data.frames.count
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
          8,
          unitImageManager.sprites.funModeBigMStrokeData.data.frames.count - 1,
          false
        ],
        lastframe:[1,1,false],
      },
      lastFrame: true,
      // ==== images contains all the images used in sprite ==== //
      images: unitImageManager.sprites.funModeBigMStrokeData.images,
      // ==== elemId is used to provide custom element id ==== //
      elemId: "letter_0",
      // ==== canvasId is used to provide  custom canvsas id ==== //
      canvasId: "myCanvas_0",
      // ==== label gives label for animation ==== //
      label: "Boy",
      // ==== elementParent CSS ==== //
      style: {
        width: "474px",
        top: "-2px",
        left: "142px",
        height: "522px"
      }
    }, {
      id: 1,
      frames: {
        width: unitImageManager.sprites.funModeSmallMStrokeData.data.frames.width,
        height: unitImageManager.sprites.funModeSmallMStrokeData.data.frames.height,
        numFrames: unitImageManager.sprites.funModeSmallMStrokeData.data.frames.count
      },
      animations: {
        run: [
          3, unitImageManager.sprites.funModeSmallMStrokeData.data.frames.count - 1,
          false
        ],
        lastframe:[1,1,false],
      },
      lastFrame: true,
      images: unitImageManager.sprites.funModeSmallMStrokeData.images,
      elemId: "letter_1",
      canvasId: "myCanvas_1",
      label: "Girl",
      style: {
        width: "304px",
        top: "225px",
        left: "729px",
        height: "344px"
      }

    }, {
      id: 2,
      frames: {
        width: unitImageManager.sprites.pencilModeBigMStrokeData.data.frames.width,
        height: unitImageManager.sprites.pencilModeBigMStrokeData.data.frames.height,
        numFrames: unitImageManager.sprites.pencilModeBigMStrokeData.data.frames.count
      },
      animations: {
        run: [
          3, unitImageManager.sprites.pencilModeBigMStrokeData.data.frames.count - 1,
          false
        ],
        lastframe:[1,1,false],
      },
      lastFrame: true,
      images: unitImageManager.sprites.pencilModeBigMStrokeData.images,
      elemId: "letter_2",
      canvasId: "myCanvas_2",
      label: "Boy",
      style: {
        width: "549px",
        top: "-69px",
        left: "143px",
        height: "532px"
      }
    }, {
      id: 3,
      frames: {
        width: unitImageManager.sprites.pencilModeSmallMStrokeData.data.frames.width,
        height: unitImageManager.sprites.pencilModeSmallMStrokeData.data.frames.height,
        numFrames: unitImageManager.sprites.pencilModeSmallMStrokeData.data.frames.count
      },
      animations: {
        run: [
          4, unitImageManager.sprites.pencilModeSmallMStrokeData.data.frames.count - 1,
          false
        ],
        lastframe:[1,1,false],
      },
      lastFrame: true,
      images: unitImageManager.sprites.pencilModeSmallMStrokeData.images,
      elemId: "letter_3",
      canvasId: "myCanvas_3",
      label: "Girl",
      style: {
        width: "389px",
        top: "128px",
        left: "750px",
        height: "335px"
      }
    }

  ],
  "click_hotspots": [
    {
      id: 0,
      style: {
        width: "447px",
        top: "27px",
        left: "152px"
      }
    }, {
      id: 1,
      style: {
        width: "294px",
        left: "741px",
        top: "249px",
        height: "210px"
      }
    }
  ],

  // ===== ostArr array contains on screen text ====== //
  "ostArr": [],
  // ===== Prepare Mode data in HTML format ====== //
  "prepareData": {
    tocTitle: "Let's Learn Big and Small Letters",
    //"howItWorks": "  Tap on <u>the </u>lines to see how to write <u>the </u>capital <u>letter</u><u>.</u>  <u>Click </u><u>‘</u><u>next</u><u>’ </u><u>for </u><u>the </u><u>lower-case </u><u>letter</u><u>.</u>  ",
    learningObjectives: "<li>Understand how to properly write upper-case and lower-case forms of the letter of the day</li>",
    studentEngagement: "<li>Look and listen</li>",
    teachingProcedure: "<li>Ask students: 'What is the letter of the day?' and have them respond.</li><li>Tell students that we will learn how to write 'big M'.</li><li>Tap the 'big M' on the board and allow students to see the stroke order.</li><li> Have students stand up and use their fingers to write 'big M' in the air. Use the simple instructions: 'Down, down, up, down'.</li><li>Tap the ' big M' on the board again and repeat.</li><li>Tap the <span class='boldStyle'>FUN</span> button and have students write in the air again as they watch the letter strokes on the board.</li><li>Tap the <span class='boldStyle'>PEN</span> in the toolbar to enable the pen function.</li><li>Begin by demonstrating the correct way to write 'big M'.</li><li>Write the letter again, making some silly mistakes (consider stroke order, proportions and position on the lines).</li><li>Finally, demonstrate again the correct way to write 'big M'.</li><li>Repeat all of the above for 'small m'.</li><li>Stroke Instructions for 'small m':  'Down, over, over'.</li>",
    videoData: [{}],
    gameActivity:"FALSE"
  },
  // ===== preloadData data object contains data used for preloading ====== //
  "preloadData": {
    "audios": [require("./assets/audios/writing_cap_m_car.mp3"), require("./assets/audios/writing_small_m_car.mp3")],
    "images": [require("./assets/images/l1_u1_w1_wri_01.png"), require("./assets/images/lets_learn_big_and_small_letters_small_m_01.png"), require("./assets/images/car_icon.png")]
  }
};
