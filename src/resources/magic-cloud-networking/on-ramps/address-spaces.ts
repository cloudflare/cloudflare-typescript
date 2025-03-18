// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AddressSpaces extends APIResource {
  /**
   * Update the Magic WAN Address Space (Closed Beta)
   */
  update(params: AddressSpaceUpdateParams, options?: RequestOptions): APIPromise<AddressSpaceUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/magic/cloud/onramps/magic_wan_address_space`, {
        body,
        ...options,
      }) as APIPromise<{ result: AddressSpaceUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Read the Magic WAN Address Space (Closed Beta)
   */
  list(params: AddressSpaceListParams, options?: RequestOptions): APIPromise<AddressSpaceListResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/magic/cloud/onramps/magic_wan_address_space`,
        options,
      ) as APIPromise<{ result: AddressSpaceListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the Magic WAN Address Space (Closed Beta)
   */
  edit(params: AddressSpaceEditParams, options?: RequestOptions): APIPromise<AddressSpaceEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/magic/cloud/onramps/magic_wan_address_space`, {
        body,
        ...options,
      }) as APIPromise<{ result: AddressSpaceEditResponse }>
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
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  prefixes: Array<string>;
}

export interface AddressSpaceListParams {
  account_id: string;
}

export interface AddressSpaceEditParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
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
