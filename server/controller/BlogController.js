const BlogModel = require("../model/BlogModel");
 

exports.Cearet = async(req,res) => {
    try {

    const title = req.body.title;
    const content = req.body.content;
    const imge = req.body.imge;
    const createdby = req.body.createbyid;

    if(!title || !content || !imge /**|| !createdby**/){
    return res.json({
            msg : "Plase fill this field",
            stete : 0,
            data : [],
        })
    }
  await BlogModel.create({
        title : title,
        content : content,
        imge : imge,
        createdby : createdby,
        date : new Date(),
    }).then( (data)=>{
   return res.json({
        msg : "your Blog has been Ceareted",
        stete : 1,
        data : data,
    })
    }).catch( (err)=>{
     console.log(err);
     return res.json({
        msg : "internal server error",
        stete : 0,
        data : [],
     })
    })
    } catch (error) {
        console.log(error);
        return res.json({
           msg : "internal server error",
           stete : 0,
           data : [],
        }) 
    }
    
}
exports.getall = async(req,res) =>{
    try {
      const result = await BlogModel.find({})

      if(result){
        return res.json({
            msg : " ",
            stete : 1,
            data : result,
        })
      }else{
        return res.json({
            msg : "can not found any Blog",
            stete : 0,
            data : [],
        })
      }
    } catch (error) {
        console.log(error);
        return res.json({
            msg : "internal server error",
            stete : 0,
            data : [],
        })
    }
}
exports.getbyId = async(req,res)=>{
    try {
        const findid = await BlogModel.findById(req.params.id)

        if(findid){
            return res.json({
            msg : " ",
            stete : 1,
            data : findid,
          })
        } else{
            return res.json({
                msg : "can not Blog any task with this id",
                stete : 0,
                data : [],
            })
        }     
    } catch (error) {
        console.log(error);
        return res.json({
            msg : "internal server error",
            stete : 0,
            data : [],
        })       
    }
  
}

exports.getallbyid = async(req,res) => {
    try { 
     const blog = await BlogModel.find({_id:req.params.id})

     if(blog){
        return res.json({
            msg : " ",
            stete : 1,
            data : blog,
        })
     }else{
        return res.json({
            msg : "This id is not corect",
            stete : 0,
            dtat : [],
        })
     }
    } catch (error) {
        console.log(error);
        return res.json({
            msg : "internal server error",
            stete : 0,
            data : [],
        })
    }
}
exports.Update = async(req,res) =>{
    try {
        await BlogModel.findOneAndUpdate({_id:req.params.id},{
            state : true,
        }).then(() =>{
           return res.json({
            msg : "The state has been changed",
            stete : 1,
            data : [],
           })
        })   
    } catch (error) {
        console.log(error);
        return res.json({
            msg : "internal server error",
            stete : 0,
            data : [],
        })
    }
     
}
exports.Delete = async(req,res) => {
   try {
    await BlogModel.findOneAndDelete({_id:req.params.id}

    ).then(()=>{
       return res.json({
        msg : "Ok we done , your Blog has been deleted",
        stete : 1,
        data : [],
       })
    })
   } catch (error) {
    console.log(error);
    return res.json({
        msg : "internal server error",
        stete : 0,
        data : [],
    })
   }
}