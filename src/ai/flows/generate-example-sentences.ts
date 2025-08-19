'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating example sentences using a specified list of kana characters.
 *
 * The flow takes an array of kana characters as input and returns an array of example sentences using those characters.
 * - generateExampleSentences - A function that calls the generateExampleSentencesFlow.
 * - GenerateExampleSentencesInput - The input type for the generateExampleSentences function.
 * - GenerateExampleSentencesOutput - The return type for the generateExampleSentences function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateExampleSentencesInputSchema = z.object({
  kana: z.array(z.string()).describe('An array of kana characters to use in the example sentences.'),
});
export type GenerateExampleSentencesInput = z.infer<
  typeof GenerateExampleSentencesInputSchema
>;

const GenerateExampleSentencesOutputSchema = z.object({
  sentences: z
    .array(z.string())
    .describe('An array of example sentences using the specified kana.'),
});
export type GenerateExampleSentencesOutput = z.infer<
  typeof GenerateExampleSentencesOutputSchema
>;

export async function generateExampleSentences(
  input: GenerateExampleSentencesInput
): Promise<GenerateExampleSentencesOutput> {
  return generateExampleSentencesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateExampleSentencesPrompt',
  input: {schema: GenerateExampleSentencesInputSchema},
  output: {schema: GenerateExampleSentencesOutputSchema},
  prompt: `You are a Japanese language tutor, teaching beginner students. Generate 3 example sentences using only the following kana characters: {{{kana}}}. The sentences should be simple and easy to understand for beginners.`,
});

const generateExampleSentencesFlow = ai.defineFlow(
  {
    name: 'generateExampleSentencesFlow',
    inputSchema: GenerateExampleSentencesInputSchema,
    outputSchema: GenerateExampleSentencesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
