// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TSIGsAPI from 'cloudflare/resources/secondary-dns/tsigs';

export class TSIGs extends APIResource {
  /**
   * Create TSIG.
   */
  create(
    accountId: unknown,
    body: TSIGCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TSIGCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/secondary_dns/tsigs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TSIGCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify TSIG.
   */
  update(
    accountId: unknown,
    tsigId: unknown,
    body: TSIGUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TSIGUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/secondary_dns/tsigs/${tsigId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TSIGUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List TSIGs.
   */
  list(accountId: unknown, options?: Core.RequestOptions): Core.APIPromise<TSIGListResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/secondary_dns/tsigs`, options) as Core.APIPromise<{
        result: TSIGListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete TSIG.
   */
  delete(
    accountId: unknown,
    tsigId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TSIGDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/secondary_dns/tsigs/${tsigId}`,
        options,
      ) as Core.APIPromise<{ result: TSIGDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get TSIG.
   */
  get(accountId: unknown, tsigId: unknown, options?: Core.RequestOptions): Core.APIPromise<TSIGGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/secondary_dns/tsigs/${tsigId}`, options) as Core.APIPromise<{
        result: TSIGGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TSIGCreateResponse {
  id: unknown;

  /**
   * TSIG algorithm.
   */
  algo: string;

  /**
   * TSIG key name.
   */
  name: string;

  /**
   * TSIG secret.
   */
  secret: string;
}

export interface TSIGUpdateResponse {
  id: unknown;

  /**
   * TSIG algorithm.
   */
  algo: string;

  /**
   * TSIG key name.
   */
  name: string;

  /**
   * TSIG secret.
   */
  secret: string;
}

export type TSIGListResponse = Array<TSIGListResponse.TSIGListResponseItem>;

export namespace TSIGListResponse {
  export interface TSIGListResponseItem {
    id: unknown;

    /**
     * TSIG algorithm.
     */
    algo: string;

    /**
     * TSIG key name.
     */
    name: string;

    /**
     * TSIG secret.
     */
    secret: string;
  }
}

export interface TSIGDeleteResponse {
  id?: unknown;
}

export interface TSIGGetResponse {
  id: unknown;

  /**
   * TSIG algorithm.
   */
  algo: string;

  /**
   * TSIG key name.
   */
  name: string;

  /**
   * TSIG secret.
   */
  secret: string;
}

export interface TSIGCreateParams {
  /**
   * TSIG algorithm.
   */
  algo: string;

  /**
   * TSIG key name.
   */
  name: string;

  /**
   * TSIG secret.
   */
  secret: string;
}

export interface TSIGUpdateParams {
  /**
   * TSIG algorithm.
   */
  algo: string;

  /**
   * TSIG key name.
   */
  name: string;

  /**
   * TSIG secret.
   */
  secret: string;
}

export namespace TSIGs {
  export import TSIGCreateResponse = TSIGsAPI.TSIGCreateResponse;
  export import TSIGUpdateResponse = TSIGsAPI.TSIGUpdateResponse;
  export import TSIGListResponse = TSIGsAPI.TSIGListResponse;
  export import TSIGDeleteResponse = TSIGsAPI.TSIGDeleteResponse;
  export import TSIGGetResponse = TSIGsAPI.TSIGGetResponse;
  export import TSIGCreateParams = TSIGsAPI.TSIGCreateParams;
  export import TSIGUpdateParams = TSIGsAPI.TSIGUpdateParams;
}
