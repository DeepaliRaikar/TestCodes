import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";
import unitAudioManager from "../../../common_assets/audios/audio_manager";
module.exports = {
  screenTitle: {
    // ==== screenTitle data object is used for screen level audio and images ==== //
    titleImage: levelImageManager.images.screenTitle.warm_up_lets_learn,
    titleAudio: levelAudioManager.audios.screenTitle.lets_learn_about_ourclassroom_man_1,
    title: "About",
    subTitle: {
      title: "Our Classroom",
      textAlign: "center"
    },
    fontColor: "#333333"
  },
  /* minScale is used to scale the elements
     If true : Enable scaling
     If false : Disable scaling
  */
  "minScale": false,
  // ==== scaleElements scales the element which are in it's array (id's and classes) ==== //
  "scaleElements": [],
  // ==== backgroundImage provide background image to the screen ==== //
  "backgroundImage": levelImageManager.images.warm_up.screen_3_bg,
  // ===== subTitleAudio provides screen level title audio ====== //
  "subTitleAudio": levelAudioManager.audios.screenTitle.our_classroom_man_1,
  /// ===== Prepare Mode data in HTML format ====== //


  "prepareData": {
    tocTitle: "Let's Learn About Our Classroom",
    //"howItWorks": "No functionality",
    learningObjectives: "<li>Introduce and contextualize lesson content</li><li>Activate prior knowledge</li>",
    studentEngagement: "<li>Look and listen</li>",
    teachingProcedure: "<li>Tell students that today we will be learning about more things in the classroom.</li><li>Have students repeat the word 'classroom'.</li><li>Remind students that the room they are in now is their classroom.</li><li>Ask students if they can remember the words (in English) for any of the things in the picture.</li><li>If students don't know all the words, DO NOT teach them now.</li><li>Tell students that we will learn these words today, then move to the next activity.</li>",
    videoData: [{
      
    }],
    gameActivity:"FALSE"
  },
  // ===== preloadData data object contains data used for preloading ====== //
  "preloadData": {
    "audios": [levelAudioManager.audios.screenTitle.lets_learn_about_ourclassroom_man_1, levelAudioManager.audios.screenTitle.our_classroom_man_1],
    "videos": [],
    "images": [levelImageManager.images.warm_up.screen_3_bg, levelImageManager.images.screenTitle.warm_up_lets_learn]
  }
};
