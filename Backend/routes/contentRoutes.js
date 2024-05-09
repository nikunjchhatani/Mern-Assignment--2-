const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', contentController.getAllContent);
router.get('/:id', contentController.getContentById);
router.post('/', authMiddleware.authenticate, contentController.createContent);
router.put('/:id', authMiddleware.authenticate, contentController.updateContent);
router.delete('/:id', authMiddleware.authenticate, contentController.deleteContent);

module.exports = router;
