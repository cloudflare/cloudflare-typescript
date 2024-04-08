// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BindingsAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/bindings';
import * as WorkersAPI from 'cloudflare/resources/workers/workers';

export class Bindings extends APIResource {
  /**
   * Fetch script bindings from a script uploaded to a Workers for Platforms
   * namespace.
   */
  get(
    dispatchNamespace: string,
    scriptName: string,
    params: BindingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkersAPI.Binding> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/bindings`,
      options,
    );
  }
}

export interface BindingGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Bindings {
  export import BindingGetParams = BindingsAPI.BindingGetParams;
}
