// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AddressesAPI from './addresses';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Addresses extends APIResource {
  /**
   * Create a destination address to forward your emails to. Destination addresses
   * need to be verified before they can be used.
   */
  create(params: AddressCreateParams, options?: Core.RequestOptions): Core.APIPromise<Address> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/email/routing/addresses`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Address }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists existing destination addresses.
   */
  list(
    params: AddressListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AddressesV4PagePaginationArray, Address> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email/routing/addresses`,
      AddressesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes a specific destination address.
   */
  delete(
    destinationAddressIdentifier: string,
    params: AddressDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Address> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/email/routing/addresses/${destinationAddressIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: Address }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets information for a specific destination email already created.
   */
  get(
    destinationAddressIdentifier: string,
    params: AddressGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Address> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/email/routing/addresses/${destinationAddressIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: Address }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AddressesV4PagePaginationArray extends V4PagePaginationArray<Address> {}

export interface Address {
  /**
   * Destination address identifier.
   */
  id?: string;

  /**
   * The date and time the destination address has been created.
   */
  created?: string;

  /**
   * The contact email address of the user.
   */
  email?: string;

  /**
   * The date and time the destination address was last modified.
   */
  modified?: string;

  /**
   * @deprecated: Destination address tag. (Deprecated, replaced by destination
   * address identifier)
   */
  tag?: string;

  /**
   * The date and time the destination address has been verified. Null means not
   * verified yet.
   */
  verified?: string;
}

export interface AddressCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The contact email address of the user.
   */
  email: string;
}

export interface AddressListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: Sorts results in an ascending or descending order.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter by verified destination addresses.
   */
  verified?: true | false;
}

export interface AddressDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface AddressGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Addresses {
  export import Address = AddressesAPI.Address;
  export import AddressesV4PagePaginationArray = AddressesAPI.AddressesV4PagePaginationArray;
  export import AddressCreateParams = AddressesAPI.AddressCreateParams;
  export import AddressListParams = AddressesAPI.AddressListParams;
  export import AddressDeleteParams = AddressesAPI.AddressDeleteParams;
  export import AddressGetParams = AddressesAPI.AddressGetParams;
}
