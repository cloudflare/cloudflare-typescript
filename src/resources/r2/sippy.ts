// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SippyAPI from 'cloudflare/resources/r2/sippy';

export class Sippy extends APIResource {
  /**
   * Sets configuration for Sippy for an existing R2 bucket.
   */
  update(
    accountId: string,
    bucketName: string,
    body: SippyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SippyUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/r2/buckets/${bucketName}/sippy`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SippyUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Disables Sippy on this bucket
   */
  delete(
    accountId: string,
    bucketName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SippyDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/r2/buckets/${bucketName}/sippy`,
        options,
      ) as Core.APIPromise<{ result: SippyDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets configuration for Sippy for an existing R2 bucket.
   */
  get(
    accountId: string,
    bucketName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SippyGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/r2/buckets/${bucketName}/sippy`, options) as Core.APIPromise<{
        result: SippyGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SippyUpdateResponse {
  /**
   * Details about the configured destination bucket
   */
  destination?: SippyUpdateResponse.Destination;

  /**
   * State of Sippy for this bucket
   */
  enabled?: boolean;

  /**
   * Details about the configured source bucket
   */
  source?: SippyUpdateResponse.Source;
}

export namespace SippyUpdateResponse {
  /**
   * Details about the configured destination bucket
   */
  export interface Destination {
    /**
     * ID of the Cloudflare API token used when writing objects to this bucket
     */
    accessKeyId?: string;

    account?: string;

    /**
     * Name of the bucket on the provider
     */
    bucket?: string;

    provider?: 'r2';
  }

  /**
   * Details about the configured source bucket
   */
  export interface Source {
    /**
     * Name of the bucket on the provider
     */
    bucket?: string;

    provider?: 'aws' | 'gcs';

    /**
     * Region where the bucket resides (AWS only)
     */
    region?: string | null;
  }
}

export interface SippyDeleteResponse {
  enabled?: false;
}

export interface SippyGetResponse {
  /**
   * Details about the configured destination bucket
   */
  destination?: SippyGetResponse.Destination;

  /**
   * State of Sippy for this bucket
   */
  enabled?: boolean;

  /**
   * Details about the configured source bucket
   */
  source?: SippyGetResponse.Source;
}

export namespace SippyGetResponse {
  /**
   * Details about the configured destination bucket
   */
  export interface Destination {
    /**
     * ID of the Cloudflare API token used when writing objects to this bucket
     */
    accessKeyId?: string;

    account?: string;

    /**
     * Name of the bucket on the provider
     */
    bucket?: string;

    provider?: 'r2';
  }

  /**
   * Details about the configured source bucket
   */
  export interface Source {
    /**
     * Name of the bucket on the provider
     */
    bucket?: string;

    provider?: 'aws' | 'gcs';

    /**
     * Region where the bucket resides (AWS only)
     */
    region?: string | null;
  }
}

export interface SippyUpdateParams {
  destination?: SippyUpdateParams.Destination;

  source?: SippyUpdateParams.Source;
}

export namespace SippyUpdateParams {
  export interface Destination {
    /**
     * ID of a Cloudflare API token. This is the value labelled "Access Key ID" when
     * creating an API token from the
     * [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).
     *
     * Sippy will use this token when writing objects to R2, so it is best to scope
     * this token to the bucket you're enabling Sippy for.
     */
    accessKeyId?: string;

    provider?: 'r2';

    /**
     * Value of a Cloudflare API token. This is the value labelled "Secret Access Key"
     * when creating an API token from the
     * [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).
     *
     * Sippy will use this token when writing objects to R2, so it is best to scope
     * this token to the bucket you're enabling Sippy for.
     */
    secretAccessKey?: string;
  }

  export interface Source {
    /**
     * Access Key ID of an IAM credential (ideally scoped to a single S3 bucket)
     */
    accessKeyId?: string;

    /**
     * Name of the GCS bucket
     */
    bucket?: string;

    /**
     * Client email of an IAM credential (ideally scoped to a single GCS bucket)
     */
    clientEmail?: string;

    /**
     * Private Key of an IAM credential (ideally scoped to a single GCS bucket)
     */
    privateKey?: string;

    provider?: 'gcs';

    /**
     * Name of the AWS availability zone
     */
    region?: string;

    /**
     * Secret Access Key of an IAM credential (ideally scoped to a single S3 bucket)
     */
    secretAccessKey?: string;
  }
}

export namespace Sippy {
  export import SippyUpdateResponse = SippyAPI.SippyUpdateResponse;
  export import SippyDeleteResponse = SippyAPI.SippyDeleteResponse;
  export import SippyGetResponse = SippyAPI.SippyGetResponse;
  export import SippyUpdateParams = SippyAPI.SippyUpdateParams;
}
