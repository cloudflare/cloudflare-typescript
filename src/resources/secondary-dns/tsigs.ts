// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TSIGsAPI from './tsigs';
import { SinglePage } from '../../pagination';

export class TSIGs extends APIResource {
  /**
   * Create TSIG.
   */
  create(params: TSIGCreateParams, options?: Core.RequestOptions): Core.APIPromise<TSIG> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/secondary_dns/tsigs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TSIG }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify TSIG.
   */
  update(tsigId: string, params: TSIGUpdateParams, options?: Core.RequestOptions): Core.APIPromise<TSIG> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/secondary_dns/tsigs/${tsigId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TSIG }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List TSIGs.
   */
  list(params: TSIGListParams, options?: Core.RequestOptions): Core.PagePromise<TSIGsSinglePage, TSIG> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/secondary_dns/tsigs`, TSIGsSinglePage, options);
  }

  /**
   * Delete TSIG.
   */
  delete(
    tsigId: string,
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
  get(tsigId: string, params: TSIGGetParams, options?: Core.RequestOptions): Core.APIPromise<TSIG> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/secondary_dns/tsigs/${tsigId}`, options) as Core.APIPromise<{
        result: TSIG;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class TSIGsSinglePage extends SinglePage<TSIG> {}

export interface TSIG {
  id: string;

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

export interface TSIGDeleteResponse {
  id?: string;
}

export interface TSIGCreateParams {
  /**
   * Path param:
   */
  account_id: string;

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
  account_id: string;

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
  account_id: string;
}

export interface TSIGDeleteParams {
  account_id: string;
}

export interface TSIGGetParams {
  account_id: string;
}

export namespace TSIGs {
  export import TSIG = TSIGsAPI.TSIG;
  export import TSIGDeleteResponse = TSIGsAPI.TSIGDeleteResponse;
  export import TSIGsSinglePage = TSIGsAPI.TSIGsSinglePage;
  export import TSIGCreateParams = TSIGsAPI.TSIGCreateParams;
  export import TSIGUpdateParams = TSIGsAPI.TSIGUpdateParams;
  export import TSIGListParams = TSIGsAPI.TSIGListParams;
  export import TSIGDeleteParams = TSIGsAPI.TSIGDeleteParams;
  export import TSIGGetParams = TSIGsAPI.TSIGGetParams;
}
