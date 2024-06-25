// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as OwnershipAPI from './ownership';

export class OwnershipResource extends APIResource {
  /**
   * Adds an AWS or GCP bucket to use with full packet captures.
   */
  create(params: OwnershipCreateParams, options?: Core.RequestOptions): Core.APIPromise<Ownership> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/pcaps/ownership`, { body, ...options }) as Core.APIPromise<{
        result: Ownership;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes buckets added to the packet captures API.
   */
  delete(
    ownershipId: string,
    params: OwnershipDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/pcaps/ownership/${ownershipId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List all buckets configured for use with PCAPs API.
   */
  get(
    params: OwnershipGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OwnershipGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/pcaps/ownership`, options) as Core.APIPromise<{
        result: OwnershipGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Validates buckets added to the packet captures API.
   */
  validate(params: OwnershipValidateParams, options?: Core.RequestOptions): Core.APIPromise<Ownership> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/pcaps/ownership/validate`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Ownership }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Ownership {
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

export type OwnershipGetResponse = Array<Ownership>;

export interface OwnershipCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The full URI for the bucket. This field only applies to `full`
   * packet captures.
   */
  destination_conf: string;
}

export interface OwnershipDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface OwnershipGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface OwnershipValidateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The full URI for the bucket. This field only applies to `full`
   * packet captures.
   */
  destination_conf: string;

  /**
   * Body param: The ownership challenge filename stored in the bucket.
   */
  ownership_challenge: string;
}

export namespace OwnershipResource {
  export import Ownership = OwnershipAPI.Ownership;
  export import OwnershipGetResponse = OwnershipAPI.OwnershipGetResponse;
  export import OwnershipCreateParams = OwnershipAPI.OwnershipCreateParams;
  export import OwnershipDeleteParams = OwnershipAPI.OwnershipDeleteParams;
  export import OwnershipGetParams = OwnershipAPI.OwnershipGetParams;
  export import OwnershipValidateParams = OwnershipAPI.OwnershipValidateParams;
}
