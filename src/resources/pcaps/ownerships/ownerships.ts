// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OwnershipsAPI from 'cloudflare/resources/pcaps/ownerships/ownerships';
import * as ValidatesAPI from 'cloudflare/resources/pcaps/ownerships/validates';

export class Ownerships extends APIResource {
  validates: ValidatesAPI.Validates = new ValidatesAPI.Validates(this._client);

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
   * Adds an AWS or GCP bucket to use with full packet captures.
   */
  magicPcapCollectionAddBucketsForFullPacketCaptures(
    accountIdentifier: string,
    body: OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/pcaps/ownership`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all buckets configured for use with PCAPs API.
   */
  magicPcapCollectionListPcaPsBucketOwnership(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse | null> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/pcaps/ownership`, options) as Core.APIPromise<{
        result: OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse {
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

export type OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse =
  Array<OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse.OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponseItem>;

export namespace OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse {
  export interface OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponseItem {
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

export interface OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesParams {
  /**
   * The full URI for the bucket. This field only applies to `full` packet captures.
   */
  destination_conf: string;
}

export namespace Ownerships {
  export import OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse = OwnershipsAPI.OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse;
  export import OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse = OwnershipsAPI.OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse;
  export import OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesParams = OwnershipsAPI.OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesParams;
  export import Validates = ValidatesAPI.Validates;
  export import ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesResponse = ValidatesAPI.ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesResponse;
  export import ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesParams = ValidatesAPI.ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesParams;
}
