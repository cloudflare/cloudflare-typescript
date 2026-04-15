// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as WorkersAPI from '../workers';
import * as TailAPI from './tail';

export class ScriptAndVersionSettings extends APIResource {
  /**
   * Patch metadata or config, such as bindings or usage model.
   *
   * @example
   * ```ts
   * const response =
   *   await client.workers.scripts.scriptAndVersionSettings.edit(
   *     'this-is_my_script-01',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  edit(
    scriptName: string,
    params: ScriptAndVersionSettingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptAndVersionSettingEditResponse> {
    const { account_id = this._client.accountId, ...body } = params;
    return (
      this._client.patch(
        `/accounts/${account_id}/workers/scripts/${scriptName}/settings`,
        Core.multipartFormRequestOptions({ body, ...options, __multipartSyntax: 'json' }),
      ) as Core.APIPromise<{ result: ScriptAndVersionSettingEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get metadata and config, such as bindings or usage model.
   *
   * @example
   * ```ts
   * const scriptAndVersionSetting =
   *   await client.workers.scripts.scriptAndVersionSettings.get(
   *     'this-is_my_script-01',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    scriptName: string,
    params?: ScriptAndVersionSettingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptAndVersionSettingGetResponse>;
  get(scriptName: string, options?: Core.RequestOptions): Core.APIPromise<ScriptAndVersionSettingGetResponse>;
  get(
    scriptName: string,
    params: ScriptAndVersionSettingGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptAndVersionSettingGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(scriptName, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/settings`,
        options,
      ) as Core.APIPromise<{ result: ScriptAndVersionSettingGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ScriptAndVersionSettingEditResponse {
  /**
   * Annotations for the Worker version. Annotations are not inherited across
   * settings updates; omitting this field means the new version will have no
   * annotations.
   */
  annotations?: ScriptAndVersionSettingEditResponse.Annotations;

  /**
   * List of bindings attached to a Worker. You can find more about bindings on our
   * docs:
   * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
   */
  bindings?: Array<
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindAI
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindAISearch
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindAISearchNamespace
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindAnalyticsEngine
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindAssets
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindBrowser
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindD1
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindDataBlob
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindDispatchNamespace
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindDurableObjectNamespace
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindHyperdrive
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindInherit
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindImages
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindJson
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindKVNamespace
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindMedia
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindMTLSCertificate
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindPlainText
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindPipelines
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindQueue
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindRatelimit
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindR2Bucket
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindSecretText
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindSendEmail
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindService
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindTextBlob
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindVectorize
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindVersionMetadata
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindSecretsStoreSecret
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindFlagship
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindSecretKey
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindWorkflow
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindWasmModule
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindVPCService
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindVPCNetwork
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
   * Limits to apply for this Worker.
   */
  limits?: ScriptAndVersionSettingEditResponse.Limits;

  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * Observability settings for the Worker.
   */
  observability?: ScriptAndVersionSettingEditResponse.Observability;

  /**
   * Configuration for
   * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
   * Specify mode='smart' for Smart Placement, or one of region/hostname/host.
   */
  placement?:
    | ScriptAndVersionSettingEditResponse.Mode
    | ScriptAndVersionSettingEditResponse.Region
    | ScriptAndVersionSettingEditResponse.Hostname
    | ScriptAndVersionSettingEditResponse.Host
    | ScriptAndVersionSettingEditResponse.UnionMember4
    | ScriptAndVersionSettingEditResponse.UnionMember5
    | ScriptAndVersionSettingEditResponse.UnionMember6
    | ScriptAndVersionSettingEditResponse.UnionMember7;

  /**
   * Tags associated with the Worker.
   */
  tags?: Array<string> | null;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<TailAPI.ConsumerScript> | null;

  /**
   * Usage model for the Worker invocations.
   */
  usage_model?: 'standard' | 'bundled' | 'unbound';
}

export namespace ScriptAndVersionSettingEditResponse {
  /**
   * Annotations for the Worker version. Annotations are not inherited across
   * settings updates; omitting this field means the new version will have no
   * annotations.
   */
  export interface Annotations {
    /**
     * Human-readable message about the version. Truncated to 1000 bytes if longer.
     */
    'workers/message'?: string;

    /**
     * User-provided identifier for the version. Maximum 100 bytes.
     */
    'workers/tag'?: string;

    /**
     * Operation that triggered the creation of the version. This is read-only and set
     * by the server.
     */
    'workers/triggered_by'?: string;
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

