// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import * as BindingsAPI from './bindings';
import * as WorkersAPI from '../../../../workers/workers';

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
  ): Core.APIPromise<BindingGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/bindings`,
        options,
      ) as Core.APIPromise<{ result: BindingGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * List of bindings attached to this Worker
 */
export type BindingGetResponse = Array<WorkersAPI.Binding>;

export interface BindingGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Bindings {
  export import BindingGetResponse = BindingsAPI.BindingGetResponse;
  export import BindingGetParams = BindingsAPI.BindingGetParams;
}
