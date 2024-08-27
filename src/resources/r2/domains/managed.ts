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
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/r2/buckets/${bucketName}/domains/managed`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ManagedUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets state of public access over the bucket's R2-managed (r2.dev) domain.
   */
  get(
    bucketName: string,
    params: ManagedGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ManagedGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/r2/buckets/${bucketName}/domains/managed`,
        options,
      ) as Core.APIPromise<{ result: ManagedGetResponse }>
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

export interface ManagedGetResponse {
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
}

export interface ManagedGetParams {
  /**
   * Account ID
   */
  account_id: string;
}

export namespace Managed {
  export import ManagedUpdateResponse = ManagedAPI.ManagedUpdateResponse;
  export import ManagedGetResponse = ManagedAPI.ManagedGetResponse;
  export import ManagedUpdateParams = ManagedAPI.ManagedUpdateParams;
  export import ManagedGetParams = ManagedAPI.ManagedGetParams;
}
