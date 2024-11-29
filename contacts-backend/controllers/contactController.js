const asyncHandler = require("express-async-handler");
//@desc Get All contacts
//@route GET /api/contacts
//@access Public
const getContacts= asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Get all contacts"});
});
//@desc Create Noew contacts
//@route POST /api/contacts
//@access Public
const createContact= asyncHandler(async(req,res)=>{
    console.log("The request body is ",req.body);
    const {name,email,phone}=req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error ("All fields are mandatory");
    }
    res.status(201).json({message:"Created new contact"});
});
//@desc Get contact
//@route GET /api/contacts/:id
//@access Public
const getContact= asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Get Contact for ${req.params.id}`});
});
//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact= asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Updated Contact for ${req.params.id}`});
});
//@desc Create Noew contacts
//@route POST /api/contacts/:id
//@access Public
const deleteContact= asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Deleted Contact for ${req.params.id}`});
});
module.exports={getContacts,createContact,getContact,updateContact, deleteContact};