// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../resource';
import { isRequestOptions } from '../../../../../../core';
import { APIPromise } from '../../../../../../core';
import * as Core from '../../../../../../core';
import * as SpoofAPI from './spoof';

export class Spoof extends APIResource {
  /**
   * Get the TLDs by emails classified as spoof or not.
   */
  get(spoof: 'SPOOF' | 'NOT_SPOOF', query?: SpoofGetParams, options?: Core.RequestOptions): Core.APIPromise<SpoofGetResponse>
  get(spoof: 'SPOOF' | 'NOT_SPOOF', options?: Core.RequestOptions): Core.APIPromise<SpoofGetResponse>
  get(spoof: 'SPOOF' | 'NOT_SPOOF', query: SpoofGetParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<SpoofGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(spoof, {}, query);
    }
    return (this._client.get(`/radar/email/security/top/tlds/spoof/${spoof}`, { query, ...options }) as Core.APIPromise<{ result: SpoofGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface SpoofGetResponse {
  meta: SpoofGetResponse.Meta;

  top_0: Array<SpoofGetResponse.Top0>;
}

export namespace SpoofGetResponse {
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

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Top0 {
    name: string;

    value: string;
  }
}

export interface SpoofGetParams {
  /**
   * Filter for arc (Authenticated Received Chain).
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Filter for dkim.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filter for dmarc.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filter for TLDs by category.
   */
  tldCategory?: 'CLASSIC' | 'COUNTRY';

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3'>;
}

export namespace Spoof {
  export import SpoofGetResponse = SpoofAPI.SpoofGetResponse;
  export import SpoofGetParams = SpoofAPI.SpoofGetParams;
}
