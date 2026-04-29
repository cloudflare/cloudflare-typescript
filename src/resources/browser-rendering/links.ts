// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseLinks extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'links'] = Object.freeze([
    'browserRendering',
    'links',
  ] as const);
}
export class Links extends BaseLinks {}
