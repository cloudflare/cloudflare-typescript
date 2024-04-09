// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BindingsAPI from 'cloudflare/resources/workers/scripts/bindings';
import * as WorkersAPI from 'cloudflare/resources/workers/workers';

export class Bindings extends APIResource {
  /**
   * List the bindings for a Workers script.
   */
  get(params: BindingGetParams, options?: Core.RequestOptions): Core.APIPromise<BindingGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/workers/script/bindings`, options) as Core.APIPromise<{
        result: BindingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type BindingGetResponse = Array<
  WorkersAPI.KVNamespaceBinding | BindingGetResponse.WorkersWasmModuleBinding
>;

export namespace BindingGetResponse {
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

export interface BindingGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Bindings {
  export import BindingGetResponse = BindingsAPI.BindingGetResponse;
  export import BindingGetParams = BindingsAPI.BindingGetParams;
}
