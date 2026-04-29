// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BasePDF extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'pdf'] = Object.freeze([
    'browserRendering',
    'pdf',
  ] as const);
}
export class PDF extends BasePDF {}
