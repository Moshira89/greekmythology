import express from "express"
import Heroes from "../data/heroes.js";

const heroRouter = express.Router();

heroRouter.get("/", (req,res) =>{
    res.render("pages/featurePage",{
        headTitle: "Greek Heroes",
        bodyClass:"heroes",
        title:"Welcome to the heroes page",
        subtitle:"Meet the legendry figures"
    })
})

heroRouter.get("/herocules",(req,res) =>{
    let hercules= Heroes[0];
    res.render('pages/hero',{
        headTitle: hercules.name,
        title: hercules.name,
        subtitle: "Info about our hero",
        hero: hercules
    })
})


heroRouter.get("/odyssues",(req,res) =>{
    let odyssues= Heroes[1]
    res.render('pages/hero',{
        headTitle: odyssues.name,
        title: odyssues.name,
        subtitle: "Info about our hero",
        hero: odyssues
    })})

export default heroRouter;