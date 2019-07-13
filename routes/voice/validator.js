const _ = require('lodash');

const isVoicePayloadValid = (voice) => {
  if (
    _.isEmpty(voice)
    || _.isEmpty(voice.name)
    || _.isEmpty(voice.description)
    || _.isEmpty(voice.keywords)
    || _.isEmpty(voice.gender)
  ) return false;
  return true;
};

module.exports = {
  isVoicePayloadValid,
};
