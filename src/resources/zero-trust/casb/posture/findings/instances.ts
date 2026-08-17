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

export class BaseInstances extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb', 'posture', 'findings', 'instances'] =
    Object.freeze(['zeroTrust', 'casb', 'posture', 'findings', 'instances'] as const);

  /**
   * Lists all security finding instances for a given security finding.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const instanceListResponse of client.zeroTrust.casb.posture.findings.instances.list(
   *   'U3RhaW5sZXNzIHJvY2tz',
   *   { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    findingID: string,
    params: InstanceListParams,
    options?: RequestOptions,
  ): PagePromise<InstanceListResponsesV4PagePaginationArray, InstanceListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/data-security/posture/findings/${findingID}/instances`,
      V4PagePaginationArray<InstanceListResponse>,
      { query, ...options },
    );
  }

  /**
   * Archive one or more finding instances.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.casb.posture.findings.instances.archive(
   *     'U3RhaW5sZXNzIHJvY2tz',
   *     {
   *       account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *       check_instances: [
   *         '497f6eca-6276-4993-bfeb-53cbbbba6f08',
   *       ],
   *     },
   *   );
   * ```
   */
  archive(
    findingID: string,
    params: InstanceArchiveParams,
    options?: RequestOptions,
  ): APIPromise<InstanceArchiveResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/data-security/posture/findings/${findingID}/instances/archive`,
        { body, ...options },
      ) as APIPromise<{ result: InstanceArchiveResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates a CSV export for Finding instances and accepts optional filters in the
   * payload.
   *
   * The `storage_namespace_id` path parameter is derived from the finding ID by
   * base64-decoding it (which yields `integration_id:finding_type_id`) and replacing
   * the colon with a hyphen.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.casb.posture.findings.instances.export(
   *     '00000000-0000-0000-0000-000000000001-00000000-0000-0000-0000-000000000002',
   *     { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   *   );
   * ```
   */
  export(
    storageNamespaceID: string,
    params: InstanceExportParams,
    options?: RequestOptions,
  ): APIPromise<InstanceExportResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/data-security/posture/findings/${storageNamespaceID}/instances/export`,
        { body, ...options },
      ) as APIPromise<{ result: InstanceExportResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets a security Finding instance by id.
   *
   * @example
   * ```ts
   * const instance =
   *   await client.zeroTrust.casb.posture.findings.instances.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *       finding_id: 'U3RhaW5sZXNzIHJvY2tz',
   *     },
   *   );
   * ```
   */
  get(
    instanceID: string,
    params: InstanceGetParams,
    options?: RequestOptions,
  ): APIPromise<InstanceGetResponse> {
    const { account_id, finding_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/data-security/posture/findings/${finding_id}/instances/${instanceID}`,
        options,
      ) as APIPromise<{ result: InstanceGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove the archive marking from one or more finding instances.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.casb.posture.findings.instances.unarchive(
   *     'U3RhaW5sZXNzIHJvY2tz',
   *     {
   *       account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *       check_instances: [
   *         '497f6eca-6276-4993-bfeb-53cbbbba6f08',
   *       ],
   *     },
   *   );
   * ```
   */
  unarchive(
    findingID: string,
    params: InstanceUnarchiveParams,
    options?: RequestOptions,
  ): APIPromise<InstanceUnarchiveResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/data-security/posture/findings/${findingID}/instances/unarchive`,
        { body, ...options },
      ) as APIPromise<{ result: InstanceUnarchiveResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Instances extends BaseInstances {}

export type InstanceListResponsesV4PagePaginationArray = V4PagePaginationArray<InstanceListResponse>;

/**
 * A specific instance of a security finding. In the API interface, we refer to the
 * 'finding' table in our DB as finding instances, optimized for the p99 use case.
 */
export interface InstanceListResponse {
  /**
   * When this specific instance was identified.
   */
  affliction_date: string;

  /**
   * Asset information including metadata and categorization.
   */
  asset: InstanceListResponse.Asset;

  /**
   * DLP context information if this is a content finding.
   */
  dlp_contexts: Array<InstanceListResponse.DLPContext>;

  /**
   * A list of the 10 most recent remediation jobs for this finding instance, ordered
   * by creation time (most recent first). The 'stale' field indicates whether the
   * remediation job was created before the finding instance's affliction_date (true)
   * or after it (false). If there has never been a remediation job for this finding
   * instance, this field will be an empty array.
   */
  remediations: Array<InstanceListResponse.Remediation>;

  /**
   * The most recent webhook job invocation for each webhook configuration associated
   * with this finding instance. Each entry represents the latest job (any status)
   * per webhook config. The 'stale' field indicates whether the job was invoked
   * before the finding instance's current affliction_date. If no webhook jobs have
   * been created, this field will be an empty array.
   */
  webhooks: Array<InstanceListResponse.Webhook>;

  /**
   * Unique identifier for the finding instance.
   */
  id?: string;

  /**
   * Whether this finding instance has been archived.
   */
  is_archived?: boolean;
}

export namespace InstanceListResponse {
  /**
   * Asset information including metadata and categorization.
   */
  export interface Asset {
    /**
     * Category information for an asset.
     */
    category: Asset.Category;

    /**
     * External identifier from the source system.
     */
    external_id: string;

    /**
     * The fields associated with the asset.
     */
    fields: Array<Asset.Field>;

    /**
     * Human-readable name of the asset.
     */
    name: string;

    /**
     * Unique identifier for the asset.
     */
    id?: string;

    /**
     * Direct link to the asset.
     */
    link?: string | null;
  }

  export namespace Asset {
    /**
     * Category information for an asset.
     */
    export interface Category {
      /**
       * The specific service within the vendor the asset is part of (often none).
       * Example - AWS is the vendor, S3 is the service.
       */
      service: string | null;

      /**
       * The type of asset.
       */
      type: string;

      /**
       * The vendor the asset is part of.
       */
      vendor: string;

      /**
       * Unique identifier for the asset category.
       */
      id?: string;
    }

    /**
     * Additional field information for an asset.
     */
    export interface Field {
      /**
       * The name of the field.
       */
      name: string;

      /**
       * The value of the field.
       */
      value: string;

      /**
       * Optional link associated with the field.
       */
      link?: string | null;
    }
  }

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
   * Summary information about a remediation job.
   */
  export interface Remediation {
    /**
     * Unique identifier for the remediation job.
     */
    id: string;

    /**
     * When the remediation job was created.
     */
    created_at: string;

    /**
     * Whether this remediation job is stale (created before the finding instance's
     * affliction_date).
     */
    stale: boolean;

    /**
     * Status of a remediation job.
     */
    status: 'pending' | 'processing' | 'completed' | 'failed' | 'validating';
  }

  /**
   * Summary of the most recent webhook job invocation for a specific webhook
   * configuration.
   */
  export interface Webhook {
    /**
     * The most recent webhook job for this webhook configuration.
     */
    latest_job: Webhook.LatestJob;

    /**
     * Unique identifier for the webhook configuration.
     */
    webhook_id: string;

    /**
     * Account-specified display label for the webhook configuration.
     */
    webhook_label: string;
  }

  export namespace Webhook {
    /**
     * The most recent webhook job for this webhook configuration.
     */
    export interface LatestJob {
      /**
       * Unique identifier for the webhook job.
       */
      id: string;

      /**
       * When the webhook job was created.
       */
      created_at: string;

      /**
       * Whether this webhook job is stale (created before the finding instance's current
       * affliction_date).
       */
      stale: boolean;

      /**
       * Current status of the webhook job.
       */
      status: 'pending' | 'processing' | 'completed';
    }
  }
}

/**
 * A specific instance of a security finding. In the API interface, we refer to the
 * 'finding' table in our DB as finding instances, optimized for the p99 use case.
 */
export interface InstanceArchiveResponse {
  /**
   * When this specific instance was identified.
   */
  affliction_date: string;

  /**
   * Asset information including metadata and categorization.
   */
  asset: InstanceArchiveResponse.Asset;

  /**
   * DLP context information if this is a content finding.
   */
  dlp_contexts: Array<InstanceArchiveResponse.DLPContext>;

  /**
   * A list of the 10 most recent remediation jobs for this finding instance, ordered
   * by creation time (most recent first). The 'stale' field indicates whether the
   * remediation job was created before the finding instance's affliction_date (true)
   * or after it (false). If there has never been a remediation job for this finding
   * instance, this field will be an empty array.
   */
  remediations: Array<InstanceArchiveResponse.Remediation>;

  /**
   * The most recent webhook job invocation for each webhook configuration associated
   * with this finding instance. Each entry represents the latest job (any status)
   * per webhook config. The 'stale' field indicates whether the job was invoked
   * before the finding instance's current affliction_date. If no webhook jobs have
   * been created, this field will be an empty array.
   */
  webhooks: Array<InstanceArchiveResponse.Webhook>;

  /**
   * Unique identifier for the finding instance.
   */
  id?: string;

  /**
   * Whether this finding instance has been archived.
   */
  is_archived?: boolean;
}

export namespace InstanceArchiveResponse {
  /**
   * Asset information including metadata and categorization.
   */
  export interface Asset {
    /**
     * Category information for an asset.
     */
    category: Asset.Category;

    /**
     * External identifier from the source system.
     */
    external_id: string;

    /**
     * The fields associated with the asset.
     */
    fields: Array<Asset.Field>;

    /**
     * Human-readable name of the asset.
     */
    name: string;

    /**
     * Unique identifier for the asset.
     */
    id?: string;

    /**
     * Direct link to the asset.
     */
    link?: string | null;
  }

  export namespace Asset {
    /**
     * Category information for an asset.
     */
    export interface Category {
      /**
       * The specific service within the vendor the asset is part of (often none).
       * Example - AWS is the vendor, S3 is the service.
       */
      service: string | null;

      /**
       * The type of asset.
       */
      type: string;

      /**
       * The vendor the asset is part of.
       */
      vendor: string;

      /**
       * Unique identifier for the asset category.
       */
      id?: string;
    }

    /**
     * Additional field information for an asset.
     */
    export interface Field {
      /**
       * The name of the field.
       */
      name: string;

      /**
       * The value of the field.
       */
      value: string;

      /**
       * Optional link associated with the field.
       */
      link?: string | null;
    }
  }

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
   * Summary information about a remediation job.
   */
  export interface Remediation {
    /**
     * Unique identifier for the remediation job.
     */
    id: string;

    /**
     * When the remediation job was created.
     */
    created_at: string;

    /**
     * Whether this remediation job is stale (created before the finding instance's
     * affliction_date).
     */
    stale: boolean;

    /**
     * Status of a remediation job.
     */
    status: 'pending' | 'processing' | 'completed' | 'failed' | 'validating';
  }

  /**
   * Summary of the most recent webhook job invocation for a specific webhook
   * configuration.
   */
  export interface Webhook {
    /**
     * The most recent webhook job for this webhook configuration.
     */
    latest_job: Webhook.LatestJob;

    /**
     * Unique identifier for the webhook configuration.
     */
    webhook_id: string;

    /**
     * Account-specified display label for the webhook configuration.
     */
    webhook_label: string;
  }

  export namespace Webhook {
    /**
     * The most recent webhook job for this webhook configuration.
     */
    export interface LatestJob {
      /**
       * Unique identifier for the webhook job.
       */
      id: string;

      /**
       * When the webhook job was created.
       */
      created_at: string;

      /**
       * Whether this webhook job is stale (created before the finding instance's current
       * affliction_date).
       */
      stale: boolean;

      /**
       * Current status of the webhook job.
       */
      status: 'pending' | 'processing' | 'completed';
    }
  }
}

/**
 * Information about an export job.
 */
export interface InstanceExportResponse {
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

/**
 * A specific instance of a security finding. In the API interface, we refer to the
 * 'finding' table in our DB as finding instances, optimized for the p99 use case.
 */
export interface InstanceGetResponse {
  /**
   * When this specific instance was identified.
   */
  affliction_date: string;

  /**
   * Asset information including metadata and categorization.
   */
  asset: InstanceGetResponse.Asset;

  /**
   * DLP context information if this is a content finding.
   */
  dlp_contexts: Array<InstanceGetResponse.DLPContext>;

  /**
   * A list of the 10 most recent remediation jobs for this finding instance, ordered
   * by creation time (most recent first). The 'stale' field indicates whether the
   * remediation job was created before the finding instance's affliction_date (true)
   * or after it (false). If there has never been a remediation job for this finding
   * instance, this field will be an empty array.
   */
  remediations: Array<InstanceGetResponse.Remediation>;

  /**
   * The most recent webhook job invocation for each webhook configuration associated
   * with this finding instance. Each entry represents the latest job (any status)
   * per webhook config. The 'stale' field indicates whether the job was invoked
   * before the finding instance's current affliction_date. If no webhook jobs have
   * been created, this field will be an empty array.
   */
  webhooks: Array<InstanceGetResponse.Webhook>;

  /**
   * Unique identifier for the finding instance.
   */
  id?: string;

  /**
   * Whether this finding instance has been archived.
   */
  is_archived?: boolean;
}

export namespace InstanceGetResponse {
  /**
   * Asset information including metadata and categorization.
   */
  export interface Asset {
    /**
     * Category information for an asset.
     */
    category: Asset.Category;

    /**
     * External identifier from the source system.
     */
    external_id: string;

    /**
     * The fields associated with the asset.
     */
    fields: Array<Asset.Field>;

    /**
     * Human-readable name of the asset.
     */
    name: string;

    /**
     * Unique identifier for the asset.
     */
    id?: string;

    /**
     * Direct link to the asset.
     */
    link?: string | null;
  }

  export namespace Asset {
    /**
     * Category information for an asset.
     */
    export interface Category {
      /**
       * The specific service within the vendor the asset is part of (often none).
       * Example - AWS is the vendor, S3 is the service.
       */
      service: string | null;

      /**
       * The type of asset.
       */
      type: string;

      /**
       * The vendor the asset is part of.
       */
      vendor: string;

      /**
       * Unique identifier for the asset category.
       */
      id?: string;
    }

    /**
     * Additional field information for an asset.
     */
    export interface Field {
      /**
       * The name of the field.
       */
      name: string;

      /**
       * The value of the field.
       */
      value: string;

      /**
       * Optional link associated with the field.
       */
      link?: string | null;
    }
  }

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
   * Summary information about a remediation job.
   */
  export interface Remediation {
    /**
     * Unique identifier for the remediation job.
     */
    id: string;

    /**
     * When the remediation job was created.
     */
    created_at: string;

    /**
     * Whether this remediation job is stale (created before the finding instance's
     * affliction_date).
     */
    stale: boolean;

    /**
     * Status of a remediation job.
     */
    status: 'pending' | 'processing' | 'completed' | 'failed' | 'validating';
  }

  /**
   * Summary of the most recent webhook job invocation for a specific webhook
   * configuration.
   */
  export interface Webhook {
    /**
     * The most recent webhook job for this webhook configuration.
     */
    latest_job: Webhook.LatestJob;

    /**
     * Unique identifier for the webhook configuration.
     */
    webhook_id: string;

    /**
     * Account-specified display label for the webhook configuration.
     */
    webhook_label: string;
  }

  export namespace Webhook {
    /**
     * The most recent webhook job for this webhook configuration.
     */
    export interface LatestJob {
      /**
       * Unique identifier for the webhook job.
       */
      id: string;

      /**
       * When the webhook job was created.
       */
      created_at: string;

      /**
       * Whether this webhook job is stale (created before the finding instance's current
       * affliction_date).
       */
      stale: boolean;

      /**
       * Current status of the webhook job.
       */
      status: 'pending' | 'processing' | 'completed';
    }
  }
}

/**
 * A specific instance of a security finding. In the API interface, we refer to the
 * 'finding' table in our DB as finding instances, optimized for the p99 use case.
 */
export interface InstanceUnarchiveResponse {
  /**
   * When this specific instance was identified.
   */
  affliction_date: string;

  /**
   * Asset information including metadata and categorization.
   */
  asset: InstanceUnarchiveResponse.Asset;

  /**
   * DLP context information if this is a content finding.
   */
  dlp_contexts: Array<InstanceUnarchiveResponse.DLPContext>;

  /**
   * A list of the 10 most recent remediation jobs for this finding instance, ordered
   * by creation time (most recent first). The 'stale' field indicates whether the
   * remediation job was created before the finding instance's affliction_date (true)
   * or after it (false). If there has never been a remediation job for this finding
   * instance, this field will be an empty array.
   */
  remediations: Array<InstanceUnarchiveResponse.Remediation>;

  /**
   * The most recent webhook job invocation for each webhook configuration associated
   * with this finding instance. Each entry represents the latest job (any status)
   * per webhook config. The 'stale' field indicates whether the job was invoked
   * before the finding instance's current affliction_date. If no webhook jobs have
   * been created, this field will be an empty array.
   */
  webhooks: Array<InstanceUnarchiveResponse.Webhook>;

  /**
   * Unique identifier for the finding instance.
   */
  id?: string;

  /**
   * Whether this finding instance has been archived.
   */
  is_archived?: boolean;
}

export namespace InstanceUnarchiveResponse {
  /**
   * Asset information including metadata and categorization.
   */
  export interface Asset {
    /**
     * Category information for an asset.
     */
    category: Asset.Category;

    /**
     * External identifier from the source system.
     */
    external_id: string;

    /**
     * The fields associated with the asset.
     */
    fields: Array<Asset.Field>;

    /**
     * Human-readable name of the asset.
     */
    name: string;

    /**
     * Unique identifier for the asset.
     */
    id?: string;

    /**
     * Direct link to the asset.
     */
    link?: string | null;
  }

  export namespace Asset {
    /**
     * Category information for an asset.
     */
    export interface Category {
      /**
       * The specific service within the vendor the asset is part of (often none).
       * Example - AWS is the vendor, S3 is the service.
       */
      service: string | null;

      /**
       * The type of asset.
       */
      type: string;

      /**
       * The vendor the asset is part of.
       */
      vendor: string;

      /**
       * Unique identifier for the asset category.
       */
      id?: string;
    }

    /**
     * Additional field information for an asset.
     */
    export interface Field {
      /**
       * The name of the field.
       */
      name: string;

      /**
       * The value of the field.
       */
      value: string;

      /**
       * Optional link associated with the field.
       */
      link?: string | null;
    }
  }

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
   * Summary information about a remediation job.
   */
  export interface Remediation {
    /**
     * Unique identifier for the remediation job.
     */
    id: string;

    /**
     * When the remediation job was created.
     */
    created_at: string;

    /**
     * Whether this remediation job is stale (created before the finding instance's
     * affliction_date).
     */
    stale: boolean;

    /**
     * Status of a remediation job.
     */
    status: 'pending' | 'processing' | 'completed' | 'failed' | 'validating';
  }

  /**
   * Summary of the most recent webhook job invocation for a specific webhook
   * configuration.
   */
  export interface Webhook {
    /**
     * The most recent webhook job for this webhook configuration.
     */
    latest_job: Webhook.LatestJob;

    /**
     * Unique identifier for the webhook configuration.
     */
    webhook_id: string;

    /**
     * Account-specified display label for the webhook configuration.
     */
    webhook_label: string;
  }

  export namespace Webhook {
    /**
     * The most recent webhook job for this webhook configuration.
     */
    export interface LatestJob {
      /**
       * Unique identifier for the webhook job.
       */
      id: string;

      /**
       * When the webhook job was created.
       */
      created_at: string;

      /**
       * Whether this webhook job is stale (created before the finding instance's current
       * affliction_date).
       */
      stale: boolean;

      /**
       * Current status of the webhook job.
       */
      status: 'pending' | 'processing' | 'completed';
    }
  }
}

export interface InstanceListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Query param: Archived
   */
  archived?: boolean;

  /**
   * Query param: Filter finding instances by an array of asset IDs. Supports
   * multiple comma-separated values.
   */
  asset_ids?: Array<string>;

  /**
   * Query param: A cursor for pagination. Obtained from the `result_info.cursor`
   * field of a previous response.
   */
  cursor?: string;

  /**
   * Query param: Direction to order results.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter finding instances by an array of finding instance IDs.
   * Supports multiple comma-separated values.
   */
  finding_instance_ids?: Array<string>;

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
   * Query param: Which field to use when ordering the Finding's instances. When
   * ordering by 'remediation.status', only the most recent non-stale remediation job
   * is considered. Stale jobs (created before the instance's affliction_date) are
   * treated as having no status for ordering purposes.
   */
  order?: 'affliction_date' | 'asset.name' | 'remediation.status';

  /**
   * Query param: Filter finding instances by most recent remediation job status.
   * Supports multiple comma-separated values. Use 'none' to filter instances with no
   * remediation jobs or instances where the most recent job is stale. Note: Stale
   * jobs (created before the instance's affliction_date) are ignored for filtering
   * purposes, but are still included in the 'remediations' array with stale=true.
   */
  remediation_statuses?: Array<'none' | 'pending' | 'processing' | 'validating' | 'completed' | 'failed'>;

  /**
   * Query param: A search term.
   */
  search?: string;
}

export interface InstanceArchiveParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: A list of finding instance IDs to pass along.
   */
  check_instances: Array<string>;
}

export interface InstanceExportParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: Filter for archived status.
   */
  archived?: boolean;

  /**
   * Body param: Filter to view findings that occurred on or before the affliction
   * date. Can be a date-time in ISO 8601 format or an epoch timestamp.
   */
  max_affliction_date?: string;

  /**
   * Body param: Filter to view findings that occurred on or after the affliction
   * date. Can be a date-time in ISO 8601 format or an epoch timestamp.
   */
  min_affliction_date?: string;

  /**
   * Body param: Ordering specifications for the export.
   */
  orders?: Array<InstanceExportParams.Order>;

  /**
   * Body param: A search term.
   */
  search?: string;
}

