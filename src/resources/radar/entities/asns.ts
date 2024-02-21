// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AsnsAPI from 'cloudflare/resources/radar/entities/asns';

export class Asns extends APIResource {
  /**
   * Gets a list of autonomous systems (AS).
   */
  list(query?: AsnListParams, options?: Core.RequestOptions): Core.APIPromise<AsnListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AsnListResponse>;
  list(
    query: AsnListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AsnListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/entities/asns', { query, ...options }) as Core.APIPromise<{
        result: AsnListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the requested autonomous system information. A confidence level below `5`
   * indicates a low level of confidence in the traffic data - normally this happens
   * because Cloudflare has a small amount of traffic from/to this AS). Population
   * estimates come from APNIC (refer to https://labs.apnic.net/?p=526).
   */
  get(asn: number, query?: AsnGetParams, options?: Core.RequestOptions): Core.APIPromise<AsnGetResponse>;
  get(asn: number, options?: Core.RequestOptions): Core.APIPromise<AsnGetResponse>;
  get(
    asn: number,
    query: AsnGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AsnGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(asn, {}, query);
    }
    return (
      this._client.get(`/radar/entities/asns/${asn}`, { query, ...options }) as Core.APIPromise<{
        result: AsnGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the requested autonomous system information based on IP address. Population
   * estimates come from APNIC (refer to https://labs.apnic.net/?p=526).
   */
  ip(query: AsnIPParams, options?: Core.RequestOptions): Core.APIPromise<AsnIPResponse> {
    return (
      this._client.get('/radar/entities/asns/ip', { query, ...options }) as Core.APIPromise<{
        result: AsnIPResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get AS-level relationship for given networks.
   */
  rel(asn: number, query?: AsnRelParams, options?: Core.RequestOptions): Core.APIPromise<AsnRelResponse>;
  rel(asn: number, options?: Core.RequestOptions): Core.APIPromise<AsnRelResponse>;
  rel(
    asn: number,
    query: AsnRelParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AsnRelResponse> {
    if (isRequestOptions(query)) {
      return this.rel(asn, {}, query);
    }
    return (
      this._client.get(`/radar/entities/asns/${asn}/rel`, { query, ...options }) as Core.APIPromise<{
        result: AsnRelResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AsnListResponse {
  asns: Array<AsnListResponse.Asn>;
}

export namespace AsnListResponse {
  export interface Asn {
    asn: number;

    country: string;

    countryName: string;

    name: string;

    aka?: string;

    /**
     * Deprecated field. Please use 'aka'.
     */
    nameLong?: string;

    orgName?: string;

    website?: string;
  }
}

export interface AsnGetResponse {
  asn: AsnGetResponse.Asn;
}

export namespace AsnGetResponse {
  export interface Asn {
    asn: number;

    confidenceLevel: number;

    country: string;

    countryName: string;

    estimatedUsers: Asn.EstimatedUsers;

    name: string;

    orgName: string;

    related: Array<Asn.Related>;

    /**
     * Regional Internet Registry
     */
    source: string;

    website: string;

    aka?: string;

    /**
     * Deprecated field. Please use 'aka'.
     */
    nameLong?: string;
  }

  export namespace Asn {
    export interface EstimatedUsers {
      locations: Array<EstimatedUsers.Location>;

      /**
       * Total estimated users
       */
      estimatedUsers?: number;
    }

    export namespace EstimatedUsers {
      export interface Location {
        locationAlpha2: string;

        locationName: string;

        /**
         * Estimated users per location
         */
        estimatedUsers?: number;
      }
    }

    export interface Related {
      asn: number;

      name: string;

      aka?: string;

      /**
       * Total estimated users
       */
      estimatedUsers?: number;
    }
  }
}

export interface AsnIPResponse {
  asn: AsnIPResponse.Asn;
}

export namespace AsnIPResponse {
  export interface Asn {
    asn: number;

    country: string;

    countryName: string;

    estimatedUsers: Asn.EstimatedUsers;

    name: string;

    orgName: string;

    related: Array<Asn.Related>;

    /**
     * Regional Internet Registry
     */
    source: string;

    website: string;

    aka?: string;

    /**
     * Deprecated field. Please use 'aka'.
     */
    nameLong?: string;
  }

  export namespace Asn {
    export interface EstimatedUsers {
      locations: Array<EstimatedUsers.Location>;

      /**
       * Total estimated users
       */
      estimatedUsers?: number;
    }

    export namespace EstimatedUsers {
      export interface Location {
        locationAlpha2: string;

        locationName: string;

        /**
         * Estimated users per location
         */
        estimatedUsers?: number;
      }
    }

    export interface Related {
      asn: number;

      name: string;

      aka?: string;

      /**
       * Total estimated users
       */
      estimatedUsers?: number;
    }
  }
}

export interface AsnRelResponse {
  meta: AsnRelResponse.Meta;

  rels: Array<AsnRelResponse.Rel>;
}

export namespace AsnRelResponse {
  export interface Meta {
    data_time: string;

    query_time: string;

    total_peers: number;
  }

  export interface Rel {
    asn1: number;

    asn1_country: string;

    asn1_name: string;

    asn2: number;

    asn2_country: string;

    asn2_name: string;

    rel: string;
  }
}

export interface AsnListParams {
  /**
   * Comma separated list of ASNs.
   */
  asn?: string;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Location Alpha2 to filter results.
   */
  location?: string;

  /**
   * Number of objects to skip before grabbing results.
   */
  offset?: number;

  /**
   * Order asn list.
   */
  orderBy?: 'ASN' | 'POPULATION';
}

export interface AsnGetParams {
  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';
}

export interface AsnIPParams {
  /**
   * IP address.
   */
  ip: string;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';
}

export interface AsnRelParams {
  /**
   * Get the AS relationship of ASN2 with respect to the given ASN
   */
  asn2?: number;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';
}

export namespace Asns {
  export import AsnListResponse = AsnsAPI.AsnListResponse;
  export import AsnGetResponse = AsnsAPI.AsnGetResponse;
  export import AsnIPResponse = AsnsAPI.AsnIPResponse;
  export import AsnRelResponse = AsnsAPI.AsnRelResponse;
  export import AsnListParams = AsnsAPI.AsnListParams;
  export import AsnGetParams = AsnsAPI.AsnGetParams;
  export import AsnIPParams = AsnsAPI.AsnIPParams;
  export import AsnRelParams = AsnsAPI.AsnRelParams;
}
