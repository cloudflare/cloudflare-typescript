// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseConfigs extends APIResource {
  static override readonly _key: readonly ['zaraz', 'history', 'configs'] = Object.freeze([
    'zaraz',
    'history',
    'configs',
  ] as const);
}
export class Configs extends BaseConfigs {}
