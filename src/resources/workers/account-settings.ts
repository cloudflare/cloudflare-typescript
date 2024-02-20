// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AccountSettingsAPI from 'cloudflare/resources/workers/account-settings';

export class AccountSettings extends APIResource {
  /**
   * Creates Worker account settings for an account.
   */
  update(
    accountId: string,
    body: AccountSettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountSettingUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/workers/account-settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AccountSettingUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

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
}

export interface AccountSettingUpdateResponse {
  default_usage_model?: unknown;

  green_compute?: unknown;
}

export interface AccountSettingGetResponse {
  default_usage_model?: unknown;

  green_compute?: unknown;
}

export type AccountSettingUpdateParams = unknown;

export namespace AccountSettings {
  export import AccountSettingUpdateResponse = AccountSettingsAPI.AccountSettingUpdateResponse;
  export import AccountSettingGetResponse = AccountSettingsAPI.AccountSettingGetResponse;
  export import AccountSettingUpdateParams = AccountSettingsAPI.AccountSettingUpdateParams;
}
