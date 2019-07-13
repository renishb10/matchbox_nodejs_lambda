const router = require('express').Router();
const _ = require('lodash');

// Custom dependencies
const voiceModel = require('../../models/voice.model');

///////////////////////////////////////////////////////////////
/// GET all users (TODO: pagination & admin authorization)
///////////////////////////////////////////////////////////////
router.get('/', async (req, res, next) => {
  try {
    // TODO : Implement pagination
    await voiceModel
      .find({})
      .then(voices => {
        if (_.isEmpty(voices))
          return res
            .status(404)
            .send({ status: 'error', message: 'No voices found' });

        res.json(voices);
      })
      .catch(e => {
        throw e;
      });
  } catch (e) {
    res.status(400).send({ status: 'error', message: e.message });
  }
});

///////////////////////////////////////////////////////////////
/// GET a user by id
///////////////////////////////////////////////////////////////
router.get('/:voiceId', async (req, res, next) => {
  try {
    const voiceId = req.params.voiceId;
    await voiceModel
      .find({ _id: voiceId })
      .then(voice => {
        if (_.isEmpty(voice))
          return res
            .status(404)
            .send({ status: 'error', message: 'No voice found' });

        res.json(voice);
      })
      .catch(e => {
        throw e;
      });
  } catch (e) {
    res.status(400).send({ status: 'error', message: e.message });
  }
});

///////////////////////////////////////////////////////////////
/// GET a user by id
///////////////////////////////////////////////////////////////
router.post('/', async (req, res, next) => {
  try {
    if (req.body) {
      await voiceModel
        .create(req.body)
        .then(voice => {
          return res.json(voice);
        })
        .catch(e => {
          throw e;
        });
    } else {
      res.status(400).send({
        status: 'error',
        message: 'Bad request: Please check your request body',
      });
    }
  } catch (e) {
    res.status(400).send({ status: 'error', message: e.message });
  }
});

module.exports = router;
