// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as EventsAPI from './events';
import { EventGetParams, EventGetResponse, EventListParams, EventListResponse, Events } from './events';
import * as SnapshotsAPI from './snapshots';
import {
  SnapshotGetParams,
  SnapshotGetResponse,
  SnapshotListParams,
  SnapshotListResponse,
  Snapshots,
} from './snapshots';
import { SinglePage } from '../../../pagination';

export class Connectors extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);

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
   * Path param:
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
  account_id: string;
}

export interface ConnectorEditParams {
  /**
   * Path param:
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
  account_id: string;
}

Connectors.ConnectorListResponsesSinglePage = ConnectorListResponsesSinglePage;
Connectors.Events = Events;
Connectors.Snapshots = Snapshots;

export declare namespace Connectors {
  export {
    type ConnectorUpdateResponse as ConnectorUpdateResponse,
    type ConnectorListResponse as ConnectorListResponse,
    type ConnectorEditResponse as ConnectorEditResponse,
    type ConnectorGetResponse as ConnectorGetResponse,
    ConnectorListResponsesSinglePage as ConnectorListResponsesSinglePage,
    type ConnectorUpdateParams as ConnectorUpdateParams,
    type ConnectorListParams as ConnectorListParams,
    type ConnectorEditParams as ConnectorEditParams,
    type ConnectorGetParams as ConnectorGetParams,
  };

  export {
    Events as Events,
    type EventListResponse as EventListResponse,
    type EventGetResponse as EventGetResponse,
    type EventListParams as EventListParams,
    type EventGetParams as EventGetParams,
  };

  export {
    Snapshots as Snapshots,
    type SnapshotListResponse as SnapshotListResponse,
    type SnapshotGetResponse as SnapshotGetResponse,
    type SnapshotListParams as SnapshotListParams,
    type SnapshotGetParams as SnapshotGetParams,
  };
}
