import { performance } from 'perf_hooks';
import { DocNode } from '../interfaces/DocNode';
import { DocRenderer } from '../interfaces/DocRenderer';
import { RenderEventPublisher } from '../RenderEventPublisher';

export class List implements DocNode {
  constructor(private items: string[]) {}

  render(renderer: DocRenderer): string {
    const start = performance.now();

    const result = renderer.renderList(this.items);

    const end = performance.now();

    RenderEventPublisher.notify({
      type: 'List',
      content: this.items.join(', '),
      items: this.items,
      renderTime: Math.round(end - start),
    });

    return result;
  }
}