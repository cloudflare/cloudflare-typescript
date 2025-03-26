// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as QueuesAPI from './queues';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Purge extends APIResource {
  /**
   * Deletes all messages from the Queue.
   */
  start(queueID: string, params: PurgeStartParams, options?: RequestOptions): APIPromise<QueuesAPI.Queue> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/queues/${queueID}/purge`, {
        body,
        ...options,
      }) as APIPromise<{ result: QueuesAPI.Queue }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get details about a Queue's purge status.
   */
  status(
    queueID: string,
    params: PurgeStatusParams,
    options?: RequestOptions,
  ): APIPromise<PurgeStatusResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/queues/${queueID}/purge`, options) as APIPromise<{
        result: PurgeStatusResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PurgeStatusResponse {
  /**
   * Indicates if the last purge operation completed successfully.
   */
  completed?: string;

  /**
   * Timestamp when the last purge operation started.
   */
  started_at?: string;
}

export interface PurgeStartParams {
  /**
   * Path param: A Resource identifier.
   */
  account_id: string;

  /**
   * Body param: Confimation that all messages will be deleted permanently.
   */
  delete_messages_permanently?: boolean;
}

export interface PurgeStatusParams {
  /**
   * A Resource identifier.
   */
  account_id: string;
}

export declare namespace Purge {
  export {
    type PurgeStatusResponse as PurgeStatusResponse,
    type PurgeStartParams as PurgeStartParams,
    type PurgeStatusParams as PurgeStatusParams,
  };
}
