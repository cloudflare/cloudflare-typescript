// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseAnalytics extends APIResource {
  static override readonly _key: readonly ['realtimeKit', 'analytics'] = Object.freeze([
    'realtimeKit',
    'analytics',
  ] as const);
}
export class Analytics extends BaseAnalytics {}
