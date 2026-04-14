// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { V4PagePagination, type V4PagePaginationParams } from '../../../pagination';

export class Rules extends APIResource {
  /**
   * Create a DEX Rule
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
  create(params: RuleCreateParams, options?: Core.RequestOptions): Core.APIPromise<RuleCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dex/rules`, { body, ...options }) as Core.APIPromise<{
        result: RuleCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a DEX Rule
   *
   * @example
   * ```ts
   * const rule = await client.zeroTrust.dex.rules.update(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '01a7362d577a6c3019a474fd6f485823' },
   * );
   * ```
   */
  update(
    ruleId: string,
    params: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/dex/rules/${ruleId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List DEX Rules
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ruleListResponse of client.zeroTrust.dex.rules.list(
   *   {
   *     account_id: '01a7362d577a6c3019a474fd6f485823',
   *     page: 1,
   *     per_page: 1,
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RuleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RuleListResponsesV4PagePagination, RuleListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/dex/rules`, RuleListResponsesV4PagePagination, {
      query,
      ...options,
    });
  }

  /**
   * Delete a DEX Rule
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
    ruleId: string,
    params: RuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/dex/rules/${ruleId}`, options) as Core.APIPromise<{
        result: RuleDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get details for a DEX Rule
   *
   * @example
   * ```ts
   * const rule = await client.zeroTrust.dex.rules.get(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '01a7362d577a6c3019a474fd6f485823' },
   * );
   * ```
   */
  get(
    ruleId: string,
    params: RuleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/dex/rules/${ruleId}`, options) as Core.APIPromise<{
        result: RuleGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class RuleListResponsesV4PagePagination extends V4PagePagination<RuleListResponse> {}

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
    data: TargetedTest.Data;

    enabled: boolean;

    name: string;

    test_id: string;
  }

  export namespace TargetedTest {
    /**
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    export interface Data {
      /**
       * The desired endpoint to test.
       */
      host: string;

      /**
       * The type of test.
       */
      kind: 'http' | 'traceroute';

      /**
       * The HTTP request method type.
       */
      method?: 'GET';
    }
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
    data: TargetedTest.Data;

    enabled: boolean;

    name: string;

    test_id: string;
  }

  export namespace TargetedTest {
    /**
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    export interface Data {
      /**
       * The desired endpoint to test.
       */
      host: string;

      /**
       * The type of test.
       */
      kind: 'http' | 'traceroute';

      /**
       * The HTTP request method type.
       */
      method?: 'GET';
    }
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
      data: TargetedTest.Data;

      enabled: boolean;

      name: string;

      test_id: string;
    }

    export namespace TargetedTest {
      /**
       * The configuration object which contains the details for the WARP client to
       * conduct the test.
       */
      export interface Data {
        /**
         * The desired endpoint to test.
         */
        host: string;

        /**
         * The type of test.
         */
        kind: 'http' | 'traceroute';

        /**
         * The HTTP request method type.
         */
        method?: 'GET';
      }
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
    data: TargetedTest.Data;

    enabled: boolean;

    name: string;

    test_id: string;
  }

  export namespace TargetedTest {
    /**
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    export interface Data {
      /**
       * The desired endpoint to test.
       */
      host: string;

      /**
       * The type of test.
       */
      kind: 'http' | 'traceroute';

      /**
       * The HTTP request method type.
       */
      method?: 'GET';
    }
  }
}

export interface RuleCreateParams {
  /**
   * Path param: unique identifier linked to an account in the API request path
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
   * Path param: unique identifier linked to an account in the API request path
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
   * Path param: unique identifier linked to an account in the API request path
   */
  account_id: string;

  /**
   * Query param: Filter results by rule name
   */
  name?: string;

  /**
   * Query param: Which property to sort results by
   */
  sort_by?: 'name' | 'created_at' | 'updated_at';

  /**
   * Query param: Sort direction for sort_by property
   */
  sort_order?: 'ASC' | 'DESC';
}

export interface RuleDeleteParams {
  /**
   * unique identifier linked to an account in the API request path
   */
  account_id: string;
}

export interface RuleGetParams {
  /**
   * unique identifier linked to an account in the API request path
   */
  account_id: string;
}

Rules.RuleListResponsesV4PagePagination = RuleListResponsesV4PagePagination;

export declare namespace Rules {
  export {
    type RuleCreateResponse as RuleCreateResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleGetResponse as RuleGetResponse,
    RuleListResponsesV4PagePagination as RuleListResponsesV4PagePagination,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleGetParams as RuleGetParams,
  };
}
