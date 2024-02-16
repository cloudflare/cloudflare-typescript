// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FullsAPI from 'cloudflare/resources/mnms/configs/fulls';

export class Fulls extends APIResource {
  /**
   * Lists default sampling, router IPs, and rules for account.
   */
  magicNetworkMonitoringConfigurationListRulesAndAccountConfiguration(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FullMagicNetworkMonitoringConfigurationListRulesAndAccountConfigurationResponse> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/mnm/config/full`, options) as Core.APIPromise<{
        result: FullMagicNetworkMonitoringConfigurationListRulesAndAccountConfigurationResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface FullMagicNetworkMonitoringConfigurationListRulesAndAccountConfigurationResponse {
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

export namespace Fulls {
  export import FullMagicNetworkMonitoringConfigurationListRulesAndAccountConfigurationResponse = FullsAPI.FullMagicNetworkMonitoringConfigurationListRulesAndAccountConfigurationResponse;
}
