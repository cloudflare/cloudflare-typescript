// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as WorkersAPI from '../../workers';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../pagination';

export class Versions extends APIResource {
  /**
   * Create a new version.
   *
   * @example
   * ```ts
   * const version =
   *   await client.workers.beta.workers.versions.create(
   *     'worker_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  create(
    workerId: string,
    params: VersionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Version> {
    const { account_id, deploy, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/workers/workers/${workerId}/versions`, {
        query: { deploy },
        body,
        ...options,
      }) as Core.APIPromise<{ result: Version }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all versions for a Worker.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const version of client.workers.beta.workers.versions.list(
   *   'worker_id',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    workerId: string,
    params: VersionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<VersionsV4PagePaginationArray, Version> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workers/workers/${workerId}/versions`,
      VersionsV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a version.
   *
   * @example
   * ```ts
   * const version =
   *   await client.workers.beta.workers.versions.delete(
   *     'worker_id',
   *     'version_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    workerId: string,
    versionId: string,
    params: VersionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/workers/workers/${workerId}/versions/${versionId}`,
      options,
    );
  }

  /**
   * Get details about a specific version.
   *
   * @example
   * ```ts
   * const version =
   *   await client.workers.beta.workers.versions.get(
   *     'worker_id',
   *     'version_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    workerId: string,
    versionId: string,
    params: VersionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Version> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/workers/workers/${workerId}/versions/${versionId}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: Version }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class VersionsV4PagePaginationArray extends V4PagePaginationArray<Version> {}

export interface Version {
  /**
   * Version identifier.
   */
  id: string;

  /**
   * When the version was created.
   */
  created_on: string;

  /**
   * The integer version number, starting from one.
   */
  number: number;

  /**
   * Metadata about the version.
   */
  annotations?: Version.Annotations;

  /**
   * Configuration for assets within a Worker.
   *
   * [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers)
   * and
   * [`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/)
   * files should be included as modules named `_headers` and `_redirects` with
   * content type `text/plain`.
   */
  assets?: Version.Assets;

  /**
   * List of bindings attached to a Worker. You can find more about bindings on our
   * docs:
   * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
   */
  bindings?: Array<
    | Version.WorkersBindingKindAI
    | Version.WorkersBindingKindAnalyticsEngine
    | Version.WorkersBindingKindAssets
    | Version.WorkersBindingKindBrowser
    | Version.WorkersBindingKindD1
    | Version.WorkersBindingKindDataBlob
    | Version.WorkersBindingKindDispatchNamespace
    | Version.WorkersBindingKindDurableObjectNamespace
    | Version.WorkersBindingKindHyperdrive
    | Version.WorkersBindingKindInherit
    | Version.WorkersBindingKindImages
    | Version.WorkersBindingKindJson
    | Version.WorkersBindingKindKVNamespace
    | Version.WorkersBindingKindMTLSCertificate
    | Version.WorkersBindingKindPlainText
    | Version.WorkersBindingKindPipelines
    | Version.WorkersBindingKindQueue
    | Version.WorkersBindingKindR2Bucket
    | Version.WorkersBindingKindSecretText
    | Version.WorkersBindingKindSendEmail
    | Version.WorkersBindingKindService
    | Version.WorkersBindingKindTailConsumer
    | Version.WorkersBindingKindTextBlob
    | Version.WorkersBindingKindVectorize
    | Version.WorkersBindingKindVersionMetadata
    | Version.WorkersBindingKindSecretsStoreSecret
    | Version.WorkersBindingKindSecretKey
    | Version.WorkersBindingKindWorkflow
    | Version.WorkersBindingKindWasmModule
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
   * Resource limits enforced at runtime.
   */
  limits?: Version.Limits;

  /**
   * The name of the main module in the `modules` array (e.g. the name of the module
   * that exports a `fetch` handler).
   */
  main_module?: string;

  /**
   * Migrations for Durable Objects associated with the version. Migrations are
   * applied when the version is deployed.
   */
  migrations?: WorkersAPI.SingleStepMigration | Version.WorkersMultipleStepMigrations;

  /**
   * Code, sourcemaps, and other content used at runtime.
   *
   * This includes
   * [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers)
   * and
   * [`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/)
   * files used to configure
   * [Static Assets](https://developers.cloudflare.com/workers/static-assets/).
   * `_headers` and `_redirects` files should be included as modules named `_headers`
   * and `_redirects` with content type `text/plain`.
   */
  modules?: Array<Version.Module>;

  /**
   * Placement settings for the version.
   */
  placement?: Version.Placement;

  /**
   * The client used to create the version.
   */
  source?: string;

  /**
   * @deprecated Usage model for the version.
   */
  usage_model?: 'standard' | 'bundled' | 'unbound';
}

export namespace Version {
  /**
   * Metadata about the version.
   */
  export interface Annotations {
    /**
     * Human-readable message about the version.
     */
    'workers/message'?: string;

    /**
     * User-provided identifier for the version.
     */
    'workers/tag'?: string;

