// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FullAPI from './full';
import { BaseFull, Full } from './full';

export class BaseConfigs extends APIResource {
  static override readonly _key: readonly ['magicNetworkMonitoring', 'configs'] = Object.freeze([
    'magicNetworkMonitoring',
    'configs',
  ] as const);
}
export class Configs extends BaseConfigs {
  full: FullAPI.Full = new FullAPI.Full(this._client);
}

Configs.Full = Full;
Configs.BaseFull = BaseFull;

export declare namespace Configs {
  export { Full as Full, BaseFull as BaseFull };
}
