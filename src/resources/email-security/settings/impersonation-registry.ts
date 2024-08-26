// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as ImpersonationRegistryAPI from './impersonation-registry';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class ImpersonationRegistry extends APIResource {
  /**
   * Create an entry in impersonation registry
   */
  create(params: ImpersonationRegistryCreateParams, options?: Core.RequestOptions): Core.APIPromise<ImpersonationRegistryCreateResponse> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/email-security/settings/impersonation_registry`, { body, ...options }) as Core.APIPromise<{ result: ImpersonationRegistryCreateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * List, search, and sort entries in impersonation registry.
   */
  list(params: ImpersonationRegistryListParams, options?: Core.RequestOptions): Core.PagePromise<ImpersonationRegistryListResponsesV4PagePaginationArray, ImpersonationRegistryListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/email-security/settings/impersonation_registry`, ImpersonationRegistryListResponsesV4PagePaginationArray, { query, ...options });
  }

  /**
   * Delete an entry from impersonation registry
   */
  delete(displayNameId: number, params: ImpersonationRegistryDeleteParams, options?: Core.RequestOptions): Core.APIPromise<ImpersonationRegistryDeleteResponse> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/email-security/settings/impersonation_registry/${displayNameId}`, options) as Core.APIPromise<{ result: ImpersonationRegistryDeleteResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an entry in impersonation registry
   */
  edit(displayNameId: number, params: ImpersonationRegistryEditParams, options?: Core.RequestOptions): Core.APIPromise<ImpersonationRegistryEditResponse> {
    const { account_id, ...body } = params;
    return (this._client.patch(`/accounts/${account_id}/email-security/settings/impersonation_registry/${displayNameId}`, { body, ...options }) as Core.APIPromise<{ result: ImpersonationRegistryEditResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get an entry in impersonation registry
   */
  get(displayNameId: number, params: ImpersonationRegistryGetParams, options?: Core.RequestOptions): Core.APIPromise<ImpersonationRegistryGetResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/email-security/settings/impersonation_registry/${displayNameId}`, options) as Core.APIPromise<{ result: ImpersonationRegistryGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export class ImpersonationRegistryListResponsesV4PagePaginationArray extends V4PagePaginationArray<ImpersonationRegistryListResponse> {
}

export type ImpersonationRegistryCreateResponse = ImpersonationRegistryCreateResponse.EmailSecurityDisplayName | Array<ImpersonationRegistryCreateResponse.UnionMember1>

export namespace ImpersonationRegistryCreateResponse {
  export interface EmailSecurityDisplayName {
    id: number;

    created_at: string;

    is_email_regex: boolean;

    last_modified: string;

    name: string;

    comments?: string | null;

    directory_id?: number | null;

    directory_node_id?: string | null;

    email?: string | null;

    provenance?: string | null;
  }

  export interface UnionMember1 {
    id: number;

    created_at: string;

    is_email_regex: boolean;

    last_modified: string;

    name: string;

    comments?: string | null;

    directory_id?: number | null;

    directory_node_id?: string | null;

    email?: string | null;

    provenance?: string | null;
  }
}

export interface ImpersonationRegistryListResponse {
  id: number;

  created_at: string;

  is_email_regex: boolean;

  last_modified: string;

  name: string;

  comments?: string | null;

  directory_id?: number | null;

  directory_node_id?: string | null;

  email?: string | null;

  provenance?: string | null;
}

export interface ImpersonationRegistryDeleteResponse {
  id: number;
}

export interface ImpersonationRegistryEditResponse {
  id: number;

  created_at: string;

  is_email_regex: boolean;

  last_modified: string;

  name: string;

  comments?: string | null;

  directory_id?: number | null;

  directory_node_id?: string | null;

  email?: string | null;

  provenance?: string | null;
}

export interface ImpersonationRegistryGetResponse {
  id: number;

  created_at: string;

  is_email_regex: boolean;

  last_modified: string;

  name: string;

  comments?: string | null;

  directory_id?: number | null;

  directory_node_id?: string | null;

  email?: string | null;

  provenance?: string | null;
}

export type ImpersonationRegistryCreateParams = ImpersonationRegistryCreateParams.EmailSecurityCreateDisplayName | ImpersonationRegistryCreateParams.Variant1

export namespace ImpersonationRegistryCreateParams {
  export interface EmailSecurityCreateDisplayName {
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

  export interface Variant1 {
    /**
     * Path param: Account Identifier
     */
    account_id: string;

    /**
     * Body param:
     */
    body: Array<ImpersonationRegistryCreateParams.Variant1.Body>;
  }

  export namespace Variant1 {
    export interface Body {
      email: string;

      is_email_regex: boolean;

      name: string;
    }
  }
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

export namespace ImpersonationRegistry {
  export import ImpersonationRegistryCreateResponse = ImpersonationRegistryAPI.ImpersonationRegistryCreateResponse;
  export import ImpersonationRegistryListResponse = ImpersonationRegistryAPI.ImpersonationRegistryListResponse;
  export import ImpersonationRegistryDeleteResponse = ImpersonationRegistryAPI.ImpersonationRegistryDeleteResponse;
  export import ImpersonationRegistryEditResponse = ImpersonationRegistryAPI.ImpersonationRegistryEditResponse;
  export import ImpersonationRegistryGetResponse = ImpersonationRegistryAPI.ImpersonationRegistryGetResponse;
  export import ImpersonationRegistryListResponsesV4PagePaginationArray = ImpersonationRegistryAPI.ImpersonationRegistryListResponsesV4PagePaginationArray;
  export import ImpersonationRegistryCreateParams = ImpersonationRegistryAPI.ImpersonationRegistryCreateParams;
  export import ImpersonationRegistryListParams = ImpersonationRegistryAPI.ImpersonationRegistryListParams;
  export import ImpersonationRegistryDeleteParams = ImpersonationRegistryAPI.ImpersonationRegistryDeleteParams;
  export import ImpersonationRegistryEditParams = ImpersonationRegistryAPI.ImpersonationRegistryEditParams;
  export import ImpersonationRegistryGetParams = ImpersonationRegistryAPI.ImpersonationRegistryGetParams;
}
