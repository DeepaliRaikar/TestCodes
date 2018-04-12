{
    "Level": "L2",
    "Unit": "U2",
    "TOC Text": "1. Let's Learn the Sound of the Day",
    "Instruction Text": "Tap the curtains to reveal the word and sound of the day.",
    "Learning Objectives": "•  Say word of the day with correct pronunciation, while doing associated action\r\n•  Understand connection between word and sound of the day (initial sound)\r\n•  Say sound of the day with correct pronunciation, while doing associated action",
    "Student Engagement": "•  Whole-class listen and repeat",
    "Teaching Procedure": "•  Tap the left curtain to reveal the word of the day.\r\n•  Have students listen and repeat the word several times.\r\n•  Say the word of the day with emphasis on the first sound.\r\n•   Encourage students to identify and say the first sound of the word.\r\n•  Ask students what they think will be the sound of the day, then tap the right curtain to reveal.\r\n•  Have students listen and repeat the sound several times, while doing the action.",
    "Video": "**"
  },
  // ===== preloadData data object contains data used for preloading ====== //
	oading ====== //
	 Enable scaling
     If false : Disable scaling
  */
  "minScale": true,
  // ==== scaleElements scales the element which are in it's array (id's and classes) ==== //
  "scaleElements": [".spriteCurtaint_0", ".spriteCurtaint_1"],
  // ==== spriteData contains data required to create  sprite animation ==== //
  "spriteData": [
    {
      // ==== frames data object object contains animation's width, height and number of frames ==== //
      frames: {
        width: unitImageManager.sprites.curtain.data.frames.width,
        height: unitImageManager.sprites.curtain.data.frames.height,
        numFrames: unitImageManager.sprites.curtain.data.frames.count
      },
      // ==== animations data object contains information of animations to play ==== //
      animations: {
        curtainleft: [
          /*
                1st element : screen number for setting first frame
                2nd element : screen number for setting last frames
                3rd element : For playing animation in infinite loop
                            If true : animation plays in infinite loop
                            If false : animation doesn't plays in infinite loop
            */
          0, unitImageManager.sprites.curtain.data.frames.count - 1,
          false
        ]
      },
      // ==== images contains all the images used in sprite ==== //
      images: unitImageManager.sprites.curtain.images,
      // ==== elemId is used to provide custom element id ==== //
      elemId: "spriteCurtaint_0",
      // ==== canvasId is used to provide  custom canvsas id ==== //
      canvasId: "myCanvas_0",
      // ==== audio is used to give sound to the animation ==== //
      audio: unitAudioManager.audios.phonics.milk_woman,
      // ==== label gives label for animation ==== //
      label: "",
      // ==== ost is used to give onscreen text ==== //
      ost: ""
    }, {
      frames: {
        width: unitImageManager.sprites.curtain.data.frames.width,
        height: unitImageManager.sprites.curtain.data.frames.height,
        numFrames: unitImageManager.sprites.curtain.data.frames.count
      },
      animations: {
        curtainleft_1: [
          0, unitImageManager.sprites.curtain.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.curtain.images,
      elemId: "spriteCurtaint_1",
      canvasId: "myCanvas_1",
      audio: unitAudioManager.audios.phonics.m_woman,
      label: "",
      ost: ""
    }, {
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
      elemId: "milk",
      canvasId: "myCanvas_3",
      audio: unitAudioManager.audios.phonics.milk_woman,
      label: "",
      ost: "",
      showOval:true
    }, {
      frames: {
        width: unitImageManager.sprites.boyandglass.data.frames.width,
        height: unitImageManager.sprites.boyandglass.data.frames.height,
        numFrames: unitImageManager.sprites.boyandglass.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.boyandglass.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.boyandglass.images,
      elemId: "boy_milk",
      canvasId: "myCanvas_4",
      audio: unitAudioManager.audios.phonics.m_woman,
      label: "",
      ost: "",
      showOval:true
    }
  ],

  // ===== Prepare Mode data in HTML format ====== //
  "prepareData":{
    "Level": "L1",
    "Unit": "U1",
    "TOC Text": "1. Let's Learn the Sound of the Day",
    "Instruction Text": "Tap the curtains to reveal the word and sound of the day.",
    "Learning Objectives": "•  Say word of the day with correct pronunciation, while doing associated action\r\n•  Understand connection between word and sound of the day (initial sound)\r\n•  Say sound of the day with correct pronunciation, while doing associated action",
    "Student Engagement": "•  Whole-class listen and repeat",
    "Teaching Procedure": "•  Tap the left curtain to reveal the word of the day.\r\n•  Have students listen and repeat the word several times.\r\n•  Say the word of the day with emphasis on the first sound.\r\n•   Encourage students to identify and say the first sound of the word.\r\n•  Ask students what they think will be the sound of the day, then tap the right curtain to reveal.\r\n•  Have students listen and repeat the sound several times, while doing the action.",
    "Video": "**"
  },
  // ===== preloadData data object contains data used for preloading ====== //
	"preloadData": {
    "audios": [],
    "videos": [],
    "images": [levelImageManager.images.screenTitle.phonics_lets_learn_sound_of_the_day]
  }
};
