// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Delegations extends APIResource {
  /**
   * Create a new account delegation for a given IP prefix.
   */
  create(
    prefixID: string,
    params: DelegationCreateParams,
    options?: RequestOptions,
  ): APIPromise<Delegations> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/addressing/prefixes/${prefixID}/delegations`, {
        body,
        ...options,
      }) as APIPromise<{ result: Delegations }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all delegations for a given account IP prefix.
   */
  list(
    prefixID: string,
    params: DelegationListParams,
    options?: RequestOptions,
  ): PagePromise<DelegationsSinglePage, Delegations> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/addressing/prefixes/${prefixID}/delegations`,
      SinglePage<Delegations>,
      options,
    );
  }

  /**
   * Delete an account delegation for a given IP prefix.
   */
  delete(
    delegationID: string,
    params: DelegationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DelegationDeleteResponse> {
    const { account_id, prefix_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/addressing/prefixes/${prefix_id}/delegations/${delegationID}`,
        options,
      ) as APIPromise<{ result: DelegationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DelegationsSinglePage = SinglePage<Delegations>;

export interface Delegations {
  /**
   * Identifier of a Delegation.
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
   * Identifier of an IP Prefix.
   */
  parent_prefix_id?: string;
}

export interface DelegationDeleteResponse {
  /**
   * Identifier of a Delegation.
   */
  id?: string;
}

export interface DelegationCreateParams {
  /**
   * Path param: Identifier of a Cloudflare account.
   */
  account_id: string;

  /**
   * Body param: IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr: string;

  /**
   * Body param: Account identifier for the account to which prefix is being
   * delegated.
   */
  delegated_account_id: string;
}

export interface DelegationListParams {
  /**
   * Identifier of a Cloudflare account.
   */
  account_id: string;
}

export interface DelegationDeleteParams {
  /**
   * Identifier of a Cloudflare account.
   */
  account_id: string;

  /**
   * Identifier of an IP Prefix.
   */
  prefix_id: string;
}

export declare namespace Delegations {
  export {
    type Delegations as Delegations,
    type DelegationDeleteResponse as DelegationDeleteResponse,
    type DelegationsSinglePage as DelegationsSinglePage,
    type DelegationCreateParams as DelegationCreateParams,
    type DelegationListParams as DelegationListParams,
    type DelegationDeleteParams as DelegationDeleteParams,
  };
}