  /**
   * Limits to apply for this Worker.
   */
  export interface Limits {
    /**
     * The amount of CPU time this Worker can use in milliseconds.
     */
    cpu_ms?: number;

    /**
     * The number of subrequests this Worker can make per request.
     */
    subrequests?: number;
  }

  /**
   * Observability settings for the Worker.
   */
  export interface Observability {
    /**
     * Whether observability is enabled for the Worker.
     */
    enabled: boolean;

    /**
     * The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%).
     * Default is 1.
     */
    head_sampling_rate?: number | null;

    /**
     * Log settings for the Worker.
     */
    logs?: Observability.Logs | null;

    /**
     * Trace settings for the Worker.
     */
    traces?: Observability.Traces | null;
  }

  export namespace Observability {
    /**
     * Log settings for the Worker.
     */
    export interface Logs {
      /**
       * Whether logs are enabled for the Worker.
       */
      enabled: boolean;

      /**
       * Whether
       * [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs)
       * are enabled for the Worker.
       */
      invocation_logs: boolean;

      /**
       * A list of destinations where logs will be exported to.
       */
      destinations?: Array<string>;

      /**
       * The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.
       */
      head_sampling_rate?: number | null;

      /**
       * Whether log persistence is enabled for the Worker.
       */
      persist?: boolean;
    }

    /**
     * Trace settings for the Worker.
     */
    export interface Traces {
      /**
       * A list of destinations where traces will be exported to.
       */
      destinations?: Array<string>;

      /**
       * Whether traces are enabled for the Worker.
       */
      enabled?: boolean;

      /**
       * The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.
       */
      head_sampling_rate?: number | null;

      /**
       * Whether trace persistence is enabled for the Worker.
       */
      persist?: boolean;
    }
  }

  export interface Mode {
    /**
     * Enables
     * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
     */
    mode: 'smart';
  }

  export interface Region {
    /**
     * Cloud region for targeted placement in format 'provider:region'.
     */
    region: string;
  }

  export interface Hostname {
    /**
     * HTTP hostname for targeted placement.
     */
    hostname: string;
  }

  export interface Host {
    /**
     * TCP host and port for targeted placement.
     */
    host: string;
  }

  export interface UnionMember4 {
    /**
     * Targeted placement mode.
     */
    mode: 'targeted';

    /**
     * Cloud region for targeted placement in format 'provider:region'.
     */
    region: string;
  }

  export interface UnionMember5 {
    /**
     * HTTP hostname for targeted placement.
     */
    hostname: string;

    /**
     * Targeted placement mode.
     */
    mode: 'targeted';
  }

  export interface UnionMember6 {
    /**
     * TCP host and port for targeted placement.
     */
    host: string;

    /**
     * Targeted placement mode.
     */
    mode: 'targeted';
  }

  export interface UnionMember7 {
    /**
     * Targeted placement mode.
     */
    mode: 'targeted';

    /**
     * Array of placement targets (currently limited to single target).
     */
    target: Array<UnionMember7.Region | UnionMember7.Hostname | UnionMember7.Host>;
  }

  export namespace UnionMember7 {
    export interface Region {
      /**
       * Cloud region in format 'provider:region'.
       */
      region: string;
    }

    export interface Hostname {
      /**
       * HTTP hostname for targeted placement.
       */
      hostname: string;
    }

    export interface Host {
      /**
       * TCP host:port for targeted placement.
       */
      host: string;
    }
  }
}

export interface ScriptAndVersionSettingGetResponse {
  /**
   * Annotations for the Worker version. Annotations are not inherited across
   * settings updates; omitting this field means the new version will have no
   * annotations.
   */
  annotations?: ScriptAndVersionSettingGetResponse.Annotations;

  /**
   * List of bindings attached to a Worker. You can find more about bindings on our
   * docs:
   * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
   */
  bindings?: Array<
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindAI
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindAISearch
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindAISearchNamespace
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindAnalyticsEngine
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindAssets
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindBrowser
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindD1
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindDataBlob
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindDispatchNamespace
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindDurableObjectNamespace
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindHyperdrive
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindInherit
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindImages
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindJson
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindKVNamespace
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindMedia
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindMTLSCertificate
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindPlainText
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindPipelines
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindQueue
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindRatelimit
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindR2Bucket
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindSecretText
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindSendEmail
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindService
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindTextBlob
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindVectorize
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindVersionMetadata
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindSecretsStoreSecret
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindFlagship
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindSecretKey
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindWorkflow
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindWasmModule
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindVPCService
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindVPCNetwork
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
   * Limits to apply for this Worker.
   */
  limits?: ScriptAndVersionSettingGetResponse.Limits;

  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * Observability settings for the Worker.
   */
  observability?: ScriptAndVersionSettingGetResponse.Observability;

