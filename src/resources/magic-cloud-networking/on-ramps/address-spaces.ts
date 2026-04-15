// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class AddressSpaces extends APIResource {
  /**
   * Update the Magic WAN Address Space (Closed Beta).
   */
  update(
    params: AddressSpaceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressSpaceUpdateResponse> {
    const { account_id = this._client.accountId, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/magic/cloud/onramps/magic_wan_address_space`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AddressSpaceUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Read the Magic WAN Address Space (Closed Beta).
   */
  list(
    params?: AddressSpaceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressSpaceListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AddressSpaceListResponse>;
  list(
    params: AddressSpaceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressSpaceListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/magic/cloud/onramps/magic_wan_address_space`,
        options,
      ) as Core.APIPromise<{ result: AddressSpaceListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the Magic WAN Address Space (Closed Beta).
   */
  edit(
    params: AddressSpaceEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressSpaceEditResponse> {
    const { account_id = this._client.accountId, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/magic/cloud/onramps/magic_wan_address_space`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AddressSpaceEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AddressSpaceUpdateResponse {
  prefixes: Array<string>;
}

export interface AddressSpaceListResponse {
  prefixes: Array<string>;
}

export interface AddressSpaceEditResponse {
  prefixes: Array<string>;
}

export interface AddressSpaceUpdateParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Body param
   */
  prefixes: Array<string>;
}

export interface AddressSpaceListParams {
  account_id?: string;
}

export interface AddressSpaceEditParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Body param
   */
  prefixes: Array<string>;
}

export declare namespace AddressSpaces {
  export {
    type AddressSpaceUpdateResponse as AddressSpaceUpdateResponse,
    type AddressSpaceListResponse as AddressSpaceListResponse,
    type AddressSpaceEditResponse as AddressSpaceEditResponse,
    type AddressSpaceUpdateParams as AddressSpaceUpdateParams,
    type AddressSpaceListParams as AddressSpaceListParams,
    type AddressSpaceEditParams as AddressSpaceEditParams,
  };
}
