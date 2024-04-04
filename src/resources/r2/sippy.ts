// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SippyAPI from 'cloudflare/resources/r2/sippy';

export class Sippy extends APIResource {
  /**
   * Sets configuration for Sippy for an existing R2 bucket.
   */
  update(
    bucketName: string,
    params: SippyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<R2Sippy> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/r2/buckets/${bucketName}/sippy`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: R2Sippy }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Disables Sippy on this bucket
   */
  delete(
    bucketName: string,
    params: SippyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SippyDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/r2/buckets/${bucketName}/sippy`,
        options,
      ) as Core.APIPromise<{ result: SippyDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets configuration for Sippy for an existing R2 bucket.
   */
  get(bucketName: string, params: SippyGetParams, options?: Core.RequestOptions): Core.APIPromise<R2Sippy> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/r2/buckets/${bucketName}/sippy`, options) as Core.APIPromise<{
        result: R2Sippy;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface R2Sippy {
  /**
   * Details about the configured destination bucket
   */
  destination?: R2Sippy.Destination;

  /**
   * State of Sippy for this bucket
   */
  enabled?: boolean;

  /**
   * Details about the configured source bucket
   */
  source?: R2Sippy.Source;
}

export namespace R2Sippy {
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

    provider?: SippyAPI.UnnamedSchemaRef6430970563db310f19d39aafe3debd27;
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

export type UnnamedSchemaRef6430970563db310f19d39aafe3debd27 = 'r2';

export interface SippyDeleteResponse {
  enabled?: false;
}

export type SippyUpdateParams = SippyUpdateParams.R2EnableSippyAws | SippyUpdateParams.R2EnableSippyGcs;

export namespace SippyUpdateParams {
  export interface R2EnableSippyAws {
    /**
     * Path param: Account ID
     */
    account_id: string;

    /**
     * Body param: R2 bucket to copy objects to
     */
    destination?: SippyUpdateParams.R2EnableSippyAws.Destination;

    /**
     * Body param: AWS S3 bucket to copy objects from
     */
    source?: SippyUpdateParams.R2EnableSippyAws.Source;
  }

  export namespace R2EnableSippyAws {
    /**
     * R2 bucket to copy objects to
     */
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

      provider?: SippyAPI.UnnamedSchemaRef6430970563db310f19d39aafe3debd27;

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

    /**
     * AWS S3 bucket to copy objects from
     */
    export interface Source {
      /**
       * Access Key ID of an IAM credential (ideally scoped to a single S3 bucket)
       */
      accessKeyId?: string;

      /**
       * Name of the AWS S3 bucket
       */
      bucket?: string;

      provider?: 'aws';

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

  export interface R2EnableSippyGcs {
    /**
     * Path param: Account ID
     */
    account_id: string;

    /**
     * Body param: R2 bucket to copy objects to
     */
    destination?: SippyUpdateParams.R2EnableSippyGcs.Destination;

    /**
     * Body param: GCS bucket to copy objects from
     */
    source?: SippyUpdateParams.R2EnableSippyGcs.Source;
  }

  export namespace R2EnableSippyGcs {
    /**
     * R2 bucket to copy objects to
     */
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

      provider?: SippyAPI.UnnamedSchemaRef6430970563db310f19d39aafe3debd27;

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

    /**
     * GCS bucket to copy objects from
     */
    export interface Source {
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
    }
  }
}

export interface SippyDeleteParams {
  /**
   * Account ID
   */
  account_id: string;
}

export interface SippyGetParams {
  /**
   * Account ID
   */
  account_id: string;
}

export namespace Sippy {
  export import R2Sippy = SippyAPI.R2Sippy;
  export import UnnamedSchemaRef6430970563db310f19d39aafe3debd27 = SippyAPI.UnnamedSchemaRef6430970563db310f19d39aafe3debd27;
  export import SippyDeleteResponse = SippyAPI.SippyDeleteResponse;
  export import SippyUpdateParams = SippyAPI.SippyUpdateParams;
  export import SippyDeleteParams = SippyAPI.SippyDeleteParams;
  export import SippyGetParams = SippyAPI.SippyGetParams;
}
