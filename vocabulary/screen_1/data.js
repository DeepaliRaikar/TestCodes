{
    "Level": "L2",
    "Unit": "U2",
    "TOC Text": "1. Let's Learn New Words",
    "Instruction Text": "Tap the pictures to hear the words.",
    "Learning Objectives": "•  Understand the meaning of new words\r\n•  Listen to and repeat words with correct pronunciation\r\n•  Begin to memorize words",
    "Student Engagement": "•  Whole-class listen and repeat",
    "Teaching Procedure": "•  Have students listen to each word and repeat it at least three times (if possible, have students do actions for the words)\r\n•  After going through all the words, have students listen and repeat each word again, at a faster pace.\r\n•  Listen for words that students are having trouble with and spend extra time on those.\r\nPlay a Game: Run & Touch\r\nSelect 3-4 students to come and stand a few meters away from the board. When you say a word, the students should run and touch the picture on the board (saying the word as they run). Your co-teacher should encourage the sitting students to also say the word. After a few turns, select another group of students to play. Keep it fast-paced!\r\n",
    "Video": "**"
  },
  // ===== preloadData data object contains data used for preloading ====== //
	oading ====== //
	ta contains data required to create  sprite animation ==== //
  "spriteData": [{
    id: 1,
    // ==== frames data object object contains animation's width, height and number of frames ==== //
    frames: {
      width: unitImageManager.sprites.updatedTable.data.frames.width,
      height: unitImageManager.sprites.updatedTable.data.frames.height,
      numFrames: unitImageManager.sprites.updatedTable.data.frames.count
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
      run: [
        0, unitImageManager.sprites.updatedTable.data.frames.count - 1,
        false
      ],

      // ==== runAnimation is used for sprite animations ====
      runAnimation: [
        /*
            1st element : screen number for setting first frame
            2nd element : screen number for setting last frames
            3rd element : For playing animation in infinite loop
                        If true : animation plays in infinite loop
                        If false : animation doesn't plays in infinite loop
        */
        2, unitImageManager.sprites.updatedTable.data.frames.count - 1,
        false
      ]

    },
    // ==== images contains all the images used in sprite ==== //
    images: unitImageManager.sprites.updatedTable.images,
    // ==== image provides images placed at the bottom ==== //
    image: levelImageManager.images.vocabulary.table,
    // ==== elemId is used to provide custom element id ==== //
    elemId: "table_0",
    // ==== canvasId is used to provide  custom canvsas id ==== //
    canvasId: "myCanvas_0",
    // ==== audio is used to give sound to the animation ==== //
    audio: unitAudioManager.audios.warm_up.table_woman,
    // ==== label gives label for animation ==== //
    label: "table",
    // ==== ost is used to give onscreen text ==== //
    ost: "Hello!"
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
      runAnimation: [
        2, unitImageManager.sprites.updatedChair.data.frames.count - 1,
        false
      ],
      // ==== lastframe  provides images between the first and the last element in the array ==== //
      lastframe:[
        /*
            3rd element : For repeating lastframe
                        If true : repeat lastframe
                        If false : doesn't repeat lastframe
        */
        unitImageManager.sprites.updatedChair.data.frames.count - 2,unitImageManager.sprites.updatedChair.data.frames.count - 1,false
      ]
    },
    images: unitImageManager.sprites.updatedChair.images,
    image: levelImageManager.images.vocabulary.chair,
    elemId: "chair_1",
    canvasId: "myCanvas_1",
    audio: unitAudioManager.audios.warm_up.chair_woman,
    label: "chair",
    ost: "Hello!"
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
      ],
      runAnimation: [
        2, unitImageManager.sprites.bin.data.frames.count - 1,
        false
      ],
      lastframe:[13,14,false],
    },
    images: unitImageManager.sprites.bin.images,
    image: levelImageManager.images.vocabulary.bin,
    elemId: "bin_2",
    canvasId: "myCanvas_2",
    audio: unitAudioManager.audios.warm_up.bin_woman,
    label: "bin",
    ost: "Hello!"
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
      ],
      runAnimation: [
        2, unitImageManager.sprites.cupboard.data.frames.count - 1,
        false
      ],
      lastframe:[
        unitImageManager.sprites.cupboard.data.frames.count - 1,unitImageManager.sprites.cupboard.data.frames.count -2,false
      ]
    },
    images: unitImageManager.sprites.cupboard.images,
    image: levelImageManager.images.vocabulary.cupboard,
    elemId: "cupboard_3",
    canvasId: "myCanvas_3",
    audio: unitAudioManager.audios.warm_up.cupboard_woman,
    label: "cupboard",
    ost: "Hello!"
  }],

  "ostArr": [],
  // ===== Prepare Mode data in HTML format ====== //
  "prepareData":{
    "Level": "L1",
    "Unit": "U1",
    "TOC Text": "1. Let's Learn New Words",
    "Instruction Text": "Tap the pictures to hear the words.",
    "Learning Objectives": "•  Understand the meaning of new words\r\n•  Listen to and repeat words with correct pronunciation\r\n•  Begin to memorize words",
    "Student Engagement": "•  Whole-class listen and repeat",
    "Teaching Procedure": "•  Have students listen to each word and repeat it at least three times (if possible, have students do actions for the words)\r\n•  After going through all the words, have students listen and repeat each word again, at a faster pace.\r\n•  Listen for words that students are having trouble with and spend extra time on those.\r\nPlay a Game: Run & Touch\r\nSelect 3-4 students to come and stand a few meters away from the board. When you say a word, the students should run and touch the picture on the board (saying the word as they run). Your co-teacher should encourage the sitting students to also say the word. After a few turns, select another group of students to play. Keep it fast-paced!\r\n",
    "Video": "**"
  },
  // ===== preloadData data object contains data used for preloading ====== //
	"preloadData": {
    "audios": [levelAudioManager.audios.screenTitle.vocabulary_lets_parctice_words, unitAudioManager.audios.warm_up.cupboard_woman, unitAudioManager.audios.warm_up.bin_woman, unitAudioManager.audios.warm_up.chair_woman, unitAudioManager.audios.warm_up.table_woman],
    "images": [levelImageManager.images.vocabulary.cupboard, levelImageManager.images.vocabulary.bin, levelImageManager.images.vocabulary.updated_chair, levelImageManager.images.vocabulary.updated_table,levelImageManager.images.screenTitle.vocabulary_lets_learn ]
  }
};
