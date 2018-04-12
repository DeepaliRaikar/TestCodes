{
    "Level": "L2",
    "Unit": "U2",
    "TOC Text": "1. Let's Learn Big and Small Letters",
    "Instruction Text": "Tap the letters to see the strokes. Tap FUN to change the mode.",
    "Learning Objectives": "•  Understand how to properly write upper-case and lower-case forms of the letter of the day",
    "Student Engagement": "•  Look and listen",
    "Teaching Procedure": "•  Ask students: 'What is the letter of the day?' and have them respond.\r\n•  Tell students that we will learn how to write 'big M'. \r\n•  Tap the 'big M' on the board and allow students to see the stroke order.\r\n•  Have students stand up and use their fingers to write 'big M' in the air. Use the simple instructions:  'Down, down, up, down'.\r\n•  Tap the ' big M' on the board again and repeat.\r\n•  Tap the FUN button and have students write in the air again as they watch the letter strokes on the board.\r\n•  Tap the PEN in the toolbar to enable the pen function.\r\n•  Begin by demonstrating the correct way to write 'big M'.\r\n•  Write the letter again, making some silly mistakes (consider stroke order, proportions and position on the lines).\r\n•  Finally, demonstrate again the correct way to write 'big M'.\r\n•  Repeat all of the above for 'small m'.\r\n•  Stroke Instructions for 'small m':  'Down, over, over'."
  },
  // ===== preloadData data object contains data used for preloading ====== //
	oading ====== //
	 [require("./assets/images/car_icon.png")]

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
  "prepareData":{
    "Level": "L1",
    "Unit": "U1",
    "TOC Text": "1. Let's Learn Big and Small Letters",
    "Instruction Text": "Tap the letters to see the strokes. Tap FUN to change the mode.",
    "Learning Objectives": "•  Understand how to properly write upper-case and lower-case forms of the letter of the day",
    "Student Engagement": "•  Look and listen",
    "Teaching Procedure": "•  Ask students: 'What is the letter of the day?' and have them respond.\r\n•  Tell students that we will learn how to write 'big M'. \r\n•  Tap the 'big M' on the board and allow students to see the stroke order.\r\n•  Have students stand up and use their fingers to write 'big M' in the air. Use the simple instructions:  'Down, down, up, down'.\r\n•  Tap the ' big M' on the board again and repeat.\r\n•  Tap the FUN button and have students write in the air again as they watch the letter strokes on the board.\r\n•  Tap the PEN in the toolbar to enable the pen function.\r\n•  Begin by demonstrating the correct way to write 'big M'.\r\n•  Write the letter again, making some silly mistakes (consider stroke order, proportions and position on the lines).\r\n•  Finally, demonstrate again the correct way to write 'big M'.\r\n•  Repeat all of the above for 'small m'.\r\n•  Stroke Instructions for 'small m':  'Down, over, over'."
  },
  // ===== preloadData data object contains data used for preloading ====== //
	"preloadData": {
    "audios": [require("./assets/audios/writing_cap_m_car.mp3"), require("./assets/audios/writing_small_m_car.mp3")],
    "images": [require("./assets/images/l1_u1_w1_wri_01.png"), require("./assets/images/lets_learn_big_and_small_letters_small_m_01.png"), require("./assets/images/car_icon.png")]
  }
};
