import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";
import unitAudioManager from "../../../common_assets/audios/audio_manager";
module.exports = {
  screenTitle: {
    titleImage: levelImageManager.images.screenTitle.reading_lets_read,
    titleAudio: levelAudioManager.audios.screenTitle.lets_read_the_story,

    //subTitleImage: levelImageManager.images.screenTitle.vocabulary_listen_and_repeat,
    title: "the Story",
    subTitle: {
      title: "Listen and Repeat",
      textAlign: "left"
      // textAlign: "left|right|center"
    },
    fontColor: "#fff"
  },
  doQuestionsExist: true,
  doContainerExist: false,
  //if tap answer button required
  tapAnswerRequired: true,
  // ===== Need to add title ======
  "title": "U1 W1 C1 S2",
  // ===== Elements that needs to be scaled ======
  "minScale": true,
  "itext":"Tap the arrows to turn the pages. Tap the text to hear the words.",
  "scaleElements": ["#read_story_m .container"],
  // ===== Variable in place of "d" to be updated ======
  "spriteData": [],
  // ===== Prepare Mode data in HTML format ======
  "prepareData": {
    tocTitle: "Let's Read the Story",
    //"howItWorks": "Tap any word to hear the individual word.  Tap the ‘next’ button to turn the page.",
    learningObjectives: "<li>Develop concept of print and associated skills</li><li>Demonstrate comprehension of the text by answering simple questions</li>",
    studentEngagement: "<li>Whole-class listen and repeat</li><li>Voluntary participation in class discussion</li>",
    teachingProcedure: "<li>Encourage students to repeat the sentences on each page (point to the words as the students read them).</li><li>Tap the speaker to hear the sentence again.</li><li>Tap <span class='boldStyle'>?</span> to access comprehension questions for each page.</li>",
    videoData: [{
          
    }],
    gameActivity:"FALSE"
  },
  // ===== Preloading the data ======
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
      // levelAudioManager.audios.screenTitle.lets_read_the_story


    ],
    "videos": [],
    "images":  [
      require('../../../../common_assets/images/flipPage/reading_2_img0.png'),
      require('../../../../common_assets/images/flipPage/reading_2_img1.png'),
      require('../../../../common_assets/images/flipPage/reading_2_img2.png'),
      require('../../../../common_assets/images/flipPage/reading_2_img3.png'),
      require('../../../../common_assets/images/flipPage/reading_2_img4.png'),
      require('../../../../common_assets/images/flipPage/reading_2_img5.png'),
      require('../../../../common_assets/images/flipPage/reading_2_img6.png'),
      require('../../../../common_assets/images/flipPage/reading_2_img7.png'),
      require('../../../../common_assets/images/flipPage/reading_2_img8.png')
    ]
  },

  /************activity level data ***************/
flippage : [
    {
	  quesBool: true,
      que : ["What is the title of the story?"],
      ans : ["Where Is the Muffin?"],
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
      que : [],
      ans : [],
	  label1 : [],
	  label2 : [],
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
      que : ["Where is the muffin?","What’s this? (Point to the mitten.)"],
      ans : ["Here it is. (Point to the muffin)","It’s the mitten."],
	  label1 : ["Question", "Question"],
	  label2 : ["Answer", "Answer"],
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
      que : ["Where is the mitten?", "What’s this? (point to the monkey)"],
      ans : [ "Here it is. (Point to the mitten)", "It's the monkey"],
	  label1 : ["Question", "Question"],
	  label2 : ["Answer", "Answer"],
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
      que : ["Where is the monkey?", "What’s this? (point to the moose)"],
      ans : [ "Here it is. (Point to the monkey)", "It's the moose."],
	  label1 : ["Question", "Question"],
	  label2 : ["Answer", "Answer"],
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
      que : ["Where is the moose?", "What’s this? (point to the motorcycle)"],
      ans : [ "Here it is. (Point to the moose) ", "It's the motorcycle."],
	  label1 : ["Question", "Question"],
	  label2 : ["Answer", "Answer"],
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
      que : ["Where is the motorcycle?", "What is on the motorcycle?"],
      ans : [ "Here it is. (Point to the motorcycle)", "The moose, the monkey, the mitten, the muffin"],
	  label1 : ["Question", "Question"],
	  label2 : ["Answer", "Answer"],
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
      que : ["Where is the mailbox?", "Is the mailbox on the motorcycle?"],
      ans : [ "Here it is. (Point to the mailbox)", "No, it's not."],
	  label1 : ["Question", "Question"],
	  label2 : ["Answer", "Answer"],
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
      que : ["Where is the mouse? ", 'Ask various questions using "Where is the ___"?'],
      ans : [ "Here it is. (Point to the mouse)", "invite students to respond."],
	  label1 : ["Question", "Question"],
	  label2 : ["Answer", "Answer"],
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
  pageFullAudios:{
	  "page_0": unitAudioManager.audios.reading.WhereIsMuffin,
      "page_1": unitAudioManager.audios.reading.WhereIsMitten,
      "page_2": unitAudioManager.audios.reading.WhereIsMonkey,
      "page_3": unitAudioManager.audios.reading.WhereIsMoose,
      "page_4": unitAudioManager.audios.reading.WhereIsMotorcycle,
      "page_5": unitAudioManager.audios.reading.WhereIsMailbox,
      "page_6": unitAudioManager.audios.reading.WhereIsMouse,
  },
  cssData:{
	  "coverTextTopWidth": ["21%","60%"],
	  "readSpeakerTopLeft": ["40%","12%"],
  },
  // autoplay states whether audio should be played by default while turning pages value shold be true if required or else false
  autoPlay: true,
  // autoplay states whether audio should be played by default while turning pages value shold be true if required or else false
  svgElementAudios:{},
  correctSound: unitAudioManager.audios.phonics.feedback[0],
  coverPageWord: 2,
  bookWidth: 1772,
  bookHeight: 691,
  audioHighlight: 10,
  elementPositions:[],
  "svgData":[]
/************activity level data ***************/
};
