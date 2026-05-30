import fs from 'fs';
import { RendererFactory } from './factories/RendererFactory';
import { Section } from './nodes/Section';
import { Paragraph } from './nodes/Paragraph';
import { List } from './nodes/List';
import { RenderEventPublisher } from './RenderEventPublisher';
import { RenderLoggerSubscriber } from './subscribers/RenderLoggerSubscriber';
import { SummaryCollector } from './subscribers/SummaryCollector';
import { PerformanceSubscriber } from './subscribers/PerformanceSubscriber';

const [, , format = 'markdown', outputPath = 'output.md'] = process.argv;

const logger = new RenderLoggerSubscriber();
const summary = new SummaryCollector();
const performanceSubscriber = new PerformanceSubscriber();

RenderEventPublisher.subscribe(logger);
RenderEventPublisher.subscribe(summary);
RenderEventPublisher.subscribe(performanceSubscriber);

const structuralPatterns = new Section('Структурні патерни', 1);

const mainPatterns = new Section('Основні патерни', 2);

const composite = new Section('Composite', 2);
composite.add(new Paragraph('Composite дозволяє згрупувати об’єкти в деревоподібну структуру.'));
composite.add(new Paragraph('Цей патерн дає змогу однаково працювати з окремими об’єктами та групами.'));
composite.add(new List(['Component', 'Leaf', 'Composite']));

const bridge = new Section('Bridge', 2);
bridge.add(new Paragraph('Bridge розділяє абстракцію та реалізацію, щоб вони могли змінюватися незалежно.'));
bridge.add(new List(['Abstraction', 'Implementation']));

mainPatterns.add(composite);
mainPatterns.add(bridge);
structuralPatterns.add(mainPatterns);

const renderer = RendererFactory.create(format);
const output = structuralPatterns.render(renderer);

fs.writeFileSync(outputPath, output);

summary.printSummary();
performanceSubscriber.printTotalTime();