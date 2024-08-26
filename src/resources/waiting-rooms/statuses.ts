// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as StatusesAPI from './statuses';

export class Statuses extends APIResource {
  /**
   * Fetches the status of a configured waiting room. Response fields include:
   *
   * 1. `status`: String indicating the status of the waiting room. The possible
   *    status are:
   *    - **not_queueing** indicates that the configured thresholds have not been met
   *      and all users are going through to the origin.
   *    - **queueing** indicates that the thresholds have been met and some users are
   *      held in the waiting room.
   *    - **event_prequeueing** indicates that an event is active and is currently
   *      prequeueing users before it starts.
   * 2. `event_id`: String of the current event's `id` if an event is active,
   *    otherwise an empty string.
   * 3. `estimated_queued_users`: Integer of the estimated number of users currently
   *    waiting in the queue.
   * 4. `estimated_total_active_users`: Integer of the estimated number of users
   *    currently active on the origin.
   * 5. `max_estimated_time_minutes`: Integer of the maximum estimated time currently
   *    presented to the users.
   */
  get(waitingRoomId: string, params: StatusGetParams, options?: Core.RequestOptions): Core.APIPromise<StatusGetResponse> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}/waiting_rooms/${waitingRoomId}/status`, options) as Core.APIPromise<{ result: StatusGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface StatusGetResponse {
  estimated_queued_users?: number;

  estimated_total_active_users?: number;

  event_id?: string;

  max_estimated_time_minutes?: number;

  status?: 'event_prequeueing' | 'not_queueing' | 'queueing';
}

export interface StatusGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Statuses {
  export import StatusGetResponse = StatusesAPI.StatusGetResponse;
  export import StatusGetParams = StatusesAPI.StatusGetParams;
}
