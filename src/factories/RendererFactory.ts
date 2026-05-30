import { DocRenderer } from '../interfaces/DocRenderer';
import { MarkdownRenderer } from '../renderers/MarkdownRenderer';
import { HTMLRenderer } from '../renderers/HTMLRenderer';
import { PlainTextRenderer } from '../renderers/PlainTextRenderer';

export class RendererFactory {
  static create(format: string): DocRenderer {
    if (format === 'markdown') {
      return new MarkdownRenderer();
    }

    if (format === 'html') {
      return new HTMLRenderer();
    }

    if (format === 'plain') {
      return new PlainTextRenderer();
    }

    throw new Error(`Unsupported format: ${format}`);
  }
}