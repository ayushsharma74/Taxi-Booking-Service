import { app } from "./app.js";
import http from "http"
import { connectDB } from "./db/db.config.js";

connectDB();
const server = http.createServer(app)

server.listen(3000, () => {
    console.log("Listening on port 3000");
})