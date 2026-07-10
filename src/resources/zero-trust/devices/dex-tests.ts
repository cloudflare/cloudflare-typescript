// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseDEXTests extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'dexTests'] = Object.freeze([
    'zeroTrust',
    'devices',
    'dexTests',
  ] as const);

  /**
   * Create a DEX test.
   *
   * @example
   * ```ts
   * const schemaHTTP =
   *   await client.zeroTrust.devices.dexTests.create({
   *     account_id: '01a7362d577a6c3019a474fd6f485823',
   *     data: {
   *       host: 'https://dash.cloudflare.com',
   *       kind: 'http',
   *     },
   *     enabled: true,
   *     interval: '30m',
   *     name: 'HTTP dash health check',
   *   });
   * ```
   */
  create(params: DEXTestCreateParams, options?: RequestOptions): APIPromise<SchemaHTTP> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/dex/devices/dex_tests`, {
        body,
        ...options,
      }) as APIPromise<{ result: SchemaHTTP }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a DEX test.
   *
   * @example
   * ```ts
   * const schemaHTTP =
   *   await client.zeroTrust.devices.dexTests.update(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     {
   *       account_id: '01a7362d577a6c3019a474fd6f485823',
   *       data: {
   *         host: 'https://dash.cloudflare.com',
   *         kind: 'http',
   *       },
   *       enabled: true,
   *       interval: '30m',
   *       name: 'HTTP dash health check',
   *     },
   *   );
   * ```
   */
  update(dexTestID: string, params: DEXTestUpdateParams, options?: RequestOptions): APIPromise<SchemaHTTP> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/dex/devices/dex_tests/${dexTestID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: SchemaHTTP }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch all DEX tests.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const schemaHTTP of client.zeroTrust.devices.dexTests.list(
   *   { account_id: '01a7362d577a6c3019a474fd6f485823' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: DEXTestListParams,
    options?: RequestOptions,
  ): PagePromise<SchemaHTTPSV4PagePaginationArray, SchemaHTTP> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/dex/devices/dex_tests`,
      V4PagePaginationArray<SchemaHTTP>,
      { query, ...options },
    );
  }

  /**
   * Delete a Device DEX test. Returns the remaining device dex tests for the
   * account.
   *
   * @example
   * ```ts
   * const dexTest =
   *   await client.zeroTrust.devices.dexTests.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '01a7362d577a6c3019a474fd6f485823' },
   *   );
   * ```
   */
  delete(
    dexTestID: string,
    params: DEXTestDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DEXTestDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/dex/devices/dex_tests/${dexTestID}`,
        options,
      ) as APIPromise<{ result: DEXTestDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single DEX test.
   *
   * @example
   * ```ts
   * const schemaHTTP =
   *   await client.zeroTrust.devices.dexTests.get(
   *     '372e67954025e0ba6aaa6d586b9e0b59',
   *     { account_id: '01a7362d577a6c3019a474fd6f485823' },
   *   );
   * ```
   */
  get(dexTestID: string, params: DEXTestGetParams, options?: RequestOptions): APIPromise<SchemaHTTP> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/dex/devices/dex_tests/${dexTestID}`,
        options,
      ) as APIPromise<{ result: SchemaHTTP }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class DEXTests extends BaseDEXTests {}

export type SchemaHTTPSV4PagePaginationArray = V4PagePaginationArray<SchemaHTTP>;

/**
 * The configuration object which contains the details for the WARP client to
 * conduct the test.
 */
export interface SchemaData {
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

/**
 * The configuration object which contains the details for the WARP client to
 * conduct the test.
 */
export interface SchemaDataParam {
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

export interface SchemaHTTP {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: SchemaData;

  /**
   * Determines whether or not the test is active.
   */
  enabled: boolean;

  /**
   * How often the test will run.
   */
  interval: string;

  /**
   * The name of the DEX test. Must be unique.
   */
  name: string;

  /**
   * Additional details about the test.
   */
  description?: string;

