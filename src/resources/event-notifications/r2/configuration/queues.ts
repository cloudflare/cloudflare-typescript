// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as QueuesAPI from './queues';

export class Queues extends APIResource {
  /**
   * Define the rules for a given queue which will determine event notification
   * production.
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
   * Turn off all event notifications configured for delivery to a given queue. No
   * further notifications will be produced for the queue once complete.
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

export interface QueueUpdateResponse {
  event_notification_detail_id?: string;
}

export type QueueDeleteResponse = unknown | Array<unknown> | string;

export interface QueueUpdateParams {
  /**
   * Path param: Identifier
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

export interface QueueDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Queues {
  export import QueueUpdateResponse = QueuesAPI.QueueUpdateResponse;
  export import QueueDeleteResponse = QueuesAPI.QueueDeleteResponse;
  export import QueueUpdateParams = QueuesAPI.QueueUpdateParams;
  export import QueueDeleteParams = QueuesAPI.QueueDeleteParams;
}
