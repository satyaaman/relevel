const userservice=require('../mainservice');
const roleservice=require('../roleservice');
const {user}=require('../models');


const isauthenticated=async(req,res,next)=>{
    const token=req.headers['x-access-token'];
    if(!token){
        return res.json({
            message:'token is missing',
            code:400,
            err:'again entered the token'
        })
    }
    else{
        const response=await userservice.verifytoken(token);
        if(!response){
            return res.json({
                message:'token is wrong',
                code:400,
                err:'again entered the token because it is wrong'
            })
        }
        const user=await userhelperservice.getuserbyemail(response.email);
        if(!user){
            return res.json({
                message:'user is invalid',
                code:400,
                err:'again entered the token because its user is not detected'
            })
        }
        req.user=user;
        
    }

    next();
}

const checkadmin=async(req,res,next)=>{
    const user=await req.user;
    const role=await roleservice.getRolebyId(1);
    const isadmin=await user.hasRole(role);
    if(!isadmin){
        return res.json({
            message:'user is not admin',
            code:401,
            err:'invalid admin'
        });
    }
    next();
}
const checkAdminOrSeller = async(req, res, next) =>{
    const user =  req.user;
    const adminRole = await roleservice.getRoleByName('admin');
    const sellerRole = await roleservice.getRoleByName('renter');
    const isAdmin = await user.hasRole(adminRole);
    const isSeller = await user.hasRole(renterrRole);
    if(!isAdmin && !isrenter){
        return res.json({
            status: 401,
            message: "User is not authorized",
            data: {},
            err: 'Not authorized'
        });
    }

    next();
}

module.exports={
    isauthenticated,
    checkadmin,
    checkAdminOrRenter
}