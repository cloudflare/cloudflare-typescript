// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AuditSSHSettingsAPI from 'cloudflare/resources/zero-trust/gateway/audit-ssh-settings';

export class AuditSSHSettings extends APIResource {
  /**
   * Updates Zero Trust Audit SSH settings.
   */
  update(
    params: AuditSSHSettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustGatewaySettings> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/gateway/audit_ssh_settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZeroTrustGatewaySettings }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get all Zero Trust Audit SSH settings for an account.
   */
  get(
    params: AuditSSHSettingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustGatewaySettings> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/gateway/audit_ssh_settings`, options) as Core.APIPromise<{
        result: ZeroTrustGatewaySettings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ZeroTrustGatewaySettings {
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
  export import ZeroTrustGatewaySettings = AuditSSHSettingsAPI.ZeroTrustGatewaySettings;
  export import AuditSSHSettingUpdateParams = AuditSSHSettingsAPI.AuditSSHSettingUpdateParams;
  export import AuditSSHSettingGetParams = AuditSSHSettingsAPI.AuditSSHSettingGetParams;
}
