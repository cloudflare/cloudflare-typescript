// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseEventNotifications extends APIResource {
  static override readonly _key: readonly ['r2', 'buckets', 'eventNotifications'] = Object.freeze([
    'r2',
    'buckets',
    'eventNotifications',
  ] as const);

  /**
   * Creates rules that send notifications for matching R2 object events to the
   * specified Cloudflare Queue. Rules can filter objects by key prefix and suffix.
   * New rules are added to any existing rules for the queue; a rule that overlaps an
   * existing rule is rejected.
   *
   * @example
   * ```ts
   * const eventNotification =
   *   await client.r2.buckets.eventNotifications.update(
   *     'queue_id',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       bucket_name: 'example-bucket',
   *       rules: [{ actions: ['PutObject', 'CopyObject'] }],
   *     },
   *   );
   * ```
   */
  update(
    queueID: string,
    params: EventNotificationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EventNotificationUpdateResponse> {
    const { account_id, bucket_name, 'cf-r2-jurisdiction': cfR2Jurisdiction, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_id}/event_notifications/r2/${bucket_name}/configuration/queues/${queueID}`,
        {
          body,
          ...options,
          headers: buildHeaders([
            {
              ...(cfR2Jurisdiction?.toString() != null ?
                { 'cf-r2-jurisdiction': cfR2Jurisdiction?.toString() }
              : undefined),
            },
            options?.headers,
          ]),
        },
      ) as APIPromise<{ result: EventNotificationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists event notification rules for an R2 bucket, grouped by the Cloudflare Queue
   * that receives matching object events.
   *
   * @example
   * ```ts
   * const eventNotifications =
   *   await client.r2.buckets.eventNotifications.list(
   *     'example-bucket',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  list(
    bucketName: string,
    params: EventNotificationListParams,
    options?: RequestOptions,
  ): APIPromise<EventNotificationListResponse> {
    const { account_id, 'cf-r2-jurisdiction': cfR2Jurisdiction } = params;
    return (
      this._client.get(path`/accounts/${account_id}/event_notifications/r2/${bucketName}/configuration`, {
        ...options,
        headers: buildHeaders([
          {
            ...(cfR2Jurisdiction?.toString() != null ?
              { 'cf-r2-jurisdiction': cfR2Jurisdiction?.toString() }
            : undefined),
          },
          options?.headers,
        ]),
      }) as APIPromise<{ result: EventNotificationListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes the specified event notification rules for an R2 bucket and Cloudflare
   * Queue. Provide ruleIds in the request body to select rules. If no body is
   * provided, all rules for that bucket and queue are deleted.
   *
   * @example
   * ```ts
   * const eventNotification =
   *   await client.r2.buckets.eventNotifications.delete(
   *     'queue_id',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       bucket_name: 'example-bucket',
   *     },
   *   );
   * ```
   */
  delete(
    queueID: string,
    params: EventNotificationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<EventNotificationDeleteResponse> {
    const { account_id, bucket_name, 'cf-r2-jurisdiction': cfR2Jurisdiction } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/event_notifications/r2/${bucket_name}/configuration/queues/${queueID}`,
        {
          ...options,
          headers: buildHeaders([
            {
              ...(cfR2Jurisdiction?.toString() != null ?
                { 'cf-r2-jurisdiction': cfR2Jurisdiction?.toString() }
              : undefined),
            },
            options?.headers,
          ]),
        },
      ) as APIPromise<{ result: EventNotificationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the event notification rules for the specified R2 bucket and Cloudflare
   * Queue. The response includes the queue's configuration and its array of rules.
   *
   * @example
   * ```ts
   * const eventNotification =
   *   await client.r2.buckets.eventNotifications.get(
   *     'queue_id',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       bucket_name: 'example-bucket',
   *     },
   *   );
   * ```
   */
  get(
    queueID: string,
    params: EventNotificationGetParams,
    options?: RequestOptions,
  ): APIPromise<EventNotificationGetResponse> {
    const { account_id, bucket_name, 'cf-r2-jurisdiction': cfR2Jurisdiction } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/event_notifications/r2/${bucket_name}/configuration/queues/${queueID}`,
        {
          ...options,
          headers: buildHeaders([
            {
              ...(cfR2Jurisdiction?.toString() != null ?
                { 'cf-r2-jurisdiction': cfR2Jurisdiction?.toString() }
              : undefined),
            },
            options?.headers,
          ]),
        },
      ) as APIPromise<{ result: EventNotificationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class EventNotifications extends BaseEventNotifications {}

export type EventNotificationUpdateResponse = unknown;

export interface EventNotificationListResponse {
  /**
   * Name of the bucket.
   */
  bucketName?: string;

  /**
   * List of queues associated with the bucket.
   */
  queues?: Array<EventNotificationListResponse.Queue>;
}

export namespace EventNotificationListResponse {
  export interface Queue {
    /**
     * Queue ID.
     */
    queueId?: string;

    /**
     * Name of the queue.
     */
    queueName?: string;

    rules?: Array<Queue.Rule>;
  }

  export namespace Queue {
    export interface Rule {
      /**
       * Array of R2 object actions that will trigger notifications.
       */
      actions: Array<
        'PutObject' | 'CopyObject' | 'DeleteObject' | 'CompleteMultipartUpload' | 'LifecycleDeletion'
      >;

      /**
       * Timestamp when the rule was created.
       */
      createdAt?: string;

      /**
       * A description that can be used to identify the event notification rule after
       * creation.
       */
      description?: string;

      /**
       * Notifications will be sent only for objects with this prefix.
       */
      prefix?: string;

      /**
       * Rule ID.
       */
      ruleId?: string;

      /**
       * Notifications will be sent only for objects with this suffix.
       */
      suffix?: string;
    }
  }
}

export type EventNotificationDeleteResponse = unknown;

export interface EventNotificationGetResponse {
  /**
   * Queue ID.
   */
  queueId?: string;

  /**
   * Name of the queue.
   */
  queueName?: string;

  rules?: Array<EventNotificationGetResponse.Rule>;
}

export namespace EventNotificationGetResponse {
  export interface Rule {
    /**
     * Array of R2 object actions that will trigger notifications.
     */
    actions: Array<
      'PutObject' | 'CopyObject' | 'DeleteObject' | 'CompleteMultipartUpload' | 'LifecycleDeletion'
    >;

    /**
     * Timestamp when the rule was created.
     */
    createdAt?: string;

    /**
     * A description that can be used to identify the event notification rule after
     * creation.
     */
    description?: string;

    /**
     * Notifications will be sent only for objects with this prefix.
     */
    prefix?: string;

    /**
     * Rule ID.
     */
    ruleId?: string;

    /**
     * Notifications will be sent only for objects with this suffix.
     */
    suffix?: string;
  }
}

export interface EventNotificationUpdateParams {
  /**
   * Path param: Cloudflare account ID that owns the R2 resource.
   */
  account_id: string;

  /**
   * Path param: Name of the bucket.
   */
  bucket_name: string;

  /**
   * Body param: Array of rules to drive notifications.
   */
  rules: Array<EventNotificationUpdateParams.Rule>;

  /**
   * Header param: Jurisdiction where objects in this bucket are guaranteed to be
   * stored.
   */
  'cf-r2-jurisdiction'?: 'default' | 'eu' | 'us' | 'fedramp' | 'fedramp-high';
}

export namespace EventNotificationUpdateParams {
  export interface Rule {
    /**
     * Array of R2 object actions that will trigger notifications.
     */
    actions: Array<
      'PutObject' | 'CopyObject' | 'DeleteObject' | 'CompleteMultipartUpload' | 'LifecycleDeletion'
    >;

    /**
     * A description that can be used to identify the event notification rule after
     * creation.
     */
    description?: string;

    /**
     * Notifications will be sent only for objects with this prefix.
     */
    prefix?: string;

    /**
     * Notifications will be sent only for objects with this suffix.
     */
    suffix?: string;
  }
}

export interface EventNotificationListParams {
  /**
   * Path param: Cloudflare account ID that owns the R2 resource.
   */
  account_id: string;

  /**
   * Header param: Jurisdiction where objects in this bucket are guaranteed to be
   * stored.
   */
  'cf-r2-jurisdiction'?: 'default' | 'eu' | 'us' | 'fedramp' | 'fedramp-high';
}

export interface EventNotificationDeleteParams {
  /**
   * Path param: Cloudflare account ID that owns the R2 resource.
   */
  account_id: string;

  /**
   * Path param: Name of the bucket.
   */
  bucket_name: string;

  /**
   * Header param: Jurisdiction where objects in this bucket are guaranteed to be
   * stored.
   */
  'cf-r2-jurisdiction'?: 'default' | 'eu' | 'us' | 'fedramp' | 'fedramp-high';
}

export interface EventNotificationGetParams {
  /**
   * Path param: Cloudflare account ID that owns the R2 resource.
   */
  account_id: string;

  /**
   * Path param: Name of the bucket.
   */
  bucket_name: string;

  /**
   * Header param: Jurisdiction where objects in this bucket are guaranteed to be
   * stored.
   */
  'cf-r2-jurisdiction'?: 'default' | 'eu' | 'us' | 'fedramp' | 'fedramp-high';
}

export declare namespace EventNotifications {
  export {
    type EventNotificationUpdateResponse as EventNotificationUpdateResponse,
    type EventNotificationListResponse as EventNotificationListResponse,
    type EventNotificationDeleteResponse as EventNotificationDeleteResponse,
    type EventNotificationGetResponse as EventNotificationGetResponse,
    type EventNotificationUpdateParams as EventNotificationUpdateParams,
    type EventNotificationListParams as EventNotificationListParams,
    type EventNotificationDeleteParams as EventNotificationDeleteParams,
    type EventNotificationGetParams as EventNotificationGetParams,
  };
}
