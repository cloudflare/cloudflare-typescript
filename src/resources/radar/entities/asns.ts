// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as ASNsAPI from './asns';

export class ASNs extends APIResource {
  /**
   * Get a list of autonomous systems (ASes).
   */
  list(query?: ASNListParams, options?: Core.RequestOptions): Core.APIPromise<ASNListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ASNListResponse>;
  list(
    query: ASNListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ASNListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/entities/asns', { query, ...options }) as Core.APIPromise<{
        result: ASNListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the requested autonomous system information. A confidence level below `5`
   * indicates a low level of confidence in the traffic data - normally this happens
   * because Cloudflare has a small amount of traffic from/to this AS). Population
   * estimates come from APNIC (refer to https://labs.apnic.net/?p=526).
   */
  get(asn: number, query?: ASNGetParams, options?: Core.RequestOptions): Core.APIPromise<ASNGetResponse>;
  get(asn: number, options?: Core.RequestOptions): Core.APIPromise<ASNGetResponse>;
  get(
    asn: number,
    query: ASNGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ASNGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(asn, {}, query);
    }
    return (
      this._client.get(`/radar/entities/asns/${asn}`, { query, ...options }) as Core.APIPromise<{
        result: ASNGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the requested autonomous system information based on IP address. Population
   * estimates come from APNIC (refer to https://labs.apnic.net/?p=526).
   */
  ip(query: ASNIPParams, options?: Core.RequestOptions): Core.APIPromise<ASNIPResponse> {
    return (
      this._client.get('/radar/entities/asns/ip', { query, ...options }) as Core.APIPromise<{
        result: ASNIPResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get AS-level relationship for given networks.
   */
  rel(asn: number, query?: ASNRelParams, options?: Core.RequestOptions): Core.APIPromise<ASNRelResponse>;
  rel(asn: number, options?: Core.RequestOptions): Core.APIPromise<ASNRelResponse>;
  rel(
    asn: number,
    query: ASNRelParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ASNRelResponse> {
    if (isRequestOptions(query)) {
      return this.rel(asn, {}, query);
    }
    return (
      this._client.get(`/radar/entities/asns/${asn}/rel`, { query, ...options }) as Core.APIPromise<{
        result: ASNRelResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ASNListResponse {
  asns: Array<ASNListResponse.ASN>;
}

export namespace ASNListResponse {
  export interface ASN {
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

export interface ASNGetResponse {
  asn: ASNGetResponse.ASN;
}

export namespace ASNGetResponse {
  export interface ASN {
    asn: number;

    confidenceLevel: number;

    country: string;

    countryName: string;

    estimatedUsers: ASN.EstimatedUsers;

    name: string;

    orgName: string;

    related: Array<ASN.Related>;

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

  export namespace ASN {
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

export interface ASNIPResponse {
  asn: ASNIPResponse.ASN;
}

export namespace ASNIPResponse {
  export interface ASN {
    asn: number;

    country: string;

    countryName: string;

    estimatedUsers: ASN.EstimatedUsers;

    name: string;

    orgName: string;

    related: Array<ASN.Related>;

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

  export namespace ASN {
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

export interface ASNRelResponse {
  meta: ASNRelResponse.Meta;

  rels: Array<ASNRelResponse.Rel>;
}

export namespace ASNRelResponse {
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

export interface ASNListParams {
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

export interface ASNGetParams {
  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';
}

export interface ASNIPParams {
  /**
   * IP address.
   */
  ip: string;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';
}

export interface ASNRelParams {
  /**
   * Get the AS relationship of ASN2 with respect to the given ASN
   */
  asn2?: number;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';
}

export namespace ASNs {
  export import ASNListResponse = ASNsAPI.ASNListResponse;
  export import ASNGetResponse = ASNsAPI.ASNGetResponse;
  export import ASNIPResponse = ASNsAPI.ASNIPResponse;
  export import ASNRelResponse = ASNsAPI.ASNRelResponse;
  export import ASNListParams = ASNsAPI.ASNListParams;
  export import ASNGetParams = ASNsAPI.ASNGetParams;
  export import ASNIPParams = ASNsAPI.ASNIPParams;
  export import ASNRelParams = ASNsAPI.ASNRelParams;
}
