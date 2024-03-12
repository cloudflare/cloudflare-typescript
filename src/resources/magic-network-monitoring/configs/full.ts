// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/magic-network-monitoring/configs/configs';

export class Full extends APIResource {
  /**
   * Lists default sampling, router IPs, and rules for account.
   */
  get(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigsAPI.MagicVisibilityMNMConfig> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/mnm/config/full`, options) as Core.APIPromise<{
        result: ConfigsAPI.MagicVisibilityMNMConfig;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