  /**
   * Configuration for
   * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
   * Specify mode='smart' for Smart Placement, or one of region/hostname/host.
   */
  placement?:
    | ScriptAndVersionSettingGetResponse.Mode
    | ScriptAndVersionSettingGetResponse.Region
    | ScriptAndVersionSettingGetResponse.Hostname
    | ScriptAndVersionSettingGetResponse.Host
    | ScriptAndVersionSettingGetResponse.UnionMember4
    | ScriptAndVersionSettingGetResponse.UnionMember5
    | ScriptAndVersionSettingGetResponse.UnionMember6
    | ScriptAndVersionSettingGetResponse.UnionMember7;

  /**
   * Tags associated with the Worker.
   */
  tags?: Array<string> | null;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<TailAPI.ConsumerScript> | null;

  /**
   * Usage model for the Worker invocations.
   */
  usage_model?: 'standard' | 'bundled' | 'unbound';
}

export namespace ScriptAndVersionSettingGetResponse {
  /**
   * Annotations for the Worker version. Annotations are not inherited across
   * settings updates; omitting this field means the new version will have no
   * annotations.
   */
  export interface Annotations {
    /**
     * Human-readable message about the version. Truncated to 1000 bytes if longer.
     */
    'workers/message'?: string;

    /**
     * User-provided identifier for the version. Maximum 100 bytes.
     */
    'workers/tag'?: string;

    /**
     * Operation that triggered the creation of the version. This is read-only and set
     * by the server.
     */
    'workers/triggered_by'?: string;
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

  /**
   * Limits to apply for this Worker.
   */
  export interface Limits {
    /**
     * The amount of CPU time this Worker can use in milliseconds.
     */
    cpu_ms?: number;

    /**
     * The number of subrequests this Worker can make per request.
     */
    subrequests?: number;
  }

  /**
   * Observability settings for the Worker.
   */
  export interface Observability {
    /**
     * Whether observability is enabled for the Worker.
     */
    enabled: boolean;

    /**
     * The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%).
     * Default is 1.
     */
    head_sampling_rate?: number | null;

    /**
     * Log settings for the Worker.
     */
    logs?: Observability.Logs | null;

    /**
     * Trace settings for the Worker.
     */
    traces?: Observability.Traces | null;
  }

  export namespace Observability {
    /**
     * Log settings for the Worker.
     */
    export interface Logs {
      /**
       * Whether logs are enabled for the Worker.
       */
      enabled: boolean;

      /**
       * Whether
       * [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs)
       * are enabled for the Worker.
       */
      invocation_logs: boolean;

      /**
       * A list of destinations where logs will be exported to.
       */
      destinations?: Array<string>;

      /**
       * The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.
       */
      head_sampling_rate?: number | null;

      /**
       * Whether log persistence is enabled for the Worker.
       */
      persist?: boolean;
    }

    /**
     * Trace settings for the Worker.
     */
    export interface Traces {
      /**
       * A list of destinations where traces will be exported to.
       */
      destinations?: Array<string>;

      /**
       * Whether traces are enabled for the Worker.
       */
      enabled?: boolean;

      /**
       * The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.
       */
      head_sampling_rate?: number | null;

      /**
       * Whether trace persistence is enabled for the Worker.
       */
      persist?: boolean;
    }
  }

  export interface Mode {
    /**
     * Enables
     * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
     */
    mode: 'smart';
  }

  export interface Region {
    /**
     * Cloud region for targeted placement in format 'provider:region'.
     */
    region: string;
  }

  export interface Hostname {
    /**
     * HTTP hostname for targeted placement.
     */
    hostname: string;
  }

  export interface Host {
    /**
     * TCP host and port for targeted placement.
     */
    host: string;
  }

  export interface UnionMember4 {
    /**
     * Targeted placement mode.
     */
    mode: 'targeted';

    /**
     * Cloud region for targeted placement in format 'provider:region'.
     */
    region: string;
  }

  export interface UnionMember5 {
    /**
     * HTTP hostname for targeted placement.
     */
    hostname: string;

