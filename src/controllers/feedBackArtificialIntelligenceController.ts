import { Request, Response } from "express";
import { feedBackArtificialIntelligenceValidation } from "../validations/feedBackArtificialIntelligenceValidation";
import { FeedBackArtificialIntelligenceService } from "../services/feedBackArtificialIntelligenceService";

// Class for route feedBackArtificialIntelligenceRoute
export class FeedBackArtificialIntelligenceController {
    // Vars private
    private feedBackArtificialIntelligenceService: FeedBackArtificialIntelligenceService;

    // Constructor
    constructor() {
        this.feedBackArtificialIntelligenceService = new FeedBackArtificialIntelligenceService();
    }

    // Method to get all feedBackArtificialIntelligence
    async getAllFeedBackArtificialIntelligence(req: Request, res: Response) {
        try {
            // Get all feedBackArtificialIntelligence
            const feedBackArtificialIntelligence = await this.feedBackArtificialIntelligenceService.getAllFeedBackArtificialIntelligence();
            // Check if compilationCodePython is an array before accessing length
            if (Array.isArray(feedBackArtificialIntelligence)) {
                //If not found data in database
                if (feedBackArtificialIntelligence.length === 0) {
                    res.status(404).json({ error: "Not found data" });
                } else {
                    // Return the response
                    res.status(200).json({ feedBackArtificialIntelligence });
                }
            } else {
                // Handle the case where compilationCodePython is not an array (e.g., an error object)
                res.status(500).json({ error: "Unexpected response format" });
            }
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    // Method feedBackArtificialIntelligence
    async postFeedBackArtificialIntelligence(req: Request, res: Response) {
        try {
            // Get code 
            const { code } = req.body;
            // Validate
            const { error } = feedBackArtificialIntelligenceValidation.validate({ code });
            // If not valid code
            if (error) {
                res.status(400).json({ error: error.details[0].message });
            } else{
                // Create feedBackArtificialIntelligence
                const feedBackArtificialIntelligenceResult = await this.feedBackArtificialIntelligenceService.feedBackArtificialIntelligence(code);
                // Return the response
                res.status(200).json({ feedBackArtificialIntelligenceResult });
            }
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}