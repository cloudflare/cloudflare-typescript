// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class EventNotifications extends APIResource {
  /**
   * Create event notification rule.
   */
  update(
    queueID: string,
    params: EventNotificationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EventNotificationUpdateResponse> {
    const { account_id, bucket_name, jurisdiction, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_id}/event_notifications/r2/${bucket_name}/configuration/queues/${queueID}`,
        {
          body,
          ...options,
          headers: buildHeaders([
            {
              ...(jurisdiction?.toString() != null ?
                { 'cf-r2-jurisdiction': jurisdiction?.toString() }
              : undefined),
            },
            options?.headers,
          ]),
        },
      ) as APIPromise<{ result: EventNotificationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete an event notification rule. **If no body is provided, all rules for
   * specified queue will be deleted**.
   */
  delete(
    queueID: string,
    params: EventNotificationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<EventNotificationDeleteResponse> {
    const { account_id, bucket_name, jurisdiction } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/event_notifications/r2/${bucket_name}/configuration/queues/${queueID}`,
        {
          ...options,
          headers: buildHeaders([
            {
              ...(jurisdiction?.toString() != null ?
                { 'cf-r2-jurisdiction': jurisdiction?.toString() }
              : undefined),
            },
            options?.headers,
          ]),
        },
      ) as APIPromise<{ result: EventNotificationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all event notification rules for a bucket.
   */
  get(
    bucketName: string,
    params: EventNotificationGetParams,
    options?: RequestOptions,
  ): APIPromise<EventNotificationGetResponse> {
    const { account_id, jurisdiction } = params;
    return (
      this._client.get(path`/accounts/${account_id}/event_notifications/r2/${bucketName}/configuration`, {
        ...options,
        headers: buildHeaders([
          {
            ...(jurisdiction?.toString() != null ?
              { 'cf-r2-jurisdiction': jurisdiction?.toString() }
            : undefined),
          },
          options?.headers,
        ]),
      }) as APIPromise<{ result: EventNotificationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type EventNotificationUpdateResponse = unknown;

export type EventNotificationDeleteResponse = unknown;

export interface EventNotificationGetResponse {
  /**
   * Name of the bucket.
   */
  bucketName?: string;

  /**
   * List of queues associated with the bucket.
   */
  queues?: Array<EventNotificationGetResponse.Queue>;
}

export namespace EventNotificationGetResponse {
  export interface Queue {
    /**
     * Queue ID
     */
    queueId?: string;

    /**
     * Name of the queue
     */
    queueName?: string;

    rules?: Array<Queue.Rule>;
  }

  export namespace Queue {
    export interface Rule {
      /**
       * Array of R2 object actions that will trigger notifications
       */
      actions: Array<
        'PutObject' | 'CopyObject' | 'DeleteObject' | 'CompleteMultipartUpload' | 'LifecycleDeletion'
      >;

      /**
       * Timestamp when the rule was created
       */
      createdAt?: string;

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
       * Rule ID
       */
      ruleId?: string;

      /**
       * Notifications will be sent only for objects with this suffix
       */
      suffix?: string;
    }
  }
}

export interface EventNotificationUpdateParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Path param: Name of the bucket
   */
  bucket_name: string;

  /**
   * Body param: Array of rules to drive notifications
   */
  rules?: Array<EventNotificationUpdateParams.Rule>;

  /**
   * Header param: The bucket jurisdiction
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
}

export namespace EventNotificationUpdateParams {
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

export interface EventNotificationDeleteParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Path param: Name of the bucket
   */
  bucket_name: string;

  /**
   * Header param: The bucket jurisdiction
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
}

export interface EventNotificationGetParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Header param: The bucket jurisdiction
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
}

export declare namespace EventNotifications {
  export {
    type EventNotificationUpdateResponse as EventNotificationUpdateResponse,
    type EventNotificationDeleteResponse as EventNotificationDeleteResponse,
    type EventNotificationGetResponse as EventNotificationGetResponse,
    type EventNotificationUpdateParams as EventNotificationUpdateParams,
    type EventNotificationDeleteParams as EventNotificationDeleteParams,
    type EventNotificationGetParams as EventNotificationGetParams,
  };
}
