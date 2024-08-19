// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as StatusAPI from './status';
import * as OutgoingAPI from './outgoing';

export class Status extends APIResource {
  /**
   * Get primary zone transfer status.
   */
  get(params: StatusGetParams, options?: Core.RequestOptions): Core.APIPromise<OutgoingAPI.EnableTransfer> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/secondary_dns/outgoing/status`, options) as Core.APIPromise<{
        result: OutgoingAPI.EnableTransfer;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface StatusGetParams {
  zone_id: string;
}

export namespace Status {
  export import StatusGetParams = StatusAPI.StatusGetParams;
}
