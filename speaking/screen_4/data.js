import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";

module.exports = {
  screenTitle: {
    // ==== screenTitle data object is used for screen level audio and images ==== //
    titleImage: levelImageManager.images.screenTitle.speaking_lets_use,
    titleAudio: levelAudioManager.audios.screenTitle.speaking_lets_use,
    title: "Sentences",
    subTitle: {
      title: "Say It by Yourself",
      textAlign: "left"
    },
    fontColor: "#333"
  },
  /* minScale is used to scale the elements
     If true : Enable scaling
     If false : Disable scaling
  */
  "minScale": true,
  // ==== scaleElements scales the element which are in it's array (id's and classes) ==== //
  "scaleElements": [".clickItemsContainer",".btnParent"],
  // ==== instructionText is used to give instruction text(itext) at the bottom of the screen ==== //
  "instructionText": "Tap the text to hear the question. Tap the characters to hear what they say.",
  // ==== backgroundImage provides background image to the screen ==== //
  "backgroundImg": levelImageManager.images.speaking.backgroundimage,
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
        /*
              1st element : screen number for setting first frame
              2nd element : screen number for setting last frames
              3rd element : For playing animation in infinite loop
                          If true : animation plays in infinite loop
                          If false : animation doesn't plays in infinite loop
          */
        run_0: [
          73, unitImageManager.sprites.meg.data.frames.count - 1,
          false,
          1.10
        ],
        stand_0: [
          0,60,
          true
        ]
      },
      // ==== images contains all the images used in sprite ==== //
      images: unitImageManager.sprites.meg.images,
      // ==== elemId is used to provide custom element id ==== //
      elemId: "meg",
      // ==== canvasId is used to provide  custom canvsas id ==== //
      canvasId: "myCanvas_0",
      // ==== audio is used to give sound to the animation ==== //
      audio: levelAudioManager.audios.speaking.meg,
      // ==== label gives label for animation ==== //
      label: "Table",
      // ==== ost is used to give onscreen text ==== //
      ost: "Hello!"
    }, {
      id:1,
      frames: {
        width: unitImageManager.sprites.kim.data.frames.width,
        height: unitImageManager.sprites.kim.data.frames.height,
        numFrames: unitImageManager.sprites.kim.data.frames.count
      },
      animations: {
        run_1: [
          56, unitImageManager.sprites.kim.data.frames.count - 1,
          false,
          1
        ],
        stand_1: [
          0,54,
          true
        ]
      },
      images: unitImageManager.sprites.kim.images,
      elemId: "kim",
      canvasId: "myCanvas_1",
      audio: levelAudioManager.audios.speaking.kim,
      label: "Chair",
      ost: "Hello!"
    }, {
      id:2,
      frames: {
        width: unitImageManager.sprites.sam.data.frames.width,
        height: unitImageManager.sprites.sam.data.frames.height,
        numFrames: unitImageManager.sprites.sam.data.frames.count
      },
      animations: {
        run_2: [
          90, unitImageManager.sprites.sam.data.frames.count - 1,
          false,
          1
        ],
        stand_2: [
          39,90,
          true,0.7
        ],
        bounce_2:[0,38,false],
      },
      images: unitImageManager.sprites.sam.images,
      elemId: "sam",
      canvasId: "myCanvas_2",
      audio: levelAudioManager.audios.speaking.sam,
      label: "Dustsam",
      ost: "Hello!"
    }, {
      id:3,
      frames: {
        width: unitImageManager.sprites.tom.data.frames.width,
        height: unitImageManager.sprites.tom.data.frames.height,
        numFrames: unitImageManager.sprites.tom.data.frames.count
      },
      animations: {
        run_3: [
          44, unitImageManager.sprites.tom.data.frames.count - 1,
          false,
          1
        ],
        stand_3: [
          0,42,
          true
        ]
      },
      images: unitImageManager.sprites.tom.images,
      elemId: "tom",
      canvasId: "myCanvas_3",
      audio: levelAudioManager.audios.speaking.tom,
      label: "Cupboard",
      ost: "Hello!"
    }
  ],

  // ===== ostArr array contains on screen text ====== //
  "ostArr": ["What’s your name?"],
  // ===== ostAudio array contains on screen text audio ====== //
  "ostAudio": levelAudioManager.audios.speaking.what_your_name_woman,
  // ===== Prepare Mode data in HTML format ====== //
  "prepareData": {
    tocTitle: "Let's Use Sentences",
    //"howItWorks":" Tap the question to hear the audio. Tap any picture to hear the sentence. </br><u>Notes</u> <li>Week 1 will only feature four words </li><li>Week 2 will feature 8 words </li><li>Can be the same mural as used in the Warm-up section (but here with active clickable spots for audio) </li> ",
    learningObjectives:"<li>Apply language structures to <i>express own ideas</i></li><li>Demonstrate mastery of language structures</li>",
    studentEngagement:"<li>Individual production</li>",
    teachingProcedure:"<li>Wave and say 'hello' to one of the characters on the screen, then ask 'what's your name?'.</li><li>Encourage students to say the sentence (e.g. 'My name is Tom'), then tap the character to check.</li><li>Repeat for all characters on the screen.<br><u>Play a Game: Pass the Ball (Part 1)</u><br>Hold a ball and say your name, then pass the ball to your co-teacher and have them do the same. Repeat if necessary. Pass the ball around the room and have each student say their name as they hold the ball.<br><u>Play a Game: Pass the Ball (Part 2)</u><br>Hold the ball and say: 'My name is [own name]', then pass the ball to your co-teacher and have them do the same. Repeat if necessary. Pass the ball around the room and have each student say: 'My name is [own name]' as they hold the ball. Finally, invite students to the front of the class to introduce themselves, using the sentence frame: 'Hello. My name is ___'.</li>",
    videoData: [{

    }],
    gameActivity:"FALSE"
  },
  // ===== preloadData data object contains data used for preloading ====== //
  "preloadData": {
    "audios": [levelAudioManager.audios.speaking.meg, levelAudioManager.audios.speaking.kim, levelAudioManager.audios.speaking.sam, levelAudioManager.audios.speaking.tom, levelAudioManager.audios.speaking.what_your_name_woman],
    "images": [
      require("./assets/images/spreaking_bg_without_shadow.png"),
      require("./assets/images/shadow_01.png"),
      require("./assets/images/shadow_02.png"),
      require("./assets/images/shadow_03.png"),
      require("./assets/images/shadow_04.png"),
      levelImageManager.images.speaking.backgroundimage

    ]
  }
};
