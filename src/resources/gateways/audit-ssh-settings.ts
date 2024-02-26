// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AuditSSHSettingsAPI from 'cloudflare/resources/gateways/audit-ssh-settings';

export class AuditSSHSettings extends APIResource {
  /**
   * Updates Zero Trust Audit SSH settings.
   */
  update(
    params: AuditSSHSettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuditSSHSettingUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/gateway/audit_ssh_settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AuditSSHSettingUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get all Zero Trust Audit SSH settings for an account.
   */
  get(
    params: AuditSSHSettingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuditSSHSettingGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/gateway/audit_ssh_settings`, options) as Core.APIPromise<{
        result: AuditSSHSettingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AuditSSHSettingUpdateResponse {
  created_at?: string;

  /**
   * SSH encryption public key
   */
  public_key?: string;

  /**
   * Seed ID
   */
  seed_id?: string;

  updated_at?: string;
}

export interface AuditSSHSettingGetResponse {
  created_at?: string;

  /**
   * SSH encryption public key
   */
  public_key?: string;

  /**
   * Seed ID
   */
  seed_id?: string;

  updated_at?: string;
}

export interface AuditSSHSettingUpdateParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param: SSH encryption public key
   */
  public_key: string;

  /**
   * Body param: Seed ID
   */
  seed_id?: string;
}

export interface AuditSSHSettingGetParams {
  account_id: unknown;
}

export namespace AuditSSHSettings {
  export import AuditSSHSettingUpdateResponse = AuditSSHSettingsAPI.AuditSSHSettingUpdateResponse;
  export import AuditSSHSettingGetResponse = AuditSSHSettingsAPI.AuditSSHSettingGetResponse;
  export import AuditSSHSettingUpdateParams = AuditSSHSettingsAPI.AuditSSHSettingUpdateParams;
  export import AuditSSHSettingGetParams = AuditSSHSettingsAPI.AuditSSHSettingGetParams;
}
