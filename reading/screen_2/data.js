import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";
import unitAudioManager from "../../../common_assets/audios/audio_manager";
module.exports = {
  // ==== screenTitle data object is used for screen level audio and images ==== //
  screenTitle: {
    titleImage: levelImageManager.images.screenTitle.reading_lets_listen,
    titleAudio: levelAudioManager.audios.screenTitle.reading_lets_listen_to_the_story,
    title: "to the Story",
    subTitle: {
      title: "Look, Listen and Enjoy",
      textAlign: "left"
    },
    fontColor: "#FFF"
  },
  doQuestionsExist: true,
  doContainerExist: false,
  //if tap answer button required
  tapAnswerRequired: true,
  /* minScale is used to scale the elements
     If true : Enable scaling
     If false : Disable scaling
  */
  "minScale": true,
  // ==== instText is used to give instruction text(itext) at the bottom of the screen ==== //
  "itext":"Tap the arrows to turn the pages. Tap the text to hear the words.",
  // ==== scaleElements scales the element which are in it's array (id's and classes) ==== //
  "scaleElements": ["#read_story_m .container"],
  // ==== spriteData contains data required to create  sprite animation ==== //
  "spriteData": [],
  // ===== Prepare Mode data in HTML format ====== //
  "prepareData": {
    tocTitle: "Let's Listen to the Story",
    //"howItWorks": "Tap any word to hear the individual word.  Tap the ‘next’ button to turn the page.",
    learningObjectives: "<li>Make simple predictions and activate prior knowledge</li><li>Enjoy the story (language, illustrations and concepts)</li><li>Develop a basic understanding of the story</li>",
    studentEngagement: "<li>Look and listen</li><li>Voluntary participation in class discussion</li>",
    teachingProcedure: "<li>Allow students to listen and enjoy the story (students should NOT be repeating the sentences at this stage).</li><li>Tap the speaker to hear the sentence again.</li><li>Tap <span class='boldStyle'>?</span> to access comprehension questions for each page.</li>",
    videoData: [{
      

    }],
    gameActivity:"FALSE"
  },
  // ===== preloadData data object contains data used for preloading ====== //
  "preloadData": {
    "audios": [unitAudioManager.audios.reading.where,
      unitAudioManager.audios.reading.is,
      unitAudioManager.audios.reading.the,
      unitAudioManager.audios.reading.muffin_man,
      unitAudioManager.audios.reading.mitten_man,
      unitAudioManager.audios.reading.monkey_man,
      unitAudioManager.audios.reading.moose_man,
      unitAudioManager.audios.reading.motorcycle_man,
      unitAudioManager.audios.reading.mailbox_man,
      unitAudioManager.audios.reading.mouse_man,
      unitAudioManager.audios.reading.WhereIsMuffin,
      unitAudioManager.audios.reading.WhereIsMitten,
      unitAudioManager.audios.reading.WhereIsMonkey,
      unitAudioManager.audios.reading.WhereIsMoose,
      unitAudioManager.audios.reading.WhereIsMotorcycle,
      unitAudioManager.audios.reading.WhereIsMailbox,
      unitAudioManager.audios.reading.WhereIsMouse,
      unitAudioManager.audios.phonics.feedback[0]
    ],
    "videos": [],
    "images":  [
      require("../../../../common_assets/images/flipPage/reading_2_img0.png"),
      require("../../../../common_assets/images/flipPage/reading_2_img1.png"),
      require("../../../../common_assets/images/flipPage/reading_2_img2.png"),
      require("../../../../common_assets/images/flipPage/reading_2_img3.png"),
      require("../../../../common_assets/images/flipPage/reading_2_img4.png"),
      require("../../../../common_assets/images/flipPage/reading_2_img5.png"),
      require("../../../../common_assets/images/flipPage/reading_2_img6.png"),
      require("../../../../common_assets/images/flipPage/reading_2_img7.png"),
      require("../../../../common_assets/images/flipPage/reading_2_img8.png")
    ]
  },

  // ===== activity level data ====== //
  // ===== flippage contains data for flip page activity ====== //
  flippage : [
    {
      /* quesBool is used to show question in the screen
         If true : Show question
         If false : Hide question
      */
      quesBool: true,
      // ===== que provides question in the page ====== //
      que : ["What is the title of the story?"],
      // ===== ans provides answer to the question in the page ====== //
      ans : ["Where Is the Muffin?"],
      // ===== label1 contains label for question ====== //
      label1 : ["Question"],
      // ===== label2 contains label for answer ====== //
      label2 : ["Answer"],
      // ===== instructionText provides page level instruction text ====== //
      instructionText: "instructionText1",
      word : [{
        // ==== text provides word in the sentence==== //
        "text": "Where",
        // ==== syncPoint syncs the audio with animation ==== //
        "syncPoint":"0-6",
        // ==== audio is used to give sound to the animation ==== //
        "audio": unitAudioManager.audios.reading.where
      },
      {
        "text": "Is",
        "syncPoint":"6-10",
        "audio": unitAudioManager.audios.reading.is
      },
      {
        "text": "the",
        "syncPoint":"10-12",
        "audio": unitAudioManager.audios.reading.the
      },
      {
        "text": "Muffin?",
        "syncPoint":"12-23",
        "audio": unitAudioManager.audios.reading.muffin_man
      }
      ]
    },
    {
      quesBool: true,
      que : ["What can you see on the page?"],
      ans : ["A muffin"],
      label1 : ["Question"],
      label2 : ["Answer"],
      instructionText: "instructionText1",
      word : [{
        "text": "Where",
        "syncPoint":"0-6",
        "audio": unitAudioManager.audios.reading.where
      },
      {
        "text": "Is",
        "syncPoint":"6-10",
        "audio": unitAudioManager.audios.reading.is
      },
      {
        "text": "the",
        "syncPoint":"10-12",
        "audio": unitAudioManager.audios.reading.the
      },
      {
        "text": "Muffin?",
        "syncPoint":"12-23",
        "audio": unitAudioManager.audios.reading.muffin_man
      }
      ]
    },
    {
      quesBool: true,
      que : ["Where is the muffin?"],
      ans : ["Here it is. (Point to the muffin)"],
      label1 : ["Question"],
      label2 : ["Answer"],
      instructionText: "instructionText1",
      word : [{
        "text": "Where",
        "syncPoint":"0-6",
        "audio": unitAudioManager.audios.reading.where
      },
      {
        "text": "is",
        "syncPoint":"6-10",
        "audio": unitAudioManager.audios.reading.is
      },
      {
        "text": "the",
        "syncPoint":"10-12",
        "audio": unitAudioManager.audios.reading.the
      },
      {
        "text": "muffin?",
        "syncPoint":"12-23",
        "audio": unitAudioManager.audios.reading.muffin_man
      }
      ]
    },
    {
      quesBool: true,
      que : ["Where is the mitten?"],
      ans : [ "Here it is. (Point to the mitten)"],
      label1 : ["Question"],
      label2 : ["Answer"],
      instructionText: "instructionText1",
      word : [{
        "text": "Where",
        "syncPoint":"0-6",
        "audio": unitAudioManager.audios.reading.where
      },
      {
        "text": "is",
        "syncPoint":"6-10",
        "audio": unitAudioManager.audios.reading.is
      },
      {
        "text": "the",
        "syncPoint":"10-12",
        "audio": unitAudioManager.audios.reading.the
      },
      {
        "text": "mitten?",
        "syncPoint":"12-23",
        "audio": unitAudioManager.audios.reading.mitten_man
      }
      ]
    },
    {
      quesBool: true,
      que : ["Where is the monkey?"],
      ans : ["Here it is. (Point to the monkey)"],
      label1 : ["Question"],
      label2 : ["Answer"],
      instructionText: "instructionText1",
      word : [{
        "text": "Where",
        "syncPoint":"0-6",
        "audio": unitAudioManager.audios.reading.where
      },
      {
        "text": "is",
        "syncPoint":"6-10",
        "audio": unitAudioManager.audios.reading.is
      },
      {
        "text": "the",
        "syncPoint":"10-12",
        "audio": unitAudioManager.audios.reading.the
      },
      {
        "text": "monkey?",
        "syncPoint":"12-23",
        "audio": unitAudioManager.audios.reading.monkey_man
      }
      ]
    },
    {
      quesBool: true,
      que : ["Where is the moose?"],
      ans : ["Here it is. (Point to the moose)"],
      label1 : ["Question"],
      label2 : ["Answer"],
      instructionText: "instructionText1",
      word : [{
        "text": "Where",
        "syncPoint":"0-6",
        "audio": unitAudioManager.audios.reading.where
      },
      {
        "text": "is",
        "syncPoint":"6-10",
        "audio": unitAudioManager.audios.reading.is
      },
      {
        "text": "the",
        "syncPoint":"10-12",
        "audio": unitAudioManager.audios.reading.the
      },
      {
        "text": "moose?",
        "syncPoint":"12-23",
        "audio": unitAudioManager.audios.reading.moose_man
      }
      ]
    },
    {
      quesBool: true,
      que : ["Where is the motorcycle?"],
      ans : ["Here it is. (Point to the motorcycle)"],
      label1 : ["Question"],
      label2 : ["Answer"],
      instructionText: "instructionText1",
      word : [{
        "text": "Where",
        "syncPoint":"0-6",
        "audio": unitAudioManager.audios.reading.where
      },
      {
        "text": "is",
        "syncPoint":"6-10",
        "audio": unitAudioManager.audios.reading.is
      },
      {
        "text": "the",
        "syncPoint":"10-12",
        "audio": unitAudioManager.audios.reading.the
      },
      {
        "text": "motorcycle?",
        "syncPoint":"12-23",
        "audio": unitAudioManager.audios.reading.motorcycle_man
      }
      ]
    },
    {
      quesBool: true,
      que : ["Where is the mailbox?"],
      ans : ["Here it is. (Point to the mailbox)"],
      label1 : ["Question"],
      label2 : ["Answer"],
      instructionText: "instructionText1",
      word : [{
        "text": "Where",
        "syncPoint":"0-6",
        "audio": unitAudioManager.audios.reading.where
      },
      {
        "text": "is",
        "syncPoint":"6-10",
        "audio": unitAudioManager.audios.reading.is
      },
      {
        "text": "the",
        "syncPoint":"10-12",
        "audio": unitAudioManager.audios.reading.the
      },
      {
        "text": "mailbox?",
        "syncPoint":"12-23",
        "audio": unitAudioManager.audios.reading.mailbox_man
      }
      ]
    },
    {
      quesBool: true,
      que : ["Where is the mouse?"],
      ans : ["Here it is. (Point to the mouse)"],
      label1 : ["Question"],
      label2 : ["Answer"],
      instructionText: "instructionText1",
      word : [{
        "text": "Where",
        "syncPoint":"0-6",
        "audio": unitAudioManager.audios.reading.where
      },
      {
        "text": "is",
        "syncPoint":"6-10",
        "audio": unitAudioManager.audios.reading.is
      },
      {
        "text": "the",
        "syncPoint":"10-12",
        "audio": unitAudioManager.audios.reading.the
      },
      {
        "text": "mouse?",
        "syncPoint":"12-23",
        "audio": unitAudioManager.audios.reading.mouse_man
      }
      ]
    }
  ],
  // ===== pageFullAudios contains full audio of the puzzles ====== //
  pageFullAudios:{
    "page_0": unitAudioManager.audios.reading.WhereIsMuffin,
    "page_1": unitAudioManager.audios.reading.WhereIsMitten,
    "page_2": unitAudioManager.audios.reading.WhereIsMonkey,
    "page_3": unitAudioManager.audios.reading.WhereIsMoose,
    "page_4": unitAudioManager.audios.reading.WhereIsMotorcycle,
    "page_5": unitAudioManager.audios.reading.WhereIsMailbox,
    "page_6": unitAudioManager.audios.reading.WhereIsMouse,
  },
  // ===== CSS for text in the book and speaker ====== //
  cssData:{
    "coverTextTopWidth": ["21%","60%"],
    "readSpeakerTopLeft": ["40%","12%"],
	//"coverTextFont": "#ffffff",
  },
  /// autoplay states whether audio should be played by default while turning pages value shold be true if required or else false
  autoPlay: true,
  // autoplay states whether audio should be played by default while turning pages value shold be true if required or else false
  // ===== svgElementAudios provides audios for svg elements ====== //
  svgElementAudios:{},
  correctSound: unitAudioManager.audios.phonics.feedback[0],
  coverPageWord: 2,
  // ===== bookWidth gives width of book ====== //
  bookWidth: 1772,
  // ===== bookHeight gives height of book ====== //
  bookHeight: 691,
  audioHighlight: 10,
  elementPositions:[],
  "svgData":[]
// ===== activity level data ends ====== //
};
