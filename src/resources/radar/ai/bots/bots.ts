// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SummaryAPI from './summary';
import { BaseSummary, Summary } from './summary';

export class BaseBots extends APIResource {
  static override readonly _key: readonly ['radar', 'ai', 'bots'] = Object.freeze([
    'radar',
    'ai',
    'bots',
  ] as const);
}
export class Bots extends BaseBots {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
}

Bots.Summary = Summary;
Bots.BaseSummary = BaseSummary;

export declare namespace Bots {
  export { Summary as Summary, BaseSummary as BaseSummary };
}
