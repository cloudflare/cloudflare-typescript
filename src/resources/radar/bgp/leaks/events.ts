// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as EventsAPI from 'cloudflare/resources/radar/bgp/leaks/events';

export class Events extends APIResource {
  /**
   * Get the BGP route leak events (Beta).
   */
  list(query?: EventListParams, options?: Core.RequestOptions): Core.APIPromise<EventListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<EventListResponse>;
  list(
    query: EventListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/bgp/leaks/events', { query, ...options }) as Core.APIPromise<{
        result: EventListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface EventListResponse {
  asn_info: Array<EventListResponse.AsnInfo>;

  events: Array<EventListResponse.Event>;
}

export namespace EventListResponse {
  export interface AsnInfo {
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

export interface EventListParams {
  /**
   * End of the date range (inclusive).
   */
  dateEnd?: string;

  /**
   * Shorthand date ranges for the last X days - use when you don't need specific
   * start and end dates.
   */
  dateRange?:
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl';

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
   * Current page number, starting from 1
   */
  page?: number;

  /**
   * Number of entries per page
   */
  per_page?: number;

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
  export import EventListParams = EventsAPI.EventListParams;
}
