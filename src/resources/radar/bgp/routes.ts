// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseRoutes extends APIResource {
  static override readonly _key: readonly ['radar', 'bgp', 'routes'] = Object.freeze([
    'radar',
    'bgp',
    'routes',
  ] as const);
}
export class Routes extends BaseRoutes {}
