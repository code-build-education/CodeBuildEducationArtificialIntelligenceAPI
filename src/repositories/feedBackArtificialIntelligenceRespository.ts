import { PrismaClient } from "@prisma/client";
import { FeedBackResultArtificialIntelligenceInterface } from "../interfaces/feedBackResultArtificialIntelligenceInterface";

// Class for handling all the database operations in the application
export class FeedBackArtificialIntelligenceRespository {
    // Vars private
    private prisma: PrismaClient;

    // Constructor
    constructor() {
        this.prisma = new PrismaClient();
    }

    // Method get all
    async getAllFeedBackArtificialIntelligence() {
        try {
            // Get all feedBackArtificialIntelligence
            const feedBackArtificialIntelligence = await this.prisma.feedBackArtificialIntelligenceResult.findMany();
            // Return the response
            return feedBackArtificialIntelligence;
        } catch (error) {
            // Manage error
            if (error instanceof Error) {
                console.error("Error getAllFeedBackArtificialIntelligence: ", error.message);
                return { error: error.message };
            }
        } finally {
            await this.prisma.$disconnect();
        }
    }

    // Method get by id
    async getFeedBackArtificialIntelligenceById(id: string) {
        try {
            // Get feedBackArtificialIntelligence by id
            const feedBackArtificialIntelligence = await this.prisma.feedBackArtificialIntelligenceResult.findUnique({
                where: {
                    id
                }
            });
            // Return the response
            return feedBackArtificialIntelligence;
        } catch (error) {
            // Manage error
            if (error instanceof Error) {
                console.error("Error getFeedBackArtificialIntelligenceById: ", error.message);
                return { error: error.message };
            }
        } finally {
            await this.prisma.$disconnect();
        }
    }

    // Method save feedBackArtificialIntelligence
    async saveFeedBackArtificialIntelligence(code: string, feedBackResultArtificialIntelligence: FeedBackResultArtificialIntelligenceInterface) {
        try {
            // Save feedBackArtificialIntelligence
            const feedBackArtificialIntelligence = await this.prisma.feedBackArtificialIntelligenceResult.create({
                data: {
                    code: code,
                    feedBackResultArtificialIntelligence: JSON.parse(JSON.stringify(feedBackResultArtificialIntelligence))
                }
            });
            // Return the response
            return feedBackArtificialIntelligence;
        } catch (error) {
            // Manage error
            if (error instanceof Error) {
                console.error("Error saveFeedBackArtificialIntelligence: ", error.message);
                return { error: error.message };
            }
        }
        finally {
            await this.prisma.$disconnect();
        }
    }

    // Method update feedBackArtificialIntelligence
    async updateFeedBackArtificialIntelligence(id: string, code: string, feedBackResultArtificialIntelligence: FeedBackResultArtificialIntelligenceInterface) {
        try {
            // Update feedBackArtificialIntelligence
            const feedBackArtificialIntelligence = await this.prisma.feedBackArtificialIntelligenceResult.update({
                where: {
                    id
                },
                data: {
                    code: code,
                    feedBackResultArtificialIntelligence: JSON.parse(JSON.stringify(feedBackResultArtificialIntelligence))
                }
            });
            // Return the response
            return feedBackArtificialIntelligence;
        } catch (error) {
            // Manage error
            if (error instanceof Error) {
                console.error("Error updateFeedBackArtificialIntelligence: ", error.message);
                return { error: error.message };
            }
        } finally {
            await this.prisma.$disconnect();
        }
    }

    // Method delete feedBackArtificialIntelligence
    async deleteFeedBackArtificialIntelligence(id: string) {
        try {
            // Delete feedBackArtificialIntelligence
            const feedBackArtificialIntelligence = await this.prisma.feedBackArtificialIntelligenceResult.delete({
                where: {
                    id
                }
            });
            // Return the response
            return feedBackArtificialIntelligence;
        } catch (error) {
            // Manage error
            if (error instanceof Error) {
                console.error("Error deleteFeedBackArtificialIntelligence: ", error.message);
                return { error: error.message };
            }
        } finally {
            await this.prisma.$disconnect();
        }
    }
}