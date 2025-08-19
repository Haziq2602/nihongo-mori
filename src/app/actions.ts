'use server';

import { generateExampleWords, GenerateWordsInput, GenerateWordsOutput } from '@/ai/flows/generate-example-sentences';

export async function generateWordsAction(
  input: GenerateWordsInput
): Promise<GenerateWordsOutput | { error: string }> {
  try {
    const result = await generateExampleWords(input);
    return result;
  } catch (e: any) {
    console.error(e);
    return { error: e.message || 'An unexpected error occurred.' };
  }
}
