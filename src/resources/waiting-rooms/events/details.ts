// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as DetailsAPI from './details';

export class Details extends APIResource {
  /**
   * Previews an event's configuration as if it was active. Inherited fields from the
   * waiting room will be displayed with their current values.
   */
  get(
    waitingRoomId: string,
    eventId: string,
    params: DetailGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DetailGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/waiting_rooms/${waitingRoomId}/events/${eventId}/details`,
        options,
      ) as Core.APIPromise<{ result: DetailGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface EventQuery {
  /**
   * An ISO 8601 timestamp that marks the end of the event.
   */
  event_end_time: string;

  /**
   * An ISO 8601 timestamp that marks the start of the event. At this time, queued
   * users will be processed with the event's configuration. The start time must be
   * at least one minute before `event_end_time`.
   */
  event_start_time: string;

  /**
   * A unique name to identify the event. Only alphanumeric characters, hyphens and
   * underscores are allowed.
   */
  name: string;

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

export interface DetailGetResponse {
  id?: string;

  created_on?: string;

  custom_page_html?: string;

  /**
   * A note that you can use to add more details about the event.
   */
  description?: string;

  disable_session_renewal?: boolean;

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

  new_users_per_minute?: number;

  /**
   * An ISO 8601 timestamp that marks when to begin queueing all users before the
   * event starts. The prequeue must start at least five minutes before
   * `event_start_time`.
   */
  prequeue_start_time?: string | null;

  queueing_method?: string;

  session_duration?: number;

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

  total_active_users?: number;
}

export interface DetailGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Details {
  export import EventQuery = DetailsAPI.EventQuery;
  export import DetailGetResponse = DetailsAPI.DetailGetResponse;
  export import DetailGetParams = DetailsAPI.DetailGetParams;
}
