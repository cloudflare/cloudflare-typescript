// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DEXTestsAPI from 'cloudflare/resources/devices/dex-tests';

export class DEXTests extends APIResource {
  /**
   * Create a DEX test.
   */
  create(
    identifier: unknown,
    body: DEXTestCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DEXTestCreateResponse | null> {
    return (
      this._client.post(`/accounts/${identifier}/devices/dex_tests`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DEXTestCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch all DEX tests.
   */
  list(identifier: unknown, options?: Core.RequestOptions): Core.APIPromise<DEXTestListResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/dex_tests`, options) as Core.APIPromise<{
        result: DEXTestListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a Device DEX test. Returns the remaining device dex tests for the
   * account.
   */
  delete(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DEXTestDeleteResponse | null> {
    return (
      this._client.delete(`/accounts/${identifier}/devices/dex_tests/${uuid}`, options) as Core.APIPromise<{
        result: DEXTestDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single DEX test.
   */
  get(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DEXTestGetResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/dex_tests/${uuid}`, options) as Core.APIPromise<{
        result: DEXTestGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a DEX test.
   */
  replace(
    identifier: unknown,
    uuid: string,
    body: DEXTestReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DEXTestReplaceResponse | null> {
    return (
      this._client.put(`/accounts/${identifier}/devices/dex_tests/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DEXTestReplaceResponse | null }>
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

export interface DEXTestReplaceResponse {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: DEXTestReplaceResponse.Data;

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

export namespace DEXTestReplaceResponse {
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
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: DEXTestCreateParams.Data;

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

export interface DEXTestReplaceParams {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: DEXTestReplaceParams.Data;

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

export namespace DEXTestReplaceParams {
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

export namespace DEXTests {
  export import DEXTestCreateResponse = DEXTestsAPI.DEXTestCreateResponse;
  export import DEXTestListResponse = DEXTestsAPI.DEXTestListResponse;
  export import DEXTestDeleteResponse = DEXTestsAPI.DEXTestDeleteResponse;
  export import DEXTestGetResponse = DEXTestsAPI.DEXTestGetResponse;
  export import DEXTestReplaceResponse = DEXTestsAPI.DEXTestReplaceResponse;
  export import DEXTestCreateParams = DEXTestsAPI.DEXTestCreateParams;
  export import DEXTestReplaceParams = DEXTestsAPI.DEXTestReplaceParams;
}
