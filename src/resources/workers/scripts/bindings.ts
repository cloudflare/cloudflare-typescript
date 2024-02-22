// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BindingsAPI from 'cloudflare/resources/workers/scripts/bindings';

export class Bindings extends APIResource {
  /**
   * List the bindings for a Workers script.
   */
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<BindingListResponse> {
    return (
      this._client.get(`/zones/${zoneId}/workers/script/bindings`, options) as Core.APIPromise<{
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

export namespace Bindings {
  export import BindingListResponse = BindingsAPI.BindingListResponse;
}
