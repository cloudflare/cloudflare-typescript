// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as WorkersAPI from '../workers';
import * as TailAPI from './tail';

export class ScriptAndVersionSettings extends APIResource {
  /**
   * Patch metadata or config, such as bindings or usage model
   */
  edit(
    scriptName: string,
    params: ScriptAndVersionSettingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptAndVersionSettingEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        `/accounts/${account_id}/workers/scripts/${scriptName}/settings`,
        Core.multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: ScriptAndVersionSettingEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get metadata and config, such as bindings or usage model
   */
  get(
    scriptName: string,
    params: ScriptAndVersionSettingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptAndVersionSettingGetResponse> {
    const { account_id } = params;
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
   * List of bindings attached to a Worker. You can find more about bindings on our
   * docs:
   * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
   */
  bindings?: Array<
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindAI
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindAnalyticsEngine
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindAssets
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindBrowserRendering
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindD1
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindDispatchNamespace
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindDurableObjectNamespace
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindHyperdrive
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindJson
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindKVNamespace
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindMTLSCertificate
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindPlainText
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindPipelines
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindQueue
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindR2Bucket
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindSecretText
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindService
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindTailConsumer
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindVectorize
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindVersionMetadata
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindSecretsStoreSecret
    | ScriptAndVersionSettingEditResponse.WorkersBindingKindSecretKey
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
   * Migrations to apply for Durable Objects associated with this Worker.
   */
  migrations?:
    | WorkersAPI.SingleStepMigration
    | ScriptAndVersionSettingEditResponse.WorkersMultipleStepMigrations;

  /**
   * Observability settings for the Worker.
   */
  observability?: ScriptAndVersionSettingEditResponse.Observability;

  /**
   * Configuration for
   * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
   */
  placement?: ScriptAndVersionSettingEditResponse.Placement;

  /**
   * Tags to help you manage your Workers
   */
  tags?: Array<string>;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<TailAPI.ConsumerScript>;

  /**
   * Usage model for the Worker invocations.
   */
  usage_model?: 'standard';
}

export namespace ScriptAndVersionSettingEditResponse {
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

  export interface WorkersBindingKindBrowserRendering {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type: 'browser_rendering';
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
    type: 'durable_object_namespace';

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
    type: 'service';
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

  /**
   * Limits to apply for this Worker.
   */
  export interface Limits {
    /**
     * The amount of CPU time this Worker can use in milliseconds.
     */
    cpu_ms?: number;
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
    steps?: Array<WorkersAPI.MigrationStep>;
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
  }

  /**
   * Configuration for
   * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
   */
  export interface Placement {
    /**
     * Enables
     * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
     */
    mode?: 'smart';
  }
}

export interface ScriptAndVersionSettingGetResponse {
  /**
   * List of bindings attached to a Worker. You can find more about bindings on our
   * docs:
   * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
   */
  bindings?: Array<
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindAI
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindAnalyticsEngine
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindAssets
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindBrowserRendering
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindD1
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindDispatchNamespace
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindDurableObjectNamespace
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindHyperdrive
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindJson
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindKVNamespace
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindMTLSCertificate
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindPlainText
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindPipelines
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindQueue
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindR2Bucket
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindSecretText
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindService
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindTailConsumer
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindVectorize
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindVersionMetadata
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindSecretsStoreSecret
    | ScriptAndVersionSettingGetResponse.WorkersBindingKindSecretKey
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
   * Migrations to apply for Durable Objects associated with this Worker.
   */
  migrations?:
    | WorkersAPI.SingleStepMigration
    | ScriptAndVersionSettingGetResponse.WorkersMultipleStepMigrations;

  /**
   * Observability settings for the Worker.
   */
  observability?: ScriptAndVersionSettingGetResponse.Observability;

  /**
   * Configuration for
   * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
   */
  placement?: ScriptAndVersionSettingGetResponse.Placement;

  /**
   * Tags to help you manage your Workers
   */
  tags?: Array<string>;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<TailAPI.ConsumerScript>;

  /**
   * Usage model for the Worker invocations.
   */
  usage_model?: 'standard';
}

export namespace ScriptAndVersionSettingGetResponse {
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

  export interface WorkersBindingKindBrowserRendering {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type: 'browser_rendering';
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
    type: 'durable_object_namespace';

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
    type: 'service';
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

  /**
   * Limits to apply for this Worker.
   */
  export interface Limits {
    /**
     * The amount of CPU time this Worker can use in milliseconds.
     */
    cpu_ms?: number;
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
    steps?: Array<WorkersAPI.MigrationStep>;
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
  }

  /**
   * Configuration for
   * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
   */
  export interface Placement {
    /**
     * Enables
     * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
     */
    mode?: 'smart';
  }
}

export interface ScriptAndVersionSettingEditParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param:
   */
  settings?: ScriptAndVersionSettingEditParams.Settings;
}

export namespace ScriptAndVersionSettingEditParams {
  export interface Settings {
    /**
     * List of bindings attached to a Worker. You can find more about bindings on our
     * docs:
     * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
     */
    bindings?: Array<
      | Settings.WorkersBindingKindAI
      | Settings.WorkersBindingKindAnalyticsEngine
      | Settings.WorkersBindingKindAssets
      | Settings.WorkersBindingKindBrowserRendering
      | Settings.WorkersBindingKindD1
      | Settings.WorkersBindingKindDispatchNamespace
      | Settings.WorkersBindingKindDurableObjectNamespace
      | Settings.WorkersBindingKindHyperdrive
      | Settings.WorkersBindingKindJson
      | Settings.WorkersBindingKindKVNamespace
      | Settings.WorkersBindingKindMTLSCertificate
      | Settings.WorkersBindingKindPlainText
      | Settings.WorkersBindingKindPipelines
      | Settings.WorkersBindingKindQueue
      | Settings.WorkersBindingKindR2Bucket
      | Settings.WorkersBindingKindSecretText
      | Settings.WorkersBindingKindService
      | Settings.WorkersBindingKindTailConsumer
      | Settings.WorkersBindingKindVectorize
      | Settings.WorkersBindingKindVersionMetadata
      | Settings.WorkersBindingKindSecretsStoreSecret
      | Settings.WorkersBindingKindSecretKey
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
     */
    placement?: Settings.Placement;

    /**
     * Tags to help you manage your Workers
     */
    tags?: Array<string>;

    /**
     * List of Workers that will consume logs from the attached Worker.
     */
    tail_consumers?: Array<TailAPI.ConsumerScriptParam>;

    /**
     * Usage model for the Worker invocations.
     */
    usage_model?: 'standard';
  }

  export namespace Settings {
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

    export interface WorkersBindingKindBrowserRendering {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: 'browser_rendering';
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
      type: 'durable_object_namespace';

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
      type: 'service';
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

    /**
     * Limits to apply for this Worker.
     */
    export interface Limits {
      /**
       * The amount of CPU time this Worker can use in milliseconds.
       */
      cpu_ms?: number;
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
    }

    /**
     * Configuration for
     * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
     */
    export interface Placement {
      /**
       * Enables
       * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
       */
      mode?: 'smart';
    }
  }
}

export interface ScriptAndVersionSettingGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace ScriptAndVersionSettings {
  export {
    type ScriptAndVersionSettingEditResponse as ScriptAndVersionSettingEditResponse,
    type ScriptAndVersionSettingGetResponse as ScriptAndVersionSettingGetResponse,
    type ScriptAndVersionSettingEditParams as ScriptAndVersionSettingEditParams,
    type ScriptAndVersionSettingGetParams as ScriptAndVersionSettingGetParams,
  };
}
