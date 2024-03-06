// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FullAPI from 'cloudflare/resources/magic-network-monitoring/configs/full';

export class Full extends APIResource {
  /**
   * Lists default sampling, router IPs, and rules for account.
   */
  get(accountIdentifier: unknown, options?: Core.RequestOptions): Core.APIPromise<FullGetResponse> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/mnm/config/full`, options) as Core.APIPromise<{
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
}

export namespace Full {
  export import FullGetResponse = FullAPI.FullGetResponse;
}
