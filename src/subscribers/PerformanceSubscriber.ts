import { RenderContext } from '../interfaces/RenderContext';
import { RenderEventSubscriber } from '../interfaces/RenderEventSubscriber';

export class PerformanceSubscriber implements RenderEventSubscriber {
  private totalRenderTime = 0;

  update(context: RenderContext): void {
    this.totalRenderTime += context.renderTime ?? 0;
  }

  printTotalTime(): void {
    console.log(`[Performance] Total render time: ${this.totalRenderTime}ms`);
  }
}   