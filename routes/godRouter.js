import express from "express"

const godRouter = express.Router();

godRouter.get("/", (req,res) =>{
    res.render("pages/featurePage", { 
        headTitle: "Greek Gods",
        bodyClass: "gods",
        title:"Welcome to the gods page",
        subtitle:"Bend the knee",
        pageType:"gods"
    })
})

godRouter.get("/zeus",(req,res) => {
    res.render("pages/featurePage",{
        headTitle: "Zeus",
        bodyClass: "gods",
        title:"Welcome to the gods page",
        subtitle:"Bend the knee",
        pageType:"gods",
        godName:"zeus"
    })
})


godRouter.get("/hera",(req,res) => {
    res.render("pages/featurePage",{
        headTitle: "Hera",
        bodyClass: "gods",
        title:"Welcome to the gods page",
        subtitle:"Bend the knee",
        pageType:"gods",
        godName:"hera"
    })
})

export default godRouter;
