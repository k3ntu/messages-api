const express = require('express');
const NewslettersService = require('../services/newsletters');

const {
  newsletterIdSchema,
  createNewsletterSchema,
  updateNewsletterSchema,
} = require('../utils/schemas/newsletters');

const validationHandler = require('../utils/middlewares/validationHandler');

function newslettersApi(app) {
  const router = express.Router();
  app.use('/api/newsletters', router);

  const newslettersService = new NewslettersService();

  router.get('/', async function (req, res, next) {
    try {
      const newsletters = await newslettersService.getNewsletters();

      res.status(200).json({
        data: newsletters,
        message: 'newsletter listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(
    '/:newsletterId',
    validationHandler({ newsletterId: newsletterIdSchema }, 'params'),
    async function (req, res, next) {
      const { newsletterId } = req.params;

      try {
        const newsletters = await newslettersService.getNewsletter({ newsletterId });

        res.status(200).json({
          data: newsletters,
          message: 'newsletter retrieved',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  // Create
  router.post('/', validationHandler(createNewsletterSchema), async function (
    req,
    res,
    next
  ) {
    const { body: newsletter } = req;

    try {
      const createNewsletterId = await newslettersService.createNewsletter({ newsletter });

      res.status(201).json({
        data: createNewsletterId,
        message: 'newsletter created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put(
    '/:newsletterId',
    validationHandler({ newsletterId: newsletterIdSchema }, 'params'),
    validationHandler(updateNewsletterSchema),
    async function (req, res, next) {
      const { newsletterId } = req.params;
      const { body: newsletter } = req;

      try {
        const updatedNewsletterId = await newslettersService.updateNewsletter({
          newsletterId,
          newsletter,
        });

        res.status(200).json({
          data: updatedNewsletterId,
          message: 'newsletter updated',
        });
      } catch (err) {
        next(err);
      }
    }
  );

}

module.exports = newslettersApi;
