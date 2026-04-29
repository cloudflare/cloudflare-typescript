// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseUsage extends APIResource {
  static override readonly _key: readonly ['billing', 'usage'] = Object.freeze(['billing', 'usage'] as const);
}
export class Usage extends BaseUsage {}
