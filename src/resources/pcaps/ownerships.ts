// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OwnershipsAPI from 'cloudflare/resources/pcaps/ownerships';

export class Ownerships extends APIResource {
  /**
   * Adds an AWS or GCP bucket to use with full packet captures.
   */
  create(
    accountIdentifier: string,
    body: OwnershipCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OwnershipCreateResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/pcaps/ownership`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OwnershipCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes buckets added to the packet captures API.
   */
  delete(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/accounts/${accountIdentifier}/pcaps/ownership/${identifier}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List all buckets configured for use with PCAPs API.
   */
  get(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OwnershipGetResponse | null> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/pcaps/ownership`, options) as Core.APIPromise<{
        result: OwnershipGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Validates buckets added to the packet captures API.
   */
  validate(
    accountIdentifier: string,
    body: OwnershipValidateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OwnershipValidateResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/pcaps/ownership/validate`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OwnershipValidateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OwnershipCreateResponse {
  /**
   * The bucket ID associated with the packet captures API.
   */
  id: string;

  /**
   * The full URI for the bucket. This field only applies to `full` packet captures.
   */
  destination_conf: string;

  /**
   * The ownership challenge filename stored in the bucket.
   */
  filename: string;

  /**
   * The status of the ownership challenge. Can be pending, success or failed.
   */
  status: 'pending' | 'success' | 'failed';

  /**
   * The RFC 3339 timestamp when the bucket was added to packet captures API.
   */
  submitted: string;

  /**
   * The RFC 3339 timestamp when the bucket was validated.
   */
  validated?: string;
}

export type OwnershipGetResponse = Array<OwnershipGetResponse.OwnershipGetResponseItem>;

export namespace OwnershipGetResponse {
  export interface OwnershipGetResponseItem {
    /**
     * The bucket ID associated with the packet captures API.
     */
    id: string;

    /**
     * The full URI for the bucket. This field only applies to `full` packet captures.
     */
    destination_conf: string;

    /**
     * The ownership challenge filename stored in the bucket.
     */
    filename: string;

    /**
     * The status of the ownership challenge. Can be pending, success or failed.
     */
    status: 'pending' | 'success' | 'failed';

    /**
     * The RFC 3339 timestamp when the bucket was added to packet captures API.
     */
    submitted: string;

    /**
     * The RFC 3339 timestamp when the bucket was validated.
     */
    validated?: string;
  }
}

export interface OwnershipValidateResponse {
  /**
   * The bucket ID associated with the packet captures API.
   */
  id: string;

  /**
   * The full URI for the bucket. This field only applies to `full` packet captures.
   */
  destination_conf: string;

  /**
   * The ownership challenge filename stored in the bucket.
   */
  filename: string;

  /**
   * The status of the ownership challenge. Can be pending, success or failed.
   */
  status: 'pending' | 'success' | 'failed';

  /**
   * The RFC 3339 timestamp when the bucket was added to packet captures API.
   */
  submitted: string;

  /**
   * The RFC 3339 timestamp when the bucket was validated.
   */
  validated?: string;
}

export interface OwnershipCreateParams {
  /**
   * The full URI for the bucket. This field only applies to `full` packet captures.
   */
  destination_conf: string;
}

export interface OwnershipValidateParams {
  /**
   * The full URI for the bucket. This field only applies to `full` packet captures.
   */
  destination_conf: string;

  /**
   * The ownership challenge filename stored in the bucket.
   */
  ownership_challenge: string;
}

export namespace Ownerships {
  export import OwnershipCreateResponse = OwnershipsAPI.OwnershipCreateResponse;
  export import OwnershipGetResponse = OwnershipsAPI.OwnershipGetResponse;
  export import OwnershipValidateResponse = OwnershipsAPI.OwnershipValidateResponse;
  export import OwnershipCreateParams = OwnershipsAPI.OwnershipCreateParams;
  export import OwnershipValidateParams = OwnershipsAPI.OwnershipValidateParams;
}
