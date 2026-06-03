import OpenAI from "openai";
import dotenv from "dotenv";
import { FeedBackResultArtificialIntelligenceInterface } from "../interfaces/feedBackResultArtificialIntelligenceInterface"; ``
import { FeedBackArtificialIntelligenceRespository } from "../repositories/feedBackArtificialIntelligenceRespository";

// Load environment variables from .env file
dotenv.config();

// Class for service feedBackArtificialIntelligenceService
export class FeedBackArtificialIntelligenceService {
    // Vars private
    private feedBackArtificialIntelligenceRespository: FeedBackArtificialIntelligenceRespository;
    private openai: OpenAI;
    private openaiOrganization = process.env.OPENAI_ORGANIZATION || "";
    private openaiProject = process.env.OPENAI_PROJECT || "";
    private openaiKey = process.env.OPENAI_API_KEY || "";
    private modelAI = process.env.OPENAI_MODEL || "";

    public roleContentAI =
    `
    Actúa como un ingeniero de sistemas experimentado que ayuda a los usuarios a aprender Python. Tu objetivo es:
    1. Revisar el código proporcionado en busca de errores y problemas potenciales.
    2. Proporcionar correcciones y sugerencias para mejorar el código.
    3. Calificar el código en una escala del 1 al 10 en términos de claridad, eficiencia y uso de mejores prácticas.
    4. Sugerir mejoras en términos de mejores prácticas y optimizaciones.
    5. Proporcionar ejemplos de cómo se podría reescribir el código utilizando mejores prácticas.
    6. Educar al usuario explicando por qué se recomiendan estas prácticas.
    Por favor, proporciona una retroalimentación detallada que sea constructiva y fácil de entender en un rango maximo de respuesta de 600 tokens.
    `;

    // Constructor
    constructor() {
        // Create the feedBackArtificialIntelligenceRespository instance
        this.feedBackArtificialIntelligenceRespository = new FeedBackArtificialIntelligenceRespository();
        // Create the OpenAI instance
        this.openai = new OpenAI({
            organization: this.openaiOrganization,
            project: this.openaiProject,
            apiKey: this.openaiKey
        });
    }

    // Method for get all
    async getAllFeedBackArtificialIntelligence() {
        try {
            // Get all feedBackArtificialIntelligence
            const feedBackArtificialIntelligence = await this.feedBackArtificialIntelligenceRespository.getAllFeedBackArtificialIntelligence();
            // Return the response
            return feedBackArtificialIntelligence;
        } catch (error) {
            // Manage error
            if (error instanceof Error) {
                console.error("Error getAllFeedBackArtificialIntelligence: ", error.message);
                return { error: error.message };
            }
        }
    }

    // Method for create
    async feedBackArtificialIntelligence(code: string) {
        try {
            // Call the API
            const response = await this.openai.chat.completions.create({
                model: this.modelAI,
                messages: [
                    { role: "system", content: this.roleContentAI },
                    { role: "user", content: code }
                ],
                max_tokens: 600,
                temperature: 0.4,
                top_p: 0.8,
                n: 1,
            });
            //  Variable to store the response
            const responseChoices = response.choices[0].message.content;
            // Check if responseChoices is not empty
            if (responseChoices !== "") {
                // Create feedBackResultArtificialIntelligence
                const feedBackResultArtificialIntelligence: FeedBackResultArtificialIntelligenceInterface = {
                    id: response.id,
                    object: response.object,
                    created: response.created,
                    model: response.model,
                    system_fingerprint: response.system_fingerprint,
                    choices: response.choices.map(choice => ({
                        index: choice.index,
                        message: choice.message,
                        logprobs: choice.logprobs,
                        finish_reason: choice.finish_reason
                    })),
                    usage: response.usage
                };
                // Save feedBackArtificialIntelligence
                await this.feedBackArtificialIntelligenceRespository.saveFeedBackArtificialIntelligence(code, feedBackResultArtificialIntelligence);
            }
            // Get the result
            const feedBackResultArtificialIntelligence = responseChoices;
            // Return the response
            return feedBackResultArtificialIntelligence;
        } catch (error) {
            // Manage error
            if (error instanceof Error) {
                console.error("Error feedBackArtificialIntelligence: ", error.message);
                return { error: error.message };
            }
        }
    }
}