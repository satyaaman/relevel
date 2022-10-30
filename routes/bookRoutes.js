const booKcontroller=require('../controller/controllers');

const routes=(app)=>{
    app.get('/book/listgetallbook',booKcontroller.getallbook);

    app.post('/book/create/addnewbook',booKcontroller.addnewbook);

    app.post('/book/getbyname/name',booKcontroller.getbyname)
}
module.exports=routes;