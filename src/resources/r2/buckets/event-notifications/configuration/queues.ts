// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';

export class Queues extends APIResource {
  /**
   * Create event notification rule.
   */
  update(
    bucketName: string,
    queueId: string,
    params: QueueUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueUpdateResponse> {
    const { account_id, jurisdiction, ...body } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/event_notifications/r2/${bucketName}/configuration/queues/${queueId}`,
        {
          body,
          ...options,
          headers: {
            ...(jurisdiction?.toString() != null ?
              { 'cf-r2-jurisdiction': jurisdiction?.toString() }
            : undefined),
            ...options?.headers,
          },
        },
      ) as Core.APIPromise<{ result: QueueUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete an event notification rule. **If no body is provided, all rules for
   * specified queue will be deleted**.
   */
  delete(
    bucketName: string,
    queueId: string,
    params: QueueDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueDeleteResponse> {
    const { account_id, jurisdiction } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/event_notifications/r2/${bucketName}/configuration/queues/${queueId}`,
        {
          ...options,
          headers: {
            ...(jurisdiction?.toString() != null ?
              { 'cf-r2-jurisdiction': jurisdiction?.toString() }
            : undefined),
            ...options?.headers,
          },
        },
      ) as Core.APIPromise<{ result: QueueDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type QueueUpdateResponse = unknown;

export type QueueDeleteResponse = unknown;

export interface QueueUpdateParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Body param: Array of rules to drive notifications
   */
  rules?: Array<QueueUpdateParams.Rule>;

  /**
   * Header param: The bucket jurisdiction
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
}

export namespace QueueUpdateParams {
  export interface Rule {
    /**
     * Array of R2 object actions that will trigger notifications
     */
    actions: Array<
      'PutObject' | 'CopyObject' | 'DeleteObject' | 'CompleteMultipartUpload' | 'LifecycleDeletion'
    >;

    /**
     * A description that can be used to identify the event notification rule after
     * creation
     */
    description?: string;

    /**
     * Notifications will be sent only for objects with this prefix
     */
    prefix?: string;

    /**
     * Notifications will be sent only for objects with this suffix
     */
    suffix?: string;
  }
}

export interface QueueDeleteParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Header param: The bucket jurisdiction
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
}

export declare namespace Queues {
  export {
    type QueueUpdateResponse as QueueUpdateResponse,
    type QueueDeleteResponse as QueueDeleteResponse,
    type QueueUpdateParams as QueueUpdateParams,
    type QueueDeleteParams as QueueDeleteParams,
  };
}
