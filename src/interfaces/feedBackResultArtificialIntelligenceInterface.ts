// Interface for Message 
interface Message {
    role: string;
    content: string | null;
}

// Interface for Choice
interface Choice {
    index: number;
    message: Message;
    logprobs?: unknown | null;
    finish_reason: string;
}

// Interface for Usage
interface Usage {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
}

// Interface for FeedBackResultArtificialIntelligenceInterface
export interface FeedBackResultArtificialIntelligenceInterface {
    id: string;
    object: string;
    created: number;
    model: string;
    system_fingerprint?: string | null;
    choices?: Choice[];
    usage?: Usage;
}