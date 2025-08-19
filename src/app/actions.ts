'use server';

import { generateExampleSentences } from '@/ai/flows/generate-example-sentences';

export async function generateSentencesAction(kana: string[]): Promise<{sentences?: string[], error?: string}> {
  try {
    const result = await generateExampleSentences({ kana });
    return { sentences: result.sentences };
  } catch (error: any) {
    console.error('Error generating sentences:', error);
    return { error: error.message || 'An unexpected error occurred while generating sentences.' };
  }
}
