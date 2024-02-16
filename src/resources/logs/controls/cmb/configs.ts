// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/logs/controls/cmb/configs';

export class Configs extends APIResource {
  /**
   * Deletes CMB config.
   */
  delete(accountId: string, options?: Core.RequestOptions): Core.APIPromise<ConfigDeleteResponse | null> {
    return (
      this._client.delete(`/accounts/${accountId}/logs/control/cmb/config`, options) as Core.APIPromise<{
        result: ConfigDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets CMB config.
   */
  getAccountsAccountIdentifierLogsControlCmbConfig(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/logs/control/cmb/config`, options) as Core.APIPromise<{
        result: ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates CMB config.
   */
  putAccountsAccountIdentifierLogsControlCmbConfig(
    accountId: string,
    body: ConfigPutAccountsAccountIdentifierLogsControlCmbConfigParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse | null> {
    return (
      this._client.post(`/accounts/${accountId}/logs/control/cmb/config`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ConfigDeleteResponse = unknown | Array<unknown> | string;

export interface ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse {
  /**
   * Comma-separated list of regions.
   */
  regions?: string;
}

export interface ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse {
  /**
   * Comma-separated list of regions.
   */
  regions?: string;
}

export interface ConfigPutAccountsAccountIdentifierLogsControlCmbConfigParams {
  /**
   * Comma-separated list of regions.
   */
  regions?: string;
}

export namespace Configs {
  export import ConfigDeleteResponse = ConfigsAPI.ConfigDeleteResponse;
  export import ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse = ConfigsAPI.ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse;
  export import ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse = ConfigsAPI.ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse;
  export import ConfigPutAccountsAccountIdentifierLogsControlCmbConfigParams = ConfigsAPI.ConfigPutAccountsAccountIdentifierLogsControlCmbConfigParams;
}
