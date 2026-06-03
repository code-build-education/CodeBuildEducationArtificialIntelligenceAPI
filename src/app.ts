import express from "express";
import cors from "cors";
import { Routes } from "./routes/index";

export function createApp() {
    // Express app  
    const app = express();

    // Use cors
    app.use(
        cors({
            origin: "*",
            methods: ["GET", "POST", "PUT", "DELETE"],
        })
    );

    // Use json
    app.use(express.json());

    // Route default
    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    // Routes
    const routes = new Routes();
    routes.routesApi(app);

    // Return app
    return app;
}