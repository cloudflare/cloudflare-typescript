// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Full extends APIResource {
  /**
   * Lists default sampling, router IPs, warp devices, and rules for account.
   */
  get(params: FullGetParams, options?: Core.RequestOptions): Core.APIPromise<FullGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/mnm/config/full`, options) as Core.APIPromise<{
        result: FullGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface FullGetResponse {
  /**
   * Fallback sampling rate of flow messages being sent in packets per second. This
   * should match the packet sampling rate configured on the router.
   */
  default_sampling: number;

  /**
   * The account name.
   */
  name: string;

  router_ips: Array<string>;

  warp_devices: Array<FullGetResponse.WARPDevice>;
}

export namespace FullGetResponse {
  /**
   * Object representing a warp device with an ID and name.
   */
  export interface WARPDevice {
    /**
     * Unique identifier for the warp device.
     */
    id: string;

    /**
     * Name of the warp device.
     */
    name: string;

    /**
     * IPv4 CIDR of the router sourcing flow data associated with this warp device.
     * Only /32 addresses are currently supported.
     */
    router_ip: string;
  }
}

export interface FullGetParams {
  account_id: string;
}

export declare namespace Full {
  export { type FullGetResponse as FullGetResponse, type FullGetParams as FullGetParams };
}
