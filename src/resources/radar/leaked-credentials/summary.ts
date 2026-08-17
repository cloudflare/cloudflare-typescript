// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseSummary extends APIResource {
  static override readonly _key: readonly ['radar', 'leakedCredentials', 'summary'] = Object.freeze([
    'radar',
    'leakedCredentials',
    'summary',
  ] as const);

  /**
   * Retrieves the distribution of HTTP authentication requests by bot class.
   *
   * @deprecated Use [Radar Leaked Credentials Summary By Dimension](https://developers.cloudflare.com/api/resources/radar/subresources/leaked_credentials/methods/summary_v2/) instead.
   */
  botClass(
    query: SummaryBotClassParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryBotClassResponse> {
    return (
      this._client.get('/radar/leaked_credential_checks/summary/bot_class', {
        query,
        ...options,
      }) as APIPromise<{ result: SummaryBotClassResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of HTTP authentication requests by compromised
   * credential status.
   *
   * @deprecated Use [Radar Leaked Credentials Summary By Dimension](https://developers.cloudflare.com/api/resources/radar/subresources/leaked_credentials/methods/summary_v2/) instead.
   */
  compromised(
    query: SummaryCompromisedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryCompromisedResponse> {
    return (
      this._client.get('/radar/leaked_credential_checks/summary/compromised', {
        query,
        ...options,
      }) as APIPromise<{ result: SummaryCompromisedResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Summary extends BaseSummary {}

export interface SummaryBotClassResponse {
  /**
   * Metadata for the results.
   */
  meta: SummaryBotClassResponse.Meta;

  summary_0: SummaryBotClassResponse.Summary0;
}

export namespace SummaryBotClassResponse {
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
        /**
         * Data source for annotations.
         */
        dataSource:
          | 'ALL'
          | 'AI_BOTS'
          | 'AI_GATEWAY'
          | 'BGP'
          | 'BOTS'
          | 'CONNECTION_ANOMALY'
          | 'CT'
          | 'DNS'
          | 'DNS_MAGNITUDE'
          | 'DNS_AS112'
          | 'DOS'
          | 'EMAIL_ROUTING'
          | 'EMAIL_SECURITY'
          | 'FW'
          | 'FW_PG'
          | 'HTTP'
          | 'HTTP_CONTROL'
          | 'HTTP_CRAWLER_REFERER'
          | 'HTTP_ORIGINS'
          | 'IQI'
          | 'LEAKED_CREDENTIALS'
          | 'NET'
          | 'ROBOTS_TXT'
          | 'SPEED'
          | 'WORKERS_AI';

        description: string;

        endDate: string;

        /**
         * Event type for annotations.
         */
        eventType: 'EVENT' | 'GENERAL' | 'OUTAGE' | 'PARTIAL_PROJECTION' | 'PIPELINE' | 'TRAFFIC_ANOMALY';

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;

        tags?: Array<string>;
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
    bot: string;

    /**
     * A numeric string.
     */
    human: string;
  }
}

export interface SummaryCompromisedResponse {
  /**
   * Metadata for the results.
   */
  meta: SummaryCompromisedResponse.Meta;

  summary_0: SummaryCompromisedResponse.Summary0;
}

export namespace SummaryCompromisedResponse {
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
        /**
         * Data source for annotations.
         */
        dataSource:
          | 'ALL'
          | 'AI_BOTS'
          | 'AI_GATEWAY'
          | 'BGP'
          | 'BOTS'
          | 'CONNECTION_ANOMALY'
          | 'CT'
          | 'DNS'
          | 'DNS_MAGNITUDE'
          | 'DNS_AS112'
          | 'DOS'
          | 'EMAIL_ROUTING'
          | 'EMAIL_SECURITY'
          | 'FW'
          | 'FW_PG'
          | 'HTTP'
          | 'HTTP_CONTROL'
          | 'HTTP_CRAWLER_REFERER'
          | 'HTTP_ORIGINS'
          | 'IQI'
          | 'LEAKED_CREDENTIALS'
          | 'NET'
          | 'ROBOTS_TXT'
          | 'SPEED'
          | 'WORKERS_AI';

        description: string;

        endDate: string;

        /**
         * Event type for annotations.
         */
        eventType: 'EVENT' | 'GENERAL' | 'OUTAGE' | 'PARTIAL_PROJECTION' | 'PIPELINE' | 'TRAFFIC_ANOMALY';

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;

        tags?: Array<string>;
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
    CLEAN: string;

    /**
     * A numeric string.
     */
    COMPROMISED: string;
  }
}

export interface SummaryBotClassParams {
  /**
   * Filters results by compromised credential status (clean vs. compromised).
   */
  compromised?: Array<'CLEAN' | 'COMPROMISED'>;

  /**
   * End of the date range (inclusive). Alternative to `dateRange`; provide together
   * with `dateStart`. When requesting comparison series, every series must resolve
   * to the same duration as the main series. Each `dateStart`/`dateEnd` is floored
   * to the nearest 15 minutes before evaluation, so windows whose durations match
   * only before alignment may be rejected.
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by relative date range ending at the current time, with each
   * value producing a separate series. Use `<n>d` for days (up to `364d`) or `<n>w`
   * for weeks (up to `52w`). Append `control` to request the equivalent previous
   * period for comparison: the comparison window is shifted back by the current
   * window's length rounded up to a whole number of weeks, so it keeps the same
   * weekday alignment and does not overlap the current window (e.g. `7dcontrol`
   * covers days -14 to -7, `10dcontrol` covers days -24 to -14). For example, pass
   * `7d` and `7dcontrol` to compare this week with the previous week. All series
   * must resolve to the same duration as the main series; relative ranges (including
   * `control`) satisfy this automatically. Use this parameter or set specific start
   * and end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range. Alternative to `dateRange`; provide together with
   * `dateEnd`. When requesting comparison series, every series must resolve to the
   * same duration as the main series. Each `dateStart`/`dateEnd` is floored to the
   * nearest 15 minutes before evaluation, so windows whose durations match only
   * before alignment may be rejected.
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

export interface SummaryCompromisedParams {
  /**
   * Filters results by bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

  /**
   * End of the date range (inclusive). Alternative to `dateRange`; provide together
   * with `dateStart`. When requesting comparison series, every series must resolve
   * to the same duration as the main series. Each `dateStart`/`dateEnd` is floored
   * to the nearest 15 minutes before evaluation, so windows whose durations match
   * only before alignment may be rejected.
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by relative date range ending at the current time, with each
   * value producing a separate series. Use `<n>d` for days (up to `364d`) or `<n>w`
   * for weeks (up to `52w`). Append `control` to request the equivalent previous
   * period for comparison: the comparison window is shifted back by the current
   * window's length rounded up to a whole number of weeks, so it keeps the same
   * weekday alignment and does not overlap the current window (e.g. `7dcontrol`
   * covers days -14 to -7, `10dcontrol` covers days -24 to -14). For example, pass
   * `7d` and `7dcontrol` to compare this week with the previous week. All series
   * must resolve to the same duration as the main series; relative ranges (including
   * `control`) satisfy this automatically. Use this parameter or set specific start
   * and end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range. Alternative to `dateRange`; provide together with
   * `dateEnd`. When requesting comparison series, every series must resolve to the
   * same duration as the main series. Each `dateStart`/`dateEnd` is floored to the
   * nearest 15 minutes before evaluation, so windows whose durations match only
   * before alignment may be rejected.
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

export declare namespace Summary {
  export {
    type SummaryBotClassResponse as SummaryBotClassResponse,
    type SummaryCompromisedResponse as SummaryCompromisedResponse,
    type SummaryBotClassParams as SummaryBotClassParams,
    type SummaryCompromisedParams as SummaryCompromisedParams,
  };
}
