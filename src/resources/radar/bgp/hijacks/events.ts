// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as EventsAPI from './events';
import { V4PagePagination, type V4PagePaginationParams } from '../../../../pagination';

export class Events extends APIResource {
  /**
   * Get the BGP hijack events. (Beta)
   */
  list(
    query?: EventListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EventListResponsesV4PagePagination, EventListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<EventListResponsesV4PagePagination, EventListResponse>;
  list(
    query: EventListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<EventListResponsesV4PagePagination, EventListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/radar/bgp/hijacks/events', EventListResponsesV4PagePagination, {
      query,
      ...options,
    });
  }
}

export class EventListResponsesV4PagePagination extends V4PagePagination<EventListResponse> {}

export interface EventListResponse {
  result: EventListResponse.Result;

  result_info: EventListResponse.ResultInfo;

  success: boolean;
}

export namespace EventListResponse {
  export interface Result {
    asn_info: Array<Result.ASNInfo>;

    events: Array<Result.Event>;

    total_monitors: number;
  }

  export namespace Result {
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

  export interface ResultInfo {
    count: number;

    page: number;

    per_page: number;

    total_count: number;
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
   * The unique identifier of a event
   */
  eventId?: number;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * The potential hijacker AS of a BGP hijack event
   */
  hijackerAsn?: number;

  /**
   * The potential hijacker or victim AS of a BGP hijack event
   */
  involvedAsn?: number;

  /**
   * The country code of the potential hijacker or victim AS of a BGP hijack event
   */
  involvedCountry?: string;

  /**
   * The maximum confidence score to filter events (1-4 low, 5-7 mid, 8+ high)
   */
  maxConfidence?: number;

  /**
   * The minimum confidence score to filter events (1-4 low, 5-7 mid, 8+ high)
   */
  minConfidence?: number;

  /**
   * Network prefix, IPv4 or IPv6.
   */
  prefix?: string;

  /**
   * Sort events by field
   */
  sortBy?: 'ID' | 'TIME' | 'CONFIDENCE';

  /**
   * Sort order
   */
  sortOrder?: 'ASC' | 'DESC';

  /**
   * The potential victim AS of a BGP hijack event
   */
  victimAsn?: number;
}

export namespace Events {
  export import EventListResponse = EventsAPI.EventListResponse;
  export import EventListResponsesV4PagePagination = EventsAPI.EventListResponsesV4PagePagination;
  export import EventListParams = EventsAPI.EventListParams;
}
