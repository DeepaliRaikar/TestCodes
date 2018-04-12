{
    "Level": "L2",
    "Unit": "U2",
    "TOC Text": "3. Let's Understand Writing",
    "Instruction Text": "Tap the pictures to hear the words. Use the pen to write.",
    "Learning Objectives": "•  Understand how to complete workbook page 2",
    "Student Engagement": "•  Whole-class participation in\r\n    discussion",
    "Teaching Procedure": "•  Tap the PEN in the toolbar to enable the pen function.\r\n•  Demonstrate and explain how students should complete the page in their workbooks. As you are doing so, ask the following questions:\r\nQ: What is the letter of the day?' A: M\r\nQ: What does M sound like?  A: M sounds like /m/.\r\nQ: What does 'milk' start with'? A: Milk starts with /m/.\r\nQ: What letter should we write? A: M"
  },
  // ===== preloadData data object contains data used for preloading ====== //
	oading ====== //
	t"
    },
    font_color: "#333"
  },
  displayedOnce: false,
  // ==== instructionText and instructionTextNext are used to give instruction text(itext) at the bottom of the screen ==== //
  instructionText: "Tap the pictures to hear the words.  Use the pen to write.",
  instructionTextNext: "Use the pen to write.",
  // ==== imageHolderStyles is used to give CSS to background image ==== //
  imageHolderStyles: {
    "background-image": "url(" + require("./assets/images/2b_img1.jpg") + ")",
    "height": "689px",
    "width": "1406px"
  },
  /* minScale is used to scale the elements
     If true : Enable scaling
     If false : Disable scaling
  */
  "minScale": true,
  // ==== scaleElements scales the element which are in it's array (id's and classes) ==== //
  "scaleElements": ["#write_letr_v_1 .bgImage", "#write_letr_v_1 .midContainer", "#write_letr_v_1 .draw_bg_image", "#write_letr_v_1 .alphabetImage"],
  // ==== backgroundimage1 and backgroundimage2 provides background image ==== //
  "alphabetImage" :{
    "background-image":"url("+require("./assets/images/milk_mm.png")+")",
    "width": "1631px",
    "height": "114px",
    "top": "5%",
    "left": "50%"

  },
  "backgroundimage1":{
    "background-image": "url(" + require("./assets/images/l1_u1_w2_wri_01_a_lines.jpg") + ")",
    "width": "1641px",
    "height": "382px",
    "left": "50%",
    "top": "60%"
  },
  "backgroundimage2": {
    "background-image":"url(" + require("./assets/images/2a_img1b.jpg") + ")",
    "width": "931px",
    "height": "115px",
    "left": "54%"

  },
  "clickable_patch_left":{
    "height": "180px",
    "width": "100px",
    "bottom": "-15px",
    "left": "457px"

  },
  "clickable_patch_right":{
    "width": "131px",
    "height": "116px",
    "top": "-16px",
    "left": "18px"
  },
  "writing_area_patch_left":{
    "width": "174px",
    "height": "102px",
    "top": "-16px",
    "left": "-14px"

  },
  "writing_area_patch_right":{
    "width": "172px",
    "height": "100px",
    "top": "-20px",
    "left": "48px"
  },
  // ==== spriteData contains data required to create  sprite animation ==== //
  "spriteData": [{
    id: 0,
    // ==== frames data object object contains animation's width, height and number of frames ==== //
    frames: {
      width: unitImageManager.sprites.m_small_1.data.frames.width,
      height: unitImageManager.sprites.m_small_1.data.frames.height,
      numFrames: unitImageManager.sprites.m_small_1.data.frames.count
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
        0, unitImageManager.sprites.m_small_1.data.frames.count - 1,
        false
      ]
    },
    // ==== images contains all the images used in sprite ==== //
    images: unitImageManager.sprites.m_small_1.images,
    // ==== elemId is used to provide custom element id ==== //
    elemId: "smallM1",
    // ==== canvasId is used to provide  custom canvsas id ==== //
    canvasId: "myCanvas_0",
    // ==== label gives label for animation ==== //
    label: "M",
    // ==== Gives scaling property to the element ==== //
    scaling: "1"
  }, {
    id: 1,
    frames: {
      width: unitImageManager.sprites.m_small_1.data.frames.width,
      height: unitImageManager.sprites.m_small_1.data.frames.height,
      numFrames: unitImageManager.sprites.m_small_1.data.frames.count
    },
    animations: {
      run: [
        0, unitImageManager.sprites.m_small_1.data.frames.count - 1,
        false
      ]
    },
    images: unitImageManager.sprites.m_small_1.images,
    elemId: "smallM",
    canvasId: "myCanvas_1",
    label: "a",
    scaling: "1"
  }, {
    id: 2,
    frames: {
      width: unitImageManager.sprites.newmilk.data.frames.width,
      height: unitImageManager.sprites.newmilk.data.frames.height,
      numFrames: unitImageManager.sprites.newmilk.data.frames.count
    },
    animations: {
      run: [
        0, unitImageManager.sprites.newmilk.data.frames.count - 1,
        false
      ],
      // ==== lastframe  provides images between the first and the last element in the array ==== //
      lastframe: [
        /*
            3rd element : For repeating lastframe
                        If true : repeat lastframe
                        If false : doesn't repeat lastframe
        */
        21, 22,
        false
      ]
    },
    images: unitImageManager.sprites.newmilk.images,
    elemId: "milk",
    canvasId: "myCanvas_2",
    audio: unitAudioManager.audios.writing.milk,
    label: "milk",
    scaling: "1.19"
  }, {
    id: 3,
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
      lastframe: [
        7, 7,
        false
      ]
    },
    images: unitImageManager.sprites.muffin.images,
    elemId: "muffin",
    canvasId: "myCanvas_3",
    audio: unitAudioManager.audios.writing.muffin_man,
    label: "muffin",
    scaling: "0.24"
  }],

  // ===== ostArr array contains on screen text ====== //
  "ostArr": [],
  // ===== Prepare Mode data in HTML format ====== //
  "prepareData":{
    "Level": "L1",
    "Unit": "U1",
    "TOC Text": "3. Let's Understand Writing",
    "Instruction Text": "Tap the pictures to hear the words. Use the pen to write.",
    "Learning Objectives": "•  Understand how to complete workbook page 2",
    "Student Engagement": "•  Whole-class participation in\r\n    discussion",
    "Teaching Procedure": "•  Tap the PEN in the toolbar to enable the pen function.\r\n•  Demonstrate and explain how students should complete the page in their workbooks. As you are doing so, ask the following questions:\r\nQ: What is the letter of the day?' A: M\r\nQ: What does M sound like?  A: M sounds like /m/.\r\nQ: What does 'milk' start with'? A: Milk starts with /m/.\r\nQ: What letter should we write? A: M"
  },
  // ===== preloadData data object contains data used for preloading ====== //
	"preloadData": {
    "audios": [],
    "images": [levelImageManager.images.screenTitle.writing_lets_understand]
  }
};
