// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AuditSSHSettingsAPI from 'cloudflare/resources/gateway/audit-ssh-settings';

export class AuditSSHSettings extends APIResource {
  /**
   * Get all Zero Trust Audit SSH settings for an account.
   */
  retrieve(
    accountId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuditSSHSettingRetrieveResponse> {
    return (
      this._client.get(`/accounts/${accountId}/gateway/audit_ssh_settings`, options) as Core.APIPromise<{
        result: AuditSSHSettingRetrieveResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates Zero Trust Audit SSH settings.
   */
  update(
    accountId: unknown,
    body: AuditSSHSettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuditSSHSettingUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/gateway/audit_ssh_settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AuditSSHSettingUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AuditSSHSettingRetrieveResponse {
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

export interface AuditSSHSettingUpdateParams {
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
  export import AuditSSHSettingRetrieveResponse = AuditSSHSettingsAPI.AuditSSHSettingRetrieveResponse;
  export import AuditSSHSettingUpdateResponse = AuditSSHSettingsAPI.AuditSSHSettingUpdateResponse;
  export import AuditSSHSettingUpdateParams = AuditSSHSettingsAPI.AuditSSHSettingUpdateParams;
}
