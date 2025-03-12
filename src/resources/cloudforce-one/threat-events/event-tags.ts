// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class EventTags extends APIResource {
  /**
   * Removes a tag from an event
   */
  delete(
    eventID: string,
    params: EventTagDeleteParams,
    options?: RequestOptions,
  ): APIPromise<EventTagDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/cloudforce-one/events/event_tag/${eventID}`,
        options,
      ) as APIPromise<{ result: EventTagDeleteResponse }>
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
