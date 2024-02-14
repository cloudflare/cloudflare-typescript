// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AddressesAPI from 'cloudflare/resources/emails/routings/addresses';

export class Addresses extends APIResource {
  /**
   * Gets information for a specific destination email already created.
   */
  retrieve(
    accountIdentifier: string,
    destinationAddressIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressRetrieveResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/email/routing/addresses/${destinationAddressIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: AddressRetrieveResponse }>
    )._thenUnwrap((obj) => obj.result);
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
   * Create a destination address to forward your emails to. Destination addresses
   * need to be verified before they can be used.
   */
  emailRoutingDestinationAddressesCreateADestinationAddress(
    accountIdentifier: string,
    body: AddressEmailRoutingDestinationAddressesCreateADestinationAddressParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/email/routing/addresses`, {
        body,
        ...options,
      }) as Core.APIPromise<{
        result: AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists existing destination addresses.
   */
  emailRoutingDestinationAddressesListDestinationAddresses(
    accountIdentifier: string,
    query?: AddressEmailRoutingDestinationAddressesListDestinationAddressesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse | null>;
  emailRoutingDestinationAddressesListDestinationAddresses(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse | null>;
  emailRoutingDestinationAddressesListDestinationAddresses(
    accountIdentifier: string,
    query: AddressEmailRoutingDestinationAddressesListDestinationAddressesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse | null> {
    if (isRequestOptions(query)) {
      return this.emailRoutingDestinationAddressesListDestinationAddresses(accountIdentifier, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountIdentifier}/email/routing/addresses`, {
        query,
        ...options,
      }) as Core.APIPromise<{
        result: AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AddressRetrieveResponse {
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
   * Destination address tag. (Deprecated, replaced by destination address
   * identifier)
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
   * Destination address tag. (Deprecated, replaced by destination address
   * identifier)
   */
  tag?: string;

  /**
   * The date and time the destination address has been verified. Null means not
   * verified yet.
   */
  verified?: string;
}

export interface AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse {
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
   * Destination address tag. (Deprecated, replaced by destination address
   * identifier)
   */
  tag?: string;

  /**
   * The date and time the destination address has been verified. Null means not
   * verified yet.
   */
  verified?: string;
}

export type AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse =
  Array<AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse.AddressEmailRoutingDestinationAddressesListDestinationAddressesResponseItem>;

export namespace AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse {
  export interface AddressEmailRoutingDestinationAddressesListDestinationAddressesResponseItem {
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
     * Destination address tag. (Deprecated, replaced by destination address
     * identifier)
     */
    tag?: string;

    /**
     * The date and time the destination address has been verified. Null means not
     * verified yet.
     */
    verified?: string;
  }
}

export interface AddressEmailRoutingDestinationAddressesCreateADestinationAddressParams {
  /**
   * The contact email address of the user.
   */
  email: string;
}

export interface AddressEmailRoutingDestinationAddressesListDestinationAddressesParams {
  /**
   * Sorts results in an ascending or descending order.
   */
  direction?: 'asc' | 'desc';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Maximum number of results per page.
   */
  per_page?: number;

  /**
   * Filter by verified destination addresses.
   */
  verified?: true | false;
}

export namespace Addresses {
  export import AddressRetrieveResponse = AddressesAPI.AddressRetrieveResponse;
  export import AddressDeleteResponse = AddressesAPI.AddressDeleteResponse;
  export import AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse = AddressesAPI.AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse;
  export import AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse = AddressesAPI.AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse;
  export import AddressEmailRoutingDestinationAddressesCreateADestinationAddressParams = AddressesAPI.AddressEmailRoutingDestinationAddressesCreateADestinationAddressParams;
  export import AddressEmailRoutingDestinationAddressesListDestinationAddressesParams = AddressesAPI.AddressEmailRoutingDestinationAddressesListDestinationAddressesParams;
}
