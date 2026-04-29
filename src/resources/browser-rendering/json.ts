// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseJson extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'json'] = Object.freeze([
    'browserRendering',
    'json',
  ] as const);
}
export class Json extends BaseJson {}
