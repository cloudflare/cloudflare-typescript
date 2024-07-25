// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as PostureAPI from './posture';
import * as IntegrationsAPI from './integrations';
import { SinglePage } from '../../../../pagination';

export class Posture extends APIResource {
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);

  /**
   * Creates a new device posture rule.
   */
  create(
    params: PostureCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DevicePostureRule | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/devices/posture`, { body, ...options }) as Core.APIPromise<{
        result: DevicePostureRule | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a device posture rule.
   */
  update(
    ruleId: string,
    params: PostureUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DevicePostureRule | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/devices/posture/${ruleId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DevicePostureRule | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches device posture rules for a Zero Trust account.
   */
  list(
    params: PostureListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DevicePostureRulesSinglePage, DevicePostureRule> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/posture`,
      DevicePostureRulesSinglePage,
      options,
    );
  }

  /**
   * Deletes a device posture rule.
   */
  delete(
    ruleId: string,
    params: PostureDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostureDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/devices/posture/${ruleId}`, options) as Core.APIPromise<{
        result: PostureDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single device posture rule.
   */
  get(
    ruleId: string,
    params: PostureGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DevicePostureRule | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/posture/${ruleId}`, options) as Core.APIPromise<{
        result: DevicePostureRule | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DevicePostureRulesSinglePage extends SinglePage<DevicePostureRule> {}

export type CarbonblackInput = string;

export type CarbonblackInputParam = string;

export interface ClientCertificateInput {
  /**
   * UUID of Cloudflare managed certificate.
   */
  certificate_id: string;

  /**
   * Common Name that is protected by the certificate
   */
  cn: string;
}

export interface ClientCertificateInputParam {
  /**
   * UUID of Cloudflare managed certificate.
   */
  certificate_id: string;

  /**
   * Common Name that is protected by the certificate
   */
  cn: string;
}

export interface CrowdstrikeInput {
  /**
   * Posture Integration ID.
   */
  connection_id: string;

  /**
   * For more details on last seen, please refer to the Crowdstrike documentation.
   */
  last_seen?: string;

  /**
   * operator
   */
  operator?: '<' | '<=' | '>' | '>=' | '==';

  /**
   * Os Version
   */
  os?: string;

  /**
   * overall
   */
  overall?: string;

  /**
   * SensorConfig
   */
  sensor_config?: string;

  /**
   * For more details on state, please refer to the Crowdstrike documentation.
   */
  state?: 'online' | 'offline' | 'unknown';

  /**
   * Version
   */
  version?: string;

  /**
   * Version Operator
   */
  versionOperator?: '<' | '<=' | '>' | '>=' | '==';
}

export interface CrowdstrikeInputParam {
  /**
   * Posture Integration ID.
   */
  connection_id: string;

  /**
   * For more details on last seen, please refer to the Crowdstrike documentation.
   */
  last_seen?: string;

  /**
   * operator
   */
  operator?: '<' | '<=' | '>' | '>=' | '==';

  /**
   * Os Version
   */
  os?: string;

  /**
   * overall
   */
  overall?: string;

  /**
   * SensorConfig
   */
  sensor_config?: string;

  /**
   * For more details on state, please refer to the Crowdstrike documentation.
   */
  state?: 'online' | 'offline' | 'unknown';

  /**
   * Version
   */
  version?: string;

  /**
   * Version Operator
   */
  versionOperator?: '<' | '<=' | '>' | '>=' | '==';
}

/**
 * The value to be checked against.
 */
export type DeviceInput =
  | FileInput
  | UniqueClientIDInput
  | DomainJoinedInput
  | OSVersionInput
  | FirewallInput
  | SentineloneInput
  | DeviceInput.TeamsDevicesCarbonblackInputRequest
  | DiskEncryptionInput
  | DeviceInput.TeamsDevicesApplicationInputRequest
  | ClientCertificateInput
  | DeviceInput.TeamsDevicesClientCertificateV2InputRequest
  | WorkspaceOneInput
  | CrowdstrikeInput
  | IntuneInput
  | KolideInput
  | TaniumInput
  | SentineloneS2sInput;

export namespace DeviceInput {
  export interface TeamsDevicesCarbonblackInputRequest {
    /**
     * Operating system
     */
    operating_system: 'windows' | 'linux' | 'mac';

    /**
     * File path.
     */
    path: string;

    /**
     * SHA-256.
     */
    sha256?: string;

    /**
     * Signing certificate thumbprint.
     */
    thumbprint?: string;
  }

  export interface TeamsDevicesApplicationInputRequest {
    /**
     * Operating system
     */
    operating_system: 'windows' | 'linux' | 'mac';

    /**
     * Path for the application.
     */
    path: string;

    /**
     * SHA-256.
     */
    sha256?: string;

    /**
     * Signing certificate thumbprint.
     */
    thumbprint?: string;
  }

  export interface TeamsDevicesClientCertificateV2InputRequest {
    /**
     * UUID of Cloudflare managed certificate.
     */
    certificate_id: string;

    /**
     * Confirm the certificate was not imported from another device. We recommend
     * keeping this enabled unless the certificate was deployed without a private key.
     */
    check_private_key: boolean;

    /**
     * Operating system
     */
    operating_system: 'windows' | 'linux' | 'mac';

    /**
     * Common Name that is protected by the client certificate. This may include one or
     * more variables in the ${ } notation. Only ${serial_number} and ${hostname} are
     * valid variables.
     */
    cn?: string;

    /**
     * List of values indicating purposes for which the certificate public key can be
     * used
     */
    extended_key_usage?: Array<'clientAuth' | 'emailProtection'>;

    locations?: TeamsDevicesClientCertificateV2InputRequest.Locations;
  }

  export namespace TeamsDevicesClientCertificateV2InputRequest {
    export interface Locations {
      /**
       * List of paths to check for client certificate on linux.
       */
      paths?: Array<string>;

      /**
       * List of trust stores to check for client certificate.
       */
      trust_stores?: Array<'system' | 'user'>;
    }
  }
}

/**
 * The value to be checked against.
 */
export type DeviceInputParam =
  | FileInputParam
  | UniqueClientIDInputParam
  | DomainJoinedInputParam
  | OSVersionInputParam
  | FirewallInputParam
  | SentineloneInputParam
  | DeviceInputParam.TeamsDevicesCarbonblackInputRequest
  | DiskEncryptionInputParam
  | DeviceInputParam.TeamsDevicesApplicationInputRequest
  | ClientCertificateInputParam
  | DeviceInputParam.TeamsDevicesClientCertificateV2InputRequest
  | WorkspaceOneInputParam
  | CrowdstrikeInputParam
  | IntuneInputParam
  | KolideInputParam
  | TaniumInputParam
  | SentineloneS2sInputParam;

export namespace DeviceInputParam {
  export interface TeamsDevicesCarbonblackInputRequest {
    /**
     * Operating system
     */
    operating_system: 'windows' | 'linux' | 'mac';

    /**
     * File path.
     */
    path: string;

    /**
     * SHA-256.
     */
    sha256?: string;

    /**
     * Signing certificate thumbprint.
     */
    thumbprint?: string;
  }

  export interface TeamsDevicesApplicationInputRequest {
    /**
     * Operating system
     */
    operating_system: 'windows' | 'linux' | 'mac';

    /**
     * Path for the application.
     */
    path: string;

    /**
     * SHA-256.
     */
    sha256?: string;

    /**
     * Signing certificate thumbprint.
     */
    thumbprint?: string;
  }

  export interface TeamsDevicesClientCertificateV2InputRequest {
    /**
     * UUID of Cloudflare managed certificate.
     */
    certificate_id: string;

    /**
     * Confirm the certificate was not imported from another device. We recommend
     * keeping this enabled unless the certificate was deployed without a private key.
     */
    check_private_key: boolean;

    /**
     * Operating system
     */
    operating_system: 'windows' | 'linux' | 'mac';

    /**
     * Common Name that is protected by the client certificate. This may include one or
     * more variables in the ${ } notation. Only ${serial_number} and ${hostname} are
     * valid variables.
     */
    cn?: string;

    /**
     * List of values indicating purposes for which the certificate public key can be
     * used
     */
    extended_key_usage?: Array<'clientAuth' | 'emailProtection'>;

    locations?: TeamsDevicesClientCertificateV2InputRequest.Locations;
  }

  export namespace TeamsDevicesClientCertificateV2InputRequest {
    export interface Locations {
      /**
       * List of paths to check for client certificate on linux.
       */
      paths?: Array<string>;

      /**
       * List of trust stores to check for client certificate.
       */
      trust_stores?: Array<'system' | 'user'>;
    }
  }
}

export interface DeviceMatch {
  platform?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';
}

export interface DeviceMatchParam {
  platform?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';
}

export interface DevicePostureRule {
  /**
   * API UUID.
   */
  id?: string;

  /**
   * The description of the device posture rule.
   */
  description?: string;

  /**
   * Sets the expiration time for a posture check result. If empty, the result
   * remains valid until it is overwritten by new data from the WARP client.
   */
  expiration?: string;

  /**
   * The value to be checked against.
   */
  input?: DeviceInput;

  /**
   * The conditions that the client must match to run the rule.
   */
  match?: Array<DeviceMatch>;

  /**
   * The name of the device posture rule.
   */
  name?: string;

  /**
   * Polling frequency for the WARP client posture check. Default: `5m` (poll every
   * five minutes). Minimum: `1m`.
   */
  schedule?: string;

  /**
   * The type of device posture rule.
   */
  type?:
    | 'file'
    | 'application'
    | 'tanium'
    | 'gateway'
    | 'warp'
    | 'disk_encryption'
    | 'sentinelone'
    | 'carbonblack'
    | 'firewall'
    | 'os_version'
    | 'domain_joined'
    | 'client_certificate'
    | 'client_certificate_v2'
    | 'unique_client_id'
    | 'kolide'
    | 'tanium_s2s'
    | 'crowdstrike_s2s'
    | 'intune'
    | 'workspace_one'
    | 'sentinelone_s2s';
}

export interface DiskEncryptionInput {
  /**
   * List of volume names to be checked for encryption.
   */
  checkDisks?: Array<CarbonblackInput>;

  /**
   * Whether to check all disks for encryption.
   */
  requireAll?: boolean;
}

export interface DiskEncryptionInputParam {
  /**
   * List of volume names to be checked for encryption.
   */
  checkDisks?: Array<CarbonblackInputParam>;

  /**
   * Whether to check all disks for encryption.
   */
  requireAll?: boolean;
}

export interface DomainJoinedInput {
  /**
   * Operating System
   */
  operating_system: 'windows';

  /**
   * Domain
   */
  domain?: string;
}

export interface DomainJoinedInputParam {
  /**
   * Operating System
   */
  operating_system: 'windows';

  /**
   * Domain
   */
  domain?: string;
}

export interface FileInput {
  /**
   * Operating system
   */
  operating_system: 'windows' | 'linux' | 'mac';

  /**
   * File path.
   */
  path: string;

  /**
   * Whether or not file exists
   */
  exists?: boolean;

  /**
   * SHA-256.
   */
  sha256?: string;

  /**
   * Signing certificate thumbprint.
   */
  thumbprint?: string;
}

export interface FileInputParam {
  /**
   * Operating system
   */
  operating_system: 'windows' | 'linux' | 'mac';

  /**
   * File path.
   */
  path: string;

  /**
   * Whether or not file exists
   */
  exists?: boolean;

  /**
   * SHA-256.
   */
  sha256?: string;

  /**
   * Signing certificate thumbprint.
   */
  thumbprint?: string;
}

export interface FirewallInput {
  /**
   * Enabled
   */
  enabled: boolean;

  /**
   * Operating System
   */
  operating_system: 'windows' | 'mac';
}

export interface FirewallInputParam {
  /**
   * Enabled
   */
  enabled: boolean;

  /**
   * Operating System
   */
  operating_system: 'windows' | 'mac';
}

export interface IntuneInput {
  /**
   * Compliance Status
   */
  compliance_status: 'compliant' | 'noncompliant' | 'unknown' | 'notapplicable' | 'ingraceperiod' | 'error';

  /**
   * Posture Integration ID.
   */
  connection_id: string;
}

export interface IntuneInputParam {
  /**
   * Compliance Status
   */
  compliance_status: 'compliant' | 'noncompliant' | 'unknown' | 'notapplicable' | 'ingraceperiod' | 'error';

  /**
   * Posture Integration ID.
   */
  connection_id: string;
}

export interface KolideInput {
  /**
   * Posture Integration ID.
   */
  connection_id: string;

  /**
   * Count Operator
   */
  countOperator: '<' | '<=' | '>' | '>=' | '==';

  /**
   * The Number of Issues.
   */
  issue_count: string;
}

export interface KolideInputParam {
  /**
   * Posture Integration ID.
   */
  connection_id: string;

  /**
   * Count Operator
   */
  countOperator: '<' | '<=' | '>' | '>=' | '==';

  /**
   * The Number of Issues.
   */
  issue_count: string;
}

export interface OSVersionInput {
  /**
   * Operating System
   */
  operating_system: 'windows';

  /**
   * operator
   */
  operator: '<' | '<=' | '>' | '>=' | '==';

  /**
   * Version of OS
   */
  version: string;

  /**
   * Operating System Distribution Name (linux only)
   */
  os_distro_name?: string;

  /**
   * Version of OS Distribution (linux only)
   */
  os_distro_revision?: string;

  /**
   * Additional version data. For Mac or iOS, the Product Verison Extra. For Linux,
   * the kernel release version. (Mac, iOS, and Linux only)
   */
  os_version_extra?: string;
}

export interface OSVersionInputParam {
  /**
   * Operating System
   */
  operating_system: 'windows';

  /**
   * operator
   */
  operator: '<' | '<=' | '>' | '>=' | '==';

  /**
   * Version of OS
   */
  version: string;

  /**
   * Operating System Distribution Name (linux only)
   */
  os_distro_name?: string;

  /**
   * Version of OS Distribution (linux only)
   */
  os_distro_revision?: string;

  /**
   * Additional version data. For Mac or iOS, the Product Verison Extra. For Linux,
   * the kernel release version. (Mac, iOS, and Linux only)
   */
  os_version_extra?: string;
}

export interface SentineloneInput {
  /**
   * Operating system
   */
  operating_system: 'windows' | 'linux' | 'mac';

  /**
   * File path.
   */
  path: string;

  /**
   * SHA-256.
   */
  sha256?: string;

  /**
   * Signing certificate thumbprint.
   */
  thumbprint?: string;
}

export interface SentineloneInputParam {
  /**
   * Operating system
   */
  operating_system: 'windows' | 'linux' | 'mac';

  /**
   * File path.
   */
  path: string;

  /**
   * SHA-256.
   */
  sha256?: string;

  /**
   * Signing certificate thumbprint.
   */
  thumbprint?: string;
}

export interface SentineloneS2sInput {
  /**
   * Posture Integration ID.
   */
  connection_id: string;

  /**
   * The Number of active threats.
   */
  active_threats?: number;

  /**
   * Whether device is infected.
   */
  infected?: boolean;

  /**
   * Whether device is active.
   */
  is_active?: boolean;

  /**
   * Network status of device.
   */
  network_status?: 'connected' | 'disconnected' | 'disconnecting' | 'connecting';

  /**
   * operator
   */
  operator?: '<' | '<=' | '>' | '>=' | '==';
}

export interface SentineloneS2sInputParam {
  /**
   * Posture Integration ID.
   */
  connection_id: string;

  /**
   * The Number of active threats.
   */
  active_threats?: number;

  /**
   * Whether device is infected.
   */
  infected?: boolean;

  /**
   * Whether device is active.
   */
  is_active?: boolean;

  /**
   * Network status of device.
   */
  network_status?: 'connected' | 'disconnected' | 'disconnecting' | 'connecting';

  /**
   * operator
   */
  operator?: '<' | '<=' | '>' | '>=' | '==';
}

export interface TaniumInput {
  /**
   * Posture Integration ID.
   */
  connection_id: string;

  /**
   * For more details on eid last seen, refer to the Tanium documentation.
   */
  eid_last_seen?: string;

  /**
   * Operator to evaluate risk_level or eid_last_seen.
   */
  operator?: '<' | '<=' | '>' | '>=' | '==';

  /**
   * For more details on risk level, refer to the Tanium documentation.
   */
  risk_level?: 'low' | 'medium' | 'high' | 'critical';

  /**
   * Score Operator
   */
  scoreOperator?: '<' | '<=' | '>' | '>=' | '==';

  /**
   * For more details on total score, refer to the Tanium documentation.
   */
  total_score?: number;
}

export interface TaniumInputParam {
  /**
   * Posture Integration ID.
   */
  connection_id: string;

  /**
   * For more details on eid last seen, refer to the Tanium documentation.
   */
  eid_last_seen?: string;

  /**
   * Operator to evaluate risk_level or eid_last_seen.
   */
  operator?: '<' | '<=' | '>' | '>=' | '==';

  /**
   * For more details on risk level, refer to the Tanium documentation.
   */
  risk_level?: 'low' | 'medium' | 'high' | 'critical';

  /**
   * Score Operator
   */
  scoreOperator?: '<' | '<=' | '>' | '>=' | '==';

  /**
   * For more details on total score, refer to the Tanium documentation.
   */
  total_score?: number;
}

export interface UniqueClientIDInput {
  /**
   * List ID.
   */
  id: string;

  /**
   * Operating System
   */
  operating_system: 'android' | 'ios' | 'chromeos';
}

export interface UniqueClientIDInputParam {
  /**
   * List ID.
   */
  id: string;

  /**
   * Operating System
   */
  operating_system: 'android' | 'ios' | 'chromeos';
}

export interface WorkspaceOneInput {
  /**
   * Compliance Status
   */
  compliance_status: 'compliant' | 'noncompliant' | 'unknown';

  /**
   * Posture Integration ID.
   */
  connection_id: string;
}

export interface WorkspaceOneInputParam {
  /**
   * Compliance Status
   */
  compliance_status: 'compliant' | 'noncompliant' | 'unknown';

  /**
   * Posture Integration ID.
   */
  connection_id: string;
}

export interface PostureDeleteResponse {
  /**
   * API UUID.
   */
  id?: string;
}

export interface PostureCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The name of the device posture rule.
   */
  name: string;

  /**
   * Body param: The type of device posture rule.
   */
  type:
    | 'file'
    | 'application'
    | 'tanium'
    | 'gateway'
    | 'warp'
    | 'disk_encryption'
    | 'sentinelone'
    | 'carbonblack'
    | 'firewall'
    | 'os_version'
    | 'domain_joined'
    | 'client_certificate'
    | 'client_certificate_v2'
    | 'unique_client_id'
    | 'kolide'
    | 'tanium_s2s'
    | 'crowdstrike_s2s'
    | 'intune'
    | 'workspace_one'
    | 'sentinelone_s2s';

  /**
   * Body param: The description of the device posture rule.
   */
  description?: string;

  /**
   * Body param: Sets the expiration time for a posture check result. If empty, the
   * result remains valid until it is overwritten by new data from the WARP client.
   */
  expiration?: string;

  /**
   * Body param: The value to be checked against.
   */
  input?: DeviceInputParam;

  /**
   * Body param: The conditions that the client must match to run the rule.
   */
  match?: Array<DeviceMatchParam>;

  /**
   * Body param: Polling frequency for the WARP client posture check. Default: `5m`
   * (poll every five minutes). Minimum: `1m`.
   */
  schedule?: string;
}

