// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';

export class ASPA extends APIResource {
  /**
   * Retrieves ASPA (Autonomous System Provider Authorization) changes over time.
   * Returns daily aggregated changes including additions, removals, and
   * modifications of ASPA objects.
   *
   * @example
   * ```ts
   * const response = await client.radar.bgp.rpki.aspa.changes();
   * ```
   */
  changes(query?: ASPAChangesParams, options?: Core.RequestOptions): Core.APIPromise<ASPAChangesResponse>;
  changes(options?: Core.RequestOptions): Core.APIPromise<ASPAChangesResponse>;
  changes(
    query: ASPAChangesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ASPAChangesResponse> {
    if (isRequestOptions(query)) {
      return this.changes({}, query);
    }
    return (
      this._client.get('/radar/bgp/rpki/aspa/changes', { query, ...options }) as Core.APIPromise<{
        result: ASPAChangesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves current or historical ASPA (Autonomous System Provider Authorization)
   * objects. ASPA objects define which ASNs are authorized upstream providers for a
   * customer ASN.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.bgp.rpki.aspa.snapshot();
   * ```
   */
  snapshot(query?: ASPASnapshotParams, options?: Core.RequestOptions): Core.APIPromise<ASPASnapshotResponse>;
  snapshot(options?: Core.RequestOptions): Core.APIPromise<ASPASnapshotResponse>;
  snapshot(
    query: ASPASnapshotParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ASPASnapshotResponse> {
    if (isRequestOptions(query)) {
      return this.snapshot({}, query);
    }
    return (
      this._client.get('/radar/bgp/rpki/aspa/snapshot', { query, ...options }) as Core.APIPromise<{
        result: ASPASnapshotResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves ASPA (Autonomous System Provider Authorization) object count over
   * time. Supports filtering by RIR or location (country code) to generate multiple
   * named series. If no RIR or location filter is specified, returns total count.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.bgp.rpki.aspa.timeseries();
   * ```
   */
  timeseries(
    query?: ASPATimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ASPATimeseriesResponse>;
  timeseries(options?: Core.RequestOptions): Core.APIPromise<ASPATimeseriesResponse>;
  timeseries(
    query: ASPATimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ASPATimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.timeseries({}, query);
    }
    return (
      this._client.get('/radar/bgp/rpki/aspa/timeseries', { query, ...options }) as Core.APIPromise<{
        result: ASPATimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ASPAChangesResponse {
  asnInfo: ASPAChangesResponse.ASNInfo;

  changes: Array<ASPAChangesResponse.Change>;

  meta: ASPAChangesResponse.Meta;
}

export namespace ASPAChangesResponse {
  export interface ASNInfo {
    '13335': ASNInfo._13335;
  }

  export namespace ASNInfo {
    export interface _13335 {
      /**
       * ASN number.
       */
      asn: number;

      /**
       * Alpha-2 country code.
       */
      country: string;

      /**
       * AS name.
       */
      name: string;
    }
  }

  export interface Change {
    /**
     * Number of new ASPA objects created.
     */
    customersAdded: number;

    /**
     * Number of ASPA objects deleted.
     */
    customersRemoved: number;

    /**
     * Date of the changes in ISO 8601 format.
     */
    date: string;

    entries: Array<Change.Entry>;

    /**
     * Number of providers added to existing objects.
     */
    providersAdded: number;

    /**
     * Number of providers removed from existing objects.
     */
    providersRemoved: number;

    /**
     * Running total of active ASPA objects after this day.
     */
    totalCount: number;
  }

  export namespace Change {
    export interface Entry {
      /**
       * The customer ASN affected.
       */
      customerAsn: number;

      providers: Array<number>;

      type: 'CustomerAdded' | 'CustomerRemoved' | 'ProvidersAdded' | 'ProvidersRemoved';
    }
  }

  export interface Meta {
    /**
     * Timestamp of the underlying data.
     */
    dataTime: string;

    /**
     * Timestamp when the query was executed.
     */
    queryTime: string;
  }
}

export interface ASPASnapshotResponse {
  asnInfo: ASPASnapshotResponse.ASNInfo;

  aspaObjects: Array<ASPASnapshotResponse.ASPAObject>;

  meta: ASPASnapshotResponse.Meta;
}

export namespace ASPASnapshotResponse {
  export interface ASNInfo {
    '13335': ASNInfo._13335;
  }

  export namespace ASNInfo {
    export interface _13335 {
      /**
       * ASN number.
       */
      asn: number;

      /**
       * Alpha-2 country code.
       */
      country: string;

      /**
       * AS name.
       */
      name: string;
    }
  }

  export interface ASPAObject {
    /**
     * The customer ASN publishing the ASPA object.
     */
    customerAsn: number;

    providers: Array<number>;
  }

  export interface Meta {
    /**
     * Timestamp of the underlying data.
     */
    dataTime: string;

    /**
     * Timestamp when the query was executed.
     */
    queryTime: string;

    /**
     * Total number of ASPA objects.
     */
    totalCount: number;
  }
}

export interface ASPATimeseriesResponse {
  meta: ASPATimeseriesResponse.Meta;

  serie_0: ASPATimeseriesResponse.Serie0;
}

export namespace ASPATimeseriesResponse {
  export interface Meta {
    /**
     * Timestamp of the underlying data.
     */
    dataTime: string;

    /**
     * Timestamp when the query was executed.
     */
    queryTime: string;
  }

  export interface Serie0 {
    timestamps: Array<string>;

    values: Array<string>;
  }
}

export interface ASPAChangesParams {
  /**
   * Filter changes involving this ASN (as customer or provider).
   */
  asn?: number;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: string;

  /**
   * Start of the date range (inclusive).
   */
  dateStart?: string;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Include ASN metadata (name, country) in response.
   */
  includeAsnInfo?: boolean;
}

export interface ASPASnapshotParams {
  /**
   * Filter by customer ASN (the ASN publishing the ASPA object).
   */
  customerAsn?: number;

  /**
   * Filters results by the specified datetime (ISO 8601).
   */
  date?: string;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Include ASN metadata (name, country) in response.
   */
  includeAsnInfo?: boolean;

  /**
   * Filter by provider ASN (an authorized upstream provider in ASPA objects).
   */
  providerAsn?: number;
}

export interface ASPATimeseriesParams {
  /**
   * End of the date range (inclusive).
   */
  dateEnd?: string;

  /**
   * Start of the date range (inclusive).
   */
  dateStart?: string;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 location
   * codes.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filter by Regional Internet Registry (RIR). Multiple RIRs generate multiple
   * series.
   */
  rir?: Array<'RIPE_NCC' | 'ARIN' | 'APNIC' | 'LACNIC' | 'AFRINIC'>;
}

export declare namespace ASPA {
  export {
    type ASPAChangesResponse as ASPAChangesResponse,
    type ASPASnapshotResponse as ASPASnapshotResponse,
    type ASPATimeseriesResponse as ASPATimeseriesResponse,
    type ASPAChangesParams as ASPAChangesParams,
    type ASPASnapshotParams as ASPASnapshotParams,
    type ASPATimeseriesParams as ASPATimeseriesParams,
  };
}
