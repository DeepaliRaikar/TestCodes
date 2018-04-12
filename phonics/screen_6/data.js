{
    "Level": "L2",
    "Unit": "U2",
    "TOC Text": "6. Let's Remember Letters and Sounds",
    "Instruction Text": "Tap the character to see a letter. Tap the letter of the day to collect.",
    "Learning Objectives": "•  Match letter of the day to the letter sound",
    "Student Engagement": "•  Whole-class production\r\n•  Group/individual production",
    "Teaching Procedure": "•  Tap Sam's hand to reveal a letter. If the letter is M/m, ask students: 'What does M sound like?'\r\n•  Encourage them to respond: 'M sounds like /m/' and click the letter to collect it.\r\n•  If a different letter appears, ask students: 'Is this letter M?'\r\n•  Have students respond, then click the hand again, to reveal another letter.\r\n•  Invite students who are participating well to come to the board and tap.\r\n•  Repeat, until all letters have been filled at the top of the screen.\r\nPlay a Game: Class Relay\r\nStudents take turns to come to the board and tap the hand If they see the letter of the day, students should say: 'M sounds like /m/' and tap the letter. Students each get one turn to tap the board, then they go back and high-five the next student to come and try.\r\n",
    "Video": "*"
  },
  // ===== preloadData data object contains data used for preloading ====== //
	oading ====== //
	uction text(itext) at the bottom of the screen ==== //
  instructionText: "Tap the character to see a letter. Tap the letter of the day to collect.",
  // ==== wormCount gives no of worms ==== //
  wormCount: 5,
  wormCountNumber: [
    0, 1, 2, 3, 4
  ],
  currentWarmIndex: null,

  //letters display
  // correctLetters :["m","M"], // correct letters
  // distractorLetters :["a","s","p"], // 3 distractor letters


