// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseSummaries extends APIResource {
  static override readonly _key: readonly ['spectrum', 'analytics', 'events', 'summaries'] = Object.freeze([
    'spectrum',
    'analytics',
    'events',
    'summaries',
  ] as const);
}
export class Summaries extends BaseSummaries {}
