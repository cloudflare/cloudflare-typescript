// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as QueuesAPI from './queues';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BasePurge extends APIResource {
  static override readonly _key: readonly ['queues', 'purge'] = Object.freeze(['queues', 'purge'] as const);

  /**
   * Deletes all messages from the Queue.
   *
   * @example
   * ```ts
   * const queue = await client.queues.purge.start(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  start(
    queueID: string,
    params: PurgeStartParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QueuesAPI.Queue> {
    const { account_id = this._client.accountID, ...body } = params ?? {};
    return (
      this._client.post(path`/accounts/${account_id}/queues/${queueID}/purge`, {
        body,
        ...options,
      }) as APIPromise<{ result: QueuesAPI.Queue }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get details about a Queue's purge status.
   *
   * @example
   * ```ts
   * const response = await client.queues.purge.status(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  status(
    queueID: string,
    params: PurgeStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PurgeStatusResponse> {
    const { account_id = this._client.accountID } = params ?? {};
    return (
      this._client.get(path`/accounts/${account_id}/queues/${queueID}/purge`, options) as APIPromise<{
        result: PurgeStatusResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Purge extends BasePurge {}

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
  account_id?: string;

  /**
   * Body param: Confimation that all messages will be deleted permanently.
   */
  delete_messages_permanently?: boolean;
}

export interface PurgeStatusParams {
  /**
   * A Resource identifier.
   */
  account_id?: string;
}

export declare namespace Purge {
  export {
    type PurgeStatusResponse as PurgeStatusResponse,
    type PurgeStartParams as PurgeStartParams,
    type PurgeStatusParams as PurgeStatusParams,
  };
}
