// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as QueuesAPI from './queues';

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
    const { account_id, ...body } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/event_notifications/r2/${bucketName}/configuration/queues/${queueId}`,
        { body, ...options },
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
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/event_notifications/r2/${bucketName}/configuration/queues/${queueId}`,
        options,
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
   * Account ID
   */
  account_id: string;
}

export namespace Queues {
  export import QueueUpdateResponse = QueuesAPI.QueueUpdateResponse;
  export import QueueDeleteResponse = QueuesAPI.QueueDeleteResponse;
  export import QueueUpdateParams = QueuesAPI.QueueUpdateParams;
  export import QueueDeleteParams = QueuesAPI.QueueDeleteParams;
}
