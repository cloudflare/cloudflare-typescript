// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IntegrationsAPI from 'cloudflare/resources/devices/postures/integrations';

export class Integrations extends APIResource {
  /**
   * Create a new device posture integration.
   */
  create(
    identifier: unknown,
    body: IntegrationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationCreateResponse | null> {
    return (
      this._client.post(`/accounts/${identifier}/devices/posture/integration`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IntegrationCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured device posture integration.
   */
  update(
    identifier: unknown,
    uuid: string,
    body: IntegrationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationUpdateResponse | null> {
    return (
      this._client.patch(`/accounts/${identifier}/devices/posture/integration/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IntegrationUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a configured device posture integration.
   */
  delete(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationDeleteResponse | null> {
    return (
      this._client.delete(
        `/accounts/${identifier}/devices/posture/integration/${uuid}`,
        options,
      ) as Core.APIPromise<{ result: IntegrationDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches details for a single device posture integration.
   */
  get(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationGetResponse | null> {
    return (
      this._client.get(
        `/accounts/${identifier}/devices/posture/integration/${uuid}`,
        options,
      ) as Core.APIPromise<{ result: IntegrationGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IntegrationCreateResponse {
  /**
   * API UUID.
   */
  id?: string;

  /**
   * The configuration object containing third-party integration information.
   */
  config?: IntegrationCreateResponse.Config;

  /**
   * The interval between each posture check with the third-party API. Use `m` for
   * minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).
   */
  interval?: string;

  /**
   * The name of the device posture integration.
   */
  name?: string;

  /**
   * The type of device posture integration.
   */
  type?: 'workspace_one' | 'crowdstrike_s2s' | 'uptycs' | 'intune' | 'kolide' | 'tanium' | 'sentinelone_s2s';
}

export namespace IntegrationCreateResponse {
  /**
   * The configuration object containing third-party integration information.
   */
  export interface Config {
    /**
     * The Workspace One API URL provided in the Workspace One Admin Dashboard.
     */
    api_url: string;

    /**
     * The Workspace One Authorization URL depending on your region.
     */
    auth_url: string;

    /**
     * The Workspace One client ID provided in the Workspace One Admin Dashboard.
     */
    client_id: string;
  }
}

export interface IntegrationUpdateResponse {
  /**
   * API UUID.
   */
  id?: string;

  /**
   * The configuration object containing third-party integration information.
   */
  config?: IntegrationUpdateResponse.Config;

  /**
   * The interval between each posture check with the third-party API. Use `m` for
   * minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).
   */
  interval?: string;

  /**
   * The name of the device posture integration.
   */
  name?: string;

  /**
   * The type of device posture integration.
   */
  type?: 'workspace_one' | 'crowdstrike_s2s' | 'uptycs' | 'intune' | 'kolide' | 'tanium' | 'sentinelone_s2s';
}

export namespace IntegrationUpdateResponse {
  /**
   * The configuration object containing third-party integration information.
   */
  export interface Config {
    /**
     * The Workspace One API URL provided in the Workspace One Admin Dashboard.
     */
    api_url: string;

    /**
     * The Workspace One Authorization URL depending on your region.
     */
    auth_url: string;

    /**
     * The Workspace One client ID provided in the Workspace One Admin Dashboard.
     */
    client_id: string;
  }
}

export type IntegrationDeleteResponse = unknown | string;

export interface IntegrationGetResponse {
  /**
   * API UUID.
   */
  id?: string;

  /**
   * The configuration object containing third-party integration information.
   */
  config?: IntegrationGetResponse.Config;

  /**
   * The interval between each posture check with the third-party API. Use `m` for
   * minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).
   */
  interval?: string;

  /**
   * The name of the device posture integration.
   */
  name?: string;

  /**
   * The type of device posture integration.
   */
  type?: 'workspace_one' | 'crowdstrike_s2s' | 'uptycs' | 'intune' | 'kolide' | 'tanium' | 'sentinelone_s2s';
}

export namespace IntegrationGetResponse {
  /**
   * The configuration object containing third-party integration information.
   */
  export interface Config {
    /**
     * The Workspace One API URL provided in the Workspace One Admin Dashboard.
     */
    api_url: string;

    /**
     * The Workspace One Authorization URL depending on your region.
     */
    auth_url: string;

    /**
     * The Workspace One client ID provided in the Workspace One Admin Dashboard.
     */
    client_id: string;
  }
}

export interface IntegrationCreateParams {
  /**
   * The configuration object containing third-party integration information.
   */
  config:
    | IntegrationCreateParams.TeamsDevicesWorkspaceOneConfigRequest
    | IntegrationCreateParams.TeamsDevicesCrowdstrikeConfigRequest
    | IntegrationCreateParams.TeamsDevicesUptycsConfigRequest
    | IntegrationCreateParams.TeamsDevicesIntuneConfigRequest
    | IntegrationCreateParams.TeamsDevicesKolideConfigRequest
    | IntegrationCreateParams.TeamsDevicesTaniumConfigRequest
    | IntegrationCreateParams.TeamsDevicesSentineloneS2sConfigRequest;

  /**
   * The interval between each posture check with the third-party API. Use `m` for
   * minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).
   */
  interval: string;

  /**
   * The name of the device posture integration.
   */
  name: string;

  /**
   * The type of device posture integration.
   */
  type: 'workspace_one' | 'crowdstrike_s2s' | 'uptycs' | 'intune' | 'kolide' | 'tanium' | 'sentinelone_s2s';
}

export namespace IntegrationCreateParams {
  export interface TeamsDevicesWorkspaceOneConfigRequest {
    /**
     * The Workspace One API URL provided in the Workspace One Admin Dashboard.
     */
    api_url: string;

    /**
     * The Workspace One Authorization URL depending on your region.
     */
    auth_url: string;

    /**
     * The Workspace One client ID provided in the Workspace One Admin Dashboard.
     */
    client_id: string;

    /**
     * The Workspace One client secret provided in the Workspace One Admin Dashboard.
     */
    client_secret: string;
  }

  export interface TeamsDevicesCrowdstrikeConfigRequest {
    /**
     * The Crowdstrike API URL.
     */
    api_url: string;

    /**
     * The Crowdstrike client ID.
     */
    client_id: string;

    /**
     * The Crowdstrike client secret.
     */
    client_secret: string;

    /**
     * The Crowdstrike customer ID.
     */
    customer_id: string;
  }

  export interface TeamsDevicesUptycsConfigRequest {
    /**
     * The Uptycs API URL.
     */
    api_url: string;

    /**
     * The Uptycs client secret.
     */
    client_key: string;

    /**
     * The Uptycs client secret.
     */
    client_secret: string;

    /**
     * The Uptycs customer ID.
     */
    customer_id: string;
  }

  export interface TeamsDevicesIntuneConfigRequest {
    /**
     * The Intune client ID.
     */
    client_id: string;

    /**
     * The Intune client secret.
     */
    client_secret: string;

    /**
     * The Intune customer ID.
     */
    customer_id: string;
  }

  export interface TeamsDevicesKolideConfigRequest {
    /**
     * The Kolide client ID.
     */
    client_id: string;

    /**
     * The Kolide client secret.
     */
    client_secret: string;
  }

  export interface TeamsDevicesTaniumConfigRequest {
    /**
     * The Tanium API URL.
     */
    api_url: string;

    /**
     * The Tanium client secret.
     */
    client_secret: string;

    /**
     * If present, this id will be passed in the `CF-Access-Client-ID` header when
     * hitting the `api_url`
     */
    access_client_id?: string;

    /**
     * If present, this secret will be passed in the `CF-Access-Client-Secret` header
     * when hitting the `api_url`
     */
    access_client_secret?: string;
  }

  export interface TeamsDevicesSentineloneS2sConfigRequest {
    /**
     * The SentinelOne S2S API URL.
     */
    api_url: string;

    /**
     * The SentinelOne S2S client secret.
     */
    client_secret: string;
  }
}

export interface IntegrationUpdateParams {
  /**
   * The configuration object containing third-party integration information.
   */
  config?:
    | IntegrationUpdateParams.TeamsDevicesWorkspaceOneConfigRequest
    | IntegrationUpdateParams.TeamsDevicesCrowdstrikeConfigRequest
    | IntegrationUpdateParams.TeamsDevicesUptycsConfigRequest
    | IntegrationUpdateParams.TeamsDevicesIntuneConfigRequest
    | IntegrationUpdateParams.TeamsDevicesKolideConfigRequest
    | IntegrationUpdateParams.TeamsDevicesTaniumConfigRequest
    | IntegrationUpdateParams.TeamsDevicesSentineloneS2sConfigRequest;

  /**
   * The interval between each posture check with the third-party API. Use `m` for
   * minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).
   */
  interval?: string;

  /**
   * The name of the device posture integration.
   */
  name?: string;

  /**
   * The type of device posture integration.
   */
  type?: 'workspace_one' | 'crowdstrike_s2s' | 'uptycs' | 'intune' | 'kolide' | 'tanium' | 'sentinelone_s2s';
}

export namespace IntegrationUpdateParams {
  export interface TeamsDevicesWorkspaceOneConfigRequest {
    /**
     * The Workspace One API URL provided in the Workspace One Admin Dashboard.
     */
    api_url: string;

    /**
     * The Workspace One Authorization URL depending on your region.
     */
    auth_url: string;

    /**
     * The Workspace One client ID provided in the Workspace One Admin Dashboard.
     */
    client_id: string;

    /**
     * The Workspace One client secret provided in the Workspace One Admin Dashboard.
     */
    client_secret: string;
  }

  export interface TeamsDevicesCrowdstrikeConfigRequest {
    /**
     * The Crowdstrike API URL.
     */
    api_url: string;

    /**
     * The Crowdstrike client ID.
     */
    client_id: string;

    /**
     * The Crowdstrike client secret.
     */
    client_secret: string;

    /**
     * The Crowdstrike customer ID.
     */
    customer_id: string;
  }

  export interface TeamsDevicesUptycsConfigRequest {
    /**
     * The Uptycs API URL.
     */
    api_url: string;

    /**
     * The Uptycs client secret.
     */
    client_key: string;

    /**
     * The Uptycs client secret.
     */
    client_secret: string;

    /**
     * The Uptycs customer ID.
     */
    customer_id: string;
  }

  export interface TeamsDevicesIntuneConfigRequest {
    /**
     * The Intune client ID.
     */
    client_id: string;

    /**
     * The Intune client secret.
     */
    client_secret: string;

    /**
     * The Intune customer ID.
     */
    customer_id: string;
  }

  export interface TeamsDevicesKolideConfigRequest {
    /**
     * The Kolide client ID.
     */
    client_id: string;

    /**
     * The Kolide client secret.
     */
    client_secret: string;
  }

  export interface TeamsDevicesTaniumConfigRequest {
    /**
     * The Tanium API URL.
     */
    api_url: string;

    /**
     * The Tanium client secret.
     */
    client_secret: string;

    /**
     * If present, this id will be passed in the `CF-Access-Client-ID` header when
     * hitting the `api_url`
     */
    access_client_id?: string;

    /**
     * If present, this secret will be passed in the `CF-Access-Client-Secret` header
     * when hitting the `api_url`
     */
    access_client_secret?: string;
  }

  export interface TeamsDevicesSentineloneS2sConfigRequest {
    /**
     * The SentinelOne S2S API URL.
     */
    api_url: string;

    /**
     * The SentinelOne S2S client secret.
     */
    client_secret: string;
  }
}

export namespace Integrations {
  export import IntegrationCreateResponse = IntegrationsAPI.IntegrationCreateResponse;
  export import IntegrationUpdateResponse = IntegrationsAPI.IntegrationUpdateResponse;
  export import IntegrationDeleteResponse = IntegrationsAPI.IntegrationDeleteResponse;
  export import IntegrationGetResponse = IntegrationsAPI.IntegrationGetResponse;
  export import IntegrationCreateParams = IntegrationsAPI.IntegrationCreateParams;
  export import IntegrationUpdateParams = IntegrationsAPI.IntegrationUpdateParams;
}
