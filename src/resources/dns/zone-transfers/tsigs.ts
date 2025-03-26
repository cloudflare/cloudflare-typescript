// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class TSIGs extends APIResource {
  /**
   * Create TSIG.
   */
  create(params: TSIGCreateParams, options?: RequestOptions): APIPromise<TSIG> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/secondary_dns/tsigs`, {
        body,
        ...options,
      }) as APIPromise<{ result: TSIG }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify TSIG.
   */
  update(tsigID: string, params: TSIGUpdateParams, options?: RequestOptions): APIPromise<TSIG> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/secondary_dns/tsigs/${tsigID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: TSIG }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List TSIGs.
   */
  list(params: TSIGListParams, options?: RequestOptions): PagePromise<TSIGsSinglePage, TSIG> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/secondary_dns/tsigs`,
      SinglePage<TSIG>,
      options,
    );
  }

  /**
   * Delete TSIG.
   */
  delete(tsigID: string, params: TSIGDeleteParams, options?: RequestOptions): APIPromise<TSIGDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/secondary_dns/tsigs/${tsigID}`,
        options,
      ) as APIPromise<{ result: TSIGDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get TSIG.
   */
  get(tsigID: string, params: TSIGGetParams, options?: RequestOptions): APIPromise<TSIG> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/secondary_dns/tsigs/${tsigID}`, options) as APIPromise<{
        result: TSIG;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type TSIGsSinglePage = SinglePage<TSIG>;

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

export declare namespace TSIGs {
  export {
    type TSIG as TSIG,
    type TSIGDeleteResponse as TSIGDeleteResponse,
    type TSIGsSinglePage as TSIGsSinglePage,
    type TSIGCreateParams as TSIGCreateParams,
    type TSIGUpdateParams as TSIGUpdateParams,
    type TSIGListParams as TSIGListParams,
    type TSIGDeleteParams as TSIGDeleteParams,
    type TSIGGetParams as TSIGGetParams,
  };
}
