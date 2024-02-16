// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DEXTestsAPI from 'cloudflare/resources/devices/dex-tests';

export class DEXTests extends APIResource {
  /**
   * Update a DEX test.
   */
  update(
    identifier: unknown,
    uuid: string,
    body: DEXTestUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DEXTestUpdateResponse | null> {
    return (
      this._client.put(`/accounts/${identifier}/devices/dex_tests/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DEXTestUpdateResponse | null }>
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
   * Create a DEX test.
   */
  deviceDEXTestCreateDeviceDEXTest(
    identifier: unknown,
    body: DEXTestDeviceDEXTestCreateDeviceDEXTestParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DEXTestDeviceDEXTestCreateDeviceDEXTestResponse | null> {
    return (
      this._client.post(`/accounts/${identifier}/devices/dex_tests`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DEXTestDeviceDEXTestCreateDeviceDEXTestResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch all DEX tests.
   */
  deviceDEXTestDetails(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DEXTestDeviceDEXTestDetailsResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/dex_tests`, options) as Core.APIPromise<{
        result: DEXTestDeviceDEXTestDetailsResponse | null;
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

export interface DEXTestDeviceDEXTestCreateDeviceDEXTestResponse {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: DEXTestDeviceDEXTestCreateDeviceDEXTestResponse.Data;

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

export namespace DEXTestDeviceDEXTestCreateDeviceDEXTestResponse {
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

export type DEXTestDeviceDEXTestDetailsResponse =
  Array<DEXTestDeviceDEXTestDetailsResponse.DEXTestDeviceDEXTestDetailsResponseItem>;

export namespace DEXTestDeviceDEXTestDetailsResponse {
  export interface DEXTestDeviceDEXTestDetailsResponseItem {
    /**
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    data: DEXTestDeviceDEXTestDetailsResponseItem.Data;

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

  export namespace DEXTestDeviceDEXTestDetailsResponseItem {
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

export interface DEXTestUpdateParams {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: DEXTestUpdateParams.Data;

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

export interface DEXTestDeviceDEXTestCreateDeviceDEXTestParams {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: DEXTestDeviceDEXTestCreateDeviceDEXTestParams.Data;

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

export namespace DEXTestDeviceDEXTestCreateDeviceDEXTestParams {
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
  export import DEXTestUpdateResponse = DEXTestsAPI.DEXTestUpdateResponse;
  export import DEXTestDeleteResponse = DEXTestsAPI.DEXTestDeleteResponse;
  export import DEXTestDeviceDEXTestCreateDeviceDEXTestResponse = DEXTestsAPI.DEXTestDeviceDEXTestCreateDeviceDEXTestResponse;
  export import DEXTestDeviceDEXTestDetailsResponse = DEXTestsAPI.DEXTestDeviceDEXTestDetailsResponse;
  export import DEXTestGetResponse = DEXTestsAPI.DEXTestGetResponse;
  export import DEXTestUpdateParams = DEXTestsAPI.DEXTestUpdateParams;
  export import DEXTestDeviceDEXTestCreateDeviceDEXTestParams = DEXTestsAPI.DEXTestDeviceDEXTestCreateDeviceDEXTestParams;
}
