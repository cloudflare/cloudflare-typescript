// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../resource';
import { isRequestOptions } from '../../../../../../core';
import * as Core from '../../../../../../core';
import * as MaliciousAPI from './malicious';
import { Malicious, MaliciousGetParams, MaliciousGetResponse } from './malicious';
import * as SpamAPI from './spam';
import { Spam, SpamGetParams, SpamGetResponse } from './spam';
import * as SpoofAPI from './spoof';
import { Spoof, SpoofGetParams, SpoofGetResponse } from './spoof';

export class Tlds extends APIResource {
  malicious: MaliciousAPI.Malicious = new MaliciousAPI.Malicious(this._client);
  spam: SpamAPI.Spam = new SpamAPI.Spam(this._client);
  spoof: SpoofAPI.Spoof = new SpoofAPI.Spoof(this._client);

  /**
   * Retrieves the top TLDs by number of email messages.
   */
  get(query?: TldGetParams, options?: Core.RequestOptions): Core.APIPromise<TldGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<TldGetResponse>;
  get(
    query: TldGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TldGetResponse> {
    if (isRequestOptions(query)) {
      return this.get({}, query);
    }
    return (
      this._client.get('/radar/email/security/top/tlds', { query, ...options }) as Core.APIPromise<{
        result: TldGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TldGetResponse {
  meta: TldGetResponse.Meta;

  top_0: Array<TldGetResponse.Top0>;
}

export namespace TldGetResponse {
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

export interface TldGetParams {
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

Tlds.Malicious = Malicious;
Tlds.Spam = Spam;
Tlds.Spoof = Spoof;

export declare namespace Tlds {
  export { type TldGetResponse as TldGetResponse, type TldGetParams as TldGetParams };

  export {
    Malicious as Malicious,
    type MaliciousGetResponse as MaliciousGetResponse,
    type MaliciousGetParams as MaliciousGetParams,
  };

  export { Spam as Spam, type SpamGetResponse as SpamGetResponse, type SpamGetParams as SpamGetParams };

  export { Spoof as Spoof, type SpoofGetResponse as SpoofGetResponse, type SpoofGetParams as SpoofGetParams };
}
