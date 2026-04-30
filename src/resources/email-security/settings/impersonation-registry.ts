// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class ImpersonationRegistry extends APIResource {
  /**
   * Creates a new entry in the impersonation registry to protect against
   * impersonation. Emails attempting to impersonate this identity will be flagged.
   * Supports regex patterns for flexible email matching.
   *
   * @example
   * ```ts
   * const impersonationRegistry =
   *   await client.emailSecurity.settings.impersonationRegistry.create(
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       email: 'john.doe@example.com',
   *       is_email_regex: false,
   *       name: 'John Doe',
   *     },
   *   );
   * ```
   */
  create(
    params: ImpersonationRegistryCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImpersonationRegistryCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/email-security/settings/impersonation_registry`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ImpersonationRegistryCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of protected identities in the impersonation registry.
   * These entries define identities and email addresses to protect from
   * impersonation attacks. Can be manually added or automatically synced from
   * directory integrations.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const impersonationRegistryListResponse of client.emailSecurity.settings.impersonationRegistry.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ImpersonationRegistryListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    ImpersonationRegistryListResponsesV4PagePaginationArray,
    ImpersonationRegistryListResponse
  > {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email-security/settings/impersonation_registry`,
      ImpersonationRegistryListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Removes an entry from the impersonation registry. After deletion, this identity
   * will no longer be protected from impersonation.
   *
   * @example
   * ```ts
   * const impersonationRegistry =
   *   await client.emailSecurity.settings.impersonationRegistry.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    impersonationRegistryId: string,
    params: ImpersonationRegistryDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImpersonationRegistryDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/email-security/settings/impersonation_registry/${impersonationRegistryId}`,
        options,
      ) as Core.APIPromise<{ result: ImpersonationRegistryDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing impersonation registry entry. Only provided fields will be
   * modified. Directory-synced entries can't be updated.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emailSecurity.settings.impersonationRegistry.edit(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  edit(
    impersonationRegistryId: string,
    params: ImpersonationRegistryEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImpersonationRegistryEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        `/accounts/${account_id}/email-security/settings/impersonation_registry/${impersonationRegistryId}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: ImpersonationRegistryEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves details for a specific impersonation registry entry including the
   * protected identity, email pattern, and synchronization source if
   * directory-synced.
   *
   * @example
   * ```ts
   * const impersonationRegistry =
   *   await client.emailSecurity.settings.impersonationRegistry.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    impersonationRegistryId: string,
    params: ImpersonationRegistryGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImpersonationRegistryGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/email-security/settings/impersonation_registry/${impersonationRegistryId}`,
        options,
      ) as Core.APIPromise<{ result: ImpersonationRegistryGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ImpersonationRegistryListResponsesV4PagePaginationArray extends V4PagePaginationArray<ImpersonationRegistryListResponse> {}

/**
 * An impersonation registry entry
 */
export interface ImpersonationRegistryCreateResponse {
  /**
   * Impersonation registry entry identifier
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  directory_id?: number | null;

  directory_node_id?: number | null;

  email?: string;

  /**
   * @deprecated
   */
  external_directory_node_id?: string | null;

  is_email_regex?: boolean;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;

  name?: string;

  provenance?: 'A1S_INTERNAL' | 'SNOOPY-CASB_OFFICE_365' | 'SNOOPY-OFFICE_365' | 'SNOOPY-GOOGLE_DIRECTORY';
}

/**
 * An impersonation registry entry
 */
export interface ImpersonationRegistryListResponse {
  /**
   * Impersonation registry entry identifier
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  directory_id?: number | null;

  directory_node_id?: number | null;

  email?: string;

  /**
   * @deprecated
   */
  external_directory_node_id?: string | null;

  is_email_regex?: boolean;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;

  name?: string;

  provenance?: 'A1S_INTERNAL' | 'SNOOPY-CASB_OFFICE_365' | 'SNOOPY-OFFICE_365' | 'SNOOPY-GOOGLE_DIRECTORY';
}

export interface ImpersonationRegistryDeleteResponse {
  /**
   * Impersonation registry entry identifier
   */
  id: string;
}

/**
 * An impersonation registry entry
 */
export interface ImpersonationRegistryEditResponse {
  /**
   * Impersonation registry entry identifier
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  directory_id?: number | null;

  directory_node_id?: number | null;

  email?: string;

  /**
   * @deprecated
   */
  external_directory_node_id?: string | null;

  is_email_regex?: boolean;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;

  name?: string;

  provenance?: 'A1S_INTERNAL' | 'SNOOPY-CASB_OFFICE_365' | 'SNOOPY-OFFICE_365' | 'SNOOPY-GOOGLE_DIRECTORY';
}

/**
 * An impersonation registry entry
 */
export interface ImpersonationRegistryGetResponse {
  /**
   * Impersonation registry entry identifier
   */
  id?: string;

  comments?: string | null;

  created_at?: string;

  directory_id?: number | null;

  directory_node_id?: number | null;

  email?: string;

  /**
   * @deprecated
   */
  external_directory_node_id?: string | null;

  is_email_regex?: boolean;

  /**
   * @deprecated Deprecated, use `modified_at` instead. End of life: November
   * 1, 2026.
   */
  last_modified?: string;

  modified_at?: string;

  name?: string;

  provenance?: 'A1S_INTERNAL' | 'SNOOPY-CASB_OFFICE_365' | 'SNOOPY-OFFICE_365' | 'SNOOPY-GOOGLE_DIRECTORY';
}

export interface ImpersonationRegistryCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param
   */
  email: string;

  /**
   * Body param
   */
  is_email_regex: boolean;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  comments?: string | null;

  /**
   * Body param
   */
  directory_id?: number | null;

  /**
   * Body param
   */
  directory_node_id?: number | null;

  /**
   * @deprecated Body param
   */
  external_directory_node_id?: string | null;

  /**
   * Body param
   */
  provenance?: 'A1S_INTERNAL' | 'SNOOPY-CASB_OFFICE_365' | 'SNOOPY-OFFICE_365' | 'SNOOPY-GOOGLE_DIRECTORY';
}

export interface ImpersonationRegistryListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: The sorting direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Field to sort by.
   */
  order?: 'name' | 'email' | 'created_at';

  /**
   * Query param
   */
  provenance?: 'A1S_INTERNAL' | 'SNOOPY-CASB_OFFICE_365' | 'SNOOPY-OFFICE_365' | 'SNOOPY-GOOGLE_DIRECTORY';

  /**
   * Query param: Search term for filtering records. Behavior may change.
   */
  search?: string;
}

export interface ImpersonationRegistryDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface ImpersonationRegistryEditParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param
   */
  comments?: string | null;

  /**
   * Body param
   */
  directory_id?: number | null;

  /**
   * Body param
   */
  directory_node_id?: number | null;

  /**
   * Body param
   */
  email?: string;

  /**
   * @deprecated Body param
   */
  external_directory_node_id?: string | null;

  /**
   * Body param
   */
  is_email_regex?: boolean;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  provenance?: 'A1S_INTERNAL' | 'SNOOPY-CASB_OFFICE_365' | 'SNOOPY-OFFICE_365' | 'SNOOPY-GOOGLE_DIRECTORY';
}

export interface ImpersonationRegistryGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

ImpersonationRegistry.ImpersonationRegistryListResponsesV4PagePaginationArray =
  ImpersonationRegistryListResponsesV4PagePaginationArray;

export declare namespace ImpersonationRegistry {
  export {
    type ImpersonationRegistryCreateResponse as ImpersonationRegistryCreateResponse,
    type ImpersonationRegistryListResponse as ImpersonationRegistryListResponse,
    type ImpersonationRegistryDeleteResponse as ImpersonationRegistryDeleteResponse,
    type ImpersonationRegistryEditResponse as ImpersonationRegistryEditResponse,
    type ImpersonationRegistryGetResponse as ImpersonationRegistryGetResponse,
    ImpersonationRegistryListResponsesV4PagePaginationArray as ImpersonationRegistryListResponsesV4PagePaginationArray,
    type ImpersonationRegistryCreateParams as ImpersonationRegistryCreateParams,
    type ImpersonationRegistryListParams as ImpersonationRegistryListParams,
    type ImpersonationRegistryDeleteParams as ImpersonationRegistryDeleteParams,
    type ImpersonationRegistryEditParams as ImpersonationRegistryEditParams,
    type ImpersonationRegistryGetParams as ImpersonationRegistryGetParams,
  };
}
