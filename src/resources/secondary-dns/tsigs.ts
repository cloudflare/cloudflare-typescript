// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TSIGsAPI from 'cloudflare/resources/secondary-dns/tsigs';
import { SinglePage } from 'cloudflare/pagination';

export class TSIGs extends APIResource {
  /**
   * Create TSIG.
   */
  create(params: TSIGCreateParams, options?: Core.RequestOptions): Core.APIPromise<SecondaryDNSTSIG> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/secondary_dns/tsigs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SecondaryDNSTSIG }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify TSIG.
   */
  update(
    tsigId: string,
    params: TSIGUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecondaryDNSTSIG> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/secondary_dns/tsigs/${tsigId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SecondaryDNSTSIG }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List TSIGs.
   */
  list(
    params: TSIGListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SecondaryDnstsigsSinglePage, SecondaryDNSTSIG> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/secondary_dns/tsigs`,
      SecondaryDnstsigsSinglePage,
      options,
    );
  }

  /**
   * Delete TSIG.
   */
  delete(
    tsigId: string,
    params: TSIGDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TSIGDeleteResponse> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/secondary_dns/tsigs/${tsigId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: TSIGDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get TSIG.
   */
  get(
    tsigId: string,
    params: TSIGGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecondaryDNSTSIG> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/secondary_dns/tsigs/${tsigId}`, options) as Core.APIPromise<{
        result: SecondaryDNSTSIG;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SecondaryDnstsigsSinglePage extends SinglePage<SecondaryDNSTSIG> {}

export interface SecondaryDNSTSIG {
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

export interface UnnamedSchemaRefC3d6ffaf5dde0c570eaa72462c2ee738 {
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
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface TSIGGetParams {
  account_id: string;
}

export namespace TSIGs {
  export import SecondaryDNSTSIG = TSIGsAPI.SecondaryDNSTSIG;
  export import UnnamedSchemaRefC3d6ffaf5dde0c570eaa72462c2ee738 = TSIGsAPI.UnnamedSchemaRefC3d6ffaf5dde0c570eaa72462c2ee738;
  export import TSIGDeleteResponse = TSIGsAPI.TSIGDeleteResponse;
  export import SecondaryDnstsigsSinglePage = TSIGsAPI.SecondaryDnstsigsSinglePage;
  export import TSIGCreateParams = TSIGsAPI.TSIGCreateParams;
  export import TSIGUpdateParams = TSIGsAPI.TSIGUpdateParams;
  export import TSIGListParams = TSIGsAPI.TSIGListParams;
  export import TSIGDeleteParams = TSIGsAPI.TSIGDeleteParams;
  export import TSIGGetParams = TSIGsAPI.TSIGGetParams;
}
