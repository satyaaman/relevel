const {book}=require('./models')
const createbook=async(data)=>{
    const response=await book.create({
    isbn:data.isbn,
    name:data.name,
    published:data.published,
    
})
return response
}
module.exports={
    createbook
}