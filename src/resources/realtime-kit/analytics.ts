// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseAnalytics extends APIResource {
  static override readonly _key: readonly ['realtimeKit', 'analytics'] = Object.freeze([
    'realtimeKit',
    'analytics',
  ] as const);

  /**
   * Returns day-wise session and recording analytics data of an App for the
   * specified time range start_date to end_date. If start_date and end_date are not
   * provided, the default time range is set from 30 days ago to the current date.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.analytics.getOrgAnalytics(
   *     'app_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getOrgAnalytics(
    appID: string,
    params: AnalyticsGetOrgAnalyticsParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsGetOrgAnalyticsResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/realtime/kit/${appID}/analytics/daywise`, {
      query,
      ...options,
    });
  }
}
export class Analytics extends BaseAnalytics {}

export interface AnalyticsGetOrgAnalyticsResponse {
  data?: AnalyticsGetOrgAnalyticsResponse.Data;

  success?: boolean;
}

export namespace AnalyticsGetOrgAnalyticsResponse {
  export interface Data {
    /**
     * Recording statistics of an App during the range specified
     */
    recording_stats?: Data.RecordingStats;

    /**
     * Session statistics of an App during the range specified
     */
    session_stats?: Data.SessionStats;
  }

  export namespace Data {
    /**
     * Recording statistics of an App during the range specified
     */
    export interface RecordingStats {
      /**
       * Day wise recording stats
       */
      day_stats?: Array<RecordingStats.DayStat>;

      /**
       * Total number of recordings during the range specified
       */
      recording_count?: number;

      /**
       * Total recording minutes during the range specified
       */
      recording_minutes_consumed?: number;
    }

    export namespace RecordingStats {
      export interface DayStat {
        day?: string;

        /**
         * Total recording minutes for a specific day
         */
        total_recording_minutes?: number;

        /**
         * Total number of recordings for a specific day
         */
        total_recordings?: number;
      }
    }

    /**
     * Session statistics of an App during the range specified
     */
    export interface SessionStats {
      /**
       * Day wise session stats
       */
      day_stats?: Array<SessionStats.DayStat>;

      /**
       * Total number of sessions during the range specified
       */
      sessions_count?: number;

      /**
       * Total session minutes during the range specified
       */
      sessions_minutes_consumed?: number;
    }

    export namespace SessionStats {
      export interface DayStat {
        day?: string;

        /**
         * Total session minutes for a specific day
         */
        total_session_minutes?: number;

        /**
         * Total number of sessions for a specific day
         */
        total_sessions?: number;
      }
    }
  }
}

export interface AnalyticsGetOrgAnalyticsParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param: end date in YYYY-MM-DD format
   */
  end_date?: string;

  /**
   * Query param: start date in YYYY-MM-DD format
   */
  start_date?: string;
}

export declare namespace Analytics {
  export {
    type AnalyticsGetOrgAnalyticsResponse as AnalyticsGetOrgAnalyticsResponse,
    type AnalyticsGetOrgAnalyticsParams as AnalyticsGetOrgAnalyticsParams,
  };
}
