// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseJobs extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb', 'posture', 'remediations', 'jobs'] =
    Object.freeze(['zeroTrust', 'casb', 'posture', 'remediations', 'jobs'] as const);

  /**
   * Create one or more remediation jobs tied to a specific Cloudflare Account.
   *
   * @example
   * ```ts
   * const job =
   *   await client.zeroTrust.casb.posture.remediations.jobs.create(
   *     {
   *       account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *       finding_instance_ids: [
   *         '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       ],
   *       remediation_type_id:
   *         '5a7d9e2f-1b3c-4d5e-8f6a-7b8c9d0e1f2a',
   *     },
   *   );
   * ```
   */
  create(params: JobCreateParams, options?: RequestOptions): APIPromise<JobCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/data-security/posture/remediations/jobs`, {
        body,
        ...options,
      }) as APIPromise<{ result: JobCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all remediation jobs tied to a specific Cloudflare Account. Note that
   * `cursor` and `page` are mutually exclusive.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const jobListResponse of client.zeroTrust.casb.posture.remediations.jobs.list(
   *   { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: JobListParams,
    options?: RequestOptions,
  ): PagePromise<JobListResponsesV4PagePaginationArray, JobListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/data-security/posture/remediations/jobs`,
      V4PagePaginationArray<JobListResponse>,
      { query, ...options },
    );
  }

  /**
   * Creates a CSV export for remediation jobs and accepts optional filters in the
   * payload.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.casb.posture.remediations.jobs.export(
   *     { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   *   );
   * ```
   */
  export(params: JobExportParams, options?: RequestOptions): APIPromise<JobExportResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/data-security/posture/remediations/jobs/export`, {
        body,
        ...options,
      }) as APIPromise<{ result: JobExportResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Jobs extends BaseJobs {}

export type JobListResponsesV4PagePaginationArray = V4PagePaginationArray<JobListResponse>;

export interface JobCreateResponse {
  /**
   * Successfully created remediation jobs.
   */
  created: Array<JobCreateResponse.Created>;

  /**
   * Failed remediation job creation attempts.
   */
  failed: Array<JobCreateResponse.Failed>;
}

export namespace JobCreateResponse {
  /**
   * Information about a remediation job.
   */
  export interface Created {
    /**
     * Unique identifier for the remediation job.
     */
    id: string;

    /**
     * Asset information for a remediation job.
     */
    asset: Created.Asset;

    /**
     * When the remediation job was created.
     */
    created_at: string;

    /**
     * Encoded finding ID.
     */
    finding_id: string;

    /**
     * ID of the finding instance being remediated.
     */
    finding_instance_id: string;

    /**
     * ID of the finding type.
     */
    finding_type_id: string;

    /**
     * Name of the finding type.
     */
    finding_type_name: string;

    /**
     * Name of the integration.
     */
    integration_name: string;

    /**
     * When the remediation job was last updated.
     */
    last_updated: string;

    /**
     * Type of remediation being performed.
     */
    remediation_type: string;

    /**
     * Status of a remediation job.
     */
    status: 'pending' | 'processing' | 'completed' | 'failed' | 'validating';

    /**
     * Email of the user who triggered the remediation. For account-token actors this
     * is the literal "Account API Token"; for policy actors this is empty.
     */
    triggered_by_user: string;

    /**
     * Type of actor that triggered the remediation job. Null on legacy rows created
     * before this column was populated.
     */
    triggered_by_actor?: 'user' | 'account_token' | null;

    /**
     * ID of the actor that triggered the job. Meaning depends on triggered_by_actor.
     * Null on legacy rows.
     */
    triggered_by_id?: string | null;
  }

  export namespace Created {
    /**
     * Asset information for a remediation job.
     */
    export interface Asset {
      /**
       * Unique identifier for the asset.
       */
      id: string;

      /**
       * Category information for a remediation job asset.
       */
      category: Asset.Category;

      /**
       * External identifier from the source system.
       */
      external_id: string;

      /**
       * Additional fields associated with the asset.
       */
      fields: Array<Asset.Field>;

      /**
       * Human-readable name of the asset.
       */
      name: string;

      /**
       * Direct link to the asset.
       */
      link?: string | null;
    }

    export namespace Asset {
      /**
       * Category information for a remediation job asset.
       */
      export interface Category {
        /**
         * Specific service within the vendor.
         */
        service: string;

        /**
         * Asset type.
         */
        type: string;

        /**
         * Display names for vendor types.
         */
        vendor:
          | 'AWS'
          | 'Anthropic'
          | 'Bitbucket'
          | 'Box'
          | 'Confluence'
          | 'Dropbox'
          | 'GitHub'
          | 'Google Cloud Platform'
          | 'Google Workspace'
          | 'Jira'
          | 'Microsoft'
          | 'Microsoft Internal'
          | 'Okta'
          | 'OpenAI'
          | 'Slack'
          | 'Salesforce'
          | 'ServiceNow'
          | 'Workday'
          | 'Zoom';
      }

      /**
       * Additional field information for a remediation job asset.
       */
      export interface Field {
        /**
         * Field name.
         */
        name: string;

        /**
         * Field value (can be string, number, or boolean).
         */
        value: string | number | boolean;

        /**
         * Optional link associated with the field.
         */
        link?: string | null;
      }
    }
  }

  /**
   * Information about a failed remediation job creation.
   */
  export interface Failed {
    /**
     * Error message describing the failure.
     */
    error: string;

    /**
     * ID of the finding instance that failed to create a remediation job.
     */
    finding_instance_id: string;
  }
}

/**
 * Information about a remediation job.
 */
export interface JobListResponse {
  /**
   * Unique identifier for the remediation job.
   */
  id: string;

  /**
   * Asset information for a remediation job.
   */
  asset: JobListResponse.Asset;

  /**
   * When the remediation job was created.
   */
  created_at: string;

  /**
   * Encoded finding ID.
   */
  finding_id: string;

  /**
   * ID of the finding instance being remediated.
   */
  finding_instance_id: string;

  /**
   * ID of the finding type.
   */
  finding_type_id: string;

  /**
   * Name of the finding type.
   */
  finding_type_name: string;

  /**
   * Name of the integration.
   */
  integration_name: string;

  /**
   * When the remediation job was last updated.
   */
  last_updated: string;

  /**
   * Type of remediation being performed.
   */
  remediation_type: string;

  /**
   * Status of a remediation job.
   */
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'validating';

  /**
   * Email of the user who triggered the remediation. For account-token actors this
   * is the literal "Account API Token"; for policy actors this is empty.
   */
  triggered_by_user: string;

  /**
   * Type of actor that triggered the remediation job. Null on legacy rows created
   * before this column was populated.
   */
  triggered_by_actor?: 'user' | 'account_token' | null;

  /**
   * ID of the actor that triggered the job. Meaning depends on triggered_by_actor.
   * Null on legacy rows.
   */
  triggered_by_id?: string | null;
}

export namespace JobListResponse {
  /**
   * Asset information for a remediation job.
   */
  export interface Asset {
    /**
     * Unique identifier for the asset.
     */
    id: string;

    /**
     * Category information for a remediation job asset.
     */
    category: Asset.Category;

    /**
     * External identifier from the source system.
     */
    external_id: string;

    /**
     * Additional fields associated with the asset.
     */
    fields: Array<Asset.Field>;

    /**
     * Human-readable name of the asset.
     */
    name: string;

    /**
     * Direct link to the asset.
     */
    link?: string | null;
  }

  export namespace Asset {
    /**
     * Category information for a remediation job asset.
     */
    export interface Category {
      /**
       * Specific service within the vendor.
       */
      service: string;

      /**
       * Asset type.
       */
      type: string;

      /**
       * Display names for vendor types.
       */
      vendor:
        | 'AWS'
        | 'Anthropic'
        | 'Bitbucket'
        | 'Box'
        | 'Confluence'
        | 'Dropbox'
        | 'GitHub'
        | 'Google Cloud Platform'
        | 'Google Workspace'
        | 'Jira'
        | 'Microsoft'
        | 'Microsoft Internal'
        | 'Okta'
        | 'OpenAI'
        | 'Slack'
        | 'Salesforce'
        | 'ServiceNow'
        | 'Workday'
        | 'Zoom';
    }

    /**
     * Additional field information for a remediation job asset.
     */
    export interface Field {
      /**
       * Field name.
       */
      name: string;

      /**
       * Field value (can be string, number, or boolean).
       */
      value: string | number | boolean;

      /**
       * Optional link associated with the field.
       */
      link?: string | null;
    }
  }
}

/**
 * Information about an export job.
 */
export interface JobExportResponse {
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

export interface JobCreateParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: UUIDs identifying Finding Instances.
   */
  finding_instance_ids: Array<string>;

  /**
   * Body param: A UUID identifying this Remediation Type.
   */
  remediation_type_id: string;
}

export interface JobListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Query param: A cursor for pagination.
   */
  cursor?: string;

  /**
   * Query param: Direction to order results.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter by an integration ID
   */
  integration_id?: string;

  /**
   * Query param: Filter to view remediations updated on or before the max updated
   * datetime. Can be a date-time in ISO 8601 format or an epoch timestamp.
   */
  max_updated_at?: string;

  /**
   * Query param: Filter to view remediations updated on or after the min updated
   * datetime. Can be a date-time in ISO 8601 format or an epoch timestamp.
   */
  min_updated_at?: string;

  /**
   * Query param: An optional param to sort the results by the given field.
   */
  order?:
    | 'created_at'
    | 'affliction_date'
    | 'integration_name'
    | 'status'
    | 'last_updated_at'
    | 'asset_name'
    | 'finding_type_name';

  /**
   * Query param: A search term.
   */
  search?: string;

  /**
   * Query param: Filter to view remediations with the given status.
   */
  status?: 'pending' | 'processing' | 'completed' | 'failed' | 'validating';

  /**
   * Query param: Filter remediations by what kind of actor triggered them. Supports
   * multiple comma-separated values.
   */
  triggered_by_actor?: Array<'user' | 'account_token'>;
}

export interface JobExportParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: Filter by multiple integration IDs.
   */
  integration_id?: Array<string>;

  /**
   * Body param: Filter to view remediation jobs updated on or before this datetime.
   * Can be a date-time in ISO 8601 format or an epoch timestamp.
   */
  max_updated_at?: string;

  /**
   * Body param: Filter to view remediation jobs updated on or after this datetime.
   * Can be a date-time in ISO 8601 format or an epoch timestamp.
   */
  min_updated_at?: string;

  /**
   * Body param: Ordering specifications for the export.
   */
  orders?: Array<JobExportParams.Order>;

  /**
   * Body param: A search term.
   */
  search?: string;

  /**
   * Body param: Filter by remediation job status.
   */
  status?: Array<'pending' | 'processing' | 'completed' | 'failed' | 'validating'>;
}

export namespace JobExportParams {
  /**
   * Order specification for remediation jobs exports.
   */
  export interface Order {
    /**
     * Sort direction.
     */
    direction: 'asc' | 'desc';

    /**
     * Which field to use when ordering the remediation jobs.
     */
    name:
      | 'asset_name'
      | 'finding_type_name'
      | 'integration_name'
      | 'status'
      | 'last_updated_at'
      | 'affliction_date';
  }
}

export declare namespace Jobs {
  export {
    type JobCreateResponse as JobCreateResponse,
    type JobListResponse as JobListResponse,
    type JobExportResponse as JobExportResponse,
    type JobListResponsesV4PagePaginationArray as JobListResponsesV4PagePaginationArray,
    type JobCreateParams as JobCreateParams,
    type JobListParams as JobListParams,
    type JobExportParams as JobExportParams,
  };
}
