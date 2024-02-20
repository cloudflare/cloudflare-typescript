// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OwnershipAPI from 'cloudflare/resources/logpush/ownership';

export class Ownership extends APIResource {
  /**
   * Gets a new ownership challenge sent to your destination.
   */
  create(
    accountOrZone: string,
    accountOrZoneId: string,
    body: OwnershipCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OwnershipCreateResponse | null> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/logpush/ownership`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OwnershipCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Validates ownership challenge of the destination.
   */
  validate(
    accountOrZone: string,
    accountOrZoneId: string,
    body: OwnershipValidateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OwnershipValidateResponse | null> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/logpush/ownership/validate`, {
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
   * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.
   * Additional configuration parameters supported by the destination may be
   * included.
   */
  destination_conf: string;
}

export interface OwnershipValidateParams {
  /**
   * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.
   * Additional configuration parameters supported by the destination may be
   * included.
   */
  destination_conf: string;

  /**
   * Ownership challenge token to prove destination ownership.
   */
  ownership_challenge: string;
}

export namespace Ownership {
  export import OwnershipCreateResponse = OwnershipAPI.OwnershipCreateResponse;
  export import OwnershipValidateResponse = OwnershipAPI.OwnershipValidateResponse;
  export import OwnershipCreateParams = OwnershipAPI.OwnershipCreateParams;
  export import OwnershipValidateParams = OwnershipAPI.OwnershipValidateParams;
}
