// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AuditSSHSettingsAPI from './audit-ssh-settings';

export class AuditSSHSettings extends APIResource {
  /**
   * Updates Zero Trust Audit SSH and SSH with Access for Infrastructure settings for
   * an account.
   */
  update(
    params: AuditSSHSettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GatewaySettings> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/gateway/audit_ssh_settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: GatewaySettings }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets all Zero Trust Audit SSH and SSH with Access for Infrastructure settings
   * for an account.
   */
  get(params: AuditSSHSettingGetParams, options?: Core.RequestOptions): Core.APIPromise<GatewaySettings> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/gateway/audit_ssh_settings`, options) as Core.APIPromise<{
        result: GatewaySettings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface GatewaySettings {
  created_at?: string;

  /**
   * Base64 encoded HPKE public key used to encrypt all your ssh session logs.
   * https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/use-cases/ssh/ssh-infrastructure-access/#enable-ssh-command-logging
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
  account_id: string;

  /**
   * Body param: Base64 encoded HPKE public key used to encrypt all your ssh session
   * logs.
   * https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/use-cases/ssh/ssh-infrastructure-access/#enable-ssh-command-logging
   */
  public_key: string;
}

export interface AuditSSHSettingGetParams {
  account_id: string;
}

export namespace AuditSSHSettings {
  export import GatewaySettings = AuditSSHSettingsAPI.GatewaySettings;
  export import AuditSSHSettingUpdateParams = AuditSSHSettingsAPI.AuditSSHSettingUpdateParams;
  export import AuditSSHSettingGetParams = AuditSSHSettingsAPI.AuditSSHSettingGetParams;
}
