{
    "Level": "L2",
    "Unit": "U2",
    "TOC Text": "1. Let's Learn New Words",
    "Instruction Text": "Tap the pictures to hear the words.",
    "Learning Objectives": "•  Understand the meaning of new words\r\n•  Listen and repeat words with correct pronunciation",
    "Student Engagement": "•  Whole class listen and repeat",
    "Teaching Procedure": "•  Have students listen to each word and repeat it at least three times (if possible, have students do actions for the words)\r\n•  After going through all the words, have students listen and repeat each word again, at a faster pace.\r\n•  Listen for words that students are having trouble with and spend extra time on those.\r\nPlay a Game: Step to the Board\r\nTap on a picture and have students repeat the word, while doing the action. Then, students need to stand up and take three steps forward. Each time they take a step, they should say the word and do the action. When students are close to the board, chase them back to their seats. Repeat\r\n",
    "Video": "**"
  },
  // ===== preloadData data object contains data used for preloading ====== //
	oading ====== //
	  // ==== backgroundImg provides background image ==== //
  "backgroundImg": levelImageManager.images.backgroundimage,
  // ==== spriteData contains data required to create  sprite animation ==== //
  "spriteData": [
    {
      id:1,
      // ==== frames data object object contains animation's width, height and number of frames ==== //
      frames: {
        width: unitImageManager.sprites.monkey.data.frames.width,
        height: unitImageManager.sprites.monkey.data.frames.height,
        numFrames: unitImageManager.sprites.monkey.data.frames.count
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
          0, unitImageManager.sprites.monkey.data.frames.count - 1,
          false
        ]
      },
      // ==== images contains all the images used in sprite ==== //
      images: unitImageManager.sprites.monkey.images,
      // ==== image is used to provide images at the bottom ==== //
      image: levelImageManager.images.reading.monkey,
      // ==== elemId is used to provide custom element id ==== //
      elemId: "monkey_0",
      // ==== canvasId is used to provide  custom canvsas id ==== //
      canvasId: "myCanvas_0",
      // ==== audio is used to give sound to the animation ==== //
      audio: unitAudioManager.audios.reading.monkey_man,
      // ==== label gives label for animation ==== //
      label: "monkey",
      // ==== ost is used to give onscreen text ==== //
      ost: "Hello!",
      //==== elemtCss is used to give styling to center animation ==== //
      elemtCss:{
        "width": "500px",
        "height": "500px",
        "transform": "translateY(-50%)",
        "-webkit-transform": "translateY(-50%)",
        "-moz-transform": "translateY(-50%)",
        "-ms-transform": "translateY(-50%)"

      },
      //==== imgCss is used to give styling to downsides clickables ==== //
      imgCss:{

      }
    }, {
      id:2,
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
      image: levelImageManager.images.reading.mitten,
      elemId: "mitten_1",
      canvasId: "myCanvas_1",
      audio: unitAudioManager.audios.reading.mitten_man,
      label: "mitten",
      ost: "Hello!",
      elemtCss:{
        "width": "500px",
        "height": "500px",
        "transform": "translateY(-45%)",
        "-webkit-transform": "translateY(-45%)",
        "-moz-transform": "translateY(-45%)",
        "-ms-transform": "translateY(-45%)"

      },
      imgCss:{

      }

    }, {
      id:3,
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
        // ==== lastframe  provides images between the first and the last element in the array ==== //
        lastframe: [
          /*
              3rd element : For repeating lastframe
                          If true : repeat lastframe
                          If false : doesn't repeat lastframe
          */
          7, 7,
          false
        ]
      },
      images: unitImageManager.sprites.muffin.images,
      image: levelImageManager.images.reading.muffin,
      elemId: "muffin_2",
      canvasId: "myCanvas_2",
      audio: unitAudioManager.audios.reading.muffin_man,
      label: "muffin",
      ost: "Hello!",
      elemtCss:{
        "width": "400px",
        "height": "400px",
        "transform": "translateY(-35%)",
        "-webkit-transform": "translateY(-35%)",
        "-moz-transform": "translateY(-35%)",
        "-ms-transform": "translateY(-35%)"

      },
      imgCss:{

      }
    }, {
      id:4,
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
      image: levelImageManager.images.reading.moose,
      elemId: "moose_3",
      canvasId: "myCanvas_3",
      audio: unitAudioManager.audios.reading.moose_man,
      label: "moose",
      ost: "Hello!",
      elemtCss:{
        "width": "567px",
        "height": "600px",
        "transform": "translateY(-44%)",
        "-webkit-transform": "translateY(-44%)",
        "-moz-transform": "translateY(-44%)",
        "-ms-transform": "translateY(-44%)"

      },
      imgCss:{

      }
    },
    {
      id:5,
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
      image: levelImageManager.images.reading.motorcycle,
      elemId: "motorcycle_4",
      canvasId: "myCanvas_4",
      audio: unitAudioManager.audios.reading.motorcycle_man,
      label: "motorcycle",
      ost: "Hello!",
      elemtCss:{
        "width": "800px",
        "height": "700px",
        "transform": "translateY(-30%)",
        "-webkit-transform": "translateY(-30%)",
        "-moz-transform": "translateY(-30%)",
        "-ms-transform": "translateY(-30%)"

      },
      imgCss:{

      }
    },
    {
      id:6,
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
      image: levelImageManager.images.reading.mouse,
      elemId: "mouse_5",
      canvasId: "myCanvas_5",
      audio: unitAudioManager.audios.reading.mouse_man,
      label: "mouse",
      ost: "Hello!",
      elemtCss:{
        "width": "500px",
        "height": "500px",
        "transform": "translateY(-40%)",
        "-webkit-transform": "translateY(-40%)",
        "-moz-transform": "translateY(-40%)",
        "-ms-transform": "translateY(-40%)"

      },
      imgCss:{

      }
    },
    {
      id:7,
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
      image: levelImageManager.images.reading.mailbox,
      elemId: "mailbox_6",
      canvasId: "myCanvas_6",
      audio: unitAudioManager.audios.reading.mailbox_man,
      label: "mailbox",
      ost: "Hello!",
      elemtCss:{
        "width": "550px",
        "height": "550px",
        "transform": "translateY(-40%)",
        "-webkit-transform": "translateY(-40%)",
        "-moz-transform": "translateY(-40%)",
        "-ms-transform": "translateY(-40%)"

      },
      imgCss:{

      }
    }
  ],
  // ===== ostArr array contains on screen text ====== //
  "ostArr": [],

  // autoplay states whether audio should be played by default while turning pages value shold be true if required or else false
  autoPlay: true,
  // autoplay states whether audio should be played by default while turning pages value shold be true if required or else false
  // ===== Prepare Mode data in HTML format ====== //
  "prepareData":{
    "Level": "L1",
    "Unit": "U1",
    "TOC Text": "1. Let's Learn New Words",
    "Instruction Text": "Tap the pictures to hear the words.",
    "Learning Objectives": "•  Understand the meaning of new words\r\n•  Listen and repeat words with correct pronunciation",
    "Student Engagement": "•  Whole class listen and repeat",
    "Teaching Procedure": "•  Have students listen to each word and repeat it at least three times (if possible, have students do actions for the words)\r\n•  After going through all the words, have students listen and repeat each word again, at a faster pace.\r\n•  Listen for words that students are having trouble with and spend extra time on those.\r\nPlay a Game: Step to the Board\r\nTap on a picture and have students repeat the word, while doing the action. Then, students need to stand up and take three steps forward. Each time they take a step, they should say the word and do the action. When students are close to the board, chase them back to their seats. Repeat\r\n",
    "Video": "**"
  },
  // ===== preloadData data object contains data used for preloading ====== //
	"preloadData": {
    "audios": [levelAudioManager.audios.screenTitle.reading_lets_remember, unitAudioManager.audios.reading.monkey, unitAudioManager.audios.reading.mitten, unitAudioManager.audios.reading.muffin, unitAudioManager.audios.reading.moose, unitAudioManager.audios.reading.motorcycle, unitAudioManager.audios.reading.mouse, unitAudioManager.audios.reading.mailbox],
    "images": [levelImageManager.images.reading.mailbox,levelImageManager.images.backgroundimage,levelImageManager.images.screenTitle.vocabulary_listen_and_repeat, levelImageManager.images.screenTitle.reading_lets_remember, levelImageManager.images.reading.monkey, levelImageManager.images.reading.mitten, levelImageManager.images.reading.muffin, levelImageManager.images.reading.moose, levelImageManager.images.reading.motorcycle, levelImageManager.images.reading.mouse, levelImageManager.images.reading.mailbox]
  }
};
