// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { PagePromise, V4PagePagination, type V4PagePaginationParams } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';

export class BaseEvents extends APIResource {
  static override readonly _key: readonly ['radar', 'bgp', 'leaks', 'events'] = Object.freeze([
    'radar',
    'bgp',
    'leaks',
    'events',
  ] as const);

  /**
   * Retrieves the BGP route leak events.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const eventListResponse of client.radar.bgp.leaks.events.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EventListResponsesV4PagePagination, EventListResponse> {
    return this._client.getAPIList('/radar/bgp/leaks/events', V4PagePagination<EventListResponse>, {
      query,
      ...options,
    });
  }
}
export class Events extends BaseEvents {}

export type EventListResponsesV4PagePagination = V4PagePagination<EventListResponse>;

export interface EventListResponse {
  asn_info: Array<EventListResponse.ASNInfo>;

  events: Array<EventListResponse.Event>;
}

export namespace EventListResponse {
  export interface ASNInfo {
    asn: number;

    country_code: string;

    org_name: string;
  }

  export interface Event {
    id: number;

    countries: Array<string>;

    detected_ts: string;

    finished: boolean;

    leak_asn: number;

    leak_count: number;

    leak_seg: Array<number>;

    leak_type: number;

    max_ts: string;

    min_ts: string;

    origin_count: number;

    peer_count: number;

    prefix_count: number;
  }
}

export interface EventListParams extends V4PagePaginationParams {
  /**
   * End of the date range (inclusive). Alternative to `dateRange`; provide together
   * with `dateStart`.
   */
  dateEnd?: string;

  /**
   * Filters results by a relative date range ending at the current time. Use `<n>d`
   * for days (up to `364d`) or `<n>w` for weeks (up to `52w`), e.g. `7d`. Append
   * `control` to request the equivalent previous period for comparison: the
   * comparison window is shifted back by the current window's length rounded up to a
   * whole number of weeks, so it keeps the same weekday alignment and does not
   * overlap the current window (e.g. `3dcontrol` covers days -10 to -7, `7dcontrol`
   * covers days -14 to -7, `28dcontrol` covers days -56 to -28, and `10dcontrol`
   * covers days -24 to -14). Mutually exclusive with `dateStart`/`dateEnd`.
   */
  dateRange?: string;

  /**
   * Start of the date range (inclusive). Alternative to `dateRange`; provide
   * together with `dateEnd`.
   */
  dateStart?: string;

  /**
   * The unique identifier of a event.
   */
  eventId?: number;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * ASN that is causing or affected by a route leak event.
   */
  involvedAsn?: number;

  /**
   * Country code of a involved ASN in a route leak event.
   */
  involvedCountry?: string;

  /**
   * The leaking AS of a route leak event.
   */
  leakAsn?: number;

  /**
   * Sorts results by the specified field.
   */
  sortBy?: 'ID' | 'LEAKS' | 'PEERS' | 'PREFIXES' | 'ORIGINS' | 'TIME';

  /**
   * Sort order.
   */
  sortOrder?: 'ASC' | 'DESC';
}

export declare namespace Events {
  export {
    type EventListResponse as EventListResponse,
    type EventListResponsesV4PagePagination as EventListResponsesV4PagePagination,
    type EventListParams as EventListParams,
  };
}
