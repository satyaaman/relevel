const {user,role} = require("./models/index")
const roleservice=require('../services/role.serices');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const getuserbyemail=async(data)=>{
    const salt = bcrypt.genSaltSync(10);
    const hashpassword = bcrypt.hashSync(data.password, salt);

    const response=await user.create({
        email:data.email,
        password:hashpassword,
        username:data.username
    })
    const customerRole = await roleservice.getRoleByName('customer');

        //assigning the role of customer by default
        await response.addRole(customerRole);
        return response;
}

const verifyemail=async(data)=>{
    const response=await user.findOne({
        where:{
            email:data
        }
    });
    return response;
}

//const verifyactualpassword=async()
const verifyactualpassword=async(password,hashpassword)=>{
    
    const response=await bcrypt.compareSync(password,hashpassword);
    return response;

}
const verifytoken=async(token)=>{
    const response=jwt.verify(token,'mysecretkry');
    return response;
}

const {user,role}=require('../models/index');

const addingroletouser=async(userId,roleId)=>{
    const aman=await user.findOne({
        where:{
            id:userId
        }
    });
    const satya=await role.findOne({
        where:{
            id:roleId
        }
    });
    await aman.addRole(satya);
    return aman;
}
const removeroletouser=async(userId,roleId)=>{
    const aman=await user.findOne({
        where:{
            id:userId
        }
    });
    const satya=await role.findOne({
        where:{
            id:roleId
        }
    });
    await aman.removeRole(satya);
    return aman;
}

const getRolebyId=async(id)=>{
    const response=await role.findByPk(id)
    return response;
    
}
const getRoleByName=async(name)=>{
    const response=await role.findOne({
        where:{
            name:name
        }
    });
    return response;
}

module.exports={
    addingroletouser,
    removeroletouser,
    getRolebyId,
    getRoleByName,
    getuserbyemail,
    verifyemail,
    verifyactualpassword,
    verifytoken,

}