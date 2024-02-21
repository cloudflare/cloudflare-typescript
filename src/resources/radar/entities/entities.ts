// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EntitiesAPI from 'cloudflare/resources/radar/entities/entities';
import * as AsnsAPI from 'cloudflare/resources/radar/entities/asns';
import * as LocationsAPI from 'cloudflare/resources/radar/entities/locations';

export class Entities extends APIResource {
  asns: AsnsAPI.Asns = new AsnsAPI.Asns(this._client);
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
  export import EntityGetResponse = EntitiesAPI.EntityGetResponse;
  export import EntityGetParams = EntitiesAPI.EntityGetParams;
  export import Asns = AsnsAPI.Asns;
  export import AsnListResponse = AsnsAPI.AsnListResponse;
  export import AsnGetResponse = AsnsAPI.AsnGetResponse;
  export import AsnIPResponse = AsnsAPI.AsnIPResponse;
  export import AsnRelResponse = AsnsAPI.AsnRelResponse;
  export import AsnListParams = AsnsAPI.AsnListParams;
  export import AsnGetParams = AsnsAPI.AsnGetParams;
  export import AsnIPParams = AsnsAPI.AsnIPParams;
  export import AsnRelParams = AsnsAPI.AsnRelParams;
  export import Locations = LocationsAPI.Locations;
  export import LocationListResponse = LocationsAPI.LocationListResponse;
  export import LocationGetResponse = LocationsAPI.LocationGetResponse;
  export import LocationListParams = LocationsAPI.LocationListParams;
  export import LocationGetParams = LocationsAPI.LocationGetParams;
}
