// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Integrations extends APIResource {
  /**
   * Creates a new integration for the specified application.
   *
   * @example
   * ```ts
   * const integration =
   *   await client.zeroTrust.casb.integrations.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     application: 'GOOGLE_WORKSPACE',
   *     credentials: { admin_email: 'admin@corp.com' },
   *     name: 'My Google Workspace',
   *     auth_method: 'service_account',
   *     dlp_profiles: ['e91a2360-da51-4fdf-9711-bcdecd462614'],
   *     permissions: [
   *       'https://www.googleapis.com/auth/drive.readonly',
   *     ],
   *     use_cases: ['casb', 'ces'],
   *   });
   * ```
   */
  create(
    params: IntegrationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/one/integrations`, { body, ...options });
  }

  /**
   * Updates an integration's name, permissions, DLP profiles, use cases, or
   * credentials.
   *
   * @example
   * ```ts
   * const integration =
   *   await client.zeroTrust.casb.integrations.update('id', {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     credentials: {
   *       access_token: 'new_access_token',
   *       refresh_token: 'new_refresh_token',
   *     },
   *   });
   * ```
   */
  update(
    id: string,
    params: IntegrationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(`/accounts/${account_id}/one/integrations/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of integrations for the account.
   *
   * @example
   * ```ts
   * const integrations =
   *   await client.zeroTrust.casb.integrations.list({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  list(params: IntegrationListParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/one/integrations`, { query, ...options });
  }

  /**
   * Delete an integration by soft-deleting it.
   *
   * @example
   * ```ts
   * await client.zeroTrust.casb.integrations.delete('id', {
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  delete(id: string, params: IntegrationDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/one/integrations/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns full integration details including use cases and permissions.
   *
   * @example
   * ```ts
   * const integration =
   *   await client.zeroTrust.casb.integrations.get('id', {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(
    id: string,
    params: IntegrationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationGetResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/one/integrations/${id}`, options);
  }

  /**
   * Pauses an integration, stopping all crawlers.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.casb.integrations.pause('id', {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  pause(
    id: string,
    params: IntegrationPauseParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationPauseResponse> {
    const { account_id } = params;
    return this._client.post(`/accounts/${account_id}/one/integrations/${id}/pause`, options);
  }

  /**
   * Resumes a paused integration, restarting crawlers.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.casb.integrations.resume('id', {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  resume(
    id: string,
    params: IntegrationResumeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationResumeResponse> {
    const { account_id } = params;
    return this._client.post(`/accounts/${account_id}/one/integrations/${id}/resume`, options);
  }
}

/**
 * Serializer for v2 integration detail response with use cases.
 */
export interface IntegrationCreateResponse {
  /**
   * Integration ID.
   */
  id: string;

  application: { [key: string]: string | null };

  /**
   * The integration's authentication method.
   */
  auth_method: { [key: string]: string } | null;

  /**
   * Authorization link for the integration.
   */
  authorization_link: IntegrationCreateResponse.AuthorizationLink | null;

  /**
   * When the integration was created.
   */
  created: string;

  /**
   * Credentials expiry time.
   */
  credentials_expiry: string;

  /**
   * DLP Profiles enabled for the integration.
   */
  dlp_profiles: Array<string>;

  /**
   * Health details with remediation hints.
   */
  health_details: Array<{ [key: string]: unknown }>;

  /**
   * Whether the user paused the integration.
   */
  is_paused: boolean;

  /**
   * Last time the integration was hydrated.
   */
  last_hydrated: string;

  /**
   * Name of the integration.
   */
  name: string;

  /**
   * Organization ID.
   */
  organization_id: number;

  /**
   * Integration status.
   */
  status: string;

  /**
   * When the integration was last updated.
   */
  updated: string;

  /**
   * Use cases enabled for the integration.
   */
  use_cases: Array<{ [key: string]: unknown }>;
}

export namespace IntegrationCreateResponse {
  /**
   * Authorization link for the integration.
   */
  export interface AuthorizationLink {
    components: { [key: string]: unknown } | null;

    link: string | null;
  }
}

/**
 * Serializer for v2 integration detail response with use cases.
 */
export interface IntegrationUpdateResponse {
  /**
   * Integration ID.
   */
  id: string;

  application: { [key: string]: string | null };

  /**
   * The integration's authentication method.
   */
  auth_method: { [key: string]: string } | null;

  /**
   * Authorization link for the integration.
   */
  authorization_link: IntegrationUpdateResponse.AuthorizationLink | null;

  /**
   * When the integration was created.
   */
  created: string;

  /**
   * Credentials expiry time.
   */
  credentials_expiry: string;

  /**
   * DLP Profiles enabled for the integration.
   */
  dlp_profiles: Array<string>;

  /**
   * Health details with remediation hints.
   */
  health_details: Array<{ [key: string]: unknown }>;