//letters display
  correctLetters ://["i","I"], //correct letters
   [ {
        text: "m",
        styles: {
          "line-height": "87px"
        }
      },
        {
        text: "M",
        styles: {
          "line-height": "81px"
        },
      }],

  distractorLetters ://["a","s","t","p"], // 4 distractor letters
    [ {
        text: "a",
        styles: {
          "line-height": "90px"
        }
      },
        {
        text: "s",
        styles: {
          "line-height": "90px"
        }
      },
        {
        text: "p",
        styles: {
          "line-height": "101px"
        },
}],




  // ==== letterOfDay provides letter of the day ==== //
  letterOfDay: "M",
  // ==== if the letter of the day is 'p' the textcut will use textcutlineheight ==== //
  textcut: "p",
  // ==== textcutlineheight provides line height for p ==== //
  textcutlineheight: 101,
  // ===== Variable in place of "bird" to be updated ======
  "spriteData": [
    {
      id: 0,
      // ==== frames data object object contains animation's width, height and number of frames ==== //
      frames: {
        width: unitImageManager.sprites.happy.data.frames.width,
        height: unitImageManager.sprites.happy.data.frames.height,
        numFrames: unitImageManager.sprites.happy.data.frames.count
      },
      // ==== animations data object contains information of animations to play ==== //
      animations: {
        default: [
          /*
                1st element : screen number for setting first frame
                2nd element : screen number for setting last frames
                3rd element : For playing animation in infinite loop
                            If true : animation plays in infinite loop
                            If false : animation doesn't plays in infinite loop
            */
          0, 45, false
        ],
        smile: [
          45, 98,
          false
        ]
      },
      // ==== images contains all the images used in sprite ==== //
      images: unitImageManager.sprites.happy.images,
      // ==== image is used to provide images at the bottom ==== //
      elemId: "happyCharacter_0",
      // ==== canvasId is used to provide  custom canvsas id ==== //
      canvasId: "myCanvas_0",
      // ==== audio is used to give sound to the animation ==== //
      audio: unitAudioManager.audios.phonics.m_sound_like_mmm_man,
      // ==== label gives label for animation ==== //
      label: "",
      // ==== ost is used to give onscreen text ==== //
      ost: ""
    }, {
      id: 1,
      frames: {
        width: unitImageManager.sprites.sad.data.frames.width,
        height: unitImageManager.sprites.sad.data.frames.height,
        numFrames: unitImageManager.sprites.sad.data.frames.count
      },
      animations: {
        default: [
          0, 45, false
        ],
        sad: [
          45, 96,
          false
        ]
      },
      images: unitImageManager.sprites.sad.images,
      elemId: "happyCharacter_1",
      canvasId: "myCanvas_1",
      audio: unitAudioManager.audios.phonics.feedback[1],
      label: "",
      ost: ""
    }, {
      id: 2,
      frames: {
        width: unitImageManager.sprites.wormSad.data.frames.width,
        height: unitImageManager.sprites.wormSad.data.frames.height,
        numFrames: unitImageManager.sprites.wormSad.data.frames.count
      },
      animations: {
        sadWormDefault: [
          0, 15, false
        ],
        sadWormStart: [
          15, 49, false
        ],
        sadWormEnd: [
          49, unitImageManager.sprites.wormSad.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.wormSad.images,
      elemId: "sadWorm_0",
      canvasId: "myCanvas_2",
      label: "",
      ost: ""
    }, {
      id: 3,
      frames: {
        width: unitImageManager.sprites.wormSad.data.frames.width,
        height: unitImageManager.sprites.wormSad.data.frames.height,
        numFrames: unitImageManager.sprites.wormSad.data.frames.count
      },
      animations: {
        sadWormDefault: [
          0, 15, false
        ],
        sadWormStart: [
          15, 49, false
        ],
        sadWormEnd: [
          49, unitImageManager.sprites.wormSad.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.wormSad.images,
      elemId: "sadWorm_1",
      canvasId: "myCanvas_3",
      label: "",
      ost: ""
    }, {
      id: 4,
      frames: {
        width: unitImageManager.sprites.wormSad.data.frames.width,
        height: unitImageManager.sprites.wormSad.data.frames.height,
        numFrames: unitImageManager.sprites.wormSad.data.frames.count
      },
      animations: {
        sadWormDefault: [
          0, 15, false
        ],
        sadWormStart: [
          15, 49, false
        ],
        sadWormEnd: [
          49, unitImageManager.sprites.wormSad.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.wormSad.images,
      elemId: "sadWorm_2",
      canvasId: "myCanvas_4",
      label: "",
      ost: ""
    }, {
      id: 5,
      frames: {
        width: unitImageManager.sprites.wormSad.data.frames.width,
        height: unitImageManager.sprites.wormSad.data.frames.height,
        numFrames: unitImageManager.sprites.wormSad.data.frames.count
      },
      animations: {
        sadWormDefault: [
          0, 15, false
        ],
        sadWormStart: [
          15, 49, false
        ],
        sadWormEnd: [
          49, unitImageManager.sprites.wormSad.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.wormSad.images,
      elemId: "sadWorm_3",
      canvasId: "myCanvas_5",

      label: "",
      ost: ""
    }, {
      id: 6,
      frames: {
        width: unitImageManager.sprites.wormSad.data.frames.width,
        height: unitImageManager.sprites.wormSad.data.frames.height,
        numFrames: unitImageManager.sprites.wormSad.data.frames.count
      },
      animations: {
        sadWormDefault: [
          0, 15, false
        ],
        sadWormStart: [
          15, 49, false
        ],
        sadWormEnd: [
          49, unitImageManager.sprites.wormSad.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.wormSad.images,
      elemId: "sadWorm_4",
      canvasId: "myCanvas_7",
      label: "",
      ost: ""
    }, {
      id: 7,
      frames: {
        width: unitImageManager.sprites.wormHappy.data.frames.width,
        height: unitImageManager.sprites.wormHappy.data.frames.height,
        numFrames: unitImageManager.sprites.wormHappy.data.frames.count
      },
      animations: {
        sadWorm: [
          14, unitImageManager.sprites.wormHappy.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.wormHappy.images,
      elemId: "happyWorm_0",
      canvasId: "myCanvas_8",
      label: "",
      ost: ""
    }, {
      id: 8,
      frames: {
        width: unitImageManager.sprites.wormHappy.data.frames.width,
        height: unitImageManager.sprites.wormHappy.data.frames.height,
        numFrames: unitImageManager.sprites.wormHappy.data.frames.count
      },
      animations: {
        sadWorm: [
          14, unitImageManager.sprites.wormHappy.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.wormHappy.images,
      elemId: "happyWorm_1",
      canvasId: "myCanvas_9",

      label: "",
      ost: ""
    }, {
      id: 9,
      frames: {
        width: unitImageManager.sprites.wormHappy.data.frames.width,
        height: unitImageManager.sprites.wormHappy.data.frames.height,
        numFrames: unitImageManager.sprites.wormHappy.data.frames.count
      },
      animations: {
        sadWorm: [
          14, unitImageManager.sprites.wormHappy.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.wormHappy.images,
      elemId: "happyWorm_2",
      canvasId: "myCanvas_10",
      label: "",
      ost: ""
    }, {
      id: 10,
      frames: {
        width: unitImageManager.sprites.wormHappy.data.frames.width,
        height: unitImageManager.sprites.wormHappy.data.frames.height,
        numFrames: unitImageManager.sprites.wormHappy.data.frames.count
      },
      animations: {
        sadWorm: [
          14, unitImageManager.sprites.wormHappy.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.wormHappy.images,
      elemId: "happyWorm_3",
      canvasId: "myCanvas_11",
      label: "",
      ost: ""
    }, {
      id: 11,
      frames: {
        width: unitImageManager.sprites.wormHappy.data.frames.width,
        height: unitImageManager.sprites.wormHappy.data.frames.height,
        numFrames: unitImageManager.sprites.wormHappy.data.frames.count
      },
      animations: {
        sadWorm: [
          14, unitImageManager.sprites.wormHappy.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.wormHappy.images,
      elemId: "happyWorm_4",
      canvasId: "myCanvas_12",
      label: "",
      ost: ""
    }, {
      id: 12,
      frames: {
        width: unitImageManager.sprites.happy.data.frames.width,
        height: unitImageManager.sprites.happy.data.frames.height,
        numFrames: unitImageManager.sprites.happy.data.frames.count
      },
      animations: {
        run: [
          100, unitImageManager.sprites.happy.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.happy.images,
      elemId: "happyCharacterEyeBlink",
      canvasId: "myCanvas_12",
      label: "",
      ost: ""
    }, {
      id: 13,
      frames: {
        width: unitImageManager.sprites.sad.data.frames.width,
        height: unitImageManager.sprites.sad.data.frames.height,
        numFrames: unitImageManager.sprites.sad.data.frames.count
      },
      animations: {
        run: [
          98, unitImageManager.sprites.sad.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.sad.images,
      elemId: "sadCharacterEyeBlink",
      canvasId: "myCanvas_13",
      audio: unitAudioManager.audios.phonics.feedback[1],
      label: "",
      ost: ""
    }
  ],
  // ===== Prepare Mode data in HTML format ====== //
  "prepareData":{
    "Level": "L1",
    "Unit": "U1",
    "TOC Text": "6. Let's Remember Letters and Sounds",
    "Instruction Text": "Tap the character to see a letter. Tap the letter of the day to collect.",
    "Learning Objectives": "•  Match letter of the day to the letter sound",
    "Student Engagement": "•  Whole-class production\r\n•  Group/individual production",
    "Teaching Procedure": "•  Tap Sam's hand to reveal a letter. If the letter is M/m, ask students: 'What does M sound like?'\r\n•  Encourage them to respond: 'M sounds like /m/' and click the letter to collect it.\r\n•  If a different letter appears, ask students: 'Is this letter M?'\r\n•  Have students respond, then click the hand again, to reveal another letter.\r\n•  Invite students who are participating well to come to the board and tap.\r\n•  Repeat, until all letters have been filled at the top of the screen.\r\nPlay a Game: Class Relay\r\nStudents take turns to come to the board and tap the hand If they see the letter of the day, students should say: 'M sounds like /m/' and tap the letter. Students each get one turn to tap the board, then they go back and high-five the next student to come and try.\r\n",
    "Video": "*"
  },
  // ===== preloadData data object contains data used for preloading ====== //
	"preloadData": {
    "audios": [unitAudioManager.audios.phonics.feedback[2], levelAudioManager.audios.phonics.tap_fx, unitAudioManager.audios.phonics.feedback[0]],
    "videos": [],
    "images": [require("./assets/images/phonics_6_bg.png"), require("./assets/images/phonics_6_worm1_hole.png"), require("./assets/images/phonics_6_bg1.png"), require("./assets/images/phonics_6_worm1.png")]
  }
};
