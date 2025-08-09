// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as AuthoritiesAPI from './authorities';
import {
  Authorities,
  AuthorityGetParams,
  AuthorityGetResponse,
  AuthorityListParams,
  AuthorityListResponse,
} from './authorities';
import * as LogsAPI from './logs';
import { LogGetParams, LogGetResponse, LogListParams, LogListResponse, Logs } from './logs';

export class Ct extends APIResource {
  authorities: AuthoritiesAPI.Authorities = new AuthoritiesAPI.Authorities(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * Retrieves an aggregated summary of certificates grouped by the specified
   * dimension.
   *
   * @example
   * ```ts
   * const response = await client.radar.ct.summary('CA');
   * ```
   */
  summary(
    dimension:
      | 'CA'
      | 'CA_OWNER'
      | 'DURATION'
      | 'ENTRY_TYPE'
      | 'EXPIRATION_STATUS'
      | 'HAS_IPS'
      | 'HAS_WILDCARDS'
      | 'LOG'
      | 'LOG_API'
      | 'LOG_OPERATOR'
      | 'PUBLIC_KEY_ALGORITHM'
      | 'SIGNATURE_ALGORITHM'
      | 'TLD'
      | 'VALIDATION_LEVEL',
    query?: CtSummaryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CtSummaryResponse>;
  summary(
    dimension:
      | 'CA'
      | 'CA_OWNER'
      | 'DURATION'
      | 'ENTRY_TYPE'
      | 'EXPIRATION_STATUS'
      | 'HAS_IPS'
      | 'HAS_WILDCARDS'
      | 'LOG'
      | 'LOG_API'
      | 'LOG_OPERATOR'
      | 'PUBLIC_KEY_ALGORITHM'
      | 'SIGNATURE_ALGORITHM'
      | 'TLD'
      | 'VALIDATION_LEVEL',
    options?: Core.RequestOptions,
  ): Core.APIPromise<CtSummaryResponse>;
  summary(
    dimension:
      | 'CA'
      | 'CA_OWNER'
      | 'DURATION'
      | 'ENTRY_TYPE'
      | 'EXPIRATION_STATUS'
      | 'HAS_IPS'
      | 'HAS_WILDCARDS'
      | 'LOG'
      | 'LOG_API'
      | 'LOG_OPERATOR'
      | 'PUBLIC_KEY_ALGORITHM'
      | 'SIGNATURE_ALGORITHM'
      | 'TLD'
      | 'VALIDATION_LEVEL',
    query: CtSummaryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CtSummaryResponse> {
    if (isRequestOptions(query)) {
      return this.summary(dimension, {}, query);
    }
    return (
      this._client.get(`/radar/ct/summary/${dimension}`, { query, ...options }) as Core.APIPromise<{
        result: CtSummaryResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves certificate volume over time.
   *
   * @example
   * ```ts
   * const response = await client.radar.ct.timeseries();
   * ```
   */
  timeseries(
    query?: CtTimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CtTimeseriesResponse>;
  timeseries(options?: Core.RequestOptions): Core.APIPromise<CtTimeseriesResponse>;
  timeseries(
    query: CtTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CtTimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.timeseries({}, query);
    }
    return (
      this._client.get('/radar/ct/timeseries', { query, ...options }) as Core.APIPromise<{
        result: CtTimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of certificates grouped by chosen the specified
   * dimension over time.
   *
   * @example
   * ```ts
   * const response = await client.radar.ct.timeseriesGroups(
   *   'CA',
   * );
   * ```
   */
  timeseriesGroups(
    dimension:
      | 'CA'
      | 'CA_OWNER'
      | 'DURATION'
      | 'ENTRY_TYPE'
      | 'EXPIRATION_STATUS'
      | 'HAS_IPS'
      | 'HAS_WILDCARDS'
      | 'LOG'
      | 'LOG_API'
      | 'LOG_OPERATOR'
      | 'PUBLIC_KEY_ALGORITHM'
      | 'SIGNATURE_ALGORITHM'
      | 'TLD'
      | 'VALIDATION_LEVEL',
    query?: CtTimeseriesGroupsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CtTimeseriesGroupsResponse>;
  timeseriesGroups(
    dimension:
      | 'CA'
      | 'CA_OWNER'
      | 'DURATION'
      | 'ENTRY_TYPE'
      | 'EXPIRATION_STATUS'
      | 'HAS_IPS'
      | 'HAS_WILDCARDS'
      | 'LOG'
      | 'LOG_API'
      | 'LOG_OPERATOR'
      | 'PUBLIC_KEY_ALGORITHM'
      | 'SIGNATURE_ALGORITHM'
      | 'TLD'
      | 'VALIDATION_LEVEL',
    options?: Core.RequestOptions,
  ): Core.APIPromise<CtTimeseriesGroupsResponse>;
  timeseriesGroups(
    dimension:
      | 'CA'
      | 'CA_OWNER'
      | 'DURATION'
      | 'ENTRY_TYPE'
      | 'EXPIRATION_STATUS'
      | 'HAS_IPS'
      | 'HAS_WILDCARDS'
      | 'LOG'
      | 'LOG_API'
      | 'LOG_OPERATOR'
      | 'PUBLIC_KEY_ALGORITHM'
      | 'SIGNATURE_ALGORITHM'
      | 'TLD'
      | 'VALIDATION_LEVEL',
    query: CtTimeseriesGroupsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CtTimeseriesGroupsResponse> {
    if (isRequestOptions(query)) {
      return this.timeseriesGroups(dimension, {}, query);
    }
    return (
      this._client.get(`/radar/ct/timeseries_groups/${dimension}`, { query, ...options }) as Core.APIPromise<{
        result: CtTimeseriesGroupsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CtSummaryResponse {
  /**
   * Metadata for the results.
   */
  meta: CtSummaryResponse.Meta;

  summary_0:
    | { [key: string]: string }
    | CtSummaryResponse.UnionMember1
    | CtSummaryResponse.UnionMember2
    | CtSummaryResponse.UnionMember3
    | CtSummaryResponse.UnionMember4
    | CtSummaryResponse.UnionMember5
    | CtSummaryResponse.UnionMember6
    | CtSummaryResponse.UnionMember7;
}

export namespace CtSummaryResponse {
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

  export interface UnionMember1 {
    rfc6962: string;

    static: string;
  }

  export interface UnionMember2 {
    gt_121d: string;

    gt_16d_lte_31d: string;

    gt_31d_lte_91d: string;

    gt_3d_lte_16d: string;

    gt_91d_lte_121d: string;

    lte_3d: string;
  }

  export interface UnionMember3 {
    CERTIFICATE: string;

    PRECERTIFICATE: string;
  }

  export interface UnionMember4 {
    EXPIRED: string;

    VALID: string;
  }

  export interface UnionMember5 {
    NEGATIVE: string;

    POSITIVE: string;
  }

  export interface UnionMember6 {
    DSA: string;

    ECDSA: string;

    RSA: string;
  }

  export interface UnionMember7 {
    domain: string;

    extended: string;

    organization: string;

    unknown: string;
  }
}

export interface CtTimeseriesResponse {
  /**
   * Metadata for the results.
   */
  meta: CtTimeseriesResponse.Meta;

  [k: string]:
    | CtTimeseriesResponse.unnamed_schema_ref_75bae70cf28e6bcef364b9840db3bdeb
    | CtTimeseriesResponse.Meta
    | undefined;
}

export namespace CtTimeseriesResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    /**
     * Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals).
     * Refer to
     * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
     */
    aggInterval: 'FIFTEEN_MINUTES' | 'ONE_HOUR' | 'ONE_DAY' | 'ONE_WEEK' | 'ONE_MONTH';

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

  export interface unnamed_schema_ref_75bae70cf28e6bcef364b9840db3bdeb {
    timestamps: Array<string>;

    values: Array<string>;
  }
}

export interface CtTimeseriesGroupsResponse {
  /**
   * Metadata for the results.
   */
  meta: CtTimeseriesGroupsResponse.Meta;

  serie_0:
    | CtTimeseriesGroupsResponse.UnnamedSchemaRef7826220e105d84352ba1108d9ed88e55
    | CtTimeseriesGroupsResponse.UnionMember1
    | CtTimeseriesGroupsResponse.UnionMember2
    | CtTimeseriesGroupsResponse.UnionMember3
    | CtTimeseriesGroupsResponse.UnionMember4
    | CtTimeseriesGroupsResponse.UnionMember5
    | CtTimeseriesGroupsResponse.UnionMember6
    | CtTimeseriesGroupsResponse.UnionMember7;
}

export namespace CtTimeseriesGroupsResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    /**
     * Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals).
     * Refer to
     * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
     */
    aggInterval: 'FIFTEEN_MINUTES' | 'ONE_HOUR' | 'ONE_DAY' | 'ONE_WEEK' | 'ONE_MONTH';

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

  export interface UnnamedSchemaRef7826220e105d84352ba1108d9ed88e55 {
    timestamps: Array<string>;

    [k: string]: Array<string> | Array<string> | undefined;
  }

  export interface UnionMember1 {
    rfc6962: Array<string>;

    static: Array<string>;
  }

  export interface UnionMember2 {
    gt_121d: Array<string>;

    gt_16d_lte_31d: Array<string>;

    gt_31d_lte_91d: Array<string>;

    gt_3d_lte_16d: Array<string>;

    gt_91d_lte_121d: Array<string>;

    lte_3d: Array<string>;
  }

  export interface UnionMember3 {
    CERTIFICATE: Array<string>;

    PRECERTIFICATE: Array<string>;
  }

  export interface UnionMember4 {
    EXPIRED: Array<string>;

    VALID: Array<string>;
  }

  export interface UnionMember5 {
    NEGATIVE: Array<string>;

    POSITIVE: Array<string>;
  }

  export interface UnionMember6 {
    DSA: Array<string>;

    ECDSA: Array<string>;

    RSA: Array<string>;
  }

  export interface UnionMember7 {
    domain: Array<string>;

    extended: Array<string>;

    organization: Array<string>;

    unknown: Array<string>;
  }
}

export interface CtSummaryParams {
  /**
   * Filters results by certificate authority.
   */
  ca?: Array<string>;

  /**
   * Filters results by certificate authority owner.
   */
  caOwner?: Array<string>;

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
   * Filters results by certificate duration.
   */
  duration?: Array<
    | 'LTE_3D'
    | 'GT_3D_LTE_7D'
    | 'GT_7D_LTE_10D'
    | 'GT_10D_LTE_47D'
    | 'GT_47D_LTE_100D'
    | 'GT_100D_LTE_200D'
    | 'GT_200D'
  >;

  /**
   * Filters results by entry type (certificate vs. pre-certificate).
   */
  entryType?: Array<'PRECERTIFICATE' | 'CERTIFICATE'>;

  /**
   * Filters results by expiration status (expired vs. valid).
   */
  expirationStatus?: Array<'EXPIRED' | 'VALID'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results based on whether the certificates are bound to specific IP
   * addresses.
   */
  hasIps?: Array<boolean>;

  /**
   * Filters results based on whether the certificates contain wildcard domains.
   */
  hasWildcards?: Array<boolean>;

  /**
   * Limits the number of objects per group to the top items within the specified
   * time range. When item count exceeds the limit, extra items appear grouped under
   * an "other" category.
   */
  limitPerGroup?: number;

  /**
   * Filters results by certificate log.
   */
  log?: Array<string>;

  /**
   * Filters results by certificate log API (RFC6962 vs. static).
   */
  logApi?: Array<'RFC6962' | 'STATIC'>;

  /**
   * Filters results by certificate log operator.
   */
  logOperator?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Normalization method applied to the results. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'RAW_VALUES' | 'PERCENTAGE';

  /**
   * Filters results by public key algorithm.
   */
  publicKeyAlgorithm?: Array<'DSA' | 'ECDSA' | 'RSA'>;

  /**
   * Filters results by signature algorithm.
   */
  signatureAlgorithm?: Array<
    | 'DSA_SHA_1'
    | 'DSA_SHA_256'
    | 'ECDSA_SHA_1'
    | 'ECDSA_SHA_256'
    | 'ECDSA_SHA_384'
    | 'ECDSA_SHA_512'
    | 'PSS_SHA_256'
    | 'PSS_SHA_384'
    | 'PSS_SHA_512'
    | 'RSA_MD2'
    | 'RSA_MD5'
    | 'RSA_SHA_1'
    | 'RSA_SHA_256'
    | 'RSA_SHA_384'
    | 'RSA_SHA_512'
  >;

  /**
   * Filters results by top-level domain.
   */
  tld?: Array<string>;

  /**
   * Specifies whether to filter out duplicate certificates and pre-certificates. Set
   * to true for unique entries only.
   */
  uniqueEntries?: Array<'true' | 'false'>;

  /**
   * Filters results by validation level.
   */
  validationLevel?: Array<'DOMAIN' | 'ORGANIZATION' | 'EXTENDED'>;
}

export interface CtTimeseriesParams {
  /**
   * Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals).
   * Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Filters results by certificate authority.
   */
  ca?: Array<string>;

  /**
   * Filters results by certificate authority owner.
   */
  caOwner?: Array<string>;

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
   * Filters results by certificate duration.
   */
  duration?: Array<
    | 'LTE_3D'
    | 'GT_3D_LTE_7D'
    | 'GT_7D_LTE_10D'
    | 'GT_10D_LTE_47D'
    | 'GT_47D_LTE_100D'
    | 'GT_100D_LTE_200D'
    | 'GT_200D'
  >;

  /**
   * Filters results by entry type (certificate vs. pre-certificate).
   */
  entryType?: Array<'PRECERTIFICATE' | 'CERTIFICATE'>;

  /**
   * Filters results by expiration status (expired vs. valid).
   */
  expirationStatus?: Array<'EXPIRED' | 'VALID'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results based on whether the certificates are bound to specific IP
   * addresses.
   */
  hasIps?: Array<boolean>;

  /**
   * Filters results based on whether the certificates contain wildcard domains.
   */
  hasWildcards?: Array<boolean>;

  /**
   * Filters results by certificate log.
   */
  log?: Array<string>;

  /**
   * Filters results by certificate log API (RFC6962 vs. static).
   */
  logApi?: Array<'RFC6962' | 'STATIC'>;

  /**
   * Filters results by certificate log operator.
   */
  logOperator?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by public key algorithm.
   */
  publicKeyAlgorithm?: Array<'DSA' | 'ECDSA' | 'RSA'>;

  /**
   * Filters results by signature algorithm.
   */
  signatureAlgorithm?: Array<
    | 'DSA_SHA_1'
    | 'DSA_SHA_256'
    | 'ECDSA_SHA_1'
    | 'ECDSA_SHA_256'
    | 'ECDSA_SHA_384'
    | 'ECDSA_SHA_512'
    | 'PSS_SHA_256'
    | 'PSS_SHA_384'
    | 'PSS_SHA_512'
    | 'RSA_MD2'
    | 'RSA_MD5'
    | 'RSA_SHA_1'
    | 'RSA_SHA_256'
    | 'RSA_SHA_384'
    | 'RSA_SHA_512'
  >;

  /**
   * Filters results by top-level domain.
   */
  tld?: Array<string>;

  /**
   * Specifies whether to filter out duplicate certificates and pre-certificates. Set
   * to true for unique entries only.
   */
  uniqueEntries?: Array<'true' | 'false'>;

  /**
   * Filters results by validation level.
   */
  validationLevel?: Array<'DOMAIN' | 'ORGANIZATION' | 'EXTENDED'>;
}

export interface CtTimeseriesGroupsParams {
  /**
   * Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals).
   * Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Filters results by certificate authority.
   */
  ca?: Array<string>;

  /**
   * Filters results by certificate authority owner.
   */
  caOwner?: Array<string>;

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
   * Filters results by certificate duration.
   */
  duration?: Array<
    | 'LTE_3D'
    | 'GT_3D_LTE_7D'
    | 'GT_7D_LTE_10D'
    | 'GT_10D_LTE_47D'
    | 'GT_47D_LTE_100D'
    | 'GT_100D_LTE_200D'
    | 'GT_200D'
  >;

  /**
   * Filters results by entry type (certificate vs. pre-certificate).
   */
  entryType?: Array<'PRECERTIFICATE' | 'CERTIFICATE'>;

  /**
   * Filters results by expiration status (expired vs. valid).
   */
  expirationStatus?: Array<'EXPIRED' | 'VALID'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results based on whether the certificates are bound to specific IP
   * addresses.
   */
  hasIps?: Array<boolean>;

  /**
   * Filters results based on whether the certificates contain wildcard domains.
   */
  hasWildcards?: Array<boolean>;

  /**
   * Limits the number of objects per group to the top items within the specified
   * time range. When item count exceeds the limit, extra items appear grouped under
   * an "other" category.
   */
  limitPerGroup?: number;

  /**
   * Filters results by certificate log.
   */
  log?: Array<string>;

  /**
   * Filters results by certificate log API (RFC6962 vs. static).
   */
  logApi?: Array<'RFC6962' | 'STATIC'>;

  /**
   * Filters results by certificate log operator.
   */
  logOperator?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Normalization method applied to the results. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'RAW_VALUES' | 'PERCENTAGE';

  /**
   * Filters results by public key algorithm.
   */
  publicKeyAlgorithm?: Array<'DSA' | 'ECDSA' | 'RSA'>;

  /**
   * Filters results by signature algorithm.
   */
  signatureAlgorithm?: Array<
    | 'DSA_SHA_1'
    | 'DSA_SHA_256'
    | 'ECDSA_SHA_1'
    | 'ECDSA_SHA_256'
    | 'ECDSA_SHA_384'
    | 'ECDSA_SHA_512'
    | 'PSS_SHA_256'
    | 'PSS_SHA_384'
    | 'PSS_SHA_512'
    | 'RSA_MD2'
    | 'RSA_MD5'
    | 'RSA_SHA_1'
    | 'RSA_SHA_256'
    | 'RSA_SHA_384'
    | 'RSA_SHA_512'
  >;

  /**
   * Filters results by top-level domain.
   */
  tld?: Array<string>;

  /**
   * Specifies whether to filter out duplicate certificates and pre-certificates. Set
   * to true for unique entries only.
   */
  uniqueEntries?: Array<'true' | 'false'>;

  /**
   * Filters results by validation level.
   */
  validationLevel?: Array<'DOMAIN' | 'ORGANIZATION' | 'EXTENDED'>;
}

Ct.Authorities = Authorities;
Ct.Logs = Logs;

export declare namespace Ct {
  export {
    type CtSummaryResponse as CtSummaryResponse,
    type CtTimeseriesResponse as CtTimeseriesResponse,
    type CtTimeseriesGroupsResponse as CtTimeseriesGroupsResponse,
    type CtSummaryParams as CtSummaryParams,
    type CtTimeseriesParams as CtTimeseriesParams,
    type CtTimeseriesGroupsParams as CtTimeseriesGroupsParams,
  };

  export {
    Authorities as Authorities,
    type AuthorityListResponse as AuthorityListResponse,
    type AuthorityGetResponse as AuthorityGetResponse,
    type AuthorityListParams as AuthorityListParams,
    type AuthorityGetParams as AuthorityGetParams,
  };

  export {
    Logs as Logs,
    type LogListResponse as LogListResponse,
    type LogGetResponse as LogGetResponse,
    type LogListParams as LogListParams,
    type LogGetParams as LogGetParams,
  };
}
