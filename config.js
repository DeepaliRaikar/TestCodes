import Warm_up from "./warm_up/config";
import Vocabulary from "./vocabulary/config";
import Speaking from "./speaking/config";
import Phonics from "./phonics/config";
import Reading from "./reading/config";
import Writing from "./writing/config";

export default {
  title : "Week 1",
  selected : "writing",
  items : [
    "warm_up",
    "vocabulary",
    "speaking",
    "phonics",
    "reading",
    "writing"
  ],
  byId : {
    warm_up: Warm_up,
    vocabulary: Vocabulary,
    speaking: Speaking,
    phonics: Phonics,
    reading: Reading,
    writing: Writing
  }
};
