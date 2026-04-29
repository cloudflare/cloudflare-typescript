// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseDynamicRouting extends APIResource {
  static override readonly _key: readonly ['aiGateway', 'dynamicRouting'] = Object.freeze([
    'aiGateway',
    'dynamicRouting',
  ] as const);
}
export class DynamicRouting extends BaseDynamicRouting {}