  /**
   * Whether the user paused the integration.
   */
  is_paused: boolean;

  /**
   * Last time the integration was hydrated.
   */
  last_hydrated: string;

  /**
   * Name of the integration.
   */
  name: string;

  /**
   * Organization ID.
   */
  organization_id: number;

  /**
   * Integration status.
   */
  status: string;

  /**
   * When the integration was last updated.
   */
  updated: string;

  /**
   * Use cases enabled for the integration.
   */
  use_cases: Array<{ [key: string]: unknown }>;
}

export namespace IntegrationUpdateResponse {
  /**
   * Authorization link for the integration.
   */
  export interface AuthorizationLink {
    components: { [key: string]: unknown } | null;

    link: string | null;
  }
}

export type IntegrationListResponse = unknown;

/**
 * Serializer for v2 integration detail response with use cases.
 */
export interface IntegrationGetResponse {
  /**
   * Integration ID.
   */
  id: string;

  application: { [key: string]: string | null };

  /**
   * The integration's authentication method.
   */
  auth_method: { [key: string]: string } | null;

  /**
   * Authorization link for the integration.
   */
  authorization_link: IntegrationGetResponse.AuthorizationLink | null;

  /**
   * When the integration was created.
   */
  created: string;

  /**
   * Credentials expiry time.
   */
  credentials_expiry: string;

  /**
   * DLP Profiles enabled for the integration.
   */
  dlp_profiles: Array<string>;

  /**
   * Health details with remediation hints.
   */
  health_details: Array<{ [key: string]: unknown }>;

  /**
   * Whether the user paused the integration.
   */
  is_paused: boolean;

  /**
   * Last time the integration was hydrated.
   */
  last_hydrated: string;

  /**
   * Name of the integration.
   */
  name: string;

  /**
   * Organization ID.
   */
  organization_id: number;

  /**
   * Integration status.
   */
  status: string;

  /**
   * When the integration was last updated.
   */
  updated: string;

  /**
   * Use cases enabled for the integration.
   */
  use_cases: Array<{ [key: string]: unknown }>;
}

export namespace IntegrationGetResponse {
  /**
   * Authorization link for the integration.
   */
  export interface AuthorizationLink {
    components: { [key: string]: unknown } | null;

    link: string | null;
  }
}

/**
 * Serializer for v2 integration detail response with use cases.
 */
export interface IntegrationPauseResponse {
  /**
   * Integration ID.
   */
  id: string;

  application: { [key: string]: string | null };

  /**
   * The integration's authentication method.
   */
  auth_method: { [key: string]: string } | null;

  /**
   * Authorization link for the integration.
   */
  authorization_link: IntegrationPauseResponse.AuthorizationLink | null;

  /**
   * When the integration was created.
   */
  created: string;

  /**
   * Credentials expiry time.
   */
  credentials_expiry: string;

  /**
   * DLP Profiles enabled for the integration.
   */
  dlp_profiles: Array<string>;

  /**
   * Health details with remediation hints.
   */
  health_details: Array<{ [key: string]: unknown }>;

  /**
   * Whether the user paused the integration.
   */
  is_paused: boolean;

  /**
   * Last time the integration was hydrated.
   */
  last_hydrated: string;

  /**
   * Name of the integration.
   */
  name: string;

  /**
   * Organization ID.
   */
  organization_id: number;

  /**
   * Integration status.
   */
  status: string;

  /**
   * When the integration was last updated.
   */
  updated: string;

  /**
   * Use cases enabled for the integration.
   */
  use_cases: Array<{ [key: string]: unknown }>;
}

export namespace IntegrationPauseResponse {
  /**
   * Authorization link for the integration.
   */
  export interface AuthorizationLink {
    components: { [key: string]: unknown } | null;

    link: string | null;
  }
}

/**
 * Serializer for v2 integration detail response with use cases.
 */
export interface IntegrationResumeResponse {
  /**
   * Integration ID.
   */
  id: string;

  application: { [key: string]: string | null };

  /**
   * The integration's authentication method.
   */
  auth_method: { [key: string]: string } | null;

  /**
   * Authorization link for the integration.
   */
  authorization_link: IntegrationResumeResponse.AuthorizationLink | null;

  /**
   * When the integration was created.
   */
  created: string;

  /**
   * Credentials expiry time.
   */
  credentials_expiry: string;

  /**
   * DLP Profiles enabled for the integration.
   */
  dlp_profiles: Array<string>;

  /**
   * Health details with remediation hints.
   */
  health_details: Array<{ [key: string]: unknown }>;

  /**
   * Whether the user paused the integration.
   */
  is_paused: boolean;

  /**
   * Last time the integration was hydrated.
   */
  last_hydrated: string;

  /**
   * Name of the integration.
   */
  name: string;

