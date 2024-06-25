// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ConfigurationAPI from './configuration';
import * as QueuesAPI from './queues';

export class Configuration extends APIResource {
  queues: QueuesAPI.Queues = new QueuesAPI.Queues(this._client);

  /**
   * Returns all notification rules for each queue for which bucket notifications are
   * produced.
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

export type ConfigurationGetResponse = Record<string, Record<string, ConfigurationGetResponse.mq_detail>>;

export namespace ConfigurationGetResponse {
  export interface mq_detail {
    /**
     * Queue ID that will receive notifications based on the configured rules
     */
    queue: string;

    /**
     * Array of rules to drive notifications
     */
    rules: Array<mq_detail.Rule>;
  }

  export namespace mq_detail {
    export interface Rule {
      /**
       * Array of R2 object actions that will trigger notifications
       */
      actions: Array<
        'PutObject' | 'CopyObject' | 'DeleteObject' | 'CompleteMultipartUpload' | 'AbortMultipartUpload'
      >;

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
}

export interface ConfigurationGetParams {
  /**
   * Identifier
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
