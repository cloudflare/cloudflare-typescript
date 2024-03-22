// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AddressesAPI from 'cloudflare/resources/email-routing/addresses';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Addresses extends APIResource {
  /**
   * Create a destination address to forward your emails to. Destination addresses
   * need to be verified before they can be used.
   */
  create(
    accountIdentifier: string,
    body: AddressCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressCreateResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/email/routing/addresses`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AddressCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists existing destination addresses.
   */
  list(
    accountIdentifier: string,
    query?: AddressListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AddressListResponsesV4PagePaginationArray, AddressListResponse>;
  list(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AddressListResponsesV4PagePaginationArray, AddressListResponse>;
  list(
    accountIdentifier: string,
    query: AddressListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AddressListResponsesV4PagePaginationArray, AddressListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/email/routing/addresses`,
      AddressListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes a specific destination address.
   */
  delete(
    accountIdentifier: string,
    destinationAddressIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/email/routing/addresses/${destinationAddressIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: AddressDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets information for a specific destination email already created.
   */
  get(
    accountIdentifier: string,
    destinationAddressIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/email/routing/addresses/${destinationAddressIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: AddressGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AddressListResponsesV4PagePaginationArray extends V4PagePaginationArray<AddressListResponse> {}

export interface EmailAddresses {
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

export interface AddressCreateResponse {
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

export interface AddressListResponse {
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

export interface AddressDeleteResponse {
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

export interface AddressGetResponse {
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
   * The contact email address of the user.
   */
  email: string;
}

export interface AddressListParams extends V4PagePaginationArrayParams {
  /**
   * Sorts results in an ascending or descending order.
   */
  direction?: 'asc' | 'desc';

  /**
   * Filter by verified destination addresses.
   */
  verified?: true | false;
}

export namespace Addresses {
  export import EmailAddresses = AddressesAPI.EmailAddresses;
  export import AddressCreateResponse = AddressesAPI.AddressCreateResponse;
  export import AddressListResponse = AddressesAPI.AddressListResponse;
  export import AddressDeleteResponse = AddressesAPI.AddressDeleteResponse;
  export import AddressGetResponse = AddressesAPI.AddressGetResponse;
  export import AddressListResponsesV4PagePaginationArray = AddressesAPI.AddressListResponsesV4PagePaginationArray;
  export import AddressCreateParams = AddressesAPI.AddressCreateParams;
  export import AddressListParams = AddressesAPI.AddressListParams;
}
