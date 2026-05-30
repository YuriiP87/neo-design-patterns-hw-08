import { performance } from 'perf_hooks';
import { DocNode } from '../interfaces/DocNode';
import { DocRenderer } from '../interfaces/DocRenderer';
import { RenderEventPublisher } from '../RenderEventPublisher';

export class Section implements DocNode {
  private children: DocNode[] = [];

  constructor(
    private title: string,
    private level: number
  ) {}

  add(child: DocNode): void {
    this.children.push(child);
  }

  render(renderer: DocRenderer): string {
    const start = performance.now();

    const content = this.children.map((child) => child.render(renderer)).join('\n');
    const result = renderer.renderSection(this.title, this.level, content);

    const end = performance.now();

    RenderEventPublisher.notify({
      type: 'Section',
      content: this.title,
      level: this.level,
      renderTime: Math.round(end - start),
    });

    return result;
  }
}