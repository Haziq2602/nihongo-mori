'use server';

import { generateExampleSentences } from '@/ai/flows/generate-example-sentences';
import { generateAudio } from '@/ai/flows/generate-audio';

export interface SentenceResult {
    sentence: string;
    romaji: string;
    translation: string;
    audio: string;
}

export async function generateSentencesAction(kana: string[]): Promise<{sentences?: SentenceResult[], error?: string}> {
  try {
    const result = await generateExampleSentences({ kana });
    
    const sentencesWithAudio = await Promise.all(result.sentences.map(async (s) => {
        const audioResult = await generateAudio(s.sentence);
        return {
            ...s,
            audio: audioResult.audioDataUri,
        };
    }));

    return { sentences: sentencesWithAudio };
  } catch (error: any) {
    console.error('Error generating sentences:', error);
    return { error: error.message || 'An unexpected error occurred while generating sentences.' };
  }
}
