import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 4000;

const handleListening = () => 
    console.log('Listening on: http://localhost:%d', PORT);
    
const handleHome = (req, res) => {
    console.log('home');
    res.send("welcome to my home!!");
}

const handleProfile = (req, res) => {
    console.log('profile');
    res.send("welcom to my profile!!");
}

// middleware 
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

//route
app.get("/", handleHome);
app.get("/profile", handleProfile);

//listen
app.listen(PORT, handleListening);
