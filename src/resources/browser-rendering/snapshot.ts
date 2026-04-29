// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseSnapshot extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'snapshot'] = Object.freeze([
    'browserRendering',
    'snapshot',
  ] as const);
}
export class Snapshot extends BaseSnapshot {}
