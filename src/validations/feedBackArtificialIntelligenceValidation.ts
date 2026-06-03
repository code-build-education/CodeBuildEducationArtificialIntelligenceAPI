import Joi from "joi";

// Validation for FeedBackArtificialIntelligence
export const feedBackArtificialIntelligenceValidation = Joi.object({
  code: Joi.string().required(),
});