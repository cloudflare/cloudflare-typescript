// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ISPsAPI from './isps';
import { ISPListParams, ISPs, ISPsV4PagePagination } from './isps';

export class Devices extends APIResource {
  isps: ISPsAPI.ISPs = new ISPsAPI.ISPs(this._client);
}

Devices.ISPsV4PagePagination = ISPsV4PagePagination;

export declare namespace Devices {
  export {
    type ISPs as ISPs,
    ISPsV4PagePagination as ISPsV4PagePagination,
    type ISPListParams as ISPListParams,
  };
}
