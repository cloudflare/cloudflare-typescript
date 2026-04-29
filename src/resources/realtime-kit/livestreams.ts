// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseLivestreams extends APIResource {
  static override readonly _key: readonly ['realtimeKit', 'livestreams'] = Object.freeze([
    'realtimeKit',
    'livestreams',
  ] as const);
}
export class Livestreams extends BaseLivestreams {}
