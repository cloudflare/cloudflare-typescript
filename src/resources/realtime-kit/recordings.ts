// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseRecordings extends APIResource {
  static override readonly _key: readonly ['realtimeKit', 'recordings'] = Object.freeze([
    'realtimeKit',
    'recordings',
  ] as const);
}
export class Recordings extends BaseRecordings {}