    /**
     * Operation that triggered the creation of the version.
     */
    'workers/triggered_by'?: string;
  }

  /**
   * Configuration for assets within a Worker.
   *
   * [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers)
   * and
   * [`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/)
   * files should be included as modules named `_headers` and `_redirects` with
   * content type `text/plain`.
   */
  export interface Assets {
    /**
     * Configuration for assets within a Worker.
     */
    config?: Assets.Config;

    /**
     * Token provided upon successful upload of all files from a registered manifest.
     */
    jwt?: string;
  }

  export namespace Assets {
    /**
     * Configuration for assets within a Worker.
     */
    export interface Config {
      /**
       * Determines the redirects and rewrites of requests for HTML content.
       */
      html_handling?: 'auto-trailing-slash' | 'force-trailing-slash' | 'drop-trailing-slash' | 'none';

      /**
       * Determines the response when a request does not match a static asset, and there
       * is no Worker script.
       */
      not_found_handling?: 'none' | '404-page' | 'single-page-application';

      /**
       * Contains a list path rules to control routing to either the Worker or assets.
       * Glob (\*) and negative (!) rules are supported. Rules must start with either '/'
       * or '!/'. At least one non-negative rule must be provided, and negative rules
       * have higher precedence than non-negative rules.
       */
      run_worker_first?: Array<string> | boolean;
    }
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
    id: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type: 'd1';
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
     * Namespace to bind to.
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
    json: string;

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
    jurisdiction?: 'eu' | 'fedramp';
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
     * Optional environment if the Worker utilizes one.
     */
    environment?: string;
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
    type: 'tail_consumer';
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

  /**
   * Resource limits enforced at runtime.
   */
  export interface Limits {
    /**
     * CPU time limit in milliseconds.
     */
    cpu_ms: number;
  }

  export interface WorkersMultipleStepMigrations {}

  export interface Module {
    /**
     * The base64-encoded module content.
     */
    content_base64: string;

    /**
     * The content type of the module.
     */
    content_type: string;

    /**
     * The name of the module.
     */
    name: string;
  }

  /**
   * Placement settings for the version.
   */
  export interface Placement {
    /**
     * Placement mode for the version.
     */
    mode?: 'smart';
  }
}

export interface VersionDeleteResponse {
  errors: Array<VersionDeleteResponse.Error>;

  messages: Array<VersionDeleteResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace VersionDeleteResponse {
  export interface Error {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }
}

export interface VersionCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: If true, a deployment will be created that sends 100% of traffic to
   * the new version.
   */
  deploy?: boolean;

  /**
   * Body param: Metadata about the version.
   */
  annotations?: VersionCreateParams.Annotations;

  /**
   * Body param: Configuration for assets within a Worker.
   *
   * [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers)
   * and
   * [`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/)
   * files should be included as modules named `_headers` and `_redirects` with
   * content type `text/plain`.
   */
  assets?: VersionCreateParams.Assets;

  /**
   * Body param: List of bindings attached to a Worker. You can find more about
   * bindings on our docs:
   * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
   */
  bindings?: Array<
    | VersionCreateParams.WorkersBindingKindAI
    | VersionCreateParams.WorkersBindingKindAnalyticsEngine
    | VersionCreateParams.WorkersBindingKindAssets
    | VersionCreateParams.WorkersBindingKindBrowser
    | VersionCreateParams.WorkersBindingKindD1
    | VersionCreateParams.WorkersBindingKindDataBlob
    | VersionCreateParams.WorkersBindingKindDispatchNamespace
    | VersionCreateParams.WorkersBindingKindDurableObjectNamespace
    | VersionCreateParams.WorkersBindingKindHyperdrive
    | VersionCreateParams.WorkersBindingKindInherit
    | VersionCreateParams.WorkersBindingKindImages
    | VersionCreateParams.WorkersBindingKindJson
    | VersionCreateParams.WorkersBindingKindKVNamespace
    | VersionCreateParams.WorkersBindingKindMTLSCertificate
    | VersionCreateParams.WorkersBindingKindPlainText
    | VersionCreateParams.WorkersBindingKindPipelines
    | VersionCreateParams.WorkersBindingKindQueue
    | VersionCreateParams.WorkersBindingKindR2Bucket
    | VersionCreateParams.WorkersBindingKindSecretText
    | VersionCreateParams.WorkersBindingKindSendEmail
    | VersionCreateParams.WorkersBindingKindService
    | VersionCreateParams.WorkersBindingKindTailConsumer
    | VersionCreateParams.WorkersBindingKindTextBlob
    | VersionCreateParams.WorkersBindingKindVectorize
    | VersionCreateParams.WorkersBindingKindVersionMetadata
    | VersionCreateParams.WorkersBindingKindSecretsStoreSecret
    | VersionCreateParams.WorkersBindingKindSecretKey
    | VersionCreateParams.WorkersBindingKindWorkflow
    | VersionCreateParams.WorkersBindingKindWasmModule
  >;

