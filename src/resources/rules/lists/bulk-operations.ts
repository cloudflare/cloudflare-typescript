// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BulkOperationsAPI from 'cloudflare/resources/rules/lists/bulk-operations';

export class BulkOperations extends APIResource {
  /**
   * Gets the current status of an asynchronous operation on a list.
   *
   * The `status` property can have one of the following values: `pending`,
   * `running`, `completed`, or `failed`. If the status is `failed`, the `error`
   * property will contain a message describing the error.
   */
  get(
    accountIdentifier: string,
    operationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkOperationGetResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/rules/lists/bulk_operations/${operationId}`,
        options,
      ) as Core.APIPromise<{ result: BulkOperationGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type BulkOperationGetResponse = Array<unknown>;

export namespace BulkOperations {
  export import BulkOperationGetResponse = BulkOperationsAPI.BulkOperationGetResponse;
}
