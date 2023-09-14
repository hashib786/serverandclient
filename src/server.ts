import express, {Request, Response} from "express";

const app = express();

app.get("/", (req : Request, res : Response)=>{
    res.status(200).json({
        message : "Hello World"
    })
})

// Lisning port
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});