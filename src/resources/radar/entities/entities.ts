// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ASNsAPI from './asns';
import {
  ASNAsSetParams,
  ASNAsSetResponse,
  ASNBotnetThreatFeedParams,
  ASNBotnetThreatFeedResponse,
  ASNGetParams,
  ASNGetResponse,
  ASNIPParams,
  ASNIPResponse,
  ASNListParams,
  ASNListResponse,
  ASNRelParams,
  ASNRelResponse,
  ASNs,
  BaseASNs,
} from './asns';
import * as LocationsAPI from './locations';
import {
  BaseLocations,
  LocationGetParams,
  LocationGetResponse,
  LocationListParams,
  LocationListResponse,
  Locations,
} from './locations';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseEntities extends APIResource {
  static override readonly _key: readonly ['radar', 'entities'] = Object.freeze([
    'radar',
    'entities',
  ] as const);

  /**
   * Retrieves IP address information.
   *
   * @example
   * ```ts
   * const entity = await client.radar.entities.get({
   *   ip: '8.8.8.8',
   * });
   * ```
   */
  get(query: EntityGetParams, options?: RequestOptions): APIPromise<EntityGetResponse> {
    return (
      this._client.get('/radar/entities/ip', { query, ...options }) as APIPromise<{
        result: EntityGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Entities extends BaseEntities {
  asns: ASNsAPI.ASNs = new ASNsAPI.ASNs(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
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
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';
}

Entities.ASNs = ASNs;
Entities.BaseASNs = BaseASNs;
Entities.Locations = Locations;
Entities.BaseLocations = BaseLocations;

export declare namespace Entities {
  export { type EntityGetResponse as EntityGetResponse, type EntityGetParams as EntityGetParams };

  export {
    ASNs as ASNs,
    BaseASNs as BaseASNs,
    type ASNListResponse as ASNListResponse,
    type ASNAsSetResponse as ASNAsSetResponse,
    type ASNBotnetThreatFeedResponse as ASNBotnetThreatFeedResponse,
    type ASNGetResponse as ASNGetResponse,
    type ASNIPResponse as ASNIPResponse,
    type ASNRelResponse as ASNRelResponse,
    type ASNListParams as ASNListParams,
    type ASNAsSetParams as ASNAsSetParams,
    type ASNBotnetThreatFeedParams as ASNBotnetThreatFeedParams,
    type ASNGetParams as ASNGetParams,
    type ASNIPParams as ASNIPParams,
    type ASNRelParams as ASNRelParams,
  };

  export {
    Locations as Locations,
    BaseLocations as BaseLocations,
    type LocationListResponse as LocationListResponse,
    type LocationGetResponse as LocationGetResponse,
    type LocationListParams as LocationListParams,
    type LocationGetParams as LocationGetParams,
  };
}
