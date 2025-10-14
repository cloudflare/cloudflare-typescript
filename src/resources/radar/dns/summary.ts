// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Summary extends APIResource {
  /**
   * Retrieves the distribution of DNS queries by cache status.
   *
   * @deprecated Use [Radar DNS Summary By Dimension](https://developers.cloudflare.com/api/resources/radar/subresources/dns/methods/summary_v2/) instead.
   */
  cacheHit(
    query: SummaryCacheHitParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryCacheHitResponse> {
    return (
      this._client.get('/radar/dns/summary/cache_hit', { query, ...options }) as APIPromise<{
        result: SummaryCacheHitResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of DNS responses by DNSSEC (DNS Security Extensions)
   * support.
   *
   * @deprecated Use [Radar DNS Summary By Dimension](https://developers.cloudflare.com/api/resources/radar/subresources/dns/methods/summary_v2/) instead.
   */
  dnssec(
    query: SummaryDNSSECParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryDNSSECResponse> {
    return (
      this._client.get('/radar/dns/summary/dnssec', { query, ...options }) as APIPromise<{
        result: SummaryDNSSECResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of DNS queries by DNSSEC (DNS Security Extensions)
   * client awareness.
   *
   * @deprecated Use [Radar DNS Summary By Dimension](https://developers.cloudflare.com/api/resources/radar/subresources/dns/methods/summary_v2/) instead.
   */
  dnssecAware(
    query: SummaryDNSSECAwareParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryDNSSECAwareResponse> {
    return (
      this._client.get('/radar/dns/summary/dnssec_aware', { query, ...options }) as APIPromise<{
        result: SummaryDNSSECAwareResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of DNSSEC-validated answers by end-to-end security
   * status.
   *
   * @deprecated Use [Radar DNS Summary By Dimension](https://developers.cloudflare.com/api/resources/radar/subresources/dns/methods/summary_v2/) instead.
   */
  dnssecE2E(
    query: SummaryDNSSECE2EParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryDNSSECE2EResponse> {
    return (
      this._client.get('/radar/dns/summary/dnssec_e2e', { query, ...options }) as APIPromise<{
        result: SummaryDNSSECE2EResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of DNS queries by IP version.
   *
   * @deprecated Use [Radar DNS Summary By Dimension](https://developers.cloudflare.com/api/resources/radar/subresources/dns/methods/summary_v2/) instead.
   */
  ipVersion(
    query: SummaryIPVersionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryIPVersionResponse> {
    return (
      this._client.get('/radar/dns/summary/ip_version', { query, ...options }) as APIPromise<{
        result: SummaryIPVersionResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of DNS queries by matching answers.
   *
   * @deprecated Use [Radar DNS Summary By Dimension](https://developers.cloudflare.com/api/resources/radar/subresources/dns/methods/summary_v2/) instead.
   */
  matchingAnswer(
    query: SummaryMatchingAnswerParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryMatchingAnswerResponse> {
    return (
      this._client.get('/radar/dns/summary/matching_answer', { query, ...options }) as APIPromise<{
        result: SummaryMatchingAnswerResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of DNS queries by DNS transport protocol.
   *
   * @deprecated Use [Radar DNS Summary By Dimension](https://developers.cloudflare.com/api/resources/radar/subresources/dns/methods/summary_v2/) instead.
   */
  protocol(
    query: SummaryProtocolParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryProtocolResponse> {
    return (
      this._client.get('/radar/dns/summary/protocol', { query, ...options }) as APIPromise<{
        result: SummaryProtocolResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of DNS queries by type.
   *
   * @deprecated Use [Radar DNS Summary By Dimension](https://developers.cloudflare.com/api/resources/radar/subresources/dns/methods/summary_v2/) instead.
   */
  queryType(
    query: SummaryQueryTypeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryQueryTypeResponse> {
    return (
      this._client.get('/radar/dns/summary/query_type', { query, ...options }) as APIPromise<{
        result: SummaryQueryTypeResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of DNS queries by response code.
   *
   * @deprecated Use [Radar DNS Summary By Dimension](https://developers.cloudflare.com/api/resources/radar/subresources/dns/methods/summary_v2/) instead.
   */
  responseCode(
    query: SummaryResponseCodeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryResponseCodeResponse> {
    return (
      this._client.get('/radar/dns/summary/response_code', { query, ...options }) as APIPromise<{
        result: SummaryResponseCodeResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of DNS queries by minimum response TTL.
   *
   * @deprecated Use [Radar DNS Summary By Dimension](https://developers.cloudflare.com/api/resources/radar/subresources/dns/methods/summary_v2/) instead.
   */
  responseTTL(
    query: SummaryResponseTTLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryResponseTTLResponse> {
    return (
      this._client.get('/radar/dns/summary/response_ttl', { query, ...options }) as APIPromise<{
        result: SummaryResponseTTLResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SummaryCacheHitResponse {
  /**
   * Metadata for the results.
   */
  meta: SummaryCacheHitResponse.Meta;

  summary_0: SummaryCacheHitResponse.Summary0;
}

export namespace SummaryCacheHitResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    confidenceInfo: Meta.ConfidenceInfo;

    dateRange: Array<Meta.DateRange>;

    /**
     * Timestamp of the last dataset update.
     */
    lastUpdated: string;

    /**
     * Normalization method applied to the results. Refer to
     * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
     */
    normalization:
      | 'PERCENTAGE'
      | 'MIN0_MAX'
      | 'MIN_MAX'
      | 'RAW_VALUES'
      | 'PERCENTAGE_CHANGE'
      | 'ROLLING_AVERAGE'
      | 'OVERLAPPED_PERCENTAGE'
      | 'RATIO';

    /**
     * Measurement units for the results.
     */
    units: Array<Meta.Unit>;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations: Array<ConfidenceInfo.Annotation>;

      /**
       * Provides an indication of how much confidence Cloudflare has in the data.
       */
      level: number;
    }

    export namespace ConfidenceInfo {
      /**
       * Annotation associated with the result (e.g. outage or other type of event).
       */
      export interface Annotation {
        dataSource: string;

        description: string;

        endDate: string;

        eventType: string;

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;
      }
    }

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

    export interface Unit {
      name: string;

      value: string;
    }
  }

  export interface Summary0 {
    /**
     * A numeric string.
     */
    NEGATIVE: string;

    /**
     * A numeric string.
     */
    POSITIVE: string;
  }
}

export interface SummaryDNSSECResponse {
  /**
   * Metadata for the results.
   */
  meta: SummaryDNSSECResponse.Meta;

  summary_0: SummaryDNSSECResponse.Summary0;
}

export namespace SummaryDNSSECResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    confidenceInfo: Meta.ConfidenceInfo;

    dateRange: Array<Meta.DateRange>;

    /**
     * Timestamp of the last dataset update.
     */
    lastUpdated: string;

    /**
     * Normalization method applied to the results. Refer to
     * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
     */
    normalization:
      | 'PERCENTAGE'
      | 'MIN0_MAX'
      | 'MIN_MAX'
      | 'RAW_VALUES'
      | 'PERCENTAGE_CHANGE'
      | 'ROLLING_AVERAGE'
      | 'OVERLAPPED_PERCENTAGE'
      | 'RATIO';

    /**
     * Measurement units for the results.
     */
    units: Array<Meta.Unit>;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations: Array<ConfidenceInfo.Annotation>;

      /**
       * Provides an indication of how much confidence Cloudflare has in the data.
       */
      level: number;
    }

    export namespace ConfidenceInfo {
      /**
       * Annotation associated with the result (e.g. outage or other type of event).
       */
      export interface Annotation {
        dataSource: string;

        description: string;

        endDate: string;

        eventType: string;

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;
      }
    }

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

    export interface Unit {
      name: string;

      value: string;
    }
  }

  export interface Summary0 {
    /**
     * A numeric string.
     */
    INSECURE: string;

    /**
     * A numeric string.
     */
    INVALID: string;

    /**
     * A numeric string.
     */
    OTHER: string;

    /**
     * A numeric string.
     */
    SECURE: string;
  }
}

export interface SummaryDNSSECAwareResponse {
  /**
   * Metadata for the results.
   */
  meta: SummaryDNSSECAwareResponse.Meta;

  summary_0: SummaryDNSSECAwareResponse.Summary0;
}

export namespace SummaryDNSSECAwareResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    confidenceInfo: Meta.ConfidenceInfo;

    dateRange: Array<Meta.DateRange>;

    /**
     * Timestamp of the last dataset update.
     */
    lastUpdated: string;

    /**
     * Normalization method applied to the results. Refer to
     * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
     */
    normalization:
      | 'PERCENTAGE'
      | 'MIN0_MAX'
      | 'MIN_MAX'
      | 'RAW_VALUES'
      | 'PERCENTAGE_CHANGE'
      | 'ROLLING_AVERAGE'
      | 'OVERLAPPED_PERCENTAGE'
      | 'RATIO';

    /**
     * Measurement units for the results.
     */
    units: Array<Meta.Unit>;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations: Array<ConfidenceInfo.Annotation>;

      /**
       * Provides an indication of how much confidence Cloudflare has in the data.
       */
      level: number;
    }

    export namespace ConfidenceInfo {
      /**
       * Annotation associated with the result (e.g. outage or other type of event).
       */
      export interface Annotation {
        dataSource: string;

        description: string;

        endDate: string;

        eventType: string;

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;
      }
    }

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

    export interface Unit {
      name: string;

      value: string;
    }
  }

  export interface Summary0 {
    /**
     * A numeric string.
     */
    NOT_SUPPORTED: string;

    /**
     * A numeric string.
     */
    SUPPORTED: string;
  }
}

export interface SummaryDNSSECE2EResponse {
  /**
   * Metadata for the results.
   */
  meta: SummaryDNSSECE2EResponse.Meta;

  summary_0: SummaryDNSSECE2EResponse.Summary0;
}

export namespace SummaryDNSSECE2EResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    confidenceInfo: Meta.ConfidenceInfo;

    dateRange: Array<Meta.DateRange>;

    /**
     * Timestamp of the last dataset update.
     */
    lastUpdated: string;

    /**
     * Normalization method applied to the results. Refer to
     * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
     */
    normalization:
      | 'PERCENTAGE'
      | 'MIN0_MAX'
      | 'MIN_MAX'
      | 'RAW_VALUES'
      | 'PERCENTAGE_CHANGE'
      | 'ROLLING_AVERAGE'
      | 'OVERLAPPED_PERCENTAGE'
      | 'RATIO';

    /**
     * Measurement units for the results.
     */
    units: Array<Meta.Unit>;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations: Array<ConfidenceInfo.Annotation>;

      /**
       * Provides an indication of how much confidence Cloudflare has in the data.
       */
      level: number;
    }

    export namespace ConfidenceInfo {
      /**
       * Annotation associated with the result (e.g. outage or other type of event).
       */
      export interface Annotation {
        dataSource: string;

        description: string;

        endDate: string;

        eventType: string;

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;
      }
    }

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

    export interface Unit {
      name: string;

      value: string;
    }
  }

  export interface Summary0 {
    /**
     * A numeric string.
     */
    NEGATIVE: string;

    /**
     * A numeric string.
     */
    POSITIVE: string;
  }
}

export interface SummaryIPVersionResponse {
  /**
   * Metadata for the results.
   */
  meta: SummaryIPVersionResponse.Meta;

  summary_0: SummaryIPVersionResponse.Summary0;
}

export namespace SummaryIPVersionResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    confidenceInfo: Meta.ConfidenceInfo;

    dateRange: Array<Meta.DateRange>;

    /**
     * Timestamp of the last dataset update.
     */
    lastUpdated: string;

    /**
     * Normalization method applied to the results. Refer to
     * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
     */
    normalization:
      | 'PERCENTAGE'
      | 'MIN0_MAX'
      | 'MIN_MAX'
      | 'RAW_VALUES'
      | 'PERCENTAGE_CHANGE'
      | 'ROLLING_AVERAGE'
      | 'OVERLAPPED_PERCENTAGE'
      | 'RATIO';

    /**
     * Measurement units for the results.
     */
    units: Array<Meta.Unit>;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations: Array<ConfidenceInfo.Annotation>;

      /**
       * Provides an indication of how much confidence Cloudflare has in the data.
       */
      level: number;
    }

    export namespace ConfidenceInfo {
      /**
       * Annotation associated with the result (e.g. outage or other type of event).
       */
      export interface Annotation {
        dataSource: string;

        description: string;

        endDate: string;

        eventType: string;

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;
      }
    }

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

    export interface Unit {
      name: string;

      value: string;
    }
  }

  export interface Summary0 {
    /**
     * A numeric string.
     */
    IPv4: string;

    /**
     * A numeric string.
     */
    IPv6: string;
  }
}

export interface SummaryMatchingAnswerResponse {
  /**
   * Metadata for the results.
   */
  meta: SummaryMatchingAnswerResponse.Meta;

  summary_0: SummaryMatchingAnswerResponse.Summary0;
}

export namespace SummaryMatchingAnswerResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    confidenceInfo: Meta.ConfidenceInfo;

    dateRange: Array<Meta.DateRange>;

    /**
     * Timestamp of the last dataset update.
     */
    lastUpdated: string;

    /**
     * Normalization method applied to the results. Refer to
     * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
     */
    normalization:
      | 'PERCENTAGE'
      | 'MIN0_MAX'
      | 'MIN_MAX'
      | 'RAW_VALUES'
      | 'PERCENTAGE_CHANGE'
      | 'ROLLING_AVERAGE'
      | 'OVERLAPPED_PERCENTAGE'
      | 'RATIO';

    /**
     * Measurement units for the results.
     */
    units: Array<Meta.Unit>;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations: Array<ConfidenceInfo.Annotation>;

      /**
       * Provides an indication of how much confidence Cloudflare has in the data.
       */
      level: number;
    }

    export namespace ConfidenceInfo {
      /**
       * Annotation associated with the result (e.g. outage or other type of event).
       */
      export interface Annotation {
        dataSource: string;

        description: string;

        endDate: string;

        eventType: string;

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;
      }
    }

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

    export interface Unit {
      name: string;

      value: string;
    }
  }

  export interface Summary0 {
    /**
     * A numeric string.
     */
    NEGATIVE: string;

    /**
     * A numeric string.
     */
    POSITIVE: string;
  }
}

export interface SummaryProtocolResponse {
  /**
   * Metadata for the results.
   */
  meta: SummaryProtocolResponse.Meta;

  summary_0: SummaryProtocolResponse.Summary0;
}

export namespace SummaryProtocolResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    confidenceInfo: Meta.ConfidenceInfo;

    dateRange: Array<Meta.DateRange>;

    /**
     * Timestamp of the last dataset update.
     */
    lastUpdated: string;

    /**
     * Normalization method applied to the results. Refer to
     * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
     */
    normalization:
      | 'PERCENTAGE'
      | 'MIN0_MAX'
      | 'MIN_MAX'
      | 'RAW_VALUES'
      | 'PERCENTAGE_CHANGE'
      | 'ROLLING_AVERAGE'
      | 'OVERLAPPED_PERCENTAGE'
      | 'RATIO';

    /**
     * Measurement units for the results.
     */
    units: Array<Meta.Unit>;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations: Array<ConfidenceInfo.Annotation>;

      /**
       * Provides an indication of how much confidence Cloudflare has in the data.
       */
      level: number;
    }

    export namespace ConfidenceInfo {
      /**
       * Annotation associated with the result (e.g. outage or other type of event).
       */
      export interface Annotation {
        dataSource: string;

        description: string;

        endDate: string;

        eventType: string;

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;
      }
    }

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

    export interface Unit {
      name: string;

      value: string;
    }
  }

  export interface Summary0 {
    /**
     * A numeric string.
     */
    HTTPS: string;

    /**
     * A numeric string.
     */
    TCP: string;

    /**
     * A numeric string.
     */
    TLS: string;

    /**
     * A numeric string.
     */
    UDP: string;
  }
}

export interface SummaryQueryTypeResponse {
  /**
   * Metadata for the results.
   */
  meta: SummaryQueryTypeResponse.Meta;

  summary_0: { [key: string]: string };
}

export namespace SummaryQueryTypeResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    confidenceInfo: Meta.ConfidenceInfo;

    dateRange: Array<Meta.DateRange>;

    /**
     * Timestamp of the last dataset update.
     */
    lastUpdated: string;

    /**
     * Normalization method applied to the results. Refer to
     * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
     */
    normalization:
      | 'PERCENTAGE'
      | 'MIN0_MAX'
      | 'MIN_MAX'
      | 'RAW_VALUES'
      | 'PERCENTAGE_CHANGE'
      | 'ROLLING_AVERAGE'
      | 'OVERLAPPED_PERCENTAGE'
      | 'RATIO';

    /**
     * Measurement units for the results.
     */
    units: Array<Meta.Unit>;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations: Array<ConfidenceInfo.Annotation>;

      /**
       * Provides an indication of how much confidence Cloudflare has in the data.
       */
      level: number;
    }

    export namespace ConfidenceInfo {
      /**
       * Annotation associated with the result (e.g. outage or other type of event).
       */
      export interface Annotation {
        dataSource: string;

        description: string;

        endDate: string;

        eventType: string;

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;
      }
    }

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

    export interface Unit {
      name: string;

      value: string;
    }
  }
}

export interface SummaryResponseCodeResponse {
  /**
   * Metadata for the results.
   */
  meta: SummaryResponseCodeResponse.Meta;

  summary_0: { [key: string]: string };
}

export namespace SummaryResponseCodeResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    confidenceInfo: Meta.ConfidenceInfo;

    dateRange: Array<Meta.DateRange>;

    /**
     * Timestamp of the last dataset update.
     */
    lastUpdated: string;

    /**
     * Normalization method applied to the results. Refer to
     * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
     */
    normalization:
      | 'PERCENTAGE'
      | 'MIN0_MAX'
      | 'MIN_MAX'
      | 'RAW_VALUES'
      | 'PERCENTAGE_CHANGE'
      | 'ROLLING_AVERAGE'
      | 'OVERLAPPED_PERCENTAGE'
      | 'RATIO';

    /**
     * Measurement units for the results.
     */
    units: Array<Meta.Unit>;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations: Array<ConfidenceInfo.Annotation>;

      /**
       * Provides an indication of how much confidence Cloudflare has in the data.
       */
      level: number;
    }

    export namespace ConfidenceInfo {
      /**
       * Annotation associated with the result (e.g. outage or other type of event).
       */
      export interface Annotation {
        dataSource: string;

        description: string;

        endDate: string;

        eventType: string;

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;
      }
    }

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

    export interface Unit {
      name: string;

      value: string;
    }
  }
}

export interface SummaryResponseTTLResponse {
  /**
   * Metadata for the results.
   */
  meta: SummaryResponseTTLResponse.Meta;

  summary_0: SummaryResponseTTLResponse.Summary0;
}

export namespace SummaryResponseTTLResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    confidenceInfo: Meta.ConfidenceInfo;

    dateRange: Array<Meta.DateRange>;

    /**
     * Timestamp of the last dataset update.
     */
    lastUpdated: string;

    /**
     * Normalization method applied to the results. Refer to
     * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
     */
    normalization:
      | 'PERCENTAGE'
      | 'MIN0_MAX'
      | 'MIN_MAX'
      | 'RAW_VALUES'
      | 'PERCENTAGE_CHANGE'
      | 'ROLLING_AVERAGE'
      | 'OVERLAPPED_PERCENTAGE'
      | 'RATIO';

    /**
     * Measurement units for the results.
     */
    units: Array<Meta.Unit>;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations: Array<ConfidenceInfo.Annotation>;

      /**
       * Provides an indication of how much confidence Cloudflare has in the data.
       */
      level: number;
    }

    export namespace ConfidenceInfo {
      /**
       * Annotation associated with the result (e.g. outage or other type of event).
       */
      export interface Annotation {
        dataSource: string;

        description: string;

        endDate: string;

        eventType: string;

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;
      }
    }

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

    export interface Unit {
      name: string;

      value: string;
    }
  }

  export interface Summary0 {
    /**
     * A numeric string.
     */
    gt_15m_lte_1h: string;

    /**
     * A numeric string.
     */
    gt_1d_lte_1w: string;

    /**
     * A numeric string.
     */
    gt_1h_lte_1d: string;

    /**
     * A numeric string.
     */
    gt_1m_lte_5m: string;

    /**
     * A numeric string.
     */
    gt_1w: string;

    /**
     * A numeric string.
     */
    gt_5m_lte_15m: string;

    /**
     * A numeric string.
     */
    lte_1m: string;
  }
}

export interface SummaryCacheHitParams {
  /**
   * Filters results by Autonomous System. Specify one or more Autonomous System
   * Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from
   * results. For example, `-174, 3356` excludes results from AS174, but includes
   * results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by date range. For example, use `7d` and `7dcontrol` to compare
   * this week with the previous week. Use this parameter or set specific start and
   * end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Specifies whether the response includes empty DNS responses (NODATA).
   */
  nodata?: boolean;

  /**
   * Filters results by DNS transport protocol.
   */
  protocol?: 'UDP' | 'TCP' | 'HTTPS' | 'TLS';

  /**
   * Filters results by DNS query type.
   */
  queryType?:
    | 'A'
    | 'AAAA'
    | 'A6'
    | 'AFSDB'
    | 'ANY'
    | 'APL'
    | 'ATMA'
    | 'AXFR'
    | 'CAA'
    | 'CDNSKEY'
    | 'CDS'
    | 'CERT'
    | 'CNAME'
    | 'CSYNC'
    | 'DHCID'
    | 'DLV'
    | 'DNAME'
    | 'DNSKEY'
    | 'DOA'
    | 'DS'
    | 'EID'
    | 'EUI48'
    | 'EUI64'
    | 'GPOS'
    | 'GID'
    | 'HINFO'
    | 'HIP'
    | 'HTTPS'
    | 'IPSECKEY'
    | 'ISDN'
    | 'IXFR'
    | 'KEY'
    | 'KX'
    | 'L32'
    | 'L64'
    | 'LOC'
    | 'LP'
    | 'MAILA'
    | 'MAILB'
    | 'MB'
    | 'MD'
    | 'MF'
    | 'MG'
    | 'MINFO'
    | 'MR'
    | 'MX'
    | 'NAPTR'
    | 'NB'
    | 'NBSTAT'
    | 'NID'
    | 'NIMLOC'
    | 'NINFO'
    | 'NS'
    | 'NSAP'
    | 'NSEC'
    | 'NSEC3'
    | 'NSEC3PARAM'
    | 'NULL'
    | 'NXT'
    | 'OPENPGPKEY'
    | 'OPT'
    | 'PTR'
    | 'PX'
    | 'RKEY'
    | 'RP'
    | 'RRSIG'
    | 'RT'
    | 'SIG'
    | 'SINK'
    | 'SMIMEA'
    | 'SOA'
    | 'SPF'
    | 'SRV'
    | 'SSHFP'
    | 'SVCB'
    | 'TA'
    | 'TALINK'
    | 'TKEY'
    | 'TLSA'
    | 'TSIG'
    | 'TXT'
    | 'UINFO'
    | 'UID'
    | 'UNSPEC'
    | 'URI'
    | 'WKS'
    | 'X25'
    | 'ZONEMD'
    | null;

  /**
   * Filters results by DNS response code.
   */
  responseCode?:
    | 'NOERROR'
    | 'FORMERR'
    | 'SERVFAIL'
    | 'NXDOMAIN'
    | 'NOTIMP'
    | 'REFUSED'
    | 'YXDOMAIN'
    | 'YXRRSET'
    | 'NXRRSET'
    | 'NOTAUTH'
    | 'NOTZONE'
    | 'BADSIG'
    | 'BADKEY'
    | 'BADTIME'
    | 'BADMODE'
    | 'BADNAME'
    | 'BADALG'
    | 'BADTRUNC'
    | 'BADCOOKIE';

  /**
   * Filters results by country code top-level domain (ccTLD).
   */
  tld?: Array<string>;
}

export interface SummaryDNSSECParams {
  /**
   * Filters results by Autonomous System. Specify one or more Autonomous System
   * Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from
   * results. For example, `-174, 3356` excludes results from AS174, but includes
   * results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by date range. For example, use `7d` and `7dcontrol` to compare
   * this week with the previous week. Use this parameter or set specific start and
   * end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Specifies whether the response includes empty DNS responses (NODATA).
   */
  nodata?: boolean;

  /**
   * Filters results by DNS transport protocol.
   */
  protocol?: 'UDP' | 'TCP' | 'HTTPS' | 'TLS';

  /**
   * Filters results by DNS query type.
   */
  queryType?:
    | 'A'
    | 'AAAA'
    | 'A6'
    | 'AFSDB'
    | 'ANY'
    | 'APL'
    | 'ATMA'
    | 'AXFR'
    | 'CAA'
    | 'CDNSKEY'
    | 'CDS'
    | 'CERT'
    | 'CNAME'
    | 'CSYNC'
    | 'DHCID'
    | 'DLV'
    | 'DNAME'
    | 'DNSKEY'
    | 'DOA'
    | 'DS'
    | 'EID'
    | 'EUI48'
    | 'EUI64'
    | 'GPOS'
    | 'GID'
    | 'HINFO'
    | 'HIP'
    | 'HTTPS'
    | 'IPSECKEY'
    | 'ISDN'
    | 'IXFR'
    | 'KEY'
    | 'KX'
    | 'L32'
    | 'L64'
    | 'LOC'
    | 'LP'
    | 'MAILA'
    | 'MAILB'
    | 'MB'
    | 'MD'
    | 'MF'
    | 'MG'
    | 'MINFO'
    | 'MR'
    | 'MX'
    | 'NAPTR'
    | 'NB'
    | 'NBSTAT'
    | 'NID'
    | 'NIMLOC'
    | 'NINFO'
    | 'NS'
    | 'NSAP'
    | 'NSEC'
    | 'NSEC3'
    | 'NSEC3PARAM'
    | 'NULL'
    | 'NXT'
    | 'OPENPGPKEY'
    | 'OPT'
    | 'PTR'
    | 'PX'
    | 'RKEY'
    | 'RP'
    | 'RRSIG'
    | 'RT'
    | 'SIG'
    | 'SINK'
    | 'SMIMEA'
    | 'SOA'
    | 'SPF'
    | 'SRV'
    | 'SSHFP'
    | 'SVCB'
    | 'TA'
    | 'TALINK'
    | 'TKEY'
    | 'TLSA'
    | 'TSIG'
    | 'TXT'
    | 'UINFO'
    | 'UID'
    | 'UNSPEC'
    | 'URI'
    | 'WKS'
    | 'X25'
    | 'ZONEMD'
    | null;

  /**
   * Filters results by DNS response code.
   */
  responseCode?:
    | 'NOERROR'
    | 'FORMERR'
    | 'SERVFAIL'
    | 'NXDOMAIN'
    | 'NOTIMP'
    | 'REFUSED'
    | 'YXDOMAIN'
    | 'YXRRSET'
    | 'NXRRSET'
    | 'NOTAUTH'
    | 'NOTZONE'
    | 'BADSIG'
    | 'BADKEY'
    | 'BADTIME'
    | 'BADMODE'
    | 'BADNAME'
    | 'BADALG'
    | 'BADTRUNC'
    | 'BADCOOKIE';

  /**
   * Filters results by country code top-level domain (ccTLD).
   */
  tld?: Array<string>;
}

export interface SummaryDNSSECAwareParams {
  /**
   * Filters results by Autonomous System. Specify one or more Autonomous System
   * Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from
   * results. For example, `-174, 3356` excludes results from AS174, but includes
   * results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by date range. For example, use `7d` and `7dcontrol` to compare
   * this week with the previous week. Use this parameter or set specific start and
   * end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Specifies whether the response includes empty DNS responses (NODATA).
   */
  nodata?: boolean;

  /**
   * Filters results by DNS transport protocol.
   */
  protocol?: 'UDP' | 'TCP' | 'HTTPS' | 'TLS';

  /**
   * Filters results by DNS query type.
   */
  queryType?:
    | 'A'
    | 'AAAA'
    | 'A6'
    | 'AFSDB'
    | 'ANY'
    | 'APL'
    | 'ATMA'
    | 'AXFR'
    | 'CAA'
    | 'CDNSKEY'
    | 'CDS'
    | 'CERT'
    | 'CNAME'
    | 'CSYNC'
    | 'DHCID'
    | 'DLV'
    | 'DNAME'
    | 'DNSKEY'
    | 'DOA'
    | 'DS'
    | 'EID'
    | 'EUI48'
    | 'EUI64'
    | 'GPOS'
    | 'GID'
    | 'HINFO'
    | 'HIP'
    | 'HTTPS'
    | 'IPSECKEY'
    | 'ISDN'
    | 'IXFR'
    | 'KEY'
    | 'KX'
    | 'L32'
    | 'L64'
    | 'LOC'
    | 'LP'
    | 'MAILA'
    | 'MAILB'
    | 'MB'
    | 'MD'
    | 'MF'
    | 'MG'
    | 'MINFO'
    | 'MR'
    | 'MX'
    | 'NAPTR'
    | 'NB'
    | 'NBSTAT'
    | 'NID'
    | 'NIMLOC'
    | 'NINFO'
    | 'NS'
    | 'NSAP'
    | 'NSEC'
    | 'NSEC3'
    | 'NSEC3PARAM'
    | 'NULL'
    | 'NXT'
    | 'OPENPGPKEY'
    | 'OPT'
    | 'PTR'
    | 'PX'
    | 'RKEY'
    | 'RP'
    | 'RRSIG'
    | 'RT'
    | 'SIG'
    | 'SINK'
    | 'SMIMEA'
    | 'SOA'
    | 'SPF'
    | 'SRV'
    | 'SSHFP'
    | 'SVCB'
    | 'TA'
    | 'TALINK'
    | 'TKEY'
    | 'TLSA'
    | 'TSIG'
    | 'TXT'
    | 'UINFO'
    | 'UID'
    | 'UNSPEC'
    | 'URI'
    | 'WKS'
    | 'X25'
    | 'ZONEMD'
    | null;

  /**
   * Filters results by DNS response code.
   */
  responseCode?:
    | 'NOERROR'
    | 'FORMERR'
    | 'SERVFAIL'
    | 'NXDOMAIN'
    | 'NOTIMP'
    | 'REFUSED'
    | 'YXDOMAIN'
    | 'YXRRSET'
    | 'NXRRSET'
    | 'NOTAUTH'
    | 'NOTZONE'
    | 'BADSIG'
    | 'BADKEY'
    | 'BADTIME'
    | 'BADMODE'
    | 'BADNAME'
    | 'BADALG'
    | 'BADTRUNC'
    | 'BADCOOKIE';

  /**
   * Filters results by country code top-level domain (ccTLD).
   */
  tld?: Array<string>;
}

export interface SummaryDNSSECE2EParams {
  /**
   * Filters results by Autonomous System. Specify one or more Autonomous System
   * Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from
   * results. For example, `-174, 3356` excludes results from AS174, but includes
   * results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by date range. For example, use `7d` and `7dcontrol` to compare
   * this week with the previous week. Use this parameter or set specific start and
   * end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Specifies whether the response includes empty DNS responses (NODATA).
   */
  nodata?: boolean;

  /**
   * Filters results by DNS transport protocol.
   */
  protocol?: 'UDP' | 'TCP' | 'HTTPS' | 'TLS';

  /**
   * Filters results by DNS query type.
   */
  queryType?:
    | 'A'
    | 'AAAA'
    | 'A6'
    | 'AFSDB'
    | 'ANY'
    | 'APL'
    | 'ATMA'
    | 'AXFR'
    | 'CAA'
    | 'CDNSKEY'
    | 'CDS'
    | 'CERT'
    | 'CNAME'
    | 'CSYNC'
    | 'DHCID'
    | 'DLV'
    | 'DNAME'
    | 'DNSKEY'
    | 'DOA'
    | 'DS'
    | 'EID'
    | 'EUI48'
    | 'EUI64'
    | 'GPOS'
    | 'GID'
    | 'HINFO'
    | 'HIP'
    | 'HTTPS'
    | 'IPSECKEY'
    | 'ISDN'
    | 'IXFR'
    | 'KEY'
    | 'KX'
    | 'L32'
    | 'L64'
    | 'LOC'
    | 'LP'
    | 'MAILA'
    | 'MAILB'
    | 'MB'
    | 'MD'
    | 'MF'
    | 'MG'
    | 'MINFO'
    | 'MR'
    | 'MX'
    | 'NAPTR'
    | 'NB'
    | 'NBSTAT'
    | 'NID'
    | 'NIMLOC'
    | 'NINFO'
    | 'NS'
    | 'NSAP'
    | 'NSEC'
    | 'NSEC3'
    | 'NSEC3PARAM'
    | 'NULL'
    | 'NXT'
    | 'OPENPGPKEY'
    | 'OPT'
    | 'PTR'
    | 'PX'
    | 'RKEY'
    | 'RP'
    | 'RRSIG'
    | 'RT'
    | 'SIG'
    | 'SINK'
    | 'SMIMEA'
    | 'SOA'
    | 'SPF'
    | 'SRV'
    | 'SSHFP'
    | 'SVCB'
    | 'TA'
    | 'TALINK'
    | 'TKEY'
    | 'TLSA'
    | 'TSIG'
    | 'TXT'
    | 'UINFO'
    | 'UID'
    | 'UNSPEC'
    | 'URI'
    | 'WKS'
    | 'X25'
    | 'ZONEMD'
    | null;

  /**
   * Filters results by DNS response code.
   */
  responseCode?:
    | 'NOERROR'
    | 'FORMERR'
    | 'SERVFAIL'
    | 'NXDOMAIN'
    | 'NOTIMP'
    | 'REFUSED'
    | 'YXDOMAIN'
    | 'YXRRSET'
    | 'NXRRSET'
    | 'NOTAUTH'
    | 'NOTZONE'
    | 'BADSIG'
    | 'BADKEY'
    | 'BADTIME'
    | 'BADMODE'
    | 'BADNAME'
    | 'BADALG'
    | 'BADTRUNC'
    | 'BADCOOKIE';

  /**
   * Filters results by country code top-level domain (ccTLD).
   */
  tld?: Array<string>;
}

export interface SummaryIPVersionParams {
  /**
   * Filters results by Autonomous System. Specify one or more Autonomous System
   * Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from
   * results. For example, `-174, 3356` excludes results from AS174, but includes
   * results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by date range. For example, use `7d` and `7dcontrol` to compare
   * this week with the previous week. Use this parameter or set specific start and
   * end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Specifies whether the response includes empty DNS responses (NODATA).
   */
  nodata?: boolean;

  /**
   * Filters results by DNS transport protocol.
   */
  protocol?: 'UDP' | 'TCP' | 'HTTPS' | 'TLS';

  /**
   * Filters results by DNS query type.
   */
  queryType?:
    | 'A'
    | 'AAAA'
    | 'A6'
    | 'AFSDB'
    | 'ANY'
    | 'APL'
    | 'ATMA'
    | 'AXFR'
    | 'CAA'
    | 'CDNSKEY'
    | 'CDS'
    | 'CERT'
    | 'CNAME'
    | 'CSYNC'
    | 'DHCID'
    | 'DLV'
    | 'DNAME'
    | 'DNSKEY'
    | 'DOA'
    | 'DS'
    | 'EID'
    | 'EUI48'
    | 'EUI64'
    | 'GPOS'
    | 'GID'
    | 'HINFO'
    | 'HIP'
    | 'HTTPS'
    | 'IPSECKEY'
    | 'ISDN'
    | 'IXFR'
    | 'KEY'
    | 'KX'
    | 'L32'
    | 'L64'
    | 'LOC'
    | 'LP'
    | 'MAILA'
    | 'MAILB'
    | 'MB'
    | 'MD'
    | 'MF'
    | 'MG'
    | 'MINFO'
    | 'MR'
    | 'MX'
    | 'NAPTR'
    | 'NB'
    | 'NBSTAT'
    | 'NID'
    | 'NIMLOC'
    | 'NINFO'
    | 'NS'
    | 'NSAP'
    | 'NSEC'
    | 'NSEC3'
    | 'NSEC3PARAM'
    | 'NULL'
    | 'NXT'
    | 'OPENPGPKEY'
    | 'OPT'
    | 'PTR'
    | 'PX'
    | 'RKEY'
    | 'RP'
    | 'RRSIG'
    | 'RT'
    | 'SIG'
    | 'SINK'
    | 'SMIMEA'
    | 'SOA'
    | 'SPF'
    | 'SRV'
    | 'SSHFP'
    | 'SVCB'
    | 'TA'
    | 'TALINK'
    | 'TKEY'
    | 'TLSA'
    | 'TSIG'
    | 'TXT'
    | 'UINFO'
    | 'UID'
    | 'UNSPEC'
    | 'URI'
    | 'WKS'
    | 'X25'
    | 'ZONEMD'
    | null;

  /**
   * Filters results by DNS response code.
   */
  responseCode?:
    | 'NOERROR'
    | 'FORMERR'
    | 'SERVFAIL'
    | 'NXDOMAIN'
    | 'NOTIMP'
    | 'REFUSED'
    | 'YXDOMAIN'
    | 'YXRRSET'
    | 'NXRRSET'
    | 'NOTAUTH'
    | 'NOTZONE'
    | 'BADSIG'
    | 'BADKEY'
    | 'BADTIME'
    | 'BADMODE'
    | 'BADNAME'
    | 'BADALG'
    | 'BADTRUNC'
    | 'BADCOOKIE';

  /**
   * Filters results by country code top-level domain (ccTLD).
   */
  tld?: Array<string>;
}

export interface SummaryMatchingAnswerParams {
  /**
   * Filters results by Autonomous System. Specify one or more Autonomous System
   * Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from
   * results. For example, `-174, 3356` excludes results from AS174, but includes
   * results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by date range. For example, use `7d` and `7dcontrol` to compare
   * this week with the previous week. Use this parameter or set specific start and
   * end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Specifies whether the response includes empty DNS responses (NODATA).
   */
  nodata?: boolean;

  /**
   * Filters results by DNS transport protocol.
   */
  protocol?: 'UDP' | 'TCP' | 'HTTPS' | 'TLS';

  /**
   * Filters results by DNS query type.
   */
  queryType?:
    | 'A'
    | 'AAAA'
    | 'A6'
    | 'AFSDB'
    | 'ANY'
    | 'APL'
    | 'ATMA'
    | 'AXFR'
    | 'CAA'
    | 'CDNSKEY'
    | 'CDS'
    | 'CERT'
    | 'CNAME'
    | 'CSYNC'
    | 'DHCID'
    | 'DLV'
    | 'DNAME'
    | 'DNSKEY'
    | 'DOA'
    | 'DS'
    | 'EID'
    | 'EUI48'
    | 'EUI64'
    | 'GPOS'
    | 'GID'
    | 'HINFO'
    | 'HIP'
    | 'HTTPS'
    | 'IPSECKEY'
    | 'ISDN'
    | 'IXFR'
    | 'KEY'
    | 'KX'
    | 'L32'
    | 'L64'
    | 'LOC'
    | 'LP'
    | 'MAILA'
    | 'MAILB'
    | 'MB'
    | 'MD'
    | 'MF'
    | 'MG'
    | 'MINFO'
    | 'MR'
    | 'MX'
    | 'NAPTR'
    | 'NB'
    | 'NBSTAT'
    | 'NID'
    | 'NIMLOC'
    | 'NINFO'
    | 'NS'
    | 'NSAP'
    | 'NSEC'
    | 'NSEC3'
    | 'NSEC3PARAM'
    | 'NULL'
    | 'NXT'
    | 'OPENPGPKEY'
    | 'OPT'
    | 'PTR'
    | 'PX'
    | 'RKEY'
    | 'RP'
    | 'RRSIG'
    | 'RT'
    | 'SIG'
    | 'SINK'
    | 'SMIMEA'
    | 'SOA'
    | 'SPF'
    | 'SRV'
    | 'SSHFP'
    | 'SVCB'
    | 'TA'
    | 'TALINK'
    | 'TKEY'
    | 'TLSA'
    | 'TSIG'
    | 'TXT'
    | 'UINFO'
    | 'UID'
    | 'UNSPEC'
    | 'URI'
    | 'WKS'
    | 'X25'
    | 'ZONEMD'
    | null;

  /**
   * Filters results by DNS response code.
   */
  responseCode?:
    | 'NOERROR'
    | 'FORMERR'
    | 'SERVFAIL'
    | 'NXDOMAIN'
    | 'NOTIMP'
    | 'REFUSED'
    | 'YXDOMAIN'
    | 'YXRRSET'
    | 'NXRRSET'
    | 'NOTAUTH'
    | 'NOTZONE'
    | 'BADSIG'
    | 'BADKEY'
    | 'BADTIME'
    | 'BADMODE'
    | 'BADNAME'
    | 'BADALG'
    | 'BADTRUNC'
    | 'BADCOOKIE';

  /**
   * Filters results by country code top-level domain (ccTLD).
   */
  tld?: Array<string>;
}

export interface SummaryProtocolParams {
  /**
   * Filters results by Autonomous System. Specify one or more Autonomous System
   * Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from
   * results. For example, `-174, 3356` excludes results from AS174, but includes
   * results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by date range. For example, use `7d` and `7dcontrol` to compare
   * this week with the previous week. Use this parameter or set specific start and
   * end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Specifies whether the response includes empty DNS responses (NODATA).
   */
  nodata?: boolean;

  /**
   * Filters results by DNS query type.
   */
  queryType?:
    | 'A'
    | 'AAAA'
    | 'A6'
    | 'AFSDB'
    | 'ANY'
    | 'APL'
    | 'ATMA'
    | 'AXFR'
    | 'CAA'
    | 'CDNSKEY'
    | 'CDS'
    | 'CERT'
    | 'CNAME'
    | 'CSYNC'
    | 'DHCID'
    | 'DLV'
    | 'DNAME'
    | 'DNSKEY'
    | 'DOA'
    | 'DS'
    | 'EID'
    | 'EUI48'
    | 'EUI64'
    | 'GPOS'
    | 'GID'
    | 'HINFO'
    | 'HIP'
    | 'HTTPS'
    | 'IPSECKEY'
    | 'ISDN'
    | 'IXFR'
    | 'KEY'
    | 'KX'
    | 'L32'
    | 'L64'
    | 'LOC'
    | 'LP'
    | 'MAILA'
    | 'MAILB'
    | 'MB'
    | 'MD'
    | 'MF'
    | 'MG'
    | 'MINFO'
    | 'MR'
    | 'MX'
    | 'NAPTR'
    | 'NB'
    | 'NBSTAT'
    | 'NID'
    | 'NIMLOC'
    | 'NINFO'
    | 'NS'
    | 'NSAP'
    | 'NSEC'
    | 'NSEC3'
    | 'NSEC3PARAM'
    | 'NULL'
    | 'NXT'
    | 'OPENPGPKEY'
    | 'OPT'
    | 'PTR'
    | 'PX'
    | 'RKEY'
    | 'RP'
    | 'RRSIG'
    | 'RT'
    | 'SIG'
    | 'SINK'
    | 'SMIMEA'
    | 'SOA'
    | 'SPF'
    | 'SRV'
    | 'SSHFP'
    | 'SVCB'
    | 'TA'
    | 'TALINK'
    | 'TKEY'
    | 'TLSA'
    | 'TSIG'
    | 'TXT'
    | 'UINFO'
    | 'UID'
    | 'UNSPEC'
    | 'URI'
    | 'WKS'
    | 'X25'
    | 'ZONEMD'
    | null;

  /**
   * Filters results by DNS response code.
   */
  responseCode?:
    | 'NOERROR'
    | 'FORMERR'
    | 'SERVFAIL'
    | 'NXDOMAIN'
    | 'NOTIMP'
    | 'REFUSED'
    | 'YXDOMAIN'
    | 'YXRRSET'
    | 'NXRRSET'
    | 'NOTAUTH'
    | 'NOTZONE'
    | 'BADSIG'
    | 'BADKEY'
    | 'BADTIME'
    | 'BADMODE'
    | 'BADNAME'
    | 'BADALG'
    | 'BADTRUNC'
    | 'BADCOOKIE';

  /**
   * Filters results by country code top-level domain (ccTLD).
   */
  tld?: Array<string>;
}

export interface SummaryQueryTypeParams {
  /**
   * Filters results by Autonomous System. Specify one or more Autonomous System
   * Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from
   * results. For example, `-174, 3356` excludes results from AS174, but includes
   * results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by date range. For example, use `7d` and `7dcontrol` to compare
   * this week with the previous week. Use this parameter or set specific start and
   * end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects per group to the top items within the specified
   * time range. When item count exceeds the limit, extra items appear grouped under
   * an "other" category.
   */
  limitPerGroup?: number;

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Specifies whether the response includes empty DNS responses (NODATA).
   */
  nodata?: boolean;

  /**
   * Filters results by DNS transport protocol.
   */
  protocol?: 'UDP' | 'TCP' | 'HTTPS' | 'TLS';

  /**
   * Filters results by DNS response code.
   */
  responseCode?:
    | 'NOERROR'
    | 'FORMERR'
    | 'SERVFAIL'
    | 'NXDOMAIN'
    | 'NOTIMP'
    | 'REFUSED'
    | 'YXDOMAIN'
    | 'YXRRSET'
    | 'NXRRSET'
    | 'NOTAUTH'
    | 'NOTZONE'
    | 'BADSIG'
    | 'BADKEY'
    | 'BADTIME'
    | 'BADMODE'
    | 'BADNAME'
    | 'BADALG'
    | 'BADTRUNC'
    | 'BADCOOKIE';

  /**
   * Filters results by country code top-level domain (ccTLD).
   */
  tld?: Array<string>;
}

export interface SummaryResponseCodeParams {
  /**
   * Filters results by Autonomous System. Specify one or more Autonomous System
   * Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from
   * results. For example, `-174, 3356` excludes results from AS174, but includes
   * results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by date range. For example, use `7d` and `7dcontrol` to compare
   * this week with the previous week. Use this parameter or set specific start and
   * end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects per group to the top items within the specified
   * time range. When item count exceeds the limit, extra items appear grouped under
   * an "other" category.
   */
  limitPerGroup?: number;

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Specifies whether the response includes empty DNS responses (NODATA).
   */
  nodata?: boolean;

  /**
   * Filters results by DNS transport protocol.
   */
  protocol?: 'UDP' | 'TCP' | 'HTTPS' | 'TLS';

  /**
   * Filters results by DNS query type.
   */
  queryType?:
    | 'A'
    | 'AAAA'
    | 'A6'
    | 'AFSDB'
    | 'ANY'
    | 'APL'
    | 'ATMA'
    | 'AXFR'
    | 'CAA'
    | 'CDNSKEY'
    | 'CDS'
    | 'CERT'
    | 'CNAME'
    | 'CSYNC'
    | 'DHCID'
    | 'DLV'
    | 'DNAME'
    | 'DNSKEY'
    | 'DOA'
    | 'DS'
    | 'EID'
    | 'EUI48'
    | 'EUI64'
    | 'GPOS'
    | 'GID'
    | 'HINFO'
    | 'HIP'
    | 'HTTPS'
    | 'IPSECKEY'
    | 'ISDN'
    | 'IXFR'
    | 'KEY'
    | 'KX'
    | 'L32'
    | 'L64'
    | 'LOC'
    | 'LP'
    | 'MAILA'
    | 'MAILB'
    | 'MB'
    | 'MD'
    | 'MF'
    | 'MG'
    | 'MINFO'
    | 'MR'
    | 'MX'
    | 'NAPTR'
    | 'NB'
    | 'NBSTAT'
    | 'NID'
    | 'NIMLOC'
    | 'NINFO'
    | 'NS'
    | 'NSAP'
    | 'NSEC'
    | 'NSEC3'
    | 'NSEC3PARAM'
    | 'NULL'
    | 'NXT'
    | 'OPENPGPKEY'
    | 'OPT'
    | 'PTR'
    | 'PX'
    | 'RKEY'
    | 'RP'
    | 'RRSIG'
    | 'RT'
    | 'SIG'
    | 'SINK'
    | 'SMIMEA'
    | 'SOA'
    | 'SPF'
    | 'SRV'
    | 'SSHFP'
    | 'SVCB'
    | 'TA'
    | 'TALINK'
    | 'TKEY'
    | 'TLSA'
    | 'TSIG'
    | 'TXT'
    | 'UINFO'
    | 'UID'
    | 'UNSPEC'
    | 'URI'
    | 'WKS'
    | 'X25'
    | 'ZONEMD'
    | null;

  /**
   * Filters results by country code top-level domain (ccTLD).
   */
  tld?: Array<string>;
}

export interface SummaryResponseTTLParams {
  /**
   * Filters results by Autonomous System. Specify one or more Autonomous System
   * Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from
   * results. For example, `-174, 3356` excludes results from AS174, but includes
   * results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by date range. For example, use `7d` and `7dcontrol` to compare
   * this week with the previous week. Use this parameter or set specific start and
   * end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Specifies whether the response includes empty DNS responses (NODATA).
   */
  nodata?: boolean;

  /**
   * Filters results by DNS transport protocol.
   */
  protocol?: 'UDP' | 'TCP' | 'HTTPS' | 'TLS';

  /**
   * Filters results by DNS query type.
   */
  queryType?:
    | 'A'
    | 'AAAA'
    | 'A6'
    | 'AFSDB'
    | 'ANY'
    | 'APL'
    | 'ATMA'
    | 'AXFR'
    | 'CAA'
    | 'CDNSKEY'
    | 'CDS'
    | 'CERT'
    | 'CNAME'
    | 'CSYNC'
    | 'DHCID'
    | 'DLV'
    | 'DNAME'
    | 'DNSKEY'
    | 'DOA'
    | 'DS'
    | 'EID'
    | 'EUI48'
    | 'EUI64'
    | 'GPOS'
    | 'GID'
    | 'HINFO'
    | 'HIP'
    | 'HTTPS'
    | 'IPSECKEY'
    | 'ISDN'
    | 'IXFR'
    | 'KEY'
    | 'KX'
    | 'L32'
    | 'L64'
    | 'LOC'
    | 'LP'
    | 'MAILA'
    | 'MAILB'
    | 'MB'
    | 'MD'
    | 'MF'
    | 'MG'
    | 'MINFO'
    | 'MR'
    | 'MX'
    | 'NAPTR'
    | 'NB'
    | 'NBSTAT'
    | 'NID'
    | 'NIMLOC'
    | 'NINFO'
    | 'NS'
    | 'NSAP'
    | 'NSEC'
    | 'NSEC3'
    | 'NSEC3PARAM'
    | 'NULL'
    | 'NXT'
    | 'OPENPGPKEY'
    | 'OPT'
    | 'PTR'
    | 'PX'
    | 'RKEY'
    | 'RP'
    | 'RRSIG'
    | 'RT'
    | 'SIG'
    | 'SINK'
    | 'SMIMEA'
    | 'SOA'
    | 'SPF'
    | 'SRV'
    | 'SSHFP'
    | 'SVCB'
    | 'TA'
    | 'TALINK'
    | 'TKEY'
    | 'TLSA'
    | 'TSIG'
    | 'TXT'
    | 'UINFO'
    | 'UID'
    | 'UNSPEC'
    | 'URI'
    | 'WKS'
    | 'X25'
    | 'ZONEMD'
    | null;

  /**
   * Filters results by DNS response code.
   */
  responseCode?:
    | 'NOERROR'
    | 'FORMERR'
    | 'SERVFAIL'
    | 'NXDOMAIN'
    | 'NOTIMP'
    | 'REFUSED'
    | 'YXDOMAIN'
    | 'YXRRSET'
    | 'NXRRSET'
    | 'NOTAUTH'
    | 'NOTZONE'
    | 'BADSIG'
    | 'BADKEY'
    | 'BADTIME'
    | 'BADMODE'
    | 'BADNAME'
    | 'BADALG'
    | 'BADTRUNC'
    | 'BADCOOKIE';

  /**
   * Filters results by country code top-level domain (ccTLD).
   */
  tld?: Array<string>;
}

export declare namespace Summary {
  export {
    type SummaryCacheHitResponse as SummaryCacheHitResponse,
    type SummaryDNSSECResponse as SummaryDNSSECResponse,
    type SummaryDNSSECAwareResponse as SummaryDNSSECAwareResponse,
    type SummaryDNSSECE2EResponse as SummaryDNSSECE2EResponse,
    type SummaryIPVersionResponse as SummaryIPVersionResponse,
    type SummaryMatchingAnswerResponse as SummaryMatchingAnswerResponse,
    type SummaryProtocolResponse as SummaryProtocolResponse,
    type SummaryQueryTypeResponse as SummaryQueryTypeResponse,
    type SummaryResponseCodeResponse as SummaryResponseCodeResponse,
    type SummaryResponseTTLResponse as SummaryResponseTTLResponse,
    type SummaryCacheHitParams as SummaryCacheHitParams,
    type SummaryDNSSECParams as SummaryDNSSECParams,
    type SummaryDNSSECAwareParams as SummaryDNSSECAwareParams,
    type SummaryDNSSECE2EParams as SummaryDNSSECE2EParams,
    type SummaryIPVersionParams as SummaryIPVersionParams,
    type SummaryMatchingAnswerParams as SummaryMatchingAnswerParams,
    type SummaryProtocolParams as SummaryProtocolParams,
    type SummaryQueryTypeParams as SummaryQueryTypeParams,
    type SummaryResponseCodeParams as SummaryResponseCodeParams,
    type SummaryResponseTTLParams as SummaryResponseTTLParams,
  };
}
