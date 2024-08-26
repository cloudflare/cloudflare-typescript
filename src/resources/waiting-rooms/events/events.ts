// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Details } from './details';
import * as EventsAPI from './events';
import * as DetailsAPI from './details';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Events extends APIResource {
  details: DetailsAPI.Details = new DetailsAPI.Details(this._client);

  /**
   * Only available for the Waiting Room Advanced subscription. Creates an event for
   * a waiting room. An event takes place during a specified period of time,
   * temporarily changing the behavior of a waiting room. While the event is active,
   * some of the properties in the event's configuration may either override or
   * inherit from the waiting room's configuration. Note that events cannot overlap
   * with each other, so only one event can be active at a time.
   */
  create(waitingRoomId: string, params: EventCreateParams, options?: Core.RequestOptions): Core.APIPromise<Event> {
    const { zone_id, ...body } = params;
    return (this._client.post(`/zones/${zone_id}/waiting_rooms/${waitingRoomId}/events`, { body, ...options }) as Core.APIPromise<{ result: Event }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured event for a waiting room.
   */
  update(waitingRoomId: string, eventId: string, params: EventUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Event> {
    const { zone_id, ...body } = params;
    return (this._client.put(`/zones/${zone_id}/waiting_rooms/${waitingRoomId}/events/${eventId}`, { body, ...options }) as Core.APIPromise<{ result: Event }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists events for a waiting room.
   */
  list(waitingRoomId: string, params: EventListParams, options?: Core.RequestOptions): Core.PagePromise<EventsV4PagePaginationArray, Event> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(`/zones/${zone_id}/waiting_rooms/${waitingRoomId}/events`, EventsV4PagePaginationArray, { query, ...options });
  }

  /**
   * Deletes an event for a waiting room.
   */
  delete(waitingRoomId: string, eventId: string, params: EventDeleteParams, options?: Core.RequestOptions): Core.APIPromise<EventDeleteResponse> {
    const { zone_id } = params;
    return (this._client.delete(`/zones/${zone_id}/waiting_rooms/${waitingRoomId}/events/${eventId}`, options) as Core.APIPromise<{ result: EventDeleteResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Patches a configured event for a waiting room.
   */
  edit(waitingRoomId: string, eventId: string, params: EventEditParams, options?: Core.RequestOptions): Core.APIPromise<Event> {
    const { zone_id, ...body } = params;
    return (this._client.patch(`/zones/${zone_id}/waiting_rooms/${waitingRoomId}/events/${eventId}`, { body, ...options }) as Core.APIPromise<{ result: Event }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single configured event for a waiting room.
   */
  get(waitingRoomId: string, eventId: string, params: EventGetParams, options?: Core.RequestOptions): Core.APIPromise<Event> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}/waiting_rooms/${waitingRoomId}/events/${eventId}`, options) as Core.APIPromise<{ result: Event }>)._thenUnwrap((obj) => obj.result);
  }
}

export class EventsV4PagePaginationArray extends V4PagePaginationArray<Event> {
}

export interface Event {
  id?: string;

  created_on?: string;

  /**
   * If set, the event will override the waiting room's `custom_page_html` property
   * while it is active. If null, the event will inherit it.
   */
  custom_page_html?: string | null;

  /**
   * A note that you can use to add more details about the event.
   */
  description?: string;

  /**
   * If set, the event will override the waiting room's `disable_session_renewal`
   * property while it is active. If null, the event will inherit it.
   */
  disable_session_renewal?: boolean | null;

  /**
   * An ISO 8601 timestamp that marks the end of the event.
   */
  event_end_time?: string;

  /**
   * An ISO 8601 timestamp that marks the start of the event. At this time, queued
   * users will be processed with the event's configuration. The start time must be
   * at least one minute before `event_end_time`.
   */
  event_start_time?: string;

  modified_on?: string;

  /**
   * A unique name to identify the event. Only alphanumeric characters, hyphens and
   * underscores are allowed.
   */
  name?: string;

  /**
   * If set, the event will override the waiting room's `new_users_per_minute`
   * property while it is active. If null, the event will inherit it. This can only
   * be set if the event's `total_active_users` property is also set.
   */
  new_users_per_minute?: number | null;

  /**
   * An ISO 8601 timestamp that marks when to begin queueing all users before the
   * event starts. The prequeue must start at least five minutes before
   * `event_start_time`.
   */
  prequeue_start_time?: string | null;

  /**
   * If set, the event will override the waiting room's `queueing_method` property
   * while it is active. If null, the event will inherit it.
   */
  queueing_method?: string | null;

  /**
   * If set, the event will override the waiting room's `session_duration` property
   * while it is active. If null, the event will inherit it.
   */
  session_duration?: number | null;

  /**
   * If enabled, users in the prequeue will be shuffled randomly at the
   * `event_start_time`. Requires that `prequeue_start_time` is not null. This is
   * useful for situations when many users will join the event prequeue at the same
   * time and you want to shuffle them to ensure fairness. Naturally, it makes the
   * most sense to enable this feature when the `queueing_method` during the event
   * respects ordering such as **fifo**, or else the shuffling may be unnecessary.
   */
  shuffle_at_event_start?: boolean;

  /**
   * Suspends or allows an event. If set to `true`, the event is ignored and traffic
   * will be handled based on the waiting room configuration.
   */
  suspended?: boolean;

  /**
   * If set, the event will override the waiting room's `total_active_users` property
   * while it is active. If null, the event will inherit it. This can only be set if
   * the event's `new_users_per_minute` property is also set.
   */
  total_active_users?: number | null;
}

export interface EventDeleteResponse {
  id?: string;
}

export interface EventCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: An ISO 8601 timestamp that marks the end of the event.
   */
  event_end_time: string;

  /**
   * Body param: An ISO 8601 timestamp that marks the start of the event. At this
   * time, queued users will be processed with the event's configuration. The start
   * time must be at least one minute before `event_end_time`.
   */
  event_start_time: string;

  /**
   * Body param: A unique name to identify the event. Only alphanumeric characters,
   * hyphens and underscores are allowed.
   */
  name: string;

  /**
   * Body param: If set, the event will override the waiting room's
   * `custom_page_html` property while it is active. If null, the event will inherit
   * it.
   */
  custom_page_html?: string | null;

  /**
   * Body param: A note that you can use to add more details about the event.
   */
  description?: string;

  /**
   * Body param: If set, the event will override the waiting room's
   * `disable_session_renewal` property while it is active. If null, the event will
   * inherit it.
   */
  disable_session_renewal?: boolean | null;

  /**
   * Body param: If set, the event will override the waiting room's
   * `new_users_per_minute` property while it is active. If null, the event will
   * inherit it. This can only be set if the event's `total_active_users` property is
   * also set.
   */
  new_users_per_minute?: number | null;

  /**
   * Body param: An ISO 8601 timestamp that marks when to begin queueing all users
   * before the event starts. The prequeue must start at least five minutes before
   * `event_start_time`.
   */
  prequeue_start_time?: string | null;

  /**
   * Body param: If set, the event will override the waiting room's `queueing_method`
   * property while it is active. If null, the event will inherit it.
   */
  queueing_method?: string | null;

  /**
   * Body param: If set, the event will override the waiting room's
   * `session_duration` property while it is active. If null, the event will inherit
   * it.
   */
  session_duration?: number | null;

  /**
   * Body param: If enabled, users in the prequeue will be shuffled randomly at the
   * `event_start_time`. Requires that `prequeue_start_time` is not null. This is
   * useful for situations when many users will join the event prequeue at the same
   * time and you want to shuffle them to ensure fairness. Naturally, it makes the
   * most sense to enable this feature when the `queueing_method` during the event
   * respects ordering such as **fifo**, or else the shuffling may be unnecessary.
   */
  shuffle_at_event_start?: boolean;

  /**
   * Body param: Suspends or allows an event. If set to `true`, the event is ignored
   * and traffic will be handled based on the waiting room configuration.
   */
  suspended?: boolean;

  /**
   * Body param: If set, the event will override the waiting room's
   * `total_active_users` property while it is active. If null, the event will
   * inherit it. This can only be set if the event's `new_users_per_minute` property
   * is also set.
   */
  total_active_users?: number | null;
}

export interface EventUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: An ISO 8601 timestamp that marks the end of the event.
   */
  event_end_time: string;

  /**
   * Body param: An ISO 8601 timestamp that marks the start of the event. At this
   * time, queued users will be processed with the event's configuration. The start
   * time must be at least one minute before `event_end_time`.
   */
  event_start_time: string;

  /**
   * Body param: A unique name to identify the event. Only alphanumeric characters,
   * hyphens and underscores are allowed.
   */
  name: string;

  /**
   * Body param: If set, the event will override the waiting room's
   * `custom_page_html` property while it is active. If null, the event will inherit
   * it.
   */
  custom_page_html?: string | null;

  /**
   * Body param: A note that you can use to add more details about the event.
   */
  description?: string;

  /**
   * Body param: If set, the event will override the waiting room's
   * `disable_session_renewal` property while it is active. If null, the event will
   * inherit it.
   */
  disable_session_renewal?: boolean | null;

  /**
   * Body param: If set, the event will override the waiting room's
   * `new_users_per_minute` property while it is active. If null, the event will
   * inherit it. This can only be set if the event's `total_active_users` property is
   * also set.
   */
  new_users_per_minute?: number | null;

  /**
   * Body param: An ISO 8601 timestamp that marks when to begin queueing all users
   * before the event starts. The prequeue must start at least five minutes before
   * `event_start_time`.
   */
  prequeue_start_time?: string | null;

  /**
   * Body param: If set, the event will override the waiting room's `queueing_method`
   * property while it is active. If null, the event will inherit it.
   */
  queueing_method?: string | null;

  /**
   * Body param: If set, the event will override the waiting room's
   * `session_duration` property while it is active. If null, the event will inherit
   * it.
   */
  session_duration?: number | null;

  /**
   * Body param: If enabled, users in the prequeue will be shuffled randomly at the
   * `event_start_time`. Requires that `prequeue_start_time` is not null. This is
   * useful for situations when many users will join the event prequeue at the same
   * time and you want to shuffle them to ensure fairness. Naturally, it makes the
   * most sense to enable this feature when the `queueing_method` during the event
   * respects ordering such as **fifo**, or else the shuffling may be unnecessary.
   */
  shuffle_at_event_start?: boolean;

  /**
   * Body param: Suspends or allows an event. If set to `true`, the event is ignored
   * and traffic will be handled based on the waiting room configuration.
   */
  suspended?: boolean;

  /**
   * Body param: If set, the event will override the waiting room's
   * `total_active_users` property while it is active. If null, the event will
   * inherit it. This can only be set if the event's `new_users_per_minute` property
   * is also set.
   */
  total_active_users?: number | null;
}

export interface EventListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;
}

export interface EventDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface EventEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: An ISO 8601 timestamp that marks the end of the event.
   */
  event_end_time: string;

  /**
   * Body param: An ISO 8601 timestamp that marks the start of the event. At this
   * time, queued users will be processed with the event's configuration. The start
   * time must be at least one minute before `event_end_time`.
   */
  event_start_time: string;

  /**
   * Body param: A unique name to identify the event. Only alphanumeric characters,
   * hyphens and underscores are allowed.
   */
  name: string;

  /**
   * Body param: If set, the event will override the waiting room's
   * `custom_page_html` property while it is active. If null, the event will inherit
   * it.
   */
  custom_page_html?: string | null;

  /**
   * Body param: A note that you can use to add more details about the event.
   */
  description?: string;

  /**
   * Body param: If set, the event will override the waiting room's
   * `disable_session_renewal` property while it is active. If null, the event will
   * inherit it.
   */
  disable_session_renewal?: boolean | null;

  /**
   * Body param: If set, the event will override the waiting room's
   * `new_users_per_minute` property while it is active. If null, the event will
   * inherit it. This can only be set if the event's `total_active_users` property is
   * also set.
   */
  new_users_per_minute?: number | null;

  /**
   * Body param: An ISO 8601 timestamp that marks when to begin queueing all users
   * before the event starts. The prequeue must start at least five minutes before
   * `event_start_time`.
   */
  prequeue_start_time?: string | null;

  /**
   * Body param: If set, the event will override the waiting room's `queueing_method`
   * property while it is active. If null, the event will inherit it.
   */
  queueing_method?: string | null;

  /**
   * Body param: If set, the event will override the waiting room's
   * `session_duration` property while it is active. If null, the event will inherit
   * it.
   */
  session_duration?: number | null;

  /**
   * Body param: If enabled, users in the prequeue will be shuffled randomly at the
   * `event_start_time`. Requires that `prequeue_start_time` is not null. This is
   * useful for situations when many users will join the event prequeue at the same
   * time and you want to shuffle them to ensure fairness. Naturally, it makes the
   * most sense to enable this feature when the `queueing_method` during the event
   * respects ordering such as **fifo**, or else the shuffling may be unnecessary.
   */
  shuffle_at_event_start?: boolean;

  /**
   * Body param: Suspends or allows an event. If set to `true`, the event is ignored
   * and traffic will be handled based on the waiting room configuration.
   */
  suspended?: boolean;

  /**
   * Body param: If set, the event will override the waiting room's
   * `total_active_users` property while it is active. If null, the event will
   * inherit it. This can only be set if the event's `new_users_per_minute` property
   * is also set.
   */
  total_active_users?: number | null;
}

export interface EventGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Events {
  export import Event = EventsAPI.Event;
  export import EventDeleteResponse = EventsAPI.EventDeleteResponse;
  export import EventsV4PagePaginationArray = EventsAPI.EventsV4PagePaginationArray;
  export import EventCreateParams = EventsAPI.EventCreateParams;
  export import EventUpdateParams = EventsAPI.EventUpdateParams;
  export import EventListParams = EventsAPI.EventListParams;
  export import EventDeleteParams = EventsAPI.EventDeleteParams;
  export import EventEditParams = EventsAPI.EventEditParams;
  export import EventGetParams = EventsAPI.EventGetParams;
  export import Details = DetailsAPI.Details;
  export import EventQuery = DetailsAPI.EventQuery;
  export import DetailGetResponse = DetailsAPI.DetailGetResponse;
  export import DetailGetParams = DetailsAPI.DetailGetParams;
}
