// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseContent extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'content'] = Object.freeze([
    'browserRendering',
    'content',
  ] as const);
}
export class Content extends BaseContent {}
