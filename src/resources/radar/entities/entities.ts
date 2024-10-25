// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as EntitiesAPI from './entities';
import * as ASNsAPI from './asns';
import * as LocationsAPI from './locations';

export class Entities extends APIResource {
  asns: ASNsAPI.ASNs = new ASNsAPI.ASNs(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);

  /**
   * Get IP address information.
   */
  get(query: EntityGetParams, options?: Core.RequestOptions): Core.APIPromise<EntityGetResponse> {
    return (
      this._client.get('/radar/entities/ip', { query, ...options }) as Core.APIPromise<{
        result: EntityGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface EntityGetResponse {
  ip: EntityGetResponse.IP;
}

export namespace EntityGetResponse {
  export interface IP {
    asn: string;

    asnLocation: string;

    asnName: string;

    asnOrgName: string;

    ip: string;

    ipVersion: string;

    location: string;

    locationName: string;
  }
}

export interface EntityGetParams {
  /**
   * IP address.
   */
  ip: string;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';
}

export namespace Entities {
  export type EntityGetResponse = EntitiesAPI.EntityGetResponse;
  export type EntityGetParams = EntitiesAPI.EntityGetParams;
  export import ASNs = ASNsAPI.ASNs;
  export type ASNListResponse = ASNsAPI.ASNListResponse;
  export type ASNGetResponse = ASNsAPI.ASNGetResponse;
  export type ASNIPResponse = ASNsAPI.ASNIPResponse;
  export type ASNRelResponse = ASNsAPI.ASNRelResponse;
  export type ASNListParams = ASNsAPI.ASNListParams;
  export type ASNGetParams = ASNsAPI.ASNGetParams;
  export type ASNIPParams = ASNsAPI.ASNIPParams;
  export type ASNRelParams = ASNsAPI.ASNRelParams;
  export import Locations = LocationsAPI.Locations;
  export type LocationListResponse = LocationsAPI.LocationListResponse;
  export type LocationGetResponse = LocationsAPI.LocationGetResponse;
  export type LocationListParams = LocationsAPI.LocationListParams;
  export type LocationGetParams = LocationsAPI.LocationGetParams;
}
