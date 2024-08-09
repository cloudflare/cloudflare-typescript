// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as VersionsAPI from './versions';
import { V4PagePagination, type V4PagePaginationParams } from '../../../pagination';

export class Versions extends APIResource {
  /**
   * Upload a Worker Version without deploying to Cloudflare's network. You can find
   * more about the multipart metadata on our docs:
   * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/.
   */
  create(
    scriptName: string,
    params: VersionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/workers/scripts/${scriptName}/versions`,
        Core.multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: VersionCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List of Worker Versions. The first version in the list is the latest version.
   */
  list(
    scriptName: string,
    params: VersionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<VersionListResponsesV4PagePagination, VersionListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workers/scripts/${scriptName}/versions`,
      VersionListResponsesV4PagePagination,
      { query, ...options },
    );
  }

  /**
   * Get Version Detail
   */
  get(
    scriptName: string,
    versionId: string,
    params: VersionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/versions/${versionId}`,
        options,
      ) as Core.APIPromise<{ result: VersionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class VersionListResponsesV4PagePagination extends V4PagePagination<VersionListResponse> {}

export interface VersionCreateResponse {
  resources: unknown;

  id?: string;

  metadata?: unknown;

  number?: number;

  startup_time_ms?: number;
}

export interface VersionListResponse {
  id?: string;

  metadata?: unknown;

  number?: number;
}

export interface VersionGetResponse {
  resources: unknown;

  id?: string;

  metadata?: unknown;

  number?: number;
}

export interface VersionCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: A module comprising a Worker script, often a javascript file.
   * Multiple modules may be provided as separate named parts, but at least one
   * module must be present and referenced in the metadata as `main_module`.
   */
  '<any part name>'?: Array<Core.Uploadable>;

  /**
   * Body param: JSON encoded metadata about the uploaded parts and Worker
   * configuration.
   */
  metadata?: VersionCreateParams.Metadata;
}

export namespace VersionCreateParams {
  /**
   * JSON encoded metadata about the uploaded parts and Worker configuration.
   */
  export interface Metadata {
    annotations?: Metadata.Annotations;

    /**
     * List of bindings available to the worker.
     */
    bindings?: Array<unknown>;

    /**
     * Date indicating targeted support in the Workers runtime. Backwards incompatible
     * fixes to the runtime following this date will not affect this Worker.
     */
    compatibility_date?: string;

    /**
     * Flags that enable or disable certain features in the Workers runtime. Used to
     * enable upcoming features or opt in or out of specific changes not included in a
     * `compatibility_date`.
     */
    compatibility_flags?: Array<string>;

    /**
     * List of binding types to keep from previous_upload.
     */
    keep_bindings?: Array<string>;

    /**
     * Name of the part in the multipart request that contains the main module (e.g.
     * the file exporting a `fetch` handler). Indicates a `module syntax` Worker.
     */
    main_module?: string;

    /**
     * Usage model to apply to invocations.
     */
    usage_model?: 'standard';
  }

  export namespace Metadata {
    export interface Annotations {
      /**
       * Human-readable message about the version.
       */
      'workers/message'?: string;

      /**
       * User-provided identifier for the version.
       */
      'workers/tag'?: string;
    }
  }
}

export interface VersionListParams extends V4PagePaginationParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: Only return versions that can be used in a deployment. Ignores
   * pagination.
   */
  deployable?: boolean;
}

export interface VersionGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Versions {
  export import VersionCreateResponse = VersionsAPI.VersionCreateResponse;
  export import VersionListResponse = VersionsAPI.VersionListResponse;
  export import VersionGetResponse = VersionsAPI.VersionGetResponse;
  export import VersionListResponsesV4PagePagination = VersionsAPI.VersionListResponsesV4PagePagination;
  export import VersionCreateParams = VersionsAPI.VersionCreateParams;
  export import VersionListParams = VersionsAPI.VersionListParams;
  export import VersionGetParams = VersionsAPI.VersionGetParams;
}
