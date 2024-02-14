// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AuditSSHSettingsAPI from 'cloudflare/resources/gateway/audit-ssh-settings';

export class Gateway extends APIResource {
  auditSSHSettings: AuditSSHSettingsAPI.AuditSSHSettings = new AuditSSHSettingsAPI.AuditSSHSettings(
    this._client,
  );
}

export namespace Gateway {
  export import AuditSSHSettings = AuditSSHSettingsAPI.AuditSSHSettings;
  export import AuditSSHSettingRetrieveResponse = AuditSSHSettingsAPI.AuditSSHSettingRetrieveResponse;
  export import AuditSSHSettingUpdateResponse = AuditSSHSettingsAPI.AuditSSHSettingUpdateResponse;
  export import AuditSSHSettingUpdateParams = AuditSSHSettingsAPI.AuditSSHSettingUpdateParams;
}
