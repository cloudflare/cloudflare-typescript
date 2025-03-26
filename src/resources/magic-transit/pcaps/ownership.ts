// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class OwnershipResource extends APIResource {
  /**
   * Adds an AWS or GCP bucket to use with full packet captures.
   */
  create(params: OwnershipCreateParams, options?: RequestOptions): APIPromise<Ownership> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/pcaps/ownership`, { body, ...options }) as APIPromise<{
        result: Ownership;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes buckets added to the packet captures API.
   */
  delete(ownershipID: string, params: OwnershipDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(path`/accounts/${account_id}/pcaps/ownership/${ownershipID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List all buckets configured for use with PCAPs API.
   */
  get(params: OwnershipGetParams, options?: RequestOptions): PagePromise<OwnershipsSinglePage, Ownership> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/pcaps/ownership`,
      SinglePage<Ownership>,
      options,
    );
  }

  /**
   * Validates buckets added to the packet captures API.
   */
  validate(params: OwnershipValidateParams, options?: RequestOptions): APIPromise<Ownership> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/pcaps/ownership/validate`, {
        body,
        ...options,
      }) as APIPromise<{ result: Ownership }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type OwnershipsSinglePage = SinglePage<Ownership>;

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

export declare namespace OwnershipResource {
  export {
    type Ownership as Ownership,
    type OwnershipsSinglePage as OwnershipsSinglePage,
    type OwnershipCreateParams as OwnershipCreateParams,
    type OwnershipDeleteParams as OwnershipDeleteParams,
    type OwnershipGetParams as OwnershipGetParams,
    type OwnershipValidateParams as OwnershipValidateParams,
  };
}
