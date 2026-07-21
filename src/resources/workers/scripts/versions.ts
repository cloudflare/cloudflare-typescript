// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, V4PagePagination, type V4PagePaginationParams } from '../../../core/pagination';
import { type Uploadable } from '../../../core/uploads';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class BaseVersions extends APIResource {
  static override readonly _key: readonly ['workers', 'scripts', 'versions'] = Object.freeze([
    'workers',
    'scripts',
    'versions',
  ] as const);

  /**
   * Upload a Worker Version without deploying to Cloudflare's network. You can find
   * more about the multipart metadata on our docs:
   * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/.
   *
   * @example
   * ```ts
   * const version =
   *   await client.workers.scripts.versions.create(
   *     'this-is_my_script-01',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       metadata: { main_module: 'worker.js' },
   *     },
   *   );
   * ```
   */
  create(
    scriptName: string,
    params: VersionCreateParams,
    options?: RequestOptions,
  ): APIPromise<VersionCreateResponse> {
    const { account_id, bindings_inherit, ...body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/workers/scripts/${scriptName}/versions`,
        multipartFormRequestOptions({ query: { bindings_inherit }, body, ...options }, this._client),
      ) as APIPromise<{ result: VersionCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List of Worker Versions. The first version in the list is the latest version.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const versionListResponse of client.workers.scripts.versions.list(
   *   'this-is_my_script-01',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    scriptName: string,
    params: VersionListParams,
    options?: RequestOptions,
  ): PagePromise<VersionListResponsesV4PagePagination, VersionListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/workers/scripts/${scriptName}/versions`,
      V4PagePagination<VersionListResponse>,
      { query, ...options },
    );
  }

  /**
   * Retrieves detailed information about a specific version of a Workers script.
   *
   * @example
   * ```ts
   * const version = await client.workers.scripts.versions.get(
   *   'bcf48806-b317-4351-9ee7-36e7d557d4de',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     script_name: 'this-is_my_script-01',
   *   },
   * );
   * ```
   */
  get(versionID: string, params: VersionGetParams, options?: RequestOptions): APIPromise<VersionGetResponse> {
    const { account_id, script_name } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/workers/scripts/${script_name}/versions/${versionID}`,
        options,
      ) as APIPromise<{ result: VersionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Versions extends BaseVersions {}

export type VersionListResponsesV4PagePagination = V4PagePagination<VersionListResponse>;

export interface VersionCreateResponse {
  resources: VersionCreateResponse.Resources;

  /**
   * Unique identifier for the version.
   */
  id?: string;

  /**
   * Summary of the declarative exports reconciliation that ran on this upload.
   * Populated only when the uploaded metadata included an `exports` block. Durable
   * Object entries drive reconciliation; `type: worker` entries do not contribute to
   * this summary.
   */
  exports_reconciliation?: VersionCreateResponse.ExportsReconciliation;

  metadata?: VersionCreateResponse.Metadata;

  /**
   * Sequential version number.
   */
  number?: number;

  /**
   * Time in milliseconds spent on
   * [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time).
   */
  startup_time_ms?: number;
}

export namespace VersionCreateResponse {
  export interface Resources {
    /**
     * List of bindings attached to a Worker. You can find more about bindings on our
     * docs:
     * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
     */
    bindings?: Array<
      | Resources.WorkersBindingKindAI
      | Resources.WorkersBindingKindAISearch
      | Resources.WorkersBindingKindAISearchNamespace
      | Resources.WorkersBindingKindAnalyticsEngine
      | Resources.WorkersBindingKindAssets
      | Resources.WorkersBindingKindBrowser
      | Resources.WorkersBindingKindD1
      | Resources.WorkersBindingKindDataBlob
      | Resources.WorkersBindingKindDispatchNamespace
      | Resources.WorkersBindingKindDurableObjectNamespace
      | Resources.WorkersBindingKindHyperdrive
      | Resources.WorkersBindingKindInherit
      | Resources.WorkersBindingKindImages
      | Resources.WorkersBindingKindJson
      | Resources.WorkersBindingKindKVNamespace
      | Resources.WorkersBindingKindMedia
      | Resources.WorkersBindingKindMTLSCertificate
      | Resources.WorkersBindingKindPlainText
      | Resources.WorkersBindingKindPipelines
      | Resources.WorkersBindingKindQueue
      | Resources.WorkersBindingKindRatelimit
      | Resources.WorkersBindingKindR2Bucket
      | Resources.WorkersBindingKindSecretText
      | Resources.WorkersBindingKindSendEmail
      | Resources.WorkersBindingKindService
      | Resources.WorkersBindingKindTextBlob
      | Resources.WorkersBindingKindVectorize
      | Resources.WorkersBindingKindVersionMetadata
      | Resources.WorkersBindingKindSecretsStoreSecret
      | Resources.WorkersBindingKindFlagship
      | Resources.WorkersBindingKindSecretKey
      | Resources.WorkersBindingKindWorkflow
      | Resources.WorkersBindingKindWasmModule
      | Resources.WorkersBindingKindVPCService
      | Resources.WorkersBindingKindVPCNetwork
    >;

    script?: Resources.Script;

    /**
     * Runtime configuration for the Worker.
     */
    script_runtime?: Resources.ScriptRuntime;
  }

  export namespace Resources {
    export interface WorkersBindingKindAI {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'ai';
    }

    export interface WorkersBindingKindAISearch {
      /**
       * The user-chosen instance name. Must exist at deploy time. The worker can search,
       * chat, update, and manage items/jobs on this instance.
       */
      instance_name: string;

      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'ai_search';

      /**
       * The namespace the instance belongs to. Defaults to "default" if omitted.
       * Customers who don't use namespaces can simply omit this field.
       */
      namespace?: string;
    }

    export interface WorkersBindingKindAISearchNamespace {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The user-chosen namespace name. Must exist before deploy -- Wrangler handles
       * auto-creation on deploy failure (R2 bucket pattern). The "default" namespace is
       * auto-created by config-api for new accounts. Grants full access (CRUD + search +
       * chat) to all instances within the namespace.
       */
      namespace: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'ai_search_namespace';
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
      type: 'analytics_engine';
    }

    export interface WorkersBindingKindAssets {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'assets';
    }

    export interface WorkersBindingKindBrowser {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'browser';
    }

    export interface WorkersBindingKindD1 {
      /**
       * Identifier of the D1 database to bind to.
       */
      database_id: string;

      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'd1';

      /**
       * @deprecated This property has been renamed to `database_id`.
       */
      id?: string;
    }

    export interface WorkersBindingKindDataBlob {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The name of the file containing the data content. Only accepted for
       * `service worker syntax` Workers.
       */
      part: string;

      /**
       * @deprecated The kind of resource that the binding provides.
       */
      type: 'data_blob';
    }

    export interface WorkersBindingKindDispatchNamespace {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The name of the dispatch namespace.
       */
      namespace: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'dispatch_namespace';

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
        params?: Array<Outbound.Param>;

        /**
         * Outbound worker.
         */
        worker?: Outbound.Worker;
      }

      export namespace Outbound {
        export interface Param {
          /**
           * Name of the parameter.
           */
          name: string;
        }

        /**
         * Outbound worker.
         */
        export interface Worker {
          /**
           * Entrypoint to invoke on the outbound worker.
           */
          entrypoint?: string;

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
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'durable_object_namespace';

      /**
       * The exported class name of the Durable Object.
       */
      class_name?: string;

      /**
       * The dispatch namespace the Durable Object script belongs to.
       */
      dispatch_namespace?: string;

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
      type: 'hyperdrive';
    }

    export interface WorkersBindingKindInherit {
      /**
       * The name of the inherited binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'inherit';

      /**
       * The old name of the inherited binding. If set, the binding will be renamed from
       * `old_name` to `name` in the new version. If not set, the binding will keep the
       * same name between versions.
       */
      old_name?: string;

      /**
       * Identifier for the version to inherit the binding from, which can be the version
       * ID or the literal "latest" to inherit from the latest version. Defaults to
       * inheriting the binding from the latest version.
       */
      version_id?: string;
    }

    export interface WorkersBindingKindImages {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'images';
    }

    export interface WorkersBindingKindJson {
      /**
       * JSON data to use.
       */
      json: unknown;

      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'json';
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
      type: 'kv_namespace';
    }

    export interface WorkersBindingKindMedia {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'media';
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
      type: 'mtls_certificate';
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
      type: 'plain_text';
    }

    export interface WorkersBindingKindPipelines {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * Name of the Pipeline to bind to.
       */
      pipeline: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'pipelines';
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
      type: 'queue';
    }

    export interface WorkersBindingKindRatelimit {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * Identifier of the rate limit namespace to bind to.
       */
      namespace_id: string;

      /**
       * The rate limit configuration.
       */
      simple: WorkersBindingKindRatelimit.Simple;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'ratelimit';
    }

    export namespace WorkersBindingKindRatelimit {
      /**
       * The rate limit configuration.
       */
      export interface Simple {
        /**
         * The limit (requests per period).
         */
        limit: number;

        /**
         * The period in seconds.
         */
        period: number;

        /**
         * Duration in seconds to apply the mitigation action after the rate limit is
         * exceeded. Valid values are 0 (disabled), 10, or multiples of 60 up to 86400.
         * Must be greater than or equal to the period when non-zero.
         */
        mitigation_timeout?: number;
      }
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
      type: 'r2_bucket';

      /**
       * The
       * [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions)
       * of the R2 bucket.
       */
      jurisdiction?: 'eu' | 'fedramp' | 'fedramp-high';
    }

    export interface WorkersBindingKindSecretText {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'secret_text';
    }

    export interface WorkersBindingKindSendEmail {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'send_email';

      /**
       * List of allowed destination addresses.
       */
      allowed_destination_addresses?: Array<string>;

      /**
       * List of allowed sender addresses.
       */
      allowed_sender_addresses?: Array<string>;

      /**
       * Destination address for the email.
       */
      destination_address?: string;
    }

    export interface WorkersBindingKindService {
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
      type: 'service';

      /**
       * Entrypoint to invoke on the target Worker.
       */
      entrypoint?: string;

      /**
       * Optional environment if the Worker utilizes one.
       */
      environment?: string;
    }

    export interface WorkersBindingKindTextBlob {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The name of the file containing the text content. Only accepted for
       * `service worker syntax` Workers.
       */
      part: string;

      /**
       * @deprecated The kind of resource that the binding provides.
       */
      type: 'text_blob';
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
      type: 'vectorize';
    }

    export interface WorkersBindingKindVersionMetadata {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'version_metadata';
    }

    export interface WorkersBindingKindSecretsStoreSecret {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * Name of the secret in the store.
       */
      secret_name: string;

      /**
       * ID of the store containing the secret.
       */
      store_id: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'secrets_store_secret';
    }

    export interface WorkersBindingKindFlagship {
      /**
       * ID of the Flagship app to bind to for feature flag evaluation.
       */
      app_id: string;

      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'flagship';
    }

    export interface WorkersBindingKindSecretKey {
      /**
       * Algorithm-specific key parameters.
       * [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).
       */
      algorithm: unknown;

      /**
       * Data format of the key.
       * [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format).
       */
      format: 'raw' | 'pkcs8' | 'spki' | 'jwk';

      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'secret_key';

      /**
       * Allowed operations with the key.
       * [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).
       */
      usages: Array<
        'encrypt' | 'decrypt' | 'sign' | 'verify' | 'deriveKey' | 'deriveBits' | 'wrapKey' | 'unwrapKey'
      >;
    }

    export interface WorkersBindingKindWorkflow {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'workflow';

      /**
       * Name of the Workflow to bind to.
       */
      workflow_name: string;

      /**
       * Class name of the Workflow. Should only be provided if the Workflow belongs to
       * this script.
       */
      class_name?: string;

      /**
       * Script name that contains the Workflow. If not provided, defaults to this script
       * name.
       */
      script_name?: string;
    }

    export interface WorkersBindingKindWasmModule {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The name of the file containing the WebAssembly module content. Only accepted
       * for `service worker syntax` Workers.
       */
      part: string;

      /**
       * @deprecated The kind of resource that the binding provides.
       */
      type: 'wasm_module';
    }

    export interface WorkersBindingKindVPCService {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * Identifier of the VPC service to bind to.
       */
      service_id: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'vpc_service';
    }

    export interface WorkersBindingKindVPCNetwork {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'vpc_network';

      /**
       * Identifier of the network to bind to. Only "cf1:network" is currently supported.
       * Mutually exclusive with tunnel_id.
       */
      network_id?: string;

      /**
       * UUID of the Cloudflare Tunnel to bind to. Mutually exclusive with network_id.
       */
      tunnel_id?: string;
    }

    export interface Script {
      /**
       * Hashed script content
       */
      etag?: string;

      /**
       * The names of handlers exported as part of the default export.
       */
      handlers?: Array<string>;

      /**
       * The client most recently used to deploy this Worker.
       */
      last_deployed_from?: string;

      /**
       * Named exports, such as Durable Object class implementations and named
       * entrypoints.
       */
      named_handlers?: Array<Script.NamedHandler>;
    }

    export namespace Script {
      export interface NamedHandler {
        /**
         * The names of handlers exported as part of the named export.
         */
        handlers?: Array<string>;

        /**
         * The name of the exported class or entrypoint.
         */
        name?: string;
      }
    }

    /**
     * Runtime configuration for the Worker.
     */
    export interface ScriptRuntime {
      /**
       * Date indicating targeted support in the Workers runtime. Backwards incompatible
       * fixes to the runtime following this date will not affect this Worker.
       */
      compatibility_date?: string;

      /**
       * Flags that enable or disable certain features in the Workers runtime.
       */
      compatibility_flags?: Array<string>;

      /**
       * Declarative exports for this version, including Durable Object classes (with
       * their `storage` backend) and named Worker entrypoints. Tombstoned lifecycle
       * entries are omitted, so only live exports (`created` and `expecting-transfer`)
       * are returned.
       */
      exports?: {
        [key: string]:
          | ScriptRuntime.WorkersWorkerExport
          | ScriptRuntime.WorkersDurableObjectExport
          | ScriptRuntime.WorkersDurableObjectDeletedExport
          | ScriptRuntime.WorkersDurableObjectRenamedExport
          | ScriptRuntime.WorkersDurableObjectTransferredExport
          | ScriptRuntime.WorkersDurableObjectExpectingTransferExport;
      };

      /**
       * Resource limits for the Worker.
       */
      limits?: ScriptRuntime.Limits;

      /**
       * The tag of the Durable Object migration that was most recently applied for this
       * Worker.
       */
      migration_tag?: string;

      /**
       * Usage model for the Worker invocations.
       */
      usage_model?: 'bundled' | 'unbound' | 'standard';
    }

    export namespace ScriptRuntime {
      /**
       * A named Worker entrypoint export (`type: worker`). Worker entrypoints are always
       * live (`state: created`) and carry no storage or lifecycle fields. The optional
       * `cache` block overrides the Worker's global `cache_options.enabled` for this
       * entrypoint.
       */
      export interface WorkersWorkerExport {
        /**
         * Marks this entry as a Worker entrypoint export.
         */
        type: 'worker';

        /**
         * Cache override for this entrypoint. Overrides the Worker's global
         * `cache_options.enabled` for this entrypoint only.
         */
        cache?: WorkersWorkerExport.Cache;

        /**
         * Live export. May be omitted; defaults to `created`.
         */
        state?: 'created';
      }

      export namespace WorkersWorkerExport {
        /**
         * Cache override for this entrypoint. Overrides the Worker's global
         * `cache_options.enabled` for this entrypoint only.
         */
        export interface Cache {
          /**
           * Whether caching is enabled for this entrypoint.
           */
          enabled: boolean;
        }
      }

      /**
       * A live Durable Object export (`state: created`, the default). The platform
       * auto-provisions the namespace on first deploy, matches it on subsequent deploys,
       * and never mutates or deletes it as a side effect of a code-only change.
       * `storage` is required; `renamed_to`, `transferred_to` and `transfer_from` are
       * not allowed on a live entry.
       */
      export interface WorkersDurableObjectExport {
        /**
         * Durable Object storage backend. `sqlite` is the recommended (and only) backend
         * for new namespaces. `legacy-kv` is accepted only for a class whose namespace
         * already exists as KV-backed; the `exports` flow never provisions a new
         * `legacy-kv` namespace.
         */
        storage: 'sqlite' | 'legacy-kv';

        /**
         * Marks this entry as a Durable Object export.
         */
        type: 'durable-object';

        /**
         * Name of the container (declared in the upload's `metadata.containers`) that
         * backs this Durable Object. When set, the namespace is container-enabled. Valid
         * only on live entries.
         */
        container?: string;

        /**
         * Live export. May be omitted; defaults to `created`.
         */
        state?: 'created';
      }

      /**
       * A `deleted` tombstone: retires the provisioned namespace for this class and all
       * of its data. The class must be absent from the uploaded code and no other Worker
       * in the account may bind to the namespace, otherwise the deploy is rejected. No
       * other fields are allowed. Deletion is irreversible.
       */
      export interface WorkersDurableObjectDeletedExport {
        /**
         * Tombstone that deletes the namespace.
         */
        state: 'deleted';

        /**
         * Marks this entry as a Durable Object export.
         */
        type: 'durable-object';
      }

      /**
       * A `renamed` tombstone: rewrites the provisioned namespace's class name from this
       * map key to `renamed_to`. The source class may stay in code during the rollout
       * window (an info notice is emitted). `storage`, `transferred_to` and
       * `transfer_from` are not allowed.
       */
      export interface WorkersDurableObjectRenamedExport {
        /**
         * Tombstone that renames the namespace's class.
         */
        state: 'renamed';

        /**
         * Marks this entry as a Durable Object export.
         */
        type: 'durable-object';
      }

      /**
       * A `transferred` tombstone (source side of a two-phase transfer): hands ownership
       * of the provisioned namespace to another script in the same account, named by
       * `transferred_to`. The target must have already deployed a matching
       * `expecting-transfer` entry. The source class may stay in code during the rollout
       * window (an info notice is emitted). `storage`, `renamed_to` and `transfer_from`
       * are not allowed.
       */
      export interface WorkersDurableObjectTransferredExport {
        /**
         * Tombstone that transfers the namespace to another script.
         */
        state: 'transferred';

        /**
         * Marks this entry as a Durable Object export.
         */
        type: 'durable-object';
      }

      /**
       * The target side of a two-phase transfer (`state: expecting-transfer`). Declares
       * that this script expects to receive a namespace for this class from the
       * `transfer_from` script. This is a live entry, not a tombstone: bindings resolve
       * through the source's namespace until the source commits with a `transferred`
       * tombstone. `storage` and `transfer_from` are required; `renamed_to` and
       * `transferred_to` are not allowed.
       */
      export interface WorkersDurableObjectExpectingTransferExport {
        /**
         * Target side of a two-phase transfer.
         */
        state: 'expecting-transfer';

        /**
         * Durable Object storage backend. `sqlite` is the recommended (and only) backend
         * for new namespaces. `legacy-kv` is accepted only for a class whose namespace
         * already exists as KV-backed; the `exports` flow never provisions a new
         * `legacy-kv` namespace.
         */
        storage: 'sqlite' | 'legacy-kv';

        /**
         * The source script name to receive the namespace from. Must be in the same
         * account and dispatch-namespace context. Present on reads for
         * `expecting-transfer` entries.
         */
        transfer_from: string;

        /**
         * Marks this entry as a Durable Object export.
         */
        type: 'durable-object';

        /**
         * Name of the container (declared in the upload's `metadata.containers`) that
         * backs this Durable Object once the transfer settles. Valid only on live entries.
         */
        container?: string;
      }

      /**
       * Resource limits for the Worker.
       */
      export interface Limits {
        /**
         * The amount of CPU time this Worker can use in milliseconds.
         */
        cpu_ms?: number;
      }
    }
  }

  /**
   * Summary of the declarative exports reconciliation that ran on this upload.
   * Populated only when the uploaded metadata included an `exports` block. Durable
   * Object entries drive reconciliation; `type: worker` entries do not contribute to
   * this summary.
   */
  export interface ExportsReconciliation {
    /**
     * Class names for which a new namespace was provisioned.
     */
    created: Array<string>;

    /**
     * Class names whose namespace was deleted by a `deleted` tombstone.
     */
    deleted: Array<string>;

    /**
     * Non-blocking info entries (stale tombstones, tombstone applied with class still
     * in code). See `exports_reconciliation_info`.
     */
    info: Array<ExportsReconciliation.Info>;

    /**
     * Source class names whose tombstone entry is now stale and safe to delete from
     * `exports` (no remaining referencing scripts).
     */
    removable_entries: Array<string>;

    /**
     * Applied `renamed` tombstones.
     */
    renamed: Array<ExportsReconciliation.Renamed>;

    /**
     * Phase-1 transfer hints recorded on the target side.
     */
    transfer_pending: Array<ExportsReconciliation.TransferPending>;

    /**
     * Committed `transferred` tombstones (phase-2).
     */
    transferred: Array<ExportsReconciliation.Transferred>;

    /**
     * Class names whose provisioned namespace was mutated in place.
     */
    updated: Array<string>;

    /**
     * Non-blocking warnings. See `exports_reconciliation_warning`.
     */
    warnings: Array<ExportsReconciliation.Warning>;
  }

  export namespace ExportsReconciliation {
    /**
     * A non-blocking reconciliation info entry. Emitted for stale tombstones (a no-op
     * on this deploy) and for tombstones applied with the source class still in code
     * (the supported zero-downtime rollout pattern).
     */
    export interface Info {
      /**
       * The class name the info entry is about.
       */
      class: string;

      /**
       * Human-readable explanation.
       */
      message: string;

      /**
       * Stable, machine-readable tag identifying which reconciliation scenario produced
       * an error, warning, or info entry. Clients may branch on this value instead of
       * parsing `message`.
       */
      scenario:
        | 'code_class_not_in_exports'
        | 'provisioned_class_missing_from_config'
        | 'config_export_not_in_code'
        | 'config_references_nonexistent_class'
        | 'orphaned_provisioned_namespace'
        | 'storage_type_mismatch'
        | 'free_tier_requires_sqlite'
        | 'invalid_export'
        | 'tombstone_delete_class_still_in_code'
        | 'tombstone_delete_blocked_by_external_bindings'
        | 'tombstone_renamed_to_occupied'
        | 'transferred_pending_not_found'
        | 'transferred_target_missing'
        | 'transferred_target_mismatch'
        | 'phase_one_transfer_source_missing'
        | 'phase_one_transfer_source_namespace_missing'
        | 'phase_one_transfer_target_class_provisioned'
        | 'phase_one_transfer_after_commit_mismatch'
        | 'phase_one_transfer_duplicate'
        | 'phase_one_transfer_target_in_dispatch_namespace'
        | 'phase_one_transfer_source_in_dispatch_namespace'
        | 'transferred_source_in_dispatch_namespace'
        | 'transferred_target_in_dispatch_namespace'
        | 'container_undeclared_reference'
        | 'container_class_not_durable_object'
        | 'container_wiring_inconsistent'
        | 'container_multiple_durable_objects'
        | 'transfer_container_parity_mismatch'
        | 'transfer_container_parity_mismatch_on_commit'
        | 'tombstone_class_still_in_code'
        | 'stale_tombstone'
        | 'transfer_receive_already_applied'
        | 'transfer_receive_cleanup_complete';

      /**
       * The provisioned namespace the entry relates to, when applicable.
       */
      namespace_id?: string;

      /**
       * Other Workers in the account that still bind to the affected class. Advisory:
       * while non-empty the tombstone is not yet safe to remove — redeploy these Workers
       * with bindings re-pointed first.
       */
      referencing_scripts?: Array<string>;
    }

    /**
     * A single applied `renamed` tombstone.
     */
    export interface Renamed {
      /**
       * The original (source) class name.
       */
      from: string;

      /**
       * The new class name (`renamed_to`).
       */
      to: string;
    }

    /**
     * A single phase-1 transfer hint recorded on the target side (a live
     * `expecting-transfer` entry).
     */
    export interface TransferPending {
      /**
       * The target-side class name awaiting transfer.
       */
      class: string;

      /**
       * The source script the namespace will be transferred from.
       */
      from: string;
    }

    /**
     * A single committed `transferred` tombstone (phase-2 commit).
     */
    export interface Transferred {
      /**
       * The source class name that was transferred.
       */
      class: string;

      /**
       * The transfer phase. Currently always `committed`.
       */
      phase: 'committed';

      /**
       * The destination script that now owns the namespace.
       */
      to: string;
    }

    /**
     * A non-blocking reconciliation warning. Reserved: no scenario populates this
     * array today (`code_class_not_in_exports` is surfaced as info and
     * `provisioned_class_missing_from_config` is a hard error). Clients should still
     * surface any entries that appear.
     */
    export interface Warning {
      /**
       * The class name the warning is about.
       */
      class: string;

      /**
       * Human-readable explanation of the warning.
       */
      message: string;

      /**
       * Stable, machine-readable tag identifying which reconciliation scenario produced
       * an error, warning, or info entry. Clients may branch on this value instead of
       * parsing `message`.
       */
      scenario:
        | 'code_class_not_in_exports'
        | 'provisioned_class_missing_from_config'
        | 'config_export_not_in_code'
        | 'config_references_nonexistent_class'
        | 'orphaned_provisioned_namespace'
        | 'storage_type_mismatch'
        | 'free_tier_requires_sqlite'
        | 'invalid_export'
        | 'tombstone_delete_class_still_in_code'
        | 'tombstone_delete_blocked_by_external_bindings'
        | 'tombstone_renamed_to_occupied'
        | 'transferred_pending_not_found'
        | 'transferred_target_missing'
        | 'transferred_target_mismatch'
        | 'phase_one_transfer_source_missing'
        | 'phase_one_transfer_source_namespace_missing'
        | 'phase_one_transfer_target_class_provisioned'
        | 'phase_one_transfer_after_commit_mismatch'
        | 'phase_one_transfer_duplicate'
        | 'phase_one_transfer_target_in_dispatch_namespace'
        | 'phase_one_transfer_source_in_dispatch_namespace'
        | 'transferred_source_in_dispatch_namespace'
        | 'transferred_target_in_dispatch_namespace'
        | 'container_undeclared_reference'
        | 'container_class_not_durable_object'
        | 'container_wiring_inconsistent'
        | 'container_multiple_durable_objects'
        | 'transfer_container_parity_mismatch'
        | 'transfer_container_parity_mismatch_on_commit'
        | 'tombstone_class_still_in_code'
        | 'stale_tombstone'
        | 'transfer_receive_already_applied'
        | 'transfer_receive_cleanup_complete';

      /**
       * The provisioned namespace the warning relates to, when applicable.
       */
      namespace_id?: string;
    }
  }

  export interface Metadata {
    /**
     * Email of the user who created the version.
     */
    author_email?: string;

    /**
     * Identifier of the user who created the version.
     */
    author_id?: string;

    /**
     * When the version was created.
     */
    created_on?: string;

    /**
     * Whether the version can be previewed.
     */
    hasPreview?: boolean;

    /**
     * When the version was last modified.
     */
    modified_on?: string;

    /**
     * The source of the version upload.
     */
    source?:
      | 'unknown'
      | 'api'
      | 'wrangler'
      | 'terraform'
      | 'dash'
      | 'cf_cli'
      | 'dash_template'
      | 'integration'
      | 'quick_editor'
      | 'playground'
      | 'workersci';
  }
}

export interface VersionListResponse {
  /**
   * Unique identifier for the version.
   */
  id?: string;

  metadata?: VersionListResponse.Metadata;

  /**
   * Sequential version number.
   */
  number?: number;
}

export namespace VersionListResponse {
  export interface Metadata {
    /**
     * Email of the user who created the version.
     */
    author_email?: string;

    /**
     * Identifier of the user who created the version.
     */
    author_id?: string;

    /**
     * When the version was created.
     */
    created_on?: string;

    /**
     * Whether the version can be previewed.
     */
    hasPreview?: boolean;

    /**
     * When the version was last modified.
     */
    modified_on?: string;

    /**
     * The source of the version upload.
     */
    source?:
      | 'unknown'
      | 'api'
      | 'wrangler'
      | 'terraform'
      | 'dash'
      | 'cf_cli'
      | 'dash_template'
      | 'integration'
      | 'quick_editor'
      | 'playground'
      | 'workersci';
  }
}

export interface VersionGetResponse {
  resources: VersionGetResponse.Resources;

  /**
   * Unique identifier for the version.
   */
  id?: string;

  metadata?: VersionGetResponse.Metadata;

  /**
   * Sequential version number.
   */
  number?: number;
}

export namespace VersionGetResponse {
  export interface Resources {
    /**
     * List of bindings attached to a Worker. You can find more about bindings on our
     * docs:
     * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
     */
    bindings?: Array<
      | Resources.WorkersBindingKindAI
      | Resources.WorkersBindingKindAISearch
      | Resources.WorkersBindingKindAISearchNamespace
      | Resources.WorkersBindingKindAnalyticsEngine
      | Resources.WorkersBindingKindAssets
      | Resources.WorkersBindingKindBrowser
      | Resources.WorkersBindingKindD1
      | Resources.WorkersBindingKindDataBlob
      | Resources.WorkersBindingKindDispatchNamespace
      | Resources.WorkersBindingKindDurableObjectNamespace
      | Resources.WorkersBindingKindHyperdrive
      | Resources.WorkersBindingKindInherit
      | Resources.WorkersBindingKindImages
      | Resources.WorkersBindingKindJson
      | Resources.WorkersBindingKindKVNamespace
      | Resources.WorkersBindingKindMedia
      | Resources.WorkersBindingKindMTLSCertificate
      | Resources.WorkersBindingKindPlainText
      | Resources.WorkersBindingKindPipelines
      | Resources.WorkersBindingKindQueue
      | Resources.WorkersBindingKindRatelimit
      | Resources.WorkersBindingKindR2Bucket
      | Resources.WorkersBindingKindSecretText
      | Resources.WorkersBindingKindSendEmail
      | Resources.WorkersBindingKindService
      | Resources.WorkersBindingKindTextBlob
      | Resources.WorkersBindingKindVectorize
      | Resources.WorkersBindingKindVersionMetadata
      | Resources.WorkersBindingKindSecretsStoreSecret
      | Resources.WorkersBindingKindFlagship
      | Resources.WorkersBindingKindSecretKey
      | Resources.WorkersBindingKindWorkflow
      | Resources.WorkersBindingKindWasmModule
      | Resources.WorkersBindingKindVPCService
      | Resources.WorkersBindingKindVPCNetwork
    >;

    script?: Resources.Script;

    /**
     * Runtime configuration for the Worker.
     */
    script_runtime?: Resources.ScriptRuntime;
  }

  export namespace Resources {
    export interface WorkersBindingKindAI {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'ai';
    }

    export interface WorkersBindingKindAISearch {
      /**
       * The user-chosen instance name. Must exist at deploy time. The worker can search,
       * chat, update, and manage items/jobs on this instance.
       */
      instance_name: string;

      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'ai_search';

      /**
       * The namespace the instance belongs to. Defaults to "default" if omitted.
       * Customers who don't use namespaces can simply omit this field.
       */
      namespace?: string;
    }

    export interface WorkersBindingKindAISearchNamespace {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The user-chosen namespace name. Must exist before deploy -- Wrangler handles
       * auto-creation on deploy failure (R2 bucket pattern). The "default" namespace is
       * auto-created by config-api for new accounts. Grants full access (CRUD + search +
       * chat) to all instances within the namespace.
       */
      namespace: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'ai_search_namespace';
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
      type: 'analytics_engine';
    }

    export interface WorkersBindingKindAssets {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'assets';
    }

    export interface WorkersBindingKindBrowser {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'browser';
    }

    export interface WorkersBindingKindD1 {
      /**
       * Identifier of the D1 database to bind to.
       */
      database_id: string;

      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'd1';

      /**
       * @deprecated This property has been renamed to `database_id`.
       */
      id?: string;
    }

    export interface WorkersBindingKindDataBlob {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The name of the file containing the data content. Only accepted for
       * `service worker syntax` Workers.
       */
      part: string;

      /**
       * @deprecated The kind of resource that the binding provides.
       */
      type: 'data_blob';
    }

    export interface WorkersBindingKindDispatchNamespace {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The name of the dispatch namespace.
       */
      namespace: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'dispatch_namespace';

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
        params?: Array<Outbound.Param>;

        /**
         * Outbound worker.
         */
        worker?: Outbound.Worker;
      }

      export namespace Outbound {
        export interface Param {
          /**
           * Name of the parameter.
           */
          name: string;
        }

        /**
         * Outbound worker.
         */
        export interface Worker {
          /**
           * Entrypoint to invoke on the outbound worker.
           */
          entrypoint?: string;

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
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'durable_object_namespace';

      /**
       * The exported class name of the Durable Object.
       */
      class_name?: string;

      /**
       * The dispatch namespace the Durable Object script belongs to.
       */
      dispatch_namespace?: string;

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
      type: 'hyperdrive';
    }

    export interface WorkersBindingKindInherit {
      /**
       * The name of the inherited binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'inherit';

      /**
       * The old name of the inherited binding. If set, the binding will be renamed from
       * `old_name` to `name` in the new version. If not set, the binding will keep the
       * same name between versions.
       */
      old_name?: string;

      /**
       * Identifier for the version to inherit the binding from, which can be the version
       * ID or the literal "latest" to inherit from the latest version. Defaults to
       * inheriting the binding from the latest version.
       */
      version_id?: string;
    }

    export interface WorkersBindingKindImages {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'images';
    }

    export interface WorkersBindingKindJson {
      /**
       * JSON data to use.
       */
      json: unknown;

      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'json';
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
      type: 'kv_namespace';
    }

    export interface WorkersBindingKindMedia {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'media';
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
      type: 'mtls_certificate';
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
      type: 'plain_text';
    }

    export interface WorkersBindingKindPipelines {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * Name of the Pipeline to bind to.
       */
      pipeline: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'pipelines';
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
      type: 'queue';
    }

    export interface WorkersBindingKindRatelimit {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * Identifier of the rate limit namespace to bind to.
       */
      namespace_id: string;

      /**
       * The rate limit configuration.
       */
      simple: WorkersBindingKindRatelimit.Simple;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'ratelimit';
    }

    export namespace WorkersBindingKindRatelimit {
      /**
       * The rate limit configuration.
       */
      export interface Simple {
        /**
         * The limit (requests per period).
         */
        limit: number;

        /**
         * The period in seconds.
         */
        period: number;

        /**
         * Duration in seconds to apply the mitigation action after the rate limit is
         * exceeded. Valid values are 0 (disabled), 10, or multiples of 60 up to 86400.
         * Must be greater than or equal to the period when non-zero.
         */
        mitigation_timeout?: number;
      }
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
      type: 'r2_bucket';

      /**
       * The
       * [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions)
       * of the R2 bucket.
       */
      jurisdiction?: 'eu' | 'fedramp' | 'fedramp-high';
    }

    export interface WorkersBindingKindSecretText {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'secret_text';
    }

    export interface WorkersBindingKindSendEmail {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'send_email';

      /**
       * List of allowed destination addresses.
       */
      allowed_destination_addresses?: Array<string>;

      /**
       * List of allowed sender addresses.
       */
      allowed_sender_addresses?: Array<string>;

      /**
       * Destination address for the email.
       */
      destination_address?: string;
    }

    export interface WorkersBindingKindService {
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
      type: 'service';

      /**
       * Entrypoint to invoke on the target Worker.
       */
      entrypoint?: string;

      /**
       * Optional environment if the Worker utilizes one.
       */
      environment?: string;
    }

    export interface WorkersBindingKindTextBlob {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The name of the file containing the text content. Only accepted for
       * `service worker syntax` Workers.
       */
      part: string;

      /**
       * @deprecated The kind of resource that the binding provides.
       */
      type: 'text_blob';
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
      type: 'vectorize';
    }

    export interface WorkersBindingKindVersionMetadata {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'version_metadata';
    }

    export interface WorkersBindingKindSecretsStoreSecret {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * Name of the secret in the store.
       */
      secret_name: string;

      /**
       * ID of the store containing the secret.
       */
      store_id: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'secrets_store_secret';
    }

    export interface WorkersBindingKindFlagship {
      /**
       * ID of the Flagship app to bind to for feature flag evaluation.
       */
      app_id: string;

      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'flagship';
    }

    export interface WorkersBindingKindSecretKey {
      /**
       * Algorithm-specific key parameters.
       * [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).
       */
      algorithm: unknown;

      /**
       * Data format of the key.
       * [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format).
       */
      format: 'raw' | 'pkcs8' | 'spki' | 'jwk';

      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'secret_key';

      /**
       * Allowed operations with the key.
       * [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).
       */
      usages: Array<
        'encrypt' | 'decrypt' | 'sign' | 'verify' | 'deriveKey' | 'deriveBits' | 'wrapKey' | 'unwrapKey'
      >;
    }

    export interface WorkersBindingKindWorkflow {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'workflow';

      /**
       * Name of the Workflow to bind to.
       */
      workflow_name: string;

      /**
       * Class name of the Workflow. Should only be provided if the Workflow belongs to
       * this script.
       */
      class_name?: string;

      /**
       * Script name that contains the Workflow. If not provided, defaults to this script
       * name.
       */
      script_name?: string;
    }

    export interface WorkersBindingKindWasmModule {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The name of the file containing the WebAssembly module content. Only accepted
       * for `service worker syntax` Workers.
       */
      part: string;

      /**
       * @deprecated The kind of resource that the binding provides.
       */
      type: 'wasm_module';
    }

    export interface WorkersBindingKindVPCService {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * Identifier of the VPC service to bind to.
       */
      service_id: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'vpc_service';
    }

    export interface WorkersBindingKindVPCNetwork {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'vpc_network';

      /**
       * Identifier of the network to bind to. Only "cf1:network" is currently supported.
       * Mutually exclusive with tunnel_id.
       */
      network_id?: string;

      /**
       * UUID of the Cloudflare Tunnel to bind to. Mutually exclusive with network_id.
       */
      tunnel_id?: string;
    }

    export interface Script {
      /**
       * Hashed script content
       */
      etag?: string;

      /**
       * The names of handlers exported as part of the default export.
       */
      handlers?: Array<string>;

      /**
       * The client most recently used to deploy this Worker.
       */
      last_deployed_from?: string;

      /**
       * Named exports, such as Durable Object class implementations and named
       * entrypoints.
       */
      named_handlers?: Array<Script.NamedHandler>;
    }

    export namespace Script {
      export interface NamedHandler {
        /**
         * The names of handlers exported as part of the named export.
         */
        handlers?: Array<string>;

        /**
         * The name of the exported class or entrypoint.
         */
        name?: string;
      }
    }

    /**
     * Runtime configuration for the Worker.
     */
    export interface ScriptRuntime {
      /**
       * Date indicating targeted support in the Workers runtime. Backwards incompatible
       * fixes to the runtime following this date will not affect this Worker.
       */
      compatibility_date?: string;

      /**
       * Flags that enable or disable certain features in the Workers runtime.
       */
      compatibility_flags?: Array<string>;

      /**
       * Declarative exports for this version, including Durable Object classes (with
       * their `storage` backend) and named Worker entrypoints. Tombstoned lifecycle
       * entries are omitted, so only live exports (`created` and `expecting-transfer`)
       * are returned.
       */
      exports?: {
        [key: string]:
          | ScriptRuntime.WorkersWorkerExport
          | ScriptRuntime.WorkersDurableObjectExport
          | ScriptRuntime.WorkersDurableObjectDeletedExport
          | ScriptRuntime.WorkersDurableObjectRenamedExport
          | ScriptRuntime.WorkersDurableObjectTransferredExport
          | ScriptRuntime.WorkersDurableObjectExpectingTransferExport;
      };

      /**
       * Resource limits for the Worker.
       */
      limits?: ScriptRuntime.Limits;

      /**
       * The tag of the Durable Object migration that was most recently applied for this
       * Worker.
       */
      migration_tag?: string;

      /**
       * Usage model for the Worker invocations.
       */
      usage_model?: 'bundled' | 'unbound' | 'standard';
    }

    export namespace ScriptRuntime {
      /**
       * A named Worker entrypoint export (`type: worker`). Worker entrypoints are always
       * live (`state: created`) and carry no storage or lifecycle fields. The optional
       * `cache` block overrides the Worker's global `cache_options.enabled` for this
       * entrypoint.
       */
      export interface WorkersWorkerExport {
        /**
         * Marks this entry as a Worker entrypoint export.
         */
        type: 'worker';

        /**
         * Cache override for this entrypoint. Overrides the Worker's global
         * `cache_options.enabled` for this entrypoint only.
         */
        cache?: WorkersWorkerExport.Cache;

        /**
         * Live export. May be omitted; defaults to `created`.
         */
        state?: 'created';
      }

      export namespace WorkersWorkerExport {
        /**
         * Cache override for this entrypoint. Overrides the Worker's global
         * `cache_options.enabled` for this entrypoint only.
         */
        export interface Cache {
          /**
           * Whether caching is enabled for this entrypoint.
           */
          enabled: boolean;
        }
      }

      /**
       * A live Durable Object export (`state: created`, the default). The platform
       * auto-provisions the namespace on first deploy, matches it on subsequent deploys,
       * and never mutates or deletes it as a side effect of a code-only change.
       * `storage` is required; `renamed_to`, `transferred_to` and `transfer_from` are
       * not allowed on a live entry.
       */
      export interface WorkersDurableObjectExport {
        /**
         * Durable Object storage backend. `sqlite` is the recommended (and only) backend
         * for new namespaces. `legacy-kv` is accepted only for a class whose namespace
         * already exists as KV-backed; the `exports` flow never provisions a new
         * `legacy-kv` namespace.
         */
        storage: 'sqlite' | 'legacy-kv';

        /**
         * Marks this entry as a Durable Object export.
         */
        type: 'durable-object';

        /**
         * Name of the container (declared in the upload's `metadata.containers`) that
         * backs this Durable Object. When set, the namespace is container-enabled. Valid
         * only on live entries.
         */
        container?: string;

        /**
         * Live export. May be omitted; defaults to `created`.
         */
        state?: 'created';
      }

      /**
       * A `deleted` tombstone: retires the provisioned namespace for this class and all
       * of its data. The class must be absent from the uploaded code and no other Worker
       * in the account may bind to the namespace, otherwise the deploy is rejected. No
       * other fields are allowed. Deletion is irreversible.
       */
      export interface WorkersDurableObjectDeletedExport {
        /**
         * Tombstone that deletes the namespace.
         */
        state: 'deleted';

        /**
         * Marks this entry as a Durable Object export.
         */
        type: 'durable-object';
      }

      /**
       * A `renamed` tombstone: rewrites the provisioned namespace's class name from this
       * map key to `renamed_to`. The source class may stay in code during the rollout
       * window (an info notice is emitted). `storage`, `transferred_to` and
       * `transfer_from` are not allowed.
       */
      export interface WorkersDurableObjectRenamedExport {
        /**
         * Tombstone that renames the namespace's class.
         */
        state: 'renamed';

        /**
         * Marks this entry as a Durable Object export.
         */
        type: 'durable-object';
      }

      /**
       * A `transferred` tombstone (source side of a two-phase transfer): hands ownership
       * of the provisioned namespace to another script in the same account, named by
       * `transferred_to`. The target must have already deployed a matching
       * `expecting-transfer` entry. The source class may stay in code during the rollout
       * window (an info notice is emitted). `storage`, `renamed_to` and `transfer_from`
       * are not allowed.
       */
      export interface WorkersDurableObjectTransferredExport {
        /**
         * Tombstone that transfers the namespace to another script.
         */
        state: 'transferred';

        /**
         * Marks this entry as a Durable Object export.
         */
        type: 'durable-object';
      }

      /**
       * The target side of a two-phase transfer (`state: expecting-transfer`). Declares
       * that this script expects to receive a namespace for this class from the
       * `transfer_from` script. This is a live entry, not a tombstone: bindings resolve
       * through the source's namespace until the source commits with a `transferred`
       * tombstone. `storage` and `transfer_from` are required; `renamed_to` and
       * `transferred_to` are not allowed.
       */
      export interface WorkersDurableObjectExpectingTransferExport {
        /**
         * Target side of a two-phase transfer.
         */
        state: 'expecting-transfer';

        /**
         * Durable Object storage backend. `sqlite` is the recommended (and only) backend
         * for new namespaces. `legacy-kv` is accepted only for a class whose namespace
         * already exists as KV-backed; the `exports` flow never provisions a new
         * `legacy-kv` namespace.
         */
        storage: 'sqlite' | 'legacy-kv';

        /**
         * The source script name to receive the namespace from. Must be in the same
         * account and dispatch-namespace context. Present on reads for
         * `expecting-transfer` entries.
         */
        transfer_from: string;

        /**
         * Marks this entry as a Durable Object export.
         */
        type: 'durable-object';

        /**
         * Name of the container (declared in the upload's `metadata.containers`) that
         * backs this Durable Object once the transfer settles. Valid only on live entries.
         */
        container?: string;
      }

      /**
       * Resource limits for the Worker.
       */
      export interface Limits {
        /**
         * The amount of CPU time this Worker can use in milliseconds.
         */
        cpu_ms?: number;
      }
    }
  }

  export interface Metadata {
    /**
     * Email of the user who created the version.
     */
    author_email?: string;

    /**
     * Identifier of the user who created the version.
     */
    author_id?: string;

    /**
     * When the version was created.
     */
    created_on?: string;

    /**
     * Whether the version can be previewed.
     */
    hasPreview?: boolean;

    /**
     * When the version was last modified.
     */
    modified_on?: string;

    /**
     * The source of the version upload.
     */
    source?:
      | 'unknown'
      | 'api'
      | 'wrangler'
      | 'terraform'
      | 'dash'
      | 'cf_cli'
      | 'dash_template'
      | 'integration'
      | 'quick_editor'
      | 'playground'
      | 'workersci';
  }
}

export interface VersionCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: JSON-encoded metadata about the uploaded parts and Worker
   * configuration.
   */
  metadata: VersionCreateParams.Metadata;

  /**
   * Query param: When set to "strict", the upload will fail if any `inherit` type
   * bindings cannot be resolved against the previous version of the Worker. Without
   * this, unresolvable inherit bindings are silently dropped.
   */
  bindings_inherit?: 'strict';

  /**
   * Body param: An array of modules (often JavaScript files) comprising a Worker
   * script. At least one module must be present and referenced in the metadata as
   * `main_module` or `body_part` by filename.<br/>Possible Content-Type(s) are:
   * `application/javascript+module`, `text/javascript+module`,
   * `application/javascript`, `text/javascript`, `text/x-python`,
   * `text/x-python-requirement`, `application/wasm`, `text/plain`,
   * `application/octet-stream`, `application/source-map`.
   */
  files?: Array<Uploadable>;
}

export namespace VersionCreateParams {
  /**
   * JSON-encoded metadata about the uploaded parts and Worker configuration.
   */
  export interface Metadata {
    /**
     * Name of the uploaded file that contains the main module (e.g. the file exporting
     * a `fetch` handler). Indicates a `module syntax` Worker, which is required for
     * Version Upload.
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
      | Metadata.WorkersBindingKindAISearch
      | Metadata.WorkersBindingKindAISearchNamespace
      | Metadata.WorkersBindingKindAnalyticsEngine
      | Metadata.WorkersBindingKindAssets
      | Metadata.WorkersBindingKindBrowser
      | Metadata.WorkersBindingKindD1
      | Metadata.WorkersBindingKindDataBlob
      | Metadata.WorkersBindingKindDispatchNamespace
      | Metadata.WorkersBindingKindDurableObjectNamespace
      | Metadata.WorkersBindingKindHyperdrive
      | Metadata.WorkersBindingKindInherit
      | Metadata.WorkersBindingKindImages
      | Metadata.WorkersBindingKindJson
      | Metadata.WorkersBindingKindKVNamespace
      | Metadata.WorkersBindingKindMedia
      | Metadata.WorkersBindingKindMTLSCertificate
      | Metadata.WorkersBindingKindPlainText
      | Metadata.WorkersBindingKindPipelines
      | Metadata.WorkersBindingKindQueue
      | Metadata.WorkersBindingKindRatelimit
      | Metadata.WorkersBindingKindR2Bucket
      | Metadata.WorkersBindingKindSecretText
      | Metadata.WorkersBindingKindSendEmail
      | Metadata.WorkersBindingKindService
      | Metadata.WorkersBindingKindTextBlob
      | Metadata.WorkersBindingKindVectorize
      | Metadata.WorkersBindingKindVersionMetadata
      | Metadata.WorkersBindingKindSecretsStoreSecret
      | Metadata.WorkersBindingKindFlagship
      | Metadata.WorkersBindingKindSecretKey
      | Metadata.WorkersBindingKindWorkflow
      | Metadata.WorkersBindingKindWasmModule
      | Metadata.WorkersBindingKindVPCService
      | Metadata.WorkersBindingKindVPCNetwork
    >;

    /**
     * Global CacheW configuration for the Worker. When caching is on, the platform
     * provisions a `cloudflare.app` zone for the Worker. A `type: worker` entry in the
     * `exports` map can override this value for a single entrypoint.
     */
    cache_options?: Metadata.CacheOptions;

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
     * Declarative exports for this version. Worker entrypoint entries (`type: worker`)
     * carry cache configuration for that entrypoint.
     */
    exports?: {
      [key: string]:
        | Metadata.WorkersWorkerExport
        | Metadata.WorkersDurableObjectExport
        | Metadata.WorkersDurableObjectDeletedExport
        | Metadata.WorkersDurableObjectRenamedExport
        | Metadata.WorkersDurableObjectTransferredExport
        | Metadata.WorkersDurableObjectExpectingTransferExport;
    };

    /**
     * List of binding types to keep from previous_upload.
     */
    keep_bindings?: Array<string>;

    /**
     * The list of npm packages that were installed and used when this Worker version
     * was built.
     */
    package_dependencies?: Array<Metadata.PackageDependency>;

    /**
     * Usage model for the Worker invocations.
     */
    usage_model?: 'standard' | 'bundled' | 'unbound';
  }

  export namespace Metadata {
    export interface Annotations {
      /**
       * Associated alias for a version.
       */
      'workers/alias'?: string;

      /**
       * Human-readable message about the version. Truncated to 1000 bytes if longer.
       */
      'workers/message'?: string;

      /**
       * User-provided identifier for the version. Maximum 100 bytes.
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
      type: 'ai';
    }

    export interface WorkersBindingKindAISearch {
      /**
       * The user-chosen instance name. Must exist at deploy time. The worker can search,
       * chat, update, and manage items/jobs on this instance.
       */
      instance_name: string;

      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'ai_search';

      /**
       * The namespace the instance belongs to. Defaults to "default" if omitted.
       * Customers who don't use namespaces can simply omit this field.
       */
      namespace?: string;
    }

    export interface WorkersBindingKindAISearchNamespace {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The user-chosen namespace name. Must exist before deploy -- Wrangler handles
       * auto-creation on deploy failure (R2 bucket pattern). The "default" namespace is
       * auto-created by config-api for new accounts. Grants full access (CRUD + search +
       * chat) to all instances within the namespace.
       */
      namespace: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'ai_search_namespace';
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
      type: 'analytics_engine';
    }

    export interface WorkersBindingKindAssets {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'assets';
    }

    export interface WorkersBindingKindBrowser {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'browser';
    }

    export interface WorkersBindingKindD1 {
      /**
       * Identifier of the D1 database to bind to.
       */
      database_id: string;

      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'd1';

      /**
       * @deprecated This property has been renamed to `database_id`.
       */
      id?: string;
    }

    export interface WorkersBindingKindDataBlob {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The name of the file containing the data content. Only accepted for
       * `service worker syntax` Workers.
       */
      part: string;

      /**
       * @deprecated The kind of resource that the binding provides.
       */
      type: 'data_blob';
    }

    export interface WorkersBindingKindDispatchNamespace {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The name of the dispatch namespace.
       */
      namespace: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'dispatch_namespace';

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
        params?: Array<Outbound.Param>;

        /**
         * Outbound worker.
         */
        worker?: Outbound.Worker;
      }

      export namespace Outbound {
        export interface Param {
          /**
           * Name of the parameter.
           */
          name: string;
        }

        /**
         * Outbound worker.
         */
        export interface Worker {
          /**
           * Entrypoint to invoke on the outbound worker.
           */
          entrypoint?: string;

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
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'durable_object_namespace';

      /**
       * The exported class name of the Durable Object.
       */
      class_name?: string;

      /**
       * The dispatch namespace the Durable Object script belongs to.
       */
      dispatch_namespace?: string;

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
      type: 'hyperdrive';
    }

    export interface WorkersBindingKindInherit {
      /**
       * The name of the inherited binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'inherit';

      /**
       * The old name of the inherited binding. If set, the binding will be renamed from
       * `old_name` to `name` in the new version. If not set, the binding will keep the
       * same name between versions.
       */
      old_name?: string;

      /**
       * Identifier for the version to inherit the binding from, which can be the version
       * ID or the literal "latest" to inherit from the latest version. Defaults to
       * inheriting the binding from the latest version.
       */
      version_id?: string;
    }

    export interface WorkersBindingKindImages {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'images';
    }

    export interface WorkersBindingKindJson {
      /**
       * JSON data to use.
       */
      json: unknown;

      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'json';
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
      type: 'kv_namespace';
    }

    export interface WorkersBindingKindMedia {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'media';
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
      type: 'mtls_certificate';
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
      type: 'plain_text';
    }

    export interface WorkersBindingKindPipelines {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * Name of the Pipeline to bind to.
       */
      pipeline: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'pipelines';
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
      type: 'queue';
    }

    export interface WorkersBindingKindRatelimit {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * Identifier of the rate limit namespace to bind to.
       */
      namespace_id: string;

      /**
       * The rate limit configuration.
       */
      simple: WorkersBindingKindRatelimit.Simple;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'ratelimit';
    }

    export namespace WorkersBindingKindRatelimit {
      /**
       * The rate limit configuration.
       */
      export interface Simple {
        /**
         * The limit (requests per period).
         */
        limit: number;

        /**
         * The period in seconds.
         */
        period: number;

        /**
         * Duration in seconds to apply the mitigation action after the rate limit is
         * exceeded. Valid values are 0 (disabled), 10, or multiples of 60 up to 86400.
         * Must be greater than or equal to the period when non-zero.
         */
        mitigation_timeout?: number;
      }
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
      type: 'r2_bucket';

      /**
       * The
       * [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions)
       * of the R2 bucket.
       */
      jurisdiction?: 'eu' | 'fedramp' | 'fedramp-high';
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
      type: 'secret_text';
    }

    export interface WorkersBindingKindSendEmail {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'send_email';

      /**
       * List of allowed destination addresses.
       */
      allowed_destination_addresses?: Array<string>;

      /**
       * List of allowed sender addresses.
       */
      allowed_sender_addresses?: Array<string>;

      /**
       * Destination address for the email.
       */
      destination_address?: string;
    }

    export interface WorkersBindingKindService {
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
      type: 'service';

      /**
       * Entrypoint to invoke on the target Worker.
       */
      entrypoint?: string;

      /**
       * Optional environment if the Worker utilizes one.
       */
      environment?: string;
    }

    export interface WorkersBindingKindTextBlob {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The name of the file containing the text content. Only accepted for
       * `service worker syntax` Workers.
       */
      part: string;

      /**
       * @deprecated The kind of resource that the binding provides.
       */
      type: 'text_blob';
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
      type: 'vectorize';
    }

    export interface WorkersBindingKindVersionMetadata {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'version_metadata';
    }

    export interface WorkersBindingKindSecretsStoreSecret {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * Name of the secret in the store.
       */
      secret_name: string;

      /**
       * ID of the store containing the secret.
       */
      store_id: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'secrets_store_secret';
    }

    export interface WorkersBindingKindFlagship {
      /**
       * ID of the Flagship app to bind to for feature flag evaluation.
       */
      app_id: string;

      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'flagship';
    }

    export interface WorkersBindingKindSecretKey {
      /**
       * Algorithm-specific key parameters.
       * [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).
       */
      algorithm: unknown;

      /**
       * Data format of the key.
       * [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format).
       */
      format: 'raw' | 'pkcs8' | 'spki' | 'jwk';

      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'secret_key';

      /**
       * Allowed operations with the key.
       * [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).
       */
      usages: Array<
        'encrypt' | 'decrypt' | 'sign' | 'verify' | 'deriveKey' | 'deriveBits' | 'wrapKey' | 'unwrapKey'
      >;

      /**
       * Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".
       */
      key_base64?: string;

      /**
       * Key data in
       * [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key)
       * format. Required if `format` is "jwk".
       */
      key_jwk?: unknown;
    }

    export interface WorkersBindingKindWorkflow {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'workflow';

      /**
       * Name of the Workflow to bind to.
       */
      workflow_name: string;

      /**
       * Class name of the Workflow. Should only be provided if the Workflow belongs to
       * this script.
       */
      class_name?: string;

      /**
       * Script name that contains the Workflow. If not provided, defaults to this script
       * name.
       */
      script_name?: string;
    }

    export interface WorkersBindingKindWasmModule {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The name of the file containing the WebAssembly module content. Only accepted
       * for `service worker syntax` Workers.
       */
      part: string;

      /**
       * @deprecated The kind of resource that the binding provides.
       */
      type: 'wasm_module';
    }

    export interface WorkersBindingKindVPCService {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * Identifier of the VPC service to bind to.
       */
      service_id: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'vpc_service';
    }

    export interface WorkersBindingKindVPCNetwork {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'vpc_network';

      /**
       * Identifier of the network to bind to. Only "cf1:network" is currently supported.
       * Mutually exclusive with tunnel_id.
       */
      network_id?: string;

      /**
       * UUID of the Cloudflare Tunnel to bind to. Mutually exclusive with network_id.
       */
      tunnel_id?: string;
    }

    /**
     * Global CacheW configuration for the Worker. When caching is on, the platform
     * provisions a `cloudflare.app` zone for the Worker. A `type: worker` entry in the
     * `exports` map can override this value for a single entrypoint.
     */
    export interface CacheOptions {
      /**
       * Whether caching is enabled for this Worker.
       */
      enabled: boolean;

      /**
       * Whether cached responses are shared across Worker version uploads. This is
       * independent of `enabled`. It can stay true while caching is off, so the
       * preference survives turning caching off and back on.
       */
      cross_version_cache?: boolean;
    }

    /**
     * A named Worker entrypoint export (`type: worker`). Worker entrypoints are always
     * live (`state: created`) and carry no storage or lifecycle fields. The optional
     * `cache` block overrides the Worker's global `cache_options.enabled` for this
     * entrypoint.
     */
    export interface WorkersWorkerExport {
      /**
       * Marks this entry as a Worker entrypoint export.
       */
      type: 'worker';

      /**
       * Cache override for this entrypoint. Overrides the Worker's global
       * `cache_options.enabled` for this entrypoint only.
       */
      cache?: WorkersWorkerExport.Cache;

      /**
       * Live export. May be omitted; defaults to `created`.
       */
      state?: 'created';
    }

    export namespace WorkersWorkerExport {
      /**
       * Cache override for this entrypoint. Overrides the Worker's global
       * `cache_options.enabled` for this entrypoint only.
       */
      export interface Cache {
        /**
         * Whether caching is enabled for this entrypoint.
         */
        enabled: boolean;
      }
    }

    /**
     * A live Durable Object export (`state: created`, the default). The platform
     * auto-provisions the namespace on first deploy, matches it on subsequent deploys,
     * and never mutates or deletes it as a side effect of a code-only change.
     * `storage` is required; `renamed_to`, `transferred_to` and `transfer_from` are
     * not allowed on a live entry.
     */
    export interface WorkersDurableObjectExport {
      /**
       * Durable Object storage backend. `sqlite` is the recommended (and only) backend
       * for new namespaces. `legacy-kv` is accepted only for a class whose namespace
       * already exists as KV-backed; the `exports` flow never provisions a new
       * `legacy-kv` namespace.
       */
      storage: 'sqlite' | 'legacy-kv';

      /**
       * Marks this entry as a Durable Object export.
       */
      type: 'durable-object';

      /**
       * Name of the container (declared in the upload's `metadata.containers`) that
       * backs this Durable Object. When set, the namespace is container-enabled. Valid
       * only on live entries.
       */
      container?: string;

      /**
       * Live export. May be omitted; defaults to `created`.
       */
      state?: 'created';
    }

    /**
     * A `deleted` tombstone: retires the provisioned namespace for this class and all
     * of its data. The class must be absent from the uploaded code and no other Worker
     * in the account may bind to the namespace, otherwise the deploy is rejected. No
     * other fields are allowed. Deletion is irreversible.
     */
    export interface WorkersDurableObjectDeletedExport {
      /**
       * Tombstone that deletes the namespace.
       */
      state: 'deleted';

      /**
       * Marks this entry as a Durable Object export.
       */
      type: 'durable-object';
    }

    /**
     * A `renamed` tombstone: rewrites the provisioned namespace's class name from this
     * map key to `renamed_to`. The source class may stay in code during the rollout
     * window (an info notice is emitted). `storage`, `transferred_to` and
     * `transfer_from` are not allowed.
     */
    export interface WorkersDurableObjectRenamedExport {
      /**
       * The destination class name. Must differ from the source class (the map key) and
       * must be declared as a live (`created`) entry in the same `exports` map.
       * Write-only: never present in GET responses.
       */
      renamed_to: string;

      /**
       * Tombstone that renames the namespace's class.
       */
      state: 'renamed';

      /**
       * Marks this entry as a Durable Object export.
       */
      type: 'durable-object';
    }

    /**
     * A `transferred` tombstone (source side of a two-phase transfer): hands ownership
     * of the provisioned namespace to another script in the same account, named by
     * `transferred_to`. The target must have already deployed a matching
     * `expecting-transfer` entry. The source class may stay in code during the rollout
     * window (an info notice is emitted). `storage`, `renamed_to` and `transfer_from`
     * are not allowed.
     */
    export interface WorkersDurableObjectTransferredExport {
      /**
       * Tombstone that transfers the namespace to another script.
       */
      state: 'transferred';

      /**
       * The destination script name. Must be in the same account and the same
       * dispatch-namespace context (or both non-dispatch). Cross-dispatch-namespace
       * transfers are rejected. Write-only: never present in GET responses.
       */
      transferred_to: string;

      /**
       * Marks this entry as a Durable Object export.
       */
      type: 'durable-object';
    }

    /**
     * The target side of a two-phase transfer (`state: expecting-transfer`). Declares
     * that this script expects to receive a namespace for this class from the
     * `transfer_from` script. This is a live entry, not a tombstone: bindings resolve
     * through the source's namespace until the source commits with a `transferred`
     * tombstone. `storage` and `transfer_from` are required; `renamed_to` and
     * `transferred_to` are not allowed.
     */
    export interface WorkersDurableObjectExpectingTransferExport {
      /**
       * Target side of a two-phase transfer.
       */
      state: 'expecting-transfer';

      /**
       * Durable Object storage backend. `sqlite` is the recommended (and only) backend
       * for new namespaces. `legacy-kv` is accepted only for a class whose namespace
       * already exists as KV-backed; the `exports` flow never provisions a new
       * `legacy-kv` namespace.
       */
      storage: 'sqlite' | 'legacy-kv';

      /**
       * The source script name to receive the namespace from. Must be in the same
       * account and dispatch-namespace context. Present on reads for
       * `expecting-transfer` entries.
       */
      transfer_from: string;

      /**
       * Marks this entry as a Durable Object export.
       */
      type: 'durable-object';

      /**
       * Name of the container (declared in the upload's `metadata.containers`) that
       * backs this Durable Object once the transfer settles. Valid only on live entries.
       */
      container?: string;
    }

    export interface PackageDependency {
      /**
       * The exact version that was resolved and installed by the package manager.
       */
      installedVersion: string;

      /**
       * The npm package name.
       */
      name: string;

      /**
       * The version constraint as written in package.json.
       */
      packageJsonVersion: string;
    }
  }
}

export interface VersionListParams extends V4PagePaginationParams {
  /**
   * Path param: Identifier.
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
   * Identifier.
   */
  account_id: string;

  /**
   * Name of the script.
   */
  script_name: string;
}

export declare namespace Versions {
  export {
    type VersionCreateResponse as VersionCreateResponse,
    type VersionListResponse as VersionListResponse,
    type VersionGetResponse as VersionGetResponse,
    type VersionListResponsesV4PagePagination as VersionListResponsesV4PagePagination,
    type VersionCreateParams as VersionCreateParams,
    type VersionListParams as VersionListParams,
    type VersionGetParams as VersionGetParams,
  };
}
