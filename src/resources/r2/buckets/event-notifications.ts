// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class EventNotifications extends APIResource {
  /**
   * Create event notification rule.
   *
   * @example
   * ```ts
   * const eventNotification =
   *   await client.r2.buckets.eventNotifications.update(
   *     'example-bucket',
   *     'queue_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  update(
    bucketName: string,
    queueId: string,
    params: EventNotificationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventNotificationUpdateResponse> {
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
      ) as Core.APIPromise<{ result: EventNotificationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all event notification rules for a bucket.
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
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventNotificationListResponse> {
    const { account_id, jurisdiction } = params;
    return (
      this._client.get(`/accounts/${account_id}/event_notifications/r2/${bucketName}/configuration`, {
        ...options,
        headers: {
          ...(jurisdiction?.toString() != null ?
            { 'cf-r2-jurisdiction': jurisdiction?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: EventNotificationListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete an event notification rule. **If no body is provided, all rules for
   * specified queue will be deleted**.
   *
   * @example
   * ```ts
   * const eventNotification =
   *   await client.r2.buckets.eventNotifications.delete(
   *     'example-bucket',
   *     'queue_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    bucketName: string,
    queueId: string,
    params: EventNotificationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventNotificationDeleteResponse> {
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
      ) as Core.APIPromise<{ result: EventNotificationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a single event notification rule.
   *
   * @example
   * ```ts
   * const eventNotification =
   *   await client.r2.buckets.eventNotifications.get(
   *     'example-bucket',
   *     'queue_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    bucketName: string,
    queueId: string,
    params: EventNotificationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventNotificationGetResponse> {
    const { account_id, jurisdiction } = params;
    return (
      this._client.get(
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
      ) as Core.APIPromise<{ result: EventNotificationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
   * Unique identifier for this rule.
   */
  id: string;

  /**
   * Conditions that apply to all transitions of this rule.
   */
  conditions: EventNotificationGetResponse.Conditions;

  /**
   * Whether or not this rule is in effect.
   */
  enabled: boolean;

  /**
   * Transition to abort ongoing multipart uploads.
   */
  abortMultipartUploadsTransition?: EventNotificationGetResponse.AbortMultipartUploadsTransition;

  /**
   * Transition to delete objects.
   */
  deleteObjectsTransition?: EventNotificationGetResponse.DeleteObjectsTransition;

  /**
   * Transitions to change the storage class of objects.
   */
  storageClassTransitions?: Array<EventNotificationGetResponse.StorageClassTransition>;
}

export namespace EventNotificationGetResponse {
  /**
   * Conditions that apply to all transitions of this rule.
   */
  export interface Conditions {
    /**
     * Transitions will only apply to objects/uploads in the bucket that start with the
     * given prefix, an empty prefix can be provided to scope rule to all
     * objects/uploads.
     */
    prefix: string;
  }

  /**
   * Transition to abort ongoing multipart uploads.
   */
  export interface AbortMultipartUploadsTransition {
    /**
     * Condition for lifecycle transitions to apply after an object reaches an age in
     * seconds.
     */
    condition?: AbortMultipartUploadsTransition.Condition;
  }

  export namespace AbortMultipartUploadsTransition {
    /**
     * Condition for lifecycle transitions to apply after an object reaches an age in
     * seconds.
     */
    export interface Condition {
      maxAge: number;

      type: 'Age';
    }
  }

  /**
   * Transition to delete objects.
   */
  export interface DeleteObjectsTransition {
    /**
     * Condition for lifecycle transitions to apply after an object reaches an age in
     * seconds.
     */
    condition?:
      | DeleteObjectsTransition.R2LifecycleAgeCondition
      | DeleteObjectsTransition.R2LifecycleDateCondition;
  }

  export namespace DeleteObjectsTransition {
    /**
     * Condition for lifecycle transitions to apply after an object reaches an age in
     * seconds.
     */
    export interface R2LifecycleAgeCondition {
      maxAge: number;

      type: 'Age';
    }

    /**
     * Condition for lifecycle transitions to apply on a specific date.
     */
    export interface R2LifecycleDateCondition {
      date: string;

      type: 'Date';
    }
  }

  export interface StorageClassTransition {
    /**
     * Condition for lifecycle transitions to apply after an object reaches an age in
     * seconds.
     */
    condition:
      | StorageClassTransition.R2LifecycleAgeCondition
      | StorageClassTransition.R2LifecycleDateCondition;

    storageClass: 'InfrequentAccess';
  }

  export namespace StorageClassTransition {
    /**
     * Condition for lifecycle transitions to apply after an object reaches an age in
     * seconds.
     */
    export interface R2LifecycleAgeCondition {
      maxAge: number;

      type: 'Age';
    }

    /**
     * Condition for lifecycle transitions to apply on a specific date.
     */
    export interface R2LifecycleDateCondition {
      date: string;

      type: 'Date';
    }
  }
}

export interface EventNotificationUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param: Array of rules to drive notifications.
   */
  rules?: Array<EventNotificationUpdateParams.Rule>;

  /**
   * Header param: Jurisdiction where objects in this bucket are guaranteed to be
   * stored.
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
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
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Header param: Jurisdiction where objects in this bucket are guaranteed to be
   * stored.
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
}

export interface EventNotificationDeleteParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Header param: Jurisdiction where objects in this bucket are guaranteed to be
   * stored.
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
}

export interface EventNotificationGetParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Header param: The bucket jurisdiction.
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
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
