{
    "Level": "L2",
    "Unit": "U2",
    "TOC Text": "3. Let's Practice Words",
    "Instruction Text": "Tap the pictures to make them disappear. Tap RESET to show more pictures.",
    "Learning Objectives": "•  Correctly identify words when presented with an image\r\n•  Produce words with correct pronunciation\r\n•  Demonstrate mastery of words",
    "Student Engagement": "•  Individual production",
    "Teaching Procedure": "•  Point to a picture and have students say the word, then tap the picture and move to the next one. •  Continue, until there are no more pictures on the screen.\r\n•  Tap RESET to show more pictures.\r\nPlay a Game: Timed Relay (2 Teams)\r\nTap the TIMER in the toolbar to enable the timer. Divide the class into two teams (with students of mixed abilities in each team). One team plays at a time. When you start the timer, students in one team take turns to run to the board, say a word and tap the picture. When all the pictures have been tapped, record the time, then invite the next team to play. When the second team has finished, compare times. Play again.\r\nTIP: To make sure students SAY the words, make a rule that if students do not say each word before tapping it, the other team automatically wins.",
    "Video": "*"
  },
  // ===== preloadData data object contains data used for preloading ====== //
	oading ====== //
	ckgroundimage,
  // ==== spriteData contains data required to create  sprite animation ==== //
  "spriteData": [
    {
      id: 1,
      // ==== frames data object object contains animation's width, height and number of frames ==== //
      frames: {
        width: unitImageManager.sprites.updatedTable.data.frames.width,
        height: unitImageManager.sprites.updatedTable.data.frames.height,
        numFrames: unitImageManager.sprites.updatedTable.data.frames.count
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
          0, unitImageManager.sprites.updatedTable.data.frames.count - 1,
          false
        ],
        // ==== lastframe  provides images between the first and the last element in the array ==== //
        lastframe: [
          /*
              3rd element : For repeating lastframe
                          If true : repeat lastframe
                          If false : doesn't repeat lastframe
          */
          unitImageManager.sprites.updatedTable.data.frames.count - 2,
          unitImageManager.sprites.updatedTable.data.frames.count - 1,
          false
        ]
      },
      // ==== images contains all the images used in sprite ==== //
      images: unitImageManager.sprites.updatedTable.images,
      // ==== elemId is used to provide custom element id ==== //
      elemId: "table",
      // ==== canvasId is used to provide  custom canvsas id ==== //
      canvasId: "myCanvas_0",
      // ==== audio is used to give sound to the animation ==== //
      audio: unitAudioManager.audios.warm_up.bird,
      // ==== Gives scaling property to the element ==== //
      scaling: "0.23"
    }, {
      id: 2,
      frames: {
        width: unitImageManager.sprites.updatedChair.data.frames.width,
        height: unitImageManager.sprites.updatedChair.data.frames.height,
        numFrames: unitImageManager.sprites.updatedChair.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.updatedChair.data.frames.count - 1,
          false
        ],
        lastframe: [
          unitImageManager.sprites.updatedChair.data.frames.count - 2,
          unitImageManager.sprites.updatedChair.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.updatedChair.images,
      elemId: "chair",
      canvasId: "myCanvas_1",
      audio: unitAudioManager.audios.vocabulary.frog,
      scaling: "0.24"
    }, {
      id: 3,
      frames: {
        width: unitImageManager.sprites.bin.data.frames.width,
        height: unitImageManager.sprites.bin.data.frames.height,
        numFrames: unitImageManager.sprites.bin.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.bin.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.bin.images,
      elemId: "bin",
      canvasId: "myCanvas_2",
      audio: unitAudioManager.audios.vocabulary.frog,
      scaling: "0.3"
    }, {
      id: 4,
      frames: {
        width: unitImageManager.sprites.cupboard.data.frames.width,
        height: unitImageManager.sprites.cupboard.data.frames.height,
        numFrames: unitImageManager.sprites.cupboard.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.cupboard.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.cupboard.images,
      elemId: "cupboard",
      canvasId: "myCanvas_3",
      audio: unitAudioManager.audios.vocabulary.frog,
      scaling: "0.5"
    }, {
      id: 5,
      frames: {
        width: unitImageManager.sprites.updatedTable.data.frames.width,
        height: unitImageManager.sprites.updatedTable.data.frames.height,
        numFrames: unitImageManager.sprites.updatedTable.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.updatedTable.data.frames.count - 1,
          false
        ],
        lastframe: [
          unitImageManager.sprites.updatedTable.data.frames.count - 2,
          unitImageManager.sprites.updatedTable.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.updatedTable.images,
      elemId: "table1",
      canvasId: "myCanvas_4",
      audio: unitAudioManager.audios.warm_up.bird,
      scaling: "0.23"
    }, {
      id: 6,
      frames: {
        width: unitImageManager.sprites.updatedChair.data.frames.width,
        height: unitImageManager.sprites.updatedChair.data.frames.height,
        numFrames: unitImageManager.sprites.updatedChair.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.updatedChair.data.frames.count - 1,
          false
        ],
        lastframe: [
          unitImageManager.sprites.updatedChair.data.frames.count - 2,
          unitImageManager.sprites.updatedChair.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.updatedChair.images,
      elemId: "chair1",
      canvasId: "myCanvas_5",
      audio: unitAudioManager.audios.vocabulary.frog,
      scaling: "0.24"
    }, {
      id: 7,
      frames: {
        width: unitImageManager.sprites.bin.data.frames.width,
        height: unitImageManager.sprites.bin.data.frames.height,
        numFrames: unitImageManager.sprites.bin.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.bin.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.bin.images,
      elemId: "bin1",
      canvasId: "myCanvas_6",
      audio: unitAudioManager.audios.vocabulary.frog,
      scaling: "0.3"
    }, {
      id: 8,
      frames: {
        width: unitImageManager.sprites.cupboard.data.frames.width,
        height: unitImageManager.sprites.cupboard.data.frames.height,
        numFrames: unitImageManager.sprites.cupboard.data.frames.count
      },
      animations: {
        run: [
          0, unitImageManager.sprites.cupboard.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.cupboard.images,
      elemId: "cupboard1",
      canvasId: "myCanvas_7",
      audio: unitAudioManager.audios.vocabulary.frog,
      scaling: "0.5"
    }, {
      id: 9,
      frames: {
        width: unitImageManager.sprites.smoke_proof.data.frames.width,
        height: unitImageManager.sprites.smoke_proof.data.frames.height,
        numFrames: unitImageManager.sprites.smoke_proof.data.frames.count
      },
      animations: {
        run_8: [
          0, unitImageManager.sprites.smoke_proof.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.smoke_proof.images,
      elemId: "bubble_0",
      canvasId: "myCanvas_8",
    }, {
      id: 10,
      frames: {
        width: unitImageManager.sprites.smoke_proof.data.frames.width,
        height: unitImageManager.sprites.smoke_proof.data.frames.height,
        numFrames: unitImageManager.sprites.smoke_proof.data.frames.count
      },
      animations: {
        run_9: [
          0, unitImageManager.sprites.smoke_proof.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.smoke_proof.images,
      elemId: "bubble_1",
      canvasId: "myCanvas_9",
    }, {
      id: 11,
      frames: {
        width: unitImageManager.sprites.smoke_proof.data.frames.width,
        height: unitImageManager.sprites.smoke_proof.data.frames.height,
        numFrames: unitImageManager.sprites.smoke_proof.data.frames.count
      },
      animations: {
        run_10: [
          0, unitImageManager.sprites.smoke_proof.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.smoke_proof.images,
      elemId: "bubble_2",
      canvasId: "myCanvas_10",
    }, {
      id: 12,
      frames: {
        width: unitImageManager.sprites.smoke_proof.data.frames.width,
        height: unitImageManager.sprites.smoke_proof.data.frames.height,
        numFrames: unitImageManager.sprites.smoke_proof.data.frames.count
      },
      animations: {
        run_11: [
          0, unitImageManager.sprites.smoke_proof.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.smoke_proof.images,
      elemId: "bubble_3",
      canvasId: "myCanvas_11",
    }, {
      id: 13,
      frames: {
        width: unitImageManager.sprites.smoke_proof.data.frames.width,
        height: unitImageManager.sprites.smoke_proof.data.frames.height,
        numFrames: unitImageManager.sprites.smoke_proof.data.frames.count
      },
      animations: {
        run_12: [
          0, unitImageManager.sprites.smoke_proof.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.smoke_proof.images,
      elemId: "bubble_4",
      canvasId: "myCanvas_12",
    }, {
      id: 14,
      frames: {
        width: unitImageManager.sprites.smoke_proof.data.frames.width,
        height: unitImageManager.sprites.smoke_proof.data.frames.height,
        numFrames: unitImageManager.sprites.smoke_proof.data.frames.count
      },
      animations: {
        run_13: [
          0, unitImageManager.sprites.smoke_proof.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.smoke_proof.images,
      elemId: "bubble_5",
      canvasId: "myCanvas_13",
    }, {
      id: 15,
      frames: {
        width: unitImageManager.sprites.smoke_proof.data.frames.width,
        height: unitImageManager.sprites.smoke_proof.data.frames.height,
        numFrames: unitImageManager.sprites.smoke_proof.data.frames.count
      },
      animations: {
        run_14: [
          0, unitImageManager.sprites.smoke_proof.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.smoke_proof.images,
      elemId: "bubble_6",
      canvasId: "myCanvas_14",
    }, {
      id: 16,
      frames: {
        width: unitImageManager.sprites.smoke_proof.data.frames.width,
        height: unitImageManager.sprites.smoke_proof.data.frames.height,
        numFrames: unitImageManager.sprites.smoke_proof.data.frames.count
      },
      animations: {
        run_15: [
          0, unitImageManager.sprites.smoke_proof.data.frames.count - 1,
          false
        ]
      },
      images: unitImageManager.sprites.smoke_proof.images,
      elemId: "bubble_7",
      canvasId: "myCanvas_15",
    }
  ],

  // ===== ostArr array contains on screen text ====== //
  "ostArr": [],
  // ===== Prepare Mode data in HTML format ====== //
  "prepareData":{
    "Level": "L1",
    "Unit": "U1",
    "TOC Text": "3. Let's Practice Words",
    "Instruction Text": "Tap the pictures to make them disappear. Tap RESET to show more pictures.",
    "Learning Objectives": "•  Correctly identify words when presented with an image\r\n•  Produce words with correct pronunciation\r\n•  Demonstrate mastery of words",
    "Student Engagement": "•  Individual production",
    "Teaching Procedure": "•  Point to a picture and have students say the word, then tap the picture and move to the next one. •  Continue, until there are no more pictures on the screen.\r\n•  Tap RESET to show more pictures.\r\nPlay a Game: Timed Relay (2 Teams)\r\nTap the TIMER in the toolbar to enable the timer. Divide the class into two teams (with students of mixed abilities in each team). One team plays at a time. When you start the timer, students in one team take turns to run to the board, say a word and tap the picture. When all the pictures have been tapped, record the time, then invite the next team to play. When the second team has finished, compare times. Play again.\r\nTIP: To make sure students SAY the words, make a rule that if students do not say each word before tapping it, the other team automatically wins.",
    "Video": "*"
  },
  // ===== preloadData data object contains data used for preloading ====== //
	"preloadData": {
    "audios": [levelAudioManager.audios.warm_up.puff_1,],
    "images": [levelImageManager.images.screenTitle.vocabulary_lets_practice, levelImageManager.images.backgroundimage]
  }
};
