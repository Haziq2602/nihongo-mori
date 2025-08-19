'use server';
/**
 * @fileOverview A flow for generating example Japanese words from a set of kana.
 *
 * - generateExampleWords - A function that generates words.
 * - GenerateWordsInput - The input type for the generateExampleWords function.
 * - GenerateWordsOutput - The return type for the generateExampleWords function.
 */
import {ai} from '@/ai/genkit';
import {z} from 'zod';

const GenerateWordsInputSchema = z.object({
  kana: z.array(z.string()).describe('A list of kana characters to use for generating words.'),
});

const GenerateWordsOutputSchema = z.object({
    words: z.array(z.object({
        word: z.string().describe('The generated Japanese word using only the provided kana.'),
        romaji: z.string().describe('The romaji reading of the word.'),
        meaning: z.string().describe('The English meaning of the word.'),
    })).describe('A list of 3-5 example words.'),
});

export type GenerateWordsInput = z.infer<typeof GenerateWordsInputSchema>;
export type GenerateWordsOutput = z.infer<typeof GenerateWordsOutputSchema>;


export async function generateExampleWords(input: GenerateWordsInput): Promise<GenerateWordsOutput> {
    return generateExampleWordsFlow(input);
}


const prompt = ai.definePrompt({
    name: 'generateWordsPrompt',
    input: { schema: GenerateWordsInputSchema },
    output: { schema: GenerateWordsOutputSchema },
    prompt: `You are an expert Japanese language teacher.
    The user has learned a specific set of kana characters.
    Your task is to generate a list of 3-5 simple, common Japanese words that can be written using ONLY the provided kana characters. Do not use any kana that is not in the list.

    The user has provided the following kana:
    {{#each kana}}
    - {{this}}
    {{/each}}

    Please provide a list of 3-5 example words. For each word, provide the word itself, its romaji reading, and its English meaning.
    Ensure the words are appropriate for a beginner learner.
    `,
});


const generateExampleWordsFlow = ai.defineFlow(
    {
        name: 'generateExampleWordsFlow',
        inputSchema: GenerateWordsInputSchema,
        outputSchema: GenerateWordsOutputSchema,
    },
    async (input) => {
        const { output } = await prompt(input);
        return output!;
    }
);
