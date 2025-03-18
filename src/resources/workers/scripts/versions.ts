// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { V4PagePagination, type V4PagePaginationParams } from '../../../pagination';

export class Versions extends APIResource {
  /**
   * Upload a Worker Version without deploying to Cloudflare's network. You can find
   * more about the multipart metadata on our docs:
   * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/.
   */
  create(
    scriptName: string,
    params: VersionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/workers/scripts/${scriptName}/versions`,
        Core.multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: VersionCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List of Worker Versions. The first version in the list is the latest version.
   */
  list(
    scriptName: string,
    params: VersionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<VersionListResponsesV4PagePagination, VersionListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workers/scripts/${scriptName}/versions`,
      VersionListResponsesV4PagePagination,
      { query, ...options },
    );
  }

  /**
   * Get Version Detail
   */
  get(
    scriptName: string,
    versionId: string,
    params: VersionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/versions/${versionId}`,
        options,
      ) as Core.APIPromise<{ result: VersionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class VersionListResponsesV4PagePagination extends V4PagePagination<VersionListResponse> {}

export interface VersionCreateResponse {
  resources: unknown;

  id?: string;

  metadata?: unknown;

  number?: number;

  startup_time_ms?: number;
}

export interface VersionListResponse {
  id?: string;

  metadata?: unknown;

  number?: number;
}

export interface VersionGetResponse {
  resources: unknown;

  id?: string;

  metadata?: unknown;

  number?: number;
}

export interface VersionCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: JSON encoded metadata about the uploaded parts and Worker
   * configuration.
   */
  metadata: VersionCreateParams.Metadata;
}

export namespace VersionCreateParams {
  /**
   * JSON encoded metadata about the uploaded parts and Worker configuration.
   */
  export interface Metadata {
    /**
     * Name of the part in the multipart request that contains the main module (e.g.
     * the file exporting a `fetch` handler). Indicates a `module syntax` Worker, which
     * is required for Version Upload.
     */
    main_module: string;

    annotations?: Metadata.Annotations;

    /**
     * List of bindings attached to a Worker. You can find more about bindings on our
     * docs:
     * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
     */
    bindings?: Array<
      | Metadata.WorkersBindingKindAI
      | Metadata.WorkersBindingKindAnalyticsEngine
      | Metadata.WorkersBindingKindAssets
      | Metadata.WorkersBindingKindBrowserRendering
      | Metadata.WorkersBindingKindD1
      | Metadata.WorkersBindingKindDispatchNamespace
      | Metadata.WorkersBindingKindDurableObjectNamespace
      | Metadata.WorkersBindingKindHyperdrive
      | Metadata.WorkersBindingKindJson
      | Metadata.WorkersBindingKindKVNamespace
      | Metadata.WorkersBindingKindMTLSCertificate
      | Metadata.WorkersBindingKindPlainText
      | Metadata.WorkersBindingKindQueue
      | Metadata.WorkersBindingKindR2Bucket
      | Metadata.WorkersBindingKindSecretText
      | Metadata.WorkersBindingKindService
      | Metadata.WorkersBindingKindTailConsumer
      | Metadata.WorkersBindingKindVectorize
      | Metadata.WorkersBindingKindVersionMetadata
    >;

    /**
     * Date indicating targeted support in the Workers runtime. Backwards incompatible
     * fixes to the runtime following this date will not affect this Worker.
     */
    compatibility_date?: string;

    /**
     * Flags that enable or disable certain features in the Workers runtime. Used to
     * enable upcoming features or opt in or out of specific changes not included in a
     * `compatibility_date`.
     */
    compatibility_flags?: Array<string>;

    /**
     * List of binding types to keep from previous_upload.
     */
    keep_bindings?: Array<string>;

    /**
     * Usage model for the Worker invocations.
     */
    usage_model?: 'standard';
  }

  export namespace Metadata {
    export interface Annotations {
      /**
       * Human-readable message about the version. Truncated to 100 bytes.
       */
      'workers/message'?: string;

      /**
       * User-provided identifier for the version.
       */
      'workers/tag'?: string;
    }

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
}

export interface VersionListParams extends V4PagePaginationParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: Only return versions that can be used in a deployment. Ignores
   * pagination.
   */
  deployable?: boolean;
}

export interface VersionGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

Versions.VersionListResponsesV4PagePagination = VersionListResponsesV4PagePagination;

export declare namespace Versions {
  export {
    type VersionCreateResponse as VersionCreateResponse,
    type VersionListResponse as VersionListResponse,
    type VersionGetResponse as VersionGetResponse,
    VersionListResponsesV4PagePagination as VersionListResponsesV4PagePagination,
    type VersionCreateParams as VersionCreateParams,
    type VersionListParams as VersionListParams,
    type VersionGetParams as VersionGetParams,
  };
}
