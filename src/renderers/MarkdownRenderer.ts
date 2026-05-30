import { BaseRenderer } from './BaseRenderer';

export class MarkdownRenderer extends BaseRenderer {
  renderParagraph(content: string): string {
    return `${content}\n`;
  }

  renderList(items: string[]): string {
    return items.map((item) => `- ${item}`).join('\n') + '\n';
  }

  renderSection(title: string, level: number, content: string): string {
    return `${'#'.repeat(level)} ${title}\n\n${content}`;
  }
}