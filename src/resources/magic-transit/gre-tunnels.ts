// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseGRETunnels extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'greTunnels'] = Object.freeze([
    'magicTransit',
    'greTunnels',
  ] as const);
}
export class GRETunnels extends BaseGRETunnels {}
