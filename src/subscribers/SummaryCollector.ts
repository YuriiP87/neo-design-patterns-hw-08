import { RenderContext } from '../interfaces/RenderContext';
import { RenderEventSubscriber } from '../interfaces/RenderEventSubscriber';

export class SummaryCollector implements RenderEventSubscriber {
  private stats = {
    Section: 0,
    Paragraph: 0,
    List: 0,
  };

  update(context: RenderContext): void {
    this.stats[context.type] += 1;
  }

  printSummary(): void {
    console.log(
      `[Summary] Rendered ${this.stats.Section} sections, ${this.stats.Paragraph} paragraphs, ${this.stats.List} lists`
    );
  }
}