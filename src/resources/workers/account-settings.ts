// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AccountSettingsAPI from 'cloudflare/resources/workers/account-settings';

export class AccountSettings extends APIResource {
  /**
   * Creates Worker account settings for an account.
   */
  workerAccountSettingsCreateWorkerAccountSettings(
    accountId: string,
    body: AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse> {
    return (
      this._client.put(`/accounts/${accountId}/workers/account-settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{
        result: AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches Worker account settings for an account.
   */
  workerAccountSettingsFetchWorkerAccountSettings(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse> {
    return (
      this._client.get(`/accounts/${accountId}/workers/account-settings`, options) as Core.APIPromise<{
        result: AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse {
  default_usage_model?: unknown;

  green_compute?: unknown;
}

export interface AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse {
  default_usage_model?: unknown;

  green_compute?: unknown;
}

export type AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsParams = unknown;

export namespace AccountSettings {
  export import AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse = AccountSettingsAPI.AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse;
  export import AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse = AccountSettingsAPI.AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse;
  export import AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsParams = AccountSettingsAPI.AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsParams;
}
