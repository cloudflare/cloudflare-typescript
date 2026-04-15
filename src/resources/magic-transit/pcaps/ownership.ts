// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseOwnershipResource extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'pcaps', 'ownership'] = Object.freeze([
    'magicTransit',
    'pcaps',
    'ownership',
  ] as const);

  /**
   * Adds an AWS or GCP bucket to use with full packet captures.
   *
   * @example
   * ```ts
   * const ownership =
   *   await client.magicTransit.pcaps.ownership.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     destination_conf: 's3://pcaps-bucket?region=us-east-1',
   *   });
   * ```
   */
  create(params: OwnershipCreateParams, options?: RequestOptions): APIPromise<Ownership> {
    const { account_id = this._client.accountID, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/pcaps/ownership`, { body, ...options }) as APIPromise<{
        result: Ownership;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes buckets added to the packet captures API.
   *
   * @example
   * ```ts
   * await client.magicTransit.pcaps.ownership.delete(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    ownershipID: string,
    params: OwnershipDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account_id = this._client.accountID } = params ?? {};
    return this._client.delete(path`/accounts/${account_id}/pcaps/ownership/${ownershipID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List all buckets configured for use with PCAPs API.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ownership of client.magicTransit.pcaps.ownership.get(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  get(
    params: OwnershipGetParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OwnershipsSinglePage, Ownership> {
    const { account_id = this._client.accountID } = params ?? {};
    return this._client.getAPIList(
      path`/accounts/${account_id}/pcaps/ownership`,
      SinglePage<Ownership>,
      options,
    );
  }

  /**
   * Validates buckets added to the packet captures API.
   *
   * @example
   * ```ts
   * const ownership =
   *   await client.magicTransit.pcaps.ownership.validate({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     destination_conf: 's3://pcaps-bucket?region=us-east-1',
   *     ownership_challenge:
   *       'ownership-challenge-9883874ecac311ec8475433579a6bf5f.txt',
   *   });
   * ```
   */
  validate(params: OwnershipValidateParams, options?: RequestOptions): APIPromise<Ownership> {
    const { account_id = this._client.accountID, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/pcaps/ownership/validate`, {
        body,
        ...options,
      }) as APIPromise<{ result: Ownership }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class OwnershipResource extends BaseOwnershipResource {}

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
   * Path param: Identifier.
   */
  account_id?: string;

  /**
   * Body param: The full URI for the bucket. This field only applies to `full`
   * packet captures.
   */
  destination_conf: string;
}

export interface OwnershipDeleteParams {
  /**
   * Identifier.
   */
  account_id?: string;
}

export interface OwnershipGetParams {
  /**
   * Identifier.
   */
  account_id?: string;
}

export interface OwnershipValidateParams {
  /**
   * Path param: Identifier.
   */
  account_id?: string;

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
