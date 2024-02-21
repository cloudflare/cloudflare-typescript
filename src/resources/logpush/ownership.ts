// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OwnershipAPI from 'cloudflare/resources/logpush/ownership';

export class Ownership extends APIResource {
  /**
   * Gets a new ownership challenge sent to your destination.
   */
  create(
    params: OwnershipCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OwnershipCreateResponse | null> {
    const { account_id, zone_id, ...body } = params;
    return (
      this._client.post(`/${account_id}/${zone_id}/logpush/ownership`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OwnershipCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Validates ownership challenge of the destination.
   */
  validate(
    params: OwnershipValidateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OwnershipValidateResponse | null> {
    const { account_id, zone_id, ...body } = params;
    return (
      this._client.post(`/${account_id}/${zone_id}/logpush/ownership/validate`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OwnershipValidateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OwnershipCreateResponse {
  filename?: string;

  message?: string;

  valid?: boolean;
}

export interface OwnershipValidateResponse {
  valid?: boolean;
}

export interface OwnershipCreateParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id: string;

  /**
   * Body param: Uniquely identifies a resource (such as an s3 bucket) where data
   * will be pushed. Additional configuration parameters supported by the destination
   * may be included.
   */
  destination_conf: string;
}

export interface OwnershipValidateParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id: string;

  /**
   * Body param: Uniquely identifies a resource (such as an s3 bucket) where data
   * will be pushed. Additional configuration parameters supported by the destination
   * may be included.
   */
  destination_conf: string;

  /**
   * Body param: Ownership challenge token to prove destination ownership.
   */
  ownership_challenge: string;
}

export namespace Ownership {
  export import OwnershipCreateResponse = OwnershipAPI.OwnershipCreateResponse;
  export import OwnershipValidateResponse = OwnershipAPI.OwnershipValidateResponse;
  export import OwnershipCreateParams = OwnershipAPI.OwnershipCreateParams;
  export import OwnershipValidateParams = OwnershipAPI.OwnershipValidateParams;
}
