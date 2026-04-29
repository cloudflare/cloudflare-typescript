// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MarkdownForAgentsAPI from './markdown-for-agents';
import { BaseMarkdownForAgents, MarkdownForAgents } from './markdown-for-agents';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import { BaseTimeseriesGroups, TimeseriesGroups } from './timeseries-groups';
import * as ToMarkdownAPI from './to-markdown';
import { BaseToMarkdown, ToMarkdown } from './to-markdown';
import * as BotsAPI from './bots/bots';
import { BaseBots, Bots } from './bots/bots';
import * as InferenceAPI from './inference/inference';
import { BaseInference, Inference } from './inference/inference';

export class BaseAI extends APIResource {
  static override readonly _key: readonly ['radar', 'ai'] = Object.freeze(['radar', 'ai'] as const);
}
export class AI extends BaseAI {
  toMarkdown: ToMarkdownAPI.ToMarkdown = new ToMarkdownAPI.ToMarkdown(this._client);
  inference: InferenceAPI.Inference = new InferenceAPI.Inference(this._client);
  bots: BotsAPI.Bots = new BotsAPI.Bots(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
  markdownForAgents: MarkdownForAgentsAPI.MarkdownForAgents = new MarkdownForAgentsAPI.MarkdownForAgents(
    this._client,
  );
}

AI.ToMarkdown = ToMarkdown;
AI.BaseToMarkdown = BaseToMarkdown;
AI.Inference = Inference;
AI.BaseInference = BaseInference;
AI.Bots = Bots;
AI.BaseBots = BaseBots;
AI.TimeseriesGroups = TimeseriesGroups;
AI.BaseTimeseriesGroups = BaseTimeseriesGroups;
AI.MarkdownForAgents = MarkdownForAgents;
AI.BaseMarkdownForAgents = BaseMarkdownForAgents;

export declare namespace AI {
  export { ToMarkdown as ToMarkdown, BaseToMarkdown as BaseToMarkdown };

  export { Inference as Inference, BaseInference as BaseInference };

  export { Bots as Bots, BaseBots as BaseBots };

  export { TimeseriesGroups as TimeseriesGroups, BaseTimeseriesGroups as BaseTimeseriesGroups };

  export { MarkdownForAgents as MarkdownForAgents, BaseMarkdownForAgents as BaseMarkdownForAgents };
}
