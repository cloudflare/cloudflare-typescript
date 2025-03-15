// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import { SinglePage } from '../../../../../pagination';

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
  ): Core.PagePromise<BindingGetResponsesSinglePage, BindingGetResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/bindings`,
      BindingGetResponsesSinglePage,
      options,
    );
  }
}

export class BindingGetResponsesSinglePage extends SinglePage<BindingGetResponse> {}

/**
 * A binding to allow the Worker to communicate with resources
 */
export type BindingGetResponse =
  | BindingGetResponse.WorkersBindingKindAI
  | BindingGetResponse.WorkersBindingKindAnalyticsEngine
  | BindingGetResponse.WorkersBindingKindAssets
  | BindingGetResponse.WorkersBindingKindBrowserRendering
  | BindingGetResponse.WorkersBindingKindD1
  | BindingGetResponse.WorkersBindingKindDispatchNamespace
  | BindingGetResponse.WorkersBindingKindDurableObjectNamespace
  | BindingGetResponse.WorkersBindingKindHyperdrive
  | BindingGetResponse.WorkersBindingKindJson
  | BindingGetResponse.WorkersBindingKindKVNamespace
  | BindingGetResponse.WorkersBindingKindMTLSCertificate
  | BindingGetResponse.WorkersBindingKindPlainText
  | BindingGetResponse.WorkersBindingKindQueue
  | BindingGetResponse.WorkersBindingKindR2Bucket
  | BindingGetResponse.WorkersBindingKindSecretText
  | BindingGetResponse.WorkersBindingKindService
  | BindingGetResponse.WorkersBindingKindTailConsumer
  | BindingGetResponse.WorkersBindingKindVectorize
  | BindingGetResponse.WorkersBindingKindVersionMetadata;

export namespace BindingGetResponse {
  export interface WorkersBindingKindAI {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';
  }

  export interface WorkersBindingKindAnalyticsEngine {
    /**
     * The name of the dataset to bind to.
     */
    dataset: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';
  }

  export interface WorkersBindingKindAssets {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';
  }

  export interface WorkersBindingKindBrowserRendering {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';
  }

  export interface WorkersBindingKindD1 {
    /**
     * Identifier of the D1 database to bind to.
     */
    id: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';
  }

  export interface WorkersBindingKindDispatchNamespace {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Namespace to bind to.
     */
    namespace: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';

    /**
     * Outbound worker.
     */
    outbound?: WorkersBindingKindDispatchNamespace.Outbound;
  }

  export namespace WorkersBindingKindDispatchNamespace {
    /**
     * Outbound worker.
     */
    export interface Outbound {
      /**
       * Pass information from the Dispatch Worker to the Outbound Worker through the
       * parameters.
       */
      params?: Array<string>;

      /**
       * Outbound worker.
       */
      worker?: Outbound.Worker;
    }

    export namespace Outbound {
      /**
       * Outbound worker.
       */
      export interface Worker {
        /**
         * Environment of the outbound worker.
         */
        environment?: string;

        /**
         * Name of the outbound worker.
         */
        service?: string;
      }
    }
  }

  export interface WorkersBindingKindDurableObjectNamespace {
    /**
     * The exported class name of the Durable Object.
     */
    class_name: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';

    /**
     * The environment of the script_name to bind to.
     */
    environment?: string;

    /**
     * Namespace identifier tag.
     */
    namespace_id?: string;

    /**
     * The script where the Durable Object is defined, if it is external to this
     * Worker.
     */
    script_name?: string;
  }

  export interface WorkersBindingKindHyperdrive {
    /**
     * Identifier of the Hyperdrive connection to bind to.
     */
    id: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';
  }

  export interface WorkersBindingKindJson {
    /**
     * JSON data to use.
     */
    json: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';
  }

  export interface WorkersBindingKindKVNamespace {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Namespace identifier tag.
     */
    namespace_id: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';
  }

  export interface WorkersBindingKindMTLSCertificate {
    /**
     * Identifier of the certificate to bind to.
     */
    certificate_id: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';
  }

  export interface WorkersBindingKindPlainText {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The text value to use.
     */
    text: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';
  }

  export interface WorkersBindingKindQueue {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Name of the Queue to bind to.
     */
    queue_name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';
  }

  export interface WorkersBindingKindR2Bucket {
    /**
     * R2 bucket to bind to.
     */
    bucket_name: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';
  }

  export interface WorkersBindingKindSecretText {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The secret value to use.
     */
    text: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';
  }

  export interface WorkersBindingKindService {
    /**
     * Optional environment if the Worker utilizes one.
     */
    environment: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Name of Worker to bind to.
     */
    service: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';
  }

  export interface WorkersBindingKindTailConsumer {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Name of Tail Worker to bind to.
     */
    service: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';
  }

  export interface WorkersBindingKindVectorize {
    /**
     * Name of the Vectorize index to bind to.
     */
    index_name: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';
  }

  export interface WorkersBindingKindVersionMetadata {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type:
      | 'ai'
      | 'analytics_engine'
      | 'assets'
      | 'browser_rendering'
      | 'd1'
      | 'dispatch_namespace'
      | 'durable_object_namespace'
      | 'hyperdrive'
      | 'json'
      | 'kv_namespace'
      | 'mtls_certificate'
      | 'plain_text'
      | 'queue'
      | 'r2_bucket'
      | 'secret_text'
      | 'service'
      | 'tail_consumer'
      | 'vectorize'
      | 'version_metadata';
  }
}

export interface BindingGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

Bindings.BindingGetResponsesSinglePage = BindingGetResponsesSinglePage;

export declare namespace Bindings {
  export {
    type BindingGetResponse as BindingGetResponse,
    BindingGetResponsesSinglePage as BindingGetResponsesSinglePage,
    type BindingGetParams as BindingGetParams,
  };
}
