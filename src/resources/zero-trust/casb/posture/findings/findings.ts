// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as InstancesAPI from './instances';
import {
  BaseInstances,
  InstanceArchiveParams,
  InstanceArchiveResponse,
  InstanceExportParams,
  InstanceExportResponse,
  InstanceGetParams,
  InstanceGetResponse,
  InstanceListParams,
  InstanceListResponse,
  InstanceListResponsesV4PagePaginationArray,
  InstanceUnarchiveParams,
  InstanceUnarchiveResponse,
  Instances,
} from './instances';
import { APIPromise } from '../../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseFindings extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb', 'posture', 'findings'] = Object.freeze([
    'zeroTrust',
    'casb',
    'posture',
    'findings',
  ] as const);

  /**
   * List all security findings that have been identified as being problematic. This
   * will return a list of findings regardless if they have been ignored or not.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const findingListResponse of client.zeroTrust.casb.posture.findings.list(
   *   { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: FindingListParams,
    options?: RequestOptions,
  ): PagePromise<FindingListResponsesV4PagePaginationArray, FindingListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/data-security/posture/findings`,
      V4PagePaginationArray<FindingListResponse>,
      { query, ...options },
    );
  }

  /**
   * Creates a CSV export for findings and accepts optional filters in the payload.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.casb.posture.findings.export({
   *     account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *   });
   * ```
   */
  export(params: FindingExportParams, options?: RequestOptions): APIPromise<FindingExportResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/data-security/posture/findings/export`, {
        body,
        ...options,
      }) as APIPromise<{ result: FindingExportResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets a security Finding that has been identified as being problematic.
   *
   * @example
   * ```ts
   * const finding =
   *   await client.zeroTrust.casb.posture.findings.get(
   *     'U3RhaW5sZXNzIHJvY2tz',
   *     { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   *   );
   * ```
   */
  get(findingID: string, params: FindingGetParams, options?: RequestOptions): APIPromise<FindingGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/data-security/posture/findings/${findingID}`,
        options,
      ) as APIPromise<{ result: FindingGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Given a list of findings, mark as ignored. Does nothing if Finding is already
   * ignored.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.casb.posture.findings.ignore({
   *     account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *     checks: [
   *       'MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAxOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMgo=',
   *     ],
   *   });
   * ```
   */
  ignore(params: FindingIgnoreParams, options?: RequestOptions): APIPromise<FindingIgnoreResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/data-security/posture/findings/ignore`, {
        body,
        ...options,
      }) as APIPromise<{ result: FindingIgnoreResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * If a Finding's severity has been changed, reset it back to default value. Does
   * nothing if no override exists.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.casb.posture.findings.resetSeverity(
   *     'U3RhaW5sZXNzIHJvY2tz',
   *     { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   *   );
   * ```
   */
  resetSeverity(
    findingID: string,
    params: FindingResetSeverityParams,
    options?: RequestOptions,
  ): APIPromise<FindingResetSeverityResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/data-security/posture/findings/${findingID}/reset_finding_severity`,
        options,
      ) as APIPromise<{ result: FindingResetSeverityResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the severity of a Finding. This will update the `severity_override` field
   * on the Finding payload with the new severity value.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.casb.posture.findings.tuneSeverity(
   *     'U3RhaW5sZXNzIHJvY2tz',
   *     {
   *       account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *       new_severity: 1,
   *     },
   *   );
   * ```
   */
  tuneSeverity(
    findingID: string,
    params: FindingTuneSeverityParams,
    options?: RequestOptions,
  ): APIPromise<FindingTuneSeverityResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/data-security/posture/findings/${findingID}/tune_finding_severity`,
        { body, ...options },
      ) as APIPromise<{ result: FindingTuneSeverityResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Ability to un-ignore a Finding if it's previously been ignored. Does nothing if
   * the Finding is not ignored.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.casb.posture.findings.unignore({
   *     account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *     checks: [
   *       'MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAxOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMgo=',
   *     ],
   *   });
   * ```
   */
  unignore(params: FindingUnignoreParams, options?: RequestOptions): APIPromise<FindingUnignoreResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/data-security/posture/findings/unignore`, {
        body,
        ...options,
      }) as APIPromise<{ result: FindingUnignoreResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Findings extends BaseFindings {
  instances: InstancesAPI.Instances = new InstancesAPI.Instances(this._client);
}

export type FindingListResponsesV4PagePaginationArray = V4PagePaginationArray<FindingListResponse>;

/**
 * Aggregated finding information with counts and metadata. This is optimized for
 * list API queries and represents a finding along with its instance statistics.
 */
export interface FindingListResponse {
  /**
   * Base64 encoded identifier of the security finding.
   */
  id: string;

  /**
   * Number of active problematic instances identified in the security finding.
   */
  active_count: number;

  /**
   * Number of archived instances identified in the security finding.
   */
  archived_count: number;

  /**
   * Basic finding type information.
   */
  finding: FindingListResponse.Finding;

  /**
   * Determines if finding is currently ignored.
   */
  ignored: boolean;

  /**
   * Number of total (Active or archived) problematic instances identified in the
   * security finding.
   */
  instance_count: number;

  /**
   * Summary information about an integration.
   */
  integration: FindingListResponse.Integration;

  /**
   * Timestamp of the latest affliction date of an active finding.
   */
  latest_affliction_date: string;

  /**
   * Override information for finding severity.
   */
  severity_override?: FindingListResponse.SeverityOverride;
}

export namespace FindingListResponse {
  /**
   * Basic finding type information.
   */
  export interface Finding {
    /**
     * The unique identifier of the finding.
     */
    id: string;

    /**
     * Category information for a finding.
     */
    category: Finding.Category;

    /**
     * The name of the finding.
     */
    name: string;

    /**
     * The severity level of a finding.
     */
    severity: 'Critical' | 'High' | 'Medium' | 'Low';

    /**
     * The SaaS/Cloud vendor of the platform with which the finding is associated.
     */
    vendor: string;

    /**
     * Detailed description of the finding.
     */
    description?: string | null;

    /**
     * Remediation guide information for a finding.
     */
    remediation?: Finding.Remediation;
  }

  export namespace Finding {
    /**
     * Category information for a finding.
     */
    export interface Category {
      /**
       * The type of the observation.
       */
      observation: 'Issue' | 'Insight' | 'Activity';

      /**
       * The product category.
       */
      product: 'SaaS' | 'Cloud';

      /**
       * The type of the finding category.
       */
      type: 'Content' | 'Posture';
    }

    /**
     * Remediation guide information for a finding.
     */
    export interface Remediation {
      /**
       * Remediation Id.
       */
      id: string;

      /**
       * Relevant Compliance Frameworks.
       */
      frameworks: Array<string>;

      /**
       * Remediation guide text.
       */
      guide: string;

      /**
       * Description of the potential impact.
       */
      impact: string;

      /**
       * I18N Locale.
       */
      locale: string;

      /**
       * Description of the threat.
       */
      threat: string;
    }
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

  /**
   * Override information for finding severity.
   */
  export interface SeverityOverride {
    /**
     * User ID who created the override.
     */
    created_by: string;

    /**
     * The severity level of a finding.
     */
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
  }
}

/**
 * Information about an export job.
 */
export interface FindingExportResponse {
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
 * Aggregated finding information with counts and metadata. This is optimized for
 * list API queries and represents a finding along with its instance statistics.
 */
export interface FindingGetResponse {
  /**
   * Base64 encoded identifier of the security finding.
   */
  id: string;

  /**
   * Number of active problematic instances identified in the security finding.
   */
  active_count: number;

  /**
   * Number of archived instances identified in the security finding.
   */
  archived_count: number;

  /**
   * Basic finding type information.
   */
  finding: FindingGetResponse.Finding;

  /**
   * Determines if finding is currently ignored.
   */
  ignored: boolean;

  /**
   * Number of total (Active or archived) problematic instances identified in the
   * security finding.
   */
  instance_count: number;

  /**
   * Summary information about an integration.
   */
  integration: FindingGetResponse.Integration;

  /**
   * Timestamp of the latest affliction date of an active finding.
   */
  latest_affliction_date: string;

  /**
   * Override information for finding severity.
   */
  severity_override?: FindingGetResponse.SeverityOverride;
}

export namespace FindingGetResponse {
  /**
   * Basic finding type information.
   */
  export interface Finding {
    /**
     * The unique identifier of the finding.
     */
    id: string;

    /**
     * Category information for a finding.
     */
    category: Finding.Category;

    /**
     * The name of the finding.
     */
    name: string;

    /**
     * The severity level of a finding.
     */
    severity: 'Critical' | 'High' | 'Medium' | 'Low';

    /**
     * The SaaS/Cloud vendor of the platform with which the finding is associated.
     */
    vendor: string;

    /**
     * Detailed description of the finding.
     */
    description?: string | null;

    /**
     * Remediation guide information for a finding.
     */
    remediation?: Finding.Remediation;
  }

  export namespace Finding {
    /**
     * Category information for a finding.
     */
    export interface Category {
      /**
       * The type of the observation.
       */
      observation: 'Issue' | 'Insight' | 'Activity';

      /**
       * The product category.
       */
      product: 'SaaS' | 'Cloud';

      /**
       * The type of the finding category.
       */
      type: 'Content' | 'Posture';
    }

    /**
     * Remediation guide information for a finding.
     */
    export interface Remediation {
      /**
       * Remediation Id.
       */
      id: string;

      /**
       * Relevant Compliance Frameworks.
       */
      frameworks: Array<string>;

      /**
       * Remediation guide text.
       */
      guide: string;

      /**
       * Description of the potential impact.
       */
      impact: string;

      /**
       * I18N Locale.
       */
      locale: string;

      /**
       * Description of the threat.
       */
      threat: string;
    }
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

  /**
   * Override information for finding severity.
   */
  export interface SeverityOverride {
    /**
     * User ID who created the override.
     */
    created_by: string;

    /**
     * The severity level of a finding.
     */
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
  }
}

/**
 * Aggregated finding information with counts and metadata. This is optimized for
 * list API queries and represents a finding along with its instance statistics.
 */
export interface FindingIgnoreResponse {
  /**
   * Base64 encoded identifier of the security finding.
   */
  id: string;

  /**
   * Number of active problematic instances identified in the security finding.
   */
  active_count: number;

  /**
   * Number of archived instances identified in the security finding.
   */
  archived_count: number;

  /**
   * Basic finding type information.
   */
  finding: FindingIgnoreResponse.Finding;

  /**
   * Determines if finding is currently ignored.
   */
  ignored: boolean;

  /**
   * Number of total (Active or archived) problematic instances identified in the
   * security finding.
   */
  instance_count: number;

  /**
   * Summary information about an integration.
   */
  integration: FindingIgnoreResponse.Integration;

  /**
   * Timestamp of the latest affliction date of an active finding.
   */
  latest_affliction_date: string;

  /**
   * Override information for finding severity.
   */
  severity_override?: FindingIgnoreResponse.SeverityOverride;
}

export namespace FindingIgnoreResponse {
  /**
   * Basic finding type information.
   */
  export interface Finding {
    /**
     * The unique identifier of the finding.
     */
    id: string;

    /**
     * Category information for a finding.
     */
    category: Finding.Category;

    /**
     * The name of the finding.
     */
    name: string;

    /**
     * The severity level of a finding.
     */
    severity: 'Critical' | 'High' | 'Medium' | 'Low';

    /**
     * The SaaS/Cloud vendor of the platform with which the finding is associated.
     */
    vendor: string;

    /**
     * Detailed description of the finding.
     */
    description?: string | null;

    /**
     * Remediation guide information for a finding.
     */
    remediation?: Finding.Remediation;
  }

  export namespace Finding {
    /**
     * Category information for a finding.
     */
    export interface Category {
      /**
       * The type of the observation.
       */
      observation: 'Issue' | 'Insight' | 'Activity';

      /**
       * The product category.
       */
      product: 'SaaS' | 'Cloud';

      /**
       * The type of the finding category.
       */
      type: 'Content' | 'Posture';
    }

    /**
     * Remediation guide information for a finding.
     */
    export interface Remediation {
      /**
       * Remediation Id.
       */
      id: string;

      /**
       * Relevant Compliance Frameworks.
       */
      frameworks: Array<string>;

      /**
       * Remediation guide text.
       */
      guide: string;

      /**
       * Description of the potential impact.
       */
      impact: string;

      /**
       * I18N Locale.
       */
      locale: string;

      /**
       * Description of the threat.
       */
      threat: string;
    }
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

  /**
   * Override information for finding severity.
   */
  export interface SeverityOverride {
    /**
     * User ID who created the override.
     */
    created_by: string;

    /**
     * The severity level of a finding.
     */
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
  }
}

/**
 * Aggregated finding information with counts and metadata. This is optimized for
 * list API queries and represents a finding along with its instance statistics.
 */
export interface FindingResetSeverityResponse {
  /**
   * Base64 encoded identifier of the security finding.
   */
  id: string;

  /**
   * Number of active problematic instances identified in the security finding.
   */
  active_count: number;

  /**
   * Number of archived instances identified in the security finding.
   */
  archived_count: number;

  /**
   * Basic finding type information.
   */
  finding: FindingResetSeverityResponse.Finding;

  /**
   * Determines if finding is currently ignored.
   */
  ignored: boolean;

  /**
   * Number of total (Active or archived) problematic instances identified in the
   * security finding.
   */
  instance_count: number;

  /**
   * Summary information about an integration.
   */
  integration: FindingResetSeverityResponse.Integration;

  /**
   * Timestamp of the latest affliction date of an active finding.
   */
  latest_affliction_date: string;

  /**
   * Override information for finding severity.
   */
  severity_override?: FindingResetSeverityResponse.SeverityOverride;
}

export namespace FindingResetSeverityResponse {
  /**
   * Basic finding type information.
   */
  export interface Finding {
    /**
     * The unique identifier of the finding.
     */
    id: string;

    /**
     * Category information for a finding.
     */
    category: Finding.Category;

    /**
     * The name of the finding.
     */
    name: string;

    /**
     * The severity level of a finding.
     */
    severity: 'Critical' | 'High' | 'Medium' | 'Low';

    /**
     * The SaaS/Cloud vendor of the platform with which the finding is associated.
     */
    vendor: string;

    /**
     * Detailed description of the finding.
     */
    description?: string | null;

    /**
     * Remediation guide information for a finding.
     */
    remediation?: Finding.Remediation;
  }

  export namespace Finding {
    /**
     * Category information for a finding.
     */
    export interface Category {
      /**
       * The type of the observation.
       */
      observation: 'Issue' | 'Insight' | 'Activity';

      /**
       * The product category.
       */
      product: 'SaaS' | 'Cloud';

      /**
       * The type of the finding category.
       */
      type: 'Content' | 'Posture';
    }

    /**
     * Remediation guide information for a finding.
     */
    export interface Remediation {
      /**
       * Remediation Id.
       */
      id: string;

      /**
       * Relevant Compliance Frameworks.
       */
      frameworks: Array<string>;

      /**
       * Remediation guide text.
       */
      guide: string;

      /**
       * Description of the potential impact.
       */
      impact: string;

      /**
       * I18N Locale.
       */
      locale: string;

      /**
       * Description of the threat.
       */
      threat: string;
    }
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

  /**
   * Override information for finding severity.
   */
  export interface SeverityOverride {
    /**
     * User ID who created the override.
     */
    created_by: string;

    /**
     * The severity level of a finding.
     */
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
  }
}

/**
 * Aggregated finding information with counts and metadata. This is optimized for
 * list API queries and represents a finding along with its instance statistics.
 */
export interface FindingTuneSeverityResponse {
  /**
   * Base64 encoded identifier of the security finding.
   */
  id: string;

  /**
   * Number of active problematic instances identified in the security finding.
   */
  active_count: number;

  /**
   * Number of archived instances identified in the security finding.
   */
  archived_count: number;

  /**
   * Basic finding type information.
   */
  finding: FindingTuneSeverityResponse.Finding;

  /**
   * Determines if finding is currently ignored.
   */
  ignored: boolean;

  /**
   * Number of total (Active or archived) problematic instances identified in the
   * security finding.
   */
  instance_count: number;

  /**
   * Summary information about an integration.
   */
  integration: FindingTuneSeverityResponse.Integration;

  /**
   * Timestamp of the latest affliction date of an active finding.
   */
  latest_affliction_date: string;

  /**
   * Override information for finding severity.
   */
  severity_override?: FindingTuneSeverityResponse.SeverityOverride;
}

export namespace FindingTuneSeverityResponse {
  /**
   * Basic finding type information.
   */
  export interface Finding {
    /**
     * The unique identifier of the finding.
     */
    id: string;

    /**
     * Category information for a finding.
     */
    category: Finding.Category;

    /**
     * The name of the finding.
     */
    name: string;

    /**
     * The severity level of a finding.
     */
    severity: 'Critical' | 'High' | 'Medium' | 'Low';

    /**
     * The SaaS/Cloud vendor of the platform with which the finding is associated.
     */
    vendor: string;

    /**
     * Detailed description of the finding.
     */
    description?: string | null;

    /**
     * Remediation guide information for a finding.
     */
    remediation?: Finding.Remediation;
  }

  export namespace Finding {
    /**
     * Category information for a finding.
     */
    export interface Category {
      /**
       * The type of the observation.
       */
      observation: 'Issue' | 'Insight' | 'Activity';

      /**
       * The product category.
       */
      product: 'SaaS' | 'Cloud';

      /**
       * The type of the finding category.
       */
      type: 'Content' | 'Posture';
    }

    /**
     * Remediation guide information for a finding.
     */
    export interface Remediation {
      /**
       * Remediation Id.
       */
      id: string;

      /**
       * Relevant Compliance Frameworks.
       */
      frameworks: Array<string>;

      /**
       * Remediation guide text.
       */
      guide: string;

      /**
       * Description of the potential impact.
       */
      impact: string;

      /**
       * I18N Locale.
       */
      locale: string;

      /**
       * Description of the threat.
       */
      threat: string;
    }
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

  /**
   * Override information for finding severity.
   */
  export interface SeverityOverride {
    /**
     * User ID who created the override.
     */
    created_by: string;

    /**
     * The severity level of a finding.
     */
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
  }
}

/**
 * Aggregated finding information with counts and metadata. This is optimized for
 * list API queries and represents a finding along with its instance statistics.
 */
export interface FindingUnignoreResponse {
  /**
   * Base64 encoded identifier of the security finding.
   */
  id: string;

  /**
   * Number of active problematic instances identified in the security finding.
   */
  active_count: number;

  /**
   * Number of archived instances identified in the security finding.
   */
  archived_count: number;

  /**
   * Basic finding type information.
   */
  finding: FindingUnignoreResponse.Finding;

  /**
   * Determines if finding is currently ignored.
   */
  ignored: boolean;

  /**
   * Number of total (Active or archived) problematic instances identified in the
   * security finding.
   */
  instance_count: number;

  /**
   * Summary information about an integration.
   */
  integration: FindingUnignoreResponse.Integration;

  /**
   * Timestamp of the latest affliction date of an active finding.
   */
  latest_affliction_date: string;

  /**
   * Override information for finding severity.
   */
  severity_override?: FindingUnignoreResponse.SeverityOverride;
}

export namespace FindingUnignoreResponse {
  /**
   * Basic finding type information.
   */
  export interface Finding {
    /**
     * The unique identifier of the finding.
     */
    id: string;

    /**
     * Category information for a finding.
     */
    category: Finding.Category;

    /**
     * The name of the finding.
     */
    name: string;

    /**
     * The severity level of a finding.
     */
    severity: 'Critical' | 'High' | 'Medium' | 'Low';

    /**
     * The SaaS/Cloud vendor of the platform with which the finding is associated.
     */
    vendor: string;

    /**
     * Detailed description of the finding.
     */
    description?: string | null;

    /**
     * Remediation guide information for a finding.
     */
    remediation?: Finding.Remediation;
  }

  export namespace Finding {
    /**
     * Category information for a finding.
     */
    export interface Category {
      /**
       * The type of the observation.
       */
      observation: 'Issue' | 'Insight' | 'Activity';

      /**
       * The product category.
       */
      product: 'SaaS' | 'Cloud';

      /**
       * The type of the finding category.
       */
      type: 'Content' | 'Posture';
    }

    /**
     * Remediation guide information for a finding.
     */
    export interface Remediation {
      /**
       * Remediation Id.
       */
      id: string;

      /**
       * Relevant Compliance Frameworks.
       */
      frameworks: Array<string>;

      /**
       * Remediation guide text.
       */
      guide: string;

      /**
       * Description of the potential impact.
       */
      impact: string;

      /**
       * I18N Locale.
       */
      locale: string;

      /**
       * Description of the threat.
       */
      threat: string;
    }
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

  /**
   * Override information for finding severity.
   */
  export interface SeverityOverride {
    /**
     * User ID who created the override.
     */
    created_by: string;

    /**
     * The severity level of a finding.
     */
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
  }
}

export interface FindingListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

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
   * Query param: A comma separated list of UUIDs identifying the finding type(s).
   */
  finding_type_ids?: string;

  /**
   * Query param: Filter for only the ignored findings. Set to false to only see
   * "active" items
   */
  ignored?: boolean;

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
   * Query param: Filter by observation type of the finding
   */
  observation?: 'Activity' | 'Insight' | 'Issue';

  /**
   * Query param: Which field to use when ordering the findings.
   */
  order?: 'finding.name' | 'instance_count' | 'integration.name' | 'latest_affliction_date' | 'severity';

  /**
   * Query param: Filter by product category of the finding
   */
  product?: 'Cloud' | 'Saas';

  /**
   * Query param: A search term.
   */
  search?: string;

  /**
   * Query param: Filter by severity
   */
  severity?: 'Critical' | 'High' | 'Medium' | 'Low';

  /**
   * Query param: Filter by type of the finding
   */
  type?: 'Content' | 'Posture';

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

export interface FindingExportParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: Filter for only the ignored findings. Set to false to only see
   * active items.
   */
  ignored?: boolean;

  /**
   * Body param: Filter by multiple integration IDs.
   */
  integration_id?: Array<string>;

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
   * Body param: Which fields to use when ordering the findings.
   */
  orders?: Array<FindingExportParams.Order>;

  /**
   * Body param: Filter by finding's category product.
   */
  product?: 'SaaS' | 'Cloud' | null;

  /**
   * Body param: A search term.
   */
  search?: string;

  /**
   * Body param: Filter by severity levels.
   */
  severities?: Array<'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'>;

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

export namespace FindingExportParams {
  /**
   * Order specification for finding exports.
   */
  export interface Order {
    /**
     * Sort direction.
     */
    direction: 'asc' | 'desc';

    /**
     * Which field to use when ordering the findings.
     */
    name: 'instance_count' | 'finding.name' | 'integration.name' | 'latest_affliction_date' | 'severity';
  }
}

export interface FindingGetParams {
  /**
   * Cloudflare account ID for the user making the request.
   */
  account_id: string;
}

export interface FindingIgnoreParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: A list of finding IDs to pass along.
   */
  checks: Array<string>;
}

export interface FindingResetSeverityParams {
  /**
   * Cloudflare account ID for the user making the request.
   */
  account_id: string;
}

export interface FindingTuneSeverityParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: The numeric severity value to apply to the finding.
   */
  new_severity: 1 | 2 | 3 | 4;
}

export interface FindingUnignoreParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: A list of finding IDs to pass along.
   */
  checks: Array<string>;
}

Findings.Instances = Instances;
Findings.BaseInstances = BaseInstances;

export declare namespace Findings {
  export {
    type FindingListResponse as FindingListResponse,
    type FindingExportResponse as FindingExportResponse,
    type FindingGetResponse as FindingGetResponse,
    type FindingIgnoreResponse as FindingIgnoreResponse,
    type FindingResetSeverityResponse as FindingResetSeverityResponse,
    type FindingTuneSeverityResponse as FindingTuneSeverityResponse,
    type FindingUnignoreResponse as FindingUnignoreResponse,
    type FindingListResponsesV4PagePaginationArray as FindingListResponsesV4PagePaginationArray,
    type FindingListParams as FindingListParams,
    type FindingExportParams as FindingExportParams,
    type FindingGetParams as FindingGetParams,
    type FindingIgnoreParams as FindingIgnoreParams,
    type FindingResetSeverityParams as FindingResetSeverityParams,
    type FindingTuneSeverityParams as FindingTuneSeverityParams,
    type FindingUnignoreParams as FindingUnignoreParams,
  };

  export {
    Instances as Instances,
    BaseInstances as BaseInstances,
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