    /**
     * Targeted placement mode.
     */
    mode: 'targeted';
  }

  export interface UnionMember6 {
    /**
     * TCP host and port for targeted placement.
     */
    host: string;

    /**
     * Targeted placement mode.
     */
    mode: 'targeted';
  }

  export interface UnionMember7 {
    /**
     * Targeted placement mode.
     */
    mode: 'targeted';

    /**
     * Array of placement targets (currently limited to single target).
     */
    target: Array<UnionMember7.Region | UnionMember7.Hostname | UnionMember7.Host>;
  }

  export namespace UnionMember7 {
    export interface Region {
      /**
       * Cloud region in format 'provider:region'.
       */
      region: string;
    }

    export interface Hostname {
      /**
       * HTTP hostname for targeted placement.
       */
      hostname: string;
    }

    export interface Host {
      /**
       * TCP host:port for targeted placement.
       */
      host: string;
    }
  }
}

export interface ScriptAndVersionSettingEditParams {
  /**
   * Path param: Identifier.
   */
  account_id?: string;

  /**
   * Body param
   */
  settings?: ScriptAndVersionSettingEditParams.Settings;
}

export namespace ScriptAndVersionSettingEditParams {
  export interface Settings {
    /**
     * Annotations for the Worker version. Annotations are not inherited across
     * settings updates; omitting this field means the new version will have no
     * annotations.
     */
    annotations?: Settings.Annotations;

    /**
     * List of bindings attached to a Worker. You can find more about bindings on our
     * docs:
     * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
     */
    bindings?: Array<
      | Settings.WorkersBindingKindAI
      | Settings.WorkersBindingKindAISearch
      | Settings.WorkersBindingKindAISearchNamespace
      | Settings.WorkersBindingKindAnalyticsEngine
      | Settings.WorkersBindingKindAssets
      | Settings.WorkersBindingKindBrowser
      | Settings.WorkersBindingKindD1
      | Settings.WorkersBindingKindDataBlob
      | Settings.WorkersBindingKindDispatchNamespace
      | Settings.WorkersBindingKindDurableObjectNamespace
      | Settings.WorkersBindingKindHyperdrive
      | Settings.WorkersBindingKindInherit
      | Settings.WorkersBindingKindImages
      | Settings.WorkersBindingKindJson
      | Settings.WorkersBindingKindKVNamespace
      | Settings.WorkersBindingKindMedia
      | Settings.WorkersBindingKindMTLSCertificate
      | Settings.WorkersBindingKindPlainText
      | Settings.WorkersBindingKindPipelines
      | Settings.WorkersBindingKindQueue
      | Settings.WorkersBindingKindRatelimit
      | Settings.WorkersBindingKindR2Bucket
      | Settings.WorkersBindingKindSecretText
      | Settings.WorkersBindingKindSendEmail
      | Settings.WorkersBindingKindService
      | Settings.WorkersBindingKindTextBlob
      | Settings.WorkersBindingKindVectorize
      | Settings.WorkersBindingKindVersionMetadata
      | Settings.WorkersBindingKindSecretsStoreSecret
      | Settings.WorkersBindingKindFlagship
      | Settings.WorkersBindingKindSecretKey
      | Settings.WorkersBindingKindWorkflow
      | Settings.WorkersBindingKindWasmModule
      | Settings.WorkersBindingKindVPCService
      | Settings.WorkersBindingKindVPCNetwork
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
     * Limits to apply for this Worker.
     */
    limits?: Settings.Limits;

    /**
     * Whether Logpush is turned on for the Worker.
     */
    logpush?: boolean;

    /**
     * Migrations to apply for Durable Objects associated with this Worker.
     */
    migrations?: WorkersAPI.SingleStepMigrationParam | Settings.WorkersMultipleStepMigrations;

    /**
     * Observability settings for the Worker.
     */
    observability?: Settings.Observability;

    /**
     * Configuration for
     * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
     * Specify mode='smart' for Smart Placement, or one of region/hostname/host.
     */
    placement?:
      | Settings.Mode
      | Settings.Region
      | Settings.Hostname
      | Settings.Host
      | Settings.UnionMember4
      | Settings.UnionMember5
      | Settings.UnionMember6
      | Settings.UnionMember7;

    /**
     * Tags associated with the Worker.
     */
    tags?: Array<string> | null;

