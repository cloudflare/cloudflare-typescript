// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DEXTestsAPI from 'cloudflare/resources/zero-trust/devices/dex-tests';
import { SinglePage } from 'cloudflare/pagination';

export class DEXTests extends APIResource {
  /**
   * Create a DEX test.
   */
  create(
    params: DEXTestCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DEXTestSchemasHTTP | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/devices/dex_tests`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DEXTestSchemasHTTP | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a DEX test.
   */
  update(
    dexTestId: string,
    params: DEXTestUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DEXTestSchemasHTTP | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/devices/dex_tests/${dexTestId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DEXTestSchemasHTTP | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch all DEX tests.
   */
  list(
    params: DEXTestListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DEXTestSchemasHTTPSSinglePage, DEXTestSchemasHTTP> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/dex_tests`,
      DEXTestSchemasHTTPSSinglePage,
      options,
    );
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
  ): Core.APIPromise<DEXTestSchemasHTTP | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/dex_tests/${dexTestId}`, options) as Core.APIPromise<{
        result: DEXTestSchemasHTTP | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DEXTestSchemasHTTPSSinglePage extends SinglePage<DEXTestSchemasHTTP> {}

export interface DEXTestSchemasHTTP {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: DEXTestSchemasHTTP.Data;

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

export namespace DEXTestSchemasHTTP {
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

export interface UnnamedSchemaRef15fd6ef0641450fd873ffb71715170c9 {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: UnnamedSchemaRef15fd6ef0641450fd873ffb71715170c9.Data;

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

export namespace UnnamedSchemaRef15fd6ef0641450fd873ffb71715170c9 {
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

export type DEXTestDeleteResponse = Array<DEXTestSchemasHTTP>;

export interface DEXTestCreateParams {
  /**
   * Path param:
   */
  account_id: string;

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
  account_id: string;

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
  account_id: string;
}

export interface DEXTestDeleteParams {
  account_id: string;
}

export interface DEXTestGetParams {
  account_id: string;
}

export namespace DEXTests {
  export import DEXTestSchemasHTTP = DEXTestsAPI.DEXTestSchemasHTTP;
  export import UnnamedSchemaRef15fd6ef0641450fd873ffb71715170c9 = DEXTestsAPI.UnnamedSchemaRef15fd6ef0641450fd873ffb71715170c9;
  export import DEXTestDeleteResponse = DEXTestsAPI.DEXTestDeleteResponse;
  export import DEXTestSchemasHTTPSSinglePage = DEXTestsAPI.DEXTestSchemasHTTPSSinglePage;
  export import DEXTestCreateParams = DEXTestsAPI.DEXTestCreateParams;
  export import DEXTestUpdateParams = DEXTestsAPI.DEXTestUpdateParams;
  export import DEXTestListParams = DEXTestsAPI.DEXTestListParams;
  export import DEXTestDeleteParams = DEXTestsAPI.DEXTestDeleteParams;
  export import DEXTestGetParams = DEXTestsAPI.DEXTestGetParams;
}
