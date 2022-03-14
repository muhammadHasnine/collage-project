import express from 'express';
import stuSchema from '../models/studentSchema.mjs'
const route = express.Router();

route.post("/postRegist",async(req,res)=>{
    const {stuname,session,semester,techno,gender,shift} = req.body
    const stdata = new stuSchema({
        studentName:stuname,
        session:session,
        semester:semester,
        technology:techno,
        gender:gender,
        shift:shift
    })
    try {
        await stdata.save()
    } catch (error) {
        console.log(error)
    }
})
route.get('/read',async(req,res)=>{
    stuSchema.find({},(err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})
export default route;