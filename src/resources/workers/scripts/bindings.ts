// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BindingsAPI from 'cloudflare/resources/workers/scripts/bindings';

export class Bindings extends APIResource {
  /**
   * List the bindings for a Workers script.
   */
  list(params: BindingListParams, options?: Core.RequestOptions): Core.APIPromise<BindingListResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/workers/script/bindings`, options) as Core.APIPromise<{
        result: BindingListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type BindingListResponse = Array<
  BindingListResponse.WorkersKVNamespaceBinding | BindingListResponse.WorkersWasmModuleBinding
>;

export namespace BindingListResponse {
  export interface WorkersKVNamespaceBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Namespace identifier tag.
     */
    namespace_id: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'kv_namespace';
  }

  export interface WorkersWasmModuleBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'wasm_module';
  }
}

export interface BindingListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Bindings {
  export import BindingListResponse = BindingsAPI.BindingListResponse;
  export import BindingListParams = BindingsAPI.BindingListParams;
}
