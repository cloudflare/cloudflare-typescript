// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as EventsAPI from 'cloudflare/resources/users/load-balancing-analytics/events';

export class Events extends APIResource {
  /**
   * List origin health changes.
   */
  loadBalancerHealthcheckEventsListHealthcheckEvents(
    query?: EventLoadBalancerHealthcheckEventsListHealthcheckEventsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse | null>;
  loadBalancerHealthcheckEventsListHealthcheckEvents(
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse | null>;
  loadBalancerHealthcheckEventsListHealthcheckEvents(
    query: EventLoadBalancerHealthcheckEventsListHealthcheckEventsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse | null> {
    if (isRequestOptions(query)) {
      return this.loadBalancerHealthcheckEventsListHealthcheckEvents({}, query);
    }
    return (
      this._client.get('/user/load_balancing_analytics/events', { query, ...options }) as Core.APIPromise<{
        result: EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse =
  Array<EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse.EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponseItem>;

export namespace EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse {
  export interface EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponseItem {
    id?: number;

    origins?: Array<unknown>;

    pool?: unknown;

    timestamp?: string;
  }
}

export interface EventLoadBalancerHealthcheckEventsListHealthcheckEventsParams {
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
  export import EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse = EventsAPI.EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse;
  export import EventLoadBalancerHealthcheckEventsListHealthcheckEventsParams = EventsAPI.EventLoadBalancerHealthcheckEventsListHealthcheckEventsParams;
}
