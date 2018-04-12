{
    "Level": "L2",
    "Unit": "U2",
    "TOC Text": "3. Let's Practice Sentences",
    "Instruction Text": "Tap PLAY to start. Tap the characters to hear what they say.",
    "Learning Objectives": "•  Respondto questions with correct pronunciation and language structures\r\n•  Develop confidence and fluency in spoken language",
    "Student Engagement": "•  Whole-class production\r\n•  Group production",
    "Teaching Procedure": "•  Have students listen to the question, then guide them to say the correct response (as a whole class). Click the character (or speech bubble) to check.\r\n•  Click NEXT and repeat. Continue until students show enough confidence to play a game.\r\nPlay a game: Telephone Race\r\nDivide the class into two teams, with each team sitting in a line. One teacher guides each team (both teams play at the same time). Whisper the sentence to the first student in the line (e.g. ‘My name is Tom’). That student then turns and whispers it to their neighbor, and so on, down the line. When the sentence reaches the last student in the line, they should shout out the sentence and run to the board to touch the character. After one round, have students shuffle the in their seats, so that a different student can be the last in the line.\r\nNOTE: The first time you play the game, be sure to model how to play first.\r\n",
    "Video": "*"
  },
  // ===== preloadData data object contains data used for preloading ====== //
	oading ====== //
	bubl_ans_m .clouds", "#spch_bubl_ans_m .playButtonContainer", "#spch_bubl_ans_m .loading"
  ],
  // ==== backgroundImage provides background image to the screen ====
  "backgroundImage": levelImageManager.images.speaking.backgroundimage,
  // ==== spriteData contains data required to create  sprite animation ====
  "spriteData": [
    {
      id: 0,
      // ==== frames data object object contains animation's width, height and number of frames ====
      frames: {
        width: unitImageManager.sprites.samStandData.data.frames.width,
        height: unitImageManager.sprites.samStandData.data.frames.height,
        numFrames: unitImageManager.sprites.samStandData.data.frames.count
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
        stand_0: [
          0, unitImageManager.sprites.samStandData.data.frames.count - 1,
          true
        ]
      },
      // ==== images contains all the images used in sprite ====
      images: unitImageManager.sprites.samStandData.images,
      // ==== elemId is used to provide custom element id ====
      elemId: "sam",
      // ==== audio is used to give sound to the animation ====
      canvasId: "myCanvas_0",
      // ==== label gives label for animation ====
      label: "sam",
      // ==== ost is used to give onscreen text ====
      ost: "Hello!"
    }

  ],

  // ===== ostArr array contains on screen text ======
  "ostArr": [
    "", ""
  ],
  // ===== ostAudio array contains on screen text audio ======
  "ostAudio": levelAudioManager.audios.speaking.female,

  // ===== Prepare Mode data in HTML format ======
  "prepareData":{
    "Level": "L1",
    "Unit": "U1",
    "TOC Text": "3. Let's Practice Sentences",
    "Instruction Text": "Tap PLAY to start. Tap the characters to hear what they say.",
    "Learning Objectives": "•  Respondto questions with correct pronunciation and language structures\r\n•  Develop confidence and fluency in spoken language",
    "Student Engagement": "•  Whole-class production\r\n•  Group production",
    "Teaching Procedure": "•  Have students listen to the question, then guide them to say the correct response (as a whole class). Click the character (or speech bubble) to check.\r\n•  Click NEXT and repeat. Continue until students show enough confidence to play a game.\r\nPlay a game: Telephone Race\r\nDivide the class into two teams, with each team sitting in a line. One teacher guides each team (both teams play at the same time). Whisper the sentence to the first student in the line (e.g. ‘My name is Tom’). That student then turns and whispers it to their neighbor, and so on, down the line. When the sentence reaches the last student in the line, they should shout out the sentence and run to the board to touch the character. After one round, have students shuffle the in their seats, so that a different student can be the last in the line.\r\nNOTE: The first time you play the game, be sure to model how to play first.\r\n",
    "Video": "*"
  },
  // ===== preloadData data object contains data used for preloading ====== //
	"preloadData": {
    "audios": [],
    "videos": [],
    "images": [levelImageManager.images.speaking.backgroundimage]
  }
};
