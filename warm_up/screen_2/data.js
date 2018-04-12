{
    "Level": "L2",
    "Unit": "U2",
    "TOC Text": "2. Let's Remember Sentences",
    "Instruction Text": "Tap the characters to hear what they say.",
    "Learning Objectives": "•  Build confidence\r\n",
    "Student Engagement": "•  Individual production",
    "Teaching Procedure": "•  Encourage students to listen to what the characters say.\r\n•  Say 'hello' to your co-teacher (with your co-teacher saying 'hello' back to you).\r\n•  Go around the class saying 'hello' to each student and have them say 'hello' back to you."
  },
  // ===== preloadData data object contains data used for preloading ====== //
	oading ====== //
	  subTitle: {
      title: "Say It by Yourself ",
      textAlign: "left"
    },
    fontColor: "#333333"
  },
  // ==== integration_temp_name is the template which will use this data.js ==== //
  "integration_temp_name": "anim_clk_m",

  "title": "U1 W1 C1 S2",
  /* minScale is used to scale the elements
     If true : Enable scaling
     If false : Disable scaling
  */
  "minScale": false,
  // ==== scaleElements scales the element which are in it's array (id's and classes) ==== //
  "scaleElements": ["#anim_clk_m .sprite", "#anim_clk_m .clickSprite", "#anim_clk_m .speechBubbleContainer"],
  // ==== backgroundImage provide background image to the screen ==== //
  "backgroundImage": levelImageManager.images.warm_up.screen_2_bg,
  // ==== ostText gives onscreen text ====
  "ostText": ["Hello!", "Hello!"],
  // ==== instructionText is used to give instruction text(itext) at the bottom of the screen ==== //
  "instructionText": "Tap the characters to hear what they say.",
  // ==== speechBubble provides speech buble image ====
  "speechBubble": levelImageManager.images.warm_up.speech_bubble,
  // ==== spriteData contains data required to create  sprite animation ==== //
  "spriteData": [{
    id: 0,
    // ==== frames data object object contains animation's width, height and number of frames ==== //
    frames: {
      width: unitImageManager.sprites.boy_sam.data.frames.width,
      height: unitImageManager.sprites.boy_sam.data.frames.height,
      numFrames: unitImageManager.sprites.boy_sam.data.frames.count
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
      walk_0: [
        0, 51,
        false,
        1
      ],
      stand_0: [
        52, 100,
        true
      ],
      hand_0: [
        101, 136,
        false,
        2
      ]
    },
    // ==== images contains all the images used in sprite ==== //
    images: unitImageManager.sprites.boy_sam.images,
    // ==== elemId is used to provide custom element id ==== //
    elemId: "boy",
    // ==== canvasId is used to provide  custom canvsas id ==== //
    canvasId: "myCanvas_0",
    // ==== audio is used to give sound to the animation ==== //
    audio: unitAudioManager.audios.warm_up.hello_sam,
    // ==== label gives label for animation ==== //
    label: "Boy",
    // ==== ost is used to give onscreen text ==== //
    ost: "Hello!"
  }, {
    id: 1,
    frames: {
      width: unitImageManager.sprites.girl_meg.data.frames.width,
      height: unitImageManager.sprites.girl_meg.data.frames.height,
      numFrames: unitImageManager.sprites.girl_meg.data.frames.count
    },
    animations: {
      walk_1: [
        0, 80,
        false,
        1.5
      ],
      stand_1: [
        81, 116,
        true
      ],
      hand_1: [
        117, 160,
        false,
        1.7
      ]
    },
    images: unitImageManager.sprites.girl_meg.images,
    elemId: "girl",
    canvasId: "myCanvas_1",
    audio: unitAudioManager.audios.warm_up.hello_meg,
    label: "Girl",
    ost: "Hello!"
  }],
  "speechBubbleContainer_0": {

  },

  "speechBubbleContainer_1": {

  },
  "speechBubbleContainer": {
    "width": "438px",
    "height": "310px",
    "position": "absolute",
    "bottom": "53%"
  },

  "textCss": {
    "text-align": "center",
    "font-size": "50px",
    "left": "2%",
    "top": "2%",
    "position": "relative"
  },
  // ===== Prepare Mode data in HTML format ====== //

  "prepareData":{
    "Level": "L1",
    "Unit": "U1",
    "TOC Text": "2. Let's Remember Sentences",
    "Instruction Text": "Tap the characters to hear what they say.",
    "Learning Objectives": "•  Build confidence\r\n",
    "Student Engagement": "•  Individual production",
    "Teaching Procedure": "•  Encourage students to listen to what the characters say.\r\n•  Say 'hello' to your co-teacher (with your co-teacher saying 'hello' back to you).\r\n•  Go around the class saying 'hello' to each student and have them say 'hello' back to you."
  },
  // ===== preloadData data object contains data used for preloading ====== //
	"preloadData": {
    "audios": [unitAudioManager.audios.warm_up.hello_sam, unitAudioManager.audios.warm_up.hello_meg],
    "videos": [],
    "images": [levelImageManager.images.warm_up.screen_2_bg, levelImageManager.images.screenTitle.warm_up_lets_remember]
  }
};
