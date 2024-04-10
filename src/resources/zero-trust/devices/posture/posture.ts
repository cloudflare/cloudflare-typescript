// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PostureAPI from 'cloudflare/resources/zero-trust/devices/posture/posture';
import * as IntegrationsAPI from 'cloudflare/resources/zero-trust/devices/posture/integrations';
import { SinglePage } from 'cloudflare/pagination';

export class Posture extends APIResource {
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
  ): Core.PagePromise<PostureListResponsesSinglePage, PostureListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/posture`,
      PostureListResponsesSinglePage,
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
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/devices/posture/${ruleId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: PostureDeleteResponse | null }>
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

export class PostureListResponsesSinglePage extends SinglePage<PostureListResponse> {}

/**
 * The value to be checked against.
 */
export type DeviceInput =
  | DeviceInput.TeamsDevicesFileInputRequest
  | DeviceInput.TeamsDevicesUniqueClientIDInputRequest
  | DeviceInput.TeamsDevicesDomainJoinedInputRequest
  | DeviceInput.TeamsDevicesOSVersionInputRequest
  | DeviceInput.TeamsDevicesFirewallInputRequest
  | DeviceInput.TeamsDevicesSentineloneInputRequest
  | DeviceInput.TeamsDevicesCarbonblackInputRequest
  | DeviceInput.TeamsDevicesDiskEncryptionInputRequest
  | DeviceInput.TeamsDevicesApplicationInputRequest
  | DeviceInput.TeamsDevicesClientCertificateInputRequest
  | DeviceInput.TeamsDevicesWorkspaceOneInputRequest
  | DeviceInput.TeamsDevicesCrowdstrikeInputRequest
  | DeviceInput.TeamsDevicesIntuneInputRequest
  | DeviceInput.TeamsDevicesKolideInputRequest
  | DeviceInput.TeamsDevicesTaniumInputRequest
  | DeviceInput.TeamsDevicesSentineloneS2sInputRequest;

export namespace DeviceInput {
  export interface TeamsDevicesFileInputRequest {
    /**
     * Operating system
     */
    operating_system: PostureAPI.UnnamedSchemaRef41885dd46b9e0294254c49305a273681;

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
     * operator
     */
    operator: PostureAPI.UnnamedSchemaRef34ef0ad73a63c3f76ed170adca181930;

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
    operating_system: PostureAPI.UnnamedSchemaRef41885dd46b9e0294254c49305a273681;

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
    operating_system: PostureAPI.UnnamedSchemaRef41885dd46b9e0294254c49305a273681;

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
    operating_system: PostureAPI.UnnamedSchemaRef41885dd46b9e0294254c49305a273681;

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
     * operator
     */
    operator?: PostureAPI.UnnamedSchemaRef34ef0ad73a63c3f76ed170adca181930;

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
    operator?: PostureAPI.UnnamedSchemaRef34ef0ad73a63c3f76ed170adca181930;
  }
}

export interface DeviceMatch {
  platform?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';
}

/**
 * operator
 */
export type UnnamedSchemaRef34ef0ad73a63c3f76ed170adca181930 = '<' | '<=' | '>' | '>=' | '==';

/**
 * Operating system
 */
export type UnnamedSchemaRef41885dd46b9e0294254c49305a273681 = 'windows' | 'linux' | 'mac';

export interface UnnamedSchemaRef9e35ef84511131488ae286ce78ac4b27 {
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
    | 'unique_client_id'
    | 'kolide'
    | 'tanium_s2s'
    | 'crowdstrike_s2s'
    | 'intune'
    | 'workspace_one'
    | 'sentinelone_s2s';
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
    | 'unique_client_id'
    | 'kolide'
    | 'tanium_s2s'
    | 'crowdstrike_s2s'
    | 'intune'
    | 'workspace_one'
    | 'sentinelone_s2s';
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
    | 'unique_client_id'
    | 'kolide'
    | 'tanium_s2s'
    | 'crowdstrike_s2s'
    | 'intune'
    | 'workspace_one'
    | 'sentinelone_s2s';
}

export interface PostureListResponse {
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
    | 'unique_client_id'
    | 'kolide'
    | 'tanium_s2s'
    | 'crowdstrike_s2s'
    | 'intune'
    | 'workspace_one'
    | 'sentinelone_s2s';
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
    | 'unique_client_id'
    | 'kolide'
    | 'tanium_s2s'
    | 'crowdstrike_s2s'
    | 'intune'
    | 'workspace_one'
    | 'sentinelone_s2s';
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
  input?: DeviceInput;

  /**
   * Body param: The conditions that the client must match to run the rule.
   */
  match?: Array<DeviceMatch>;

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
  input?: DeviceInput;

  /**
   * Body param: The conditions that the client must match to run the rule.
   */
  match?: Array<DeviceMatch>;

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
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface PostureGetParams {
  account_id: string;
}

export namespace Posture {
  export import DeviceInput = PostureAPI.DeviceInput;
  export import DeviceMatch = PostureAPI.DeviceMatch;
  export import UnnamedSchemaRef34ef0ad73a63c3f76ed170adca181930 = PostureAPI.UnnamedSchemaRef34ef0ad73a63c3f76ed170adca181930;
  export import UnnamedSchemaRef41885dd46b9e0294254c49305a273681 = PostureAPI.UnnamedSchemaRef41885dd46b9e0294254c49305a273681;
  export import UnnamedSchemaRef9e35ef84511131488ae286ce78ac4b27 = PostureAPI.UnnamedSchemaRef9e35ef84511131488ae286ce78ac4b27;
  export import PostureCreateResponse = PostureAPI.PostureCreateResponse;
  export import PostureUpdateResponse = PostureAPI.PostureUpdateResponse;
  export import PostureListResponse = PostureAPI.PostureListResponse;
  export import PostureDeleteResponse = PostureAPI.PostureDeleteResponse;
  export import PostureGetResponse = PostureAPI.PostureGetResponse;
  export import PostureListResponsesSinglePage = PostureAPI.PostureListResponsesSinglePage;
  export import PostureCreateParams = PostureAPI.PostureCreateParams;
  export import PostureUpdateParams = PostureAPI.PostureUpdateParams;
  export import PostureListParams = PostureAPI.PostureListParams;
  export import PostureDeleteParams = PostureAPI.PostureDeleteParams;
  export import PostureGetParams = PostureAPI.PostureGetParams;
  export import Integrations = IntegrationsAPI.Integrations;
  export import Integration = IntegrationsAPI.Integration;
  export import UnnamedSchemaRefB84b377dfc9454d455b646d4bc9ab507 = IntegrationsAPI.UnnamedSchemaRefB84b377dfc9454d455b646d4bc9ab507;
  export import IntegrationsSinglePage = IntegrationsAPI.IntegrationsSinglePage;
  export import IntegrationCreateParams = IntegrationsAPI.IntegrationCreateParams;
  export import IntegrationListParams = IntegrationsAPI.IntegrationListParams;
  export import IntegrationDeleteParams = IntegrationsAPI.IntegrationDeleteParams;
  export import IntegrationEditParams = IntegrationsAPI.IntegrationEditParams;
  export import IntegrationGetParams = IntegrationsAPI.IntegrationGetParams;
}