export namespace InstanceExportParams {
  /**
   * Order specification for finding instance exports.
   */
  export interface Order {
    /**
     * Sort direction.
     */
    direction: 'asc' | 'desc';

    /**
     * Which field to use when ordering the finding instances.
     */
    name: 'asset.name' | 'affliction_date';
  }
}

export interface InstanceGetParams {
  /**
   * Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * A base64-encoded ID identifying this Finding.
   */
  finding_id: string;
}

export interface InstanceUnarchiveParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: A list of finding instance IDs to pass along.
   */
  check_instances: Array<string>;
}

export declare namespace Instances {
  export {
    type InstanceListResponse as InstanceListResponse,
    type InstanceArchiveResponse as InstanceArchiveResponse,
    type InstanceExportResponse as InstanceExportResponse,
    type InstanceGetResponse as InstanceGetResponse,
    type InstanceUnarchiveResponse as InstanceUnarchiveResponse,
    type InstanceListResponsesV4PagePaginationArray as InstanceListResponsesV4PagePaginationArray,
    type InstanceListParams as InstanceListParams,
    type InstanceArchiveParams as InstanceArchiveParams,
    type InstanceExportParams as InstanceExportParams,
    type InstanceGetParams as InstanceGetParams,
    type InstanceUnarchiveParams as InstanceUnarchiveParams,
  };
}
