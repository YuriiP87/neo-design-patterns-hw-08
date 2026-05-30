import { performance } from 'perf_hooks';
import { DocNode } from '../interfaces/DocNode';
import { DocRenderer } from '../interfaces/DocRenderer';
import { RenderEventPublisher } from '../RenderEventPublisher';

export class Paragraph implements DocNode {
  constructor(private content: string) {}

  render(renderer: DocRenderer): string {
    const start = performance.now();

    const result = renderer.renderParagraph(this.content);

    const end = performance.now();

    RenderEventPublisher.notify({
      type: 'Paragraph',
      content: this.content,
      renderTime: Math.round(end - start),
    });

    return result;
  }
}