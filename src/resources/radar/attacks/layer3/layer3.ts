// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as Layer3API from './layer3';
import * as SummaryAPI from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import * as TopAPI from './top/top';

export class Layer3 extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
  top: TopAPI.Top = new TopAPI.Top(this._client);

  /**
   * Get attacks change over time by bytes.
   */
  timeseries(
    query?: Layer3TimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Layer3TimeseriesResponse>;
  timeseries(options?: Core.RequestOptions): Core.APIPromise<Layer3TimeseriesResponse>;
  timeseries(
    query: Layer3TimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Layer3TimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.timeseries({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer3/timeseries', { query, ...options }) as Core.APIPromise<{
        result: Layer3TimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Layer3TimeseriesResponse {
  meta: unknown;

  serie_0: Layer3TimeseriesResponse.Serie0;
}

export namespace Layer3TimeseriesResponse {
  export interface Serie0 {
    timestamps: Array<string>;

    values: Array<string>;
  }
}

export interface Layer3TimeseriesParams {
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
   * Measurement units, eg. bytes.
   */
  metric?: 'BYTES' | 'BYTES_OLD';

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE_CHANGE' | 'MIN0_MAX';

  /**
   * Array of L3/4 attack types.
   */
  protocol?: Array<'UDP' | 'TCP' | 'ICMP' | 'GRE'>;
}

export namespace Layer3 {
  export type Layer3TimeseriesResponse = Layer3API.Layer3TimeseriesResponse;
  export type Layer3TimeseriesParams = Layer3API.Layer3TimeseriesParams;
  export import Summary = SummaryAPI.Summary;
  export type SummaryBitrateResponse = SummaryAPI.SummaryBitrateResponse;
  export type SummaryDurationResponse = SummaryAPI.SummaryDurationResponse;
  export type SummaryGetResponse = SummaryAPI.SummaryGetResponse;
  export type SummaryIPVersionResponse = SummaryAPI.SummaryIPVersionResponse;
  export type SummaryProtocolResponse = SummaryAPI.SummaryProtocolResponse;
  export type SummaryVectorResponse = SummaryAPI.SummaryVectorResponse;
  export type SummaryBitrateParams = SummaryAPI.SummaryBitrateParams;
  export type SummaryDurationParams = SummaryAPI.SummaryDurationParams;
  export type SummaryGetParams = SummaryAPI.SummaryGetParams;
  export type SummaryIPVersionParams = SummaryAPI.SummaryIPVersionParams;
  export type SummaryProtocolParams = SummaryAPI.SummaryProtocolParams;
  export type SummaryVectorParams = SummaryAPI.SummaryVectorParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export type TimeseriesGroupBitrateResponse = TimeseriesGroupsAPI.TimeseriesGroupBitrateResponse;
  export type TimeseriesGroupDurationResponse = TimeseriesGroupsAPI.TimeseriesGroupDurationResponse;
  export type TimeseriesGroupGetResponse = TimeseriesGroupsAPI.TimeseriesGroupGetResponse;
  export type TimeseriesGroupIndustryResponse = TimeseriesGroupsAPI.TimeseriesGroupIndustryResponse;
  export type TimeseriesGroupIPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupIPVersionResponse;
  export type TimeseriesGroupProtocolResponse = TimeseriesGroupsAPI.TimeseriesGroupProtocolResponse;
  export type TimeseriesGroupVectorResponse = TimeseriesGroupsAPI.TimeseriesGroupVectorResponse;
  export type TimeseriesGroupVerticalResponse = TimeseriesGroupsAPI.TimeseriesGroupVerticalResponse;
  export type TimeseriesGroupBitrateParams = TimeseriesGroupsAPI.TimeseriesGroupBitrateParams;
  export type TimeseriesGroupDurationParams = TimeseriesGroupsAPI.TimeseriesGroupDurationParams;
  export type TimeseriesGroupGetParams = TimeseriesGroupsAPI.TimeseriesGroupGetParams;
  export type TimeseriesGroupIndustryParams = TimeseriesGroupsAPI.TimeseriesGroupIndustryParams;
  export type TimeseriesGroupIPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupIPVersionParams;
  export type TimeseriesGroupProtocolParams = TimeseriesGroupsAPI.TimeseriesGroupProtocolParams;
  export type TimeseriesGroupVectorParams = TimeseriesGroupsAPI.TimeseriesGroupVectorParams;
  export type TimeseriesGroupVerticalParams = TimeseriesGroupsAPI.TimeseriesGroupVerticalParams;
  export import Top = TopAPI.Top;
  export type TopAttacksResponse = TopAPI.TopAttacksResponse;
  export type TopIndustryResponse = TopAPI.TopIndustryResponse;
  export type TopVerticalResponse = TopAPI.TopVerticalResponse;
  export type TopAttacksParams = TopAPI.TopAttacksParams;
  export type TopIndustryParams = TopAPI.TopIndustryParams;
  export type TopVerticalParams = TopAPI.TopVerticalParams;
}
