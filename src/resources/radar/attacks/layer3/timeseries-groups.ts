// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as TimeseriesGroupsAPI from './timeseries-groups';

export class TimeseriesGroups extends APIResource {
  /**
   * Percentage distribution of attacks by bitrate over time.
   */
  bitrate(
    query?: TimeseriesGroupBitrateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupBitrateResponse>;
  bitrate(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupBitrateResponse>;
  bitrate(
    query: TimeseriesGroupBitrateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupBitrateResponse> {
    if (isRequestOptions(query)) {
      return this.bitrate({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer3/timeseries_groups/bitrate', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupBitrateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of attacks by duration over time.
   */
  duration(
    query?: TimeseriesGroupDurationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupDurationResponse>;
  duration(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupDurationResponse>;
  duration(
    query: TimeseriesGroupDurationParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupDurationResponse> {
    if (isRequestOptions(query)) {
      return this.duration({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer3/timeseries_groups/duration', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupDurationResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series of the percentage distribution of network protocols in Layer
   * 3/4 attacks.
   */
  get(
    query?: TimeseriesGroupGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupGetResponse>;
  get(
    query: TimeseriesGroupGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupGetResponse> {
    if (isRequestOptions(query)) {
      return this.get({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer3/timeseries_groups', { query, ...options }) as Core.APIPromise<{
        result: TimeseriesGroupGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of attacks by industry used over time.
   */
  industry(
    query?: TimeseriesGroupIndustryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupIndustryResponse>;
  industry(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupIndustryResponse>;
  industry(
    query: TimeseriesGroupIndustryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupIndustryResponse> {
    if (isRequestOptions(query)) {
      return this.industry({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer3/timeseries_groups/industry', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupIndustryResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of attacks by ip version used over time.
   */
  ipVersion(
    query?: TimeseriesGroupIPVersionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupIPVersionResponse>;
  ipVersion(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupIPVersionResponse>;
  ipVersion(
    query: TimeseriesGroupIPVersionParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupIPVersionResponse> {
    if (isRequestOptions(query)) {
      return this.ipVersion({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer3/timeseries_groups/ip_version', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupIPVersionResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of attacks by protocol used over time.
   */
  protocol(
    query?: TimeseriesGroupProtocolParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupProtocolResponse>;
  protocol(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupProtocolResponse>;
  protocol(
    query: TimeseriesGroupProtocolParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupProtocolResponse> {
    if (isRequestOptions(query)) {
      return this.protocol({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer3/timeseries_groups/protocol', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupProtocolResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of attacks by vector used over time.
   */
  vector(
    query?: TimeseriesGroupVectorParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupVectorResponse>;
  vector(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupVectorResponse>;
  vector(
    query: TimeseriesGroupVectorParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupVectorResponse> {
    if (isRequestOptions(query)) {
      return this.vector({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer3/timeseries_groups/vector', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupVectorResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of attacks by vertical used over time.
   */
  vertical(
    query?: TimeseriesGroupVerticalParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupVerticalResponse>;
  vertical(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupVerticalResponse>;
  vertical(
    query: TimeseriesGroupVerticalParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupVerticalResponse> {
    if (isRequestOptions(query)) {
      return this.vertical({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer3/timeseries_groups/vertical', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupVerticalResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TimeseriesGroupBitrateResponse {
  meta: unknown;

  serie_0: TimeseriesGroupBitrateResponse.Serie0;
}

export namespace TimeseriesGroupBitrateResponse {
  export interface Serie0 {
    _1_GBPS_TO_10_GBPS: Array<string>;

    _10_GBPS_TO_100_GBPS: Array<string>;

    _500_MBPS_TO_1_GBPS: Array<string>;

    OVER_100_GBPS: Array<string>;

    timestamps: Array<string>;

    UNDER_500_MBPS: Array<string>;
  }
}

export interface TimeseriesGroupDurationResponse {
  meta: unknown;

  serie_0: TimeseriesGroupDurationResponse.Serie0;
}

export namespace TimeseriesGroupDurationResponse {
  export interface Serie0 {
    _1_HOUR_TO_3_HOURS: Array<string>;

    _10_MINS_TO_20_MINS: Array<string>;

    _20_MINS_TO_40_MINS: Array<string>;

    _40_MINS_TO_1_HOUR: Array<string>;

    OVER_3_HOURS: Array<string>;

    timestamps: Array<string>;

    UNDER_10_MINS: Array<string>;
  }
}

export interface TimeseriesGroupGetResponse {
  meta: TimeseriesGroupGetResponse.Meta;

  serie_0: TimeseriesGroupGetResponse.Serie0;
}

export namespace TimeseriesGroupGetResponse {
  export interface Meta {
    aggInterval: string;

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

  export interface Serie0 {
    gre: Array<string>;

    icmp: Array<string>;

    tcp: Array<string>;

    timestamps: Array<string>;

    udp: Array<string>;
  }
}

export interface TimeseriesGroupIndustryResponse {
  meta: unknown;

  serie_0: TimeseriesGroupIndustryResponse.Serie0;
}

export namespace TimeseriesGroupIndustryResponse {
  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string> | undefined;
  }
}

export interface TimeseriesGroupIPVersionResponse {
  meta: unknown;

  serie_0: TimeseriesGroupIPVersionResponse.Serie0;
}

export namespace TimeseriesGroupIPVersionResponse {
  export interface Serie0 {
    IPv4: Array<string>;

    IPv6: Array<string>;

    timestamps: Array<string>;
  }
}

export interface TimeseriesGroupProtocolResponse {
  meta: unknown;

  serie_0: TimeseriesGroupProtocolResponse.Serie0;
}

export namespace TimeseriesGroupProtocolResponse {
  export interface Serie0 {
    GRE: Array<string>;

    ICMP: Array<string>;

    TCP: Array<string>;

    timestamps: Array<string>;

    UDP: Array<string>;
  }
}

export interface TimeseriesGroupVectorResponse {
  meta: unknown;

  serie_0: TimeseriesGroupVectorResponse.Serie0;
}

export namespace TimeseriesGroupVectorResponse {
  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string> | undefined;
  }
}

export interface TimeseriesGroupVerticalResponse {
  meta: unknown;

  serie_0: TimeseriesGroupVerticalResponse.Serie0;
}

export namespace TimeseriesGroupVerticalResponse {
  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string> | undefined;
  }
}

export interface TimeseriesGroupBitrateParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Array of comma separated list of continents (alpha-2 continent codes). Start
   * with `-` to exclude from results. For example, `-EU,NA` excludes results from
   * Europe, but includes results from North America.
   */
  continent?: Array<string>;

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
   * Together with the `location` parameter, will apply the filter to origin or
   * target location.
   */
  direction?: 'ORIGIN' | 'TARGET';

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE' | 'MIN0_MAX';

  /**
   * Array of L3/4 attack types.
   */
  protocol?: Array<'UDP' | 'TCP' | 'ICMP' | 'GRE'>;
}

export interface TimeseriesGroupDurationParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Array of comma separated list of continents (alpha-2 continent codes). Start
   * with `-` to exclude from results. For example, `-EU,NA` excludes results from
   * Europe, but includes results from North America.
   */
  continent?: Array<string>;

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
   * Together with the `location` parameter, will apply the filter to origin or
   * target location.
   */
  direction?: 'ORIGIN' | 'TARGET';

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE' | 'MIN0_MAX';

  /**
   * Array of L3/4 attack types.
   */
  protocol?: Array<'UDP' | 'TCP' | 'ICMP' | 'GRE'>;
}

export interface TimeseriesGroupGetParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * Array of comma separated list of continents (alpha-2 continent codes). Start
   * with `-` to exclude from results. For example, `-EU,NA` excludes results from
   * Europe, but includes results from North America.
   */
  continent?: Array<string>;

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

export interface TimeseriesGroupIndustryParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Array of comma separated list of continents (alpha-2 continent codes). Start
   * with `-` to exclude from results. For example, `-EU,NA` excludes results from
   * Europe, but includes results from North America.
   */
  continent?: Array<string>;

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
   * Together with the `location` parameter, will apply the filter to origin or
   * target location.
   */
  direction?: 'ORIGIN' | 'TARGET';

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limit the number of objects (eg browsers, verticals, etc) to the top items over
   * the time range.
   */
  limitPerGroup?: number;

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
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE' | 'MIN0_MAX';

  /**
   * Array of L3/4 attack types.
   */
  protocol?: Array<'UDP' | 'TCP' | 'ICMP' | 'GRE'>;
}

export interface TimeseriesGroupIPVersionParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Array of comma separated list of continents (alpha-2 continent codes). Start
   * with `-` to exclude from results. For example, `-EU,NA` excludes results from
   * Europe, but includes results from North America.
   */
  continent?: Array<string>;

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
   * Together with the `location` parameter, will apply the filter to origin or
   * target location.
   */
  direction?: 'ORIGIN' | 'TARGET';

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
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE' | 'MIN0_MAX';

  /**
   * Array of L3/4 attack types.
   */
  protocol?: Array<'UDP' | 'TCP' | 'ICMP' | 'GRE'>;
}

export interface TimeseriesGroupProtocolParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Array of comma separated list of continents (alpha-2 continent codes). Start
   * with `-` to exclude from results. For example, `-EU,NA` excludes results from
   * Europe, but includes results from North America.
   */
  continent?: Array<string>;

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
   * Together with the `location` parameter, will apply the filter to origin or
   * target location.
   */
  direction?: 'ORIGIN' | 'TARGET';

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE' | 'MIN0_MAX';
}

export interface TimeseriesGroupVectorParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Array of comma separated list of continents (alpha-2 continent codes). Start
   * with `-` to exclude from results. For example, `-EU,NA` excludes results from
   * Europe, but includes results from North America.
   */
  continent?: Array<string>;

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
   * Together with the `location` parameter, will apply the filter to origin or
   * target location.
   */
  direction?: 'ORIGIN' | 'TARGET';

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limit the number of objects (eg browsers, verticals, etc) to the top items over
   * the time range.
   */
  limitPerGroup?: number;

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
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE' | 'MIN0_MAX';

  /**
   * Array of L3/4 attack types.
   */
  protocol?: Array<'UDP' | 'TCP' | 'ICMP' | 'GRE'>;
}

export interface TimeseriesGroupVerticalParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Array of comma separated list of continents (alpha-2 continent codes). Start
   * with `-` to exclude from results. For example, `-EU,NA` excludes results from
   * Europe, but includes results from North America.
   */
  continent?: Array<string>;

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
   * Together with the `location` parameter, will apply the filter to origin or
   * target location.
   */
  direction?: 'ORIGIN' | 'TARGET';

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limit the number of objects (eg browsers, verticals, etc) to the top items over
   * the time range.
   */
  limitPerGroup?: number;

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
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE' | 'MIN0_MAX';

  /**
   * Array of L3/4 attack types.
   */
  protocol?: Array<'UDP' | 'TCP' | 'ICMP' | 'GRE'>;
}

export namespace TimeseriesGroups {
  export import TimeseriesGroupBitrateResponse = TimeseriesGroupsAPI.TimeseriesGroupBitrateResponse;
  export import TimeseriesGroupDurationResponse = TimeseriesGroupsAPI.TimeseriesGroupDurationResponse;
  export import TimeseriesGroupGetResponse = TimeseriesGroupsAPI.TimeseriesGroupGetResponse;
  export import TimeseriesGroupIndustryResponse = TimeseriesGroupsAPI.TimeseriesGroupIndustryResponse;
  export import TimeseriesGroupIPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupIPVersionResponse;
  export import TimeseriesGroupProtocolResponse = TimeseriesGroupsAPI.TimeseriesGroupProtocolResponse;
  export import TimeseriesGroupVectorResponse = TimeseriesGroupsAPI.TimeseriesGroupVectorResponse;
  export import TimeseriesGroupVerticalResponse = TimeseriesGroupsAPI.TimeseriesGroupVerticalResponse;
  export import TimeseriesGroupBitrateParams = TimeseriesGroupsAPI.TimeseriesGroupBitrateParams;
  export import TimeseriesGroupDurationParams = TimeseriesGroupsAPI.TimeseriesGroupDurationParams;
  export import TimeseriesGroupGetParams = TimeseriesGroupsAPI.TimeseriesGroupGetParams;
  export import TimeseriesGroupIndustryParams = TimeseriesGroupsAPI.TimeseriesGroupIndustryParams;
  export import TimeseriesGroupIPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupIPVersionParams;
  export import TimeseriesGroupProtocolParams = TimeseriesGroupsAPI.TimeseriesGroupProtocolParams;
  export import TimeseriesGroupVectorParams = TimeseriesGroupsAPI.TimeseriesGroupVectorParams;
  export import TimeseriesGroupVerticalParams = TimeseriesGroupsAPI.TimeseriesGroupVerticalParams;
}
