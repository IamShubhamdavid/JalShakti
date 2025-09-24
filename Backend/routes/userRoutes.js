const express = require('express');
const {
  getUsers,
  updateProfile,
  changePassword
} = require('../controllers/userController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect);

router.get('/', authorize('admin'), getUsers);
router.put('/profile', updateProfile);
router.put('/changepassword', changePassword);

module.exports = router;