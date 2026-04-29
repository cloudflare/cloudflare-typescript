// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseActiveSession extends APIResource {
  static override readonly _key: readonly ['realtimeKit', 'activeSession'] = Object.freeze([
    'realtimeKit',
    'activeSession',
  ] as const);
}
export class ActiveSession extends BaseActiveSession {}
