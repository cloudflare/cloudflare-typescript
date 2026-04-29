// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseSessions extends APIResource {
  static override readonly _key: readonly ['realtimeKit', 'sessions'] = Object.freeze([
    'realtimeKit',
    'sessions',
  ] as const);
}
export class Sessions extends BaseSessions {}
