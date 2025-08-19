'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating example sentences using a specified list of kana characters.
 *
 * The flow takes an array of kana characters as input and returns an array of example sentences using those characters,
 * complete with romaji and English translations.
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

const SentenceSchema = z.object({
    sentence: z.string().describe('The generated Japanese sentence.'),
    romaji: z.string().describe('The romaji representation of the sentence.'),
    translation: z.string().describe('The English translation of the sentence.'),
});

const GenerateExampleSentencesOutputSchema = z.object({
  sentences: z
    .array(SentenceSchema)
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
  prompt: `You are a Japanese language tutor, teaching beginner students. Generate 3 example sentences using only the following kana characters: {{{kana}}}. For each sentence, provide the romaji reading and a simple English translation. The sentences should be easy for beginners to understand.`,
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
