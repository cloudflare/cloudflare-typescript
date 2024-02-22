// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as SummaryAPI from 'cloudflare/resources/radar/email/security/summary';

export class Summary extends APIResource {
  /**
   * Percentage distribution of emails classified per ARC validation.
   */
  arc(query?: SummaryARCParams, options?: Core.RequestOptions): Core.APIPromise<SummaryARCResponse>;
  arc(options?: Core.RequestOptions): Core.APIPromise<SummaryARCResponse>;
  arc(
    query: SummaryARCParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryARCResponse> {
    if (isRequestOptions(query)) {
      return this.arc({}, query);
    }
    return (
      this._client.get('/radar/email/security/summary/arc', { query, ...options }) as Core.APIPromise<{
        result: SummaryARCResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified per DKIM validation.
   */
  dkim(query?: SummaryDKIMParams, options?: Core.RequestOptions): Core.APIPromise<SummaryDKIMResponse>;
  dkim(options?: Core.RequestOptions): Core.APIPromise<SummaryDKIMResponse>;
  dkim(
    query: SummaryDKIMParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryDKIMResponse> {
    if (isRequestOptions(query)) {
      return this.dkim({}, query);
    }
    return (
      this._client.get('/radar/email/security/summary/dkim', { query, ...options }) as Core.APIPromise<{
        result: SummaryDKIMResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified per DMARC validation.
   */
  dmarc(query?: SummaryDMARCParams, options?: Core.RequestOptions): Core.APIPromise<SummaryDMARCResponse>;
  dmarc(options?: Core.RequestOptions): Core.APIPromise<SummaryDMARCResponse>;
  dmarc(
    query: SummaryDMARCParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryDMARCResponse> {
    if (isRequestOptions(query)) {
      return this.dmarc({}, query);
    }
    return (
      this._client.get('/radar/email/security/summary/dmarc', { query, ...options }) as Core.APIPromise<{
        result: SummaryDMARCResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified as MALICIOUS.
   */
  malicious(
    query?: SummaryMaliciousParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryMaliciousResponse>;
  malicious(options?: Core.RequestOptions): Core.APIPromise<SummaryMaliciousResponse>;
  malicious(
    query: SummaryMaliciousParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryMaliciousResponse> {
    if (isRequestOptions(query)) {
      return this.malicious({}, query);
    }
    return (
      this._client.get('/radar/email/security/summary/malicious', { query, ...options }) as Core.APIPromise<{
        result: SummaryMaliciousResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Proportion of emails categorized as either spam or legitimate (non-spam).
   */
  spam(query?: SummarySpamParams, options?: Core.RequestOptions): Core.APIPromise<SummarySpamResponse>;
  spam(options?: Core.RequestOptions): Core.APIPromise<SummarySpamResponse>;
  spam(
    query: SummarySpamParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummarySpamResponse> {
    if (isRequestOptions(query)) {
      return this.spam({}, query);
    }
    return (
      this._client.get('/radar/email/security/summary/spam', { query, ...options }) as Core.APIPromise<{
        result: SummarySpamResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified per SPF validation.
   */
  spf(query?: SummarySPFParams, options?: Core.RequestOptions): Core.APIPromise<SummarySPFResponse>;
  spf(options?: Core.RequestOptions): Core.APIPromise<SummarySPFResponse>;
  spf(
    query: SummarySPFParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummarySPFResponse> {
    if (isRequestOptions(query)) {
      return this.spf({}, query);
    }
    return (
      this._client.get('/radar/email/security/summary/spf', { query, ...options }) as Core.APIPromise<{
        result: SummarySPFResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified in Threat Categories.
   */
  threatCategory(
    query?: SummaryThreatCategoryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryThreatCategoryResponse>;
  threatCategory(options?: Core.RequestOptions): Core.APIPromise<SummaryThreatCategoryResponse>;
  threatCategory(
    query: SummaryThreatCategoryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryThreatCategoryResponse> {
    if (isRequestOptions(query)) {
      return this.threatCategory({}, query);
    }
    return (
      this._client.get('/radar/email/security/summary/threat_category', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: SummaryThreatCategoryResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SummaryARCResponse {
  meta: SummaryARCResponse.Meta;

  summary_0: SummaryARCResponse.Summary0;
}

export namespace SummaryARCResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    normalization: string;

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

  export interface Summary0 {
    FAIL: string;

    NONE: string;

    PASS: string;
  }
}

export interface SummaryDKIMResponse {
  meta: SummaryDKIMResponse.Meta;

  summary_0: SummaryDKIMResponse.Summary0;
}

export namespace SummaryDKIMResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    normalization: string;

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

  export interface Summary0 {
    FAIL: string;

    NONE: string;

    PASS: string;
  }
}

export interface SummaryDMARCResponse {
  meta: SummaryDMARCResponse.Meta;

  summary_0: SummaryDMARCResponse.Summary0;
}

export namespace SummaryDMARCResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    normalization: string;

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

  export interface Summary0 {
    FAIL: string;

    NONE: string;

    PASS: string;
  }
}

export interface SummaryMaliciousResponse {
  meta: SummaryMaliciousResponse.Meta;

  summary_0: SummaryMaliciousResponse.Summary0;
}

export namespace SummaryMaliciousResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    normalization: string;

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

  export interface Summary0 {
    MALICIOUS: string;

    NOT_MALICIOUS: string;
  }
}

export interface SummarySpamResponse {
  meta: SummarySpamResponse.Meta;

  summary_0: SummarySpamResponse.Summary0;
}

export namespace SummarySpamResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    normalization: string;

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

  export interface Summary0 {
    NOT_SPAM: string;

    SPAM: string;
  }
}

export interface SummarySPFResponse {
  meta: SummarySPFResponse.Meta;

  summary_0: SummarySPFResponse.Summary0;
}

export namespace SummarySPFResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    normalization: string;

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

  export interface Summary0 {
    FAIL: string;

    NONE: string;

    PASS: string;
  }
}

export interface SummaryThreatCategoryResponse {
  meta: SummaryThreatCategoryResponse.Meta;

  summary_0: SummaryThreatCategoryResponse.Summary0;
}

export namespace SummaryThreatCategoryResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    normalization: string;

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

  export interface Summary0 {
    BrandImpersonation: string;

    CredentialHarvester: string;

    IdentityDeception: string;

    Link: string;
  }
}

export interface SummaryARCParams {
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
   * Filter for dmarc.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

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

export interface SummaryDKIMParams {
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
   * Filter for dmarc.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

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

export interface SummaryDMARCParams {
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

export interface SummaryMaliciousParams {
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
   * Filter for dmarc.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

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

export interface SummarySpamParams {
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
   * Filter for dmarc.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

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

export interface SummarySPFParams {
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
   * Filter for dmarc.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

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
}

export interface SummaryThreatCategoryParams {
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
   * Filter for dmarc.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

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

export namespace Summary {
  export import SummaryARCResponse = SummaryAPI.SummaryARCResponse;
  export import SummaryDKIMResponse = SummaryAPI.SummaryDKIMResponse;
  export import SummaryDMARCResponse = SummaryAPI.SummaryDMARCResponse;
  export import SummaryMaliciousResponse = SummaryAPI.SummaryMaliciousResponse;
  export import SummarySpamResponse = SummaryAPI.SummarySpamResponse;
  export import SummarySPFResponse = SummaryAPI.SummarySPFResponse;
  export import SummaryThreatCategoryResponse = SummaryAPI.SummaryThreatCategoryResponse;
  export import SummaryARCParams = SummaryAPI.SummaryARCParams;
  export import SummaryDKIMParams = SummaryAPI.SummaryDKIMParams;
  export import SummaryDMARCParams = SummaryAPI.SummaryDMARCParams;
  export import SummaryMaliciousParams = SummaryAPI.SummaryMaliciousParams;
  export import SummarySpamParams = SummaryAPI.SummarySpamParams;
  export import SummarySPFParams = SummaryAPI.SummarySPFParams;
  export import SummaryThreatCategoryParams = SummaryAPI.SummaryThreatCategoryParams;
}
