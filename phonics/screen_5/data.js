{
    "Level": "L2",
    "Unit": "U2",
    "TOC Text": "5. Let's Find the Letter and Sound",
    "Instruction Text": "Tap the flashing puzzle piece to hear a sound. Drag the letters to the matching sound.",
    "Learning Objectives": "•  Match letter of the day to the letter sound",
    "Student Engagement": "•  Whole-class production\r\n•  Group/individual production",
    "Teaching Procedure": "•  Draw attention to the letters at the bottom of the screen.\r\n•  Ask students: 'What does M sound like?'. Encourage students to use the sentence: 'M sounds like /m/'.\r\n•  Tell students that we need to listen to the sound (tap the highlighted puzzle piece to hear the audio).\r\n•  If we hear /m/, we should say 'M sounds like /m/', then we can drag the letter M to complete the picture.\r\n•  If we hear a different sound, we should say 'NO'.\r\n•  Tap NEXT to continue. Invite students who are participating well to drag the letters.\r\n•  Tap RESET to play again."
  },
  // ===== preloadData data object contains data used for preloading ====== //
	oading ====== //
	(id's and classes) ==== //
  "scaleElements": ["#mch_letr_snd_m .mid_sec"],

  "text":"M sounds like /m/",
  // ==== instText is used to give instruction text(itext) at the bottom of the screen ==== //
  "instText": "Tap the flashing puzzle piece to hear a sound. Drag the letters to the matching sound.",
  // ==== highlight_flow contains highlited part of the puzzle ==== //
  "highlight_flow":[{id:1,class:""},{id:2,class:"droppables"},{id:3,class:""},{id:4,class:"droppables"},{id:5,class:""},{id:6,class:"droppables"},{id:7,class:"droppables"},{id:8,class:""}],
  // ==== draggables contains letters at the bottom of the scrren which are dragged onto the puzzle ==== //
  "draggables":[{id:1,ost:"m"},{id:2,ost:"M"},{id:3,ost:"m"},{id:4,ost:"M"}],
  // ===== distract_array contains wrong part of puzzle for distraction ====== //
  "distract_array":[{id:1},{id:3},{id:5},{id:8}],
  // ===== Prepare Mode data in HTML format ====== //
  "prepareData":{
    "Level": "L1",
    "Unit": "U1",
    "TOC Text": "5. Let's Find the Letter and Sound",
    "Instruction Text": "Tap the flashing puzzle piece to hear a sound. Drag the letters to the matching sound.",
    "Learning Objectives": "•  Match letter of the day to the letter sound",
    "Student Engagement": "•  Whole-class production\r\n•  Group/individual production",
    "Teaching Procedure": "•  Draw attention to the letters at the bottom of the screen.\r\n•  Ask students: 'What does M sound like?'. Encourage students to use the sentence: 'M sounds like /m/'.\r\n•  Tell students that we need to listen to the sound (tap the highlighted puzzle piece to hear the audio).\r\n•  If we hear /m/, we should say 'M sounds like /m/', then we can drag the letter M to complete the picture.\r\n•  If we hear a different sound, we should say 'NO'.\r\n•  Tap NEXT to continue. Invite students who are participating well to drag the letters.\r\n•  Tap RESET to play again."
  },
  // ===== preloadData data object contains data used for preloading ====== //
	"preloadData": {
    "audios": [
      unitAudioManager.audios.phonics.m_woman,
      unitAudioManager.audios.phonics.a_woman,
      unitAudioManager.audios.phonics.s_sound_sss,
      unitAudioManager.audios.phonics.feedback[0],
      unitAudioManager.audios.phonics.feedback[1],
      unitAudioManager.audios.phonics.m_sound_like_mmm_woman,
      unitAudioManager.audios.phonics.m_woman
    ],
    "videos": [],
    "images": []
  },
  "main_bg":[
    {
      style:{
          "width":"100%",
          "height":"100%",
      }

    }
  ],

  // ==== spriteData contains data required to create  sprite animation ==== //
  "spriteData": [{
    id:1,
    // ==== frames data object object contains animation's width, height and number of frames ==== //
    frames: {
      width: unitImageManager.sprites.milk.data.frames.width,
      height: unitImageManager.sprites.milk.data.frames.height,
      numFrames: unitImageManager.sprites.milk.data.frames.count
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
        0, unitImageManager.sprites.milk.data.frames.count - 1,
        false
      ]
    },
    // ==== images contains all the images used in sprite ==== //
    images: unitImageManager.sprites.milk.images,
    // ==== elemId is used to provide custom element id ==== //
    elemId: "sprite_0",
    // ==== canvasId is used to provide  custom canvsas id ==== //
    canvasId: "myCanvas_0",
    // ==== audio is used to give sound to the animation ==== //
    audio: unitAudioManager.audios.phonics.milk,
    // ==== label gives label for animation ==== //
    label: "",
    // ==== ost is used to give onscreen text ==== //
    ost: "",
    canvas_style:{

      },
      sprite_style:{

      }

  },
  {
    id:2,
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
    elemId: "sprite_1",
    canvasId: "myCanvas_1",
    audio: unitAudioManager.audios.phonics.mouse_man,
    label: "",
    ost: "",
    canvas_style:
      {
        "width": "626px",
    "margin": "0 auto",
    "top": "-12px",
    "left": "-56px",
    "z-index": "-1",
    "position": "relative",
      },
      sprite_style:{

      }

  }
  ]
};
