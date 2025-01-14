// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ScriptsAPI from './scripts/scripts';
import {
  Script,
  ScriptDeleteParams,
  ScriptGetParams,
  ScriptUpdateParams,
  ScriptUpdateResponse,
  Scripts,
} from './scripts/scripts';
import { SinglePage } from '../../../../pagination';

export class Namespaces extends APIResource {
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);

  /**
   * Create a new Workers for Platforms namespace.
   */
  create(
    params: NamespaceCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/workers/dispatch/namespaces`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: NamespaceCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a list of Workers for Platforms namespaces.
   */
  list(
    params: NamespaceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<NamespaceListResponsesSinglePage, NamespaceListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workers/dispatch/namespaces`,
      NamespaceListResponsesSinglePage,
      options,
    );
  }

  /**
   * Delete a Workers for Platforms namespace.
   */
  delete(
    dispatchNamespace: string,
    params: NamespaceDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}`,
        options,
      ) as Core.APIPromise<{ result: NamespaceDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a Workers for Platforms namespace.
   */
  get(
    dispatchNamespace: string,
    params: NamespaceGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}`,
        options,
      ) as Core.APIPromise<{ result: NamespaceGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class NamespaceListResponsesSinglePage extends SinglePage<NamespaceListResponse> {}

export interface NamespaceCreateResponse {
  /**
   * Identifier
   */
  created_by?: string;

  /**
   * When the script was created.
   */
  created_on?: string;

  /**
   * Identifier
   */
  modified_by?: string;

  /**
   * When the script was last modified.
   */
  modified_on?: string;

  /**
   * API Resource UUID tag.
   */
  namespace_id?: string;

  /**
   * Name of the Workers for Platforms dispatch namespace.
   */
  namespace_name?: string;

  /**
   * The current number of scripts in this Dispatch Namespace
   */
  script_count?: number;
}

export interface NamespaceListResponse {
  /**
   * Identifier
   */
  created_by?: string;

  /**
   * When the script was created.
   */
  created_on?: string;

  /**
   * Identifier
   */
  modified_by?: string;

  /**
   * When the script was last modified.
   */
  modified_on?: string;

  /**
   * API Resource UUID tag.
   */
  namespace_id?: string;

  /**
   * Name of the Workers for Platforms dispatch namespace.
   */
  namespace_name?: string;

  /**
   * The current number of scripts in this Dispatch Namespace
   */
  script_count?: number;
}

export type NamespaceDeleteResponse = unknown;

export interface NamespaceGetResponse {
  /**
   * Identifier
   */
  created_by?: string;

  /**
   * When the script was created.
   */
  created_on?: string;

  /**
   * Identifier
   */
  modified_by?: string;

  /**
   * When the script was last modified.
   */
  modified_on?: string;

  /**
   * API Resource UUID tag.
   */
  namespace_id?: string;

  /**
   * Name of the Workers for Platforms dispatch namespace.
   */
  namespace_name?: string;

  /**
   * The current number of scripts in this Dispatch Namespace
   */
  script_count?: number;
}

export interface NamespaceCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The name of the dispatch namespace
   */
  name?: string;
}

export interface NamespaceListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface NamespaceDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface NamespaceGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

Namespaces.NamespaceListResponsesSinglePage = NamespaceListResponsesSinglePage;
Namespaces.Scripts = Scripts;

export declare namespace Namespaces {
  export {
    type NamespaceCreateResponse as NamespaceCreateResponse,
    type NamespaceListResponse as NamespaceListResponse,
    type NamespaceDeleteResponse as NamespaceDeleteResponse,
    type NamespaceGetResponse as NamespaceGetResponse,
    NamespaceListResponsesSinglePage as NamespaceListResponsesSinglePage,
    type NamespaceCreateParams as NamespaceCreateParams,
    type NamespaceListParams as NamespaceListParams,
    type NamespaceDeleteParams as NamespaceDeleteParams,
    type NamespaceGetParams as NamespaceGetParams,
  };

  export {
    Scripts as Scripts,
    type Script as Script,
    type ScriptUpdateResponse as ScriptUpdateResponse,
    type ScriptUpdateParams as ScriptUpdateParams,
    type ScriptDeleteParams as ScriptDeleteParams,
    type ScriptGetParams as ScriptGetParams,
  };
}
