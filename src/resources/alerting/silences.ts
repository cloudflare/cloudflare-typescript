// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseSilences extends APIResource {
  static override readonly _key: readonly ['alerting', 'silences'] = Object.freeze([
    'alerting',
    'silences',
  ] as const);
}
export class Silences extends BaseSilences {}
