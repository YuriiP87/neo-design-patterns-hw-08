import { DocRenderer } from './DocRenderer';

export interface DocNode {
  render(renderer: DocRenderer): string;
}