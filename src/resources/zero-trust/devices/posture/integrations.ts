// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { APIPromise } from '../../../../api-promise';
import { PagePromise, SinglePage } from '../../../../pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Integrations extends APIResource {
  /**
   * Create a new device posture integration.
   */
  create(params: IntegrationCreateParams, options?: RequestOptions): APIPromise<Integration | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/devices/posture/integration`, {
        body,
        ...options,
      }) as APIPromise<{ result: Integration | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the list of device posture integrations for an account.
   */
  list(
    params: IntegrationListParams,
    options?: RequestOptions,
  ): PagePromise<IntegrationsSinglePage, Integration> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/devices/posture/integration`,
      SinglePage<Integration>,
      options,
    );
  }

  /**
   * Delete a configured device posture integration.
   */
  delete(
    integrationID: string,
    params: IntegrationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/devices/posture/integration/${integrationID}`,
        options,
      ) as APIPromise<{ result: IntegrationDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured device posture integration.
   */
  edit(
    integrationID: string,
    params: IntegrationEditParams,
    options?: RequestOptions,
  ): APIPromise<Integration | null> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/devices/posture/integration/${integrationID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Integration | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches details for a single device posture integration.
   */
  get(
    integrationID: string,
    params: IntegrationGetParams,
    options?: RequestOptions,
  ): APIPromise<Integration | null> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/devices/posture/integration/${integrationID}`,
        options,
      ) as APIPromise<{ result: Integration | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type IntegrationsSinglePage = SinglePage<Integration>;

export interface Integration {
  /**
   * API UUID.
   */
  id?: string;

  /**
   * The Workspace One Config Response.
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
  type?:
    | 'workspace_one'
    | 'crowdstrike_s2s'
    | 'uptycs'
    | 'intune'
    | 'kolide'
    | 'tanium'
    | 'sentinelone_s2s'
    | 'custom_s2s';
}

export namespace Integration {
  /**
   * The Workspace One Config Response.
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
    | IntegrationCreateParams.TeamsDevicesSentineloneS2sConfigRequest
    | IntegrationCreateParams.TeamsDevicesCustomS2sConfigRequest;

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
  type:
    | 'workspace_one'
    | 'crowdstrike_s2s'
    | 'uptycs'
    | 'intune'
    | 'kolide'
    | 'tanium'
    | 'sentinelone_s2s'
    | 'custom_s2s';
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

  export interface TeamsDevicesCustomS2sConfigRequest {
    /**
     * This id will be passed in the `CF-Access-Client-ID` header when hitting the
     * `api_url`
     */
    access_client_id: string;

    /**
     * This secret will be passed in the `CF-Access-Client-Secret` header when hitting
     * the `api_url`
     */
    access_client_secret: string;

    /**
     * The Custom Device Posture Integration API URL.
     */
    api_url: string;
  }
}

export interface IntegrationListParams {
  account_id: string;
}

export interface IntegrationDeleteParams {
  account_id: string;
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
    | IntegrationEditParams.TeamsDevicesSentineloneS2sConfigRequest
    | IntegrationEditParams.TeamsDevicesCustomS2sConfigRequest;

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
  type?:
    | 'workspace_one'
    | 'crowdstrike_s2s'
    | 'uptycs'
    | 'intune'
    | 'kolide'
    | 'tanium'
    | 'sentinelone_s2s'
    | 'custom_s2s';
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

  export interface TeamsDevicesCustomS2sConfigRequest {
    /**
     * This id will be passed in the `CF-Access-Client-ID` header when hitting the
     * `api_url`
     */
    access_client_id: string;

    /**
     * This secret will be passed in the `CF-Access-Client-Secret` header when hitting
     * the `api_url`
     */
    access_client_secret: string;

    /**
     * The Custom Device Posture Integration API URL.
     */
    api_url: string;
  }
}

export interface IntegrationGetParams {
  account_id: string;
}

export declare namespace Integrations {
  export {
    type Integration as Integration,
    type IntegrationDeleteResponse as IntegrationDeleteResponse,
    type IntegrationsSinglePage as IntegrationsSinglePage,
    type IntegrationCreateParams as IntegrationCreateParams,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationDeleteParams as IntegrationDeleteParams,
    type IntegrationEditParams as IntegrationEditParams,
    type IntegrationGetParams as IntegrationGetParams,
  };
}
