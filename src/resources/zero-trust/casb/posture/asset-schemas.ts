// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseAssetSchemas extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb', 'posture', 'assetSchemas'] = Object.freeze([
    'zeroTrust',
    'casb',
    'posture',
    'assetSchemas',
  ] as const);

  /**
   * Returns the catalog of asset classes available when authoring custom findings,
   * grouped by vendor. Optionally filter to a single vendor with the `vendor` query
   * parameter.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const assetSchemaListResponse of client.zeroTrust.casb.posture.assetSchemas.list(
   *   { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: AssetSchemaListParams,
    options?: RequestOptions,
  ): PagePromise<AssetSchemaListResponsesSinglePage, AssetSchemaListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/data-security/posture/asset_schemas`,
      SinglePage<AssetSchemaListResponse>,
      { query, ...options },
    );
  }

  /**
   * Returns the fields and related attributes a custom finding type may reference
   * for the given asset class (JSON Schema). Used by the custom finding types
   * builder.
   *
   * @example
   * ```ts
   * const assetSchema =
   *   await client.zeroTrust.casb.posture.assetSchemas.get(
   *     'AnthropicApiKey',
   *     { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   *   );
   * ```
   */
  get(
    assetClass: string,
    params: AssetSchemaGetParams,
    options?: RequestOptions,
  ): APIPromise<AssetSchemaGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/data-security/posture/asset_schemas/${assetClass}`,
        options,
      ) as APIPromise<{ result: AssetSchemaGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class AssetSchemas extends BaseAssetSchemas {}

export type AssetSchemaListResponsesSinglePage = SinglePage<AssetSchemaListResponse>;

export interface AssetSchemaListResponse {
  /**
   * Asset classes belonging to this vendor, sorted by asset_class.
   */
  asset_classes: Array<AssetSchemaListResponse.AssetClass>;

  /**
   * Canonical vendor enum value, e.g. GOOGLE_WORKSPACE.
   */
  vendor: string;
}

export namespace AssetSchemaListResponse {
  export interface AssetClass {
    /**
     * Asset class identifier (PascalCase), e.g. AnthropicUser.
     */
    asset_class: string;
  }
}

export interface AssetSchemaGetResponse {
  /**
   * Asset class identifier (PascalCase), e.g. AnthropicApiKey.
   */
  asset_class: string;

  /**
   * Fields and related attributes a custom finding type may reference for this asset
   * class, as a JSON Schema. Top-level properties are `asset` and, when related
   * resources exist, `associated`.
   */
  schema: { [key: string]: unknown };
}

export interface AssetSchemaListParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Query param: Restrict the result to a single vendor. Unknown values return 400.
   */
  vendor?:
    | 'ANTHROPIC'
    | 'AWS'
    | 'BITBUCKET'
    | 'BOX'
    | 'CONFLUENCE'
    | 'DROPBOX'
    | 'GITHUB'
    | 'GOOGLE_CLOUD_PLATFORM'
    | 'GOOGLE_WORKSPACE'
    | 'JIRA'
    | 'MICROSOFT'
    | 'OPENAI'
    | 'SALESFORCE'
    | 'SERVICENOW'
    | 'SLACK'
    | 'WORKDAY'
    | 'ZOOM';
}

export interface AssetSchemaGetParams {
  /**
   * Cloudflare account ID for the user making the request.
   */
  account_id: string;
}

export declare namespace AssetSchemas {
  export {
    type AssetSchemaListResponse as AssetSchemaListResponse,
    type AssetSchemaGetResponse as AssetSchemaGetResponse,
    type AssetSchemaListResponsesSinglePage as AssetSchemaListResponsesSinglePage,
    type AssetSchemaListParams as AssetSchemaListParams,
    type AssetSchemaGetParams as AssetSchemaGetParams,
  };
}
