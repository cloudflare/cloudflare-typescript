// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseMeetings extends APIResource {
  static override readonly _key: readonly ['realtimeKit', 'meetings'] = Object.freeze([
    'realtimeKit',
    'meetings',
  ] as const);
}
export class Meetings extends BaseMeetings {}
