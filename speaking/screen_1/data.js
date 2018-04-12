{
    "Level": "L2",
    "Unit": "U2",
    "TOC Text": "1. Let's Learn Sentences",
    "Instruction Text": "Tap PLAY to start. Tap NEXT for more conversations.",
    "Learning Objectives": "•  Understand the meaning of the dialogue and language structures\r\n•  Listen to and repeat the responsepart of the dialogue with correct pronunciation and intonation",
    "Student Engagement": "•  Look and listen\r\n•  Whole-class listen and repeat",
    "Teaching Procedure": "•  Allow students to listen to the dialogue.\r\n•  Use actions and expressive voice to help students understand the meaning of the language.\r\n•  Encourage students to repeat the response part of the dialogue, with actions.\r\n•  Tap NEXT for more dialogues."
  },
  // ===== preloadData data object contains data used for preloading ====== //
	oading ====== //
	 scale the elements
     If true : Enable scaling
     If false : Disable scaling
  */
  "minScale": true,
  /* cloud animation
     If true : Enable cloud animation
     If false : Disable cloud animation
  */
  "clouds": true,
  // ==== scaleElements scales the element which are in it's array (id's and classes) ==== //
  "scaleElements": ["#spch_bubl_m .sprite","#spch_bubl_m .clouds","#spch_bubl_m .playButtonContainer","#spch_bubl_m .loading"],
  "frameNumber":[263,498,701],
  // ==== instText is used to give instruction text(itext) at the bottom of the screen ==== //
  "instText": "Tap <span class='boldStyle'>PLAY</span> to start. Tap <span class='boldStyle'>NEXT</span> for more conversations.",
  // ==== backgroundImage provides background image to the screen ==== //
  "backgroundImage": levelImageManager.images.speaking.backgroundimage,
  // ==== spriteData contains data required to create  sprite animation ==== //
  "spriteData": [
    {
      id: 0,
      // ==== frames data object object contains animation's width, height and number of frames ==== //
      frames: {
        width: unitImageManager.sprites.samStandData.data.frames.width,
        height: unitImageManager.sprites.samStandData.data.frames.height,
        numFrames: unitImageManager.sprites.samStandData.data.frames.count
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
        stand_0: [0, unitImageManager.sprites.samStandData.data.frames.count - 1, true]

      },
      // ==== images contains all the images used in sprite ==== //
      images: unitImageManager.sprites.samStandData.images,
      // ==== elemId is used to provide custom element id ==== //
      elemId: "sam",
      // ==== audio is used to give sound to the animation ==== //
      canvasId: "myCanvas_0",
      // ==== label gives label for animation ==== //
      label: "sam",
      // ==== ost is used to give onscreen text ==== //
      ost: "Hello!"
    }

  ],

  // ===== ostArr array contains on screen text ====== //
  "ostArr": ["",""],
  // ===== ostAudio array contains on screen text audio ====== //
  "ostAudio": levelAudioManager.audios.speaking.female,

  // ===== Prepare Mode data in HTML format ====== //
  "prepareData":{
    "Level": "L1",
    "Unit": "U1",
    "TOC Text": "1. Let's Learn Sentences",
    "Instruction Text": "Tap PLAY to start. Tap NEXT for more conversations.",
    "Learning Objectives": "•  Understand the meaning of the dialogue and language structures\r\n•  Listen to and repeat the responsepart of the dialogue with correct pronunciation and intonation",
    "Student Engagement": "•  Look and listen\r\n•  Whole-class listen and repeat",
    "Teaching Procedure": "•  Allow students to listen to the dialogue.\r\n•  Use actions and expressive voice to help students understand the meaning of the language.\r\n•  Encourage students to repeat the response part of the dialogue, with actions.\r\n•  Tap NEXT for more dialogues."
  },
  // ===== preloadData data object contains data used for preloading ====== //
	"preloadData": {
    "audios": [],
    "videos": [],
    "images": [levelImageManager.images.speaking.backgroundimage]
  }
};
