// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseRetention extends APIResource {
  static override readonly _key: readonly ['logs', 'control', 'retention'] = Object.freeze([
    'logs',
    'control',
    'retention',
  ] as const);
}
export class Retention extends BaseRetention {}
