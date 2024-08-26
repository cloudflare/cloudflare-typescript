// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import * as SummaryAPI from './summary';
import * as EmailAPI from '../email';

export class Summary extends APIResource {
  /**
   * Percentage distribution of emails classified per ARC validation.
   */
  arc(query?: SummaryARCParams, options?: Core.RequestOptions): Core.APIPromise<SummaryARCResponse>
  arc(options?: Core.RequestOptions): Core.APIPromise<SummaryARCResponse>
  arc(query: SummaryARCParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<SummaryARCResponse> {
    if (isRequestOptions(query)) {
      return this.arc({}, query);
    }
    return (this._client.get('/radar/email/routing/summary/arc', { query, ...options }) as Core.APIPromise<{ result: SummaryARCResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified per DKIM validation.
   */
  dkim(query?: SummaryDKIMParams, options?: Core.RequestOptions): Core.APIPromise<SummaryDKIMResponse>
  dkim(options?: Core.RequestOptions): Core.APIPromise<SummaryDKIMResponse>
  dkim(query: SummaryDKIMParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<SummaryDKIMResponse> {
    if (isRequestOptions(query)) {
      return this.dkim({}, query);
    }
    return (this._client.get('/radar/email/routing/summary/dkim', { query, ...options }) as Core.APIPromise<{ result: SummaryDKIMResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified per DMARC validation.
   */
  dmarc(query?: SummaryDMARCParams, options?: Core.RequestOptions): Core.APIPromise<SummaryDMARCResponse>
  dmarc(options?: Core.RequestOptions): Core.APIPromise<SummaryDMARCResponse>
  dmarc(query: SummaryDMARCParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<SummaryDMARCResponse> {
    if (isRequestOptions(query)) {
      return this.dmarc({}, query);
    }
    return (this._client.get('/radar/email/routing/summary/dmarc', { query, ...options }) as Core.APIPromise<{ result: SummaryDMARCResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails by Encrypted
   */
  encrypted(query?: SummaryEncryptedParams, options?: Core.RequestOptions): Core.APIPromise<SummaryEncryptedResponse>
  encrypted(options?: Core.RequestOptions): Core.APIPromise<SummaryEncryptedResponse>
  encrypted(query: SummaryEncryptedParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<SummaryEncryptedResponse> {
    if (isRequestOptions(query)) {
      return this.encrypted({}, query);
    }
    return (this._client.get('/radar/email/routing/summary/encrypted', { query, ...options }) as Core.APIPromise<{ result: SummaryEncryptedResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails by Ip Version.
   */
  ipVersion(query?: SummaryIPVersionParams, options?: Core.RequestOptions): Core.APIPromise<SummaryIPVersionResponse>
  ipVersion(options?: Core.RequestOptions): Core.APIPromise<SummaryIPVersionResponse>
  ipVersion(query: SummaryIPVersionParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<SummaryIPVersionResponse> {
    if (isRequestOptions(query)) {
      return this.ipVersion({}, query);
    }
    return (this._client.get('/radar/email/routing/summary/ip_version', { query, ...options }) as Core.APIPromise<{ result: SummaryIPVersionResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified per SPF validation.
   */
  spf(query?: SummarySPFParams, options?: Core.RequestOptions): Core.APIPromise<SummarySPFResponse>
  spf(options?: Core.RequestOptions): Core.APIPromise<SummarySPFResponse>
  spf(query: SummarySPFParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<SummarySPFResponse> {
    if (isRequestOptions(query)) {
      return this.spf({}, query);
    }
    return (this._client.get('/radar/email/routing/summary/spf', { query, ...options }) as Core.APIPromise<{ result: SummarySPFResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface SummaryARCResponse {
  meta: SummaryARCResponse.Meta;

  summary_0: EmailAPI.RadarEmailSummary;
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

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }
}

export interface SummaryDKIMResponse {
  meta: SummaryDKIMResponse.Meta;

  summary_0: EmailAPI.RadarEmailSummary;
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

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }
}

export interface SummaryDMARCResponse {
  meta: SummaryDMARCResponse.Meta;

  summary_0: EmailAPI.RadarEmailSummary;
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

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }
}

export interface SummaryEncryptedResponse {
  meta: SummaryEncryptedResponse.Meta;

  summary_0: SummaryEncryptedResponse.Summary0;
}

export namespace SummaryEncryptedResponse {
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

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Summary0 {
    ENCRYPTED: string;

    NOT_ENCRYPTED: string;
  }
}

export interface SummaryIPVersionResponse {
  meta: SummaryIPVersionResponse.Meta;

  summary_0: SummaryIPVersionResponse.Summary0;
}

export namespace SummaryIPVersionResponse {
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

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Summary0 {
    IPv4: string;

    IPv6: string;
  }
}

export interface SummarySPFResponse {
  meta: SummarySPFResponse.Meta;

  summary_0: EmailAPI.RadarEmailSummary;
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

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }
}

export interface SummaryARCParams {
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
   * Filter for encrypted emails.
   */
  encrypted?: Array<'ENCRYPTED' | 'NOT_ENCRYPTED'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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
   * Filter for dmarc.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filter for encrypted emails.
   */
  encrypted?: Array<'ENCRYPTED' | 'NOT_ENCRYPTED'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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
   * Filter for encrypted emails.
   */
  encrypted?: Array<'ENCRYPTED' | 'NOT_ENCRYPTED'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;
}

export interface SummaryEncryptedParams {
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
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;
}

export interface SummaryIPVersionParams {
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
   * Filter for encrypted emails.
   */
  encrypted?: Array<'ENCRYPTED' | 'NOT_ENCRYPTED'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

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
   * Filter for encrypted emails.
   */
  encrypted?: Array<'ENCRYPTED' | 'NOT_ENCRYPTED'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export namespace Summary {
  export import SummaryARCResponse = SummaryAPI.SummaryARCResponse;
  export import SummaryDKIMResponse = SummaryAPI.SummaryDKIMResponse;
  export import SummaryDMARCResponse = SummaryAPI.SummaryDMARCResponse;
  export import SummaryEncryptedResponse = SummaryAPI.SummaryEncryptedResponse;
  export import SummaryIPVersionResponse = SummaryAPI.SummaryIPVersionResponse;
  export import SummarySPFResponse = SummaryAPI.SummarySPFResponse;
  export import SummaryARCParams = SummaryAPI.SummaryARCParams;
  export import SummaryDKIMParams = SummaryAPI.SummaryDKIMParams;
  export import SummaryDMARCParams = SummaryAPI.SummaryDMARCParams;
  export import SummaryEncryptedParams = SummaryAPI.SummaryEncryptedParams;
  export import SummaryIPVersionParams = SummaryAPI.SummaryIPVersionParams;
  export import SummarySPFParams = SummaryAPI.SummarySPFParams;
}
