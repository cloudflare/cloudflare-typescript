// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TSIGsAPI from 'cloudflare/resources/secondary-dns/tsigs';

export class TSIGs extends APIResource {
  /**
   * Create TSIG.
   */
  create(params: TSIGCreateParams, options?: Core.RequestOptions): Core.APIPromise<TSIGCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/secondary_dns/tsigs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TSIGCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify TSIG.
   */
  update(
    tsigId: unknown,
    params: TSIGUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TSIGUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/secondary_dns/tsigs/${tsigId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TSIGUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List TSIGs.
   */
  list(params: TSIGListParams, options?: Core.RequestOptions): Core.APIPromise<TSIGListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/secondary_dns/tsigs`, options) as Core.APIPromise<{
        result: TSIGListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete TSIG.
   */
  delete(
    tsigId: unknown,
    params: TSIGDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TSIGDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/secondary_dns/tsigs/${tsigId}`,
        options,
      ) as Core.APIPromise<{ result: TSIGDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get TSIG.
   */
  get(
    tsigId: unknown,
    params: TSIGGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TSIGGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/secondary_dns/tsigs/${tsigId}`, options) as Core.APIPromise<{
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
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param: TSIG algorithm.
   */
  algo: string;

  /**
   * Body param: TSIG key name.
   */
  name: string;

  /**
   * Body param: TSIG secret.
   */
  secret: string;
}

export interface TSIGUpdateParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param: TSIG algorithm.
   */
  algo: string;

  /**
   * Body param: TSIG key name.
   */
  name: string;

  /**
   * Body param: TSIG secret.
   */
  secret: string;
}

export interface TSIGListParams {
  account_id: unknown;
}

export interface TSIGDeleteParams {
  account_id: unknown;
}

export interface TSIGGetParams {
  account_id: unknown;
}

export namespace TSIGs {
  export import TSIGCreateResponse = TSIGsAPI.TSIGCreateResponse;
  export import TSIGUpdateResponse = TSIGsAPI.TSIGUpdateResponse;
  export import TSIGListResponse = TSIGsAPI.TSIGListResponse;
  export import TSIGDeleteResponse = TSIGsAPI.TSIGDeleteResponse;
  export import TSIGGetResponse = TSIGsAPI.TSIGGetResponse;
  export import TSIGCreateParams = TSIGsAPI.TSIGCreateParams;
  export import TSIGUpdateParams = TSIGsAPI.TSIGUpdateParams;
  export import TSIGListParams = TSIGsAPI.TSIGListParams;
  export import TSIGDeleteParams = TSIGsAPI.TSIGDeleteParams;
  export import TSIGGetParams = TSIGsAPI.TSIGGetParams;
}
