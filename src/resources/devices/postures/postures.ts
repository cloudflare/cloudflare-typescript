// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PosturesAPI from 'cloudflare/resources/devices/postures/postures';
import * as IntegrationsAPI from 'cloudflare/resources/devices/postures/integrations';

export class Postures extends APIResource {
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);

  /**
   * Creates a new device posture rule.
   */
  create(
    params: PostureCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostureCreateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/devices/posture`, { body, ...options }) as Core.APIPromise<{
        result: PostureCreateResponse | null;
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
  ): Core.APIPromise<PostureUpdateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/devices/posture/${ruleId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PostureUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches device posture rules for a Zero Trust account.
   */
  list(
    params: PostureListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostureListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/posture`, options) as Core.APIPromise<{
        result: PostureListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
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
  ): Core.APIPromise<PostureGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/posture/${ruleId}`, options) as Core.APIPromise<{
        result: PostureGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PostureCreateResponse {
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
    | PostureCreateResponse.TeamsDevicesFileInputRequest
    | PostureCreateResponse.TeamsDevicesUniqueClientIDInputRequest
    | PostureCreateResponse.TeamsDevicesDomainJoinedInputRequest
    | PostureCreateResponse.TeamsDevicesOSVersionInputRequest
    | PostureCreateResponse.TeamsDevicesFirewallInputRequest
    | PostureCreateResponse.TeamsDevicesSentineloneInputRequest
    | PostureCreateResponse.TeamsDevicesCarbonblackInputRequest
    | PostureCreateResponse.TeamsDevicesDiskEncryptionInputRequest
    | PostureCreateResponse.TeamsDevicesApplicationInputRequest
    | PostureCreateResponse.TeamsDevicesClientCertificateInputRequest
    | PostureCreateResponse.TeamsDevicesWorkspaceOneInputRequest
    | PostureCreateResponse.TeamsDevicesCrowdstrikeInputRequest
    | PostureCreateResponse.TeamsDevicesIntuneInputRequest
    | PostureCreateResponse.TeamsDevicesKolideInputRequest
    | PostureCreateResponse.TeamsDevicesTaniumInputRequest
    | PostureCreateResponse.TeamsDevicesSentineloneS2sInputRequest;

  /**
   * The conditions that the client must match to run the rule.
   */
  match?: Array<PostureCreateResponse.Match>;

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

export namespace PostureCreateResponse {
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

  export interface TeamsDevicesOSVersionInputRequest {
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
     * For more details on last seen, please refer to the Crowdstrike documentation.
     */
    last_seen?: string;

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
    | PostureUpdateResponse.TeamsDevicesOSVersionInputRequest
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

  export interface TeamsDevicesOSVersionInputRequest {
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
     * For more details on last seen, please refer to the Crowdstrike documentation.
     */
    last_seen?: string;

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

export type PostureListResponse = Array<PostureListResponse.PostureListResponseItem>;

export namespace PostureListResponse {
  export interface PostureListResponseItem {
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
      | PostureListResponseItem.TeamsDevicesFileInputRequest
      | PostureListResponseItem.TeamsDevicesUniqueClientIDInputRequest
      | PostureListResponseItem.TeamsDevicesDomainJoinedInputRequest
      | PostureListResponseItem.TeamsDevicesOSVersionInputRequest
      | PostureListResponseItem.TeamsDevicesFirewallInputRequest
      | PostureListResponseItem.TeamsDevicesSentineloneInputRequest
      | PostureListResponseItem.TeamsDevicesCarbonblackInputRequest
      | PostureListResponseItem.TeamsDevicesDiskEncryptionInputRequest
      | PostureListResponseItem.TeamsDevicesApplicationInputRequest
      | PostureListResponseItem.TeamsDevicesClientCertificateInputRequest
      | PostureListResponseItem.TeamsDevicesWorkspaceOneInputRequest
      | PostureListResponseItem.TeamsDevicesCrowdstrikeInputRequest
      | PostureListResponseItem.TeamsDevicesIntuneInputRequest
      | PostureListResponseItem.TeamsDevicesKolideInputRequest
      | PostureListResponseItem.TeamsDevicesTaniumInputRequest
      | PostureListResponseItem.TeamsDevicesSentineloneS2sInputRequest;

    /**
     * The conditions that the client must match to run the rule.
     */
    match?: Array<PostureListResponseItem.Match>;

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

  export namespace PostureListResponseItem {
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

    export interface TeamsDevicesOSVersionInputRequest {
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
       * For more details on last seen, please refer to the Crowdstrike documentation.
       */
      last_seen?: string;

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

export interface PostureDeleteResponse {
  /**
   * API UUID.
   */
  id?: string;
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
    | PostureGetResponse.TeamsDevicesOSVersionInputRequest
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

  export interface TeamsDevicesOSVersionInputRequest {
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
     * For more details on last seen, please refer to the Crowdstrike documentation.
     */
    last_seen?: string;

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

export interface PostureCreateParams {
  /**
   * Path param:
   */
  account_id: unknown;

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
  input?:
    | PostureCreateParams.TeamsDevicesFileInputRequest
    | PostureCreateParams.TeamsDevicesUniqueClientIDInputRequest
    | PostureCreateParams.TeamsDevicesDomainJoinedInputRequest
    | PostureCreateParams.TeamsDevicesOSVersionInputRequest
    | PostureCreateParams.TeamsDevicesFirewallInputRequest
    | PostureCreateParams.TeamsDevicesSentineloneInputRequest
    | PostureCreateParams.TeamsDevicesCarbonblackInputRequest
    | PostureCreateParams.TeamsDevicesDiskEncryptionInputRequest
    | PostureCreateParams.TeamsDevicesApplicationInputRequest
    | PostureCreateParams.TeamsDevicesClientCertificateInputRequest
    | PostureCreateParams.TeamsDevicesWorkspaceOneInputRequest
    | PostureCreateParams.TeamsDevicesCrowdstrikeInputRequest
    | PostureCreateParams.TeamsDevicesIntuneInputRequest
    | PostureCreateParams.TeamsDevicesKolideInputRequest
    | PostureCreateParams.TeamsDevicesTaniumInputRequest
    | PostureCreateParams.TeamsDevicesSentineloneS2sInputRequest;

  /**
   * Body param: The conditions that the client must match to run the rule.
   */
  match?: Array<PostureCreateParams.Match>;

  /**
   * Body param: Polling frequency for the WARP client posture check. Default: `5m`
   * (poll every five minutes). Minimum: `1m`.
   */
  schedule?: string;
}

export namespace PostureCreateParams {
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

  export interface TeamsDevicesOSVersionInputRequest {
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
     * For more details on last seen, please refer to the Crowdstrike documentation.
     */
    last_seen?: string;

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
   * Path param:
   */
  account_id: unknown;

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
  input?:
    | PostureUpdateParams.TeamsDevicesFileInputRequest
    | PostureUpdateParams.TeamsDevicesUniqueClientIDInputRequest
    | PostureUpdateParams.TeamsDevicesDomainJoinedInputRequest
    | PostureUpdateParams.TeamsDevicesOSVersionInputRequest
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
   * Body param: The conditions that the client must match to run the rule.
   */
  match?: Array<PostureUpdateParams.Match>;

  /**
   * Body param: Polling frequency for the WARP client posture check. Default: `5m`
   * (poll every five minutes). Minimum: `1m`.
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

  export interface TeamsDevicesOSVersionInputRequest {
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
     * For more details on last seen, please refer to the Crowdstrike documentation.
     */
    last_seen?: string;

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

export interface PostureListParams {
  account_id: unknown;
}

export interface PostureDeleteParams {
  account_id: unknown;
}

export interface PostureGetParams {
  account_id: unknown;
}

export namespace Postures {
  export import PostureCreateResponse = PosturesAPI.PostureCreateResponse;
  export import PostureUpdateResponse = PosturesAPI.PostureUpdateResponse;
  export import PostureListResponse = PosturesAPI.PostureListResponse;
  export import PostureDeleteResponse = PosturesAPI.PostureDeleteResponse;
  export import PostureGetResponse = PosturesAPI.PostureGetResponse;
  export import PostureCreateParams = PosturesAPI.PostureCreateParams;
  export import PostureUpdateParams = PosturesAPI.PostureUpdateParams;
  export import PostureListParams = PosturesAPI.PostureListParams;
  export import PostureDeleteParams = PosturesAPI.PostureDeleteParams;
  export import PostureGetParams = PosturesAPI.PostureGetParams;
  export import Integrations = IntegrationsAPI.Integrations;
  export import IntegrationCreateResponse = IntegrationsAPI.IntegrationCreateResponse;
  export import IntegrationListResponse = IntegrationsAPI.IntegrationListResponse;
  export import IntegrationDeleteResponse = IntegrationsAPI.IntegrationDeleteResponse;
  export import IntegrationEditResponse = IntegrationsAPI.IntegrationEditResponse;
  export import IntegrationGetResponse = IntegrationsAPI.IntegrationGetResponse;
  export import IntegrationCreateParams = IntegrationsAPI.IntegrationCreateParams;
  export import IntegrationListParams = IntegrationsAPI.IntegrationListParams;
  export import IntegrationDeleteParams = IntegrationsAPI.IntegrationDeleteParams;
  export import IntegrationEditParams = IntegrationsAPI.IntegrationEditParams;
  export import IntegrationGetParams = IntegrationsAPI.IntegrationGetParams;
}
