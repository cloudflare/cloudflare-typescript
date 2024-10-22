// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ConfigurationAPI from './configuration';
import * as QueuesAPI from './queues';

export class Configuration extends APIResource {
  queues: QueuesAPI.Queues = new QueuesAPI.Queues(this._client);

  /**
   * List all event notification rules for a bucket.
   */
  get(
    bucketName: string,
    params: ConfigurationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigurationGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/event_notifications/r2/${bucketName}/configuration`,
        options,
      ) as Core.APIPromise<{ result: ConfigurationGetResponse }>
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
   * Account ID
   */
  account_id: string;
}

export namespace Configuration {
  export import ConfigurationGetResponse = ConfigurationAPI.ConfigurationGetResponse;
  export import ConfigurationGetParams = ConfigurationAPI.ConfigurationGetParams;
  export import Queues = QueuesAPI.Queues;
  export import QueueUpdateResponse = QueuesAPI.QueueUpdateResponse;
  export import QueueDeleteResponse = QueuesAPI.QueueDeleteResponse;
  export import QueueUpdateParams = QueuesAPI.QueueUpdateParams;
  export import QueueDeleteParams = QueuesAPI.QueueDeleteParams;
}
