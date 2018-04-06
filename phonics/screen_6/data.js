import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";
import unitAudioManager from "../../../common_assets/audios/audio_manager";
module.exports = {
  // ==== screenTitle data object is used for screen level audio and images ==== //
  screenTitle: {
    titleImage: levelImageManager.images.screenTitle.phonics_lets_remember,
    titleAudio: levelAudioManager.audios.screenTitle.lets_remember_letters_and_sounds_man_1,
    title: "Letters and Sounds",
    subTitle: {
      title: "Say It Together",
      textAlign: "left"
    },
    fontColor: "#333333"
  },
  /* minScale is used to scale the elements
     If true : Enable scaling
     If false : Disable scaling
  */
  minScale: true,
  // ==== scaleElements scales the element which are in it's array (id's and classes) ==== //
  scaleElements: [
    "#cth_wrm_m .character-container", "#cth_wrm_m .ans-marker", "#cth_wrm_m .whole-worm-container", "#cth_wrm_m .displayAlphabet"
  ],

  // ==== screenData contains alphabets which are displayed on the screen ==== //
  screenData: ["M", "m", "M", "m"],
  // ==== instText is used to give instruction text(itext) at the bottom of the screen ==== //
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
  "prepareData": {
    tocTitle: "Let's Remember Letters and Sounds",
    //"howItWorks": "Tap the signs to see a new letter.  Tap the letter of the day to collect it.</br><u>Notes</u><u>:</u><li>MAY REQUIRE CONCEPT REFINEMENT</li><li>When a sign is tapped, a worm appears with a letter</li><li>There should be a 40% chance that it is the letter of the day</li><li>Tap the letter of the day to hear audio confirmation (e.g. “B sounds like /b/”) and letter goes up to fill one of the letters at the top of the screen.</li><li>If it is not the letter of the day, nothing happens when tapped (no audio).</li><li>Tap the sign again for the current letter to go back down and another letter to appear from a different hole.</li>",
    learningObjectives: "<li>Match letter of the day to the letter sound</li>",
    studentEngagement: "<li>Whole-class production</li><li>Group/individual production</li>",
    teachingProcedure: "<li>Tap Sam's hand to reveal a letter. If the letter is M/m, ask students: 'What does M sound like?' </li><li>Encourage them to respond: 'M sounds like /m/' and click the letter to collect it.</li><li>If a different letter appears, ask students: 'Is this letter M?' </li><li>Have students respond, then click the hand again, to reveal another letter.</li><li>Invite students who are participating well to come to the board and tap.</li><li>Repeat, until all letters have been filled at the top of the screen.<br><u>Play a Game: Class Relay</u><br>Students take turns to come to the board and tap the hand If they see the letter of the day, students should say: 'M sounds like /m/' and tap the letter. Students each get one turn to tap the board, then they go back and high-five the next student to come and try.</li>",
    videoData: [
      {

      }
    ],
    gameActivity:"FALSE"
  },
  // ===== preloadData data object contains data used for preloading ====== //
  "preloadData": {
    "audios": [unitAudioManager.audios.phonics.feedback[2], levelAudioManager.audios.phonics.tap_fx, unitAudioManager.audios.phonics.feedback[0]],
    "videos": [],
    "images": [require("./assets/images/phonics_6_bg.png"), require("./assets/images/phonics_6_worm1_hole.png"), require("./assets/images/phonics_6_bg1.png"), require("./assets/images/phonics_6_worm1.png")]
  }
};
