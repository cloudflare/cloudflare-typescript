// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DEXTestsAPI from '../devices/dex-tests';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, V4PagePagination, type V4PagePaginationParams } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseRules extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dex', 'rules'] = Object.freeze([
    'zeroTrust',
    'dex',
    'rules',
  ] as const);

  /**
   * Create a DEX Rule.
   *
   * @example
   * ```ts
   * const rule = await client.zeroTrust.dex.rules.create({
   *   account_id: '01a7362d577a6c3019a474fd6f485823',
   *   match: 'match',
   *   name: 'name',
   * });
   * ```
   */
  create(params: RuleCreateParams, options?: RequestOptions): APIPromise<RuleCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/dex/rules`, { body, ...options }) as APIPromise<{
        result: RuleCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a DEX Rule.
   *
   * @example
   * ```ts
   * const rule = await client.zeroTrust.dex.rules.update(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '01a7362d577a6c3019a474fd6f485823' },
   * );
   * ```
   */
  update(ruleID: string, params: RuleUpdateParams, options?: RequestOptions): APIPromise<RuleUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/dex/rules/${ruleID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: RuleUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List DEX Rules.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ruleListResponse of client.zeroTrust.dex.rules.list(
   *   {
   *     account_id: '01a7362d577a6c3019a474fd6f485823',
   *     page: 1,
   *     per_page: 10,
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RuleListParams,
    options?: RequestOptions,
  ): PagePromise<RuleListResponsesV4PagePagination, RuleListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/dex/rules`,
      V4PagePagination<RuleListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a DEX Rule.
   *
   * @example
   * ```ts
   * const rule = await client.zeroTrust.dex.rules.delete(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '01a7362d577a6c3019a474fd6f485823' },
   * );
   * ```
   */
  delete(
    ruleID: string,
    params: RuleDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RuleDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/dex/rules/${ruleID}`, options) as APIPromise<{
        result: RuleDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get details for a DEX Rule.
   *
   * @example
   * ```ts
   * const rule = await client.zeroTrust.dex.rules.get(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '01a7362d577a6c3019a474fd6f485823' },
   * );
   * ```
   */
  get(ruleID: string, params: RuleGetParams, options?: RequestOptions): APIPromise<RuleGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/dex/rules/${ruleID}`, options) as APIPromise<{
        result: RuleGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Rules extends BaseRules {}

export type RuleListResponsesV4PagePagination = V4PagePagination<RuleListResponse>;

export interface RuleCreateResponse {
  /**
   * API Resource UUID tag.
   */
  id: string;

  created_at: string;

  match: string;

  name: string;

  description?: string;

  targeted_tests?: Array<RuleCreateResponse.TargetedTest>;

  updated_at?: string;
}

export namespace RuleCreateResponse {
  export interface TargetedTest {
    /**
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    data: DEXTestsAPI.SchemaData;

    enabled: boolean;

    name: string;

    test_id: string;
  }
}

export interface RuleUpdateResponse {
  /**
   * API Resource UUID tag.
   */
  id: string;

  created_at: string;

  match: string;

  name: string;

  description?: string;

  targeted_tests?: Array<RuleUpdateResponse.TargetedTest>;

  updated_at?: string;
}

export namespace RuleUpdateResponse {
  export interface TargetedTest {
    /**
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    data: DEXTestsAPI.SchemaData;

    enabled: boolean;

    name: string;

    test_id: string;
  }
}

export interface RuleListResponse {
  rules?: Array<RuleListResponse.Rule>;
}

export namespace RuleListResponse {
  export interface Rule {
    /**
     * API Resource UUID tag.
     */
    id: string;

    created_at: string;

    match: string;

    name: string;

    description?: string;

    targeted_tests?: Array<Rule.TargetedTest>;

    updated_at?: string;
  }

  export namespace Rule {
    export interface TargetedTest {
      /**
       * The configuration object which contains the details for the WARP client to
       * conduct the test.
       */
      data: DEXTestsAPI.SchemaData;

      enabled: boolean;

      name: string;

      test_id: string;
    }
  }
}

export type RuleDeleteResponse = boolean | null;

export interface RuleGetResponse {
  /**
   * API Resource UUID tag.
   */
  id: string;

  created_at: string;

  match: string;

  name: string;

  description?: string;

  targeted_tests?: Array<RuleGetResponse.TargetedTest>;

  updated_at?: string;
}

export namespace RuleGetResponse {
  export interface TargetedTest {
    /**
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    data: DEXTestsAPI.SchemaData;

    enabled: boolean;

    name: string;

    test_id: string;
  }
}

export interface RuleCreateParams {
  /**
   * Path param: Unique identifier linked to an account.
   */
  account_id: string;

  /**
   * Body param: The wirefilter expression to match.
   */
  match: string;

  /**
   * Body param: The name of the Rule.
   */
  name: string;

  /**
   * Body param
   */
  description?: string;
}

export interface RuleUpdateParams {
  /**
   * Path param: Unique identifier linked to an account.
   */
  account_id: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param: The wirefilter expression to match.
   */
  match?: string;

  /**
   * Body param: The name of the Rule.
   */
  name?: string;
}

export interface RuleListParams extends V4PagePaginationParams {
  /**
   * Path param: Unique identifier linked to an account.
   */
  account_id: string;

  /**
   * Query param: Filter results by rule name.
   */
  name?: string;

  /**
   * Query param: Which property to sort results by.
   */
  sort_by?: 'name' | 'created_at' | 'updated_at';

  /**
   * Query param: Sort direction for sort_by property.
   */
  sort_order?: 'ASC' | 'DESC';
}

export interface RuleDeleteParams {
  /**
   * Unique identifier linked to an account.
   */
  account_id: string;
}

export interface RuleGetParams {
  /**
   * Unique identifier linked to an account.
   */
  account_id: string;
}

export declare namespace Rules {
  export {
    type RuleCreateResponse as RuleCreateResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleGetResponse as RuleGetResponse,
    type RuleListResponsesV4PagePagination as RuleListResponsesV4PagePagination,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleGetParams as RuleGetParams,
  };
}
