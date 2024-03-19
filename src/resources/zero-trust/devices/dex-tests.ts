// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DEXTestsAPI from 'cloudflare/resources/zero-trust/devices/dex-tests';

export class DEXTests extends APIResource {
  /**
   * Create a DEX test.
   */
  create(
    params: DEXTestCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TeamsDevicesDeviceDEXTestSchemasHTTP | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/devices/dex_tests`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TeamsDevicesDeviceDEXTestSchemasHTTP | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a DEX test.
   */
  update(
    dexTestId: string,
    params: DEXTestUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TeamsDevicesDeviceDEXTestSchemasHTTP | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/devices/dex_tests/${dexTestId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TeamsDevicesDeviceDEXTestSchemasHTTP | null }>
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
  ): Core.APIPromise<TeamsDevicesDeviceDEXTestSchemasHTTP | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/dex_tests/${dexTestId}`, options) as Core.APIPromise<{
        result: TeamsDevicesDeviceDEXTestSchemasHTTP | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TeamsDevicesDeviceDEXTestSchemasHTTP {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: TeamsDevicesDeviceDEXTestSchemasHTTP.Data;

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

export namespace TeamsDevicesDeviceDEXTestSchemasHTTP {
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

export type DEXTestListResponse = Array<TeamsDevicesDeviceDEXTestSchemasHTTP>;

export type DEXTestDeleteResponse = Array<TeamsDevicesDeviceDEXTestSchemasHTTP>;

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
  export import TeamsDevicesDeviceDEXTestSchemasHTTP = DEXTestsAPI.TeamsDevicesDeviceDEXTestSchemasHTTP;
  export import DEXTestListResponse = DEXTestsAPI.DEXTestListResponse;
  export import DEXTestDeleteResponse = DEXTestsAPI.DEXTestDeleteResponse;
  export import DEXTestCreateParams = DEXTestsAPI.DEXTestCreateParams;
  export import DEXTestUpdateParams = DEXTestsAPI.DEXTestUpdateParams;
  export import DEXTestListParams = DEXTestsAPI.DEXTestListParams;
  export import DEXTestDeleteParams = DEXTestsAPI.DEXTestDeleteParams;
  export import DEXTestGetParams = DEXTestsAPI.DEXTestGetParams;
}
