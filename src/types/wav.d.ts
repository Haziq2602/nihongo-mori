declare module 'wav' {
  import { Transform } from 'stream';

  interface WriterOptions {
    format?: 'lpcm';
    channels?: number;
    sampleRate?: number;
    bitDepth?: number;
  }

  export class Writer extends Transform {
    constructor(options?: WriterOptions);
  }
}
