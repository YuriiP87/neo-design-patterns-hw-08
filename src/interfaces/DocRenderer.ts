export interface DocRenderer {
  renderParagraph(content: string): string;
  renderList(items: string[]): string;
  renderSection(title: string, level: number, content: string): string;
}