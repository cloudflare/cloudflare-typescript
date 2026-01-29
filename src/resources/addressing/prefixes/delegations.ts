// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Delegations extends APIResource {
  /**
   * Create a new account delegation for a given IP prefix.
   *
   * @example
   * ```ts
   * const delegations =
   *   await client.addressing.prefixes.delegations.create(
   *     '2af39739cc4e3b5910c918468bb89828',
   *     {
   *       account_id: '258def64c72dae45f3e4c8516e2111f2',
   *       cidr: '192.0.2.0/24',
   *       delegated_account_id:
   *         'b1946ac92492d2347c6235b4d2611184',
   *     },
   *   );
   * ```
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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const delegations of client.addressing.prefixes.delegations.list(
   *   '2af39739cc4e3b5910c918468bb89828',
   *   { account_id: '258def64c72dae45f3e4c8516e2111f2' },
   * )) {
   *   // ...
   * }
   * ```
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
   *
   * @example
   * ```ts
   * const delegation =
   *   await client.addressing.prefixes.delegations.delete(
   *     'd933b1530bc56c9953cf8ce166da8004',
   *     {
   *       account_id: '258def64c72dae45f3e4c8516e2111f2',
   *       prefix_id: '2af39739cc4e3b5910c918468bb89828',
   *     },
   *   );
   * ```
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
