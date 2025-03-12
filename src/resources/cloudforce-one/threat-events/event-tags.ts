// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class EventTags extends APIResource {
  /**
   * Removes a tag from an event
   */
  delete(
    eventId: string,
    params: EventTagDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventTagDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/cloudforce-one/events/event_tag/${eventId}`,
        options,
      ) as Core.APIPromise<{ result: EventTagDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface EventTagDeleteResponse {
  success: boolean;
}

export interface EventTagDeleteParams {
  /**
   * Account ID
   */
  account_id: number;
}

export declare namespace EventTags {
  export {
    type EventTagDeleteResponse as EventTagDeleteResponse,
    type EventTagDeleteParams as EventTagDeleteParams,
  };
}
