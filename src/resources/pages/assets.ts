// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class BaseAssets extends APIResource {
  static override readonly _key: readonly ['pages', 'assets'] = Object.freeze(['pages', 'assets'] as const);

  /**
   * Check which of the provided file hashes are missing from the Pages asset store.
   * Returns a list of missing hashes that need to be uploaded. Used as part of the
   * Pages Direct Upload workflow.
   *
   * Authenticate with the JWT obtained from the upload-token endpoint: GET
   * /accounts/{account_id}/pages/projects/{project_name}/upload-token
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const assetCheckMissingResponse of client.pages.assets.checkMissing(
   *   {
   *     hashes: [
   *       'a948904f2f0f479b8f936b8a0c5d9882',
   *       'b026324c6904b2a9cb4b88d6d61c81d1',
   *     ],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  checkMissing(
    body: AssetCheckMissingParams,
    options?: RequestOptions,
  ): PagePromise<AssetCheckMissingResponsesSinglePage, AssetCheckMissingResponse> {
    return this._client.getAPIList('/pages/assets/check-missing', SinglePage<AssetCheckMissingResponse>, {
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Upload one or more files to the Pages asset store. Each file is identified by
   * its content hash and is uploaded using the same JSON shape as the Cloudflare KV
   * bulk write API. Used as part of the Pages Direct Upload workflow.
   *
   * Authenticate with the JWT obtained from the upload-token endpoint: GET
   * /accounts/{account_id}/pages/projects/{project_name}/upload-token
   *
   * @example
   * ```ts
   * const response = await client.pages.assets.upload({
   *   body: [
   *     {
   *       base64: true,
   *       key: 'b026324c6904b2a9cb4b88d6d61c81d1',
   *       metadata: { contentType: 'text/plain' },
   *       value: 'SGVsbG8sIFdvcmxkIQ==',
   *     },
   *   ],
   * });
   * ```
   */
  upload(params: AssetUploadParams, options?: RequestOptions): APIPromise<AssetUploadResponse> {
    const { body } = params;
    return this._client.post('/pages/assets/upload', { body: body, ...options });
  }

  /**
   * Register the provided file hashes as recently uploaded to the Pages asset store.
   * Used as part of the Pages Direct Upload workflow so future deployments can avoid
   * re-uploading files that are already present.
   *
   * Authenticate with the JWT obtained from the upload-token endpoint: GET
   * /accounts/{account_id}/pages/projects/{project_name}/upload-token
   *
   * @example
   * ```ts
   * const response = await client.pages.assets.upsertHashes({
   *   hashes: [
   *     'a948904f2f0f479b8f936b8a0c5d9882',
   *     'b026324c6904b2a9cb4b88d6d61c81d1',
   *   ],
   * });
   * ```
   */
  upsertHashes(
    body: AssetUpsertHashesParams,
    options?: RequestOptions,
  ): APIPromise<AssetUpsertHashesResponse> {
    return this._client.post('/pages/assets/upsert-hashes', { body, ...options });
  }
}
export class Assets extends BaseAssets {}

export type AssetCheckMissingResponsesSinglePage = SinglePage<AssetCheckMissingResponse>;

export type AssetCheckMissingResponse = string;

export interface AssetUploadResponse {
  errors: Array<AssetUploadResponse.Error>;

  messages: Array<AssetUploadResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace AssetUploadResponse {
  export interface Error {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }
}

export interface AssetUpsertHashesResponse {
  errors: Array<AssetUpsertHashesResponse.Error>;

  messages: Array<AssetUpsertHashesResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace AssetUpsertHashesResponse {
  export interface Error {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }
}

export interface AssetCheckMissingParams {
  /**
   * List of file content hashes to check for existence in the asset store.
   */
  hashes: Array<string>;
}

export interface AssetUploadParams {
  body: Array<AssetUploadParams.Body>;
}

export namespace AssetUploadParams {
  export interface Body {
    /**
     * Whether value is base64 encoded.
     */
    base64: boolean;

    /**
     * File content hash used as the object key in the Pages asset store.
     */
    key: string;

    metadata: Body.Metadata;

    /**
     * File content. When base64 is true, this value is base64 encoded.
     */
    value: string;
  }

  export namespace Body {
    export interface Metadata {
      /**
       * MIME type for the uploaded file.
       */
      contentType: string;
    }
  }
}

export interface AssetUpsertHashesParams {
  /**
   * List of file content hashes to register in the asset store.
   */
  hashes: Array<string>;
}

export declare namespace Assets {
  export {
    type AssetCheckMissingResponse as AssetCheckMissingResponse,
    type AssetUploadResponse as AssetUploadResponse,
    type AssetUpsertHashesResponse as AssetUpsertHashesResponse,
    type AssetCheckMissingResponsesSinglePage as AssetCheckMissingResponsesSinglePage,
    type AssetCheckMissingParams as AssetCheckMissingParams,
    type AssetUploadParams as AssetUploadParams,
    type AssetUpsertHashesParams as AssetUpsertHashesParams,
  };
}
