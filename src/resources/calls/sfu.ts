// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseSFU extends APIResource {
  static override readonly _key: readonly ['calls', 'sfu'] = Object.freeze(['calls', 'sfu'] as const);
}
export class SFU extends BaseSFU {}
