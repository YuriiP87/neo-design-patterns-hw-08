import { RenderContext } from './interfaces/RenderContext';
import { RenderEventSubscriber } from './interfaces/RenderEventSubscriber';

export class RenderEventPublisher {
  private static subscribers: RenderEventSubscriber[] = [];

  static subscribe(subscriber: RenderEventSubscriber): void {
    this.subscribers.push(subscriber);
  }

  static unsubscribe(subscriber: RenderEventSubscriber): void {
    this.subscribers = this.subscribers.filter((item) => item !== subscriber);
  }

  static notify(context: RenderContext): void {
    this.subscribers.forEach((subscriber) => {
      try {
        subscriber.update(context);
      } catch (error) {
        console.error('[RenderEventPublisher] Subscriber error:', error);
      }
    });
  }
}