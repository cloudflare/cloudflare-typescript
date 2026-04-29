// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseWatermarks extends APIResource {
  static override readonly _key: readonly ['stream', 'watermarks'] = Object.freeze([
    'stream',
    'watermarks',
  ] as const);
}
export class Watermarks extends BaseWatermarks {}
