const controller=require('./controllers');

const routes=(app)=>{
    app.get('/book/listgetallbook',controller.getallbook);

    app.post('/book/create/addnewbook',controller.addnewbook);

    
}
module.exports=routes;