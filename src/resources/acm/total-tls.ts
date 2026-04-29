// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseTotalTLS extends APIResource {
  static override readonly _key: readonly ['acm', 'totalTLS'] = Object.freeze(['acm', 'totalTLS'] as const);
}
export class TotalTLS extends BaseTotalTLS {}
