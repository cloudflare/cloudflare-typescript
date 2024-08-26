// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Status } from './status';
import * as OutgoingAPI from './outgoing';
import * as StatusAPI from './status';

export class OutgoingResource extends APIResource {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);

  /**
   * Create primary zone configuration for outgoing zone transfers.
   */
  create(params: OutgoingCreateParams, options?: Core.RequestOptions): Core.APIPromise<OutgoingCreateResponse> {
    const { zone_id, ...body } = params;
    return (this._client.post(`/zones/${zone_id}/secondary_dns/outgoing`, { body, ...options }) as Core.APIPromise<{ result: OutgoingCreateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update primary zone configuration for outgoing zone transfers.
   */
  update(params: OutgoingUpdateParams, options?: Core.RequestOptions): Core.APIPromise<OutgoingUpdateResponse> {
    const { zone_id, ...body } = params;
    return (this._client.put(`/zones/${zone_id}/secondary_dns/outgoing`, { body, ...options }) as Core.APIPromise<{ result: OutgoingUpdateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete primary zone configuration for outgoing zone transfers.
   */
  delete(params: OutgoingDeleteParams, options?: Core.RequestOptions): Core.APIPromise<OutgoingDeleteResponse> {
    const { zone_id } = params;
    return (this._client.delete(`/zones/${zone_id}/secondary_dns/outgoing`, options) as Core.APIPromise<{ result: OutgoingDeleteResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Disable outgoing zone transfers for primary zone and clears IXFR backlog of
   * primary zone.
   */
  disable(params: OutgoingDisableParams, options?: Core.RequestOptions): Core.APIPromise<DisableTransfer> {
    const { zone_id, body } = params;
    return (this._client.post(`/zones/${zone_id}/secondary_dns/outgoing/disable`, { body: body, ...options }) as Core.APIPromise<{ result: DisableTransfer }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable outgoing zone transfers for primary zone.
   */
  enable(params: OutgoingEnableParams, options?: Core.RequestOptions): Core.APIPromise<EnableTransfer> {
    const { zone_id, body } = params;
    return (this._client.post(`/zones/${zone_id}/secondary_dns/outgoing/enable`, { body: body, ...options }) as Core.APIPromise<{ result: EnableTransfer }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Notifies the secondary nameserver(s) and clears IXFR backlog of primary zone.
   */
  forceNotify(params: OutgoingForceNotifyParams, options?: Core.RequestOptions): Core.APIPromise<OutgoingForceNotifyResponse> {
    const { zone_id, body } = params;
    return (this._client.post(`/zones/${zone_id}/secondary_dns/outgoing/force_notify`, { body: body, ...options }) as Core.APIPromise<{ result: OutgoingForceNotifyResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get primary zone configuration for outgoing zone transfers.
   */
  get(params: OutgoingGetParams, options?: Core.RequestOptions): Core.APIPromise<OutgoingGetResponse> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}/secondary_dns/outgoing`, options) as Core.APIPromise<{ result: OutgoingGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The zone transfer status of a primary zone
 */
export type DisableTransfer = string

/**
 * The zone transfer status of a primary zone
 */
export type EnableTransfer = string

export interface Outgoing {
  id?: string;

  /**
   * The time for a specific event.
   */
  checked_time?: string;

  /**
   * The time for a specific event.
   */
  created_time?: string;

  /**
   * The time for a specific event.
   */
  last_transferred_time?: string;

  /**
   * Zone name.
   */
  name?: string;

  /**
   * A list of peer tags.
   */
  peers?: Array<string>;

  /**
   * The serial number of the SOA for the given zone.
   */
  soa_serial?: number;
}

/**
 * The zone transfer status of a primary zone
 */
export type OutgoingStatus = string | null

export interface OutgoingCreateResponse {
  id?: string;

  /**
   * The time for a specific event.
   */
  checked_time?: string;

  /**
   * The time for a specific event.
   */
  created_time?: string;

  /**
   * The time for a specific event.
   */
  last_transferred_time?: string;

  /**
   * Zone name.
   */
  name?: string;

  /**
   * A list of peer tags.
   */
  peers?: Array<string>;

  /**
   * The serial number of the SOA for the given zone.
   */
  soa_serial?: number;
}

export interface OutgoingUpdateResponse {
  id?: string;

  /**
   * The time for a specific event.
   */
  checked_time?: string;

  /**
   * The time for a specific event.
   */
  created_time?: string;

  /**
   * The time for a specific event.
   */
  last_transferred_time?: string;

  /**
   * Zone name.
   */
  name?: string;

  /**
   * A list of peer tags.
   */
  peers?: Array<string>;

  /**
   * The serial number of the SOA for the given zone.
   */
  soa_serial?: number;
}

export interface OutgoingDeleteResponse {
  id?: string;
}

/**
 * When force_notify query parameter is set to true, the response is a simple
 * string
 */
export type OutgoingForceNotifyResponse = string

export interface OutgoingGetResponse {
  id?: string;

  /**
   * The time for a specific event.
   */
  checked_time?: string;

  /**
   * The time for a specific event.
   */
  created_time?: string;

  /**
   * The time for a specific event.
   */
  last_transferred_time?: string;

  /**
   * Zone name.
   */
  name?: string;

  /**
   * A list of peer tags.
   */
  peers?: Array<string>;

  /**
   * The serial number of the SOA for the given zone.
   */
  soa_serial?: number;
}

export interface OutgoingCreateParams {
  /**
   * Path param:
   */
  zone_id: string;

  /**
   * Body param: Zone name.
   */
  name: string;

  /**
   * Body param: A list of peer tags.
   */
  peers: Array<string>;
}

export interface OutgoingUpdateParams {
  /**
   * Path param:
   */
  zone_id: string;

  /**
   * Body param: Zone name.
   */
  name: string;

  /**
   * Body param: A list of peer tags.
   */
  peers: Array<string>;
}

export interface OutgoingDeleteParams {
  zone_id: string;
}

export interface OutgoingDisableParams {
  /**
   * Path param:
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface OutgoingEnableParams {
  /**
   * Path param:
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface OutgoingForceNotifyParams {
  /**
   * Path param:
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface OutgoingGetParams {
  zone_id: string;
}

export namespace OutgoingResource {
  export import DisableTransfer = OutgoingAPI.DisableTransfer;
  export import EnableTransfer = OutgoingAPI.EnableTransfer;
  export import Outgoing = OutgoingAPI.Outgoing;
  export import OutgoingStatus = OutgoingAPI.OutgoingStatus;
  export import OutgoingCreateResponse = OutgoingAPI.OutgoingCreateResponse;
  export import OutgoingUpdateResponse = OutgoingAPI.OutgoingUpdateResponse;
  export import OutgoingDeleteResponse = OutgoingAPI.OutgoingDeleteResponse;
  export import OutgoingForceNotifyResponse = OutgoingAPI.OutgoingForceNotifyResponse;
  export import OutgoingGetResponse = OutgoingAPI.OutgoingGetResponse;
  export import OutgoingCreateParams = OutgoingAPI.OutgoingCreateParams;
  export import OutgoingUpdateParams = OutgoingAPI.OutgoingUpdateParams;
  export import OutgoingDeleteParams = OutgoingAPI.OutgoingDeleteParams;
  export import OutgoingDisableParams = OutgoingAPI.OutgoingDisableParams;
  export import OutgoingEnableParams = OutgoingAPI.OutgoingEnableParams;
  export import OutgoingForceNotifyParams = OutgoingAPI.OutgoingForceNotifyParams;
  export import OutgoingGetParams = OutgoingAPI.OutgoingGetParams;
  export import Status = StatusAPI.Status;
  export import StatusGetParams = StatusAPI.StatusGetParams;
}
