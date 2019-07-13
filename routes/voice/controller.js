const voiceModel = require('../../models/voice.model');

const getVoice = async voiceId => {
  const voice = await voiceModel
    .findById({ _id: voiceId })
    .then(u => {
      if (!u) return null;
      return u;
    })
    .catch(e => {
      logger.log('error', 'No voice found');
      return null;
    });

  return voice;
};

module.exports = {
  getVoice,
};
