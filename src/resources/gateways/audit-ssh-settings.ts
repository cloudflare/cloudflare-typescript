// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AuditSSHSettingsAPI from 'cloudflare/resources/gateways/audit-ssh-settings';

export class AuditSSHSettings extends APIResource {
  /**
   * Get all Zero Trust Audit SSH settings for an account.
   */
  get(accountId: unknown, options?: Core.RequestOptions): Core.APIPromise<AuditSSHSettingGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/gateway/audit_ssh_settings`, options) as Core.APIPromise<{
        result: AuditSSHSettingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates Zero Trust Audit SSH settings.
   */
  replace(
    accountId: unknown,
    body: AuditSSHSettingReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuditSSHSettingReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountId}/gateway/audit_ssh_settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AuditSSHSettingReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
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

export interface AuditSSHSettingReplaceResponse {
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

export interface AuditSSHSettingReplaceParams {
  /**
   * SSH encryption public key
   */
  public_key: string;

  /**
   * Seed ID
   */
  seed_id?: string;
}

export namespace AuditSSHSettings {
  export import AuditSSHSettingGetResponse = AuditSSHSettingsAPI.AuditSSHSettingGetResponse;
  export import AuditSSHSettingReplaceResponse = AuditSSHSettingsAPI.AuditSSHSettingReplaceResponse;
  export import AuditSSHSettingReplaceParams = AuditSSHSettingsAPI.AuditSSHSettingReplaceParams;
}
