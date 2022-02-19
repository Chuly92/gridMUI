const express = require('express');
const app = express();
const mongoose = require('mongoose');
const OperationsModel = require('./models/Operations');

const cors = require('cors');
app.use(cors());
app.use(express.json());

const port = 3001;
mongoose.connect("mongodb+srv://admin:123@cluster0.igazs.mongodb.net/alkemy?retryWrites=true&w=majority")

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// ----------------- GET ---------------- //
app.get('/getOperations', async (req, res) => {
  try {
    const listOper = await OperationsModel.find();
    res.json(listOper);
  }
  catch (err) {
    res.json(err);
  }
});

// ---------------- CREATE --------------- //
app.post('/createOperation', async (req, res) => {
  const operation = req.body;
  const newOperation = new OperationsModel(operation);

  try {
    await newOperation.save();
    res.json(`Operation inserted!`);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

// ---------------- UPDATE --------------- //
app.post('/updateOperation', async (req, res) => {
  const id = req.body._id;
  const { description, amount, date } = req.body;

  try {
    const updateUser = await res.OperationsModel.findByIdAndUpdate(
      { "_id": id }, {
      "$set": {
        "description": description,
        "amount": amount,
        "date": date
      }
    })
    res.json(`Operation updated!`);
  } catch (err) {
    res.json(err);
  }
});

// ---------------- DELETE --------------- //
app.delete('/deleteOperation', async (req, res) => {
  const id = req.body._id;
  try {
    const deleteOper = await OperationsModel.findByIdAndDelete({ "_id": id });
    res.json(`Operation ID ${id} deleted!`);
  } catch (err) {
    res.json(err); 
  }
});



