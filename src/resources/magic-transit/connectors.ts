// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ConnectorsAPI from './connectors';
import { SinglePage } from '../../pagination';

export class Connectors extends APIResource {
  /**
   * Replace Connector
   */
  update(
    connectorId: string,
    params: ConnectorUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/magic/connectors/${connectorId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConnectorUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Connectors
   */
  list(
    params: ConnectorListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ConnectorListResponsesSinglePage, ConnectorListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/magic/connectors`,
      ConnectorListResponsesSinglePage,
      options,
    );
  }

  /**
   * Update Connector
   */
  edit(
    connectorId: string,
    params: ConnectorEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/magic/connectors/${connectorId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConnectorEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch Connector
   */
  get(
    connectorId: string,
    params: ConnectorGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/magic/connectors/${connectorId}`,
        options,
      ) as Core.APIPromise<{ result: ConnectorGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ConnectorListResponsesSinglePage extends SinglePage<ConnectorListResponse> {}

export interface ConnectorUpdateResponse {
  id: string;

  activated: boolean;

  interrupt_window_duration_hours: number;

  interrupt_window_hour_of_day: number;

  last_updated: string;

  notes: string;

  timezone: string;

  device?: ConnectorUpdateResponse.Device;

  last_heartbeat?: string;

  last_seen_version?: string;
}

export namespace ConnectorUpdateResponse {
  export interface Device {
    id: string;

    serial_number?: string;
  }
}

export interface ConnectorListResponse {
  id: string;

  activated: boolean;

  interrupt_window_duration_hours: number;

  interrupt_window_hour_of_day: number;

  last_updated: string;

  notes: string;

  timezone: string;

  device?: ConnectorListResponse.Device;

  last_heartbeat?: string;

  last_seen_version?: string;
}

export namespace ConnectorListResponse {
  export interface Device {
    id: string;

    serial_number?: string;
  }
}

export interface ConnectorEditResponse {
  id: string;

  activated: boolean;

  interrupt_window_duration_hours: number;

  interrupt_window_hour_of_day: number;

  last_updated: string;

  notes: string;

  timezone: string;

  device?: ConnectorEditResponse.Device;

  last_heartbeat?: string;

  last_seen_version?: string;
}

export namespace ConnectorEditResponse {
  export interface Device {
    id: string;

    serial_number?: string;
  }
}

export interface ConnectorGetResponse {
  id: string;

  activated: boolean;

  interrupt_window_duration_hours: number;

  interrupt_window_hour_of_day: number;

  last_updated: string;

  notes: string;

  timezone: string;

  device?: ConnectorGetResponse.Device;

  last_heartbeat?: string;

  last_seen_version?: string;
}

export namespace ConnectorGetResponse {
  export interface Device {
    id: string;

    serial_number?: string;
  }
}

export interface ConnectorUpdateParams {
  /**
   * Path param: Account identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  activated?: boolean;

  /**
   * Body param:
   */
  interrupt_window_duration_hours?: number;

  /**
   * Body param:
   */
  interrupt_window_hour_of_day?: number;

  /**
   * Body param:
   */
  notes?: string;

  /**
   * Body param:
   */
  timezone?: string;
}

export interface ConnectorListParams {
  /**
   * Account identifier
   */
  account_id: string;
}

export interface ConnectorEditParams {
  /**
   * Path param: Account identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  activated?: boolean;

  /**
   * Body param:
   */
  interrupt_window_duration_hours?: number;

  /**
   * Body param:
   */
  interrupt_window_hour_of_day?: number;

  /**
   * Body param:
   */
  notes?: string;

  /**
   * Body param:
   */
  timezone?: string;
}

export interface ConnectorGetParams {
  /**
   * Account identifier
   */
  account_id: string;
}

export namespace Connectors {
  export import ConnectorUpdateResponse = ConnectorsAPI.ConnectorUpdateResponse;
  export import ConnectorListResponse = ConnectorsAPI.ConnectorListResponse;
  export import ConnectorEditResponse = ConnectorsAPI.ConnectorEditResponse;
  export import ConnectorGetResponse = ConnectorsAPI.ConnectorGetResponse;
  export import ConnectorListResponsesSinglePage = ConnectorsAPI.ConnectorListResponsesSinglePage;
  export import ConnectorUpdateParams = ConnectorsAPI.ConnectorUpdateParams;
  export import ConnectorListParams = ConnectorsAPI.ConnectorListParams;
  export import ConnectorEditParams = ConnectorsAPI.ConnectorEditParams;
  export import ConnectorGetParams = ConnectorsAPI.ConnectorGetParams;
}
