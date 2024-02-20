// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AccountSettingsAPI from 'cloudflare/resources/workers/account-settings';

export class AccountSettings extends APIResource {
  /**
   * Fetches Worker account settings for an account.
   */
  get(accountId: string, options?: Core.RequestOptions): Core.APIPromise<AccountSettingGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/workers/account-settings`, options) as Core.APIPromise<{
        result: AccountSettingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates Worker account settings for an account.
   */
  replace(
    accountId: string,
    body: AccountSettingReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountSettingReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountId}/workers/account-settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AccountSettingReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AccountSettingGetResponse {
  default_usage_model?: unknown;

  green_compute?: unknown;
}

export interface AccountSettingReplaceResponse {
  default_usage_model?: unknown;

  green_compute?: unknown;
}

export type AccountSettingReplaceParams = unknown;

export namespace AccountSettings {
  export import AccountSettingGetResponse = AccountSettingsAPI.AccountSettingGetResponse;
  export import AccountSettingReplaceResponse = AccountSettingsAPI.AccountSettingReplaceResponse;
  export import AccountSettingReplaceParams = AccountSettingsAPI.AccountSettingReplaceParams;
}
