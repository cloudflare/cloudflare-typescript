// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BasePreviews extends APIResource {
  static override readonly _key: readonly ['loadBalancers', 'previews'] = Object.freeze([
    'loadBalancers',
    'previews',
  ] as const);
}
export class Previews extends BasePreviews {}
