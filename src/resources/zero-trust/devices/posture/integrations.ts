// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IntegrationsAPI from 'cloudflare/resources/zero-trust/devices/posture/integrations';
import * as Shared from 'cloudflare/resources/shared';
import { SinglePage } from 'cloudflare/pagination';

export class Integrations extends APIResource {
  /**
   * Create a new device posture integration.
   */
  create(
    params: IntegrationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Integration | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/devices/posture/integration`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Integration | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the list of device posture integrations for an account.
   */
  list(
    params: IntegrationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IntegrationsSinglePage, Integration> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/posture/integration`,
      IntegrationsSinglePage,
      options,
    );
  }

  /**
   * Delete a configured device posture integration.
   */
  delete(
    integrationId: string,
    params: IntegrationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/devices/posture/integration/${integrationId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured device posture integration.
   */
  edit(
    integrationId: string,
    params: IntegrationEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Integration | null> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/devices/posture/integration/${integrationId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Integration | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches details for a single device posture integration.
   */
  get(
    integrationId: string,
    params: IntegrationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Integration | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/devices/posture/integration/${integrationId}`,
        options,
      ) as Core.APIPromise<{ result: Integration | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class IntegrationsSinglePage extends SinglePage<Integration> {}

export interface Integration {
  /**
   * API UUID.
   */
  id?: string;

  /**
   * The configuration object containing third-party integration information.
   */
  config?: Integration.Config;

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

export namespace Integration {
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

export interface UnnamedSchemaRefB84b377dfc9454d455b646d4bc9ab507 {
  /**
   * API UUID.
   */
  id?: string;

  /**
   * The configuration object containing third-party integration information.
   */
  config?: UnnamedSchemaRefB84b377dfc9454d455b646d4bc9ab507.Config;

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

export namespace UnnamedSchemaRefB84b377dfc9454d455b646d4bc9ab507 {
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
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The configuration object containing third-party integration
   * information.
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
   * Body param: The interval between each posture check with the third-party API.
   * Use `m` for minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).
   */
  interval: string;

  /**
   * Body param: The name of the device posture integration.
   */
  name: string;

  /**
   * Body param: The type of device posture integration.
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

export interface IntegrationListParams {
  account_id: string;
}

export interface IntegrationDeleteParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface IntegrationEditParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The configuration object containing third-party integration
   * information.
   */
  config?:
    | IntegrationEditParams.TeamsDevicesWorkspaceOneConfigRequest
    | IntegrationEditParams.TeamsDevicesCrowdstrikeConfigRequest
    | IntegrationEditParams.TeamsDevicesUptycsConfigRequest
    | IntegrationEditParams.TeamsDevicesIntuneConfigRequest
    | IntegrationEditParams.TeamsDevicesKolideConfigRequest
    | IntegrationEditParams.TeamsDevicesTaniumConfigRequest
    | IntegrationEditParams.TeamsDevicesSentineloneS2sConfigRequest;

  /**
   * Body param: The interval between each posture check with the third-party API.
   * Use `m` for minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).
   */
  interval?: string;

  /**
   * Body param: The name of the device posture integration.
   */
  name?: string;

  /**
   * Body param: The type of device posture integration.
   */
  type?: 'workspace_one' | 'crowdstrike_s2s' | 'uptycs' | 'intune' | 'kolide' | 'tanium' | 'sentinelone_s2s';
}

export namespace IntegrationEditParams {
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

export interface IntegrationGetParams {
  account_id: string;
}

export namespace Integrations {
  export import Integration = IntegrationsAPI.Integration;
  export import UnnamedSchemaRefB84b377dfc9454d455b646d4bc9ab507 = IntegrationsAPI.UnnamedSchemaRefB84b377dfc9454d455b646d4bc9ab507;
  export import IntegrationsSinglePage = IntegrationsAPI.IntegrationsSinglePage;
  export import IntegrationCreateParams = IntegrationsAPI.IntegrationCreateParams;
  export import IntegrationListParams = IntegrationsAPI.IntegrationListParams;
  export import IntegrationDeleteParams = IntegrationsAPI.IntegrationDeleteParams;
  export import IntegrationEditParams = IntegrationsAPI.IntegrationEditParams;
  export import IntegrationGetParams = IntegrationsAPI.IntegrationGetParams;
}
