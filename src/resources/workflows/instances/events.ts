// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Events extends APIResource {
  /**
   * Sends an event to a running workflow instance to trigger state transitions.
   */
  create(
    workflowName: string,
    instanceId: string,
    eventType: string,
    params?: EventCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventCreateResponse>;
  create(
    workflowName: string,
    instanceId: string,
    eventType: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventCreateResponse>;
  create(
    workflowName: string,
    instanceId: string,
    eventType: string,
    params?: EventCreateParams | Core.RequestOptions,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventCreateResponse> {
    if (isRequestOptions(params)) {
      return this.create(workflowName, instanceId, eventType, undefined, params);
    }
    const { account_id = this._client.accountId, body } = params ?? {};
    return (
      this._client.post(
        `/accounts/${account_id}/workflows/${workflowName}/instances/${instanceId}/events/${eventType}`,
        { body: body, ...options },
      ) as Core.APIPromise<{ result: EventCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type EventCreateResponse = unknown;

export interface EventCreateParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Body param
   */
  body?: unknown;
}

export declare namespace Events {
  export { type EventCreateResponse as EventCreateResponse, type EventCreateParams as EventCreateParams };
}
