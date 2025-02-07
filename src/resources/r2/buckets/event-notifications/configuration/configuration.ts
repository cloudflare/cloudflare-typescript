// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as QueuesAPI from './queues';
import {
  QueueDeleteParams,
  QueueDeleteResponse,
  QueueUpdateParams,
  QueueUpdateResponse,
  Queues,
} from './queues';
import { APIPromise } from '../../../../../api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Configuration extends APIResource {
  queues: QueuesAPI.Queues = new QueuesAPI.Queues(this._client);

  /**
   * List all event notification rules for a bucket.
   */
  get(
    bucketName: string,
    params: ConfigurationGetParams,
    options?: RequestOptions,
  ): APIPromise<ConfigurationGetResponse> {
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
      }) as APIPromise<{ result: ConfigurationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ConfigurationGetResponse {
  /**
   * Name of the bucket.
   */
  bucketName?: string;

  /**
   * List of queues associated with the bucket.
   */
  queues?: Array<ConfigurationGetResponse.Queue>;
}

export namespace ConfigurationGetResponse {
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

export interface ConfigurationGetParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Header param: The bucket jurisdiction
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
}

Configuration.Queues = Queues;

export declare namespace Configuration {
  export {
    type ConfigurationGetResponse as ConfigurationGetResponse,
    type ConfigurationGetParams as ConfigurationGetParams,
  };

  export {
    Queues as Queues,
    type QueueUpdateResponse as QueueUpdateResponse,
    type QueueDeleteResponse as QueueDeleteResponse,
    type QueueUpdateParams as QueueUpdateParams,
    type QueueDeleteParams as QueueDeleteParams,
  };
}
