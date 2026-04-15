// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as GlobalWARPOverrideAPI from './global-warp-override';
import {
  BaseGlobalWARPOverride,
  GlobalWARPOverride,
  GlobalWARPOverrideCreateParams,
  GlobalWARPOverrideCreateResponse,
  GlobalWARPOverrideGetParams,
  GlobalWARPOverrideGetResponse,
} from './global-warp-override';

export class BaseResilience extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'resilience'] = Object.freeze([
    'zeroTrust',
    'devices',
    'resilience',
  ] as const);
}
export class Resilience extends BaseResilience {
  globalWARPOverride: GlobalWARPOverrideAPI.GlobalWARPOverride = new GlobalWARPOverrideAPI.GlobalWARPOverride(
    this._client,
  );
}

Resilience.GlobalWARPOverride = GlobalWARPOverride;
Resilience.BaseGlobalWARPOverride = BaseGlobalWARPOverride;

export declare namespace Resilience {
  export {
    GlobalWARPOverride as GlobalWARPOverride,
    BaseGlobalWARPOverride as BaseGlobalWARPOverride,
    type GlobalWARPOverrideCreateResponse as GlobalWARPOverrideCreateResponse,
    type GlobalWARPOverrideGetResponse as GlobalWARPOverrideGetResponse,
    type GlobalWARPOverrideCreateParams as GlobalWARPOverrideCreateParams,
    type GlobalWARPOverrideGetParams as GlobalWARPOverrideGetParams,
  };
}
