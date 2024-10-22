// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ManagedAPI from './managed';

export class Managed extends APIResource {
  /**
   * Updates state of public access over the bucket's R2-managed (r2.dev) domain.
   */
  update(
    bucketName: string,
    params: ManagedUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ManagedUpdateResponse> {
    const { account_id, 'cf-r2-jurisdiction': cfR2Jurisdiction, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/r2/buckets/${bucketName}/domains/managed`, {
        body,
        ...options,
        headers: {
          ...(cfR2Jurisdiction?.toString() != null ?
            { 'cf-r2-jurisdiction': cfR2Jurisdiction?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: ManagedUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets state of public access over the bucket's R2-managed (r2.dev) domain.
   */
  list(
    bucketName: string,
    params: ManagedListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ManagedListResponse> {
    const { account_id, 'cf-r2-jurisdiction': cfR2Jurisdiction } = params;
    return (
      this._client.get(`/accounts/${account_id}/r2/buckets/${bucketName}/domains/managed`, {
        ...options,
        headers: {
          ...(cfR2Jurisdiction?.toString() != null ?
            { 'cf-r2-jurisdiction': cfR2Jurisdiction?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: ManagedListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ManagedUpdateResponse {
  /**
   * Bucket ID
   */
  bucketId: string;

  /**
   * Domain name of the bucket's r2.dev domain
   */
  domain: string;

  /**
   * Whether this bucket is publicly accessible at the r2.dev domain
   */
  enabled: boolean;
}

export interface ManagedListResponse {
  /**
   * Bucket ID
   */
  bucketId: string;

  /**
   * Domain name of the bucket's r2.dev domain
   */
  domain: string;

  /**
   * Whether this bucket is publicly accessible at the r2.dev domain
   */
  enabled: boolean;
}

export interface ManagedUpdateParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Body param: Whether to enable public bucket access at the r2.dev domain
   */
  enabled: boolean;

  /**
   * Header param: The bucket jurisdiction
   */
  'cf-r2-jurisdiction'?: 'default' | 'eu' | 'fedramp';
}

export interface ManagedListParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Header param: The bucket jurisdiction
   */
  'cf-r2-jurisdiction'?: 'default' | 'eu' | 'fedramp';
}

export namespace Managed {
  export import ManagedUpdateResponse = ManagedAPI.ManagedUpdateResponse;
  export import ManagedListResponse = ManagedAPI.ManagedListResponse;
  export import ManagedUpdateParams = ManagedAPI.ManagedUpdateParams;
  export import ManagedListParams = ManagedAPI.ManagedListParams;
}
