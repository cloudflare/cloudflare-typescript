// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseContent extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb', 'posture', 'content'] = Object.freeze([
    'zeroTrust',
    'casb',
    'posture',
    'content',
  ] as const);

  /**
   * List DLP content findings
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const contentListResponse of client.zeroTrust.casb.posture.content.list(
   *   { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ContentListParams,
    options?: RequestOptions,
  ): PagePromise<ContentListResponsesV4PagePaginationArray, ContentListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/data-security/posture/content`,
      V4PagePaginationArray<ContentListResponse>,
      { query, ...options },
    );
  }

  /**
   * Creates a CSV export for content and accepts optional filters in the payload.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.casb.posture.content.export({
   *     account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *     dlp_profile_information: [
   *       {
   *         id: 'e91a2360-da51-4fdf-9711-bcdecd462614',
   *         entries: [
   *           {
   *             id: '55ba2c6c-8ef4-4b2e-9148-e75e8b6ccac1',
   *             name: 'Credit Card Numbers',
   *             profile_id:
   *               'e91a2360-da51-4fdf-9711-bcdecd462614',
   *           },
   *         ],
   *         name: 'Financial Information',
   *       },
   *     ],
   *   });
   * ```
   */
  export(params: ContentExportParams, options?: RequestOptions): APIPromise<ContentExportResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/data-security/posture/content/export`, {
        body,
        ...options,
      }) as APIPromise<{ result: ContentExportResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Content extends BaseContent {}

export type ContentListResponsesV4PagePaginationArray = V4PagePaginationArray<ContentListResponse>;

/**
 * Content asset with DLP information.
 */
export interface ContentListResponse {
  /**
   * Unique identifier for the asset.
   */
  asset_id: string;

  /**
   * Name of the asset.
   */
  asset_name: string;

  /**
   * DLP context information for this asset.
   */
  dlp_contexts: Array<ContentListResponse.DLPContext>;

  /**
   * Number of DLP profiles that flagged this asset.
   */
  dlp_profile_count: number;

  /**
   * IDs of DLP profiles that flagged this asset.
   */
  dlp_profile_ids: Array<string>;

  /**
   * Summary information about an integration.
   */
  integration: ContentListResponse.Integration;

  /**
   * Most recent date this asset was flagged.
   */
  latest_affliction_date: string;
}

export namespace ContentListResponse {
  /**
   * DLP context information for a finding.
   */
  export interface DLPContext {
    /**
     * When the DLP context was created.
     */
    created: string;

    /**
     * DLP Entry IDs.
     */
    entry_ids: Array<string>;

    /**
     * DLP Profile ID.
     */
    profile_id: string;

    /**
     * When the DLP context was last updated.
     */
    updated: string;

    /**
     * Unique identifier for the DLP context.
     */
    id?: string;

    /**
     * When the DLP context was deleted.
     */
    deleted?: string | null;

    /**
     * DLP Right Boundary of match context.
     */
    match_context_max_extent?: number | null;

    /**
     * DLP Left Boundary of match context.
     */
    match_context_min_extent?: number | null;

    /**
     * DLP Match context payload that matched the profile in question.
     */
    match_context_payload?: { [key: string]: unknown } | null;
  }

  /**
   * Summary information about an integration.
   */
  export interface Integration {
    /**
     * When entity was created.
     */
    created: string;

    /**
     * When were the integration credentials last updated.
     */
    last_hydrated: string;

    /**
     * Name of the integration.
     */
    name: string;

    /**
     * The vendor-specific permissions associated with the integration.
     */
    permissions: Array<string>;

    /**
     * Policy configuration for an integration.
     */
    policy: Integration.Policy;

    /**
     * Current status of the integration.
     */
    status: string;

    /**
     * Last entity was updated.
     */
    updated: string;

    /**
     * Whether the integrations permissions can be updated.
     */
    upgradable: boolean;

    /**
     * Information about a vendor/service provider.
     */
    vendor: Integration.Vendor;

    /**
     * Zero Trust products associated with this integration.
     */
    zt_enrollments: Array<Integration.ZtEnrollment>;

    /**
     * Integration ID.
     */
    id?: string;

    /**
     * Health status of integration credentials.
     */
    credential_health_status?: 'Initializing' | 'Healthy' | 'Unhealthy';

    /**
     * The date and time when the integration credentials will expire.
     */
    credentials_expiry?: string | null;

    /**
     * Whether the given integration is paused by the user.
     */
    is_paused?: boolean;

    /**
     * UI State as to whether a potential permissions upgrade has been dismissed.
     */
    upgrade_dismissed?: boolean;
  }

  export namespace Integration {
    /**
     * Policy configuration for an integration.
     */
    export interface Policy {
      /**
       * Policy identifier.
       */
      id?: string;

      /**
       * OAuth client ID for the policy.
       */
      client_id?: string | null;

      /**
       * Compliance level for the policy.
       */
      compliance_level?: string;

      /**
       * Whether DLP is enabled for this policy.
       */
      dlp_enabled?: boolean;

      /**
       * Link to policy documentation.
       */
      link?: string | null;

      /**
       * Policy name.
       */
      name?: string;

      /**
       * List of permissions included in the policy.
       */
      permissions?: Array<string>;
    }

    /**
     * Information about a vendor/service provider.
     */
    export interface Vendor {
      /**
       * The id of the vendor.
       */
      id: string;

      /**
       * Detailed information about what kinds of issues are detected for this vendor.
       */
      description: string | null;

      /**
       * The display name of the vendor.
       */
      display_name: string;

      /**
       * Logo URL for the vendor.
       */
      logo: string;

      /**
       * The name of the vendor.
       */
      name: string;

      /**
       * Static logo URL for the vendor.
       */
      static_logo: string;

      /**
       * The vendor's compatible Zero Trust products.
       */
      zt_enrollments: Array<string>;

      /**
       * The policies related to the vendor.
       */
      policies?: Array<{ [key: string]: unknown }>;
    }

    /**
     * Information about a Zero Trust product integration.
     */
    export interface ZtEnrollment {
      /**
       * The internal identifier of the Zero Trust Product.
       */
      id?: string;

      /**
       * Brief description of the Zero Trust Product.
       */
      description?: string;

      /**
       * The verbose name of the Zero Trust Product.
       */
      display_name?: string;

      /**
       * Flag to enable/disable access to the listed integration from the corresponding
       * Cloudflare product.
       */
      enabled?: boolean;
    }
  }
}

/**
 * Information about an export job.
 */
export interface ContentExportResponse {
  /**
   * Unique identifier for the export job.
   */
  id: string;

  /**
   * Status of an export job.
   */
  status: 'Pending' | 'Success' | 'Failure' | 'Rescheduled' | 'In-Progress';

  /**
   * Type of export job.
   */
  type: 'finding' | 'findingInstance' | 'content' | 'remediationJob';

  /**
   * ID of the export-requesting user.
   */
  user_id: string;

  /**
   * The URL by which the successfully created export can be downloaded by the end
   * users.
   */
  download_url?: string | null;

  /**
   * Contains information on errors which may have occurred during export creation.
   */
  errors?: string | null;

  /**
   * The base name of the file that is/was generated by the export job.
   */
  file_name?: string | null;

  /**
   * The full path of the file that is stored within external storage (currently R2).
   */
  file_path?: string | null;
}

export interface ContentListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Query param: Direction to order results.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter by an DLP profile ID
   */
  dlp_profile_id?: string;

  /**
   * Query param: Filter by an integration ID
   */
  integration_id?: string;

  /**
   * Query param: Filter to view findings that occurred on or before the affliction
   * date. Can be a date-time in ISO 8601 format or an epoch timestamp.
   */
  max_affliction_date?: string;

  /**
   * Query param: Filter to view findings that occurred on or after the affliction
   * date. Can be a date-time in ISO 8601 format or an epoch timestamp.
   */
  min_affliction_date?: string;

  /**
   * Query param: Which field to use when ordering content assets.
   */
  order?: 'asset_name' | 'dlp_profile_count' | 'integration_name' | 'latest_affliction_date';

  /**
   * Query param: A search term.
   */
  search?: string;

  /**
   * Query param: Filter by vendor
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
    | 'MICROSOFT_INTERNAL'
    | 'OPENAI'
    | 'SALESFORCE'
    | 'SERVICENOW'
    | 'SLACK';
}

export interface ContentExportParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: DLP profile metadata for the export.
   */
  dlp_profile_information: Array<ContentExportParams.DLPProfileInformation>;

  /**
   * Body param: Filter by DLP profile IDs.
   */
  dlp_profile_id?: Array<string>;

  /**
   * Body param: Filter by integration IDs.
   */
  integration_id?: Array<string>;

  /**
   * Body param: Filter to view content flagged on or before this date.
   */
  max_affliction_date?: string;

  /**
   * Body param: Filter to view content flagged on or after this date.
   */
  min_affliction_date?: string;

  /**
   * Body param: Ordering specifications for the export.
   */
  orders?: Array<ContentExportParams.Order>;

  /**
   * Body param: Search term to filter content.
   */
  search?: string;

  /**
   * Body param: Filter by vendor types.
   */
  vendors?: Array<
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
    | 'MICROSOFT_INTERNAL'
    | 'OPENAI'
    | 'SALESFORCE'
    | 'SERVICENOW'
    | 'SLACK'
  >;
}

export namespace ContentExportParams {
  /**
   * DLP profile configuration.
   */
  export interface DLPProfileInformation {
    /**
     * Unique identifier for the DLP profile.
     */
    id: string;

    /**
     * Entries contained within this DLP profile.
     */
    entries: Array<DLPProfileInformation.Entry>;

    /**
     * Name of the DLP profile.
     */
    name: string;
  }

  export namespace DLPProfileInformation {
    /**
     * Entry within a DLP profile.
     */
    export interface Entry {
      /**
       * Unique identifier for the DLP profile entry.
       */
      id: string;

      /**
       * Name of the DLP profile entry.
       */
      name: string;

      /**
       * ID of the parent DLP profile.
       */
      profile_id: string;
    }
  }

  /**
   * Generic ordering specification.
   */
  export interface Order {
    /**
     * Sort direction.
     */
    direction: 'asc' | 'desc';

    /**
     * Content-specific field names for ordering.
     */
    name: 'asset_name' | 'dlp_profile_count' | 'integration_name' | 'latest_affliction_date';
  }
}

export declare namespace Content {
  export {
    type ContentListResponse as ContentListResponse,
    type ContentExportResponse as ContentExportResponse,
    type ContentListResponsesV4PagePaginationArray as ContentListResponsesV4PagePaginationArray,
    type ContentListParams as ContentListParams,
    type ContentExportParams as ContentExportParams,
  };
}
