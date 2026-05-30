import { RenderContext } from '../interfaces/RenderContext';
import { RenderEventSubscriber } from '../interfaces/RenderEventSubscriber';

export class RenderLoggerSubscriber implements RenderEventSubscriber {
  update(context: RenderContext): void {
    if (context.type === 'Paragraph') {
      console.log(`[Log] Rendered Paragraph (${context.content.length} chars)`);
    }

    if (context.type === 'List') {
      console.log(`[Log] Rendered List (${context.items?.length ?? 0} items)`);
    }

    if (context.type === 'Section') {
      console.log(`[Log] Rendered Section ("${context.content}", level ${context.level})`);
    }
  }
}