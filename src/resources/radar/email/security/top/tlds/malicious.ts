// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../resource';
import { isRequestOptions } from '../../../../../../core';
import * as Core from '../../../../../../core';

export class Malicious extends APIResource {
  /**
   * Retrieves the top TLDs by emails classified as malicious or not.
   */
  get(
    malicious: 'MALICIOUS' | 'NOT_MALICIOUS',
    query?: MaliciousGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MaliciousGetResponse>;
  get(
    malicious: 'MALICIOUS' | 'NOT_MALICIOUS',
    options?: Core.RequestOptions,
  ): Core.APIPromise<MaliciousGetResponse>;
  get(
    malicious: 'MALICIOUS' | 'NOT_MALICIOUS',
    query: MaliciousGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MaliciousGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(malicious, {}, query);
    }
    return (
      this._client.get(`/radar/email/security/top/tlds/malicious/${malicious}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: MaliciousGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface MaliciousGetResponse {
  meta: MaliciousGetResponse.Meta;

  top_0: Array<MaliciousGetResponse.Top0>;
}

export namespace MaliciousGetResponse {
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

export interface MaliciousGetParams {
  /**
   * Filters results by ARC (Authenticated Received Chain) validation.
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by the specified date range. For example, use `7d` and
   * `7dcontrol` to compare this week with the previous week. Use this parameter or
   * set specific start and end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Filters results by DKIM (DomainKeys Identified Mail) validation status.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by DMARC (Domain-based Message Authentication, Reporting and
   * Conformance) validation status.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by SPF (Sender Policy Framework) validation status.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by TLD category.
   */
  tldCategory?: 'CLASSIC' | 'COUNTRY';

  /**
   * Filters results by TLS version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3'>;
}

export declare namespace Malicious {
  export { type MaliciousGetResponse as MaliciousGetResponse, type MaliciousGetParams as MaliciousGetParams };
}
