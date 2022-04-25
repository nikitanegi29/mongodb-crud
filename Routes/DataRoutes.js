const express = require("express");
const DataModel = require("../model/data");
const app = express();

app.get("/data", async (request, response) => {
  const Data = await DataModel.find({});

  try {
    response.send(Data);
  } catch (error) {
    response.status(500).send(error);
  }
});


app.get("/databyid/:id",async(req,res)=>{
  try{
    await DataModel.find({_id: req.params.id})
  .then((data)=>{
    res.send(data)
  })

}catch(err){
  console.log(err)
}
})


app.post("/postData",async(req,res)=>{
    const Data= DataModel(req.body)
    try{
        await Data.save();
        res.send(Data)
    }catch(err){
        res.send("Failed to post data")
        console.log(err)
    }
})


app.patch("/update/:id",async(req,res)=>{
  // const Data=DataModel(req.body)
  try{
    await DataModel.updateOne({ _id: req.params.id },
      { $set: req.body })
      .then(response => res.status(200).json({ data: response, msg: " sucessfully update user data by id" }))
  }catch(err){
    console.log(err)
  }
})


app.delete("/delete/:id",async(req,res)=>{
  try{
    await DataModel.deleteOne({_id: req.params.id})
    .then((data)=>{
      res.send(data)
    })
  }catch(err){
    console.log(err)
  }
})
module.exports = app;