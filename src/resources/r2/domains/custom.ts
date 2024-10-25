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
    const { account_id, 'cf-r2-jurisdiction': cfR2Jurisdiction, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/r2/buckets/${bucketName}/domains/custom`, {
        body,
        ...options,
        headers: {
          ...(cfR2Jurisdiction?.toString() != null ?
            { 'cf-r2-jurisdiction': cfR2Jurisdiction?.toString() }
          : undefined),
          ...options?.headers,
        },
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
    const { account_id, 'cf-r2-jurisdiction': cfR2Jurisdiction, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/r2/buckets/${bucketName}/domains/custom/${domainName}`, {
        body,
        ...options,
        headers: {
          ...(cfR2Jurisdiction?.toString() != null ?
            { 'cf-r2-jurisdiction': cfR2Jurisdiction?.toString() }
          : undefined),
          ...options?.headers,
        },
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
    const { account_id, 'cf-r2-jurisdiction': cfR2Jurisdiction } = params;
    return (
      this._client.get(`/accounts/${account_id}/r2/buckets/${bucketName}/domains/custom`, {
        ...options,
        headers: {
          ...(cfR2Jurisdiction?.toString() != null ?
            { 'cf-r2-jurisdiction': cfR2Jurisdiction?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: CustomListResponse }>
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
    const { account_id, 'cf-r2-jurisdiction': cfR2Jurisdiction } = params;
    return (
      this._client.delete(`/accounts/${account_id}/r2/buckets/${bucketName}/domains/custom/${domainName}`, {
        ...options,
        headers: {
          ...(cfR2Jurisdiction?.toString() != null ?
            { 'cf-r2-jurisdiction': cfR2Jurisdiction?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: CustomDeleteResponse }>
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

  /**
   * Minimum TLS Version the custom domain will accept for incoming connections. If
   * not set, defaults to 1.0.
   */
  minTLS?: '1.0' | '1.1' | '1.2' | '1.3';
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

  /**
   * Minimum TLS Version the custom domain will accept for incoming connections. If
   * not set, defaults to 1.0.
   */
  minTLS?: '1.0' | '1.1' | '1.2' | '1.3';
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
     * Minimum TLS Version the custom domain will accept for incoming connections. If
     * not set, defaults to 1.0.
     */
    minTLS?: '1.0' | '1.1' | '1.2' | '1.3';

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
   * Body param: Zone ID of the custom domain
   */
  zoneId: string;

  /**
   * Body param: Whether to enable public bucket access at the custom domain. If
   * undefined, the domain will be enabled.
   */
  enabled?: boolean;

  /**
   * Body param: Minimum TLS Version the custom domain will accept for incoming
   * connections. If not set, defaults to 1.0.
   */
  minTLS?: '1.0' | '1.1' | '1.2' | '1.3';

  /**
   * Header param: The bucket jurisdiction
   */
  'cf-r2-jurisdiction'?: 'default' | 'eu' | 'fedramp';
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

  /**
   * Body param: Minimum TLS Version the custom domain will accept for incoming
   * connections. If not set, defaults to previous value.
   */
  minTLS?: '1.0' | '1.1' | '1.2' | '1.3';

  /**
   * Header param: The bucket jurisdiction
   */
  'cf-r2-jurisdiction'?: 'default' | 'eu' | 'fedramp';
}

export interface CustomListParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Header param: The bucket jurisdiction
   */
  'cf-r2-jurisdiction'?: 'default' | 'eu' | 'fedramp';
}

export interface CustomDeleteParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Header param: The bucket jurisdiction
   */
  'cf-r2-jurisdiction'?: 'default' | 'eu' | 'fedramp';
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
