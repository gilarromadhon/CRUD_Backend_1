import express from "express";
// import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
 
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(UserRoute);
 
// app.listen(5001, ()=> console.log('Server up and running...'));

const app = express();
const port = 9000;
// app.use("/", (req, res) => {
//     res.json({
//         message: "Hello"
//     })
// })
app.use(UserRoute);

app.listen(9000, () => {
    console.log(`Server up and running on ${port}`)
});
