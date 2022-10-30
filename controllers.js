const {book}=require('./models')
const service=require('./service')
const getallbook=async(req,res)=>{

    const response=await book.findAll();
    return res.json({
        message:'succesfully fetched the data',
        code:200,
        data:response
    })

}
const addnewbook=async(req,res)=>{
    const result=await service.createbook(req.body)
    return res.json({
        message:'succesfully created the data',
        code:200,
        data:result
    })

    
    
}
module.exports={
    getallbook,addnewbook
}