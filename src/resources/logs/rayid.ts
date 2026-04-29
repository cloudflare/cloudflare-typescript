// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseRayID extends APIResource {
  static override readonly _key: readonly ['logs', 'RayID'] = Object.freeze(['logs', 'RayID'] as const);
}
export class RayID extends BaseRayID {}