  /**
   * Body param: Date indicating targeted support in the Workers runtime. Backwards
   * incompatible fixes to the runtime following this date will not affect this
   * Worker.
   */
  compatibility_date?: string;

  /**
   * Body param: Flags that enable or disable certain features in the Workers
   * runtime. Used to enable upcoming features or opt in or out of specific changes
   * not included in a `compatibility_date`.
   */
  compatibility_flags?: Array<string>;

  /**
   * Body param: Resource limits enforced at runtime.
   */
  limits?: VersionCreateParams.Limits;

  /**
   * Body param: The name of the main module in the `modules` array (e.g. the name of
   * the module that exports a `fetch` handler).
   */
  main_module?: string;

  /**
   * Body param: Migrations for Durable Objects associated with the version.
   * Migrations are applied when the version is deployed.
   */
  migrations?: WorkersAPI.SingleStepMigrationParam | VersionCreateParams.WorkersMultipleStepMigrations;

  /**
   * Body param: Code, sourcemaps, and other content used at runtime.
   *
   * This includes
   * [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers)
   * and
   * [`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/)
   * files used to configure
   * [Static Assets](https://developers.cloudflare.com/workers/static-assets/).
   * `_headers` and `_redirects` files should be included as modules named `_headers`
   * and `_redirects` with content type `text/plain`.
   */
  modules?: Array<VersionCreateParams.Module>;

  /**
   * Body param: Placement settings for the version.
   */
  placement?: VersionCreateParams.Placement;

  /**
   * @deprecated Body param: Usage model for the version.
   */
  usage_model?: 'standard' | 'bundled' | 'unbound';
}

export namespace VersionCreateParams {
  /**
   * Metadata about the version.
   */
  export interface Annotations {
    /**
     * Human-readable message about the version.
     */
    'workers/message'?: string;

    /**
     * User-provided identifier for the version.
     */
    'workers/tag'?: string;
  }

  /**
   * Configuration for assets within a Worker.
   *
   * [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers)
   * and
   * [`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/)
   * files should be included as modules named `_headers` and `_redirects` with
   * content type `text/plain`.
   */
  export interface Assets {
    /**
     * Configuration for assets within a Worker.
     */
    config?: Assets.Config;

    /**
     * Token provided upon successful upload of all files from a registered manifest.
     */
    jwt?: string;
  }

  export namespace Assets {
    /**
     * Configuration for assets within a Worker.
     */
    export interface Config {
      /**
       * Determines the redirects and rewrites of requests for HTML content.
       */
      html_handling?: 'auto-trailing-slash' | 'force-trailing-slash' | 'drop-trailing-slash' | 'none';

      /**
       * Determines the response when a request does not match a static asset, and there
       * is no Worker script.
       */
      not_found_handling?: 'none' | '404-page' | 'single-page-application';

      /**
       * Contains a list path rules to control routing to either the Worker or assets.
       * Glob (\*) and negative (!) rules are supported. Rules must start with either '/'
       * or '!/'. At least one non-negative rule must be provided, and negative rules
       * have higher precedence than non-negative rules.
       */
      run_worker_first?: Array<string> | boolean;
    }
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
    id: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type: 'd1';
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
     * Namespace to bind to.
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
    json: string;

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
    jurisdiction?: 'eu' | 'fedramp';
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
     * Optional environment if the Worker utilizes one.
     */
    environment?: string;
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
    type: 'tail_consumer';
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

  /**
   * Resource limits enforced at runtime.
   */
  export interface Limits {
    /**
     * CPU time limit in milliseconds.
     */
    cpu_ms: number;
  }

  export interface WorkersMultipleStepMigrations {
    /**
     * Tag to set as the latest migration tag.
     */
    new_tag?: string;

    /**
     * Tag used to verify against the latest migration tag for this Worker. If they
     * don't match, the upload is rejected.
     */
    old_tag?: string;

    /**
     * Migrations to apply in order.
     */
    steps?: Array<WorkersAPI.MigrationStepParam>;
  }

  export interface Module {
    /**
     * The base64-encoded module content.
     */
    content_base64: string;

    /**
     * The content type of the module.
     */
    content_type: string;

    /**
     * The name of the module.
     */
    name: string;
  }

  /**
   * Placement settings for the version.
   */
  export interface Placement {
    /**
     * Placement mode for the version.
     */
    mode?: 'smart';
  }
}

export interface VersionListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;
}

export interface VersionDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface VersionGetParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: Whether to include the `modules` property of the version in the
   * response, which contains code and sourcemap content and may add several
   * megabytes to the response size.
   */
  include?: 'modules';
}

Versions.VersionsV4PagePaginationArray = VersionsV4PagePaginationArray;

export declare namespace Versions {
  export {
    type Version as Version,
    type VersionDeleteResponse as VersionDeleteResponse,
    VersionsV4PagePaginationArray as VersionsV4PagePaginationArray,
    type VersionCreateParams as VersionCreateParams,
    type VersionListParams as VersionListParams,
    type VersionDeleteParams as VersionDeleteParams,
    type VersionGetParams as VersionGetParams,
  };
}
