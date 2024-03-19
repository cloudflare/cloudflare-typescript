// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as EventsAPI from 'cloudflare/resources/user/load-balancers/analytics/events';

export class Events extends APIResource {
  /**
   * List origin health changes.
   */
  list(query?: EventListParams, options?: Core.RequestOptions): Core.APIPromise<EventListResponse | null>;
  list(options?: Core.RequestOptions): Core.APIPromise<EventListResponse | null>;
  list(
    query: EventListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventListResponse | null> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/user/load_balancing_analytics/events', { query, ...options }) as Core.APIPromise<{
        result: EventListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LoadBalancingAnalytics {
  id?: number;

  origins?: Array<unknown>;

  pool?: unknown;

  timestamp?: string;
}

export type EventListResponse = Array<LoadBalancingAnalytics>;

export interface EventListParams {
  /**
   * If true, filter events where the origin status is healthy. If false, filter
   * events where the origin status is unhealthy.
   */
  origin_healthy?: boolean;

  /**
   * The name for the origin to filter.
   */
  origin_name?: string;

  /**
   * If true, filter events where the pool status is healthy. If false, filter events
   * where the pool status is unhealthy.
   */
  pool_healthy?: boolean;

  pool_id?: string;

  /**
   * The name for the pool to filter.
   */
  pool_name?: string;

  /**
   * Start date and time of requesting data period in the ISO8601 format.
   */
  since?: string;

  /**
   * End date and time of requesting data period in the ISO8601 format.
   */
  until?: string;
}

export namespace Events {
  export import LoadBalancingAnalytics = EventsAPI.LoadBalancingAnalytics;
  export import EventListResponse = EventsAPI.EventListResponse;
  export import EventListParams = EventsAPI.EventListParams;
}
