import { Application } from "express";
import { FeedBackArtificialIntelligenceRoute } from "./feedBackArtificialIntelligenceRoute";

// Class for routes
export class Routes {
    // Vars private
    private feedBackArtificialIntelligenceRoute: FeedBackArtificialIntelligenceRoute;

    // Constructor
    constructor() {
        this.feedBackArtificialIntelligenceRoute = new FeedBackArtificialIntelligenceRoute();
    }

    // Routes api
    public routesApi(app: Application): Application {
        this.feedBackArtificialIntelligenceRoute.feedBackArtificialIntelligenceRoute();
        app.use("/api/v1", this.feedBackArtificialIntelligenceRoute.router);
        return app;
    }
}