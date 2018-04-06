import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";
// import levelVideoManager from "../../../../common_assets/videos/video_manager";
module.exports = {
  screenTitle: {
    titleImage: levelImageManager.images.screenTitle.writing_lets_practice,
    titleAudio: levelAudioManager.audios.screenTitle.writing_lets_practice_writing,
    title: "Writing",
    subTitle: {
      title: "Do It by Yourself",
      textAlign: "left"
      // textAlign: "left|right|center"
    },
    fontColor: "#333333"
  },
  // ===== Need to add title ======
  "minScale": true,
  "scaleElements": ["#stc_m .content_image"],
  "backgroundImage": levelImageManager.images.writing.writing_w1_scr3_bg,
  imageHolderStyles: {
    "background-image": "url("+require('./assets/images/l1_u1_w1_wri_03_book.png')+")",
    "height": "756px",
    "width": "1146px"
  },
  // ===== Prepare Mode data in HTML format ======
  "prepareData": {
    tocTitle: "Let's Practice Writing",
    //"howItWorks": "  Students complete activities in their workbooks. </br><u>Notes</u>: <li>Static image (no functionality) </li> ",
    "learningObjectives": "<li>Review and consolidate vocabulary and phonics skills</li><li> Develop penmanship</li>",
    "studentEngagement": "<li>Individual (written) production</li>",
    "teachingProcedure": "<li>Rearrange tables and chairs, then have students sit at their desks with their workbooks open to the page shown on the board. Hand out pencils.</li><li>Pay attention to how students are grouped (usually a mix of different abilities on each table is best).</li><li>Circulate the room and give support when needed.</li>",
    "videoData": [
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
    "images": [levelImageManager.images.writing.writing_w1_scr3_bg,levelImageManager.images.writing.writing_w1_scr3_bg1]
  }
};
