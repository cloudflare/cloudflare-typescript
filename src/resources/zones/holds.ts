// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseHolds extends APIResource {
  static override readonly _key: readonly ['zones', 'holds'] = Object.freeze(['zones', 'holds'] as const);
}
export class Holds extends BaseHolds {}
