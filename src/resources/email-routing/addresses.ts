// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Addresses extends APIResource {
  /**
   * Create a destination address to forward your emails to. Destination addresses
   * need to be verified before they can be used.
   */
  create(params: AddressCreateParams, options?: RequestOptions): APIPromise<Address> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/email/routing/addresses`, {
        body,
        ...options,
      }) as APIPromise<{ result: Address }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists existing destination addresses.
   */
  list(
    params: AddressListParams,
    options?: RequestOptions,
  ): PagePromise<AddressesV4PagePaginationArray, Address> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email/routing/addresses`,
      V4PagePaginationArray<Address>,
      { query, ...options },
    );
  }

  /**
   * Deletes a specific destination address.
   */
  delete(
    destinationAddressIdentifier: string,
    params: AddressDeleteParams,
    options?: RequestOptions,
  ): APIPromise<Address> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/email/routing/addresses/${destinationAddressIdentifier}`,
        options,
      ) as APIPromise<{ result: Address }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets information for a specific destination email already created.
   */
  get(
    destinationAddressIdentifier: string,
    params: AddressGetParams,
    options?: RequestOptions,
  ): APIPromise<Address> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/email/routing/addresses/${destinationAddressIdentifier}`,
        options,
      ) as APIPromise<{ result: Address }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AddressesV4PagePaginationArray = V4PagePaginationArray<Address>;

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
   * @deprecated Destination address tag. (Deprecated, replaced by destination
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

export declare namespace Addresses {
  export {
    type Address as Address,
    type AddressesV4PagePaginationArray as AddressesV4PagePaginationArray,
    type AddressCreateParams as AddressCreateParams,
    type AddressListParams as AddressListParams,
    type AddressDeleteParams as AddressDeleteParams,
    type AddressGetParams as AddressGetParams,
  };
}