export interface PostureUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The name of the device posture rule.
   */
  name: string;

  /**
   * Body param: The type of device posture rule.
   */
  type:
    | 'file'
    | 'application'
    | 'tanium'
    | 'gateway'
    | 'warp'
    | 'disk_encryption'
    | 'sentinelone'
    | 'carbonblack'
    | 'firewall'
    | 'os_version'
    | 'domain_joined'
    | 'client_certificate'
    | 'client_certificate_v2'
    | 'unique_client_id'
    | 'kolide'
    | 'tanium_s2s'
    | 'crowdstrike_s2s'
    | 'intune'
    | 'workspace_one'
    | 'sentinelone_s2s';

  /**
   * Body param: The description of the device posture rule.
   */
  description?: string;

  /**
   * Body param: Sets the expiration time for a posture check result. If empty, the
   * result remains valid until it is overwritten by new data from the WARP client.
   */
  expiration?: string;

  /**
   * Body param: The value to be checked against.
   */
  input?: DeviceInputParam;

  /**
   * Body param: The conditions that the client must match to run the rule.
   */
  match?: Array<DeviceMatchParam>;

  /**
   * Body param: Polling frequency for the WARP client posture check. Default: `5m`
   * (poll every five minutes). Minimum: `1m`.
   */
  schedule?: string;
}

