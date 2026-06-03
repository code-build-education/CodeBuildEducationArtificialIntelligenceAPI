import express, { Request, Response } from "express";
import { FeedBackArtificialIntelligenceController } from "../controllers/feedBackArtificialIntelligenceController";

// Class for routes feedBackArtificialIntelligenceRoute
export class FeedBackArtificialIntelligenceRoute {
    // Vars private
    private feedBackArtificialIntelligenceController: FeedBackArtificialIntelligenceController;

    // Vars public
    public router = express.Router();

    // Constructor
    constructor() {
        this.feedBackArtificialIntelligenceController = new FeedBackArtificialIntelligenceController();
    }

    // FeedBackArtificialIntelligence route
    public feedBackArtificialIntelligenceRoute(): void {
        // Get all feedBackArtificialIntelligence
        this.router.get("/feedback-artificial-intelligence", async (req: Request, res: Response) => {
            await this.feedBackArtificialIntelligenceController.getAllFeedBackArtificialIntelligence(req, res);
        });
        // Post feedBackArtificialIntelligence
        this.router.post("/feedback-artificial-intelligence", async (req: Request, res: Response) => {
            await this.feedBackArtificialIntelligenceController.postFeedBackArtificialIntelligence(req, res);
        });
    }
}


