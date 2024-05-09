const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.seedAdminUser = async () => {
  try {
    // Check if admin user already exists
    const adminUser = await User.findOne({ role: 'admin' });
    if (!adminUser) {
      // Create admin user
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const user = new User({
        username: 'admin',
        password: hashedPassword,
        role: 'admin'
      });
      await user.save();
      console.log('Admin user seeded successfully');
    }
  } catch (err) {
    console.error(err);
  }
};
