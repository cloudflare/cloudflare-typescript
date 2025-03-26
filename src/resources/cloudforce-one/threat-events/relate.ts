// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Relate extends APIResource {
  /**
   * Removes an event reference
   */
  delete(
    eventID: string,
    params: RelateDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RelateDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/cloudforce-one/events/relate/${eventID}`,
        options,
      ) as APIPromise<{ result: RelateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RelateDeleteResponse {
  success: boolean;
}

export interface RelateDeleteParams {
  /**
   * Account ID
   */
  account_id: number;
}

export declare namespace Relate {
  export { type RelateDeleteResponse as RelateDeleteResponse, type RelateDeleteParams as RelateDeleteParams };
}
