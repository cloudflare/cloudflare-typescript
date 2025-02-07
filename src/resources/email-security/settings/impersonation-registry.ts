// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ImpersonationRegistry extends APIResource {
  /**
   * Create an entry in impersonation registry
   */
  create(
    params: ImpersonationRegistryCreateParams,
    options?: RequestOptions,
  ): APIPromise<ImpersonationRegistryCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/email-security/settings/impersonation_registry`, {
        body,
        ...options,
      }) as APIPromise<{ result: ImpersonationRegistryCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists, searches, and sorts entries in the impersonation registry.
   */
  list(
    params: ImpersonationRegistryListParams,
    options?: RequestOptions,
  ): PagePromise<ImpersonationRegistryListResponsesV4PagePaginationArray, ImpersonationRegistryListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email-security/settings/impersonation_registry`,
      V4PagePaginationArray<ImpersonationRegistryListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete an entry from impersonation registry
   */
  delete(
    displayNameID: number,
    params: ImpersonationRegistryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ImpersonationRegistryDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/email-security/settings/impersonation_registry/${displayNameID}`,
        options,
      ) as APIPromise<{ result: ImpersonationRegistryDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an entry in impersonation registry
   */
  edit(
    displayNameID: number,
    params: ImpersonationRegistryEditParams,
    options?: RequestOptions,
  ): APIPromise<ImpersonationRegistryEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        path`/accounts/${account_id}/email-security/settings/impersonation_registry/${displayNameID}`,
        { body, ...options },
      ) as APIPromise<{ result: ImpersonationRegistryEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get an entry in impersonation registry
   */
  get(
    displayNameID: number,
    params: ImpersonationRegistryGetParams,
    options?: RequestOptions,
  ): APIPromise<ImpersonationRegistryGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/email-security/settings/impersonation_registry/${displayNameID}`,
        options,
      ) as APIPromise<{ result: ImpersonationRegistryGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ImpersonationRegistryListResponsesV4PagePaginationArray =
  V4PagePaginationArray<ImpersonationRegistryListResponse>;

export interface ImpersonationRegistryCreateResponse {
  id: number;

  created_at: string;

  email: string;

  is_email_regex: boolean;

  last_modified: string;

  name: string;

  comments?: string | null;

  directory_id?: number | null;

  directory_node_id?: number | null;

  /**
   * @deprecated
   */
  external_directory_node_id?: string | null;

  provenance?: string | null;
}

export interface ImpersonationRegistryListResponse {
  id: number;

  created_at: string;

  email: string;

  is_email_regex: boolean;

  last_modified: string;

  name: string;

  comments?: string | null;

  directory_id?: number | null;

  directory_node_id?: number | null;

  /**
   * @deprecated
   */
  external_directory_node_id?: string | null;

  provenance?: string | null;
}

export interface ImpersonationRegistryDeleteResponse {
  id: number;
}

export interface ImpersonationRegistryEditResponse {
  id: number;

  created_at: string;

  email: string;

  is_email_regex: boolean;

  last_modified: string;

  name: string;

  comments?: string | null;

  directory_id?: number | null;

  directory_node_id?: number | null;

  /**
   * @deprecated
   */
  external_directory_node_id?: string | null;

  provenance?: string | null;
}

export interface ImpersonationRegistryGetResponse {
  id: number;

  created_at: string;

  email: string;

  is_email_regex: boolean;

  last_modified: string;

  name: string;

  comments?: string | null;

  directory_id?: number | null;

  directory_node_id?: number | null;

  /**
   * @deprecated
   */
  external_directory_node_id?: string | null;

  provenance?: string | null;
}

export interface ImpersonationRegistryCreateParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  email: string;

  /**
   * Body param:
   */
  is_email_regex: boolean;

  /**
   * Body param:
   */
  name: string;
}

export interface ImpersonationRegistryListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Query param: The sorting direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: The field to sort by.
   */
  order?: 'name' | 'email' | 'created_at';

  /**
   * Query param:
   */
  provenance?: 'A1S_INTERNAL' | 'SNOOPY-CASB_OFFICE_365' | 'SNOOPY-OFFICE_365' | 'SNOOPY-GOOGLE_DIRECTORY';

  /**
   * Query param: Allows searching in multiple properties of a record simultaneously.
   * This parameter is intended for human users, not automation. Its exact behavior
   * is intentionally left unspecified and is subject to change in the future.
   */
  search?: string;
}

export interface ImpersonationRegistryDeleteParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

export interface ImpersonationRegistryEditParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  email?: string | null;

  /**
   * Body param:
   */
  is_email_regex?: boolean | null;

  /**
   * Body param:
   */
  name?: string | null;
}

export interface ImpersonationRegistryGetParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

export declare namespace ImpersonationRegistry {
  export {
    type ImpersonationRegistryCreateResponse as ImpersonationRegistryCreateResponse,
    type ImpersonationRegistryListResponse as ImpersonationRegistryListResponse,
    type ImpersonationRegistryDeleteResponse as ImpersonationRegistryDeleteResponse,
    type ImpersonationRegistryEditResponse as ImpersonationRegistryEditResponse,
    type ImpersonationRegistryGetResponse as ImpersonationRegistryGetResponse,
    type ImpersonationRegistryListResponsesV4PagePaginationArray as ImpersonationRegistryListResponsesV4PagePaginationArray,
    type ImpersonationRegistryCreateParams as ImpersonationRegistryCreateParams,
    type ImpersonationRegistryListParams as ImpersonationRegistryListParams,
    type ImpersonationRegistryDeleteParams as ImpersonationRegistryDeleteParams,
    type ImpersonationRegistryEditParams as ImpersonationRegistryEditParams,
    type ImpersonationRegistryGetParams as ImpersonationRegistryGetParams,
  };
}
