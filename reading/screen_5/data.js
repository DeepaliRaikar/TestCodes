import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";
import unitAudioManager from "../../../common_assets/audios/audio_manager";
module.exports = {
  // ==== templateName contains name of the template which will use this data.js ==== //
  "templateName": "rev_story_m",
  // ==== screenTitle data object is used for screen level audio and images ==== //
  screenTitle: {
    titleImage: levelImageManager.images.screenTitle.reading_lets_remember,
    titleAudio: levelAudioManager.audios.screenTitle.reading_lets_remember_the_story,
    title: "the Story",
    subTitle: {
      title: "Do It Together ",
      textAlign: "left"
    },
    fontColor: "#333333"
  },
  /* minScale is used to scale the elements
     If true : Enable scaling
     If false : Disable scaling
  */
  "minScale": true,
  // ==== scaleElements scales the element which are in it's array (id's and classes) ==== //
  "scaleElements": [".rev_story_m"],
  // ==== instText is used to give instruction text(itext) at the bottom of the screen ==== //
  "instText": "Drag the parts to arrange the picture. Then drag the words to arrange the sentence.",
  // ===== Prepare Mode data in HTML format ====== //
  "prepareData": {
    tocTitle: "Let's Remember the Story",
    //"howItWorks": "  Drag pieces to complete the puzzle, then drag words to complete the sentence.</br>Notes:<li>When puzzle is complete, the page text is read out and the sentences appear.</li><li>Words must be dragged in correct sequence, from left to right.</li><li>If incorrect word is dragged, it springs back to original position.</li>",
    learningObjectives: "<li>Develop concept of print and associated skills</li><li>Match (spoken) text to respective pages of the story</li><li>Arrange sentences by matching written words</li>",
    studentEngagement: "<li>Whole class production</li><li>Group and individual productoin</li>",
    teachingProcedure: "<li>Invite students to drag the pieces to complete the puzzle.</li><li>Draw attention to the grey words, then have students repeat the sentence (point to the words as students say them).</li><li> Ask students: 'What is the first word in the sentence?'.</li><li>Encourage all students to respond, then invite one student to come the board and drag the word.</li><li>Repeat for all words.</li><li>When complete, tap <span class='boldStyle'>NEXT</span> for a different page from the story.</li>",
    videoData: [{

    }],
    gameActivity:"FALSE"
  },
  // ===== preloadData data object contains data used for preloading ====== //
  "preloadData": {
    "audios": [
      unitAudioManager.audios.phonics.feedback[0],
      unitAudioManager.audios.phonics.feedback[1],
      unitAudioManager.audios.reading.where,
      unitAudioManager.audios.reading.is,
      unitAudioManager.audios.reading.the,
      unitAudioManager.audios.reading.muffin_man,
      unitAudioManager.audios.reading.mitten_man,
      unitAudioManager.audios.reading.monkey_man,
      unitAudioManager.audios.reading.mouse_man,
      unitAudioManager.audios.reading.WhereIsMuffin,
      unitAudioManager.audios.reading.WhereIsMitten,
      unitAudioManager.audios.reading.WhereIsMonkey,
      unitAudioManager.audios.reading.WhereIsMouse
    ],
    "videos": [],
    "images": [require("./assets/images/Puzzle1/big_img_1.png"),
    require("./assets/images/Puzzle1/big_img_2.png"),
    require("./assets/images/Puzzle1/big_img_3.png"),
    require("./assets/images/Puzzle1/big_img_4.png"),
    require("./assets/images/Puzzle1/small_image_1.png"),
    require("./assets/images/Puzzle1/small_image_2.png"),
    require("./assets/images/Puzzle1/small_image_3.png"),
    require("./assets/images/Puzzle1/small_image_4.png"),
    require("./assets/images/Puzzle1/1.png"),
    require("./assets/images/Puzzle2/big_img_1.png"),
    require("./assets/images/Puzzle2/big_img_2.png"),
    require("./assets/images/Puzzle2/big_img_3.png"),
    require("./assets/images/Puzzle2/big_img_4.png"),
    require("./assets/images/Puzzle2/small_image_1.png"),
    require("./assets/images/Puzzle2/small_image_2.png"),
    require("./assets/images/Puzzle2/small_image_3.png"),
    require("./assets/images/Puzzle2/small_image_4.png"),
    require("./assets/images/Puzzle2/2.png"),
    require("./assets/images/Puzzle3/big_img_1.png"),
    require("./assets/images/Puzzle3/big_img_2.png"),
    require("./assets/images/Puzzle3/big_img_3.png"),
    require("./assets/images/Puzzle3/big_img_4.png"),
    require("./assets/images/Puzzle3/small_image_1.png"),
    require("./assets/images/Puzzle3/small_image_2.png"),
    require("./assets/images/Puzzle3/small_image_3.png"),
    require("./assets/images/Puzzle3/small_image_4.png"),
    require("./assets/images/Puzzle3/3.png"),
    require("./assets/images/Puzzle4/big_img_1.png"),
    require("./assets/images/Puzzle4/big_img_2.png"),
    require("./assets/images/Puzzle4/big_img_3.png"),
    require("./assets/images/Puzzle4/big_img_4.png"),
    require("./assets/images/Puzzle4/small_image_1.png"),
    require("./assets/images/Puzzle4/small_image_2.png"),
    require("./assets/images/Puzzle4/small_image_3.png"),
    require("./assets/images/Puzzle4/small_image_4.png"),
    require("./assets/images/Puzzle4/4.png")]
  },

  // ===== imageDropBox contains CSS for image to be dropped ====== //
  "imageDropBox": {
    style: {
      "width": "789px",
      "height": "560px"
    }
  },
  // ===== fullImage contains CSS for showing full image ====== //
  "fullImage": {
    style: {
      "width": "776px",
      "height": "546px"
    }
  },

  // ===== dropAreaImage contains CSS for area in which image will be dropped ====== //
  "dropAreaImage": {
    style: {
      "background-image": "url(" + require("./assets/images/Puzzle-drop-area.png") + ")",
      "width": "777px",
      "height": "547px"
    }
  },

  // ===== BigImages contains CSS for big images after dropping ====== //
  "BigImages": [{
    style: {
      "width": "388px",
      "height": "304px"
    }
  },
  {
    style: {
      "width": "421px",
      "height": "273px"
    }
  },
  {
    style: {
      "width": "386px",
      "height": "303px"
    }
  },
  {
    style: {
      "width": "425px",
      "height": "272px"
    }
  }
  ],

  // ===== SmallImages contains CSS for small images before dropping ====== //
  "SmallImages": [{
    style: {
      "width": "236px",
      "height": "192px"
    }
  },
  {
    style: {
      "width": "252px",
      "height": "179px"
    }
  },
  {
    style: {
      "width": "235px",
      "height": "192px"
    }
  },
  {
    style: {
      "width": "253px",
      "height": "178px"
    }
  }
  ],

  // ===== puzzleData contains all the data required to make puzzles ====== //
  "puzzleData": {
    "puzzle": [{
      "id": 1,
      // ===== bigImges contains images after dropping ====== //
      "bigImges": [{
        "image": require("./assets/images/Puzzle1/big_img_1.png")
      },
      {
        "image": require("./assets/images/Puzzle1/big_img_2.png")
      },
      {
        "image": require("./assets/images/Puzzle1/big_img_3.png")
      },
      {
        "image": require("./assets/images/Puzzle1/big_img_4.png")
      }
      ],
      "imageId": [{
        "id": 1,
        "image": require("./assets/images/Puzzle1/small_image_1.png")
      },
      {
        "id": 2,
        "image": require("./assets/images/Puzzle1/small_image_2.png")
      },
      {
        "id": 3,
        "image": require("./assets/images/Puzzle1/small_image_3.png")
      },
      {
        "id": 4,
        "image": require("./assets/images/Puzzle1/small_image_4.png")
      }
      ],
      // ===== fullImage contains main image after solving puzzle ====== //
      "fullImage": {
        "image": require("./assets/images/Puzzle1/1.png")
      },

      // ===== textId contains id and on screen text data ====== //
      "textId": [{
        "id": 1,
        "ost": "Where"
      }, {
        "id": 2,
        "ost": "is"
      }, {
        "id": 3,
        "ost": "the"
      }, {
        "id": 4,
        "ost": "muffin?"
      }],
      "data": [{
        "id": 1,
        "ost": "Where"
      }, {
        "id": 2,
        "ost": "is"
      }, {
        "id": 3,
        "ost": "the"
      }, {
        "id": 4,
        "ost": "muffin?"
      }],
      // ===== indivisualAudios contains audio of individual on screen text word ====== //
      "indivisualAudios": {
        "Where": unitAudioManager.audios.reading.where,
        "is": unitAudioManager.audios.reading.is,
        "the": unitAudioManager.audios.reading.the,
        "muffin?": unitAudioManager.audios.reading.muffin_man
      },
      // ===== fullPuzzleAudio contains audio which is played after the complition of puzzle ====== //
      "fullPuzzleAudio": unitAudioManager.audios.reading.WhereIsMuffin
    },
    {
      "id": 2,
      "bigImges": [{
        "image": require("./assets/images/Puzzle2/big_img_1.png")
      },
      {
        "image": require("./assets/images/Puzzle2/big_img_2.png")
      },
      {
        "image": require("./assets/images/Puzzle2/big_img_3.png")
      },
      {
        "image": require("./assets/images/Puzzle2/big_img_4.png")
      }
      ],
      "imageId": [{
        "id": 1,
        "image": require("./assets/images/Puzzle2/small_image_1.png")
      },
      {
        "id": 2,
        "image": require("./assets/images/Puzzle2/small_image_2.png")
      },
      {
        "id": 3,
        "image": require("./assets/images/Puzzle2/small_image_3.png")
      },
      {
        "id": 4,
        "image": require("./assets/images/Puzzle2/small_image_4.png")
      }
      ],
      "fullImage": {
        "image": require("./assets/images/Puzzle2/2.png")
      },

      "textId": [{
        "id": 1,
        "ost": "Where"
      }, {
        "id": 2,
        "ost": "is"
      }, {
        "id": 3,
        "ost": "the"
      }, {
        "id": 4,
        "ost": "mitten?"
      }],
      "data": [{
        "id": 1,
        "ost": "Where"
      }, {
        "id": 2,
        "ost": "is"
      }, {
        "id": 3,
        "ost": "the"
      }, {
        "id": 4,
        "ost": "mitten?"
      }],
      "indivisualAudios": {
        "Where": unitAudioManager.audios.reading.where,
        "is": unitAudioManager.audios.reading.is,
        "the": unitAudioManager.audios.reading.the,
        "mitten?": unitAudioManager.audios.reading.mitten_man
      },
      "fullPuzzleAudio": unitAudioManager.audios.reading.WhereIsMitten
    },
    {
      "id": 3,
      "bigImges": [{
        "image": require("./assets/images/Puzzle3/big_img_1.png")
      },
      {
        "image": require("./assets/images/Puzzle3/big_img_2.png")
      },
      {
        "image": require("./assets/images/Puzzle3/big_img_3.png")
      },
      {
        "image": require("./assets/images/Puzzle3/big_img_4.png")
      }
      ],
      "imageId": [{
        "id": 1,
        "image": require("./assets/images/Puzzle3/small_image_1.png")
      },
      {
        "id": 2,
        "image": require("./assets/images/Puzzle3/small_image_2.png")
      }, {
        "id": 3,
        "image": require("./assets/images/Puzzle3/small_image_3.png")
      }, {
        "id": 4,
        "image": require("./assets/images/Puzzle3/small_image_4.png")
      }
      ],
      "fullImage": {
        "image": require("./assets/images/Puzzle3/3.png")
      },

      "textId": [{
        "id": 1,
        "ost": "Where"
      }, {
        "id": 2,
        "ost": "is"
      }, {
        "id": 3,
        "ost": "the"
      }, {
        "id": 4,
        "ost": "monkey?"
      }],
      "data": [{
        "id": 1,
        "ost": "Where"
      }, {
        "id": 2,
        "ost": "is"
      }, {
        "id": 3,
        "ost": "the"
      }, {
        "id": 4,
        "ost": "monkey?"
      }],
      "indivisualAudios": {
        "Where": unitAudioManager.audios.reading.where,
        "is": unitAudioManager.audios.reading.is,
        "the": unitAudioManager.audios.reading.the,
        "monkey?": unitAudioManager.audios.reading.monkey_man
      },
      "fullPuzzleAudio": unitAudioManager.audios.reading.WhereIsMonkey
    },

    {
      "id": 4,
      "bigImges": [{
        "image": require("./assets/images/Puzzle4/big_img_1.png")
      },
      {
        "image": require("./assets/images/Puzzle4/big_img_2.png")
      },
      {
        "image": require("./assets/images/Puzzle4/big_img_3.png")
      },
      {
        "image": require("./assets/images/Puzzle4/big_img_4.png")
      }
      ],
      "imageId": [{
        "id": 1,
        "image": require("./assets/images/Puzzle4/small_image_1.png")
      },
      {
        "id": 2,
        "image": require("./assets/images/Puzzle4/small_image_2.png")
      },
      {
        "id": 3,
        "image": require("./assets/images/Puzzle4/small_image_3.png")
      },
      {
        "id": 4,
        "image": require("./assets/images/Puzzle4/small_image_4.png")
      }
      ],
      "fullImage": {
        "image": require("./assets/images/Puzzle4/4.png")
      },
      "textId": [{
        "id": 1,
        "ost": "Where"
      }, {
        "id": 2,
        "ost": "is"
      }, {
        "id": 3,
        "ost": "the"
      }, {
        "id": 4,
        "ost": "mouse?"
      }],
      "data": [{
        "id": 1,
        "ost": "Where"
      }, {
        "id": 2,
        "ost": "is"
      }, {
        "id": 3,
        "ost": "the"
      }, {
        "id": 4,
        "ost": "mouse?"
      }],
      "indivisualAudios": {
        "Where": unitAudioManager.audios.reading.where,
        "is": unitAudioManager.audios.reading.is,
        "the": unitAudioManager.audios.reading.the,
        "mouse?": unitAudioManager.audios.reading.mouse_man
      },
      "fullPuzzleAudio": unitAudioManager.audios.reading.WhereIsMouse
    }
    ]
  }
};
