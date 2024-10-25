// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as EventsAPI from './events';
import { V4PagePagination, type V4PagePaginationParams } from '../../../../pagination';

export class Events extends APIResource {
  /**
   * Get the BGP route leak events (Beta).
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
    return this._client.getAPIList('/radar/bgp/leaks/events', EventListResponsesV4PagePagination, {
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
  }

  export namespace Result {
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
   * ASN that is causing or affected by a route leak event
   */
  involvedAsn?: number;

  /**
   * Country code of a involved ASN in a route leak event
   */
  involvedCountry?: string;

  /**
   * The leaking AS of a route leak event
   */
  leakAsn?: number;

  /**
   * Sort events by field
   */
  sortBy?: 'ID' | 'LEAKS' | 'PEERS' | 'PREFIXES' | 'ORIGINS' | 'TIME';

  /**
   * Sort order
   */
  sortOrder?: 'ASC' | 'DESC';
}

export namespace Events {
  export import EventListResponse = EventsAPI.EventListResponse;
  export import EventListResponsesV4PagePagination = EventsAPI.EventListResponsesV4PagePagination;
  export import EventListParams = EventsAPI.EventListParams;
}
