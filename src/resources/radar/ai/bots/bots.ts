// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as SummaryAPI from './summary';

export class Bots extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
}

export namespace Bots {
  export import Summary = SummaryAPI.Summary;
  export import SummaryUserAgentResponse = SummaryAPI.SummaryUserAgentResponse;
  export import SummaryUserAgentParams = SummaryAPI.SummaryUserAgentParams;
}
