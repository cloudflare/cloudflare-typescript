// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BindingsAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/bindings';

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
    return this._client.get(
      `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/bindings`,
      options,
    );
  }
}

/**
 * A binding to allow the Worker to communicate with resources
 */
export type BindingGetResponse =
  | BindingGetResponse.WorkersKVNamespaceBinding
  | BindingGetResponse.WorkersServiceBinding
  | BindingGetResponse.WorkersDoBinding
  | BindingGetResponse.WorkersR2Binding
  | BindingGetResponse.WorkersQueueBinding
  | BindingGetResponse.WorkersD1Binding
  | BindingGetResponse.WorkersDispatchNamespaceBinding
  | BindingGetResponse.WorkersMTLSCERTBinding;

export namespace BindingGetResponse {
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

  export interface WorkersServiceBinding {
    /**
     * Optional environment if the Worker utilizes one.
     */
    environment: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Name of Worker to bind to
     */
    service: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'service';
  }

  export interface WorkersDoBinding {
    /**
     * The exported class name of the Durable Object
     */
    class_name: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'durable_object_namespace';

    /**
     * The environment of the script_name to bind to
     */
    environment?: string;

    /**
     * Namespace identifier tag.
     */
    namespace_id?: string;

    /**
     * The script where the Durable Object is defined, if it is external to this Worker
     */
    script_name?: string;
  }

  export interface WorkersR2Binding {
    /**
     * R2 bucket to bind to
     */
    bucket_name: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'r2_bucket';
  }

  export interface WorkersQueueBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Name of the Queue to bind to
     */
    queue_name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'queue';
  }

  export interface WorkersD1Binding {
    /**
     * ID of the D1 database to bind to
     */
    id: string;

    /**
     * A JavaScript variable name for the binding.
     */
    binding: string;

    /**
     * The name of the D1 database associated with the 'id' provided.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'd1';
  }

  export interface WorkersDispatchNamespaceBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Namespace to bind to
     */
    namespace: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'dispatch_namespace';

    /**
     * Outbound worker
     */
    outbound?: WorkersDispatchNamespaceBinding.Outbound;
  }

  export namespace WorkersDispatchNamespaceBinding {
    /**
     * Outbound worker
     */
    export interface Outbound {
      /**
       * Pass information from the Dispatch Worker to the Outbound Worker through the
       * parameters
       */
      params?: Array<string>;

      /**
       * Outbound worker
       */
      worker?: Outbound.Worker;
    }

    export namespace Outbound {
      /**
       * Outbound worker
       */
      export interface Worker {
        /**
         * Environment of the outbound worker
         */
        environment?: string;

        /**
         * Name of the outbound worker
         */
        service?: string;
      }
    }
  }

  export interface WorkersMTLSCERTBinding {
    certificate: unknown;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'mtls_certificate';

    /**
     * ID of the certificate to bind to
     */
    certificate_id?: string;
  }
}

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
