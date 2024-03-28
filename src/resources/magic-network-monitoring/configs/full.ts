// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FullAPI from 'cloudflare/resources/magic-network-monitoring/configs/full';
import * as ConfigsAPI from 'cloudflare/resources/magic-network-monitoring/configs/configs';

export class Full extends APIResource {
  /**
   * Lists default sampling, router IPs, and rules for account.
   */
  get(
    params: FullGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigsAPI.MagicNetworkMonitoringConfig> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/mnm/config/full`, options) as Core.APIPromise<{
        result: ConfigsAPI.MagicNetworkMonitoringConfig;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface FullGetParams {
  account_id: string;
}

export namespace Full {
  export import FullGetParams = FullAPI.FullGetParams;
}
