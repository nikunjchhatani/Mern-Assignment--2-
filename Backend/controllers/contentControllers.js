const Content = require('../models/Content');

exports.getAllContent = async (req, res) => {
  try {
    const content = await Content.find().populate('createdBy', 'username');
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getContentById = async (req, res) => {
  try {
    const content = await Content.findById(req.params.id).populate('createdBy', 'username');
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createContent = async (req, res) => {
  try {
    const content = new Content({
      title: req.body.title,
      body: req.body.body,
      createdBy: req.user.userId // Assuming userId is stored in req.user.userId after authentication
    });
    await content.save();
    res.status(201).json({ message: 'Content created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateContent = async (req, res) => {
  try {
    await Content.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Content updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteContent = async (req, res) => {
  try {
    await Content.findByIdAndDelete(req.params.id);
    res.json({ message: 'Content deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
