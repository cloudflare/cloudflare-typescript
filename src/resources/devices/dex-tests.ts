// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DEXTestsAPI from 'cloudflare/resources/devices/dex-tests';

export class DEXTests extends APIResource {
  /**
   * Create a DEX test.
   */
  create(
    params: DEXTestCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DEXTestCreateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/devices/dex_tests`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DEXTestCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a DEX test.
   */
  update(
    dexTestId: string,
    params: DEXTestUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DEXTestUpdateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/devices/dex_tests/${dexTestId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DEXTestUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch all DEX tests.
   */
  list(
    params: DEXTestListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DEXTestListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/dex_tests`, options) as Core.APIPromise<{
        result: DEXTestListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a Device DEX test. Returns the remaining device dex tests for the
   * account.
   */
  delete(
    dexTestId: string,
    params: DEXTestDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DEXTestDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/devices/dex_tests/${dexTestId}`,
        options,
      ) as Core.APIPromise<{ result: DEXTestDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single DEX test.
   */
  get(
    dexTestId: string,
    params: DEXTestGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DEXTestGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/dex_tests/${dexTestId}`, options) as Core.APIPromise<{
        result: DEXTestGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DEXTestCreateResponse {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: DEXTestCreateResponse.Data;

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
}

export namespace DEXTestCreateResponse {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  export interface Data {
    /**
     * The desired endpoint to test.
     */
    host?: string;

    /**
     * The type of test.
     */
    kind?: string;

    /**
     * The HTTP request method type.
     */
    method?: string;
  }
}

export interface DEXTestUpdateResponse {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: DEXTestUpdateResponse.Data;

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
}

export namespace DEXTestUpdateResponse {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  export interface Data {
    /**
     * The desired endpoint to test.
     */
    host?: string;

    /**
     * The type of test.
     */
    kind?: string;

    /**
     * The HTTP request method type.
     */
    method?: string;
  }
}

export type DEXTestListResponse = Array<DEXTestListResponse.DEXTestListResponseItem>;

export namespace DEXTestListResponse {
  export interface DEXTestListResponseItem {
    /**
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    data: DEXTestListResponseItem.Data;

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
  }

  export namespace DEXTestListResponseItem {
    /**
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    export interface Data {
      /**
       * The desired endpoint to test.
       */
      host?: string;

      /**
       * The type of test.
       */
      kind?: string;

      /**
       * The HTTP request method type.
       */
      method?: string;
    }
  }
}

export type DEXTestDeleteResponse = Array<DEXTestDeleteResponse.DEXTestDeleteResponseItem>;

export namespace DEXTestDeleteResponse {
  export interface DEXTestDeleteResponseItem {
    /**
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    data: DEXTestDeleteResponseItem.Data;

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
  }

  export namespace DEXTestDeleteResponseItem {
    /**
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    export interface Data {
      /**
       * The desired endpoint to test.
       */
      host?: string;

      /**
       * The type of test.
       */
      kind?: string;

      /**
       * The HTTP request method type.
       */
      method?: string;
    }
  }
}

export interface DEXTestGetResponse {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: DEXTestGetResponse.Data;

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
}

export namespace DEXTestGetResponse {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  export interface Data {
    /**
     * The desired endpoint to test.
     */
    host?: string;

    /**
     * The type of test.
     */
    kind?: string;

    /**
     * The HTTP request method type.
     */
    method?: string;
  }
}

export interface DEXTestCreateParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param: The configuration object which contains the details for the WARP
   * client to conduct the test.
   */
  data: DEXTestCreateParams.Data;

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
}

export namespace DEXTestCreateParams {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  export interface Data {
    /**
     * The desired endpoint to test.
     */
    host?: string;

    /**
     * The type of test.
     */
    kind?: string;

    /**
     * The HTTP request method type.
     */
    method?: string;
  }
}

export interface DEXTestUpdateParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param: The configuration object which contains the details for the WARP
   * client to conduct the test.
   */
  data: DEXTestUpdateParams.Data;

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
}

export namespace DEXTestUpdateParams {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  export interface Data {
    /**
     * The desired endpoint to test.
     */
    host?: string;

    /**
     * The type of test.
     */
    kind?: string;

    /**
     * The HTTP request method type.
     */
    method?: string;
  }
}

export interface DEXTestListParams {
  account_id: unknown;
}

export interface DEXTestDeleteParams {
  account_id: unknown;
}

export interface DEXTestGetParams {
  account_id: unknown;
}

export namespace DEXTests {
  export import DEXTestCreateResponse = DEXTestsAPI.DEXTestCreateResponse;
  export import DEXTestUpdateResponse = DEXTestsAPI.DEXTestUpdateResponse;
  export import DEXTestListResponse = DEXTestsAPI.DEXTestListResponse;
  export import DEXTestDeleteResponse = DEXTestsAPI.DEXTestDeleteResponse;
  export import DEXTestGetResponse = DEXTestsAPI.DEXTestGetResponse;
  export import DEXTestCreateParams = DEXTestsAPI.DEXTestCreateParams;
  export import DEXTestUpdateParams = DEXTestsAPI.DEXTestUpdateParams;
  export import DEXTestListParams = DEXTestsAPI.DEXTestListParams;
  export import DEXTestDeleteParams = DEXTestsAPI.DEXTestDeleteParams;
  export import DEXTestGetParams = DEXTestsAPI.DEXTestGetParams;
}