    /**
     * List of Workers that will consume logs from the attached Worker.
     */
    tail_consumers?: Array<TailAPI.ConsumerScriptParam> | null;

    /**
     * Usage model for the Worker invocations.
     */
    usage_model?: 'standard' | 'bundled' | 'unbound';
  }

  export namespace Settings {
    /**
     * Annotations for the Worker version. Annotations are not inherited across
     * settings updates; omitting this field means the new version will have no
     * annotations.
     */
    export interface Annotations {
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
     * Limits to apply for this Worker.
     */
    export interface Limits {
      /**
       * The amount of CPU time this Worker can use in milliseconds.
       */
      cpu_ms?: number;

      /**
       * The number of subrequests this Worker can make per request.
       */
      subrequests?: number;
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

    /**
     * Observability settings for the Worker.
     */
    export interface Observability {
      /**
       * Whether observability is enabled for the Worker.
       */
      enabled: boolean;

      /**
       * The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%).
       * Default is 1.
       */
      head_sampling_rate?: number | null;

      /**
       * Log settings for the Worker.
       */
      logs?: Observability.Logs | null;

      /**
       * Trace settings for the Worker.
       */
      traces?: Observability.Traces | null;
    }

    export namespace Observability {
      /**
       * Log settings for the Worker.
       */
      export interface Logs {
        /**
         * Whether logs are enabled for the Worker.
         */
        enabled: boolean;

        /**
         * Whether
         * [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs)
         * are enabled for the Worker.
         */
        invocation_logs: boolean;

        /**
         * A list of destinations where logs will be exported to.
         */
        destinations?: Array<string>;

        /**
         * The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.
         */
        head_sampling_rate?: number | null;

        /**
         * Whether log persistence is enabled for the Worker.
         */
        persist?: boolean;
      }

      /**
       * Trace settings for the Worker.
       */
      export interface Traces {
        /**
         * A list of destinations where traces will be exported to.
         */
        destinations?: Array<string>;

        /**
         * Whether traces are enabled for the Worker.
         */
        enabled?: boolean;

        /**
         * The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.
         */
        head_sampling_rate?: number | null;

        /**
         * Whether trace persistence is enabled for the Worker.
         */
        persist?: boolean;
      }
    }

    export interface Mode {
      /**
       * Enables
       * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
       */
      mode: 'smart';
    }

    export interface Region {
      /**
       * Cloud region for targeted placement in format 'provider:region'.
       */
      region: string;
    }

    export interface Hostname {
      /**
       * HTTP hostname for targeted placement.
       */
      hostname: string;
    }

    export interface Host {
      /**
       * TCP host and port for targeted placement.
       */
      host: string;
    }

    export interface UnionMember4 {
      /**
       * Targeted placement mode.
       */
      mode: 'targeted';

      /**
       * Cloud region for targeted placement in format 'provider:region'.
       */
      region: string;
    }

    export interface UnionMember5 {
      /**
       * HTTP hostname for targeted placement.
       */
      hostname: string;

      /**
       * Targeted placement mode.
       */
      mode: 'targeted';
    }

    export interface UnionMember6 {
      /**
       * TCP host and port for targeted placement.
       */
      host: string;

      /**
       * Targeted placement mode.
       */
      mode: 'targeted';
    }

    export interface UnionMember7 {
      /**
       * Targeted placement mode.
       */
      mode: 'targeted';

      /**
       * Array of placement targets (currently limited to single target).
       */
      target: Array<UnionMember7.Region | UnionMember7.Hostname | UnionMember7.Host>;
    }

    export namespace UnionMember7 {
      export interface Region {
        /**
         * Cloud region in format 'provider:region'.
         */
        region: string;
      }

      export interface Hostname {
        /**
         * HTTP hostname for targeted placement.
         */
        hostname: string;
      }

      export interface Host {
        /**
         * TCP host:port for targeted placement.
         */
        host: string;
      }
    }
  }
}

export interface ScriptAndVersionSettingGetParams {
  /**
   * Identifier.
   */
  account_id?: string;
}

export declare namespace ScriptAndVersionSettings {
  export {
    type ScriptAndVersionSettingEditResponse as ScriptAndVersionSettingEditResponse,
    type ScriptAndVersionSettingGetResponse as ScriptAndVersionSettingGetResponse,
    type ScriptAndVersionSettingEditParams as ScriptAndVersionSettingEditParams,
    type ScriptAndVersionSettingGetParams as ScriptAndVersionSettingGetParams,
  };
}
