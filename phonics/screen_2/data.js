import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";
import unitAudioManager from "../../../common_assets/audios/audio_manager";
module.exports = {
  screenTitle: {
    // ==== screenTitle data object is used for screen level audio and images ====
    titleImage: levelImageManager.images.screenTitle.phonics_lets_find,
    titleAudio: levelAudioManager.audios.screenTitle.lets_find_the_sound_of_the_day_man_1,
    title: "the Sound of the Day",
    subTitle: {
      title: "Say It Together",
      textAlign: "left"
    },
    fontColor: "#ffffff"
  },

  /* minScale is used to scale the elements
     If true : Enable scaling
     If false : Disable scaling
  */
  "minScale": true,
  // ==== scaleElements scales the element which are in it's array (id's and classes) ====
  "scaleElements": [
    ".speakerLeft",
    ".speakerRight",
    ".fillStarWrapper",
    ".imgclass",
    "#hotSpot",
    ".itemsWrapper"
  ],
  // ==== instText is used to give instruction text(itext) at the bottom of the screen ====
  "instructionText": "Tap the speakers to hear a word. Listen to the first sound, then tap the bin or the word of the day.",
  // ==== spriteData contains data required to create  sprite animation ====
  "spriteData": [
    {
      id: 0,
      // ==== frames data object object contains animation's width, height and number of frames ====
      frames: {
        width: unitImageManager.sprites.characterSayWord.data.frames.width,
        height: unitImageManager.sprites.characterSayWord.data.frames.height,
        numFrames: unitImageManager.sprites.characterSayWord.data.frames.count
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
        sayWord: [
          27, unitImageManager.sprites.characterSayWord.data.frames.count - 1,
          false
        ],
        loadword: [
          0, 26, false
        ],
        sartTOEnd: [
          0, unitImageManager.sprites.characterSayWord.data.frames.count - 1,
          false
        ]
      },
      // ==== images contains all the images used in sprite ====
      images: unitImageManager.sprites.characterSayWord.images,
      // ==== elemId is used to provide custom element id ====
      elemId: "characterSayWord",
      // ==== canvasId is used to provide  custom canvsas id ====
      canvasId: "myCanvas_0",
      // ==== audio is used to give sound to the animation ====
      audio: unitAudioManager.audios.phonics.bird,
      // ==== label gives label for animation ====
      label: "",
      // ==== ost is used to give onscreen text ====
      ost: ""
    }, {
      id: 1,
      frames: {
        width: unitImageManager.sprites.cheer.data.frames.width,
        height: unitImageManager.sprites.cheer.data.frames.height,
        numFrames: unitImageManager.sprites.cheer.data.frames.count
      },
      animations: {
        cheers: [
          0, unitImageManager.sprites.cheer.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.cheer.images,
      elemId: "cheer",
      canvasId: "myCanvas_1",
      audio: unitAudioManager.audios.phonics.bird,
      label: "",
      ost: ""
    }, {
      id: 2,
      frames: {
        width: unitImageManager.sprites.feelingBored.data.frames.width,
        height: unitImageManager.sprites.feelingBored.data.frames.height,
        numFrames: unitImageManager.sprites.feelingBored.data.frames.count
      },
      animations: {
        feelingBored: [
          0, unitImageManager.sprites.feelingBored.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.feelingBored.images,
      elemId: "feelingBored",
      canvasId: "myCanvas_2",
      audio: unitAudioManager.audios.phonics.bird,
      label: "",
      ost: ""
    }, {
      id: 3,
      frames: {
        width: unitImageManager.sprites.cheer.data.frames.width,
        height: unitImageManager.sprites.cheer.data.frames.height,
        numFrames: unitImageManager.sprites.cheer.data.frames.count
      },
      animations: {
        happy: [
          0, unitImageManager.sprites.cheer.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.cheer.images,
      elemId: "happy",
      canvasId: "myCanvas_3",
      audio: unitAudioManager.audios.phonics.bird,
      label: "",
      ost: ""
    }, {
      id: 4,
      frames: {
        width: unitImageManager.sprites.unhappy.data.frames.width,
        height: unitImageManager.sprites.unhappy.data.frames.height,
        numFrames: unitImageManager.sprites.unhappy.data.frames.count
      },
      animations: {
        unhappy: [
          0, unitImageManager.sprites.unhappy.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.unhappy.images,
      elemId: "unhappy",
      canvasId: "myCanvas_4",
      audio: unitAudioManager.audios.phonics.bird,
      label: "",
      ost: ""
    }, {
      id: 5,
      frames: {
        width: unitImageManager.sprites.characterWaiting.data.frames.width,
        height: unitImageManager.sprites.characterWaiting.data.frames.height,
        numFrames: unitImageManager.sprites.characterWaiting.data.frames.count
      },
      animations: {
        characterWaiting: [
          0, unitImageManager.sprites.characterWaiting.data.frames.count - 1,
          false
        ],
        initialFrameRight: [0, 0, false]
      },
      images: unitImageManager.sprites.characterWaiting.images,
      elemId: "characterWaiting",
      canvasId: "myCanvas_5",
      audio: unitAudioManager.audios.phonics.bird,
      label: "",
      ost: ""
    }, {
      id: 6,
      frames: {
        width: unitImageManager.sprites.characterSayWordEyeBlink.data.frames.width,
        height: unitImageManager.sprites.characterSayWordEyeBlink.data.frames.height,
        numFrames: unitImageManager.sprites.characterSayWordEyeBlink.data.frames.count
      },
      animations: {
        characterSayWordEyeBlink: [
          0, unitImageManager.sprites.characterSayWordEyeBlink.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.characterSayWordEyeBlink.images,
      elemId: "characterSayWordEyeBlink",
      canvasId: "myCanvas_6",
      audio: unitAudioManager.audios.phonics.bird,
      label: "",
      ost: ""
    }, {
      id: 7,
      frames: {
        width: unitImageManager.sprites.feelingBoredInitial.data.frames.width,
        height: unitImageManager.sprites.feelingBoredInitial.data.frames.height,
        numFrames: unitImageManager.sprites.feelingBoredInitial.data.frames.count
      },
      animations: {
        feelingBoredInitial: [
          0, unitImageManager.sprites.feelingBoredInitial.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.feelingBoredInitial.images,
      elemId: "feelingBoredInitial",
      canvasId: "myCanvas_7",
      audio: unitAudioManager.audios.phonics.bird,
      label: "",
      ost: ""
    }, {
      id: 8,
      frames: {
        width: unitImageManager.sprites.feelingBoredEyeBlink.data.frames.width,
        height: unitImageManager.sprites.feelingBoredEyeBlink.data.frames.height,
        numFrames: unitImageManager.sprites.feelingBoredEyeBlink.data.frames.count
      },
      animations: {
        feelingBoredEyeBlink: [
          0, unitImageManager.sprites.feelingBoredEyeBlink.data.frames.count - 1,
          true
        ]
      },
      images: unitImageManager.sprites.feelingBoredEyeBlink.images,
      elemId: "feelingBoredEyeBlink",
      canvasId: "myCanvas_8",
      audio: unitAudioManager.audios.phonics.bird,
      label: "",
      ost: ""
    }, {
      id: 9,
      frames: {
        width: unitImageManager.sprites.dustbin.data.frames.width,
        height: unitImageManager.sprites.dustbin.data.frames.height,
        numFrames: unitImageManager.sprites.dustbin.data.frames.count
      },
      animations: {
        dustbin: [
          0, unitImageManager.sprites.dustbin.data.frames.count - 1,
          false
        ],
        close_dustbin: [0, 0, false]
      },
      images: unitImageManager.sprites.dustbin.images,
      elemId: "dustBin",
      canvasId: "myCanvas_9",
      audio: unitAudioManager.audios.phonics.bird,
      label: "",
      ost: ""
    }, {
      id: 10,
      frames: {
        width: unitImageManager.sprites.speakerLeft.data.frames.width,
        height: unitImageManager.sprites.speakerLeft.data.frames.height,
        numFrames: unitImageManager.sprites.speakerLeft.data.frames.count
      },
      animations: {
        speakerLeft: [
          0, unitImageManager.sprites.speakerLeft.data.frames.count - 1,
          false
        ],
        initialFrameLeft: [0, 0, false]
      },
      images: unitImageManager.sprites.speakerLeft.images,
      elemId: "speakerLeft",
      canvasId: "myCanvas_10",
      audio: unitAudioManager.audios.phonics.bird,
      label: "",
      ost: ""
    }, {
      id: 11,
      frames: {
        width: unitImageManager.sprites.speakerRight.data.frames.width,
        height: unitImageManager.sprites.speakerRight.data.frames.height,
        numFrames: unitImageManager.sprites.speakerRight.data.frames.count
      },
      animations: {
        speakerRight: [
          0, unitImageManager.sprites.speakerRight.data.frames.count - 1,
          false
        ],
        initialFrameRight: [0, 0, false]
      },
      images: unitImageManager.sprites.speakerRight.images,
      elemId: "speakerRight",
      canvasId: "myCanvas_11",
      audio: unitAudioManager.audios.phonics.bird,
      label: "",
      ost: ""
    }
  ],
  // ===== CSS for door stars ======
  "doorStars": [
    {
      topPos: "584px",
      rightPos: "-173px"
    }, {
      topPos: "550px",
      rightPos: "-173px"
    }, {
      topPos: "516px",
      rightPos: "-173px"
    }, {
      topPos: "482px",
      rightPos: "-173px"
    }, {
      topPos: "448px",
      rightPos: "-173px"
    }
  ],
  // ===== CSS for dust stars ======
  "dustStars": [
    {
      topPos: "584px",
      rightPos: "934px"
    }, {
      topPos: "550px",
      rightPos: "934px"
    }, {
      topPos: "516px",
      rightPos: "934px"
    }, {
      topPos: "482px",
      rightPos: "934px"
    }, {
      topPos: "448px",
      rightPos: "934px"
    }
  ],
  // ===== Prepare Mode data in HTML format ======
  "prepareData": {
    tocTitle: "Let's Find the Sound of the Day",
    // "howItWorks": "  Click <u>the </u><u>action </u><u>button </u>to hear a word.  Click <u>the </u>cloud to hear <u>the </u>word again.  If <u>the </u>word begins with <u>the </u>sound of <u>the </u>day, click <u>the </u>green button.  If it does not, click <u>the </u>red button.  </br>Randomize words (mix words beginning with letter of the day with other words)  </br>Words should be in different order each time activity is played.  </br><u>Notes</u> <li>Need to discuss which sides to have red and green buttons </li><li>When a the correct button is tapped, a star lights up on the same side and sound effect (sound effect for green button will be letter-sound). </li><li>If the incorrect button is tapped, nothing happens. </li><li>Randomize words from word-list (no more than three in a row from the same category). </li><li> </li> ",
    learningObjectives: "<li>Listen to words and identify words beginning with the sound of the day (initial phoneme recognition)</li>",
    studentEngagement:"<li>Whole-class production</li>",
    teachingProcedure: "<li>Tap the speaker and guide students to listen to the first sound of the word.</li><li>If the word starts with the sound of the day, encourage students to say the sound (and do the action for the sound).</li><li>If the word does not start with the sound of the day, encourage students to say: ‘NO’.</li><li>Depending on the first sound of the word, tap the word of the day or the bin at the bottom of the screen.</li><li>Click the speaker again and continue.</li><li>Tap <span class='boldStyle'>RESET</span> to play again.<br> TIP: If students are able, have them say the sentence: '[word] starts with [sound]' (e.g. 'Milk starts with /m/).<br><u>Play a Game: Sit or Stand</u><br>Tap the speaker to hear a word. If the word begins with the sound of the day, students should stand up and say the sound (and do the action). If the word does not begin with the sound of the day, they should remain sitting and say: ‘No’. Either you or a student can click the correct picture on the screen. Continue.</li>",
    videoData: [
      {
        "video": "",
        "poster": ""
      }
    ],
    gameActivity:"FALSE"
  },
  // ===== preloadData data object contains data used for preloading ======
  "preloadData": {
    "audios": [
      unitAudioManager.audios.phonics.monkey_screen2,
      unitAudioManager.audios.phonics.muffin_screen2,
      unitAudioManager.audios.phonics.mouse_screen2,
      unitAudioManager.audios.phonics.mitten_screen2,
      unitAudioManager.audios.phonics.milk_screen2,
      unitAudioManager.audios.phonics.table_screen2,
      unitAudioManager.audios.phonics.chair_screen2,
      unitAudioManager.audios.phonics.m_woman_1,
      unitAudioManager.audios.phonics.moose_screen2,
      unitAudioManager.audios.phonics.bin_screen2,
      unitAudioManager.audios.phonics.cupboard_screen2,
      unitAudioManager.audios.phonics.boy_screen2,
      unitAudioManager.audios.phonics.girl_screen2,
      levelAudioManager.audios.phonics.feedback[0],
      levelAudioManager.audios.phonics.feedback[1],
      levelAudioManager.audios.phonics.feedback[2]
    ],
    "videos": [],
    "images": [require("./assets/images/find_the_sound_of_the_day_milk_bg.png"), require("./assets/images/find_the_sound_of_the_day_milk_carton.png")]
  },
  activityAudio: {
    monkey: unitAudioManager.audios.phonics.monkey_screen2,
    muffin: unitAudioManager.audios.phonics.muffin_screen2,
    mouse: unitAudioManager.audios.phonics.mouse_screen2,
    moose: unitAudioManager.audios.phonics.moose_screen2,
    mitten: unitAudioManager.audios.phonics.mitten_screen2,
    milk: unitAudioManager.audios.phonics.milk_screen2,
    table: unitAudioManager.audios.phonics.table_screen2,
    chair: unitAudioManager.audios.phonics.chair_screen2,
    cupboard: unitAudioManager.audios.phonics.cupboard_screen2,
    boy: unitAudioManager.audios.phonics.boy_screen2,
    bin: unitAudioManager.audios.phonics.bin_screen2,
    girl: unitAudioManager.audios.phonics.girl_screen2,
    correct: levelAudioManager.audios.phonics.feedback[0],
    inCorrect: levelAudioManager.audios.phonics.feedback[1],
    cheers: levelAudioManager.audios.phonics.feedback[2]
  },
  // ===== CSS for milk image ======
  cssData: {
    width: "287px",
    height: "287px",
    itemStarPos: {
      right: "10%"
    }
  },
  letterOfDayImage: require("./assets/images/find_the_sound_of_the_day_milk_carton.png"),
  letterOfDayAudio: unitAudioManager.audios.phonics.m_woman_1,
  letterOfDay: "m",
  letterWords: [
    "milk",
    "mitten",
    "mouse",
    "monkey",
    "moose",
    "muffin"
  ],
  otherWords: [
    "table",
    "chair",
    "cupboard",
    "bin",
    "boy",
    "girl"
  ],
  correct: 5,
  incorrect: 5

};
