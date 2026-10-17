const express=require('express');
const router =express.Router();

const Alldata=require('../models/alldata');


router.get('/',async(req,res)=>{
   try {
       const alldatafromdb= await Alldata.find();
       res.json(alldatafromdb);
   }catch(err){
       res.send('Error '+ err)
   }
})
router.post('/', async(req,res)=>{
    const alldata= new Alldata(
        {
            name: req.body.name,
            tech: req.body.tech,
            sub: req.body.sub
        }
    )
    try{
        const ad= await alldata.save();
        res.json(ad);
    }catch(err){
        res.send('Error');
    }
})

router.get('/:id', async(req,res)=>{
    try {
        const alldata = await Alldata.findById(req.params.id);
        res.json(alldata);
    }catch(err){
        res.send('Error '+ err);
    }
})



router.patch('/:id',async(req,res)=>{
    try{
        const alldatapatch=await Alldata.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
        if(!alldatapatch)return res.status(404).json({error:'not found'
        })
        res.json(alldatapatch);
    }catch(err){
        res.status(400).json({error:err.message});
    }
});

router.delete('/:id',async(req,res)=>{
    try{
    const deletedata=await Alldata.findByIdAndDelete(req.params.id);
    if(!deletedata)return res.status(404).json({error:'err  data not found'});
    res.json({message:'deleted', deletedata});}
    catch(err){
        res.status(500).json({error:err.message})
    }


})

module.exports=router;