// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DMARCAPI from 'cloudflare/resources/radar/email/security/top/ases/dmarc';

export class DMARC extends APIResource {
  /**
   * Get the top autonomous systems (AS) by emails DMARC validation.
   */
  get(
    dmarc: 'PASS' | 'NONE' | 'FAIL',
    query?: DMARCGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DMARCGetResponse>;
  get(dmarc: 'PASS' | 'NONE' | 'FAIL', options?: Core.RequestOptions): Core.APIPromise<DMARCGetResponse>;
  get(
    dmarc: 'PASS' | 'NONE' | 'FAIL',
    query: DMARCGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DMARCGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(dmarc, {}, query);
    }
    return (
      this._client.get(`/radar/email/security/top/ases/dmarc/${dmarc}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: DMARCGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DMARCGetResponse {
  meta: DMARCGetResponse.Meta;

  top_0: Array<DMARCGetResponse.Top0>;
}

export namespace DMARCGetResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface ConfidenceInfo {
      annotations?: Array<ConfidenceInfo.Annotation>;

      level?: number;
    }

    export namespace ConfidenceInfo {
      export interface Annotation {
        dataSource: string;

        description: string;

        eventType: string;

        isInstantaneous: unknown;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Top0 {
    clientASN: number;

    clientASName: string;

    value: string;
  }
}

export interface DMARCGetParams {
  /**
   * Filter for arc (Authenticated Received Chain).
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl'
  >;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Filter for dkim.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;
}

export namespace DMARC {
  export import DMARCGetResponse = DMARCAPI.DMARCGetResponse;
  export import DMARCGetParams = DMARCAPI.DMARCGetParams;
}
