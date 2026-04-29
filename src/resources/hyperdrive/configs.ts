// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseConfigs extends APIResource {
  static override readonly _key: readonly ['hyperdrive', 'configs'] = Object.freeze([
    'hyperdrive',
    'configs',
  ] as const);
}
export class Configs extends BaseConfigs {}
