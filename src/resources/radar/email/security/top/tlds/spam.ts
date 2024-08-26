// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../resource';
import { isRequestOptions } from '../../../../../../core';
import { APIPromise } from '../../../../../../core';
import * as Core from '../../../../../../core';
import * as SpamAPI from './spam';

export class Spam extends APIResource {
  /**
   * Get the top TLDs by emails classified as Spam or not.
   */
  get(spam: 'SPAM' | 'NOT_SPAM', query?: SpamGetParams, options?: Core.RequestOptions): Core.APIPromise<SpamGetResponse>
  get(spam: 'SPAM' | 'NOT_SPAM', options?: Core.RequestOptions): Core.APIPromise<SpamGetResponse>
  get(spam: 'SPAM' | 'NOT_SPAM', query: SpamGetParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<SpamGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(spam, {}, query);
    }
    return (this._client.get(`/radar/email/security/top/tlds/spam/${spam}`, { query, ...options }) as Core.APIPromise<{ result: SpamGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface SpamGetResponse {
  meta: SpamGetResponse.Meta;

  top_0: Array<SpamGetResponse.Top0>;
}

export namespace SpamGetResponse {
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

export interface SpamGetParams {
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

export namespace Spam {
  export import SpamGetResponse = SpamAPI.SpamGetResponse;
  export import SpamGetParams = SpamAPI.SpamGetParams;
}
