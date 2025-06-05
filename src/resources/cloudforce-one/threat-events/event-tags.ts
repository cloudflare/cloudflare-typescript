// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class EventTags extends APIResource {
  /**
   * Adds a tag to an event
   *
   * @example
   * ```ts
   * const eventTag =
   *   await client.cloudforceOne.threatEvents.eventTags.create(
   *     'event_id',
   *     { account_id: 'account_id', tags: ['botnet'] },
   *   );
   * ```
   */
  create(
    eventID: string,
    params: EventTagCreateParams,
    options?: RequestOptions,
  ): APIPromise<EventTagCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cloudforce-one/events/event_tag/${eventID}/create`, {
        body,
        ...options,
      }) as APIPromise<{ result: EventTagCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes a tag from an event
   *
   * @example
   * ```ts
   * const eventTag =
   *   await client.cloudforceOne.threatEvents.eventTags.delete(
   *     'event_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
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

export interface EventTagCreateResponse {
  success: boolean;
}

export interface EventTagDeleteResponse {
  success: boolean;
}

export interface EventTagCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param:
   */
  tags: Array<string>;
}

export interface EventTagDeleteParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export declare namespace EventTags {
  export {
    type EventTagCreateResponse as EventTagCreateResponse,
    type EventTagDeleteResponse as EventTagDeleteResponse,
    type EventTagCreateParams as EventTagCreateParams,
    type EventTagDeleteParams as EventTagDeleteParams,
  };
}
