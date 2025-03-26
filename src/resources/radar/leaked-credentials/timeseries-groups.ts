// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class TimeseriesGroups extends APIResource {
  /**
   * Retrieves the distribution of HTTP authentication requests by bot class over
   * time.
   */
  botClass(
    query: TimeseriesGroupBotClassParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeseriesGroupBotClassResponse> {
    return (
      this._client.get('/radar/leaked_credential_checks/timeseries_groups/bot_class', {
        query,
        ...options,
      }) as APIPromise<{ result: TimeseriesGroupBotClassResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of HTTP authentication requests by compromised
   * credential status over time.
   */
  compromised(
    query: TimeseriesGroupCompromisedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeseriesGroupCompromisedResponse> {
    return (
      this._client.get('/radar/leaked_credential_checks/timeseries_groups/compromised', {
        query,
        ...options,
      }) as APIPromise<{ result: TimeseriesGroupCompromisedResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TimeseriesGroupBotClassResponse {
  meta: unknown;

  serie_0: TimeseriesGroupBotClassResponse.Serie0;
}

export namespace TimeseriesGroupBotClassResponse {
  export interface Serie0 {
    bot: Array<string>;

    human: Array<string>;

    timestamps: Array<string>;
  }
}

export interface TimeseriesGroupCompromisedResponse {
  meta: unknown;

  serie_0: TimeseriesGroupCompromisedResponse.Serie0;
}

export namespace TimeseriesGroupCompromisedResponse {
  export interface Serie0 {
    CLEAN: Array<string>;

    COMPROMISED: Array<string>;

    timestamps: Array<string>;
  }
}

export interface TimeseriesGroupBotClassParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Filters results by compromised credential status (clean vs. compromised).
   */
  compromised?: Array<'CLEAN' | 'COMPROMISED'>;

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
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export interface TimeseriesGroupCompromisedParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Filters results by bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

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
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export declare namespace TimeseriesGroups {
  export {
    type TimeseriesGroupBotClassResponse as TimeseriesGroupBotClassResponse,
    type TimeseriesGroupCompromisedResponse as TimeseriesGroupCompromisedResponse,
    type TimeseriesGroupBotClassParams as TimeseriesGroupBotClassParams,
    type TimeseriesGroupCompromisedParams as TimeseriesGroupCompromisedParams,
  };
}
