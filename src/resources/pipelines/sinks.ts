// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseSinks extends APIResource {
  static override readonly _key: readonly ['pipelines', 'sinks'] = Object.freeze([
    'pipelines',
    'sinks',
  ] as const);
}
export class Sinks extends BaseSinks {}
