// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as NamespacesAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/namespaces';
import * as ScriptsAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts';

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
  list(params: NamespaceListParams, options?: Core.RequestOptions): Core.APIPromise<NamespaceListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/workers/dispatch/namespaces`, options) as Core.APIPromise<{
        result: NamespaceListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
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
   * Fetch a Workers for Platforms namespace.
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
}

export type NamespaceListResponse = Array<NamespaceListResponse.NamespaceListResponseItem>;

export namespace NamespaceListResponse {
  export interface NamespaceListResponseItem {
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
  }
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

export namespace Namespaces {
  export import NamespaceCreateResponse = NamespacesAPI.NamespaceCreateResponse;
  export import NamespaceListResponse = NamespacesAPI.NamespaceListResponse;
  export import NamespaceDeleteResponse = NamespacesAPI.NamespaceDeleteResponse;
  export import NamespaceGetResponse = NamespacesAPI.NamespaceGetResponse;
  export import NamespaceCreateParams = NamespacesAPI.NamespaceCreateParams;
  export import NamespaceListParams = NamespacesAPI.NamespaceListParams;
  export import NamespaceDeleteParams = NamespacesAPI.NamespaceDeleteParams;
  export import NamespaceGetParams = NamespacesAPI.NamespaceGetParams;
  export import Scripts = ScriptsAPI.Scripts;
  export import WorkersNamespaceScript = ScriptsAPI.WorkersNamespaceScript;
  export import ScriptUpdateParams = ScriptsAPI.ScriptUpdateParams;
  export import ScriptDeleteParams = ScriptsAPI.ScriptDeleteParams;
  export import ScriptGetParams = ScriptsAPI.ScriptGetParams;
}
