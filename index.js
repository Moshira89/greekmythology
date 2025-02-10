import express from "express"
import godRouter from "./routes/godRouter.js";
import heroRouter from "./routes/heroRouter.js";
import * as path from "path";


const app = express();
const PORT = 3000;
const__dirname = path.resolve;

app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs")

app.use(express.static(path.join("public")))

app.get("/", (req, res) => {
    res.render("pages/home", { 
        headTitle: "Greek Mythology",
        title: "Moshira's page on Greek Mythology",
        subtitle: "Explore the myths and legends!"
    });
 });
 
app.use("/gods",godRouter)

app.use("/heroes",heroRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
