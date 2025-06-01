import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";

const app = express();
const port = 3000;
app.use(methodOverride('_method'));

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));

const password = "Password";

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/welcome", (req, res) => {
    const { password } = req.body;
    if (password === "Password") {
        res.render("welcome.ejs");
    } else {
        res.render("index.ejs", { error: "Incorrect password"});
    }
});

app.post("/view", (req, res) => {
    const { nickname, story } = req.body;
    res.render("view.ejs", { nickname, story });
});

app.post("/back", (req, res) => {
    res.render("index.ejs");
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});