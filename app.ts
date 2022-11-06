import { Request, Response, Express } from "express";
import express from 'express'

const app: Express = express();
const PORT: Number = 3000;
const Root: "/" = "/";

app.get(Root, (req: Request, res: Response) => {
    res.send("hello world");
})

app.get("/data", (req: Request, res: Response) => {
    res.send({
        data: 'success',
        Type: true,
    });

})






app.listen(PORT, (): void => {
    console.log("port is running on the " + PORT);
});