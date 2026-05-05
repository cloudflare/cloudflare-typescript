// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventsAPI from './events/events';
import {
  BaseEvents,
  EventGetParams,
  EventGetResponse,
  EventListParams,
  EventListResponse,
  Events,
} from './events/events';
import * as SnapshotsAPI from './snapshots/snapshots';
import {
  BaseSnapshots,
  SnapshotGetParams,
  SnapshotGetResponse,
  SnapshotListParams,
  SnapshotListResponse,
  Snapshots,
} from './snapshots/snapshots';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseConnectors extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'connectors'] = Object.freeze([
    'magicTransit',
    'connectors',
  ] as const);

  /**
   * Add a connector to your account
   *
   * @example
   * ```ts
   * const connector =
   *   await client.magicTransit.connectors.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     device: {},
   *   });
   * ```
   */
  create(params: ConnectorCreateParams, options?: RequestOptions): APIPromise<ConnectorCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/magic/connectors`, { body, ...options }) as APIPromise<{
        result: ConnectorCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replace Connector or Re-provision License Key
   *
   * @example
   * ```ts
   * const connector =
   *   await client.magicTransit.connectors.update(
   *     'connector_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const connectorListResponse of client.magicTransit.connectors.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ConnectorListParams,
    options?: RequestOptions,
  ): PagePromise<ConnectorListResponsesSinglePage, ConnectorListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/magic/connectors`,
      SinglePage<ConnectorListResponse>,
      { query, ...options },
    );
  }

  /**
   * Remove a connector from your account
   *
   * @example
   * ```ts
   * const connector =
   *   await client.magicTransit.connectors.delete(
   *     'connector_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    connectorID: string,
    params: ConnectorDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ConnectorDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/magic/connectors/${connectorID}`,
        options,
      ) as APIPromise<{ result: ConnectorDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edit Connector to update specific properties or Re-provision License Key
   *
   * @example
   * ```ts
   * const response = await client.magicTransit.connectors.edit(
   *   'connector_id',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
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
   *
   * @example
   * ```ts
   * const connector = await client.magicTransit.connectors.get(
   *   'connector_id',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
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
export class Connectors extends BaseConnectors {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);
}

export type ConnectorListResponsesSinglePage = SinglePage<ConnectorListResponse>;

export interface ConnectorCreateResponse {
  id: string;

  activated: boolean;

  /**
   * Allowed days of the week for upgrades. Default is all days.
   */
  interrupt_window_days_of_week: Array<
    'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'
  >;

  interrupt_window_duration_hours: number;

  /**
   * List of dates (YYYY-MM-DD) when upgrades are blocked.
   */
  interrupt_window_embargo_dates: Array<string>;

  interrupt_window_hour_of_day: number;

  last_updated: string;

  notes: string;

  timezone: string;

  device?: ConnectorCreateResponse.Device;

  last_heartbeat?: string;

  last_seen_version?: string;

  license_key?: string;
}

export namespace ConnectorCreateResponse {
  export interface Device {
    id: string;

    serial_number?: string;

    type?: 'MANAGED' | 'LICENSED';
  }
}

export interface ConnectorUpdateResponse {
  id: string;

  activated: boolean;

  /**
   * Allowed days of the week for upgrades. Default is all days.
   */
  interrupt_window_days_of_week: Array<
    'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'
  >;

  interrupt_window_duration_hours: number;

  /**
   * List of dates (YYYY-MM-DD) when upgrades are blocked.
   */
  interrupt_window_embargo_dates: Array<string>;

  interrupt_window_hour_of_day: number;

  last_updated: string;

  notes: string;

  timezone: string;

  device?: ConnectorUpdateResponse.Device;

  last_heartbeat?: string;

  last_seen_version?: string;

  license_key?: string;
}

export namespace ConnectorUpdateResponse {
  export interface Device {
    id: string;

    serial_number?: string;

    type?: 'MANAGED' | 'LICENSED';
  }
}

export interface ConnectorListResponse {
  id: string;

  activated: boolean;

  /**
   * Allowed days of the week for upgrades. Default is all days.
   */
  interrupt_window_days_of_week: Array<
    'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'
  >;

  interrupt_window_duration_hours: number;

  /**
   * List of dates (YYYY-MM-DD) when upgrades are blocked.
   */
  interrupt_window_embargo_dates: Array<string>;

  interrupt_window_hour_of_day: number;

  last_updated: string;

  notes: string;

  timezone: string;

  device?: ConnectorListResponse.Device;

  last_heartbeat?: string;

  last_seen_version?: string;

  license_key?: string;
}

export namespace ConnectorListResponse {
  export interface Device {
    id: string;

    serial_number?: string;

    type?: 'MANAGED' | 'LICENSED';
  }
}

export interface ConnectorDeleteResponse {
  id: string;

  activated: boolean;

  /**
   * Allowed days of the week for upgrades. Default is all days.
   */
  interrupt_window_days_of_week: Array<
    'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'
  >;

  interrupt_window_duration_hours: number;

  /**
   * List of dates (YYYY-MM-DD) when upgrades are blocked.
   */
  interrupt_window_embargo_dates: Array<string>;

  interrupt_window_hour_of_day: number;

  last_updated: string;

  notes: string;

  timezone: string;

  device?: ConnectorDeleteResponse.Device;

  last_heartbeat?: string;

  last_seen_version?: string;

  license_key?: string;
}

export namespace ConnectorDeleteResponse {
  export interface Device {
    id: string;

    serial_number?: string;

    type?: 'MANAGED' | 'LICENSED';
  }
}

export interface ConnectorEditResponse {
  id: string;

  activated: boolean;

  /**
   * Allowed days of the week for upgrades. Default is all days.
   */
  interrupt_window_days_of_week: Array<
    'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'
  >;

  interrupt_window_duration_hours: number;

  /**
   * List of dates (YYYY-MM-DD) when upgrades are blocked.
   */
  interrupt_window_embargo_dates: Array<string>;

  interrupt_window_hour_of_day: number;

  last_updated: string;

  notes: string;

  timezone: string;

  device?: ConnectorEditResponse.Device;

  last_heartbeat?: string;

  last_seen_version?: string;

  license_key?: string;
}

export namespace ConnectorEditResponse {
  export interface Device {
    id: string;

    serial_number?: string;

    type?: 'MANAGED' | 'LICENSED';
  }
}

export interface ConnectorGetResponse {
  id: string;

  activated: boolean;

  /**
   * Allowed days of the week for upgrades. Default is all days.
   */
  interrupt_window_days_of_week: Array<
    'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'
  >;

  interrupt_window_duration_hours: number;

  /**
   * List of dates (YYYY-MM-DD) when upgrades are blocked.
   */
  interrupt_window_embargo_dates: Array<string>;

  interrupt_window_hour_of_day: number;

  last_updated: string;

  notes: string;

  timezone: string;

  device?: ConnectorGetResponse.Device;

  last_heartbeat?: string;

  last_seen_version?: string;

  license_key?: string;
}

export namespace ConnectorGetResponse {
  export interface Device {
    id: string;

    serial_number?: string;

    type?: 'MANAGED' | 'LICENSED';
  }
}

export interface ConnectorCreateParams {
  /**
   * Path param: Account identifier
   */
  account_id: string;

  /**
   * Body param: Exactly one of id, serial_number, or provision_license must be
   * provided.
   */
  device: ConnectorCreateParams.Device;

  /**
   * Body param
   */
  activated?: boolean;

  /**
   * Body param: Allowed days of the week for upgrades. Default is all days.
   */
  interrupt_window_days_of_week?: Array<
    'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'
  >;

  /**
   * Body param
   */
  interrupt_window_duration_hours?: number;

  /**
   * Body param: List of dates (YYYY-MM-DD) when upgrades are blocked.
   */
  interrupt_window_embargo_dates?: Array<string>;

  /**
   * Body param
   */
  interrupt_window_hour_of_day?: number;

  /**
   * Body param
   */
  notes?: string;

  /**
   * Body param
   */
  timezone?: string;
}

export namespace ConnectorCreateParams {
  /**
   * Exactly one of id, serial_number, or provision_license must be provided.
   */
  export interface Device {
    id?: string;

    /**
     * When true, create and provision a new licence key for the connector.
     */
    provision_license?: boolean;

    serial_number?: string;
  }
}

export interface ConnectorUpdateParams {
  /**
   * Path param: Account identifier
   */
  account_id: string;

  /**
   * Body param
   */
  activated?: boolean;

  /**
   * Body param: Allowed days of the week for upgrades. Default is all days.
   */
  interrupt_window_days_of_week?: Array<
    'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'
  >;

  /**
   * Body param
   */
  interrupt_window_duration_hours?: number;

  /**
   * Body param: List of dates (YYYY-MM-DD) when upgrades are blocked.
   */
  interrupt_window_embargo_dates?: Array<string>;

  /**
   * Body param
   */
  interrupt_window_hour_of_day?: number;

  /**
   * Body param
   */
  notes?: string;

  /**
   * Body param: When true, regenerate license key for the connector.
   */
  provision_license?: boolean;

  /**
   * Body param
   */
  timezone?: string;
}

export interface ConnectorListParams {
  /**
   * Path param: Account identifier
   */
  account_id: string;

  /**
   * Query param: Filter connectors by device type.
   */
  device_type?: 'MANAGED' | 'LICENSED';
}

export interface ConnectorDeleteParams {
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
   * Body param
   */
  activated?: boolean;

  /**
   * Body param: Allowed days of the week for upgrades. Default is all days.
   */
  interrupt_window_days_of_week?: Array<
    'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'
  >;

  /**
   * Body param
   */
  interrupt_window_duration_hours?: number;

  /**
   * Body param: List of dates (YYYY-MM-DD) when upgrades are blocked.
   */
  interrupt_window_embargo_dates?: Array<string>;

  /**
   * Body param
   */
  interrupt_window_hour_of_day?: number;

  /**
   * Body param
   */
  notes?: string;

  /**
   * Body param: When true, regenerate license key for the connector.
   */
  provision_license?: boolean;

  /**
   * Body param
   */
  timezone?: string;
}

export interface ConnectorGetParams {
  /**
   * Account identifier
   */
  account_id: string;
}

Connectors.Events = Events;
Connectors.BaseEvents = BaseEvents;
Connectors.Snapshots = Snapshots;
Connectors.BaseSnapshots = BaseSnapshots;

export declare namespace Connectors {
  export {
    type ConnectorCreateResponse as ConnectorCreateResponse,
    type ConnectorUpdateResponse as ConnectorUpdateResponse,
    type ConnectorListResponse as ConnectorListResponse,
    type ConnectorDeleteResponse as ConnectorDeleteResponse,
    type ConnectorEditResponse as ConnectorEditResponse,
    type ConnectorGetResponse as ConnectorGetResponse,
    type ConnectorListResponsesSinglePage as ConnectorListResponsesSinglePage,
    type ConnectorCreateParams as ConnectorCreateParams,
    type ConnectorUpdateParams as ConnectorUpdateParams,
    type ConnectorListParams as ConnectorListParams,
    type ConnectorDeleteParams as ConnectorDeleteParams,
    type ConnectorEditParams as ConnectorEditParams,
    type ConnectorGetParams as ConnectorGetParams,
  };

  export {
    Events as Events,
    BaseEvents as BaseEvents,
    type EventListResponse as EventListResponse,
    type EventGetResponse as EventGetResponse,
    type EventListParams as EventListParams,
    type EventGetParams as EventGetParams,
  };

  export {
    Snapshots as Snapshots,
    BaseSnapshots as BaseSnapshots,
    type SnapshotListResponse as SnapshotListResponse,
    type SnapshotGetResponse as SnapshotGetResponse,
    type SnapshotListParams as SnapshotListParams,
    type SnapshotGetParams as SnapshotGetParams,
  };
}
