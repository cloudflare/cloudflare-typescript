// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as CustomAPI from './custom';

export class Custom extends APIResource {
  /**
   * Register a new custom domain for an existing R2 bucket.
   */
  create(
    bucketName: string,
    params: CustomCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/r2/buckets/${bucketName}/domains/custom`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CustomCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edit the configuration for a custom domain on an existing R2 bucket.
   */
  update(
    bucketName: string,
    domainName: string,
    params: CustomUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/r2/buckets/${bucketName}/domains/custom/${domainName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CustomUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets a list of all custom domains registered with an existing R2 bucket.
   */
  list(
    bucketName: string,
    params: CustomListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomListResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/r2/buckets/${bucketName}/domains/custom`,
        options,
      ) as Core.APIPromise<{ result: CustomListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove custom domain registration from an existing R2 bucket
   */
  delete(
    bucketName: string,
    domainName: string,
    params: CustomDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/r2/buckets/${bucketName}/domains/custom/${domainName}`,
        options,
      ) as Core.APIPromise<{ result: CustomDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CustomCreateResponse {
  /**
   * Domain name of the affected custom domain
   */
  domain: string;

  /**
   * Whether this bucket is publicly accessible at the specified custom domain
   */
  enabled: boolean;
}

export interface CustomUpdateResponse {
  /**
   * Domain name of the affected custom domain
   */
  domain: string;

  /**
   * Whether this bucket is publicly accessible at the specified custom domain
   */
  enabled?: boolean;
}

export interface CustomListResponse {
  domains: Array<CustomListResponse.Domain>;
}

export namespace CustomListResponse {
  export interface Domain {
    /**
     * Domain name of the custom domain to be added
     */
    domain: string;

    /**
     * Whether this bucket is publicly accessible at the specified custom domain
     */
    enabled: boolean;

    status: Domain.Status;

    /**
     * Zone ID of the custom domain resides in
     */
    zoneId?: string;

    /**
     * Zone that the custom domain resides in
     */
    zoneName?: string;
  }

  export namespace Domain {
    export interface Status {
      /**
       * Ownership status of the domain
       */
      ownership: 'pending' | 'active' | 'deactivated' | 'blocked' | 'error' | 'unknown';

      /**
       * SSL certificate status
       */
      ssl: 'initializing' | 'pending' | 'active' | 'deactivated' | 'error' | 'unknown';
    }
  }
}

export interface CustomDeleteResponse {
  /**
   * Name of the removed custom domain
   */
  domain: string;
}

export interface CustomCreateParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Body param: Name of the custom domain to be added
   */
  domain: string;

  /**
   * Body param: Zone name of the custom domain. Note that `zoneName` must be a
   * suffix of `domain`.
   */
  zoneName: string;

  /**
   * Body param: Zone tag of the custom domain
   */
  zoneTag: string;

  /**
   * Body param: Whether to enable public bucket access at the custom domain. If
   * undefined, the domain will be enabled.
   */
  enabled?: boolean;

  /**
   * Body param: Zone ID of the custom domain
   */
  zoneId?: string;
}

export interface CustomUpdateParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Body param: Whether to enable public bucket access at the specified custom
   * domain
   */
  enabled?: boolean;
}

export interface CustomListParams {
  /**
   * Account ID
   */
  account_id: string;
}

export interface CustomDeleteParams {
  /**
   * Account ID
   */
  account_id: string;
}

export namespace Custom {
  export import CustomCreateResponse = CustomAPI.CustomCreateResponse;
  export import CustomUpdateResponse = CustomAPI.CustomUpdateResponse;
  export import CustomListResponse = CustomAPI.CustomListResponse;
  export import CustomDeleteResponse = CustomAPI.CustomDeleteResponse;
  export import CustomCreateParams = CustomAPI.CustomCreateParams;
  export import CustomUpdateParams = CustomAPI.CustomUpdateParams;
  export import CustomListParams = CustomAPI.CustomListParams;
  export import CustomDeleteParams = CustomAPI.CustomDeleteParams;
}