  /**
   * Organization ID.
   */
  organization_id: number;

  /**
   * Integration status.
   */
  status: string;

  /**
   * When the integration was last updated.
   */
  updated: string;

  /**
   * Use cases enabled for the integration.
   */
  use_cases: Array<{ [key: string]: unknown }>;
}

export namespace IntegrationResumeResponse {
  /**
   * Authorization link for the integration.
   */
  export interface AuthorizationLink {
    components: { [key: string]: unknown } | null;

    link: string | null;
  }
}

export interface IntegrationCreateParams {
  /**
   * Path param: Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Body param: Vendor/application slug (e.g., GOOGLE_WORKSPACE).
   *
   * - `GITHUB` - GITHUB
   * - `GOOGLE_WORKSPACE` - GOOGLE_WORKSPACE
   * - `MICROSOFT_INTERNAL` - MICROSOFT_INTERNAL
   * - `SALESFORCE` - SALESFORCE
   * - `SLACK` - SLACK
   */
  application: 'GITHUB' | 'GOOGLE_WORKSPACE' | 'MICROSOFT_INTERNAL' | 'SALESFORCE' | 'SLACK';

  /**
   * Body param: Credentials for the integration.
   */
  credentials: { [key: string]: unknown };

  /**
   * Body param: Name of the integration.
   */
  name: string;

  /**
   * Body param: Authentication method slug (uses default if omitted).
   */
  auth_method?: string | null;

  /**
   * Body param: List of DLP profile IDs to associate.
   */
  dlp_profiles?: Array<string>;

  /**
   * Body param: List of permission scopes (uses policy defaults if empty).
   */
  permissions?: Array<string>;

  /**
   * Body param: List of use case or feature slugs to enroll (e.g., ['casb', 'ces',
   * 'auto_remediation']).
   */
  use_cases?: Array<'casb' | 'ces' | 'auto_remediation'>;
}

export interface IntegrationUpdateParams {
  /**
   * Path param: Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Body param: Partial credential fields to merge with existing.
   */
  credentials?: { [key: string]: unknown };

  /**
   * Body param: List of DLP profile IDs to associate with the integration.
   */
  dlp_profiles?: Array<string>;

  /**
   * Body param: Name of the integration.
   */
  name?: string;

  /**
   * Body param: List of permission scopes granted to the integration.
   */
  permissions?: Array<string>;

  /**
   * Body param: List of use case or feature slugs to enroll (e.g., ['casb', 'ces',
   * 'auto_remediation']).
   */
  use_cases?: Array<'casb' | 'ces' | 'auto_remediation'>;
}

export interface IntegrationListParams {
  /**
   * Path param: Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Query param: Filter by application/vendor (e.g., GOOGLE_WORKSPACE,
   * MICROSOFT_INTERNAL).
   */
  application?: string;

  /**
   * Query param: Direction to order results.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter by DLP enabled status (true/false).
   */
  dlp_enabled?: boolean;

  /**
   * Query param: Field to order results by.
   */
  order?: 'application' | 'created' | 'name' | 'status';

  /**
   * Query param: Page number within the paginated result set.
   */
  page?: number;

  /**
   * Query param: Number of results per page.
   */
  page_size?: number;

  /**
   * Query param: Search integrations by name or application.
   */
  search?: string;

  /**
   * Query param: Filter by integration status.
   */
  status?: 'Healthy' | 'Initializing' | 'Offline' | 'Unhealthy';

  /**
   * Query param: Filter by enabled use cases (e.g., casb, ces). Matches integrations
   * enrolled in any of the specified values. Can be specified multiple times.
   */
  use_cases?: string;
}

export interface IntegrationDeleteParams {
  /**
   * Cloudflare account identifier.
   */
  account_id: string;
}

export interface IntegrationGetParams {
  /**
   * Cloudflare account identifier.
   */
  account_id: string;
}

export interface IntegrationPauseParams {
  /**
   * Cloudflare account identifier.
   */
  account_id: string;
}

export interface IntegrationResumeParams {
  /**
   * Cloudflare account identifier.
   */
  account_id: string;
}

export declare namespace Integrations {
  export {
    type IntegrationCreateResponse as IntegrationCreateResponse,
    type IntegrationUpdateResponse as IntegrationUpdateResponse,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationGetResponse as IntegrationGetResponse,
    type IntegrationPauseResponse as IntegrationPauseResponse,
    type IntegrationResumeResponse as IntegrationResumeResponse,
    type IntegrationCreateParams as IntegrationCreateParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationDeleteParams as IntegrationDeleteParams,
    type IntegrationGetParams as IntegrationGetParams,
    type IntegrationPauseParams as IntegrationPauseParams,
    type IntegrationResumeParams as IntegrationResumeParams,
  };
}
