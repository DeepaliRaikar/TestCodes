import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";
import unitAudioManager from "../../../common_assets/audios/audio_manager";
module.exports = {
  screenTitle: {
    titleImage: levelImageManager.images.screenTitle.reading_lets_read,
    titleAudio: levelAudioManager.audios.screenTitle.reading_lets_read_for_practice,
    title: "for Practice",
    subTitle: {
      title: "Do It Together",
      textAlign: "left"
      // textAlign: "left|right|center"
    },
    fontColor: "#fff"

  },
  //property specifies whether questions/help button will be visible/invisible in dom. if "true" then visible in dom or else invisible.
  doQuestionsExist: true,
  //property specifies whether questions/help button will be visible/invisible in dom. if "true" then visible in dom or else invisible.

  //property specifies whether container will be visible/invisible in dom. if "true" then visible in dom or else invisible.
  doContainerExist: true,
  //property specifies whether container will be visible/invisible in dom. if "true" then visible in dom or else invisible.

  //property gives the provision of wrinting extra css by passing its value as "id" to container for further improvements in activity, if (templateName= "") then base css will be effected
  //property gives the provision of wrinting extra css by passing its value as "id" to container for further improvements in activity, if (templateName= "") then base css will be effected
  //if tap answer button required
  tapAnswerRequired: true,
  // ===== Need to add title ======
  "title": "U1 W1 C1 S2",
  // ===== Elements that needs to be scaled ======
  "minScale": true,
  "itext":"Tap words that start with M to collect them.",
  "scaleElements": ["#read_story_m .container"],
  // ===== Variable in place of "d" to be updated ======
  // spriteData array should be empty if there are no sprites/svg interactivity
  "spriteData": [
    {
      id: 0,
      frames: {
        width: unitImageManager.sprites.muffin.data.frames.width,
        height: unitImageManager.sprites.muffin.data.frames.height,
        numFrames: unitImageManager.sprites.muffin.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.muffin.data.frames.count - 1,
          false
        ],
        lastframe: [
          7, 7,
          false
        ]
      },
      images: unitImageManager.sprites.muffin.images,
      // ===== Please provide custom element ID, recoment to use single word without capital ======
      elemId: "elementMuffin_0",
      // ===== Please provide custom canvas ID if need to access for processing ======
      canvasId: "myCanvas_0",
      audio: unitAudioManager.audios.reading.muffin_man,
      // label: "Boy",
      // ost: "Hello!"
    },
    {
      id: 1,
      frames: {
        width: unitImageManager.sprites.mitten.data.frames.width,
        height: unitImageManager.sprites.mitten.data.frames.height,
        numFrames: unitImageManager.sprites.mitten.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.mitten.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.mitten.images,
      // ===== Please provide custom element ID, recoment to use single word without capital ======
      elemId: "elementMitten_1",
      // ===== Please provide custom canvas ID if need to access for processing ======
      canvasId: "myCanvas_1",
      audio: unitAudioManager.audios.reading.mitten_man,
      // label: "Boy",
      // ost: "Hello!"
    },
    {
      id: 2,
      frames: {
        width: unitImageManager.sprites.monkey.data.frames.width,
        height: unitImageManager.sprites.monkey.data.frames.height,
        numFrames: unitImageManager.sprites.monkey.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.monkey.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.monkey.images,
      // ===== Please provide custom element ID, recoment to use single word without capital ======
      elemId: "elementMonkey_2",
      // ===== Please provide custom canvas ID if need to access for processing ======
      canvasId: "myCanvas_2",
      audio: unitAudioManager.audios.reading.monkey_man,
      // label: "Boy",
      // ost: "Hello!"
    },
    {
      id: 3,
      frames: {
        width: unitImageManager.sprites.moose.data.frames.width,
        height: unitImageManager.sprites.moose.data.frames.height,
        numFrames: unitImageManager.sprites.moose.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.moose.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.moose.images,
      // ===== Please provide custom element ID, recoment to use single word without capital ======
      elemId: "elementMoose_3",
      // ===== Please provide custom canvas ID if need to access for processing ======
      canvasId: "myCanvas_3",
      audio: unitAudioManager.audios.reading.moose_man,
      // label: "Boy",
      // ost: "Hello!"
    },
    {
      id: 4,
      frames: {
        width: unitImageManager.sprites.motorcycle.data.frames.width,
        height: unitImageManager.sprites.motorcycle.data.frames.height,
        numFrames: unitImageManager.sprites.motorcycle.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.motorcycle.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.motorcycle.images,
      // ===== Please provide custom element ID, recoment to use single word without capital ======
      elemId: "elementMotorcycle_4",
      // ===== Please provide custom canvas ID if need to access for processing ======
      canvasId: "myCanvas_4",
      audio: unitAudioManager.audios.reading.motorcycle_man,
      // label: "Boy",
      // ost: "Hello!"
    },
    {
      id: 5,
      frames: {
        width: unitImageManager.sprites.mailbox.data.frames.width,
        height: unitImageManager.sprites.mailbox.data.frames.height,
        numFrames: unitImageManager.sprites.mailbox.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.mailbox.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.mailbox.images,
      // ===== Please provide custom element ID, recoment to use single word without capital ======
      elemId: "elementMailbox_5",
      // ===== Please provide custom canvas ID if need to access for processing ======
      canvasId: "myCanvas_5",
      audio: unitAudioManager.audios.reading.mailbox_man,
      // label: "Boy",
      // ost: "Hello!"
    },
    {
      id: 6,
      frames: {
        width: unitImageManager.sprites.mouse.data.frames.width,
        height: unitImageManager.sprites.mouse.data.frames.height,
        numFrames: unitImageManager.sprites.mouse.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.mouse.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.mouse.images,
      // ===== Please provide custom element ID, recoment to use single word without capital ======
      elemId: "elementMouse_6",
      // ===== Please provide custom canvas ID if need to access for processing ======
      canvasId: "myCanvas_6",
      audio: unitAudioManager.audios.reading.mouse_man,
      // label: "Boy",
      // ost: "Hello!"
    },
	{
      id: 7,
      frames: {
        width: unitImageManager.sprites.moon.data.frames.width,
        height: unitImageManager.sprites.moon.data.frames.height,
        numFrames: unitImageManager.sprites.moon.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.moon.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.moon.images,
      // ===== Please provide custom element ID, recoment to use single word without capital ======
      elemId: "elementMoon_7",
      // ===== Please provide custom canvas ID if need to access for processing ======
      canvasId: "myCanvas_7",
      audio: unitAudioManager.audios.reading.moon,
      // label: "Boy",
      // ost: "Hello!"
    },
	{
      id: 8,
      frames: {
        width: unitImageManager.sprites.milk.data.frames.width,
        height: unitImageManager.sprites.milk.data.frames.height,
        numFrames: unitImageManager.sprites.milk.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.milk.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.milk.images,
      // ===== Please provide custom element ID, recoment to use single word without capital ======
      elemId: "elementMilk_8",
      // ===== Please provide custom canvas ID if need to access for processing ======
      canvasId: "myCanvas_8",
      audio: unitAudioManager.audios.reading.milk,
      // label: "Boy",
      // ost: "Hello!"
    },
	{
      id: 9,
      frames: {
        width: unitImageManager.sprites.man.data.frames.width,
        height: unitImageManager.sprites.man.data.frames.height,
        numFrames: unitImageManager.sprites.man.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.man.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.man.images,
      // ===== Please provide custom element ID, recoment to use single word without capital ======
      elemId: "elementMan_9",
      // ===== Please provide custom canvas ID if need to access for processing ======
      canvasId: "myCanvas_9",
      audio: unitAudioManager.audios.reading.man,
      // label: "Boy",
      // ost: "Hello!"
    },
	{
      id: 10,
      frames: {
        width: unitImageManager.sprites.mom.data.frames.width,
        height: unitImageManager.sprites.mom.data.frames.height,
        numFrames: unitImageManager.sprites.mom.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.mom.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.mom.images,
      // ===== Please provide custom element ID, recoment to use single word without capital ======
      elemId: "elementMom_10",
      // ===== Please provide custom canvas ID if need to access for processing ======
      canvasId: "myCanvas_10",
      audio: unitAudioManager.audios.reading.mom,
      // label: "Boy",
      // ost: "Hello!"
    }
  ],
  // spriteData array should be empty if there are no sprites/svg interactivity
  // ===== Prepare Mode data in HTML format ======
  "prepareData": {
    tocTitle: "Let's Read for Practice",
    //"howItWorks": "Tap any word to hear the individual word.  Tap the ‘next’ button to turn the page.",
    learningObjectives: "<li>Develop concept of print and associated skills</li><li>Identify letters andcorresponding sounds within words on the page</li><li>Locate words on the page</li>",
    studentEngagement: "<li>Whole-class listen and repeat</li><li>Whole-class production</li><li>Group production</li>",
    teachingProcedure: "<li>Encourage students to repeat the sentences on each page (clearly point to the words as the students read them).</li><li>Tap the speaker to hear the sentence again.</li><li>Tap <span class='boldStyle'>?</span> to access comprehension questions for each page.</li><li>Encourage students to find words beginning with M.</li><li> Invite students to come to the board and tap the words to collect them.</li>",
    videoData: [{


    }],
    gameActivity:"FALSE"
  },
  // ===== Preloading the data ======
  "preloadData": {
    "audios": [
      unitAudioManager.audios.phonics.feedback[0],
	  unitAudioManager.audios.reading.man,
	  unitAudioManager.audios.reading.milk,
	  unitAudioManager.audios.reading.mom,
	  unitAudioManager.audios.reading.moon,
	  unitAudioManager.audios.reading.where,
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
  // No of pages in activity viwed as no of objects in flippage array(i.e; "object" indicates a "page" in activity)
  flippage : [
    {
	  quesBool: true,
      que : ["What is the title of the story?"],
      ans : [ "Where Is the Muffin?", ],
	  label1 : ["Question"],
	  label2 : ["Answer"],
	  instructionText: "instructionText1",
      word : [{
        "text": "Where",
		"syncPoint":"0-6",
        "audio": unitAudioManager.audios.reading.where,
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
      que : ["Which word starts with letter M?","What does M sound like?"],
      ans : ["Muffin","M sounds like /m/. "],
	  label1 : ["Question", "Question"],
	  label2 : ["Answer", "Answer"],
	  instructionText: "instructionText2",
      word : [{
        "text": "Where",
		"syncPoint":"0-6",
        "audio": unitAudioManager.audios.reading.where,
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
      que : ["How many words are on the page?  ", "What is the last word on the page?"],
      ans : ["Four (Count with students.)", "Muffin"],
	  label1 : ["Question", "Question"],
	  label2 : ["Answer", "Answer"],
	  instructionText: "instructionText3",
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
      que : ["How many words are on the page? ", "Which word starts with letter M? "],
      ans : ["Four (Count with students.)", "Mitten"],
	  label1 : ["Question", "Question"],
	  label2 : ["Answer", "Answer"],
	  instructionText: "instructionText4",
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
      que : ["How many words are on the page? ", "Which word starts with letter M? "],
      ans : [ "Four (Count with students.)", "Monkey "],
	  label1 : ["Question", "Question"],
	  label2 : ["Answer", "Answer"],
	  instructionText: "instructionText5",
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
      que : ["What is the last word on the page? ", "Where is the moose in the picture?."],
      ans : [ "Moose ", "Allow students to point"],
	  label1 : ["Question", "Question"],
	  label2 : ["Answer", "Answer"],
	  instructionText: "instructionText6",
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
      que : ["Which word starts with letter M? ", "What is the first sound in ‘motorcycle’? "],
      ans : [ "Motorcycle ", "/m/"],
	  label1 : ["Question", "Question"],
	  label2 : ["Answer", "Answer"],
	  instructionText: "instructionText7",
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
      que : ["Which word starts with /m/? ", "What is the first letter of 'mailbox'?"],
      ans : [ "Mailbox ", "Letter M "],
	  label1 : ["Question", "Question"],
	  label2 : ["Answer", "Answer"],
	  instructionText: "instructionText8",
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
      que : ["Look at the pictures. Which things start with /m/?",],
      ans : [ "Invite students to respond."],
	  label1 : ["Question", "Question"],
	  label2 : ["Answer", "Answer"],
	  instructionText: "instructionText9",
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
  // No of pages in activity viwed as no of objects in flippage array(i.e; "object" indicates a "page" in activity)

  //Full Length Page Audios
  pageFullAudios:{
	  "page_0": unitAudioManager.audios.reading.WhereIsMuffin,
      "page_1": unitAudioManager.audios.reading.WhereIsMitten,
      "page_2": unitAudioManager.audios.reading.WhereIsMonkey,
      "page_3": unitAudioManager.audios.reading.WhereIsMoose,
      "page_4": unitAudioManager.audios.reading.WhereIsMotorcycle,
      "page_5": unitAudioManager.audios.reading.WhereIsMailbox,
      "page_6": unitAudioManager.audios.reading.WhereIsMouse,
  },
  //Full Length Page Audios

  //cssdata
	cssData:{
	  "coverTextTopWidth": ["21%","60%"],//["top value","width value"]
	  "readSpeakerTopLeft": ["40%","12%"],//["top value","left value"]
	  "spriteAnimationTopLeft": [["50px","-18px","1"],["50px","59px","1"],["50px","152px","1"],["180px","-18px","0.8"],["180px","60px","0.7"],["190px","160px","0.7"],["320px","-18px","1"],["320px","80px","0.5"],["440px","80px","0.7"],["303px","160px","0.5"],["420px","-18px","0.4"]],//["top value","left value", "scale"]
  },
  //cssdata

  //Individual audios for svg clickable elements(&& object should be empty if there are no svg interactivity in booklet)
  svgElementAudios:{
	"element_0": unitAudioManager.audios.reading.muffin_man,
	"element_1": unitAudioManager.audios.reading.mitten_man,
	"element_2": unitAudioManager.audios.reading.monkey_man,
	"element_3": unitAudioManager.audios.reading.moose_man,
	"element_4": unitAudioManager.audios.reading.motorcycle_man,
	"element_5": unitAudioManager.audios.reading.mailbox_man,
	"element_6": unitAudioManager.audios.reading.mouse_man,
	"element_7": unitAudioManager.audios.reading.moon,
	"element_8": unitAudioManager.audios.reading.milk,
	"element_9": unitAudioManager.audios.reading.man,
	"element_10": unitAudioManager.audios.reading.mom,
  },
  //Individual audios for svg clickable elements(&& object should be empty if there are no svg interactivity in booklet)

  //should be removed if there are no svg interactivity in booklet
  correctSound: unitAudioManager.audios.phonics.feedback[0],
  //should be removed if there are no svg interactivity in booklet

  audioHighlight: 15,

  //this property specifies how many pages in booklet consists of cover page audio after initial page creation.
  coverPageWord: 2,
  //this property specifies how many pages in booklet consists of cover page audio after initial page creation.

  //these properties specifies dimensions of booklet(i.e; width and height) and should be appropriate when dealing with svg interactivity
  bookWidth: 1772,
  bookHeight: 691,
  //these properties specifies dimensions of booklet(i.e; width and height) and should be appropriate when dealing with svg interactivity

  //Not used for now
  elementPositions:[],
  //Not used for now

  //coverpage Svgs
  coverSvgs:['<svg version="1.1" id="coverPage" opacity="0.01" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="886px" height="691px" viewBox="0 0 886 691" enable-background="new 0 0 886 691" xml:space="preserve"><g id="0" class="transparentClick"><rect y="0" fill="#555555" width="886" height="691"/></g></svg>',
  '<svg version="1.1" id="coverPage" opacity="0.01" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="886px" height="691px" viewBox="0 0 886 691" enable-background="new 0 0 886 691" xml:space="preserve"><g id="0" class="transparentClick"><rect y="0" fill="#555555" width="886" height="691"/></g></svg>'],
  //coverpage Svgs

  //letter od day
  lettterOfDay: "m",
  //letter od day

  // if container consists of sprite then value should be true or else false
  spriteClickable: true,
  // if container consists of sprite then value should be true or else false

  // if container consists of text then value should be true or else false
  textClickable: false,
  // if container consists of text then value should be true or else false

  // autoplay states whether audio should be played by default while turning pages value shold be true if required or else false
  autoPlay: true,
  // autoplay states whether audio should be played by default while turning pages value shold be true if required or else false

  //array should be empty if there are no svg interactivity in booklet(i.e; svgData: [])
  "svgData":[
'<svg version="1.1" id="page_0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="886px" height="691px" viewBox="0 0 886 691" enable-background="new 0 0 886 691" xml:space="preserve"><g id="0" class="transparentClick" opacity="0"><g><path fill="#6B6B6B" d="M821.908,379.535c0,6.048,0,12.105,0,18.163c-7.632,16.902-19.256,29.8-32.989,40.59c3.183,11.463,9.912,21.966,9.581,33.12c-0.66,21.968-23.504,30.729-41.515,37.385c-2.098,2.233-0.81,6.094,0,8.615c-33.309-10.781-47.104,11.462-69.183,26.848c-14.817,10.319-33.019,22.282-46.825,29.847c-29.988,16.41-66.956,33.944-105.373,44.862c-48.519,2.583-186.623,1.789-272.51,0.778c-14.354-22.495-5.355-45.635-25.709-74.557c-4.652-6.613-20.883-21.865-30.666-25.572c-14.233-5.386-38.503-1.213-52.16,4.204c-8.367,3.323-8.304,6.438-15.021,11.821c-8.388-3.729-18.265-15.95-24.354-26.847c-3.8-6.796-6.675-11.421-7.452-22.221c-1.586-21.881,1.841-41.466,17.967-45.942c-18.778-17.073-43.557-61.618-17.967-87.805c-4.875-21.465-9.399-43.271-13.838-65.162c0-5.695,0-11.401,0-17.095c7.238-17.298,11.049-38.1,19.161-52.341c6.153-10.823,24.058-27.352,35.118-33.121c12.124-6.314,25.952-8.28,42.58-13.89c1.948-17.415,5.216-36.519,12.774-53.41c8.068-18.035,30.806-43.571,44.697-54.479c22.418-17.619,63.678-30.161,100.052-18.163c12.667,4.178,20.715,13.665,31.935,21.368c25.015-29.371,72.779-35.92,123.459-39.531c7.1,0,14.189,0,21.289,0c49.615,0.417,75.44,24.702,104.31,45.932c19.628-11.155,54.916-21.315,83.019-8.537c8.08,3.665,18.438,11.207,26.601,18.152c9.123,7.768,19.523,15.865,22.354,21.368c7.823,15.171-0.414,31.989,0,50.215c26.187-2.03,34.117,13.057,43.644,29.906c5.409,9.583,9.891,21.272,11.711,38.463c1.362,13.002,1.872,31.39,0,41.658c-2.034,11.111-10.603,19.081-12.774,34.189c-1.564,10.865-3.236,26.357-2.13,33.109c1.269,7.8,8.336,14.573,11.71,22.437C817.48,363.423,818.768,370.978,821.908,379.535z"/></g></g></svg>',
'<svg version="1.1" id="page_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="886px" height="691px" viewBox="0 0 886 691" enable-background="new 0 0 886 691" xml:space="preserve"><g id="1" class="transparentClick"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M460.204,563.095c-28.445,9.479-95.87,55.761-95.87,55.761h-73.747l-24.231-24.881l-23.392-30.88l-13.481-21.07l-11.589-17.91v-13.694l6.268-9.695l23.231-23.178l28.226-28.078l12.541-24.851l2.321-21.712c0,0-1-43.141-1-62.105c0-18.963,11.803-37.979,26.552-42.192s29.229,10.021,29.229,10.021l13.805,20.583l8.268,17.911l20.177,15.802l24.757,2.946l28.296-7.534l41.192-28.766c0,0,27.964-31.017,66.942-48.927c38.979-17.91,60.159-13.589,60.159-13.589l23.337,14.741l8.441,15.808l-0.336,21.074l11.804,21.069l5,30.554l-2,36.656c0,0-18.804,41.304-20.908,44.465c-2.107,3.16-15.856,18.123-15.856,18.123s-14.854,26.018-18.017,26.018s-21.07,16.855-21.07,16.855l-36.874,24.229l-36.979,14.75L460.204,563.095z"/></g><g id="0" class="transparentClick"><g id="XMLID_2_" opacity="0"><g><path fill="#6B6B6B" d="M623.151,274.719c1.714,5.821-14.087-7.998-13.651-6.719c-17.934-5.475-33.664,2.608-53,8c-7.977,5.24-23.566,13.157-31,17c-16.145,8.334-74.811,64.604-95.493,70.148c-26.123,1.313-43.507,4.852-62.672-16.024c-7.728-11.425-6.198-19.1-17.157-33.789c-2.504-3.357-11.243-13.104-16.51-14.986c-6.613-9.694-6.889-16.813-10.167-22.349c-2.046-3.452-5-17-13-32c-10-19-10-19-24.126-40.363c-2.17-9.019-5.899-16.637-5.45-33.098c0-2.893,0-5.791,0-8.683c3.896-8.786,3.949-19.353,8.316-26.585c3.313-5.497,12.953-13.894,18.907-16.822c6.526-3.208,14.393-2.671,24.925-4.055c1.049-8.847,4.808-19.549,8.877-28.127c4.344-9.161,14.585-20.131,22.063-25.671c12.07-8.949,35.284-24.319,54.867-18.226c6.82,2.122,14.153,10.94,20.194,14.854c13.467-14.918,24.188-23.58,49.425-30.079c3.823,0,19.684,0,23.506,0c26.713,0.212,59.494,20.854,56.16,31.33c10.567-5.666,28.565-7.827,43.696-1.336c4.351,1.86,9.927,5.691,14.321,9.219c4.911,3.945,9.512,10.058,11.035,12.853c4.212,7.706,2.777,18.248,3,27.505c12.568-0.919,18.898,6.188,22.497,12.19c2.913,4.867,4.325,9.805,5.307,18.536c0.732,6.604,1.008,15.944,0,21.159c-1.097,5.644-4.709,10.69-5.879,18.365c-0.842,5.519-16.239,27.604-15.645,31.033c0.684,3.961-11.817,31.006-10,35C630.5,252,629.815,262.09,623.151,274.719z"/></g></g></g></svg>',
'<svg version="1.1" id="page_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="886px" height="691px" viewBox="0 0 886 691" enable-background="new 0 0 886 691" xml:space="preserve"><g id="2" class="transparentClick"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M412.739,619c0,0,54.261-72.107-81.871-71.94c0,0-11.572,58.579-5.229,71.94H412.739z"/><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M322.612,516.494c0,0,27.988,14.082,62.523,8.488c0,0,22.792-1.602,59.472-13.488c36.68-11.886,64.279-41.05,64.279-41.05l-31.422-36.36c0,0-18.467,23.916-61.383,36.563c0,0-75.084,16.353-82.986-13.791c0,0-2.112-53.142,14.803-62.229c16.915-9.091,21.028-5.594,33.716-1.396c23.442-0.229,56.385-0.699,66.253-37.758c9.865-37.061,10.514-64.954-4.258-73.906l-33.102-19.09c0,0-20.365-44.4-35.758-63.279l-20.625-15.432l-26.078-7.992c0,0-2.838-28.691-14.096-30.067c-6.953-0.85-11.277,18.181-11.982,20.278s-15.801-11.886-26.373-15.383c0,0,2.344,7.867,4.523,18.18c0,0-18.324-17.481-35.945-13.285c0,0,12.687,33.563,18.325,34.96c5.638,1.398-38.059-1.496-80.347,62.831c0,0-43.775-2.287-54.27,39.156c0,0-8.884,31.557,19.735,49.742c35.24,19.576,41.583,14.684,41.583,14.684l31.012,27.971c0,0-33.831,38.358-59.203,97.795c0,0,49.989,17.365,15.506,100.313c0,0-9.047,24.789,7.163,36.055h63.432c0,0-1.111-56,11.163-72.107c0,0,15.735-36.893,40.403-31.997c0,0,19.683,0,25.938,16.082L322.612,516.494z"/><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M132.114,478.534c0,0,28.386-78.534-21.849-124.46c0,0-42.288-37.458-73.299-40.254c0,0-31.011-2.399-22.553,17.179c0,0,18.324,30.066,45.812,40.557c0,0,33.125,13.982,44.402,41.952c0,0,12.873,38.493,2,68.026c0,0-24.127,59.466-3.819,92.793C102.808,574.327,96,501,132.114,478.534z"/></g><g id="1" class="transparentClick"><g id="Layer_2_1_"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M593.697,436.775c-14.68,4.894-52.476,30.775-52.476,30.775l-16.723,16l-18.336-18l-12.506-12.84l-12.072-15.937l-6.957-10.873l-5.979-9.242v-7.067l3.234-5.003l11.989-11.961l14.564-14.488l6.472-12.824l1.198-11.205c0,0-0.517-22.262-0.517-32.048s6.092-19.6,13.704-21.773c7.61-2.175,15.084,5.171,15.084,5.171l7.124,10.622l4.269,9.244l10.41,8.154l12.777,1.52l14.604-3.887l21.258-14.844c0,0,14.43-16.006,34.545-25.249c20.113-9.242,31.045-7.014,31.045-7.014l12.043,7.607l4.354,8.158l-0.173,10.875l6.091,10.872l2.58,15.767l-1.03,18.917c0,0-9.705,21.314-10.79,22.946c-1.088,1.63-8.184,9.352-8.184,9.352s-7.665,13.426-9.298,13.426c-1.631,0-10.873,8.699-10.873,8.699l-19.028,12.504l-19.082,7.61L593.697,436.775z"/></g></g><g id="0" class="transparentClick"><g id="Layer_4_2_"><g id="XMLID_1_" opacity="0"><g><path fill="#6B6B6B" d="M677.786,287.96c0.884,3.004-7.271-4.127-7.045-3.467c-9.255-2.825-17.372,1.346-27.352,4.128c-4.115,2.705-12.16,6.791-15.997,8.773c-8.331,4.301-38.605,33.339-49.278,36.201c-13.481,0.677-22.453,2.503-32.344-8.271c-3.987-5.896-3.198-9.856-8.854-17.438c-1.292-1.732-5.803-6.762-8.521-7.733c-3.412-5.003-3.556-8.676-5.246-11.534c-1.057-1.781-2.581-8.771-6.708-16.513c-5.161-9.805-5.161-9.805-12.451-20.829c-1.121-4.654-3.045-8.585-2.813-17.08c0-1.493,0-2.988,0-4.479c2.012-4.534,2.038-9.987,4.292-13.72c1.71-2.837,6.687-7.169,9.759-8.681c3.367-1.655,7.427-1.377,12.861-2.092c0.541-4.565,2.481-10.088,4.582-14.516c2.241-4.727,7.525-10.388,11.387-13.247c6.229-4.617,18.209-12.55,28.314-9.404c3.52,1.095,7.305,5.646,10.421,7.666c6.949-7.699,12.483-12.168,25.507-15.522c1.974,0,10.157,0,12.129,0c13.786,0.109,30.702,10.762,28.981,16.167c5.453-2.923,14.742-4.039,22.55-0.688c2.246,0.959,5.123,2.937,7.393,4.757c2.532,2.036,4.906,5.189,5.692,6.632c2.174,3.977,1.435,9.417,1.548,14.194c6.486-0.475,9.754,3.191,11.61,6.291c1.503,2.512,2.232,5.06,2.738,9.564c0.378,3.408,0.52,8.229,0,10.919c-0.565,2.912-2.432,5.518-3.034,9.478c-0.435,2.848-8.38,14.246-8.073,16.015c0.354,2.043-6.099,16-5.161,18.062C681.578,276.236,681.226,281.443,677.786,287.96z"/></g></g></g></g></svg>',
'<svg version="1.1" id="page_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="886px" height="691px" viewBox="0 0 886 691" enable-background="new 0 0 886 691" xml:space="preserve"><g id="3" class="transparentClick"><g id="Layer_1_1_"></g><g id="Layer_2"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M510.11,364.085c0,0,188.106-7.257,222.313-14.681c41.716-9.054,53.516-7.389,72.31-35.703c18.791-28.313,27.313-54.383,6.341-71.162c-20.976-16.777-39.946-6.292-44.143,0c0,0-22.776-1.146-68.919,30.313c0,0,22.988-41.854-10.681-51.286l-9.438,6.389c0,0-10.895-8.957-28.118,41.605c0,0-9.486,17.973-13.683,14.827c-4.192-3.146,15.906-47.391-4.438-72.405c0,0-5.146-5.194-17.73-1l-10.68,14.218l-16.389,34.119l-11.535,10.34c0,0-0.1-7.194-0.1-10.34c0-3.146,2-6.389,2-9.535c0-3.146,0-30.994-23.068-40.665c-23.07-9.671-31.459,16.546-29.361,21.789s0,24.119,0,24.119l-6.292,19.924l-8.39,6.59c0,0-12.11-1.541-21.11-3.541c0,0-11.244,5.434-26,9c-10.041,2.43-20,2-20,2l-17,1l-19.045-5.845c0,0-4.11-5.865-3.413-14.109c0.979-11.57,6.579-27.831,3.807-39.139c-4.564-18.623-18.879-22.841-26.074-18.729c0,0-11.273,5.82-20.273,25.82c0,0-0.739,26.484-6.749,46.632C352.388,290.877,335,288,335,288l-16.068-5.881l-8.666-20.52l8.089-26.497c0,0,6.646-34.104-16.924-43.24c0,0-15.078-4.827-23.378,2.342c-5.749,4.964-10.165,24.505-10.165,24.505c-5.6-3.896-8.726-11.877-13.131-14.161c-3.164-1.64-7.465,7.933-7.757,8.533c0,0,2-23.199-20.021-25.184c-22.021-1.983-33.362,24.135-33.362,24.135L183.08,237.2v23.07l2,22.068c0,0,7.438,14.634,8.486,17.778c1.049,3.146,6.438,12.681,6.438,12.681l13.438,10.343l10.438,8.292l-0.951,11.824c0,0,5.207,3.896,10.807,6.792c5.6,2.896,11.593,4.792,13.166,4.792c3.146,0,12.584,4.243,12.584,4.243S225,377,275.388,390.059l29.189,0.438l-6.292,12.361l-8.389,19.428l-10.389,20.448l-12.098,15.39l-4.486-1.757l-13.681-20.729l-14.632,8.146l2.049,8.584l5.243,9.243l-10.486,14.682l-28.557,34.604L178.74,533.16l-20.021,24.826l-9.34,14.778l-3,19.925c0,0,3,10.486,3,16.778s0,11.479,0,11.479h509.64c0,0-18.875-40.842-81.794-23.015c0,0-10.484-2.1-4.192-13.633c6.292-11.535,15.827-6.391,15.827-6.391s-2.195-28.216-36.802-16.681l-13.633,9.438c0,0-1.049-1.049-6.292-1.049s-14.681,1.951-14.681,1.951s-4.194-7.292-13.633-7.292c-9.439,0-22.021-2-22.021-2s2.1-5.243-11.535-5.243c-13.632,0-13.632,0-13.632,0l-12.584-7.34L433.56,538.16l5.486-15.729c0,0,11.292-9.341,14.438-9.341c3.146,0,9.438-2.194,13.632-1.146c4.192,1.049,4.192,1.049,14.681,1.049s1.049,1.05,10.486,0c9.438-1.049,4.193-1.146,19.925-0.097c15.729,1.048,15.729-0.952,15.729-0.952s-4.192,2.1,6.292,3.146c10.486,1.048,23.07,11.534,38.802,6.292c15.729-5.243,42.992-10.486,49.286-10.486c6.291,0,31.459-5.243,34.604-6.292c3.146-1.049,11.534-1.049,18.875-5.243c7.341-4.192-1.049,2.243,7.341-7.192c8.39-9.438,6.438-2.051,11.683-20.927c5.241-18.875,3-40.043,3-43.188c0-3.146-2.97-12.024-7.343-20.688c-1.805-3.575-17.825-25.598-42.993-22.452c-25.167,3.146-42.993,6.584-42.993,6.584s-19.392,5.123-28.313,8.361c-15.175,5.507-26.216,6.743-30.41,9.507c-4.192,2.765-14.682,2-14.682,2s-6.194,0.383-8.291,0c-2.098-0.382-6.391-13.723-6.391-16.868c0-3.145,0-16.776,0-16.776L510.11,364.085z"/><path fill="#FFFFFF" d="M420,255"/></g></g><g id="2" class="transparentClick"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M460.957,349.545c0,0,33.986-45.16-51.277-45.056c0,0-7.248,36.688-3.274,45.056H460.957z"/><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M405.509,283.347c0,0,16.53,9.818,38.159,6.315c0,0,14.277-0.003,37.25-7.447c22.975-7.443,40.261-25.709,40.261-25.709l-19.68-23.771c0,0-11.565,14.979-38.448,22.897c0,0-47.025,11.242-51.976-7.636c0,0-1.323-33.281,9.271-38.973c10.595-5.694,13.171-3.504,21.117-0.876c14.684-0.144,35.316-0.438,41.496-23.647s6.586-40.681-2.665-46.287l-20.733-11.957c0,0-12.756-27.809-22.396-39.633l-12.918-9.665l-16.333-5.005c0,0-1.778-17.97-8.828-18.832c-4.354-0.532-7.063,11.388-7.505,12.701c-0.441,1.314-9.896-7.444-16.518-9.634c0,0,1.469,4.928,2.832,11.386c0,0-11.477-10.949-22.513-8.321c0,0,7.946,21.021,11.478,21.896c3.53,0.876-23.836-0.938-50.322,39.352c0,0-27.417-1.432-33.991,24.524c0,0-5.563,19.765,12.361,31.154c22.071,12.261,26.044,9.194,26.044,9.194l18.423,16.519c0,0-20.213,20.057-27.079,61.247c0,0-0.796,10.194,9.92,20.181c0,0,29.951,14.014,33.284-0.986l3.333-24.333c0,0,0.979-20.576,8.667-30.667c0,0,8.55-17.063,24-14c0,0,21.333,0,14.848,30.572L405.509,283.347z"/><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M282.743,192.155c0,0-1.013-2.552-11.23-8.529c0,0-22.679-25.269-45.908-25.21c0,0-18.422-1.503-13.125,10.759c0,0,14.499,18.724,27.692,25.399c0,0,20.747,8.757,27.81,26.274c0,0,3.949-11.364,4.852-14.847C272.833,206.002,277.5,197.335,282.743,192.155z"/></g><g id="1" class="transparentClick"><g id="Layer_2_2_"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M572.296,235.421c-9.191,3.063-32.864,19.274-32.864,19.274l-10.474,10.021l-11.484-11.273l-7.831-8.041l-7.563-9.98l-4.356-6.81l-3.746-5.788v-4.426l2.025-3.133l7.51-7.492l9.123-9.075l4.054-8.031l0.75-7.018c0,0-0.321-13.941-0.321-20.071c0-6.128,3.813-12.273,8.582-13.637c4.766-1.361,9.447,3.238,9.447,3.238l4.463,6.652l2.672,5.789l6.521,5.108l8.003,0.952l9.146-2.436l13.313-9.297c0,0,9.038-10.025,21.637-15.813c12.598-5.788,19.442-4.394,19.442-4.394l7.544,4.765l2.727,5.109l-0.106,6.812l3.813,6.81l1.617,9.874l-0.646,11.848c0,0-6.078,13.35-6.758,14.371c-0.682,1.021-5.124,5.857-5.124,5.857s-4.802,8.408-5.825,8.408c-1.021,0-6.809,5.447-6.809,5.447l-11.92,7.832l-11.95,4.767L572.296,235.421z"/></g></g><g id="0" class="transparentClick"><g id="Layer_4_2_"><g id="XMLID_1_" opacity="0"><g><path fill="#6B6B6B" d="M624.962,142.219c0.555,1.882-4.554-2.584-4.411-2.173c-5.797-1.769-10.881,0.845-17.132,2.586c-2.576,1.695-7.614,4.254-10.017,5.495c-5.221,2.693-24.182,20.88-30.864,22.672c-8.445,0.425-14.063,1.568-20.258-5.18c-2.498-3.691-2.003-6.172-5.547-10.921c-0.81-1.085-3.634-4.234-5.337-4.842c-2.137-3.134-2.226-5.435-3.285-7.225c-0.66-1.114-1.615-5.493-4.201-10.343c-3.231-6.141-3.231-6.141-7.798-13.045c-0.703-2.915-1.906-5.377-1.763-10.697c0-0.936,0-1.873,0-2.807c1.259-2.839,1.274-6.255,2.688-8.592c1.072-1.777,4.188-4.491,6.111-5.438c2.108-1.038,4.651-0.862,8.056-1.311c0.339-2.859,1.555-6.318,2.87-9.091c1.404-2.96,4.713-6.506,7.132-8.297c3.901-2.894,11.403-7.86,17.733-5.892c2.204,0.687,4.574,3.536,6.525,4.801c4.353-4.82,7.818-7.62,15.978-9.722c1.234,0,6.36,0,7.597,0c8.634,0.068,19.228,6.741,18.15,10.126c3.415-1.831,9.232-2.53,14.122-0.432c1.407,0.601,3.209,1.84,4.631,2.979c1.587,1.275,3.072,3.25,3.564,4.153c1.362,2.491,0.898,5.899,0.969,8.891c4.063-0.297,6.11,1.999,7.273,3.939c0.94,1.573,1.396,3.169,1.714,5.991c0.238,2.134,0.326,5.152,0,6.838c-0.354,1.824-1.523,3.456-1.898,5.935c-0.272,1.785-5.248,8.923-5.059,10.031c0.222,1.279-3.818,10.021-3.23,11.312C627.338,134.876,627.117,138.137,624.962,142.219z"/></g></g></g></g></svg>',
'<svg version="1.1" id="page_4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="886px" height="691px" viewBox="0 0 886 691" enable-background="new 0 0 886 691" xml:space="preserve"><g id="4" class="transparentClick"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M318.187,619.135c0,0,32.274-15.666,34.357-32.984h60.385c0,0,5.77-7.445,7.852-10.069c2.083-2.625,53.577-3.197,53.577-3.197l14.055-6.673h7.288c0,0,2.082-4.726,2.603-6.3c0.521-1.572,6.771-12.595,6.771-12.595s1.04-12.07,0-15.743c-1.042-3.675,3.007-1.051,0.462-6.298c-2.546-5.248-3.065-9.972-3.065-12.595c0-2.625,0-3.149,0-6.823c0-3.673-1.562-5.247,0-9.444c1.563-4.197,3.92-8.923,3.92-8.923h1.808c0,0-1.041-1.05,3.124-2.624c4.164-1.572,4.164-2.1,6.767-3.674c2.604-1.574-1.562,0.525,2.604-1.574c4.164-2.099,4.164-2.099,4.164-2.099s5.728-4.198,6.246-5.771c0.314-0.952,1.2-2.48,2.084-4.119c0.573-1.072,1.148-2.192,1.562-3.229c1.042-2.624,1.042-6.298,3.644-8.396l3.124,4.197c0,0-3.124,14.693-6.768,13.12c-3.646-1.573-13.014,12.597-13.014,12.597l-8.328,13.117l-2.604,11.548l1.563,4.723c0,0,6.247,1.05,7.808,2.624c1.563,1.574-0.52-1.574,1.563,1.574c2.083,3.147,1.563,9.444,2.083,11.021c0.519,1.574,2.602,4.121,2.082,7.047c-0.521,2.925-2.604,4.499-2.082,8.697c0.519,4.198,2.082,7.348,4.164,11.546s9.89,10.495,13.532,12.069c3.646,1.573-7.809-5.772,0,0c7.811,5.771,3.123,4.724,10.934,7.347c7.81,2.625,9.891,4.198,15.097,4.724c5.206,0.526,4.164,0.525,11.972,2.102c7.813,1.574-2.602-1.05,7.813,1.574c10.411,2.624,20.82-1.574,20.82-1.574s3.645-2.102,6.247-2.102c2.604,0,6.768-0.523,9.893-1.572c3.122-1.052,3.122-2.101,5.726-3.149c2.604-1.049,7.287-5.247,10.933-6.821c3.645-1.572,3.645-2.1,7.81-4.196c4.165-2.102,6.247-0.525,7.287-4.726c1.042-4.196-3.644,2.102,1.042-4.196c4.686-6.3,3.645-2.624,6.246-10.496c2.604-7.871,3.645-6.821,3.645-11.545c0-4.726,0-7.35,0-9.973c0-2.624,2.082-5.771,0-8.922c-2.081-3.147-3.645-7.347-4.686-12.068c-1.04-4.725,0-4.725-3.123-11.548c-3.124-6.819-0.521-6.819-5.729-10.495c-5.203-3.674-26.026-22.039-27.59-22.039c-1.561,0-5.204-4.199-5.204-4.199l29.673,2.625l2.081-6.823l-13.015-12.595H621.16c0,0-8.852,1.05-10.41,0c-1.563-1.049-5.206-3.148-6.769,0c-1.563,3.147-2.604,2.1-8.328,5.771c-5.729,3.675-8.328,4.726-10.411,6.298c-2.082,1.575-5.729,4.198-5.729,4.198s-5.204-5.248-5.725-6.821c-0.521-1.573-1.041-2.1-2.083-4.724c-1.041-2.624-0.521-2.801-3.123-6.386c-2.604-3.585-5.206-6.21-5.206-6.21s-3.644-2.624-4.164-4.198c-0.52-1.574-0.521-1.574-0.521-1.574s7.809,5.248,11.973,5.772c4.165,0.523,5.205,1.051,7.288,1.051c2.082,0,1.561,2.099,4.686-0.525c3.122-2.624-0.521,1.051,3.122-2.624c3.646-3.674-0.52,3.149,3.646-3.674c4.165-6.822,2.083-3.146,4.165-6.822c2.082-3.673,1.562,5.772,2.082-3.673c0.521-9.446,2.083-6.823,1.041-13.12c-1.041-6.298-1.041-3.674-2.082-9.444c-1.041-5.772-1.041-7.872-3.123-12.597c-2.083-4.724-6.247-16.269-6.247-16.269l-2.082-4.198l-5.206-2.625h-4.164c0,0-2.604,3.149-4.685,4.724c-2.083,1.574-4.165,2.102-6.247,3.676c-2.082,1.572-3.124,2.099-5.729,3.147c-2.602,1.049-1.561,0.523-6.246,2.101c-4.685,1.572-7.288,2.1-8.849,2.622c-1.563,0.524-1.563,0.524-1.563,0.524l-5.727-5.247c0,0-3.644-5.771-4.685-7.348c-1.042-1.574-2.604-4.199-2.604-4.199s-0.521-1.049-2.083,0c-1.561,1.051-1.561,1.051-1.561,1.051l-3.646-1.517h-1.561h-3.646l-2.082,13.062l-3.123,4.198c0,0-3.645,7.347-2.083,7.347c1.563,0,1.563,0,1.563,0l4.685,3.676h4.164c0,0,2.082-2.101,5.207-1.575c3.122,0.523-2.083-1.049,3.122,0.523c5.206,1.574,2.604,0.525,5.206,1.574c2.604,1.05,5.727,2.624,5.727,2.624l4.688,1.574l5.204,4.724l1.042,3.673l-1.042,2.625l-1.563,3.148c0,0-2.083,3.674-2.604,5.248c-0.521,1.574-0.521,2.099-2.082,5.771c-1.563,3.675-2.083,3.149-4.164,5.772c-2.083,2.624-2.083,2.624-2.083,2.624s-2.603,2.102-3.646-1.574c-1.041-3.673,1.563-3.147-1.041-7.348c-2.603-4.199-3.121-7.347-3.121-7.347l-1.041-3.148l-7.288-1.574c0,0-3.124-1.05-5.729,0c-2.604,1.05-5.206,1.574-5.206,1.574s-2.602-1.05-3.123,2.624c-0.521,3.673-0.521,4.198-0.521,6.297c0,2.1-1.563-0.524,0,2.1c1.561,2.624,1.561,2.624,1.561,2.624l-4.684,0.525c-14.056,1.574-6.77-0.525-14.056,1.574c-7.289,2.099,0,0,0,0l-17.699,0.522c0,0-4.165,2.102-5.728,2.626c-1.562,0.522-10.933-0.524-14.576,0.522c-3.644,1.05-3.122,1.05-9.368,2.624c-6.247,1.574-9.893,1.574-14.058,2.625c-4.165,1.049-7.288,1.573-10.412,3.673c-3.123,2.102-3.644,1.049-6.767,3.148c-3.124,2.099-3.124,2.099-3.124,2.099l0.521,5.773c0,0-5.205-2.624,6.769-2.624c11.973,0,13.535-2.101,15.617-2.101s3.124-1.572,8.329-1.051c5.205,0.525,1.562-1.574,5.205,0.525c3.645,2.099,9.369,4.198,9.369,4.198s1.563,0.523,3.124,1.05c1.563,0.522-0.521-2.624,1.563,0.522c2.082,3.149,3.123,3.674,3.645,5.772c0.521,2.1,0-0.523,0.521,2.1c0.521,2.624,0.521,5.248,0.521,5.248s0,1.049,0,3.674c0,2.624,0,2.624,0,2.624s-2.603,1.574-3.123,3.148c-0.521,1.575,2.604-0.524-0.521,1.575c-3.122,2.099-3.644,6.296-3.644,6.296c-3.645,3.675-5.728,6.823-5.728,6.823s0.933,1.571-2.656,3.673c-3.59,2.1-2.55,0.503-4.632,3.398c-2.082,2.897-7.288,3.947-7.808,6.047c-0.521,2.101,1.562-2.1-0.521,2.101c-2.082,4.198-6.247,13.12-6.247,13.12l-4.165,3.146c0,0,3.646,3.148,8.853,2.624c5.205-0.522,1.561-2.099,5.205-0.522c3.644,1.571,5.206,2.624,6.247,4.196c1.04,1.574-1.043-1.572,1.04,1.574c2.083,3.148-4.165,6.822-4.165,6.822v4.198l-4.686,1.049c0,0-3.644-0.523-5.726,0c-2.083,0.523-6.77,0.523-9.893,1.575c-3.124,1.049,1.563,0.522-3.124,1.049c-4.685,0.523-7.808,1.051-7.808,1.051s-7.81,0.523-14.056,0c-6.246-0.525-8.852-1.575-10.934-2.1c-2.082-0.525-2.603-2.101-2.082-5.773c0.521-3.673-3-3.146-1.438-7.871c1.562-4.724,4.562-8.396,4.562-8.396l-1.042-3.673c0,0,1.042-6.822,2.604-8.396c1.562-1.574,1.562-1.574,1.562-1.574l-9.891-3.147l-15.098-1.574c-4.164,0-6.769-0.525-6.769-0.525s-2.082-4.742-5.205-4.996c-3.124-0.251-4.685,1.303-6.768,0c-2.083-1.301-4.687-0.271-8.852,0c-4.163,0.274-5.726-0.798-9.891,0c-4.165,0.8-4.165-2.371-11.452,0c-7.288,2.373-2.604,0.8-9.891,2.897c-7.289,2.098,1.041,1.575-13.535,2.099c-14.576,0.525-22.385,0-23.946,0c-1.562,0-3.124-2.623-8.329-2.623s-7.809-2.372-7.809-2.372c-3.644,0.273,2.603,2.372-3.644,0.273c-6.247-2.1-6.767-3.148-9.37-4.724s-5.727-4.198-5.727-4.198l-3.644-7.347c0,0-2.082-4.198-3.124-7.35c-1.041-3.146,0-5.771,0-5.771s-2.603-3.149-4.165-1.574c-1.561,1.574-3.644,1.574-4.685,4.723c-1.042,3.148,2.603,2.101,0,6.822c-2.603,4.724,0.041-5.1-3.603,1.724c-3.644,6.821-4.726,15.573-6.288,17.421c-1.562,1.849,2.836,2.372,0.754,6.57c-2.083,4.198-8.645,8.772-10.206,10.872c-1.562,2.1-2.521-3.674-7.206,4.724c-4.686,8.396-7.686,11.021-7.686,11.021s-1.561,1.574,0,3.674c1.563,2.1,0,1.574,5.206,3.674c5.206,2.102,1.562,1.574,8.85,3.673c7.288,2.102,8.411,0.676,8.411,0.676s5.521-2.477,2.917-0.376c-2.603,2.1-1.959,6.82-1.959,6.82s-0.52,2.624-1.041,5.248c-0.52,2.624-2.52,5.101-3.041,9.298c-0.521,4.198-1.562,3.675-1.562,7.871c0,4.198,1.041,8.396,1.041,11.546c0,3.148,0.521,2.102,1.042,6.822c0.52,4.725,7.082,5.772,8.124,9.446c1.041,3.674,0-1.05,4.164,5.247c4.165,6.298,0,6.298,7.808,11.021c7.809,4.725,2.603,2.624,10.412,6.298c7.809,3.675,3.124,7.271,11.453,7.271H318.187L318.187,619.135z"/></g><g id="3" class="transparentClick"><g id="Layer_1_1_"></g><g id="Layer_2_1_"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M411.615,434.571c0,0,57.854-16.043,89.66-16.753c5.637-0.126-2.108,5.512,10.687,12.999c7.096,4.152,14.716-0.438,21.137-6.005c2.444-2.119,4.79,2.811,7.027,0.805c3.862-3.463,2.464-1.794,5.769-4.922c4.017-3.801,7.595,0.58,10.673-2.758c9.688-10.503,8.233-23.531,8.233-23.531s-12.457-26.955-53.984-15.19c0,0-6.922-1.385-2.769-8.996c4.152-7.613,10.447-4.218,10.447-4.218s-1.45-18.622-24.29-11.01l-8.998,6.229c0,0-0.692-0.691-4.152-0.691c-3.461,0-9.688,1.287-9.688,1.287s-2.771-4.813-8.998-4.813c-6.229,0-14.535-1.32-14.535-1.32s1.385-3.459-7.613-3.459c-8.997,0-8.997,0-8.997,0l-8.305-4.846l-6.922-7.612l3.621-10.381c0,0,7.452-6.164,9.528-6.164s6.229-1.449,8.997-0.757c2.769,0.692,2.769,0.692,9.69,0.692s0.691,0.693,6.92,0c6.229-0.692,2.771-0.756,13.152-0.064c10.38,0.692,10.38-0.627,10.38-0.627s-2.769,1.386,4.153,2.076c6.922,0.692,15.228,7.613,25.607,4.152c10.383-3.459,28.377-6.92,32.53-6.92c4.151,0,20.764-3.461,22.84-4.153s7.612-0.692,12.459-3.46c4.845-2.768-0.693,1.48,4.845-4.747c5.536-6.229,4.249-1.354,7.71-13.812c3.46-12.457,1.979-26.429,1.979-28.503c0-2.075-1.959-7.937-4.846-13.653c-1.19-2.36-11.767-16.896-28.377-14.819c-16.61,2.077-28.377,4.345-28.377,4.345s-12.799,3.382-18.688,5.52c-10.017,3.634-17.303,4.45-20.072,6.272c-2.768,1.825-9.688,1.321-9.688,1.321s-4.089,0.251-5.474,0c-1.385-0.253-4.218-9.057-4.218-11.134c0-2.076,0-11.072,0-11.072l-4.151-9c0,0,124.154-4.79,146.729-9.689c27.534-5.976,35.321-4.876,47.728-23.564c12.401-18.687,18.025-35.894,4.185-46.968c-13.843-11.074-26.365-4.153-29.134,0c0,0-15.034-0.756-45.488,20.007c0,0,15.173-27.625-7.05-33.85l-6.229,4.216c0,0-7.189-5.912-18.559,27.461c0,0-6.261,11.862-9.03,9.786c-2.768-2.077,10.499-31.278-2.929-47.79c0,0-3.397-3.428-11.703-0.66l-7.048,9.384l-10.817,22.52l-7.613,6.824c0,0-0.064-4.749-0.064-6.824c0-2.077,1.32-4.218,1.32-6.293c0-2.077,0-20.457-15.228-26.841c-15.227-6.383-20.764,10.922-19.38,14.383c1.385,3.46,0,15.919,0,15.919l-4.152,13.149l-5.536,4.351c0,0-7.993-1.018-13.934-2.337c0,0-7.422,3.586-17.16,5.939c-6.628,1.604-13.2,1.32-13.2,1.32l-11.22,0.66l-12.571-3.858c0,0-2.713-3.871-2.252-9.312c0.646-7.639,4.344-18.37,2.513-25.833c-3.014-12.292-12.46-15.075-17.21-12.361c0,0-7.441,3.842-13.381,17.042c0,0-0.488,17.479-4.455,30.778c-1.229,4.122-12.706,2.223-12.706,2.223l-10.605-3.881l-5.72-13.544l5.339-17.489c0,0,4.387-22.508-11.17-28.539c0,0-9.951-3.186-15.43,1.545c-3.794,3.277-6.709,16.174-6.709,16.174c-3.696-2.571-5.76-7.839-8.667-9.347c-2.088-1.082-4.927,5.235-5.121,5.632c0,0,1.32-15.312-13.214-16.622c-14.535-1.309-22.02,15.931-22.02,15.931l-6.955,16.611v15.227l1.32,14.566c0,0,4.909,9.658,5.601,11.734c0.692,2.077,4.249,8.369,4.249,8.369l8.87,6.826l6.89,5.473l-0.627,7.805c0,0,3.436,2.572,7.132,4.483c3.696,1.912,7.652,3.163,8.69,3.163c2.076,0,8.306,2.8,8.306,2.8s-22.762,11.824,10.496,20.444l19.266,0.289l-4.153,8.157l-5.537,12.822l-6.856,13.496l-7.985,10.157l-2.961-1.16l-9.029-13.681l-9.658,5.375l1.353,5.665l3.46,6.101l-6.921,9.689l-18.848,22.839l-15.919,14.693l-13.214,16.386l-6.165,9.754l-1.98,13.149c0,0,1.98,6.922,1.98,11.074c0,2.024,2.382,8.155,1.75,13.906c-0.665,6.044-4.346,11.669-4.346,11.669l-2.334,12.563c0,0,6.486,17.613-0.163,23.313c-5.11,4.38-5.75,15.441,0.594,20.965c4.843,4.217,4.569,13.415,24.569,18.879c6.506,1.777,14.399,3.844,22.586,2.954c30.746-3.339,44.697-0.586,72.005-5.448c7.792-1.388,15.408,9.107,18.701,8.888c8.952-0.601,17.977-1.938,26.982-3.872c0,0-12.324,31.212-9.217,42.001c2.431,8.434,11.273,4.682,35.238,6.101c16.83,0.996,29.223-8.498,26.582-22.923c-1.015-5.546-25.095,3.798-22.545-0.83c3.041-5.518,6.85-9.685,6.608-13.158c-0.663-9.508,12.048-5.175,28.698-36.039c16.67-30.898-25.114-28.641-37.649-24.809c-6.242,1.908-15.991,7.006-11.876-2.419"/><path fill="#FFFFFF" d="M406.045,152.881"/></g></g><g id="2" class="transparentClick"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M433.077,215.282c0,0,22.432-29.807-33.842-29.737c0,0-4.784,24.215-2.162,29.737H433.077z"/><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M396.482,171.591c0,0,10.908,6.481,25.184,4.17c0,0,9.423-0.003,24.586-4.916s26.571-16.97,26.571-16.97l-12.988-15.689c0,0-7.634,9.887-25.375,15.113c0,0-31.037,7.421-34.304-5.039c0,0-0.874-21.967,6.119-25.724c6.99-3.759,8.692-2.313,13.936-0.579c9.69-0.094,23.309-0.289,27.388-15.606c4.079-15.319,4.348-26.851-1.76-30.552l-13.683-7.891c0,0-8.419-18.354-14.782-26.159l-8.525-6.379l-10.78-3.303c0,0-1.174-11.861-5.827-12.43c-2.875-0.352-4.662,7.516-4.954,8.383c-0.291,0.867-6.532-4.914-10.902-6.359c0,0,0.969,3.252,1.87,7.516c0,0-7.575-7.227-14.859-5.491c0,0,5.244,13.874,7.575,14.452c2.331,0.577-15.731-0.619-33.214,25.973c0,0-18.095-0.945-22.435,16.187c0,0-3.672,13.045,8.159,20.563c14.566,8.093,17.189,6.069,17.189,6.069l12.159,10.901c0,0-13.341,13.238-17.873,40.424c0,0-0.525,6.729,6.547,13.32c0,0,19.769,9.25,21.968-0.65l2.201-16.061c0,0,0.646-13.581,5.72-20.241c0,0,5.645-11.262,15.842-9.24c0,0,14.079,0,9.799,20.179L396.482,171.591z"/><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M315.453,111.402c0,0-0.668-1.686-7.412-5.629c0,0-14.969-16.678-30.3-16.641c0,0-12.159-0.991-8.663,7.103c0,0,9.57,12.356,18.277,16.764c0,0,13.693,5.779,18.355,17.342c0,0,2.607-7.501,3.202-9.799C308.913,120.542,311.993,114.821,315.453,111.402z"/></g><g id="1" class="transparentClick"><g id="Layer_2_2_"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M506.563,139.958c-6.068,2.021-21.691,12.722-21.691,12.722l-6.914,6.614l-7.579-7.44l-5.169-5.308l-4.991-6.587l-2.876-4.495l-2.473-3.819v-2.922l1.337-2.067l4.956-4.945l6.021-5.989l2.676-5.301l0.494-4.633c0,0-0.213-9.201-0.213-13.247c0-4.045,2.519-8.101,5.665-9c3.146-0.897,6.234,2.138,6.234,2.138l2.945,4.391l1.765,3.821l4.304,3.372l5.282,0.628l6.036-1.607l8.787-6.136c0,0,5.966-6.617,14.28-10.438c8.314-3.819,12.833-2.898,12.833-2.898l4.979,3.145l1.799,3.372l-0.069,4.496l2.518,4.495l1.066,6.517l-0.427,7.82c0,0-4.012,8.811-4.461,9.485c-0.448,0.674-3.382,3.865-3.382,3.865s-3.169,5.55-3.845,5.55c-0.673,0-4.494,3.596-4.494,3.596l-7.867,5.168l-7.887,3.146L506.563,139.958z"/></g></g><g id="0" class="transparentClick"><g id="Layer_4_2_"><g id="XMLID_1_" opacity="0"><g><path fill="#6B6B6B" d="M541.324,78.443c0.364,1.242-3.007-1.706-2.912-1.433c-3.826-1.167-7.183,0.557-11.308,1.706c-1.7,1.119-5.025,2.808-6.61,3.628c-3.445,1.776-15.96,13.78-20.372,14.964c-5.573,0.279-9.281,1.035-13.37-3.419c-1.647-2.438-1.322-4.074-3.661-7.208c-0.533-0.717-2.397-2.795-3.521-3.196c-1.41-2.068-1.47-3.586-2.169-4.769c-0.437-0.735-1.066-3.626-2.772-6.826c-2.134-4.054-2.134-4.054-5.146-8.61c-0.466-1.924-1.259-3.549-1.163-7.06c0-0.618,0-1.236,0-1.854c0.831-1.874,0.842-4.127,1.773-5.671c0.707-1.173,2.764-2.964,4.033-3.588c1.393-0.686,3.071-0.57,5.316-0.865c0.225-1.887,1.026-4.17,1.895-6c0.928-1.954,3.111-4.294,4.707-5.477c2.575-1.909,7.527-5.188,11.705-3.888c1.455,0.453,3.02,2.333,4.307,3.168c2.873-3.183,5.161-5.029,10.545-6.417c0.816,0,4.199,0,5.016,0c5.697,0.044,12.689,4.449,11.979,6.684c2.255-1.208,6.096-1.669,9.321-0.285c0.93,0.396,2.117,1.214,3.057,1.967c1.048,0.841,2.028,2.146,2.354,2.741c0.898,1.644,0.593,3.894,0.64,5.869c2.683-0.196,4.033,1.318,4.801,2.6c0.621,1.039,0.923,2.092,1.132,3.955c0.156,1.409,0.216,3.401,0,4.513c-0.232,1.205-1.007,2.281-1.255,3.917c-0.179,1.179-3.464,5.89-3.338,6.621c0.146,0.845-2.52,6.614-2.132,7.467C542.892,73.596,542.746,75.75,541.324,78.443z"/></g></g></g></g></svg>',
'<svg version="1.1" id="page_5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="886px" height="691px" viewBox="0 0 886 691" enable-background="new 0 0 886 691" xml:space="preserve"><g id="5" class="transparentClick"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M722.553,616.72V587.54l14.645-6.429l114.947-49.68l3,10.536l8.591,4.214l11.644-5.27l-20.071-157.931c0,0-5.16-45.304-40.981-49.521l-38.036,8.371l9.429-16.799h-46.251l-13.911,28.232l-76.59,15.909l-21.34,13.857c0,0-7.385,9.435-17.911,42.09c-3.231,10.028-2,93.771-2,93.771v90.554l19.697,4.271l8.855-7.432l0.107-19.069l56.465,6.376l0.053,26.368h22.396L722.553,616.72z"/></g><g id="4" class="transparentClick"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M296.963,537.063c0,0,24.885-14.131,24.834-28.551l49.538-6.134c0,0,3.977-6.692,5.417-9.06c1.442-2.364,43.626-8.065,43.626-8.065l10.852-6.901l5.979-0.74c0,0,1.229-4.087,1.495-5.431c0.269-1.344,4.273-11.021,4.273-11.021s-0.372-10.006-1.599-12.914c-1.229-2.908,2.36-1.167-0.261-5.214s-3.528-7.869-3.795-10.021c-0.268-2.153-0.32-2.584-0.692-5.599c-0.373-3.012-1.813-4.146-0.959-7.748c0.855-3.604,2.309-7.718,2.309-7.718l1.481-0.183c0,0-0.96-0.758,2.297-2.472c3.256-1.714,3.202-2.146,5.176-3.7c1.979-1.558-1.227,0.59,1.979-1.558c3.202-2.143,3.202-2.143,3.202-2.143s4.271-4.028,4.537-5.37c0.16-0.813,0.731-2.158,1.29-3.593c0.361-0.938,0.72-1.914,0.953-2.807c0.589-2.259,0.216-5.271,2.137-7.258l2.987,3.127c0,0-1.068,12.371-4.218,11.448c-3.149-0.919-9.396,11.655-9.396,11.655l-5.501,11.607l-0.963,9.737l1.762,3.716c0,0,5.229,0.229,6.672,1.358c1.442,1.134-0.587-1.237,1.442,1.134c2.028,2.37,2.241,7.589,2.828,8.829c0.585,1.238,2.553,3.116,2.425,5.57c-0.133,2.451,0.32,3.954,1.175,7.345c0.852,3.392,1.455,5.816,3.589,9.05c2.134,3.232,8.18,7.604,11.327,8.525c3.149,0.921-6.991-3.942,0,0c6.993,3.94,3.044,3.558,9.717,4.917s8.538,2.439,12.863,2.341c4.324-0.096,3.47,0.01,10.033,0.508c6.568,0.498-2.24-0.597,6.568,0.498c8.808,1.094,16.92-3.406,16.92-3.406s2.775-2.095,4.911-2.358c2.137-0.265,5.499-1.116,7.955-2.295c2.456-1.18,2.349-2.04,4.378-3.166c2.029-1.123,5.445-5.043,8.275-6.705c2.829-1.662,2.774-2.093,5.979-4.237c3.203-2.145,5.071-1.063,5.497-4.617c0.431-3.548-2.773,2.096,0.431-3.548c3.201-5.644,2.722-2.521,4.057-9.246c1.336-6.721,2.298-5.965,1.816-9.84c-0.479-3.876-0.745-6.028-1.013-8.18c-0.267-2.152,1.121-4.948-0.906-7.319c-2.027-2.372-3.734-5.657-5.069-9.425c-1.333-3.771-0.479-3.876-3.734-9.157c-3.256-5.277-10.121-12.542-14.768-15.028c-4.642-2.482-14.589-8.435-15.87-8.275c-1.28,0.158-4.696-2.916-4.696-2.916l24.609-0.861l1.013-5.809l-11.955-9.011l-14.947,1.852c0,0-7.153,1.761-8.54,1.058c-1.39-0.701-4.591-2.055-5.553,0.688c-0.961,2.741-1.922,1.985-6.245,5.581c-4.325,3.597-6.353,4.722-7.9,6.223c-1.548,1.504-4.274,4.025-4.274,4.025s-4.802-3.775-5.388-5.014c-0.588-1.239-1.067-1.617-2.188-3.664c-1.12-2.047-0.713-2.245-3.21-4.921c-2.5-2.677-4.901-4.564-4.901-4.564s-3.257-1.782-3.844-3.021c-0.587-1.238-0.588-1.238-0.588-1.238s6.939,3.514,10.41,3.521c3.468,0.005,4.376,0.333,6.084,0.121s1.494,1.563,3.79-0.906c2.295-2.471-0.319,0.913,2.295-2.471c2.618-3.385-0.104,2.636,2.618-3.385c2.723-6.02,1.389-2.795,2.724-6.02c1.334-3.225,1.867,4.576,1.334-3.225c-0.53-7.802,1.017-4.81-0.478-9.868c-1.494-5.061,0.771-3.909-0.668-8.537c-1.44-4.63-0.653-6.354-2.84-10.016c-2.19-3.664-6.778-12.712-6.778-12.712l-5.135-3.232l-4.538-1.625l-3.416,0.423c0,0-1.815,2.849-3.362,4.352c-1.549,1.503-3.203,2.146-4.751,3.65c-1.549,1.501-2.351,2.039-4.38,3.164c-2.025,1.125-1.227,0.588-4.912,2.357c-3.683,1.767-5.765,2.463-6.992,3.05c-1.229,0.59-1.229,0.59-1.229,0.59l-5.23-3.723c0,0-3.574-4.364-4.589-5.552c-1.015-1.186-2.563-3.182-2.563-3.182s-0.534-0.807-1.709,0.212c-1.173,1.021-1.173,1.021-1.173,1.021l-3.146-0.875l-1.281,0.158l-2.99,0.371l-0.381,10.928l-2.136,3.761c0,0-2.244,6.396-0.962,6.238c1.282-0.159,1.282-0.159,1.282-0.159l4.217,2.54l3.416-0.423c0,0,1.496-1.935,4.112-1.821c2.615,0.111-1.815-0.649,2.615,0.111c4.43,0.763,2.188,0.166,4.43,0.763c2.242,0.597,4.964,1.571,4.964,1.571l4.006,0.815l4.749,3.347l1.229,2.907l-0.589,2.259l-0.962,2.741c0,0-1.336,3.227-1.603,4.569c-0.269,1.344-0.214,1.773-1.122,4.943c-0.908,3.175-1.388,2.798-2.829,5.16c-1.441,2.363-1.441,2.363-1.441,2.363s-1.922,1.988-3.151-0.921c-1.227-2.907,0.963-2.742-1.601-5.922c-2.561-3.181-3.306-5.709-3.306-5.709l-1.174-2.478l-6.141-0.551c0,0-2.67-0.543-4.697,0.582c-2.029,1.126-4.112,1.821-4.112,1.821s-2.24-0.597-2.294,2.47c-0.054,3.065-0.001,3.494,0.212,5.219c0.213,1.722-1.335-0.272,0.213,1.722c1.547,1.994,1.547,1.994,1.547,1.994l-3.788,0.906c-11.37,2.721-5.605,0.258-11.37,2.721c-5.768,2.461,0,0,0,0l-14.468,2.228c0,0-3.202,2.146-4.431,2.733c-1.227,0.59-9.021,0.681-11.903,1.911c-2.883,1.229-2.456,1.178-7.42,3.104c-4.965,1.926-7.955,2.295-11.266,3.581c-3.311,1.282-5.819,2.03-8.168,4.069c-2.349,2.042-2.882,1.229-5.232,3.271c-2.35,2.039-2.35,2.039-2.35,2.039l1.015,4.684c0,0-4.537-1.623,5.285-2.84c9.822-1.216,10.89-3.099,12.598-3.31c1.708-0.212,2.403-1.607,6.727-1.708c4.324-0.099,1.122-1.45,4.324-0.099c3.201,1.353,8.112,2.492,8.112,2.492s1.335,0.271,2.669,0.545c1.334,0.271-0.693-2.1,1.334,0.271c2.029,2.371,2.937,2.696,3.577,4.364c0.641,1.67-0.054-0.431,0.641,1.67c0.692,2.1,0.959,4.252,0.959,4.252s0.105,0.858,0.374,3.015c0.266,2.152,0.266,2.152,0.266,2.152s-1.975,1.556-2.242,2.898c-0.267,1.345,2.083-0.694-0.267,1.345c-2.35,2.04-2.35,5.534-2.35,5.534c-2.616,3.386-4.005,6.182-4.005,6.182s0.924,1.194-1.807,3.282c-2.731,2.086-2.041,0.671-3.454,3.259s-5.578,3.979-5.791,5.754c-0.215,1.776,1.067-1.88-0.215,1.776c-1.281,3.655-3.791,11.397-3.791,11.397l-3.098,3.005c0,0,3.311-0.788,7.527-1.747s1.067-1.88,4.217-0.959c3.149,0.922,4.538,0.625,5.552,1.811s-1.016-1.186,1.014,1.186c2.028,2.372-2.724,10.021-2.724,10.021l0.427,3.444l-3.738,1.335c0,0-3.042-0.06-4.697,0.583c-1.654,0.642-5.5,1.116-7.955,2.297c-2.456,1.177,1.336,0.271-2.456,1.177c-3.789,0.907-6.299,1.655-6.299,1.655s-6.353,1.224-11.529,1.428c-5.179,0.204-7.422-0.392-9.185-0.61c-1.761-0.221-2.348-1.458-2.293-4.524s-2.781-2.277-1.979-6.313c0.802-4.035,2.889-7.351,2.889-7.351l-1.228-2.907c0,0,0.16-5.703,1.282-7.153c1.121-1.45,1.121-1.45,1.121-1.45l-8.433-1.576l-12.545,0.241c-3.416,0.424-5.606,0.258-5.606,0.258s-2.189-3.682-4.777-3.571c-2.589,0.112-3.71,1.543-5.552,0.687c-1.841-0.854-3.872,0.256-7.262,0.899c-3.387,0.648-4.777-0.071-8.114,1.006c-3.335,1.079-3.658-1.521-9.395,1.162c-5.737,2.688-2.054,0.921-7.82,3.383c-5.766,2.463,1.014,1.188-10.89,3.098c-11.905,1.911-18.365,2.273-19.645,2.434c-1.281,0.158-2.829-1.835-7.099-1.307c-4.27,0.527-6.647-1.154-6.647-1.154c-2.961,0.596,2.376,1.683-2.961,0.596c-5.338-1.087-5.871-1.896-8.166-2.923c-2.296-1.026-5.125-2.862-5.125-2.862l-3.736-5.655c0,0-2.134-3.232-3.309-5.713c-1.173-2.475-0.586-4.732-0.586-4.732s-2.456-2.32-3.578-0.869c-1.12,1.452-2.83,1.663-3.363,4.351c-0.535,2.689,2.349,1.458,0.693,5.598c-1.656,4.138-0.484-4.188-2.781,1.78c-2.297,5.967-2.295,13.255-3.389,14.929c-1.094,1.676,2.568,1.658,1.286,5.313s-6.201,8.075-7.268,9.955c-1.069,1.881-2.442-2.757-5.432,4.607c-2.991,7.362-5.186,9.821-5.186,9.821s-1.121,1.45,0.374,3.015c1.495,1.563,0.16,1.293,4.644,2.484c4.484,1.194,1.441,0.133,7.634,1.113c6.192,0.984,6.968,0.698,6.968,0.698s4.278-2.591,2.355-0.604c-1.922,1.985-0.915,5.795-0.915,5.795s-0.16,2.206-0.321,4.41c-0.16,2.205-1.549,4.438-1.55,7.937c0,3.498-0.908,3.174-0.481,6.616c0.426,3.443,1.707,3.782,2.026,6.365c0.32,2.584,2.641,3.672,3.548,7.491c0.906,3.822,4.396,4.016,5.624,6.925c1.228,2.907,1.894,0.14,5.949,4.882c4.057,4.743-0.36,2.167,6.525,5.247c6.886,3.082,1.401,1.887,8.18,4.107c6.78,2.221,38.857,6.53,45.69,5.685l26.796-5.604v-1.999H296.963z"/></g><g id="3" class="transparentClick"><g id="Layer_1_2_"></g><g id="Layer_2_4_"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M355.011,376.765c0,0,45.945-18.611,71.967-22.191c4.611-0.635-1.209,4.718,9.991,9.654c6.212,2.735,12.03-1.746,16.772-6.918c1.805-1.968,4.192,1.853,5.84-0.002c2.843-3.206,1.853-1.704,4.268-4.58c2.938-3.497,6.284-0.241,8.495-3.27c6.955-9.53,4.536-20.078,4.536-20.078s-12.761-20.937-45.716-7.373c0,0-5.808-0.482-3.118-7.12c2.688-6.636,8.173-4.442,8.173-4.442s-2.943-15.139-20.963-6.741l-6.793,5.957c0,0-0.632-0.501-3.471-0.175c-2.839,0.327-7.827,1.97-7.827,1.97s-2.725-3.687-7.833-3.1c-5.11,0.586-12.048,0.285-12.048,0.285s0.811-2.968-6.57-2.119c-7.381,0.848-7.381,0.848-7.381,0.848l-7.27-3.19l-6.396-5.593l1.992-8.855c0,0,5.532-5.759,7.234-5.955c1.704-0.195,4.975-1.775,7.311-1.468c2.335,0.307,2.335,0.307,8.014-0.347c5.677-0.651,0.633,0.503,5.677-0.651c5.043-1.155,2.2-0.882,10.782-1.292c8.578-0.411,8.454-1.493,8.454-1.493s-2.139,1.396,3.604,1.312s13.208,4.811,21.396,0.992c8.189-3.816,22.625-8.352,26.031-8.743c3.405-0.392,16.706-4.796,18.344-5.56c1.637-0.763,6.18-1.285,9.894-4.013s-0.429,1.278,3.526-4.352c3.952-5.631,5.357-1.511,7.022-12.055c1.663-10.545-2.867-21.866-3.064-23.568c-0.193-1.703-2.353-6.325-5.261-10.743c-1.197-1.823-11.244-12.75-24.672-9.48c-13.431,3.269-22.867,6.239-22.867,6.239s-10.18,3.979-14.81,6.289c-7.874,3.925-13.773,5.28-15.874,7.036c-2.098,1.76-7.823,1.998-7.823,1.998s-3.33,0.593-4.489,0.517c-1.159-0.077-4.313-7.032-4.509-8.736c-0.195-1.703-1.043-9.081-1.043-9.081l-4.255-4.991c0,0,101.39-15.632,119.446-21.778c22.022-7.497,29.515-9.33,37.928-25.83c8.412-16.498,10.402-31.142-1.995-38.921c-12.398-7.78-22.018-0.921-23.897,2.746c0,0-12.401,0.797-35.429,20.699c0,0,9.845-24.091-8.972-27.103l-4.713,4.047c0,0-6.455-4.172-12.636,24.275c0,0-4.017,10.319-6.484,8.878c-2.466-1.443,5.665-26.647-6.906-38.926c0,0-3.11-2.491-9.661,0.563l-4.896,8.362l-6.75,19.492l-5.604,6.314c0,0-0.5-3.889-0.695-5.591c-0.195-1.705,0.687-3.584,0.49-5.287c-0.196-1.704-1.928-16.781-15.021-20.582c-13.091-3.801-16.001,10.915-14.542,13.625c1.463,2.707,1.501,13.059,1.501,13.059l-2.166,11.178l-4.133,4.09c0,0-36.149-1.43-41.146-1.953c0,0,13.5,3.56,9.981,17.84c-5.286,1.939-11.703-0.674-11.703-0.674l-9.143-2.4l-3.675-4.979c0,0-2.59-2.919-2.726-7.426c-0.19-6.326,1.832-15.479-0.374-21.428c-3.63-9.8-11.643-9.191-15.283-6.519c0,0-5.741,1.854-9.369,13.241c0,0,1.247,16.386-0.753,27.668c-0.621,3.497-10.213,3.021-10.213,3.021l-9.065-3.184l-4.969-11.571l1.73-14.849c0,0,1.477-18.877-11.853-22.357c0,0-8.464-1.676-12.512,2.721c-2.803,3.046-3.979,13.899-3.979,13.899c-1.761-0.947,4.038,25.651,1.986,32.728c-1.764,6.079-7.269-2.122-12.584-7.672c-1.814-0.689-0.941-27.146-1.061-26.803c0,0-0.361-12.685-12.406-12.39c-12.046,0.297-16.561,15.143-16.561,15.143l-4.139,14.282l1.435,12.49l2.457,11.825c0,0,3.937,7.459,4.7,9.097c0.763,1.639,5.273,6.464,5.273,6.464l7.92,4.764l4.167,3.841l2.221,8.462c0,0,3.061,1.784,6.274,3.004c3.212,1.22,6.574,1.874,7.426,1.774c1.703-0.195,7.077,1.515,7.077,1.515s-17.557,11.845,10.538,15.78l15.83-3.579l-2.637,7.083l-3.333,11.041l-4.353,11.718l-5.593,9.084l-2.538-0.672l-8.696-10.371l-7.417,5.319l1.645,4.521l3.414,4.678l-2.765,8.6l-14.308,20.513l-11.673,13.553L202.1,326.423l-4.136,8.582l-0.385,10.975c0,0,2.277,5.492,2.668,8.897c0.19,1.659,2.722,6.465,2.746,11.24c0.024,5.021-2.465,9.981-2.465,9.981l-0.731,10.526c0,0,6.981,13.836,2.063,19.139c-3.777,4.074-3.26,13.208,2.465,17.142c4.37,3.002,5.012,10.573,21.933,13.17c5.504,0.845,12.174,1.796,18.807,0.294c24.906-5.637,36.609-4.693,58.552-11.256c6.26-1.873,13.497,6.02,16.178,5.526c7.286-1.336,14.563-3.283,21.769-5.719c0,0-7.167,26.764-3.602,35.32c2.789,6.688,9.689,2.776,29.48,1.684c13.899-0.77,23.169-9.728,19.645-21.31c-1.354-4.455-20.227,5.479-18.571,1.443c1.976-4.813,4.706-8.589,4.181-11.415c-1.439-7.737,9.395-5.382,20.143-32.271c10.762-26.916-23.3-21.125-33.221-16.8c-4.94,2.152-12.457,7.254-9.97-0.865"/><path fill="#FFFFFF" d="M323.89,146.223"/></g></g><g id="2" class="transparentClick"><g id="monkey"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M342.232,171.969c0,0,12.551-22.077-24.959-19.051c0,0,1.541,11.46,4.269,15.745L342.232,171.969z"/><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M317.161,143.849c0,0,1.138,2.613,12.673-0.76c0,0,7.702-1.512,19.7-7.119c11.999-5.608,18.17-13.722,18.17-13.722l-11.255-13.062c0,0-5.279,8.936-19.372,15.068c0,0-23.9,9.761-27.874-0.18c0,0-2.974-18.027,2.406-21.843c5.381-3.816,6.931-2.799,11.435-1.907c7.98-1.072,19.189-2.63,20.98-15.681c1.792-13.052,0.828-22.588-4.586-25.014l-12.096-5.104c0,0-8.826-14.272-14.873-20.055l-7.686-4.385l-9.229-1.618c0,0-2.186-9.66-6.081-9.65c-2.406,0.004-3.073,6.675-3.225,7.419c-0.151,0.746-5.89-3.38-9.643-4.123c0,0,1.133,2.582,2.313,6.004c0,0-6.988-5.182-12.817-3.003c0,0,5.749,10.903,7.73,11.141c1.982,0.237-13.037,1.104-24.723,24.827c0,0-15.021,1.078-16.84,15.651c0,0-1.688,11.134,8.838,16.118c12.844,5.178,14.798,3.242,14.798,3.242l11.759,8.219c0,0-4.667,4.398-9.033,16.85c0,0,17.365,3.541,8.542,37.537c0,0-0.177,9.799,14.972,11.986l9.623-0.691c0,0-1.04-17.361,0.729-29.996c0,0,4.384-15.123,13-14.5c0,0,7.685,1.783,10.5,7L317.161,143.849z"/><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M240.611,139.992c0,0,8.344-28.977-10.729-42.501c0,0-16.005-10.976-26.695-10.611c0,0-10.673,0.497-6.959,6.813c0,0,7.522,9.472,17.337,11.882c0,0,11.886,3.36,16.917,12.417c0,0,5.021,13.575,2.568,24.104c1.528-4.101-7.05,16.403,2.634,25.794C235.685,167.889,247.5,185.687,240.611,139.992z"/></g></g><g id="1" class="transparentClick"><g id="Layer_2_1_"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M394.619,105.928c-4.799,2.283-16.583,12.652-16.583,12.652l-5.022,6.124l-7.021-5.286l-4.815-3.795l-4.797-4.858l-2.837-3.371l-2.435-2.862l-0.303-2.386l0.891-1.827l3.577-4.556l4.352-5.521l1.66-4.608l-0.071-3.835c0,0-1.125-7.491-1.543-10.797c-0.417-3.303,1.241-6.879,3.744-7.94c2.502-1.063,5.366,1.095,5.366,1.095l2.883,3.279l1.851,2.936l3.898,2.305l4.424-0.038l4.814-1.943l6.615-5.928c0,0,4.239-6.026,10.705-10.016c6.465-3.987,10.289-3.707,10.289-3.707l4.435,2.049l1.832,2.566l0.405,3.679l2.542,3.408l1.555,5.211l0.456,6.432c0,0-2.399,7.613-2.701,8.212c-0.3,0.597-2.391,3.51-2.391,3.51s-2.041,4.864-2.599,4.935c-0.555,0.07-3.337,3.405-3.337,3.405l-5.957,5.042l-6.182,3.392L394.619,105.928z"/></g></g><g id="0" class="transparentClick"><g id="Layer_4_1_"><g id="XMLID_2_" opacity="0"><g><path fill="#6B6B6B" d="M416.118,52.672c0.306,0.979-2.527-1.345-2.448-1.129c-3.213-0.919-6.033,2.439-9.498,3.346c-1.427,0.882-5.22,5.212-6.552,5.858c-2.896,1.4-9.407,10.861-13.114,11.793c-4.681,0.222-7.796,0.816-11.229-2.694c-1.385-1.921-1.111-3.211-3.076-5.681c-0.448-0.564-2.016-2.204-2.958-2.52c-1.187-1.63-2.235-5.826-2.822-6.758c-0.367-0.58-2.896-1.858-4.329-4.382c-1.793-3.193-1.793-2.193-4.324-5.785c-0.391-1.517-1.056-1.798-0.978-4.563c0-0.487,0-0.975,0-1.461c0.697-1.477,0.707-3.253,1.49-4.469c0.595-0.925,2.32-2.337,3.388-2.829c1.171-0.54,2.581-0.45,4.466-0.683c0.189-1.486-1.136-5.285-0.409-6.728c0.78-1.541,2.614-3.385,3.954-4.316c2.164-1.505,6.323-4.089,9.833-3.063c1.223,0.355,2.537,1.84,3.617,2.498c2.414-2.509,4.334-5.964,8.858-7.059c0.686,0,5.527-1,6.212-1c4.788,0.035,6.662,3.508,6.063,5.269c1.896-0.954,6.121-2.316,8.832-1.227c0.78,0.313,4.778,1.958,5.566,2.552c0.881,0.663-0.295,4.69-0.022,5.16c0.755,1.295,2.497,0.068,2.536,1.625c2.253-0.155,2.389,1.038,3.033,2.049c0.521,0.817,0.775,1.647,0.95,3.116c0.132,1.11,0.182,2.682,0,3.558c-0.196,0.95-0.845,1.798-1.054,3.088c-0.15,0.928-1.909,4.641-1.803,5.218c0.123,0.666-2.118,5.213-1.791,5.884C417.434,48.852,417.311,50.55,416.118,52.672z"/></g></g></g></g></svg>',
'<svg version="1.1" id="page_6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="886px" height="691px" viewBox="0 0 886 691" enable-background="new 0 0 886 691" xml:space="preserve"><g id="5" class="transparentClick"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M716.352,568.466V540.01l14.279-6.271l109.09-48.441l2.927,10.272l11.378,4.108l11.354-5.138l-19.572-154.005c0,0-5.032-44.176-39.964-48.287l-37.09,8.163l-49.473,11.149l-74.688,15.514l-20.81,13.512c0,0-7.201,9.2-17.466,41.042c-3.151,9.779-1.95,91.438-1.95,91.438v88.304l19.208,4.163l8.636-7.245l0.104-18.598l55.063,6.218l0.051,25.714h21.837L716.352,568.466z"/></g><g id="6" class="transparentClick"><path opacity="0.01" fill="#F9F9FA" enable-background="new " d="M752.319,577.288c0,0,17.497,3.222,27.996-4.165c10.495-7.384,27.256-9.49,46.852-4.219c0,0-6.26-8.495-34.604-4.979c0,0-13.646,3.582-21.694,6.89c-8.048,3.308-17.547-1.317-17.547-1.317s3.181-20.995-7.301-35.811c0,0-8.049-17.229-8.049-26.37v-9.143c0,0,12.247,1.054,15.397-5.979c0,0,7.35-14.767-9.101-14.415c0,0-6.999,0.702-11.549,8.79l-4.55-0.352c0,0,5.95-10.549-3.498-13.713c0,0-8.396-3.165-12.599,5.977c0,0-0.699,6.685,1.75,8.791l-6.648,1.758l-4.55-13.714l-2-11.25c0,0,3.05-3.164,2-4.22c-1.049-1.055-2.099-3.519-2.099-3.519c-3.15,0-4.2,0-4.2,0l-2.103,1.406l-1.75,2.46v2.814l2.803,3.516l1.397,3.868l3.149,19.338l-2.799,1.758l-6.649,1.761v2.107c0,0-1.4-2.813-3.5-2.813c-2.099,0-2.099-1.058-5.249,2.107c0,0-4.899,2.462-1.75,7.388c0,0,1.4,3.863,5.95,1.757c4.549-2.11,0.7,1.758,0.7,1.758l-3.5,1.406l-1.053,2.106c0,0,1.053,1.761,2.102,1.761c1.05,0,3.146,0.353,3.146,0.353c0,2.108-1.75,1.055,0,2.108c1.75,1.055,3.5,1.056,3.5,1.056l2.45-2.461l2.1-1.405l4.552,2.813l1.75,2.106l0.698,2.006h4.197l-0.7,3.621l-2.1,8.086l-1.75,6.33l-0.699,3.867l-1.749,2.461l-7.696,3.518l-4.553,7.031c0,0,0,2.462-0.35,3.867c-0.35,1.406-0.7,3.869-0.7,5.274c0,1.403,0.354,3.865,0.354,4.923c0,1.055,1,3.517,1,4.568c0,1.057,1.396,2.569,1.396,2.569l2.45,2.959c0,0,0.701,1.261,1.397,2.315c0.698,1.056,2.149,2.462,2.149,2.462s1.398,0.942,2.448,2c1.05,1.056,2.8,0,2.8,0l-4.55,4.22l-1.05,2.461c0,0-0.699-0.703,2.449,0c3.147,0.703,3.146,0.703,4.896,0s4.55-2.11,5.6-2.813c1.053-0.702-1.748,0,1.053-0.702c2.799-0.702,4.549-1.057,4.549-1.057h3.148c0,0,1.397,0,2.447,0s2.101,0.703,3.15,0.703c1.049,0,2.8,0,2.8,0h2.1l-0.7,2.813c2.102,0.703,3.5,3.164,4.552,1.582c1.05-1.582,2.1-2.284,3.147-2.639c1.051-0.352,1.399-1.055,3.149-1.055c1.749,0,2.799-0.353,3.848-0.353c1.051,0,1.4,0.701,3.149-0.354c1.75-1.055,1.75-1.055,1.75-1.055s2.449,0.055,3.148-2.407C749.521,580.155,752.319,577.288,752.319,577.288z"/></g><g id="4" class="transparentClick"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M304.043,541.434c0,0,24.42-14.074,24.339-28.489l48.66-6.023c0,0,3.893-6.685,5.304-9.046c1.411-2.358,42.849-7.971,42.849-7.971l10.646-3.876l5.873-0.727c0,0,1.198-4.084,1.457-5.428c0.261-1.343,4.176-11.01,4.176-11.01s-0.388-10.004-1.6-12.914c-1.213-2.911,2.314-1.162-0.27-5.213c-2.583-4.052-3.482-7.875-3.75-10.024c-0.267-2.153-0.318-2.584-0.69-5.6c-0.373-3.012-1.791-4.147-0.959-7.748c0.833-3.601,2.252-7.71,2.252-7.71l1.456-0.18c0,0-0.945-0.762,2.251-2.465c3.195-1.707,3.143-2.141,5.078-3.689c1.939-1.553-1.204,0.587,1.939-1.553c3.143-2.134,3.143-2.134,3.143-2.134s4.188-4.021,4.445-5.359c0.156-0.813,0.717-2.156,1.261-3.59c0.354-0.938,0.701-1.911,0.932-2.805c0.573-2.256,0.2-5.27,2.083-7.251l2.942,3.135c0,0-1.023,12.363-4.119,11.436c-3.099-0.925-9.206,11.633-9.206,11.633l-5.38,11.595l-0.926,9.731l1.738,3.72c0,0,5.141,0.237,6.56,1.372c1.42,1.138-0.58-1.237,1.42,1.138c1.999,2.373,2.219,7.592,2.799,8.832c0.577,1.239,2.514,3.121,2.394,5.574c-0.124,2.448,0.323,3.951,1.171,7.346c0.846,3.393,1.441,5.816,3.547,9.056c2.104,3.235,8.053,7.618,11.146,8.547c3.098,0.93-6.877-3.956,0,0c6.881,3.955,2.998,3.563,9.56,4.938c6.56,1.375,8.396,2.459,12.645,2.368c4.248-0.086,3.409,0.018,9.858,0.527c6.456,0.514-2.202-0.602,6.456,0.514c8.654,1.111,16.615-3.368,16.615-3.368s2.725-2.088,4.82-2.351c2.1-0.259,5.4-1.104,7.813-2.274c2.409-1.173,2.304-2.034,4.295-3.156c1.99-1.118,5.34-5.03,8.115-6.686s2.724-2.086,5.866-4.225c3.144-2.138,4.98-1.054,5.393-4.604c0.415-3.546-2.723,2.088,0.415-3.546c3.134-5.638,2.669-2.518,3.966-9.235c1.299-6.715,2.245-5.958,1.765-9.833c-0.479-3.876-0.746-6.028-1.013-8.18c-0.269-2.152,1.091-4.944-0.906-7.319c-1.998-2.376-3.683-5.664-5.002-9.435c-1.318-3.771-0.479-3.876-3.689-9.162c-3.211-5.282-9.972-12.562-14.543-15.057c-4.563-2.493-14.352-8.464-15.608-8.309c-1.258,0.155-4.62-2.926-4.62-2.926l24.178-0.81l0.982-5.806l-11.769-9.032l-14.683,1.817c0,0-7.024,1.743-8.388,1.037c-1.367-0.703-4.518-2.063-5.454,0.678c-0.938,2.739-1.887,1.979-6.124,5.564c-4.242,3.587-6.231,4.706-7.751,6.204c-1.52,1.5-4.191,4.018-4.191,4.018s-4.725-3.785-5.304-5.024c-0.581-1.239-1.053-1.618-2.158-3.667c-1.104-2.049-0.706-2.246-3.165-4.927c-2.461-2.684-4.826-4.575-4.826-4.575s-3.203-1.789-3.782-3.028c-0.577-1.237-0.578-1.237-0.578-1.237s6.823,3.524,10.234,3.541c3.406,0.012,4.3,0.343,5.979,0.134c1.678-0.208,1.471,1.565,3.723-0.898c2.249-2.465-0.313,0.913,2.249-2.465c2.563-3.377-0.099,2.636,2.563-3.377c2.662-6.012,1.357-2.791,2.662-6.012c1.307-3.223,1.847,4.578,1.307-3.223s0.985-4.806-0.49-9.865c-1.479-5.063,0.749-3.906-0.675-8.536c-1.428-4.632-0.657-6.354-2.813-10.021c-2.16-3.668-6.688-12.722-6.688-12.722l-5.052-3.244l-4.464-1.635l-3.354,0.416c0,0-1.778,2.845-3.294,4.343c-1.521,1.499-3.146,2.139-4.661,3.639c-1.519,1.498-2.305,2.034-4.296,3.154c-1.989,1.12-1.204,0.585-4.821,2.346c-3.615,1.76-5.659,2.449-6.863,3.034c-1.204,0.587-1.204,0.587-1.204,0.587l-5.147-3.731c0,0-3.521-4.371-4.521-5.561c-0.999-1.188-2.523-3.187-2.523-3.187s-0.527-0.81-1.679,0.208c-1.15,1.018-1.15,1.018-1.15,1.018l-3.093-0.881l-1.258,0.156l-2.938,0.364l-0.35,10.923l-2.09,3.755c0,0-2.191,6.39-0.935,6.234c1.259-0.156,1.259-0.156,1.259-0.156l4.149,2.548l3.354-0.417c0,0,1.466-1.931,4.034-1.813c2.57,0.118-1.784-0.651,2.57,0.118c4.354,0.771,2.152,0.17,4.354,0.771c2.204,0.602,4.883,1.582,4.883,1.582l3.938,0.823l4.673,3.355l1.213,2.909l-0.571,2.257l-0.938,2.737c0,0-1.307,3.224-1.563,4.563c-0.262,1.344-0.206,1.773-1.093,4.94c-0.886,3.171-1.356,2.794-2.77,5.15c-1.411,2.359-1.411,2.359-1.411,2.359s-1.884,1.984-3.1-0.927c-1.21-2.909,0.939-2.739-1.584-5.925c-2.522-3.186-3.263-5.716-3.263-5.716l-1.156-2.479l-6.034-0.564c0,0-2.624-0.549-4.614,0.572c-1.991,1.12-4.036,1.813-4.036,1.813s-2.203-0.603-2.249,2.464c-0.047,3.063,0.006,3.493,0.221,5.218c0.213,1.721-1.313-0.276,0.213,1.721c1.523,1.998,1.523,1.998,1.523,1.998l-3.72,0.897c-11.166,2.692-5.508,0.246-11.166,2.692c-5.661,2.448,0,0,0,0l-14.209,2.196c0,0-3.142,2.138-4.348,2.723c-1.204,0.589-8.862,0.66-11.69,1.888c-2.831,1.222-2.41,1.172-7.284,3.088c-4.874,1.914-7.811,2.274-11.061,3.556c-3.25,1.275-5.713,2.02-8.018,4.051c-2.303,2.036-2.83,1.226-5.134,3.26c-2.305,2.032-2.305,2.032-2.305,2.032l1.008,4.687c0,0-4.461-1.633,5.188-2.828c9.647-1.194,10.692-3.074,12.37-3.281c1.68-0.208,2.357-1.603,6.605-1.691c4.249-0.089,1.099-1.447,4.249-0.089c3.147,1.356,7.976,2.51,7.976,2.51s1.313,0.272,2.625,0.55c1.313,0.272-0.687-2.101,1.313,0.272c1.999,2.375,2.891,2.701,3.522,4.37c0.635,1.673-0.054-0.43,0.635,1.673c0.685,2.101,0.95,4.253,0.95,4.253s0.106,0.857,0.374,3.015c0.269,2.152,0.269,2.152,0.269,2.152s-1.938,1.551-2.196,2.894c-0.259,1.344,2.044-0.688-0.259,1.344c-2.304,2.034-2.296,5.528-2.296,5.528c-2.564,3.379-3.922,6.17-3.922,6.17s0.91,1.197-1.77,3.277c-2.679,2.08-2.003,0.666-3.387,3.251c-1.383,2.584-5.472,3.965-5.677,5.74c-0.207,1.773,1.045-1.877-0.207,1.773c-1.251,3.651-3.7,11.389-3.7,11.389l-3.038,2.998c0,0,3.251-0.782,7.393-1.732c4.143-0.948,1.045-1.876,4.143-0.948c3.096,0.929,4.46,0.636,5.458,1.82c0.999,1.188-1-1.188,0.999,1.188s-2.655,10.013-2.655,10.013l0.427,3.442l-3.669,1.327c0,0-2.989-0.063-4.613,0.572c-1.625,0.638-5.401,1.104-7.812,2.279c-2.411,1.171,1.313,0.271-2.411,1.171c-3.721,0.896-6.185,1.642-6.185,1.642s-6.239,1.209-11.325,1.402c-5.088,0.19-7.293-0.407-9.024-0.631c-1.729-0.227-2.31-1.464-2.264-4.529c0.047-3.064-2.737-2.282-1.958-6.313c0.779-4.029,2.823-7.343,2.823-7.343l-1.213-2.908c0,0,0.146-5.7,1.244-7.147s1.099-1.447,1.099-1.447l-8.289-1.595l-12.326,0.215c-3.354,0.415-5.507,0.245-5.507,0.245s-2.16-3.687-4.702-3.581c-2.542,0.104-3.643,1.534-5.452,0.674c-1.812-0.855-3.804,0.246-7.133,0.884c-3.327,0.644-4.694-0.081-7.97,0.988c-3.275,1.071-3.597-1.53-9.228,1.143c-5.631,2.677-2.016,0.915-7.676,3.363c-5.66,2.45,0.999,1.189-10.693,3.073c-11.693,1.885-18.04,2.233-19.297,2.39c-1.258,0.156-2.784-1.84-6.978-1.319c-4.194,0.519-6.534-1.168-6.534-1.168c-2.909,0.589,2.338,1.687-2.909,0.589c-5.247-1.101-5.772-1.908-8.029-2.94c-2.259-1.03-5.042-2.872-5.042-2.872l-3.683-5.663c0,0-2.104-3.233-3.264-5.718c-1.158-2.476-0.586-4.732-0.586-4.732s-2.418-2.323-3.517-0.876c-1.097,1.448-2.777,1.655-3.295,4.343c-0.519,2.688,2.311,1.463,0.693,5.597c-1.618,4.134-0.485-4.188-2.728,1.774c-2.244,5.96-2.227,13.243-3.298,14.917c-1.071,1.673,2.527,1.664,1.275,5.314s-6.075,8.061-7.119,9.938c-1.046,1.879-2.405-2.763-5.328,4.595c-2.923,7.354-5.074,6.809-5.074,6.809s-1.098,1.448,0.374,3.017c1.472,1.563,0.16,1.293,4.568,2.493c4.409,1.202,1.416,0.136,7.503,1.13c6.086,0.998,6.847,0.713,6.847,0.713s4.198-2.58,2.313-0.6c-1.885,1.981-0.886,5.792-0.886,5.792s-0.152,2.205-0.306,4.408c-0.152,2.205-1.513,4.437-1.506,7.932c0.007,3.497-0.885,3.173-0.459,6.612c0.426,3.445,1.685,3.785,2.004,6.367c0.32,2.584,2.603,3.678,3.503,7.498c0.898,3.824,4.327,4.023,5.541,6.937c1.212,2.908,1.86,0.144,5.855,4.894c3.996,4.75-0.349,2.166,6.422,5.26c6.772,3.097,1.381,1.89,8.047,4.125c6.667,2.234,38.193,6.612,44.905,5.781l26.315-5.545L304.043,541.434z"/></g><g id="3" class="transparentClick"><g id="Layer_1_2_"></g><g id="Layer_2_4_"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M360.968,384.906c0,0,44.708-18.11,70.031-21.594c4.487-0.618-1.177,4.591,9.722,9.395c6.044,2.663,11.707-1.699,16.321-6.729c1.757-1.914,4.081,1.802,5.683-0.002c2.769-3.12,1.805-1.658,4.153-4.457c2.857-3.403,6.115-0.235,8.267-3.183c6.77-9.273,4.414-19.539,4.414-19.539s-12.418-20.373-44.484-7.174c0,0-5.651-0.47-3.034-6.929c2.616-6.457,7.953-4.323,7.953-4.323s-2.865-14.73-20.399-6.56l-6.608,5.796c0,0-0.616-0.488-3.377-0.17c-2.765,0.316-7.617,1.917-7.617,1.917s-2.652-3.587-7.623-3.018c-4.975,0.57-11.726,0.277-11.726,0.277s0.789-2.887-6.394-2.063s-7.183,0.824-7.183,0.824l-7.073-3.104l-6.227-5.442l1.938-8.618c0,0,5.383-5.604,7.041-5.794c1.658-0.188,4.84-1.727,7.113-1.429c2.271,0.298,2.271,0.298,7.798-0.336c5.522-0.635,0.615,0.489,5.522-0.635c4.908-1.124,2.143-0.858,10.492-1.259c8.347-0.399,8.229-1.452,8.229-1.452s-2.082,1.357,3.506,1.274c5.589-0.083,12.852,4.682,20.819,0.966c7.971-3.714,22.019-8.127,25.331-8.508c3.313-0.381,16.259-4.667,17.852-5.41c1.593-0.741,6.014-1.251,9.627-3.903c3.614-2.653-0.416,1.245,3.433-4.234c3.848-5.479,5.213-1.47,6.833-11.729c1.618-10.263-2.79-21.277-2.979-22.936c-0.189-1.657-2.289-6.155-5.119-10.454c-1.165-1.773-10.942-12.405-24.009-9.226c-13.069,3.181-22.251,6.07-22.251,6.07s-9.906,3.874-14.411,6.119c-7.662,3.819-13.403,5.141-15.446,6.85c-2.041,1.712-7.613,1.942-7.613,1.942s-3.239,0.576-4.369,0.501c-1.127-0.073-4.194-6.842-4.388-8.5c-0.188-1.655-1.015-8.837-1.015-8.837l-4.143-4.855c0,0,98.662-15.211,116.232-21.193c21.431-7.295,28.721-9.079,36.907-25.134c8.187-16.054,10.124-30.304-1.941-37.875c-12.063-7.571-21.424-0.896-23.254,2.672c0,0-12.069,0.775-34.476,20.144c0,0,9.579-23.441-8.73-26.374l-4.586,3.938c0,0-6.281-4.06-12.295,23.622c0,0-3.908,10.042-6.313,8.64c-2.398-1.403,5.515-25.93-6.721-37.879c0,0-3.025-2.424-9.4,0.548l-4.767,8.139l-6.568,18.968l-5.451,6.145c0,0-0.486-3.782-0.679-5.439c-0.188-1.659,0.667-3.487,0.479-5.146c-0.19-1.657-1.876-16.33-14.617-20.026c-12.739-3.699-15.571,10.621-14.15,13.258c1.426,2.634,1.46,12.707,1.46,12.707l-2.105,10.876l-4.022,3.979c0,0-35.177-1.391-40.039-1.898c0,0,13.139,3.463,9.715,17.358c-5.146,1.889-11.39-0.654-11.39-0.654l-8.896-2.336l-3.576-4.848c0,0-2.521-2.84-2.652-7.226c-0.185-6.156,1.782-15.063-0.363-20.853c-3.532-9.535-11.328-8.942-14.871-6.343c0,0-5.589,1.805-9.117,12.885c0,0,1.213,15.945-0.733,26.926c-0.604,3.401-9.938,2.938-9.938,2.938l-8.821-3.098l-4.835-11.261l1.684-14.449c0,0,1.438-18.369-11.534-21.755c0,0-8.236-1.633-12.175,2.646c-2.728,2.963-3.872,13.525-3.872,13.525c-1.713-0.921,3.929,24.961,1.933,31.847c-1.716,5.916-7.073-2.063-12.246-7.465c-1.766-0.672-0.916-26.417-1.033-26.082c0,0-0.351-12.343-12.072-12.056c-11.722,0.288-16.115,14.733-16.115,14.733l-4.028,13.898l1.396,12.153l2.39,11.508c0,0,3.831,7.259,4.574,8.853s5.132,6.29,5.132,6.29l7.707,4.636l4.055,3.736L233,220.85c0,0,2.979,1.735,6.105,2.923c3.126,1.187,6.397,1.823,7.226,1.728c1.658-0.189,6.887,1.475,6.887,1.475s-17.084,11.524,10.254,15.354l15.404-3.481l-2.566,6.892l-3.243,10.744l-4.236,11.402l-5.442,8.839l-2.47-0.654l-8.461-10.092l-7.217,5.177l1.601,4.398l3.322,4.552l-2.69,8.369l-13.923,19.959l-11.358,13.188l-10.019,14.291l-4.025,8.353l-0.375,10.68c0,0,2.216,5.344,2.597,8.659c0.186,1.612,2.649,6.29,2.672,10.938c0.023,4.888-2.399,9.713-2.399,9.713l-0.711,10.244c0,0,6.793,13.464,2.008,18.623c-3.676,3.965-3.172,12.854,2.398,16.682c4.252,2.922,4.877,10.289,21.343,12.813c5.356,0.821,11.847,1.747,18.3,0.286c24.236-5.483,35.625-4.565,56.977-10.952c6.092-1.822,13.133,5.856,15.743,5.377c7.089-1.3,14.17-3.192,21.182-5.563c0,0-6.975,26.043-3.504,34.371c2.714,6.508,9.429,2.701,28.688,1.637c13.524-0.748,22.546-9.465,19.114-20.735c-1.317-4.335-19.683,5.331-18.07,1.405c1.921-4.683,4.58-8.357,4.066-11.107c-1.399-7.528,9.144-5.236,19.603-31.4c10.472-26.191-22.673-20.559-32.328-16.35c-4.81,2.097-12.122,7.061-9.702-0.842"/><path fill="#FFFFFF" d="M330.685,160.567"/></g></g><g id="2" class="transparentClick"><g id="monkey"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M348.387,185.818c0,0,12.383-21.783-24.626-18.795c0,0,1.521,11.307,4.212,15.534L348.387,185.818z"/><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M323.65,158.074c0,0,1.123,2.579,12.504-0.75c0,0,7.599-1.492,19.437-7.025c11.838-5.532,17.928-13.536,17.928-13.536l-11.104-12.89c0,0-5.208,8.817-19.113,14.868c0,0-23.581,9.63-27.501-0.177c0,0-2.935-17.786,2.374-21.551c5.311-3.767,6.839-2.763,11.283-1.883c7.874-1.058,18.933-2.595,20.7-15.472c1.768-12.878,0.815-22.287-4.524-24.679L333.7,69.944c0,0-8.708-14.081-14.674-19.787l-7.583-4.326l-9.105-1.598c0,0-2.156-9.531-6-9.521c-2.374,0.004-3.032,6.586-3.182,7.32c-0.149,0.735-5.812-3.335-9.514-4.068c0,0,1.118,2.549,2.283,5.925c0,0-6.895-5.112-12.646-2.965c0,0,5.672,10.76,7.627,10.992c1.956,0.234-12.863,1.089-24.393,24.495c0,0-14.82,1.063-16.615,15.442c0,0-1.666,10.983,8.721,15.901c12.672,5.109,14.601,3.199,14.601,3.199l11.602,8.109c0,0-4.604,4.34-8.912,16.625c0,0,17.133,3.494,8.428,37.036c0,0-0.175,9.668,14.772,11.827l9.494-0.684c0,0-1.024-17.131,0.721-29.596c0,0,4.325-14.921,12.825-14.308c0,0,7.584,1.76,10.359,6.906L323.65,158.074z"/><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M248.123,154.268c0,0,8.233-28.59-10.585-41.936c0,0-15.792-10.829-26.339-10.469c0,0-10.531,0.49-6.866,6.721c0,0,7.421,9.348,17.105,11.725c0,0,11.728,3.313,16.691,12.251c0,0,4.955,13.394,2.534,23.782c1.508-4.046-6.956,16.186,2.599,25.448C243.262,181.793,254.919,199.354,248.123,154.268z"/></g></g><g id="1" class="transparentClick"><g id="Layer_2_1_"><path opacity="0.01" fill="#FFFFFF" enable-background="new " d="M399.714,119.746c-4.612,2.195-15.938,12.161-15.938,12.161l-4.826,5.885l-6.748-5.081l-4.627-3.646l-4.61-4.67l-2.727-3.239l-2.34-2.751l-0.29-2.292l0.854-1.756l3.438-4.378l4.182-5.308l1.595-4.428l-0.066-3.686c0,0-1.082-7.2-1.483-10.377c-0.401-3.176,1.192-6.611,3.598-7.633c2.406-1.021,5.157,1.054,5.157,1.054l2.771,3.149l1.777,2.821l3.746,2.215l4.252-0.037l4.627-1.865l6.359-5.697c0,0,4.074-5.792,10.288-9.625c6.213-3.833,9.888-3.563,9.888-3.563l4.263,1.972l1.761,2.466l0.39,3.536l2.443,3.273l1.493,5.008l0.438,6.183c0,0-2.306,7.316-2.596,7.892c-0.289,0.574-2.297,3.374-2.297,3.374s-1.961,4.674-2.498,4.742c-0.533,0.067-3.207,3.271-3.207,3.271l-5.727,4.848l-5.939,3.26L399.714,119.746z"/></g></g><g id="0" class="transparentClick"><g id="Layer_4_1_"><g id="XMLID_2_" opacity="0"><g><path fill="#6B6B6B" d="M420.214,69.235c0.297,0.951-2.457-1.308-2.38-1.098c-3.125-0.896-5.866,2.372-9.235,3.252c-1.388,0.856-5.074,5.066-6.371,5.696c-2.813,1.361-9.146,10.563-12.751,11.469c-4.551,0.215-7.581,0.793-10.92-2.62c-1.346-1.867-1.08-3.122-2.989-5.523c-0.437-0.55-1.958-2.143-2.875-2.45c-1.153-1.585-2.175-5.665-2.744-6.569c-0.356-0.563-2.815-1.808-4.209-4.261c-1.744-3.104-1.744-2.133-4.204-5.626c-0.38-1.474-1.027-1.747-0.95-4.438c0-0.474,0-0.947,0-1.42c0.678-1.438,0.688-3.163,1.449-4.345c0.578-0.9,2.256-2.273,3.294-2.751c1.139-0.524,2.509-0.438,4.343-0.664c0.184-1.445-1.104-5.142-0.396-6.542c0.759-1.498,2.541-3.292,3.845-4.197c2.104-1.463,6.146-3.978,9.562-2.979c1.188,0.349,2.467,1.789,3.519,2.431c2.347-2.44,4.214-5.802,8.611-6.863c0.667,0,5.375-0.972,6.04-0.972c4.656,0.032,6.479,3.408,5.896,5.123c1.843-0.929,5.951-2.254,8.587-1.192c0.758,0.304,4.646,1.903,5.412,2.479c0.854,0.646-0.287,4.563-0.022,5.019c0.734,1.26,2.43,0.065,2.467,1.581c2.19-0.151,2.321,1.01,2.948,1.992c0.507,0.796,0.753,1.603,0.925,3.028c0.128,1.08,0.178,2.607,0,3.459c-0.189,0.925-0.82,1.748-1.023,3.002c-0.147,0.902-1.857,4.515-1.752,5.074c0.12,0.647-2.062,5.069-1.742,5.721C421.494,65.521,421.375,67.172,420.214,69.235z"/></g></g></g></g><g id="7" class="transparentClick" opacity="0.01"><path fill="#6B6B6B" stroke="#000000" stroke-miterlimit="10" d="M169,131c0,0-63.5,17.5-69-45.5c0,0-1.5-58.75,63.5-49.787c0,0-49.5-40.213-91.5,14.787c0,0-30.5,44.5,14.5,85.745C86.5,136.244,131.5,168,169,131z"/></g><g id="8" class="transparentClick" opacity="0.01"><path fill="#6B6B6B" stroke="#000000" stroke-miterlimit="10" d="M68,620l16-8l6.5-62.919L79.25,529v-8L50,528v-7l-4-8c0,0-20.5,14-28-14h-6c0,0-2,11.5-12,23v98H68z"/></g><g id="9" class="transparentClick" opacity="0.01"><path fill="#6B6B6B" stroke="#000000" stroke-miterlimit="10" d="M647.174,226.019c-1.912-7.809-6.933-13.148-10.354-20.216c-1.973-4.075-2.872-6.955-6.062-10.322c-2.705-2.857-2.924-6.853-5.455-9.733c0.148-0.04,0.299-0.099,0.452-0.202c0.036-0.023,0.065-0.053,0.102-0.077c0.344,0.109,0.741,0.079,1.148-0.173c2.845-1.763,5.208-4.489,4.743-8.045c-0.023-0.176-0.076-0.331-0.143-0.474c1.813-1.345,3.039-3.462,3.286-5.818c0.414-3.938-2.534-5.867-5.923-5.761c-0.188-2.608-0.672-5.148-1.528-7.396c0.655-2.396,0.907-4.968-0.647-7.06c-0.337-0.453-0.801-0.637-1.258-0.638c-0.108-0.219-0.213-0.439-0.331-0.654c-0.985-1.791-2.488-2.791-3.26-4.85c-0.274-0.734-0.134-1.449-0.021-2.167c0.113-0.033,0.227-0.076,0.331-0.14c0.596-0.355,1.03-0.899,1.009-1.629c-0.021-0.806-0.591-1.356-1.259-1.712c-0.489-0.26-1.053-0.232-1.504,0.024c-3.104-1.955-10.064-1.452-12.123-1.554c-2.528-0.124-3.344-1.742-6.223-0.881c-2.651,0.793-5.146,2.41-7.312,4.089c-1.506,1.17-2.969,4.086-2.293,6.016c1.039,2.966,3.294,3.95,5.386,6.162c0.129,0.135,0.266,0.229,0.403,0.303c-4.412,3.285-7.071,8.336-7.521,14.166c-2.192-0.202-4.214,0.694-5.103,2.458c-0.289,0.347-0.471,0.785-0.471,1.263v0.203c-1.339,4.009,1.909,7.606,5.859,7.79c0.021,0.201,0.036,0.405,0.063,0.603c-2.518,0.167-5.437,0.272-6.244-2.376c-0.751-2.461-4.612-1.411-3.856,1.063c0.227,0.742,0.519,1.371,0.856,1.919c-0.049,0.5,0.129,1.022,0.657,1.463c3.075,2.568,6.976,3.72,10.914,4.086c0.011,0.001,0.021-0.001,0.031,0c1.525,2.121,3.637,3.806,5.978,5.551c-0.907,0.85-1.653,1.891-2.271,3.054c-1.156,2.175-1.719,4.85-3.505,6.628c-0.563,0.562-0.771,1.2-0.732,1.808c-3.013,4.104-6.454,7.826-10.6,11.376c-6.214,5.32-10.573,12.569-10.899,20.833c-0.028,0.716,0.205,1.264,0.572,1.66c0.645,1.516,2.59,2.45,3.944,0.857c0.727-0.853,1.13-1.371,1.609-2.382c0.923-1.936,2.411-2.452,4.135-3.478c2.397-1.426,4.037-4.182,5.516-6.458c1.985-3.062,4.725-5.394,6.873-8.313c0.553-0.752,1.021-1.525,1.446-2.312c0.034,2.133-0.011,4.272-0.097,6.423c-0.217,5.411-2.429,10.613-3.661,15.835c-0.246,1.044,0.132,2.31,1.149,2.823c3.007,1.521,2.031,8.268,2.012,11.091c-0.004,0.568,0.153,1.031,0.407,1.399c-0.231,0.302-0.455,0.612-0.682,0.923c-5.523,6.084-9.886,13.027-13.952,20.168c-0.136,0.237-0.207,0.47-0.245,0.697c-0.178,0.17-0.349,0.347-0.529,0.513c-1.313-0.254-2.493-1.2-3.6-1.879c-1.517-0.93-3.118-1.494-4.899-1.572c-0.538-0.022-0.957,0.139-1.27,0.4c-0.651,0.42-1.101,1.169-0.909,2.132c1.089,5.518,11.056,14.683,16.948,10.781c2.155-1.43,3.056-5.461,4.041-8.493c0.291-0.065,0.579-0.192,0.854-0.406c4.651-3.638,7.381-8.977,11.226-13.335c0.191,0.611,0.471,1.176,0.818,1.696c-0.335,0.988-0.019,2.24,1.261,2.653c2.849,0.922,5.929,0.9,8.913,0.57c-0.284,3.175,0.22,6.272,2.954,8.415c0.196,0.153,0.4,0.254,0.607,0.33c0.61,1.302,2.642,1.896,3.533,0.266c2.354-4.303,2.592-10.706,2.258-15.468c-0.104-1.457-0.443-4.023-1.976-4.769c-1.129-0.548-1.793-0.695-3.047-0.856c-0.865,0.001-1.729,0.029-2.593,0.083c-4.949,0.235-0.208-3.712,0.11-3.998c5.1-4.583,12.167-9.156,13.2-16.478c0.64-4.531-0.497-9.581-0.491-14.171c0.004-4.122-0.176-8.321-0.044-12.478c1.166,2.452,2.412,4.869,3.426,7.405c2.027,5.079,1.579,10.498,2.5,15.75c0.182,1.035,1.498,1.718,2.46,1.396c0.219-0.072,0.438-0.146,0.655-0.219c0.307,0.188,0.628,0.354,1.021,0.511c-0.422-0.167,0.111,3.938,0.315,4.289c1.055,1.817,2.933,3.583,5.258,3.014C649.946,238.448,648.333,230.75,647.174,226.019z"/></g><g id="10" class="transparentClick" opacity="0.01"><path fill="#6B6B6B" stroke="#000000" stroke-miterlimit="10" d="M780.923,201.635c-0.273-2.128-1.47-4.116-2.478-5.968c-1.62-2.976-2.52-6.164-3.134-9.431c2.773-7.868,0.736-19.547-6.469-24.296c-0.554-0.365-1.095-0.406-1.561-0.246c-0.876-0.451-1.794-0.838-2.735-1.212c-3.646-1.445-7.851-3.511-11.821-3.688c-6.507-0.289-12.044,2.555-16.472,7.188c-6.055,6.335-11.555,22.376-3.502,29.099c0.149,0.125,0.304,0.215,0.46,0.291c-0.054,1.289-0.048,2.58,0.021,3.881c0.036,0.711,0.144,1.087,0.257,1.277c-0.155,0.062-0.367,0.181-0.665,0.41c-1.604,1.231-4.118,1.631-5.994,2.37c-2.387,0.938-4.479,2.697-6.672,4.013c-5.448,3.266-12.148,2.876-17.805,5.559c-5.801,2.75-10.563,6.847-15.862,10.392c-0.086,0.057-0.154,0.123-0.228,0.186c-3.299-1.646-6.733-2.825-10.45-2.739c-7.378,0.167-15.365,3.084-20.395,8.533c-0.313,0.34-0.475,0.71-0.525,1.077c-0.285,0.316-0.451,0.757-0.394,1.337c0.832,8.263,0.397,16.242,4.897,23.572c0.939,1.531,2.121,2.884,3.46,4.088c-2.793,3.805-5.044,7.981-6.62,12.476c-0.018,0.048-0.021,0.092-0.033,0.139c-1.521,0.397-2.886,1.647-3.697,3.035c-1.347,2.302-1.956,5.576-0.732,8.034c0.201,0.404,0.476,0.67,0.78,0.829c0.376,0.512,0.979,0.865,1.611,0.828c4.897-0.291,9.819-7.786,5.841-11.612c0.029-0.063,0.063-0.12,0.088-0.188c1.405-4.009,3.439-7.736,5.94-11.136c3.973,2.539,8.7,4.135,13.021,5.052c0.168,0.035,0.341,0.055,0.509,0.088c-1.89,4.114-3.209,8.458-3.367,12.503c-0.277,0.137-0.537,0.333-0.757,0.619c-2.367,3.079-5.442,11.15,1.068,11.354c3.6,0.111,5.005-3.373,5.27-6.812c0.113-0.333,0.221-0.667,0.316-1.001c0.176-0.6,0.025-1.24-0.337-1.727c-0.067-0.739-0.179-1.428-0.329-2.003c-0.187-0.715-0.639-1.128-1.17-1.31c0.333-3.58,1.65-7.441,3.414-11.06c2.092,0.171,4.226,0.189,6.374,0.035c-1.104,3.131-1.881,6.349-1.892,9.801c-2.604,0.803-4.326,3.245-3.989,6.063c0.129,1.082,0.813,2,2,2c0.273,0,0.558-0.074,0.823-0.198c0.285,0.078,0.582,0.136,0.907,0.145c0.961,0.027,1.97-0.519,2.549-1.266c0.947-1.225,1.308-2.752,1.189-4.268c0.342-0.32,0.559-0.79,0.53-1.414c-0.175-4.051,0.858-7.783,2.278-11.419c1.96-0.339,3.903-0.803,5.81-1.398c0.334,4.488,0.721,8.975,0.579,13.483c-0.021,0.648,0.218,1.132,0.585,1.455c-2.533,3.854-2.727,11.554,3.558,10.537c5.591-0.904,6.076-11.334,0.723-12.92c-0.31-0.091-0.595-0.111-0.854-0.075c0.067-4.646-0.369-9.271-0.691-13.9c5.854-2.453,11.093-6.146,14.774-10.969c2.655-3.476,3.073-6.411,2.115-8.927c2.717-1.472,4.994-3.379,6.972-6.017c0.847-1.129,1.952-2.307,2.855-3.565c0.432,0.059,0.889-0.012,1.308-0.224c0.14-0.07,0.274-0.148,0.412-0.222c0.086,10.6-4.843,20.354-9.813,29.484c-2.385,4.378-6.652,10.879-0.947,13.065c-0.14,2.737-2.602,2.939-4.664,2.212c-0.846-0.813-1.816-1.484-3.131-1.864c-1.96-0.566-3.315,1.925-1.945,3.343c0.938,0.972,2.079,1.677,3.293,2.144c1.521,1.671,2.607,4.063,4.541,5.166c2.678,1.526,5.332,1.595,8.115,0.327c3.744-1.704,4.307-6.259,8.557-7.743c4.569-1.597,10.629,1.669,15.575,2.746c0.013,0.019,0.027,0.035,0.041,0.055c-0.015,0.075-0.033,0.148-0.042,0.227c-0.391,3.42,1.909,6.357,5.136,7.263c0.487,0.137,0.919,0.094,1.279-0.062c1.729,1.885,3.38,3.824,4.642,6.06c0.074,0.627,0.179,1.266,0.35,1.938c0.515,2.025,3.514,1.783,3.887-0.074c0.135-0.178,0.245-0.372,0.305-0.592c0.819-3.082,0.521-6.2,1-9.333c0.279-1.84-1.329-2.816-2.619-2.334c-0.008-0.016-0.013-0.03-0.02-0.046c5.967-1.703,2.606-11.571,2.117-16.754c-0.293-3.103-0.563-6.169-0.457-9.288c0.131-3.833,1.636-7.619,2.255-11.388c0.989-6.03-2.208-11.458-2.675-17.218c1.317,0.891,2.722,1.596,4.354,1.597c3.069,0.001,3.386-3.968,2.836-6.111c-1.177-4.588-8.314-4.841-8.398-9.902c-0.032-1.97-1.214-3.634-2.188-5.241c-1.329-2.191-1.818-5.235-2.273-7.896c3.319,2.518,6.529,5.74,10.683,6.063C776.604,208.342,781.57,206.652,780.923,201.635z M729.996,210.251c-0.166,1.292-0.353,2.563-0.091,3.948c0.238,1.272,1.347,2.197,2.197,3.083c0.188,0.194,0.332,0.315,0.442,0.396c-0.126-0.052-0.304-0.106-0.551-0.149c-1.13-0.195-2.247-0.505-3.368-0.747c-1.993-0.43-4.016-0.624-5.991-0.043c-0.449,0.132-0.778,0.37-1.007,0.662c-0.791-0.506-1.611-0.986-2.458-1.439C722.797,214.046,726.13,211.523,729.996,210.251z M725.753,232.586c-1.984,2.487-3.81,4.45-6.332,5.937c0.047-0.168,0.08-0.341,0.08-0.522v-1.333c0-1.024-0.808-1.881-1.811-1.979c-0.022-1.259,0.081-2.557,0.128-3.817c0.431-0.155,0.815-0.447,1.075-0.859c0.556-0.889,0.771-1.986,0.451-3c-0.34-1.078-1.188-1.889-2.169-2.403c-0.409-0.216-0.861-0.286-1.291-0.229c-0.595-0.502-1.353-0.931-2.344-1.254c-5.592-1.827-15.042-2.309-19.122,2.797c-0.045,0.058-0.074,0.116-0.113,0.175c-1.379-0.818-2.762-1.672-4.158-2.496c4.816-3.398,9.313-7.185,14.799-9.381c0.228,0.312,0.563,0.565,1.022,0.712c6.653,2.106,13.349,5.185,18.632,9.772c1.012,0.878,1.954,1.835,2.951,2.729C729.502,229.18,726.682,231.421,725.753,232.586z"/></g></svg>'
]
//array should be empty if there are no svg interactivity in booklet(i.e; svgData: [])

/************activity level data ***************/
};
