// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { APIPromise } from '../../../../api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Custom extends APIResource {
  /**
   * Register a new custom domain for an existing R2 bucket.
   */
  create(
    bucketName: string,
    params: CustomCreateParams,
    options?: RequestOptions,
  ): APIPromise<CustomCreateResponse> {
    const { account_id, jurisdiction, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/r2/buckets/${bucketName}/domains/custom`, {
        body,
        ...options,
        headers: buildHeaders([
          {
            ...(jurisdiction?.toString() != null ?
              { 'cf-r2-jurisdiction': jurisdiction?.toString() }
            : undefined),
          },
          options?.headers,
        ]),
      }) as APIPromise<{ result: CustomCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets a list of all custom domains registered with an existing R2 bucket.
   */
  list(
    bucketName: string,
    params: CustomListParams,
    options?: RequestOptions,
  ): APIPromise<CustomListResponse> {
    const { account_id, jurisdiction } = params;
    return (
      this._client.get(path`/accounts/${account_id}/r2/buckets/${bucketName}/domains/custom`, {
        ...options,
        headers: buildHeaders([
          {
            ...(jurisdiction?.toString() != null ?
              { 'cf-r2-jurisdiction': jurisdiction?.toString() }
            : undefined),
          },
          options?.headers,
        ]),
      }) as APIPromise<{ result: CustomListResponse }>
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
   * Body param: Whether to enable public bucket access at the custom domain. If
   * undefined, the domain will be enabled.
   */
  enabled: boolean;

  /**
   * Body param: Zone ID of the custom domain
   */
  zoneId: string;

  /**
   * Body param: Minimum TLS Version the custom domain will accept for incoming
   * connections. If not set, defaults to 1.0.
   */
  minTLS?: '1.0' | '1.1' | '1.2' | '1.3';

  /**
   * Header param: The bucket jurisdiction
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
}

export interface CustomListParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Header param: The bucket jurisdiction
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
}

export declare namespace Custom {
  export {
    type CustomCreateResponse as CustomCreateResponse,
    type CustomListResponse as CustomListResponse,
    type CustomCreateParams as CustomCreateParams,
    type CustomListParams as CustomListParams,
  };
}
