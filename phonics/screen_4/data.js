import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";
import unitAudioManager from "../../../common_assets/audios/audio_manager";
module.exports = {
  // ==== templateName contains name of the template which will use this data.js ==== //
  "templateName": "fnd_letr_m",
  // ==== screenTitle data object is used for screen level audio and images ==== //
  screenTitle: {
    titleImage: levelImageManager.images.screenTitle.phonics_lets_find,
    titleAudio: levelAudioManager.audios.screenTitle.lets_find_the_letter_of_the_day_man_1,
    title: "the Letter of the Day",
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
  "minScale": true,
  // ==== scaleElements scales the element which are in it's array (id's and classes) ==== //
  "scaleElements": ["#fnd_letr_m .tree_image", "#fnd_letr_m .button", "#fnd_letr_m .innerpopup"],
  // ==== text_1 and text_2 are pop-up letters ==== //
  "text_1":"M",
  "text_2":"m",
  // ==== Address of respective pop-up letter ==== //
  "pop_up_letter_no":"1_5",
  // ==== spriteData contains data required to create  sprite animation ==== //
  "spriteData": [
    {
      id:0,
      // ==== frames data object object contains animation's width, height and number of frames ==== //
      frames: {
        width: unitImageManager.sprites.meg.data.frames.width,
        height: unitImageManager.sprites.meg.data.frames.height,
        numFrames: unitImageManager.sprites.meg.data.frames.count
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
          0, unitImageManager.sprites.meg.data.frames.count - 1,
          false
        ]
      },
      // ==== images contains all the images used in sprite ==== //
      images: unitImageManager.sprites.meg.images,
      // ==== elemId is used to provide custom element id ==== //
      elemId: "meg",
      // ==== canvasId is used to provide  custom canvsas id ==== //
      canvasId: "myCanvas_0",
      // ==== audio is used to give sound to the animation ==== //
      audio: unitAudioManager.audios.phonics.meg,
      // ==== label gives label for animation ==== //
      label: "Table",
      // ==== ost is used to give onscreen text ==== //
      ost: "Hello!"
    }
  ],
  // ==== instText is used to give instruction text(itext) at the bottom of the screen ==== //
  "instText": "Tap <span class='boldStyle'>PLAY</span> to hear the song. Tap the letter of the day to enlarge it. Then tap the big and small letters.",
  // ==== Title of the tree ==== //
  "treeTitle": "The Alphabet Song",
  // ==== a-z letters ==== //
  "letters": {
    // ==== 1st row of alphabets ==== //
    "raw0": [
      {
        "ost": "Aa",
        "index": 0
      }, {
        "ost": "Bb",
        "index": 1
      }, {
        "ost": "Cc",
        "index": 2
      }, {
        "ost": "Dd",
        "index": 3
      }, {
        "ost": "Ee",
        "index": 4
      }, {
        "ost": "Ff",
        "index": 5
      }, {
        "ost": "Gg",
        "index": 6
      }
    ],

    // ==== 2nd row of alphabets ==== //
    "raw1": [
      {
        "ost": "Hh",
        "index": 7
      }, {
        "ost": "Ii",
        "index": 8
      }, {
        "ost": "Jj",
        "index": 9
      }, {
        "ost": "Kk",
        "index": 10
      }, {
        "ost": "Ll",
        "index": 11
      }, {
        "ost": "Mm",
        "index": 12
      }, {
        "ost": "Nn",
        "index": 13
      }, {
        "ost": "Oo",
        "index": 14
      }, {
        "ost": "Pp",
        "index": 15
      }
    ],

    // ==== 3rd row of alphabets ==== //
    "raw2": [
      {
        "ost": "Qq",
        "index": 16
      }, {
        "ost": "Rr",
        "index": 17
      }, {
        "ost": "Ss",
        "index": 18
      }, {
        "ost": "Tt",
        "index": 19
      }, {
        "ost": "Uu",
        "index": 20
      }, {
        "ost": "Vv",
        "index": 21
      }, {
        "ost": "Ww",
        "index": 22
      }, {
        "ost": "Xx",
        "index": 23
      }, {
        "ost": "Yy",
        "index": 24
      }, {
        "ost": "Zz",
        "index": 25
      }
    ]

  },
  // ==== a-z song ==== //
  "alphabetSong": levelAudioManager.audios.phonics.alphabateSongupdated,
  // ==== capital_letter contains capital letter form pop-up ==== //
  "capital_letter": unitAudioManager.audios.phonics.capital_m,
  // ==== small_letter contains small letter form pop-up ==== //
  "small_letter": unitAudioManager.audios.phonics.small_m,
  // ===== Prepare Mode data in HTML format ====== //
  "prepareData": {
    tocTitle: "Let's Find the Letter of the Day",
    //"howItWorks": "  Tap the button to play the Alphabet Song.  Tap any letter to hear the letter names.  Tap the letter of the day to enlarge, then tap capital and lower case letters to hear the names.  ",
    learningObjectives: "<li>Understand context of letter of the day (position in the alphabet)</li><li>Recognize upper case and lower case forms of letter of the day</li>",
    studentEngagement: "<li>Whole-class listen & repeat</li><li> Whole-class production</li>",
    teachingProcedure:"<li>Tell students that we can see the letters of the alphabet on the board.</li><li>Tap <span class='boldStyle'>PLAY</span> and sing the alphabet song as a class(optional).</li><li>Ask students to recall the letter of the day.</li><li>Ask students to find the letter of the day in the alphabet on the board.</li><li>Tap the letter of the day to enlarge it.</li><li>Tap the 'M' and have students repeat: 'big M'. <li>Tap the 'm' and have students repeat: 'small m'.<br><u>Play a Game: Jump and Crouch</u><br>Encourage students to say 'big M' and 'small m' as you point to the big and small letters on the board. Students should jump as they say 'big M' and crouch as they say 'small m'.</li>",
    videoData: [
      {
        "video": "",
        "poster": ""
      }
    ],
    gameActivity:"FALSE"

  },
  // ===== preloadData data object contains data used for preloading ====== //
  "preloadData": {
    "audios": [...levelAudioManager.audios.phonics.alphabates,unitAudioManager.audios.phonics.alphabateSong, unitAudioManager.audios.phonics.capital_m, unitAudioManager.audios.phonics.small_m],
    "videos": [],
    "images": [require("./assets/images/phonics_4_play.png"), require("./assets/images/phonics_4_bg.png"), require("./assets/images/phonics_4_image.png"), require("./assets/images/close_icon.png")]
  }
};