  /**
   * DEX rules targeted by this test
   */
  target_policies?: Array<SchemaHTTP.TargetPolicy>;

  targeted?: boolean;

  /**
   * The unique identifier for the test.
   */
  test_id?: string;
}

export namespace SchemaHTTP {
  export interface TargetPolicy {
    /**
     * The id of the DEX rule.
     */
    id: string;

    /**
     * Whether the DEX rule is the account default.
     */
    default?: boolean;

    /**
     * The name of the DEX rule.
     */
    name?: string;
  }
}

export interface DEXTestDeleteResponse {
  dex_tests?: Array<SchemaHTTP>;
}

export interface DEXTestCreateParams {
  /**
   * Path param: Unique identifier linked to an account.
   */
  account_id: string;

  /**
   * Body param: The configuration object which contains the details for the WARP
   * client to conduct the test.
   */
  data: SchemaDataParam;

  /**
   * Body param: Determines whether or not the test is active.
   */
  enabled: boolean;

  /**
   * Body param: How often the test will run.
   */
  interval: string;

  /**
   * Body param: The name of the DEX test. Must be unique.
   */
  name: string;

  /**
   * Body param: Additional details about the test.
   */
  description?: string;

  /**
   * Body param: DEX rules targeted by this test
   */
  target_policies?: Array<DEXTestCreateParams.TargetPolicy>;

  /**
   * Body param
   */
  targeted?: boolean;
}

export namespace DEXTestCreateParams {
  export interface TargetPolicy {
    /**
     * The id of the DEX rule.
     */
    id: string;

    /**
     * Whether the DEX rule is the account default.
     */
    default?: boolean;

    /**
     * The name of the DEX rule.
     */
    name?: string;
  }
}

export interface DEXTestUpdateParams {
  /**
   * Path param: Unique identifier linked to an account.
   */
  account_id: string;

  /**
   * Body param: The configuration object which contains the details for the WARP
   * client to conduct the test.
   */
  data: SchemaDataParam;

  /**
   * Body param: Determines whether or not the test is active.
   */
  enabled: boolean;

  /**
   * Body param: How often the test will run.
   */
  interval: string;

  /**
   * Body param: The name of the DEX test. Must be unique.
   */
  name: string;

  /**
   * Body param: Additional details about the test.
   */
  description?: string;

  /**
   * Body param: DEX rules targeted by this test
   */
  target_policies?: Array<DEXTestUpdateParams.TargetPolicy>;

  /**
   * Body param
   */
  targeted?: boolean;
}

export namespace DEXTestUpdateParams {
  export interface TargetPolicy {
    /**
     * The id of the DEX rule.
     */
    id: string;

    /**
     * Whether the DEX rule is the account default.
     */
    default?: boolean;

    /**
     * The name of the DEX rule.
     */
    name?: string;
  }
}

export interface DEXTestListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Unique identifier linked to an account.
   */
  account_id: string;

  /**
   * Query param: Filter by test type.
   */
  kind?: 'http' | 'traceroute';

  /**
   * Query param: Filter by test name.
   */
  testName?: string;
}

export interface DEXTestDeleteParams {
  /**
   * Unique identifier linked to an account.
   */
  account_id: string;
}

export interface DEXTestGetParams {
  /**
   * Unique identifier linked to an account.
   */
  account_id: string;
}

export declare namespace DEXTests {
  export {
    type SchemaData as SchemaData,
    type SchemaHTTP as SchemaHTTP,
    type DEXTestDeleteResponse as DEXTestDeleteResponse,
    type SchemaHTTPSV4PagePaginationArray as SchemaHTTPSV4PagePaginationArray,
    type DEXTestCreateParams as DEXTestCreateParams,
    type DEXTestUpdateParams as DEXTestUpdateParams,
    type DEXTestListParams as DEXTestListParams,
    type DEXTestDeleteParams as DEXTestDeleteParams,
    type DEXTestGetParams as DEXTestGetParams,
  };
}
