// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AsnsAPI from 'cloudflare/resources/radar/entities/asns';

export class Asns extends APIResource {
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
  export import AsnRelResponse = AsnsAPI.AsnRelResponse;
  export import AsnRelParams = AsnsAPI.AsnRelParams;
}
