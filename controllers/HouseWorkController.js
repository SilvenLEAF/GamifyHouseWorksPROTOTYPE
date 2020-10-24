const HouseWork = require('../models/HouseWork');









/* -----------------------------------
.   GET ALL HOUSEWORKS (of a user)
------------------------------------ */
module.exports.get_all_house_works_of_a_user = async (req, res, next)=>{
  try {
    const { userId } = req.body;

    const allHouseWorks = await HouseWork.find({ ownerId: userId });

    res.json(allHouseWorks.reverse());



  } catch (err) {
    next(err, req, res)
  }
}




























/* -----------------------------------
.        CREATE HOUSE WORK
------------------------------------ */
module.exports.create_house_work = async (req, res, next) =>{
  try {
    console.log(req.body)



    const newHouseWork = await HouseWork.create({
      ...req.body,
      createdAt: new Date(),
    });

    res.json(newHouseWork);

  } catch (err) {
    next(err, req, res)
  }
}



















/* -----------------------------------
.         DELETE HOUSEWORK
------------------------------------ */
module.exports.delete_house_work = async (req, res, next) =>{
  try {
    const { houseWorkId } = req.body;


    const deletedHouseWork = await HouseWork.findByIdAndDelete(houseWorkId);

    res.json(deletedHouseWork);

  } catch (err) {
    next(err, req, res)
  }
}























/* -----------------------------------
.        UPDATE HOUSE WORK
------------------------------------ */
module.exports.update_house_work = async (req, res, next) =>{
  try {
    console.log(req.body)
    const { houseWorkId } = req.body;



    const updatedHouseWork = await HouseWork.findOneAndUpdate(houseWorkId, req.body);

    res.json(updatedHouseWork);

  } catch (err) {
    next(err, req, res)
  }
}


