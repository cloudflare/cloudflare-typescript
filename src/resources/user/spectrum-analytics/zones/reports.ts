// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class BaseReports extends APIResource {
  static override readonly _key: readonly ['user', 'spectrumAnalytics', 'zones', 'reports'] = Object.freeze([
    'user',
    'spectrumAnalytics',
    'zones',
    'reports',
  ] as const);

  /**
   * Retrieves a list of total bandwidth by zone over a given time period.
   *
   * @example
   * ```ts
   * const reports =
   *   await client.user.spectrumAnalytics.zones.reports.get();
   * ```
   */
  get(
    query: ReportGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportGetResponse> {
    return (
      this._client.get('/user/spectrum_analytics/zones/report', { query, ...options }) as APIPromise<{
        result: ReportGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Reports extends BaseReports {}

export type ReportGetResponse = Array<ReportGetResponse.ReportGetResponseItem>;

export namespace ReportGetResponse {
  export interface ReportGetResponseItem {
    totals: ReportGetResponseItem.Totals;

    /**
     * Identifier.
     */
    zone_id: string;
  }

  export namespace ReportGetResponseItem {
    export interface Totals {
      bandwidth: Totals.Bandwidth;
    }

    export namespace Totals {
      export interface Bandwidth {
        /**
         * Sum of ingress and egress bytes transferred.
         */
        all: number;

        /**
         * Sum of egress bytes transferred.
         */
        egress: number;

        /**
         * Sum of ingress bytes transferred.
         */
        ingress: number;
      }
    }
  }
}

export interface ReportGetParams {
  /**
   * Include CDN traffic in the bandwidth aggregation.
   */
  cdn_traffic?: boolean;

  /**
   * Start of time interval to query, defaults to `until` - 6 hours. Timestamp must
   * be in RFC3339 format and uses UTC unless otherwise specified.
   */
  since?: string;

  /**
   * End of time interval to query, defaults to current time. Timestamp must be in
   * RFC3339 format and uses UTC unless otherwise specified.
   */
  until?: string;
}

export declare namespace Reports {
  export { type ReportGetResponse as ReportGetResponse, type ReportGetParams as ReportGetParams };
}
