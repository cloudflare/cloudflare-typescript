// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as BotsAPI from './bots';
import {
  BotSummaryParams,
  BotSummaryResponse,
  BotTimeseriesGroupsParams,
  BotTimeseriesGroupsResponse,
  BotTimeseriesParams,
  BotTimeseriesResponse,
  Bots,
} from './bots';
import * as InferenceAPI from './inference/inference';
import { Inference } from './inference/inference';

export class AI extends APIResource {
  inference: InferenceAPI.Inference = new InferenceAPI.Inference(this._client);
  bots: BotsAPI.Bots = new BotsAPI.Bots(this._client);
}

AI.Inference = Inference;
AI.Bots = Bots;

export declare namespace AI {
  export { Inference as Inference };

  export {
    Bots as Bots,
    type BotSummaryResponse as BotSummaryResponse,
    type BotTimeseriesResponse as BotTimeseriesResponse,
    type BotTimeseriesGroupsResponse as BotTimeseriesGroupsResponse,
    type BotSummaryParams as BotSummaryParams,
    type BotTimeseriesParams as BotTimeseriesParams,
    type BotTimeseriesGroupsParams as BotTimeseriesGroupsParams,
  };
}
