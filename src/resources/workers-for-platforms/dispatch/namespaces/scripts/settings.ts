// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import * as WorkersAPI from '../../../../workers/workers';
import * as TailAPI from '../../../../workers/scripts/tail';

export class Settings extends APIResource {
  /**
   * Patch script metadata, such as bindings
   */
  edit(
    dispatchNamespace: string,
    scriptName: string,
    params: SettingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/settings`,
        Core.multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: SettingEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get script settings from a script uploaded to a Workers for Platforms namespace.
   */
  get(
    dispatchNamespace: string,
    scriptName: string,
    params: SettingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/settings`,
        options,
      ) as Core.APIPromise<{ result: SettingGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SettingEditResponse {
  /**
   * List of bindings attached to a Worker. You can find more about bindings on our
   * docs:
   * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
   */
  bindings?: Array<
    | SettingEditResponse.WorkersBindingKindAI
    | SettingEditResponse.WorkersBindingKindAnalyticsEngine
    | SettingEditResponse.WorkersBindingKindAssets
    | SettingEditResponse.WorkersBindingKindBrowserRendering
    | SettingEditResponse.WorkersBindingKindD1
    | SettingEditResponse.WorkersBindingKindDispatchNamespace
    | SettingEditResponse.WorkersBindingKindDurableObjectNamespace
    | SettingEditResponse.WorkersBindingKindHyperdrive
    | SettingEditResponse.WorkersBindingKindJson
    | SettingEditResponse.WorkersBindingKindKVNamespace
    | SettingEditResponse.WorkersBindingKindMTLSCertificate
    | SettingEditResponse.WorkersBindingKindPlainText
    | SettingEditResponse.WorkersBindingKindQueue
    | SettingEditResponse.WorkersBindingKindR2Bucket
    | SettingEditResponse.WorkersBindingKindSecretText
    | SettingEditResponse.WorkersBindingKindService
    | SettingEditResponse.WorkersBindingKindTailConsumer
    | SettingEditResponse.WorkersBindingKindVectorize
    | SettingEditResponse.WorkersBindingKindVersionMetadata
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
  limits?: SettingEditResponse.Limits;

  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * Migrations to apply for Durable Objects associated with this Worker.
   */
  migrations?: WorkersAPI.SingleStepMigration | SettingEditResponse.WorkersMultipleStepMigrations;

  /**
   * Observability settings for the Worker.
   */
  observability?: SettingEditResponse.Observability;

  /**
   * Configuration for
   * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
   */
  placement?: SettingEditResponse.Placement;

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

export namespace SettingEditResponse {
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

export interface SettingGetResponse {
  /**
   * List of bindings attached to a Worker. You can find more about bindings on our
   * docs:
   * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
   */
  bindings?: Array<
    | SettingGetResponse.WorkersBindingKindAI
    | SettingGetResponse.WorkersBindingKindAnalyticsEngine
    | SettingGetResponse.WorkersBindingKindAssets
    | SettingGetResponse.WorkersBindingKindBrowserRendering
    | SettingGetResponse.WorkersBindingKindD1
    | SettingGetResponse.WorkersBindingKindDispatchNamespace
    | SettingGetResponse.WorkersBindingKindDurableObjectNamespace
    | SettingGetResponse.WorkersBindingKindHyperdrive
    | SettingGetResponse.WorkersBindingKindJson
    | SettingGetResponse.WorkersBindingKindKVNamespace
    | SettingGetResponse.WorkersBindingKindMTLSCertificate
    | SettingGetResponse.WorkersBindingKindPlainText
    | SettingGetResponse.WorkersBindingKindQueue
    | SettingGetResponse.WorkersBindingKindR2Bucket
    | SettingGetResponse.WorkersBindingKindSecretText
    | SettingGetResponse.WorkersBindingKindService
    | SettingGetResponse.WorkersBindingKindTailConsumer
    | SettingGetResponse.WorkersBindingKindVectorize
    | SettingGetResponse.WorkersBindingKindVersionMetadata
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
  limits?: SettingGetResponse.Limits;

  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * Migrations to apply for Durable Objects associated with this Worker.
   */
  migrations?: WorkersAPI.SingleStepMigration | SettingGetResponse.WorkersMultipleStepMigrations;

  /**
   * Observability settings for the Worker.
   */
  observability?: SettingGetResponse.Observability;

  /**
   * Configuration for
   * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
   */
  placement?: SettingGetResponse.Placement;

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

export namespace SettingGetResponse {
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

export interface SettingEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  settings?: SettingEditParams.Settings;
}

export namespace SettingEditParams {
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
      | Settings.WorkersBindingKindQueue
      | Settings.WorkersBindingKindR2Bucket
      | Settings.WorkersBindingKindSecretText
      | Settings.WorkersBindingKindService
      | Settings.WorkersBindingKindTailConsumer
      | Settings.WorkersBindingKindVectorize
      | Settings.WorkersBindingKindVersionMetadata
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

export interface SettingGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Settings {
  export {
    type SettingEditResponse as SettingEditResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingEditParams as SettingEditParams,
    type SettingGetParams as SettingGetParams,
  };
}
