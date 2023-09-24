const Table = require("../models/tablemodel");

const getData = async (req,res) =>{
    try {
      const data = await Table.find().sort({ score: -1 });
      console.log(data);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });  
    }
}
module.exports = { getData };