import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";
// import levelVideoManager from "../../../../common_assets/videos/video_manager";
module.exports = {
  screenTitle: {
    titleImage: levelImageManager.images.screenTitle.writing_lets_understand,
    titleAudio: levelAudioManager.audios.screenTitle.writing_lets_understand_writing,
    title: "Writing",
    subTitle: {
      title: "Look, Listen and Do It Together",
      textAlign: "left"
    },
    font_color: "#333"
  },
  // ===== Need to add title ======
  "minScale": true,
  instructionText: "Use the pen to write.",
  "scaleElements": ["#stc_m .content_image"],
  "backgroundImage": "",
  imageHolderStyles: {
    "background-image": "url(" + require('./assets/images/2b_img1.jpg') + ")",
    "height": "689px",
    "width": "1406px"
  },
  // ===== Prepare Mode data in HTML format ======
  "prepareData": {
    tocTitle: "Let's Understand Writing",
    //"howItWorks": "  Students complete activities in their workbooks. </br><u>Notes</u>: <li>Static image (no functionality) </li> ",
    learningObjectives: "<li>Understand how to complete workbook page 1</li>",
    studentEngagement: "<li>Whole-class participation in discussion</li>",
    teachingProcedure: "<li>Tap the PEN in the toolbar to enable the pen function.</li><li>Demonstrate and explain how students should complete the page in their workbooks. As you are doing so, ask the following questions:<br> Q: What is this? A: Milk<br>Q: What sound does 'milk' start with? A: Milk starts with /m/.<br>Q: What letter sounds like /m/? A: M</li>",
    videoData: [
      {
        // // "video": require("./assets/videos/intro_01.mp4"),
        // // "poster": require("./assets/images/scr_33_summary_image_01.png")
      }
    ],
    gameActivity:"FALSE"
  },
  // ===== Preloading the data ======
  "preloadData": {
    "audios": [],
    "images": [require('./assets/images/2b_img1.jpg')]
  }
};
