// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ASNs extends APIResource {
  /**
   * Retrieves a list of autonomous systems.
   */
  list(query: ASNListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ASNListResponse> {
    return (
      this._client.get('/radar/entities/asns', { query, ...options }) as APIPromise<{
        result: ASNListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the requested autonomous system information. (A confidence level below
   * `5` indicates a low level of confidence in the traffic data - normally this
   * happens because Cloudflare has a small amount of traffic from/to this AS).
   * Population estimates come from APNIC (refer to https://labs.apnic.net/?p=526).
   */
  get(
    asn: number,
    query: ASNGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ASNGetResponse> {
    return (
      this._client.get(path`/radar/entities/asns/${asn}`, { query, ...options }) as APIPromise<{
        result: ASNGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the requested autonomous system information based on IP address.
   * Population estimates come from APNIC (refer to https://labs.apnic.net/?p=526).
   */
  ip(query: ASNIPParams, options?: RequestOptions): APIPromise<ASNIPResponse> {
    return (
      this._client.get('/radar/entities/asns/ip', { query, ...options }) as APIPromise<{
        result: ASNIPResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves AS-level relationship for given networks.
   */
  rel(
    asn: number,
    query: ASNRelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ASNRelResponse> {
    return (
      this._client.get(path`/radar/entities/asns/${asn}/rel`, { query, ...options }) as APIPromise<{
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
   * Comma-separated list of Autonomous System Numbers (ASNs).
   */
  asn?: string;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Location alpha-2 code.
   */
  location?: string;

  /**
   * Skips the specified number of objects before fetching the results.
   */
  offset?: number;

  /**
   * Metric to order the ASNs by.
   */
  orderBy?: 'ASN' | 'POPULATION';
}

export interface ASNGetParams {
  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';
}

export interface ASNIPParams {
  /**
   * IP address.
   */
  ip: string;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';
}

export interface ASNRelParams {
  /**
   * Retrieves the AS relationship of ASN2 with respect to the given ASN.
   */
  asn2?: number;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';
}

export declare namespace ASNs {
  export {
    type ASNListResponse as ASNListResponse,
    type ASNGetResponse as ASNGetResponse,
    type ASNIPResponse as ASNIPResponse,
    type ASNRelResponse as ASNRelResponse,
    type ASNListParams as ASNListParams,
    type ASNGetParams as ASNGetParams,
    type ASNIPParams as ASNIPParams,
    type ASNRelParams as ASNRelParams,
  };
}
