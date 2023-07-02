const express = require('express');
const router = express.Router();

const HoKhau = require('../../models/hokhau.model');

router.get('/', async (req, res) => {
    try {
      const hoKhaus = await HoKhau.find({});
      if (hoKhaus.length === 0) {
        return res.json({ message: 'Không tìm thấy dữ liệu hộ khẩu.' });
      }
      res.json({ result: hoKhaus });
    } catch (err) {
      res.json({ err });
    }
  });

module.exports = router;