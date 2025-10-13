// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Events extends APIResource {
  /**
   * Send event to instance
   */
  create(
    eventType: string,
    params: EventCreateParams,
    options?: RequestOptions,
  ): APIPromise<EventCreateResponse> {
    const { account_id, workflow_name, instance_id, body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/workflows/${workflow_name}/instances/${instance_id}/events/${eventType}`,
        { body: body, ...options },
      ) as APIPromise<{ result: EventCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type EventCreateResponse = unknown;

export interface EventCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Path param:
   */
  workflow_name: string;

  /**
   * Path param:
   */
  instance_id: string;

  /**
   * Body param:
   */
  body?: unknown;
}

export declare namespace Events {
  export { type EventCreateResponse as EventCreateResponse, type EventCreateParams as EventCreateParams };
}
