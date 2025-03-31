// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BulkOperations extends APIResource {
  /**
   * Gets the current status of an asynchronous operation on a list.
   *
   * The `status` property can have one of the following values: `pending`,
   * `running`, `completed`, or `failed`. If the status is `failed`, the `error`
   * property will contain a message describing the error.
   */
  get(
    operationID: string,
    params: BulkOperationGetParams,
    options?: RequestOptions,
  ): APIPromise<BulkOperationGetResponse> {
    const { account_identifier } = params;
    return (
      this._client.get(
        path`/accounts/${account_identifier}/rules/lists/bulk_operations/${operationID}`,
        options,
      ) as APIPromise<{ result: BulkOperationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The current status of the asynchronous operation.
 */
export type OperationStatus = 'pending' | 'running' | 'completed' | 'failed';

export interface BulkOperationGetResponse {
  /**
   * The unique operation ID of the asynchronous action.
   */
  id: string;

  /**
   * The current status of the asynchronous operation.
   */
  status: OperationStatus;

  /**
   * The RFC 3339 timestamp of when the operation was completed.
   */
  completed?: string;

  /**
   * A message describing the error when the status is `failed`.
   */
  error?: string;
}

export interface BulkOperationGetParams {
  /**
   * Identifier
   */
  account_identifier: string;
}

export declare namespace BulkOperations {
  export {
    type OperationStatus as OperationStatus,
    type BulkOperationGetResponse as BulkOperationGetResponse,
    type BulkOperationGetParams as BulkOperationGetParams,
  };
}
