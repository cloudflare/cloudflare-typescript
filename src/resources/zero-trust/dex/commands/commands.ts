// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DevicesAPI from './devices';
import { BaseDevices, Devices } from './devices';
import * as DownloadsAPI from './downloads';
import { BaseDownloads, Downloads } from './downloads';
import * as QuotaAPI from './quota';
import { BaseQuota, Quota } from './quota';

export class BaseCommands extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dex', 'commands'] = Object.freeze([
    'zeroTrust',
    'dex',
    'commands',
  ] as const);
}
export class Commands extends BaseCommands {
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);
  quota: QuotaAPI.Quota = new QuotaAPI.Quota(this._client);
}

Commands.Devices = Devices;
Commands.BaseDevices = BaseDevices;
Commands.Downloads = Downloads;
Commands.BaseDownloads = BaseDownloads;
Commands.Quota = Quota;
Commands.BaseQuota = BaseQuota;

export declare namespace Commands {
  export { Devices as Devices, BaseDevices as BaseDevices };

  export { Downloads as Downloads, BaseDownloads as BaseDownloads };

  export { Quota as Quota, BaseQuota as BaseQuota };
}
