// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Relate extends APIResource {
  /**
   * Creates event references for a event
   */
  update(
    eventID: string,
    params: RelateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RelateUpdateResponse> {
    const { accountId, ...body } = params;
    return (
      this._client.post(path`/accounts/${accountId}/cloudforce-one/events/relate/${eventID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: RelateUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes an event refence
   */
  delete(
    eventID: string,
    params: RelateDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RelateDeleteResponse> {
    const { accountId } = params;
    return (
      this._client.delete(
        path`/accounts/${accountId}/cloudforce-one/events/relate/${eventID}`,
        options,
      ) as APIPromise<{ result: RelateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RelateUpdateResponse {
  success: boolean;
}

export interface RelateDeleteResponse {
  success: boolean;
}

export interface RelateUpdateParams {
  /**
   * Path param: Account ID
   */
  accountId: number;

  /**
   * Body param:
   */
  events: Array<string>;
}

export interface RelateDeleteParams {
  /**
   * Account ID
   */
  accountId: number;
}

export declare namespace Relate {
  export {
    type RelateUpdateResponse as RelateUpdateResponse,
    type RelateDeleteResponse as RelateDeleteResponse,
    type RelateUpdateParams as RelateUpdateParams,
    type RelateDeleteParams as RelateDeleteParams,
  };
}
