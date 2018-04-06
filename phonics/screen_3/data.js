import levelImageManager from "../../../../common_assets/images/image_manager";
import unitImageManager from "../../../common_assets/images/image_manager";
import levelAudioManager from "../../../../common_assets/audios/audio_manager";
import unitAudioManager from "../../../common_assets/audios/audio_manager";
module.exports = {
  screenTitle: {
    // ==== screenTitle data object is used for screen level audio and images ==== //
    titleImage: levelImageManager.images.screenTitle.phonics_lets_learn,
    titleAudio: levelAudioManager.audios.screenTitle.lets_learn_the_letter_of_the_day_man_1,
    title: "the Letter of the Day",
    subTitle: {
      title: "Listen and Repeat",
      textAlign: "left"
    },
    fontColor: "#333333"
  },

  "curtainTitle" :["Word of the Day","Sound of the Day","Letter of the Day"],
  // ==== instructionText is used to give instruction text(itext) at the bottom of the screen ==== //
  "instructionText": "Tap the curtains to reveal the word, sound and letter of the day.",
  /* minScale is used to scale the elements
     If true : Enable scaling
     If false : Disable scaling
  */
  "minScale": true,
  // ==== scaleElements scales the element which are in it's array (id's and classes) ==== //
  "scaleElements": [".spriteCurtaint_0",".spriteCurtaint_1",".spriteCurtaint_2"],
  // ==== spriteData contains data required to create  sprite animation ==== //
  "spriteData": [{
    // ==== frames data object object contains animation's width, height and number of frames ==== //
    frames: {
      width: unitImageManager.sprites.curtain.data.frames.width,
      height: unitImageManager.sprites.curtain.data.frames.height,
      numFrames: unitImageManager.sprites.curtain.data.frames.count
    },
    // ==== animations data object contains information of animations to play ==== //
    animations: {
      curtainleft: [
        /*
              1st element : screen number for setting first frame
              2nd element : screen number for setting last frames
              3rd element : For playing animation in infinite loop
                          If true : animation plays in infinite loop
                          If false : animation doesn't plays in infinite loop
          */
        0, unitImageManager.sprites.curtain.data.frames.count - 1,
        false
      ]
    },
    // ==== images contains all the images used in sprite ==== //
    images: unitImageManager.sprites.curtain.images,
    // ==== elemId is used to provide custom element id ==== //
    elemId: "spriteCurtaint_0",
    // ==== canvasId is used to provide  custom canvsas id ==== //
    canvasId: "myCanvas_0",
    text:"",
    // ==== audio is used to give sound to the animation ==== //
    audio: levelAudioManager.audios.warm_up.blank,
    // ==== label gives label for animation ==== //
    label: "",
    // ==== ost is used to give onscreen text ==== //
    ost: ""
  },
  {
    frames: {
      width: unitImageManager.sprites.curtain.data.frames.width,
      height: unitImageManager.sprites.curtain.data.frames.height,
      numFrames: unitImageManager.sprites.curtain.data.frames.count
    },
    animations: {
      curtainleft_1: [
        0, unitImageManager.sprites.curtain.data.frames.count - 1,
        false
      ]
    },
    images: unitImageManager.sprites.curtain.images,
    elemId: "spriteCurtaint_1",
    canvasId: "myCanvas_1",
    text:"",
    audio: levelAudioManager.audios.warm_up.blank,
    label: "",
    ost: ""
  },
  {
    frames: {
      width: unitImageManager.sprites.curtain.data.frames.width,
      height: unitImageManager.sprites.curtain.data.frames.height,
      numFrames: unitImageManager.sprites.curtain.data.frames.count
    },
    animations: {
      curtainleft_2: [
        0, unitImageManager.sprites.curtain.data.frames.count - 1,
        false
      ]
    },
    images: unitImageManager.sprites.curtain.images,
    elemId: "spriteCurtaint_2",
    canvasId: "myCanvas_2",
    text:"",
    audio: levelAudioManager.audios.warm_up.blank,
    label: "",
    ost: ""
  },
  {
    frames: {
      width: unitImageManager.sprites.milk.data.frames.width,
      height: unitImageManager.sprites.milk.data.frames.height,
      numFrames: unitImageManager.sprites.milk.data.frames.count
    },
    animations: {
      run: [
        0, unitImageManager.sprites.milk.data.frames.count - 1,
        false
      ]
    },
    images: unitImageManager.sprites.milk.images,
    elemId: "spriteObject_0",
    canvasId: "myCanvas_3",
    text:"",
    audio: unitAudioManager.audios.phonics.milk_woman,
    label: "",
    ost: "",
    /* showOval is used to show the oval below sprites
       If true : show oval
       If false : hide oval
    */
    showOval:true,
    // ==== CSS for showOval ==== //
    styles:
    {
      "transform-origin": "bottom right",
      "width": "500px",
      "height": "604px",
      "position": "absolute",
      "left": "0%",
      "bottom": "12%",
      "z-index": "-1",
      "transform": "scale(0.667)",
    }
  },
  {
    frames: {
      width: unitImageManager.sprites.boyandglass.data.frames.width,
      height: unitImageManager.sprites.boyandglass.data.frames.height,
      numFrames: unitImageManager.sprites.boyandglass.data.frames.count
    },
    animations: {
      run: [
        0, unitImageManager.sprites.boyandglass.data.frames.count - 1,
        false
      ]
    },
    images: unitImageManager.sprites.boyandglass.images,
    elemId: "spriteObject_1",
    canvasId: "myCanvas_4",
    text:"",
    audio: unitAudioManager.audios.phonics.m_woman,
    label: "",
    ost: "",
    showOval:true,
    styles:{
      "width": "258px",
      "height": "449px",
      "position": "absolute",
      "left": "33%",
      "bottom": "9%",
      "z-index": "-1",
      "transform": "scale(0.7)",
    }
  },
  {
    frames: {
      width: unitImageManager.sprites.mdata.data.frames.width,
      height: unitImageManager.sprites.mdata.data.frames.height,
      numFrames: unitImageManager.sprites.mdata.data.frames.count
    },
    animations: {
      run: [
        0, unitImageManager.sprites.mdata.data.frames.count - 1,
        false
      ]
    },
    images: unitImageManager.sprites.mdata.images,
    elemId: "spriteObject_2",
    canvasId: "myCanvas_5",
    audio: levelAudioManager.audios.phonics.alphabates[12],
    label: "",
    ost: "",
    showOval:false,
    styles:
    {
      "transform-origin": "bottom left",
      "width": "394px",
      "height": "190px",
      "position": "absolute",
      "left": "15%",
      "bottom": "17%",
      "z-index": "-1",
    }
  },

  ],
  // ===== Contains data of m sounds like m ====== //
  "m_sound_like_m_text":"M sounds like /m/",
  "m_sound_like_audio" : unitAudioManager.audios.phonics.m_sounds_like_m ,

  // ===== Prepare Mode data in HTML format ====== //
  "prepareData": {
    tocTitle: "Let's Learn the Letter of the Day",
    //"howItWorks":"  Tap to reveal the word and sound of the day.  </br>Notes: <li>Images are covered at the start. </li><li>Word of the day on the left; sound of the day on the right </li><li>Sound of the day should have an animation that helps students understand the sound-action. </li> ",
    learningObjectives:"<li>Understand connection between word, sound and letter of the day</li><li>Recognize upper case and lower case forms of letter of the day</li>",
    studentEngagement:"<li>Whole-class listen and repeat</li>",
    teachingProcedure:"<li>Ask students if they can remember the word of the day, then tap the left curtain to check.</li><li>Ask students if they can remember the sound of the day, then tap the middle curtain to check.</li><li>Ask students if they can guess the letter of the day, then tap the right curtain to check.</li><li>Have students repeat the sentence 'M sounds like /m/' while doing the action as they say the sound.</li>",
    videoData: [{
    }],
    gameActivity:"FALSE"
  },
  // ===== preloadData data object contains data used for preloading ====== //
  "preloadData": {
    "audios": [unitAudioManager.audios.phonics.m_sounds_like_m],
    "videos": [],
    "images": []
  }
};
