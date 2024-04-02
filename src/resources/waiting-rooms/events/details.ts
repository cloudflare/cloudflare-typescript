// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as DetailsAPI from 'cloudflare/resources/waiting-rooms/events/details';

export class Details extends APIResource {}

export interface WaitingroomEventDetails {
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

export namespace Details {
  export import WaitingroomEventDetails = DetailsAPI.WaitingroomEventDetails;
}
