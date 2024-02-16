// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DelegationsAPI from 'cloudflare/resources/addresses/prefixes/delegations';

export class Delegations extends APIResource {
  /**
   * Delete an account delegation for a given IP prefix.
   */
  delete(
    accountId: string,
    prefixId: string,
    delegationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DelegationDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/addressing/prefixes/${prefixId}/delegations/${delegationId}`,
        options,
      ) as Core.APIPromise<{ result: DelegationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Create a new account delegation for a given IP prefix.
   */
  ipAddressManagementPrefixDelegationCreatePrefixDelegation(
    accountId: string,
    prefixId: string,
    body: DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse> {
    return (
      this._client.post(`/accounts/${accountId}/addressing/prefixes/${prefixId}/delegations`, {
        body,
        ...options,
      }) as Core.APIPromise<{
        result: DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all delegations for a given account IP prefix.
   */
  ipAddressManagementPrefixDelegationListPrefixDelegations(
    accountId: string,
    prefixId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountId}/addressing/prefixes/${prefixId}/delegations`,
        options,
      ) as Core.APIPromise<{
        result: DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DelegationDeleteResponse {
  /**
   * Delegation identifier tag.
   */
  id?: string;
}

export interface DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse {
  /**
   * Delegation identifier tag.
   */
  id?: string;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  created_at?: string;

  /**
   * Account identifier for the account to which prefix is being delegated.
   */
  delegated_account_id?: string;

  modified_at?: string;

  /**
   * Identifier
   */
  parent_prefix_id?: string;
}

export type DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse =
  Array<DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse.DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponseItem>;

export namespace DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse {
  export interface DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponseItem {
    /**
     * Delegation identifier tag.
     */
    id?: string;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    created_at?: string;

    /**
     * Account identifier for the account to which prefix is being delegated.
     */
    delegated_account_id?: string;

    modified_at?: string;

    /**
     * Identifier
     */
    parent_prefix_id?: string;
  }
}

export interface DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationParams {
  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr: string;

  /**
   * Account identifier for the account to which prefix is being delegated.
   */
  delegated_account_id: string;
}

export namespace Delegations {
  export import DelegationDeleteResponse = DelegationsAPI.DelegationDeleteResponse;
  export import DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse = DelegationsAPI.DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse;
  export import DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse = DelegationsAPI.DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse;
  export import DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationParams = DelegationsAPI.DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationParams;
}
