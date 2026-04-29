// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseDNS extends APIResource {
  static override readonly _key: readonly ['intel', 'dns'] = Object.freeze(['intel', 'dns'] as const);
}
export class DNS extends BaseDNS {}
