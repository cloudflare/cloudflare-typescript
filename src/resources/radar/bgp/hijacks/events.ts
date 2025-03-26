// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { PagePromise, V4PagePagination, type V4PagePaginationParams } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';

export class Events extends APIResource {
  /**
   * Retrieves the BGP hijack events.
   */
  list(
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EventListResponsesV4PagePagination, EventListResponse> {
    return this._client.getAPIList('/radar/bgp/hijacks/events', V4PagePagination<EventListResponse>, {
      query,
      ...options,
    });
  }
}

export type EventListResponsesV4PagePagination = V4PagePagination<EventListResponse>;

export interface EventListResponse {
  asn_info: Array<EventListResponse.ASNInfo>;

  events: Array<EventListResponse.Event>;

  total_monitors: number;
}

export namespace EventListResponse {
  export interface ASNInfo {
    asn: number;

    country_code: string;

    org_name: string;
  }

  export interface Event {
    id: number;

    confidence_score: number;

    duration: number;

    event_type: number;

    hijack_msgs_count: number;

    hijacker_asn: number;

    hijacker_country: string;

    is_stale: boolean;

    max_hijack_ts: string;

    max_msg_ts: string;

    min_hijack_ts: string;

    on_going_count: number;

    peer_asns: Array<number>;

    peer_ip_count: number;

    prefixes: Array<string>;

    tags: Array<Event.Tag>;

    victim_asns: Array<number>;

    victim_countries: Array<string>;
  }

  export namespace Event {
    export interface Tag {
      name: string;

      score: number;
    }
  }
}

export interface EventListParams extends V4PagePaginationParams {
  /**
   * End of the date range (inclusive).
   */
  dateEnd?: string;

  /**
   * Shorthand date ranges for the last X days - use when you don't need specific
   * start and end dates.
   */
  dateRange?: string;

  /**
   * Start of the date range (inclusive).
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
   * The potential hijacker AS of a BGP hijack event.
   */
  hijackerAsn?: number;

  /**
   * The potential hijacker or victim AS of a BGP hijack event.
   */
  involvedAsn?: number;

  /**
   * The country code of the potential hijacker or victim AS of a BGP hijack event.
   */
  involvedCountry?: string;

  /**
   * The maximum confidence score to filter events (1-4 low, 5-7 mid, 8+ high).
   */
  maxConfidence?: number;

  /**
   * The minimum confidence score to filter events (1-4 low, 5-7 mid, 8+ high).
   */
  minConfidence?: number;

  /**
   * Network prefix, IPv4 or IPv6.
   */
  prefix?: string;

  /**
   * Sorts results by the specified field.
   */
  sortBy?: 'ID' | 'TIME' | 'CONFIDENCE';

  /**
   * Sort order.
   */
  sortOrder?: 'ASC' | 'DESC';

  /**
   * The potential victim AS of a BGP hijack event.
   */
  victimAsn?: number;
}

export declare namespace Events {
  export {
    type EventListResponse as EventListResponse,
    type EventListResponsesV4PagePagination as EventListResponsesV4PagePagination,
    type EventListParams as EventListParams,
  };
}
