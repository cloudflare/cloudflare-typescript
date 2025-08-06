// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as SummaryAPI from './summary';
import { Summary } from './summary';

export class Bots extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
}

Bots.Summary = Summary;

export declare namespace Bots {
  export { Summary as Summary };
}