export interface PostureListParams {
  account_id: string;
}

export interface PostureDeleteParams {
  account_id: string;
}

export interface PostureGetParams {
  account_id: string;
}

export namespace Posture {
  export import CarbonblackInput = PostureAPI.CarbonblackInput;
  export import ClientCertificateInput = PostureAPI.ClientCertificateInput;
  export import CrowdstrikeInput = PostureAPI.CrowdstrikeInput;
  export import DeviceInput = PostureAPI.DeviceInput;
  export import DeviceMatch = PostureAPI.DeviceMatch;
  export import DevicePostureRule = PostureAPI.DevicePostureRule;
  export import DiskEncryptionInput = PostureAPI.DiskEncryptionInput;
  export import DomainJoinedInput = PostureAPI.DomainJoinedInput;
  export import FileInput = PostureAPI.FileInput;
  export import FirewallInput = PostureAPI.FirewallInput;
  export import IntuneInput = PostureAPI.IntuneInput;
  export import KolideInput = PostureAPI.KolideInput;
  export import OSVersionInput = PostureAPI.OSVersionInput;
  export import SentineloneInput = PostureAPI.SentineloneInput;
  export import SentineloneS2sInput = PostureAPI.SentineloneS2sInput;
  export import TaniumInput = PostureAPI.TaniumInput;
  export import UniqueClientIDInput = PostureAPI.UniqueClientIDInput;
  export import WorkspaceOneInput = PostureAPI.WorkspaceOneInput;
  export import PostureDeleteResponse = PostureAPI.PostureDeleteResponse;
  export import DevicePostureRulesSinglePage = PostureAPI.DevicePostureRulesSinglePage;
  export import PostureCreateParams = PostureAPI.PostureCreateParams;
  export import PostureUpdateParams = PostureAPI.PostureUpdateParams;
  export import PostureListParams = PostureAPI.PostureListParams;
  export import PostureDeleteParams = PostureAPI.PostureDeleteParams;
  export import PostureGetParams = PostureAPI.PostureGetParams;
  export import Integrations = IntegrationsAPI.Integrations;
  export import Integration = IntegrationsAPI.Integration;
  export import IntegrationDeleteResponse = IntegrationsAPI.IntegrationDeleteResponse;
  export import IntegrationsSinglePage = IntegrationsAPI.IntegrationsSinglePage;
  export import IntegrationCreateParams = IntegrationsAPI.IntegrationCreateParams;
  export import IntegrationListParams = IntegrationsAPI.IntegrationListParams;
  export import IntegrationDeleteParams = IntegrationsAPI.IntegrationDeleteParams;
  export import IntegrationEditParams = IntegrationsAPI.IntegrationEditParams;
  export import IntegrationGetParams = IntegrationsAPI.IntegrationGetParams;
}
