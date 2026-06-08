// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ISPsAPI from './isps';
import { BaseISPs, ISPListParams, ISPs, ISPsV4PagePagination } from './isps';

export class BaseDevices extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dex', 'devices'] = Object.freeze([
    'zeroTrust',
    'dex',
    'devices',
  ] as const);
}
export class Devices extends BaseDevices {
  isps: ISPsAPI.ISPs = new ISPsAPI.ISPs(this._client);
}

Devices.BaseISPs = BaseISPs;

export declare namespace Devices {
  export {
    type ISPs as ISPs,
    BaseISPs as BaseISPs,
    type ISPsV4PagePagination as ISPsV4PagePagination,
    type ISPListParams as ISPListParams,
  };
}
