// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MarkdownForAgentsAPI from './markdown-for-agents';
import {
  BaseMarkdownForAgents,
  MarkdownForAgentSummaryParams,
  MarkdownForAgentSummaryResponse,
  MarkdownForAgentTimeseriesParams,
  MarkdownForAgentTimeseriesResponse,
  MarkdownForAgents,
} from './markdown-for-agents';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import {
  BaseTimeseriesGroups,
  TimeseriesGroupSummaryParams,
  TimeseriesGroupSummaryResponse,
  TimeseriesGroupTimeseriesGroupsParams,
  TimeseriesGroupTimeseriesGroupsResponse,
  TimeseriesGroupTimeseriesParams,
  TimeseriesGroupTimeseriesResponse,
  TimeseriesGroupUserAgentParams,
  TimeseriesGroupUserAgentResponse,
  TimeseriesGroups,
} from './timeseries-groups';
import * as ToMarkdownAPI from './to-markdown';
import {
  BaseToMarkdown,
  ToMarkdown,
  ToMarkdownCreateParams,
  ToMarkdownCreateResponse,
  ToMarkdownCreateResponsesSinglePage,
} from './to-markdown';
import * as BotsAPI from './bots/bots';
import {
  BaseBots,
  BotSummaryV2Params,
  BotSummaryV2Response,
  BotTimeseriesGroupsParams,
  BotTimeseriesGroupsResponse,
  BotTimeseriesParams,
  BotTimeseriesResponse,
  Bots,
} from './bots/bots';
import * as InferenceAPI from './inference/inference';
import {
  BaseInference,
  Inference,
  InferenceSummaryV2Params,
  InferenceSummaryV2Response,
  InferenceTimeseriesGroupsV2Params,
  InferenceTimeseriesGroupsV2Response,
} from './inference/inference';

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
  export {
    ToMarkdown as ToMarkdown,
    BaseToMarkdown as BaseToMarkdown,
    type ToMarkdownCreateResponse as ToMarkdownCreateResponse,
    type ToMarkdownCreateResponsesSinglePage as ToMarkdownCreateResponsesSinglePage,
    type ToMarkdownCreateParams as ToMarkdownCreateParams,
  };

  export {
    Inference as Inference,
    BaseInference as BaseInference,
    type InferenceSummaryV2Response as InferenceSummaryV2Response,
    type InferenceTimeseriesGroupsV2Response as InferenceTimeseriesGroupsV2Response,
    type InferenceSummaryV2Params as InferenceSummaryV2Params,
    type InferenceTimeseriesGroupsV2Params as InferenceTimeseriesGroupsV2Params,
  };

  export {
    Bots as Bots,
    BaseBots as BaseBots,
    type BotSummaryV2Response as BotSummaryV2Response,
    type BotTimeseriesResponse as BotTimeseriesResponse,
    type BotTimeseriesGroupsResponse as BotTimeseriesGroupsResponse,
    type BotSummaryV2Params as BotSummaryV2Params,
    type BotTimeseriesParams as BotTimeseriesParams,
    type BotTimeseriesGroupsParams as BotTimeseriesGroupsParams,
  };

  export {
    TimeseriesGroups as TimeseriesGroups,
    BaseTimeseriesGroups as BaseTimeseriesGroups,
    type TimeseriesGroupSummaryResponse as TimeseriesGroupSummaryResponse,
    type TimeseriesGroupTimeseriesResponse as TimeseriesGroupTimeseriesResponse,
    type TimeseriesGroupTimeseriesGroupsResponse as TimeseriesGroupTimeseriesGroupsResponse,
    type TimeseriesGroupUserAgentResponse as TimeseriesGroupUserAgentResponse,
    type TimeseriesGroupSummaryParams as TimeseriesGroupSummaryParams,
    type TimeseriesGroupTimeseriesParams as TimeseriesGroupTimeseriesParams,
    type TimeseriesGroupTimeseriesGroupsParams as TimeseriesGroupTimeseriesGroupsParams,
    type TimeseriesGroupUserAgentParams as TimeseriesGroupUserAgentParams,
  };

  export {
    MarkdownForAgents as MarkdownForAgents,
    BaseMarkdownForAgents as BaseMarkdownForAgents,
    type MarkdownForAgentSummaryResponse as MarkdownForAgentSummaryResponse,
    type MarkdownForAgentTimeseriesResponse as MarkdownForAgentTimeseriesResponse,
    type MarkdownForAgentSummaryParams as MarkdownForAgentSummaryParams,
    type MarkdownForAgentTimeseriesParams as MarkdownForAgentTimeseriesParams,
  };
}
