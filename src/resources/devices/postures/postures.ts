// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PosturesAPI from 'cloudflare/resources/devices/postures/postures';
import * as IntegrationsAPI from 'cloudflare/resources/devices/postures/integrations';

export class Postures extends APIResource {
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);

  /**
   * Updates a device posture rule.
   */
  update(
    identifier: unknown,
    uuid: string,
    body: PostureUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostureUpdateResponse | null> {
    return (
      this._client.put(`/accounts/${identifier}/devices/posture/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PostureUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a device posture rule.
   */
  delete(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostureDeleteResponse | null> {
    return (
      this._client.delete(`/accounts/${identifier}/devices/posture/${uuid}`, options) as Core.APIPromise<{
        result: PostureDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates a new device posture rule.
   */
  devicePostureRulesCreateDevicePostureRule(
    identifier: unknown,
    body: PostureDevicePostureRulesCreateDevicePostureRuleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostureDevicePostureRulesCreateDevicePostureRuleResponse | null> {
    return (
      this._client.post(`/accounts/${identifier}/devices/posture`, { body, ...options }) as Core.APIPromise<{
        result: PostureDevicePostureRulesCreateDevicePostureRuleResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches device posture rules for a Zero Trust account.
   */
  devicePostureRulesListDevicePostureRules(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostureDevicePostureRulesListDevicePostureRulesResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/posture`, options) as Core.APIPromise<{
        result: PostureDevicePostureRulesListDevicePostureRulesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single device posture rule.
   */
  get(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostureGetResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/posture/${uuid}`, options) as Core.APIPromise<{
        result: PostureGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PostureUpdateResponse {
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
  input?:
    | PostureUpdateResponse.TeamsDevicesFileInputRequest
    | PostureUpdateResponse.TeamsDevicesUniqueClientIDInputRequest
    | PostureUpdateResponse.TeamsDevicesDomainJoinedInputRequest
    | PostureUpdateResponse.TeamsDevicesOsVersionInputRequest
    | PostureUpdateResponse.TeamsDevicesFirewallInputRequest
    | PostureUpdateResponse.TeamsDevicesSentineloneInputRequest
    | PostureUpdateResponse.TeamsDevicesCarbonblackInputRequest
    | PostureUpdateResponse.TeamsDevicesDiskEncryptionInputRequest
    | PostureUpdateResponse.TeamsDevicesApplicationInputRequest
    | PostureUpdateResponse.TeamsDevicesClientCertificateInputRequest
    | PostureUpdateResponse.TeamsDevicesWorkspaceOneInputRequest
    | PostureUpdateResponse.TeamsDevicesCrowdstrikeInputRequest
    | PostureUpdateResponse.TeamsDevicesIntuneInputRequest
    | PostureUpdateResponse.TeamsDevicesKolideInputRequest
    | PostureUpdateResponse.TeamsDevicesTaniumInputRequest
    | PostureUpdateResponse.TeamsDevicesSentineloneS2sInputRequest;

  /**
   * The conditions that the client must match to run the rule.
   */
  match?: Array<PostureUpdateResponse.Match>;

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
    | 'unique_client_id'
    | 'kolide'
    | 'tanium_s2s'
    | 'crowdstrike_s2s'
    | 'intune'
    | 'workspace_one'
    | 'sentinelone_s2s';
}

export namespace PostureUpdateResponse {
  export interface TeamsDevicesFileInputRequest {
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

  export interface TeamsDevicesUniqueClientIDInputRequest {
    /**
     * List ID.
     */
    id: string;

    /**
     * Operating System
     */
    operating_system: 'android' | 'ios' | 'chromeos';
  }

  export interface TeamsDevicesDomainJoinedInputRequest {
    /**
     * Operating System
     */
    operating_system: 'windows';

    /**
     * Domain
     */
    domain?: string;
  }

  export interface TeamsDevicesOsVersionInputRequest {
    /**
     * Operating System
     */
    operating_system: 'windows';

    /**
     * Operator
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

  export interface TeamsDevicesFirewallInputRequest {
    /**
     * Enabled
     */
    enabled: boolean;

    /**
     * Operating System
     */
    operating_system: 'windows' | 'mac';
  }

  export interface TeamsDevicesSentineloneInputRequest {
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

  export interface TeamsDevicesDiskEncryptionInputRequest {
    /**
     * List of volume names to be checked for encryption.
     */
    checkDisks?: Array<string>;

    /**
     * Whether to check all disks for encryption.
     */
    requireAll?: boolean;
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

  export interface TeamsDevicesClientCertificateInputRequest {
    /**
     * UUID of Cloudflare managed certificate.
     */
    certificate_id: string;

    /**
     * Common Name that is protected by the certificate
     */
    cn: string;
  }

  export interface TeamsDevicesWorkspaceOneInputRequest {
    /**
     * Compliance Status
     */
    compliance_status: 'compliant' | 'noncompliant' | 'unknown';

    /**
     * Posture Integration ID.
     */
    connection_id: string;
  }

  export interface TeamsDevicesCrowdstrikeInputRequest {
    /**
     * Posture Integration ID.
     */
    connection_id: string;

    /**
     * Operator
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
     * Version
     */
    version?: string;

    /**
     * Version Operator
     */
    versionOperator?: '<' | '<=' | '>' | '>=' | '==';
  }

  export interface TeamsDevicesIntuneInputRequest {
    /**
     * Compliance Status
     */
    compliance_status: 'compliant' | 'noncompliant' | 'unknown' | 'notapplicable' | 'ingraceperiod' | 'error';

    /**
     * Posture Integration ID.
     */
    connection_id: string;
  }

  export interface TeamsDevicesKolideInputRequest {
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

  export interface TeamsDevicesTaniumInputRequest {
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

  export interface TeamsDevicesSentineloneS2sInputRequest {
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

  export interface Match {
    platform?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';
  }
}

export interface PostureDeleteResponse {
  /**
   * API UUID.
   */
  id?: string;
}

export interface PostureDevicePostureRulesCreateDevicePostureRuleResponse {
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
  input?:
    | PostureDevicePostureRulesCreateDevicePostureRuleResponse.TeamsDevicesFileInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleResponse.TeamsDevicesUniqueClientIDInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleResponse.TeamsDevicesDomainJoinedInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleResponse.TeamsDevicesOsVersionInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleResponse.TeamsDevicesFirewallInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleResponse.TeamsDevicesSentineloneInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleResponse.TeamsDevicesCarbonblackInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleResponse.TeamsDevicesDiskEncryptionInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleResponse.TeamsDevicesApplicationInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleResponse.TeamsDevicesClientCertificateInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleResponse.TeamsDevicesWorkspaceOneInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleResponse.TeamsDevicesCrowdstrikeInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleResponse.TeamsDevicesIntuneInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleResponse.TeamsDevicesKolideInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleResponse.TeamsDevicesTaniumInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleResponse.TeamsDevicesSentineloneS2sInputRequest;

  /**
   * The conditions that the client must match to run the rule.
   */
  match?: Array<PostureDevicePostureRulesCreateDevicePostureRuleResponse.Match>;

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
    | 'unique_client_id'
    | 'kolide'
    | 'tanium_s2s'
    | 'crowdstrike_s2s'
    | 'intune'
    | 'workspace_one'
    | 'sentinelone_s2s';
}

export namespace PostureDevicePostureRulesCreateDevicePostureRuleResponse {
  export interface TeamsDevicesFileInputRequest {
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

  export interface TeamsDevicesUniqueClientIDInputRequest {
    /**
     * List ID.
     */
    id: string;

    /**
     * Operating System
     */
    operating_system: 'android' | 'ios' | 'chromeos';
  }

  export interface TeamsDevicesDomainJoinedInputRequest {
    /**
     * Operating System
     */
    operating_system: 'windows';

    /**
     * Domain
     */
    domain?: string;
  }

  export interface TeamsDevicesOsVersionInputRequest {
    /**
     * Operating System
     */
    operating_system: 'windows';

    /**
     * Operator
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

  export interface TeamsDevicesFirewallInputRequest {
    /**
     * Enabled
     */
    enabled: boolean;

    /**
     * Operating System
     */
    operating_system: 'windows' | 'mac';
  }

  export interface TeamsDevicesSentineloneInputRequest {
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

  export interface TeamsDevicesDiskEncryptionInputRequest {
    /**
     * List of volume names to be checked for encryption.
     */
    checkDisks?: Array<string>;

    /**
     * Whether to check all disks for encryption.
     */
    requireAll?: boolean;
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

  export interface TeamsDevicesClientCertificateInputRequest {
    /**
     * UUID of Cloudflare managed certificate.
     */
    certificate_id: string;

    /**
     * Common Name that is protected by the certificate
     */
    cn: string;
  }

  export interface TeamsDevicesWorkspaceOneInputRequest {
    /**
     * Compliance Status
     */
    compliance_status: 'compliant' | 'noncompliant' | 'unknown';

    /**
     * Posture Integration ID.
     */
    connection_id: string;
  }

  export interface TeamsDevicesCrowdstrikeInputRequest {
    /**
     * Posture Integration ID.
     */
    connection_id: string;

    /**
     * Operator
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
     * Version
     */
    version?: string;

    /**
     * Version Operator
     */
    versionOperator?: '<' | '<=' | '>' | '>=' | '==';
  }

  export interface TeamsDevicesIntuneInputRequest {
    /**
     * Compliance Status
     */
    compliance_status: 'compliant' | 'noncompliant' | 'unknown' | 'notapplicable' | 'ingraceperiod' | 'error';

    /**
     * Posture Integration ID.
     */
    connection_id: string;
  }

  export interface TeamsDevicesKolideInputRequest {
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

  export interface TeamsDevicesTaniumInputRequest {
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

  export interface TeamsDevicesSentineloneS2sInputRequest {
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

  export interface Match {
    platform?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';
  }
}

export type PostureDevicePostureRulesListDevicePostureRulesResponse =
  Array<PostureDevicePostureRulesListDevicePostureRulesResponse.PostureDevicePostureRulesListDevicePostureRulesResponseItem>;

export namespace PostureDevicePostureRulesListDevicePostureRulesResponse {
  export interface PostureDevicePostureRulesListDevicePostureRulesResponseItem {
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
    input?:
      | PostureDevicePostureRulesListDevicePostureRulesResponseItem.TeamsDevicesFileInputRequest
      | PostureDevicePostureRulesListDevicePostureRulesResponseItem.TeamsDevicesUniqueClientIDInputRequest
      | PostureDevicePostureRulesListDevicePostureRulesResponseItem.TeamsDevicesDomainJoinedInputRequest
      | PostureDevicePostureRulesListDevicePostureRulesResponseItem.TeamsDevicesOsVersionInputRequest
      | PostureDevicePostureRulesListDevicePostureRulesResponseItem.TeamsDevicesFirewallInputRequest
      | PostureDevicePostureRulesListDevicePostureRulesResponseItem.TeamsDevicesSentineloneInputRequest
      | PostureDevicePostureRulesListDevicePostureRulesResponseItem.TeamsDevicesCarbonblackInputRequest
      | PostureDevicePostureRulesListDevicePostureRulesResponseItem.TeamsDevicesDiskEncryptionInputRequest
      | PostureDevicePostureRulesListDevicePostureRulesResponseItem.TeamsDevicesApplicationInputRequest
      | PostureDevicePostureRulesListDevicePostureRulesResponseItem.TeamsDevicesClientCertificateInputRequest
      | PostureDevicePostureRulesListDevicePostureRulesResponseItem.TeamsDevicesWorkspaceOneInputRequest
      | PostureDevicePostureRulesListDevicePostureRulesResponseItem.TeamsDevicesCrowdstrikeInputRequest
      | PostureDevicePostureRulesListDevicePostureRulesResponseItem.TeamsDevicesIntuneInputRequest
      | PostureDevicePostureRulesListDevicePostureRulesResponseItem.TeamsDevicesKolideInputRequest
      | PostureDevicePostureRulesListDevicePostureRulesResponseItem.TeamsDevicesTaniumInputRequest
      | PostureDevicePostureRulesListDevicePostureRulesResponseItem.TeamsDevicesSentineloneS2sInputRequest;

    /**
     * The conditions that the client must match to run the rule.
     */
    match?: Array<PostureDevicePostureRulesListDevicePostureRulesResponseItem.Match>;

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
      | 'unique_client_id'
      | 'kolide'
      | 'tanium_s2s'
      | 'crowdstrike_s2s'
      | 'intune'
      | 'workspace_one'
      | 'sentinelone_s2s';
  }

  export namespace PostureDevicePostureRulesListDevicePostureRulesResponseItem {
    export interface TeamsDevicesFileInputRequest {
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

    export interface TeamsDevicesUniqueClientIDInputRequest {
      /**
       * List ID.
       */
      id: string;

      /**
       * Operating System
       */
      operating_system: 'android' | 'ios' | 'chromeos';
    }

    export interface TeamsDevicesDomainJoinedInputRequest {
      /**
       * Operating System
       */
      operating_system: 'windows';

      /**
       * Domain
       */
      domain?: string;
    }

    export interface TeamsDevicesOsVersionInputRequest {
      /**
       * Operating System
       */
      operating_system: 'windows';

      /**
       * Operator
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

    export interface TeamsDevicesFirewallInputRequest {
      /**
       * Enabled
       */
      enabled: boolean;

      /**
       * Operating System
       */
      operating_system: 'windows' | 'mac';
    }

    export interface TeamsDevicesSentineloneInputRequest {
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

    export interface TeamsDevicesDiskEncryptionInputRequest {
      /**
       * List of volume names to be checked for encryption.
       */
      checkDisks?: Array<string>;

      /**
       * Whether to check all disks for encryption.
       */
      requireAll?: boolean;
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

    export interface TeamsDevicesClientCertificateInputRequest {
      /**
       * UUID of Cloudflare managed certificate.
       */
      certificate_id: string;

      /**
       * Common Name that is protected by the certificate
       */
      cn: string;
    }

    export interface TeamsDevicesWorkspaceOneInputRequest {
      /**
       * Compliance Status
       */
      compliance_status: 'compliant' | 'noncompliant' | 'unknown';

      /**
       * Posture Integration ID.
       */
      connection_id: string;
    }

    export interface TeamsDevicesCrowdstrikeInputRequest {
      /**
       * Posture Integration ID.
       */
      connection_id: string;

      /**
       * Operator
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
       * Version
       */
      version?: string;

      /**
       * Version Operator
       */
      versionOperator?: '<' | '<=' | '>' | '>=' | '==';
    }

    export interface TeamsDevicesIntuneInputRequest {
      /**
       * Compliance Status
       */
      compliance_status:
        | 'compliant'
        | 'noncompliant'
        | 'unknown'
        | 'notapplicable'
        | 'ingraceperiod'
        | 'error';

      /**
       * Posture Integration ID.
       */
      connection_id: string;
    }

    export interface TeamsDevicesKolideInputRequest {
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

    export interface TeamsDevicesTaniumInputRequest {
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

    export interface TeamsDevicesSentineloneS2sInputRequest {
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

    export interface Match {
      platform?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';
    }
  }
}

export interface PostureGetResponse {
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
  input?:
    | PostureGetResponse.TeamsDevicesFileInputRequest
    | PostureGetResponse.TeamsDevicesUniqueClientIDInputRequest
    | PostureGetResponse.TeamsDevicesDomainJoinedInputRequest
    | PostureGetResponse.TeamsDevicesOsVersionInputRequest
    | PostureGetResponse.TeamsDevicesFirewallInputRequest
    | PostureGetResponse.TeamsDevicesSentineloneInputRequest
    | PostureGetResponse.TeamsDevicesCarbonblackInputRequest
    | PostureGetResponse.TeamsDevicesDiskEncryptionInputRequest
    | PostureGetResponse.TeamsDevicesApplicationInputRequest
    | PostureGetResponse.TeamsDevicesClientCertificateInputRequest
    | PostureGetResponse.TeamsDevicesWorkspaceOneInputRequest
    | PostureGetResponse.TeamsDevicesCrowdstrikeInputRequest
    | PostureGetResponse.TeamsDevicesIntuneInputRequest
    | PostureGetResponse.TeamsDevicesKolideInputRequest
    | PostureGetResponse.TeamsDevicesTaniumInputRequest
    | PostureGetResponse.TeamsDevicesSentineloneS2sInputRequest;

  /**
   * The conditions that the client must match to run the rule.
   */
  match?: Array<PostureGetResponse.Match>;

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
    | 'unique_client_id'
    | 'kolide'
    | 'tanium_s2s'
    | 'crowdstrike_s2s'
    | 'intune'
    | 'workspace_one'
    | 'sentinelone_s2s';
}

export namespace PostureGetResponse {
  export interface TeamsDevicesFileInputRequest {
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

  export interface TeamsDevicesUniqueClientIDInputRequest {
    /**
     * List ID.
     */
    id: string;

    /**
     * Operating System
     */
    operating_system: 'android' | 'ios' | 'chromeos';
  }

  export interface TeamsDevicesDomainJoinedInputRequest {
    /**
     * Operating System
     */
    operating_system: 'windows';

    /**
     * Domain
     */
    domain?: string;
  }

  export interface TeamsDevicesOsVersionInputRequest {
    /**
     * Operating System
     */
    operating_system: 'windows';

    /**
     * Operator
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

  export interface TeamsDevicesFirewallInputRequest {
    /**
     * Enabled
     */
    enabled: boolean;

    /**
     * Operating System
     */
    operating_system: 'windows' | 'mac';
  }

  export interface TeamsDevicesSentineloneInputRequest {
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

  export interface TeamsDevicesDiskEncryptionInputRequest {
    /**
     * List of volume names to be checked for encryption.
     */
    checkDisks?: Array<string>;

    /**
     * Whether to check all disks for encryption.
     */
    requireAll?: boolean;
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

  export interface TeamsDevicesClientCertificateInputRequest {
    /**
     * UUID of Cloudflare managed certificate.
     */
    certificate_id: string;

    /**
     * Common Name that is protected by the certificate
     */
    cn: string;
  }

  export interface TeamsDevicesWorkspaceOneInputRequest {
    /**
     * Compliance Status
     */
    compliance_status: 'compliant' | 'noncompliant' | 'unknown';

    /**
     * Posture Integration ID.
     */
    connection_id: string;
  }

  export interface TeamsDevicesCrowdstrikeInputRequest {
    /**
     * Posture Integration ID.
     */
    connection_id: string;

    /**
     * Operator
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
     * Version
     */
    version?: string;

    /**
     * Version Operator
     */
    versionOperator?: '<' | '<=' | '>' | '>=' | '==';
  }

  export interface TeamsDevicesIntuneInputRequest {
    /**
     * Compliance Status
     */
    compliance_status: 'compliant' | 'noncompliant' | 'unknown' | 'notapplicable' | 'ingraceperiod' | 'error';

    /**
     * Posture Integration ID.
     */
    connection_id: string;
  }

  export interface TeamsDevicesKolideInputRequest {
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

  export interface TeamsDevicesTaniumInputRequest {
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

  export interface TeamsDevicesSentineloneS2sInputRequest {
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

  export interface Match {
    platform?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';
  }
}

export interface PostureUpdateParams {
  /**
   * The name of the device posture rule.
   */
  name: string;

  /**
   * The type of device posture rule.
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
    | 'unique_client_id'
    | 'kolide'
    | 'tanium_s2s'
    | 'crowdstrike_s2s'
    | 'intune'
    | 'workspace_one'
    | 'sentinelone_s2s';

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
  input?:
    | PostureUpdateParams.TeamsDevicesFileInputRequest
    | PostureUpdateParams.TeamsDevicesUniqueClientIDInputRequest
    | PostureUpdateParams.TeamsDevicesDomainJoinedInputRequest
    | PostureUpdateParams.TeamsDevicesOsVersionInputRequest
    | PostureUpdateParams.TeamsDevicesFirewallInputRequest
    | PostureUpdateParams.TeamsDevicesSentineloneInputRequest
    | PostureUpdateParams.TeamsDevicesCarbonblackInputRequest
    | PostureUpdateParams.TeamsDevicesDiskEncryptionInputRequest
    | PostureUpdateParams.TeamsDevicesApplicationInputRequest
    | PostureUpdateParams.TeamsDevicesClientCertificateInputRequest
    | PostureUpdateParams.TeamsDevicesWorkspaceOneInputRequest
    | PostureUpdateParams.TeamsDevicesCrowdstrikeInputRequest
    | PostureUpdateParams.TeamsDevicesIntuneInputRequest
    | PostureUpdateParams.TeamsDevicesKolideInputRequest
    | PostureUpdateParams.TeamsDevicesTaniumInputRequest
    | PostureUpdateParams.TeamsDevicesSentineloneS2sInputRequest;

  /**
   * The conditions that the client must match to run the rule.
   */
  match?: Array<PostureUpdateParams.Match>;

  /**
   * Polling frequency for the WARP client posture check. Default: `5m` (poll every
   * five minutes). Minimum: `1m`.
   */
  schedule?: string;
}

export namespace PostureUpdateParams {
  export interface TeamsDevicesFileInputRequest {
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

  export interface TeamsDevicesUniqueClientIDInputRequest {
    /**
     * List ID.
     */
    id: string;

    /**
     * Operating System
     */
    operating_system: 'android' | 'ios' | 'chromeos';
  }

  export interface TeamsDevicesDomainJoinedInputRequest {
    /**
     * Operating System
     */
    operating_system: 'windows';

    /**
     * Domain
     */
    domain?: string;
  }

  export interface TeamsDevicesOsVersionInputRequest {
    /**
     * Operating System
     */
    operating_system: 'windows';

    /**
     * Operator
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

  export interface TeamsDevicesFirewallInputRequest {
    /**
     * Enabled
     */
    enabled: boolean;

    /**
     * Operating System
     */
    operating_system: 'windows' | 'mac';
  }

  export interface TeamsDevicesSentineloneInputRequest {
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

  export interface TeamsDevicesDiskEncryptionInputRequest {
    /**
     * List of volume names to be checked for encryption.
     */
    checkDisks?: Array<string>;

    /**
     * Whether to check all disks for encryption.
     */
    requireAll?: boolean;
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

  export interface TeamsDevicesClientCertificateInputRequest {
    /**
     * UUID of Cloudflare managed certificate.
     */
    certificate_id: string;

    /**
     * Common Name that is protected by the certificate
     */
    cn: string;
  }

  export interface TeamsDevicesWorkspaceOneInputRequest {
    /**
     * Compliance Status
     */
    compliance_status: 'compliant' | 'noncompliant' | 'unknown';

    /**
     * Posture Integration ID.
     */
    connection_id: string;
  }

  export interface TeamsDevicesCrowdstrikeInputRequest {
    /**
     * Posture Integration ID.
     */
    connection_id: string;

    /**
     * Operator
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
     * Version
     */
    version?: string;

    /**
     * Version Operator
     */
    versionOperator?: '<' | '<=' | '>' | '>=' | '==';
  }

  export interface TeamsDevicesIntuneInputRequest {
    /**
     * Compliance Status
     */
    compliance_status: 'compliant' | 'noncompliant' | 'unknown' | 'notapplicable' | 'ingraceperiod' | 'error';

    /**
     * Posture Integration ID.
     */
    connection_id: string;
  }

  export interface TeamsDevicesKolideInputRequest {
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

  export interface TeamsDevicesTaniumInputRequest {
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

  export interface TeamsDevicesSentineloneS2sInputRequest {
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

  export interface Match {
    platform?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';
  }
}

export interface PostureDevicePostureRulesCreateDevicePostureRuleParams {
  /**
   * The name of the device posture rule.
   */
  name: string;

  /**
   * The type of device posture rule.
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
    | 'unique_client_id'
    | 'kolide'
    | 'tanium_s2s'
    | 'crowdstrike_s2s'
    | 'intune'
    | 'workspace_one'
    | 'sentinelone_s2s';

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
  input?:
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.TeamsDevicesFileInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.TeamsDevicesUniqueClientIDInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.TeamsDevicesDomainJoinedInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.TeamsDevicesOsVersionInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.TeamsDevicesFirewallInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.TeamsDevicesSentineloneInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.TeamsDevicesCarbonblackInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.TeamsDevicesDiskEncryptionInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.TeamsDevicesApplicationInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.TeamsDevicesClientCertificateInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.TeamsDevicesWorkspaceOneInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.TeamsDevicesCrowdstrikeInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.TeamsDevicesIntuneInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.TeamsDevicesKolideInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.TeamsDevicesTaniumInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.TeamsDevicesSentineloneS2sInputRequest;

  /**
   * The conditions that the client must match to run the rule.
   */
  match?: Array<PostureDevicePostureRulesCreateDevicePostureRuleParams.Match>;

  /**
   * Polling frequency for the WARP client posture check. Default: `5m` (poll every
   * five minutes). Minimum: `1m`.
   */
  schedule?: string;
}

export namespace PostureDevicePostureRulesCreateDevicePostureRuleParams {
  export interface TeamsDevicesFileInputRequest {
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

  export interface TeamsDevicesUniqueClientIDInputRequest {
    /**
     * List ID.
     */
    id: string;

    /**
     * Operating System
     */
    operating_system: 'android' | 'ios' | 'chromeos';
  }

  export interface TeamsDevicesDomainJoinedInputRequest {
    /**
     * Operating System
     */
    operating_system: 'windows';

    /**
     * Domain
     */
    domain?: string;
  }

  export interface TeamsDevicesOsVersionInputRequest {
    /**
     * Operating System
     */
    operating_system: 'windows';

    /**
     * Operator
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

  export interface TeamsDevicesFirewallInputRequest {
    /**
     * Enabled
     */
    enabled: boolean;

    /**
     * Operating System
     */
    operating_system: 'windows' | 'mac';
  }

  export interface TeamsDevicesSentineloneInputRequest {
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

  export interface TeamsDevicesDiskEncryptionInputRequest {
    /**
     * List of volume names to be checked for encryption.
     */
    checkDisks?: Array<string>;

    /**
     * Whether to check all disks for encryption.
     */
    requireAll?: boolean;
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

  export interface TeamsDevicesClientCertificateInputRequest {
    /**
     * UUID of Cloudflare managed certificate.
     */
    certificate_id: string;

    /**
     * Common Name that is protected by the certificate
     */
    cn: string;
  }

  export interface TeamsDevicesWorkspaceOneInputRequest {
    /**
     * Compliance Status
     */
    compliance_status: 'compliant' | 'noncompliant' | 'unknown';

    /**
     * Posture Integration ID.
     */
    connection_id: string;
  }

  export interface TeamsDevicesCrowdstrikeInputRequest {
    /**
     * Posture Integration ID.
     */
    connection_id: string;

    /**
     * Operator
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
     * Version
     */
    version?: string;

    /**
     * Version Operator
     */
    versionOperator?: '<' | '<=' | '>' | '>=' | '==';
  }

  export interface TeamsDevicesIntuneInputRequest {
    /**
     * Compliance Status
     */
    compliance_status: 'compliant' | 'noncompliant' | 'unknown' | 'notapplicable' | 'ingraceperiod' | 'error';

    /**
     * Posture Integration ID.
     */
    connection_id: string;
  }

  export interface TeamsDevicesKolideInputRequest {
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

  export interface TeamsDevicesTaniumInputRequest {
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

  export interface TeamsDevicesSentineloneS2sInputRequest {
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

  export interface Match {
    platform?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';
  }
}

export namespace Postures {
  export import PostureUpdateResponse = PosturesAPI.PostureUpdateResponse;
  export import PostureDeleteResponse = PosturesAPI.PostureDeleteResponse;
  export import PostureDevicePostureRulesCreateDevicePostureRuleResponse = PosturesAPI.PostureDevicePostureRulesCreateDevicePostureRuleResponse;
  export import PostureDevicePostureRulesListDevicePostureRulesResponse = PosturesAPI.PostureDevicePostureRulesListDevicePostureRulesResponse;
  export import PostureGetResponse = PosturesAPI.PostureGetResponse;
  export import PostureUpdateParams = PosturesAPI.PostureUpdateParams;
  export import PostureDevicePostureRulesCreateDevicePostureRuleParams = PosturesAPI.PostureDevicePostureRulesCreateDevicePostureRuleParams;
  export import Integrations = IntegrationsAPI.Integrations;
  export import IntegrationUpdateResponse = IntegrationsAPI.IntegrationUpdateResponse;
  export import IntegrationDeleteResponse = IntegrationsAPI.IntegrationDeleteResponse;
  export import IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationResponse = IntegrationsAPI.IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationResponse;
  export import IntegrationDevicePostureIntegrationsListDevicePostureIntegrationsResponse = IntegrationsAPI.IntegrationDevicePostureIntegrationsListDevicePostureIntegrationsResponse;
  export import IntegrationGetResponse = IntegrationsAPI.IntegrationGetResponse;
  export import IntegrationUpdateParams = IntegrationsAPI.IntegrationUpdateParams;
  export import IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationParams = IntegrationsAPI.IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationParams;
}
