// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BasePlans extends APIResource {
  static override readonly _key: readonly ['zones', 'plans'] = Object.freeze(['zones', 'plans'] as const);
}
export class Plans extends BasePlans {}
