import { DocRenderer } from '../interfaces/DocRenderer';

export abstract class BaseRenderer implements DocRenderer {
  abstract renderParagraph(content: string): string;

  abstract renderList(items: string[]): string;

  abstract renderSection(title: string, level: number, content: string): string;

  protected escape(content: string): string {
    return content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}