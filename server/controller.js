
const Products = require("./models.js")

module.exports ={
    allProducts: (req,res)=>Products.find({})
                                .then(data=>console.log(data)||res.json(data))
                                .catch(errs=>res.json(errs)),

    getProduct: (req,res)=>Products.findById(req.params)
                                .then(data=>console.log(data)||res.json(data))
                                .catch(errs=>res.json(errs)),
                                                            
    makeProduct: (req,res)=>{ console.log("make product")
                                Products.create(req.body)
                                .then(data=>res.json(data))
                                .catch(errs=>res.json(errs))},

    updateProduct: (req,res)=>Products.findByIdAndUpdate(req.params._id,req.body)
                                .then(data=>res.json(data))
                                .catch(errs=>res.json(errs)),

    deleteProduct: (req,res)=>Products.findByIdAndRemove(req.params._id)
                                .then(data=>res.json(data))
                                .catch(errs=>res.json(errs)),
    
}