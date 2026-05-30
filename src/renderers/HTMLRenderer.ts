import { BaseRenderer } from './BaseRenderer';

export class HTMLRenderer extends BaseRenderer {
  renderParagraph(content: string): string {
    return `<p>${this.escape(content)}</p>\n`;
  }

  renderList(items: string[]): string {
    const listItems = items.map((item) => `  <li>${this.escape(item)}</li>`).join('\n');

    return `<ul>\n${listItems}\n</ul>\n`;
  }

  renderSection(title: string, level: number, content: string): string {
    return `<section>\n<h${level}>${this.escape(title)}</h${level}>\n${content}</section>\n`;
  }
}