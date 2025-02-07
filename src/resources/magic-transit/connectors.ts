// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { PagePromise, SinglePage } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Connectors extends APIResource {
  /**
   * Replace Connector
   */
  update(
    connectorID: string,
    params: ConnectorUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ConnectorUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/magic/connectors/${connectorID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: ConnectorUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Connectors
   */
  list(
    params: ConnectorListParams,
    options?: RequestOptions,
  ): PagePromise<ConnectorListResponsesSinglePage, ConnectorListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/magic/connectors`,
      SinglePage<ConnectorListResponse>,
      options,
    );
  }

  /**
   * Update Connector
   */
  edit(
    connectorID: string,
    params: ConnectorEditParams,
    options?: RequestOptions,
  ): APIPromise<ConnectorEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/magic/connectors/${connectorID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: ConnectorEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch Connector
   */
  get(
    connectorID: string,
    params: ConnectorGetParams,
    options?: RequestOptions,
  ): APIPromise<ConnectorGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/magic/connectors/${connectorID}`, options) as APIPromise<{
        result: ConnectorGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ConnectorListResponsesSinglePage = SinglePage<ConnectorListResponse>;

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

export declare namespace Connectors {
  export {
    type ConnectorUpdateResponse as ConnectorUpdateResponse,
    type ConnectorListResponse as ConnectorListResponse,
    type ConnectorEditResponse as ConnectorEditResponse,
    type ConnectorGetResponse as ConnectorGetResponse,
    type ConnectorListResponsesSinglePage as ConnectorListResponsesSinglePage,
    type ConnectorUpdateParams as ConnectorUpdateParams,
    type ConnectorListParams as ConnectorListParams,
    type ConnectorEditParams as ConnectorEditParams,
    type ConnectorGetParams as ConnectorGetParams,
  };
}
