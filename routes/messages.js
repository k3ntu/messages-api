const express = require('express');
const MessagesService = require('../services/messages');

const {
  messageIdSchema,
  createMessageSchema,
  updateMessageSchema,
} = require('../utils/schemas/messages');

const validationHandler = require('../utils/middlewares/validationHandler');

function messagesApi(app) {
  const router = express.Router();
  app.use('/api/messages', router);

  const messagesService = new MessagesService();

  router.get('/', async function (req, res, next) {

    try {
      const message = await messagesService.getMessages();

      res.status(200).json({
        data: message,
        message: 'messages listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(
    '/:messageId',
    validationHandler({ messageId: messageIdSchema }, 'params'),
    async function (req, res, next) {
      const { messageId } = req.params;

      try {
        const movies = await messagesService.getMessage({ messageId });

        res.status(200).json({
          data: movies,
          message: 'message retrieved',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  // Create
  router.post('/', validationHandler(createMessageSchema), async function (
    req,
    res,
    next
  ) {
    const { body: message } = req;

    try {
      const createMessageId = await messagesService.createMessage({ message });

      res.status(201).json({
        data: createMessageId,
        message: 'message created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put(
    '/:messageId',
    validationHandler({ messageId: messageIdSchema }, 'params'),
    validationHandler(updateMessageSchema),
    async function (req, res, next) {
      const { messageId } = req.params;
      const { body: message } = req;

      try {
        const updatedMessageId = await messagesService.updateMessage({
          messageId,
          message,
        });

        res.status(200).json({
          data: updatedMessageId,
          message: 'message updated',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:messageId',
    validationHandler({ messageId: messageIdSchema }, 'params'),
    async function (req, res, next) {
      const { movieId } = req.params;

      try {
        const deleteMessageId = await messagesService.deleteMovie({ movieId });

        res.status(200).json({
          data: deleteMessageId,
          message: 'messages deleted',
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = messagesApi;
