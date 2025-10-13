// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import {
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
  ToMarkdown,
  ToMarkdownCreateParams,
  ToMarkdownCreateResponse,
  ToMarkdownCreateResponsesSinglePage,
} from './to-markdown';
import * as BotsAPI from './bots/bots';
import {
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
  Inference,
  InferenceSummaryV2Params,
  InferenceSummaryV2Response,
  InferenceTimeseriesGroupsV2Params,
  InferenceTimeseriesGroupsV2Response,
} from './inference/inference';

export class AI extends APIResource {
  toMarkdown: ToMarkdownAPI.ToMarkdown = new ToMarkdownAPI.ToMarkdown(this._client);
  inference: InferenceAPI.Inference = new InferenceAPI.Inference(this._client);
  bots: BotsAPI.Bots = new BotsAPI.Bots(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

AI.ToMarkdown = ToMarkdown;
AI.ToMarkdownCreateResponsesSinglePage = ToMarkdownCreateResponsesSinglePage;
AI.Inference = Inference;
AI.Bots = Bots;
AI.TimeseriesGroups = TimeseriesGroups;

export declare namespace AI {
  export {
    ToMarkdown as ToMarkdown,
    type ToMarkdownCreateResponse as ToMarkdownCreateResponse,
    ToMarkdownCreateResponsesSinglePage as ToMarkdownCreateResponsesSinglePage,
    type ToMarkdownCreateParams as ToMarkdownCreateParams,
  };

  export {
    Inference as Inference,
    type InferenceSummaryV2Response as InferenceSummaryV2Response,
    type InferenceTimeseriesGroupsV2Response as InferenceTimeseriesGroupsV2Response,
    type InferenceSummaryV2Params as InferenceSummaryV2Params,
    type InferenceTimeseriesGroupsV2Params as InferenceTimeseriesGroupsV2Params,
  };

  export {
    Bots as Bots,
    type BotSummaryV2Response as BotSummaryV2Response,
    type BotTimeseriesResponse as BotTimeseriesResponse,
    type BotTimeseriesGroupsResponse as BotTimeseriesGroupsResponse,
    type BotSummaryV2Params as BotSummaryV2Params,
    type BotTimeseriesParams as BotTimeseriesParams,
    type BotTimeseriesGroupsParams as BotTimeseriesGroupsParams,
  };

  export {
    TimeseriesGroups as TimeseriesGroups,
    type TimeseriesGroupSummaryResponse as TimeseriesGroupSummaryResponse,
    type TimeseriesGroupTimeseriesResponse as TimeseriesGroupTimeseriesResponse,
    type TimeseriesGroupTimeseriesGroupsResponse as TimeseriesGroupTimeseriesGroupsResponse,
    type TimeseriesGroupUserAgentResponse as TimeseriesGroupUserAgentResponse,
    type TimeseriesGroupSummaryParams as TimeseriesGroupSummaryParams,
    type TimeseriesGroupTimeseriesParams as TimeseriesGroupTimeseriesParams,
    type TimeseriesGroupTimeseriesGroupsParams as TimeseriesGroupTimeseriesGroupsParams,
    type TimeseriesGroupUserAgentParams as TimeseriesGroupUserAgentParams,
  };
}
