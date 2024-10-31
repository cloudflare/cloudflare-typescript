// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as SummaryAPI from './summary';
import {
  Summary,
  SummaryBitrateParams,
  SummaryBitrateResponse,
  SummaryDurationParams,
  SummaryDurationResponse,
  SummaryGetParams,
  SummaryGetResponse,
  SummaryIPVersionParams,
  SummaryIPVersionResponse,
  SummaryProtocolParams,
  SummaryProtocolResponse,
  SummaryVectorParams,
  SummaryVectorResponse,
} from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import {
  TimeseriesGroupBitrateParams,
  TimeseriesGroupBitrateResponse,
  TimeseriesGroupDurationParams,
  TimeseriesGroupDurationResponse,
  TimeseriesGroupGetParams,
  TimeseriesGroupGetResponse,
  TimeseriesGroupIPVersionParams,
  TimeseriesGroupIPVersionResponse,
  TimeseriesGroupIndustryParams,
  TimeseriesGroupIndustryResponse,
  TimeseriesGroupProtocolParams,
  TimeseriesGroupProtocolResponse,
  TimeseriesGroupVectorParams,
  TimeseriesGroupVectorResponse,
  TimeseriesGroupVerticalParams,
  TimeseriesGroupVerticalResponse,
  TimeseriesGroups,
} from './timeseries-groups';
import * as TopAPI from './top/top';
import {
  Top,
  TopAttacksParams,
  TopAttacksResponse,
  TopIndustryParams,
  TopIndustryResponse,
  TopVerticalParams,
  TopVerticalResponse,
} from './top/top';

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

Layer3.Summary = Summary;
Layer3.TimeseriesGroups = TimeseriesGroups;
Layer3.Top = Top;

export declare namespace Layer3 {
  export {
    type Layer3TimeseriesResponse as Layer3TimeseriesResponse,
    type Layer3TimeseriesParams as Layer3TimeseriesParams,
  };

  export {
    Summary as Summary,
    type SummaryBitrateResponse as SummaryBitrateResponse,
    type SummaryDurationResponse as SummaryDurationResponse,
    type SummaryGetResponse as SummaryGetResponse,
    type SummaryIPVersionResponse as SummaryIPVersionResponse,
    type SummaryProtocolResponse as SummaryProtocolResponse,
    type SummaryVectorResponse as SummaryVectorResponse,
    type SummaryBitrateParams as SummaryBitrateParams,
    type SummaryDurationParams as SummaryDurationParams,
    type SummaryGetParams as SummaryGetParams,
    type SummaryIPVersionParams as SummaryIPVersionParams,
    type SummaryProtocolParams as SummaryProtocolParams,
    type SummaryVectorParams as SummaryVectorParams,
  };

  export {
    TimeseriesGroups as TimeseriesGroups,
    type TimeseriesGroupBitrateResponse as TimeseriesGroupBitrateResponse,
    type TimeseriesGroupDurationResponse as TimeseriesGroupDurationResponse,
    type TimeseriesGroupGetResponse as TimeseriesGroupGetResponse,
    type TimeseriesGroupIndustryResponse as TimeseriesGroupIndustryResponse,
    type TimeseriesGroupIPVersionResponse as TimeseriesGroupIPVersionResponse,
    type TimeseriesGroupProtocolResponse as TimeseriesGroupProtocolResponse,
    type TimeseriesGroupVectorResponse as TimeseriesGroupVectorResponse,
    type TimeseriesGroupVerticalResponse as TimeseriesGroupVerticalResponse,
    type TimeseriesGroupBitrateParams as TimeseriesGroupBitrateParams,
    type TimeseriesGroupDurationParams as TimeseriesGroupDurationParams,
    type TimeseriesGroupGetParams as TimeseriesGroupGetParams,
    type TimeseriesGroupIndustryParams as TimeseriesGroupIndustryParams,
    type TimeseriesGroupIPVersionParams as TimeseriesGroupIPVersionParams,
    type TimeseriesGroupProtocolParams as TimeseriesGroupProtocolParams,
    type TimeseriesGroupVectorParams as TimeseriesGroupVectorParams,
    type TimeseriesGroupVerticalParams as TimeseriesGroupVerticalParams,
  };

  export {
    Top as Top,
    type TopAttacksResponse as TopAttacksResponse,
    type TopIndustryResponse as TopIndustryResponse,
    type TopVerticalResponse as TopVerticalResponse,
    type TopAttacksParams as TopAttacksParams,
    type TopIndustryParams as TopIndustryParams,
    type TopVerticalParams as TopVerticalParams,
  };
}
