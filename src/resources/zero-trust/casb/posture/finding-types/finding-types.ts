// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as RemediationTypesAPI from './remediation-types';
import {
  BaseRemediationTypes,
  RemediationTypeListParams,
  RemediationTypeListResponse,
  RemediationTypeListResponsesV4PagePaginationArray,
  RemediationTypes,
} from './remediation-types';
import { APIPromise } from '../../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../../core/pagination';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseFindingTypes extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb', 'posture', 'findingTypes'] = Object.freeze([
    'zeroTrust',
    'casb',
    'posture',
    'findingTypes',
  ] as const);

  /**
   * Create a new custom finding type with policy definition.
   *
   * @example
   * ```ts
   * const findingType =
   *   await client.zeroTrust.casb.posture.findingTypes.create({
   *     account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *     applies_to_all_integrations: true,
   *     asset_class: 'GoogleWorkspaceFile',
   *     asset_vendor: 'GOOGLE_WORKSPACE',
   *     description: 'Detects files shared with too many users',
   *     expression:
   *       'default result := "pass"\n\nresult := "fail" if input.asset.publicLinkDisabled == false\n',
   *     name: 'Excessive File Sharing',
   *     severity: 'High',
   *   });
   * ```
   */
  create(params: FindingTypeCreateParams, options?: RequestOptions): APIPromise<FindingTypeCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/data-security/posture/finding_types`, {
        body,
        ...options,
      }) as APIPromise<{ result: FindingTypeCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing custom finding type.
   *
   * **Immutable fields**: asset_vendor, asset_class, expression, and category cannot
   * be changed after creation.
   *
   * **Security**: Only custom finding types (not system-managed) can be updated.
   *
   * @example
   * ```ts
   * const findingType =
   *   await client.zeroTrust.casb.posture.findingTypes.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *       applies_to_all_integrations: true,
   *     },
   *   );
   * ```
   */
  update(
    findingTypeID: string,
    params: FindingTypeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FindingTypeUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/data-security/posture/finding_types/${findingTypeID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: FindingTypeUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all available finding types with pagination support.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const findingTypeListResponse of client.zeroTrust.casb.posture.findingTypes.list(
   *   { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: FindingTypeListParams,
    options?: RequestOptions,
  ): PagePromise<FindingTypeListResponsesV4PagePaginationArray, FindingTypeListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/data-security/posture/finding_types`,
      V4PagePaginationArray<FindingTypeListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete an existing custom finding type.
   *
   * **Security**: Only custom finding types (not system-managed) can be deleted.
   *
   * @example
   * ```ts
   * await client.zeroTrust.casb.posture.findingTypes.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   * );
   * ```
   */
  delete(findingTypeID: string, params: FindingTypeDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/data-security/posture/finding_types/${findingTypeID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Retrieve a specific finding type by its unique identifier.
   *
   * @example
   * ```ts
   * const findingType =
   *   await client.zeroTrust.casb.posture.findingTypes.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   *   );
   * ```
   */
  get(
    findingTypeID: string,
    params: FindingTypeGetParams,
    options?: RequestOptions,
  ): APIPromise<FindingTypeGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/data-security/posture/finding_types/${findingTypeID}`,
        options,
      ) as APIPromise<{ result: FindingTypeGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Check a candidate custom finding type without creating it, so problems can be
   * corrected before publishing. The request body is the same shape as
   * `CreateFindingType`, and the candidate is checked against the same rules, so a
   * valid result means the definition itself is sound. It is not a reservation: a
   * create can still be rejected for a reason that does not belong to the
   * definition, such as the account already holding the maximum number of custom
   * finding types.
   *
   * A candidate that fails validation is still a **200** with `result.valid: false`
   * and one entry in `result.errors` per problem — that is the answer this endpoint
   * exists to give. `4xx` is reserved for a request that could not be processed at
   * all, such as a body that will not parse.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.casb.posture.findingTypes.validate(
   *     {
   *       account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *       applies_to_all_integrations: true,
   *       asset_class: 'GoogleWorkspaceFile',
   *       asset_vendor: 'GOOGLE_WORKSPACE',
   *       description:
   *         'Detects files shared with too many users',
   *       expression:
   *         'default result := "pass"\n\nresult := "fail" if input.asset.publicLinkDisabled == false\n',
   *       name: 'Excessive File Sharing',
   *       severity: 'High',
   *     },
   *   );
   * ```
   */
  validate(
    params: FindingTypeValidateParams,
    options?: RequestOptions,
  ): APIPromise<FindingTypeValidateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/data-security/posture/finding_types/validate`, {
        body,
        ...options,
      }) as APIPromise<{ result: FindingTypeValidateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class FindingTypes extends BaseFindingTypes {
  remediationTypes: RemediationTypesAPI.RemediationTypes = new RemediationTypesAPI.RemediationTypes(
    this._client,
  );
}

export type FindingTypeListResponsesV4PagePaginationArray = V4PagePaginationArray<FindingTypeListResponse>;

/**
 * Basic finding type information.
 */
export interface FindingTypeCreateResponse {
  /**
   * The unique identifier of the finding.
   */
  id: string;

  /**
   * Whether this finding type applies to every current and future integration of the
   * vendor.
   */
  applies_to_all_integrations: boolean;

  /**
   * Asset class the finding type's policy evaluates.
   */
  asset_class: string;

  /**
   * Canonical vendor enum value.
   */
  asset_vendor:
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
    | 'ZOOM';

  /**
   * Category information for a finding.
   */
  category: FindingTypeCreateResponse.Category;

  /**
   * Timestamp when the finding type was created.
   */
  created_at: string;

  /**
   * Detailed description of the finding.
   */
  description: string | null;

  /**
   * Rego expression backing this finding type. For custom finding types, generated
   * package and import declarations are omitted. System expressions are returned
   * unchanged.
   */
  expression: string;

  /**
   * The name of the finding.
   */
  name: string;

  /**
   * Whether the finding type is system-managed or customer-created.
   */
  origin: 'system' | 'custom';

  /**
   * Default severity used when no integration-specific severity override exists.
   */
  severity: 'Critical' | 'High' | 'Medium' | 'Low';

  /**
   * Timestamp when the finding type was last updated.
   */
  updated_at: string;

  /**
   * The SaaS/Cloud vendor of the platform with which the finding is associated.
   */
  vendor: string;

  /**
   * Current version of the finding type. Incremented on each update.
   */
  version: number;

  /**
   * Integrations this finding type applies to when applies_to_all_integrations is
   * false.
   */
  integration_ids?: Array<string>;

  /**
   * Number of currently active finding instances across the account's integrations.
   * Zero when none have been detected.
   */
  match_count?: number;

  /**
   * Whether evaluation of this finding type is suspended by an operator. Present
   * only when true.
   */
  quarantined?: boolean;
}

export namespace FindingTypeCreateResponse {
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
}

/**
 * Basic finding type information.
 */
export interface FindingTypeUpdateResponse {
  /**
   * The unique identifier of the finding.
   */
  id: string;

  /**
   * Whether this finding type applies to every current and future integration of the
   * vendor.
   */
  applies_to_all_integrations: boolean;

  /**
   * Asset class the finding type's policy evaluates.
   */
  asset_class: string;

  /**
   * Canonical vendor enum value.
   */
  asset_vendor:
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
    | 'ZOOM';

  /**
   * Category information for a finding.
   */
  category: FindingTypeUpdateResponse.Category;

  /**
   * Timestamp when the finding type was created.
   */
  created_at: string;

  /**
   * Detailed description of the finding.
   */
  description: string | null;

  /**
   * Rego expression backing this finding type. For custom finding types, generated
   * package and import declarations are omitted. System expressions are returned
   * unchanged.
   */
  expression: string;

  /**
   * The name of the finding.
   */
  name: string;

  /**
   * Whether the finding type is system-managed or customer-created.
   */
  origin: 'system' | 'custom';

  /**
   * Default severity used when no integration-specific severity override exists.
   */
  severity: 'Critical' | 'High' | 'Medium' | 'Low';

  /**
   * Timestamp when the finding type was last updated.
   */
  updated_at: string;

  /**
   * The SaaS/Cloud vendor of the platform with which the finding is associated.
   */
  vendor: string;

  /**
   * Current version of the finding type. Incremented on each update.
   */
  version: number;

  /**
   * Integrations this finding type applies to when applies_to_all_integrations is
   * false.
   */
  integration_ids?: Array<string>;

  /**
   * Number of currently active finding instances across the account's integrations.
   * Zero when none have been detected.
   */
  match_count?: number;

  /**
   * Whether evaluation of this finding type is suspended by an operator. Present
   * only when true.
   */
  quarantined?: boolean;
}

export namespace FindingTypeUpdateResponse {
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
}

/**
 * Basic finding type information.
 */
export interface FindingTypeListResponse {
  /**
   * The unique identifier of the finding.
   */
  id: string;

  /**
   * Category information for a finding.
   */
  category: FindingTypeListResponse.Category;

  /**
   * The name of the finding.
   */
  name: string;

  /**
   * Default severity used when no integration-specific severity override exists.
   */
  severity: 'Critical' | 'High' | 'Medium' | 'Low';

  /**
   * The SaaS/Cloud vendor of the platform with which the finding is associated.
   */
  vendor: string;

  /**
   * Whether this finding type applies to every current and future integration of the
   * vendor.
   */
  applies_to_all_integrations?: boolean;

  /**
   * Asset class the finding type's policy evaluates.
   */
  asset_class?: string;

  /**
   * Canonical vendor enum value.
   */
  asset_vendor?:
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
    | 'ZOOM';

  /**
   * Timestamp when the finding type was created.
   */
  created_at?: string;

  /**
   * Detailed description of the finding.
   */
  description?: string | null;

  /**
   * Rego expression backing this finding type. For custom finding types, generated
   * package and import declarations are omitted. System expressions are returned
   * unchanged.
   */
  expression?: string;

  /**
   * Integrations this finding type applies to when applies_to_all_integrations is
   * false.
   */
  integration_ids?: Array<string>;

  /**
   * Number of currently active finding instances across the account's integrations.
   * Zero when none have been detected.
   */
  match_count?: number;

  /**
   * Whether the finding type is system-managed or customer-created.
   */
  origin?: 'system' | 'custom';

  /**
   * Whether evaluation of this finding type is suspended by an operator. Present
   * only when true.
   */
  quarantined?: boolean;

  /**
   * Timestamp when the finding type was last updated.
   */
  updated_at?: string;

  /**
   * Current version of the finding type. Incremented on each update.
   */
  version?: number;
}

export namespace FindingTypeListResponse {
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
}

/**
 * Basic finding type information.
 */
export interface FindingTypeGetResponse {
  /**
   * The unique identifier of the finding.
   */
  id: string;

  /**
   * Category information for a finding.
   */
  category: FindingTypeGetResponse.Category;

  /**
   * The name of the finding.
   */
  name: string;

  /**
   * Default severity used when no integration-specific severity override exists.
   */
  severity: 'Critical' | 'High' | 'Medium' | 'Low';

  /**
   * The SaaS/Cloud vendor of the platform with which the finding is associated.
   */
  vendor: string;

  /**
   * Whether this finding type applies to every current and future integration of the
   * vendor.
   */
  applies_to_all_integrations?: boolean;

  /**
   * Asset class the finding type's policy evaluates.
   */
  asset_class?: string;

  /**
   * Canonical vendor enum value.
   */
  asset_vendor?:
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
    | 'ZOOM';

  /**
   * Timestamp when the finding type was created.
   */
  created_at?: string;

  /**
   * Detailed description of the finding.
   */
  description?: string | null;

  /**
   * Rego expression backing this finding type. For custom finding types, generated
   * package and import declarations are omitted. System expressions are returned
   * unchanged.
   */
  expression?: string;

  /**
   * Integrations this finding type applies to when applies_to_all_integrations is
   * false.
   */
  integration_ids?: Array<string>;

  /**
   * Number of currently active finding instances across the account's integrations.
   * Zero when none have been detected.
   */
  match_count?: number;

  /**
   * Whether the finding type is system-managed or customer-created.
   */
  origin?: 'system' | 'custom';

  /**
   * Whether evaluation of this finding type is suspended by an operator. Present
   * only when true.
   */
  quarantined?: boolean;

  /**
   * Timestamp when the finding type was last updated.
   */
  updated_at?: string;

  /**
   * Current version of the finding type. Incremented on each update.
   */
  version?: number;
}

export namespace FindingTypeGetResponse {
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
}

export interface FindingTypeValidateResponse {
  /**
   * Every problem found with the candidate, so all of them can be surfaced at once.
   * Empty when `valid` is true. Problems without a location come first, followed by
   * located problems ordered by `line`, then `column`.
   */
  errors: Array<FindingTypeValidateResponse.Error>;

  /**
   * Whether the candidate finding type would be accepted as-is.
   */
  valid: boolean;
}

export namespace FindingTypeValidateResponse {
  export interface Error {
    /**
     * Description of the problem.
     */
    detail: string;

    /**
     * @deprecated Deprecated: use `detail`.
     */
    message: string;

    /**
     * Machine-readable identifier for the class of problem, when one is available.
     * Omitted otherwise.
     */
    code?: string;

    /**
     * 1-based column on `line`. Omitted when the problem could not be located in the
     * submitted source.
     */
    column?: number;

    /**
     * Request field the problem belongs to, matching the property names of
     * `ValidateFindingTypeRequest`. Array properties are reported per entry with a
     * zero-based index, for example `integration_ids[0]`. Empty when the problem
     * cannot be attributed to a single submitted field.
     */
    field?: string;

    /**
     * 1-based line in `expression` where the problem was found. Omitted when the
     * problem could not be located in the submitted source.
     */
    line?: number;
  }
}

export interface FindingTypeCreateParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: When true, this finding type applies to every current and future
   * integration of the vendor.
   */
  applies_to_all_integrations: boolean;

  /**
   * Body param: Asset class this finding type applies to (PascalCase, e.g.
   * GoogleWorkspaceFile)
   */
  asset_class: string;

  /**
   * Body param: Canonical vendor enum for the platform whose assets this finding
   * type evaluates.
   */
  asset_vendor:
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
    | 'ZOOM';

  /**
   * Body param: Human-readable description of the finding type. Cannot be empty.
   * Maximum 4096 characters.
   */
  description: string;

  /**
   * Body param: Rego expression body for the policy.
   * `package cloudflare.casb.custom` and `import rego.v1` are added automatically.
   * Do not include package or import declarations. This field cannot be changed
   * after creation. Maximum 4096 characters.
   */
  expression: string;

  /**
   * Body param: Human-readable name for the finding type. Maximum 256 characters.
   */
  name: string;

  /**
   * Body param: Default severity used when no integration-specific severity override
   * exists.
   */
  severity: 'Critical' | 'High' | 'Medium' | 'Low';

  /**
   * Body param: Required and non-empty when applies_to_all_integrations is false;
   * omit when it is true.
   */
  integration_ids?: Array<string>;
}

export interface FindingTypeUpdateParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: When true, this finding type applies to every current and future
   * integration of the vendor.
   */
  applies_to_all_integrations: boolean;

  /**
   * Body param: Optional description of the finding type. Cannot be empty if
   * provided. Maximum 4096 characters.
   */
  description?: string;

  /**
   * Body param: Required and non-empty when applies_to_all_integrations is false;
   * omit when it is true.
   */
  integration_ids?: Array<string>;

  /**
   * Body param: Human-readable name for the finding type. Cannot be empty if
   * provided. Maximum 256 characters.
   */
  name?: string;

  /**
   * Body param: Default severity used when no integration-specific severity override
   * exists. Changing it reclassifies existing and future findings that do not have
   * an override.
   */
  severity?: 'Critical' | 'High' | 'Medium' | 'Low';
}

export interface FindingTypeListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Query param: Sort direction for the primary field. Defaults to 'desc'. Ties are
   * resolved by case-insensitive name, then ID, both ascending regardless of
   * direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Return only finding types updated at or before this RFC 3339
   * timestamp (inclusive).
   */
  max_updated_at?: string;

  /**
   * Query param: Return only finding types updated at or after this RFC 3339
   * timestamp (inclusive).
   */
  min_updated_at?: string;

  /**
   * Query param: Field to sort by (case-insensitive). Defaults to 'created'. Name
   * and vendor sorting is case-insensitive; vendor uses friendly provider names.
   * Ascending order: type Content then Posture; origin custom then system; severity
   * Low, Medium, High, Critical.
   */
  order?: 'created' | 'updated' | 'match_count' | 'name' | 'vendor' | 'type' | 'origin' | 'severity';

  /**
   * Query param: Filter finding types by origin. Supports multiple comma-separated,
   * case-insensitive values.
   */
  origins?: Array<'custom' | 'system'>;

  /**
   * Query param: When true, return only quarantined finding types; when false,
   * return only non-quarantined finding types. Omit to return both.
   */
  quarantined?: boolean;

  /**
   * Query param: Filter finding types by name or ID (case-insensitive substring
   * match).
   */
  search?: string;

  /**
   * Query param: Filter finding types by severity. Supports multiple
   * comma-separated, case-insensitive values.
   */
  severities?: Array<'critical' | 'high' | 'medium' | 'low'>;

  /**
   * Query param: Filter finding types by category type. Supports multiple
   * comma-separated, case-insensitive values.
   */
  types?: Array<'Content' | 'Posture'>;

  /**
   * Query param: Filter finding types by vendor. Supports multiple comma-separated
   * values. Each value may be either the vendor enum (GOOGLE_WORKSPACE) or the
   * friendly name returned by the read routes (Google Workspace).
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
    | 'OPENAI'
    | 'SALESFORCE'
    | 'SERVICENOW'
    | 'SLACK'
    | 'ZOOM'
  >;
}

export interface FindingTypeDeleteParams {
  /**
   * Cloudflare account ID for the user making the request.
   */
  account_id: string;
}

export interface FindingTypeGetParams {
  /**
   * Cloudflare account ID for the user making the request.
   */
  account_id: string;
}

export interface FindingTypeValidateParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: When true, this finding type applies to every current and future
   * integration of the vendor.
   */
  applies_to_all_integrations: boolean;

  /**
   * Body param: Asset class this finding type applies to (PascalCase, e.g.
   * GoogleWorkspaceFile)
   */
  asset_class: string;

  /**
   * Body param: Canonical vendor enum for the platform whose assets this finding
   * type evaluates.
   */
  asset_vendor:
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
    | 'ZOOM';

  /**
   * Body param: Human-readable description of the finding type. Cannot be empty.
   * Maximum 4096 characters.
   */
  description: string;

  /**
   * Body param: Rego expression body for the policy.
   * `package cloudflare.casb.custom` and `import rego.v1` are added automatically.
   * Do not include package or import declarations. This field cannot be changed
   * after creation. Maximum 4096 characters.
   */
  expression: string;

  /**
   * Body param: Human-readable name for the finding type. Maximum 256 characters.
   */
  name: string;

  /**
   * Body param: Default severity used when no integration-specific severity override
   * exists.
   */
  severity: 'Critical' | 'High' | 'Medium' | 'Low';

  /**
   * Body param: Required and non-empty when applies_to_all_integrations is false;
   * omit when it is true.
   */
  integration_ids?: Array<string>;
}

FindingTypes.RemediationTypes = RemediationTypes;
FindingTypes.BaseRemediationTypes = BaseRemediationTypes;

export declare namespace FindingTypes {
  export {
    type FindingTypeCreateResponse as FindingTypeCreateResponse,
    type FindingTypeUpdateResponse as FindingTypeUpdateResponse,
    type FindingTypeListResponse as FindingTypeListResponse,
    type FindingTypeGetResponse as FindingTypeGetResponse,
    type FindingTypeValidateResponse as FindingTypeValidateResponse,
    type FindingTypeListResponsesV4PagePaginationArray as FindingTypeListResponsesV4PagePaginationArray,
    type FindingTypeCreateParams as FindingTypeCreateParams,
    type FindingTypeUpdateParams as FindingTypeUpdateParams,
    type FindingTypeListParams as FindingTypeListParams,
    type FindingTypeDeleteParams as FindingTypeDeleteParams,
    type FindingTypeGetParams as FindingTypeGetParams,
    type FindingTypeValidateParams as FindingTypeValidateParams,
  };

  export {
    RemediationTypes as RemediationTypes,
    BaseRemediationTypes as BaseRemediationTypes,
    type RemediationTypeListResponse as RemediationTypeListResponse,
    type RemediationTypeListResponsesV4PagePaginationArray as RemediationTypeListResponsesV4PagePaginationArray,
    type RemediationTypeListParams as RemediationTypeListParams,
  };
}
