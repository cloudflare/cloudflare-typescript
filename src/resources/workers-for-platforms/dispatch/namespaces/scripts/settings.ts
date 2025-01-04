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
    | SettingEditResponse.WorkersBindingKindAny
    | SettingEditResponse.WorkersBindingKindAI
    | SettingEditResponse.WorkersBindingKindAnalyticsEngine
    | SettingEditResponse.WorkersBindingKindAssets
    | SettingEditResponse.WorkersBindingKindBrowserRendering
    | SettingEditResponse.WorkersBindingKindD1
    | SettingEditResponse.WorkersBindingKindDispatchNamespace
    | SettingEditResponse.WorkersBindingKindDo
    | SettingEditResponse.WorkersBindingKindHyperdrive
    | SettingEditResponse.WorkersBindingKindJson
    | SettingEditResponse.WorkersBindingKindKVNamespace
    | SettingEditResponse.WorkersBindingKindMTLSCERT
    | SettingEditResponse.WorkersBindingKindPlainText
    | SettingEditResponse.WorkersBindingKindQueue
    | SettingEditResponse.WorkersBindingKindR2
    | SettingEditResponse.WorkersBindingKindSecret
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
  export interface WorkersBindingKindAny {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type: string;
    [k: string]: unknown;
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
     * The dataset name to bind to.
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

  export interface WorkersBindingKindDo {
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

  export interface WorkersBindingKindMTLSCERT {
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

  export interface WorkersBindingKindR2 {
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

  export interface WorkersBindingKindSecret {
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
    | SettingGetResponse.WorkersBindingKindAny
    | SettingGetResponse.WorkersBindingKindAI
    | SettingGetResponse.WorkersBindingKindAnalyticsEngine
    | SettingGetResponse.WorkersBindingKindAssets
    | SettingGetResponse.WorkersBindingKindBrowserRendering
    | SettingGetResponse.WorkersBindingKindD1
    | SettingGetResponse.WorkersBindingKindDispatchNamespace
    | SettingGetResponse.WorkersBindingKindDo
    | SettingGetResponse.WorkersBindingKindHyperdrive
    | SettingGetResponse.WorkersBindingKindJson
    | SettingGetResponse.WorkersBindingKindKVNamespace
    | SettingGetResponse.WorkersBindingKindMTLSCERT
    | SettingGetResponse.WorkersBindingKindPlainText
    | SettingGetResponse.WorkersBindingKindQueue
    | SettingGetResponse.WorkersBindingKindR2
    | SettingGetResponse.WorkersBindingKindSecret
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
  export interface WorkersBindingKindAny {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type: string;
    [k: string]: unknown;
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
     * The dataset name to bind to.
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

  export interface WorkersBindingKindDo {
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

  export interface WorkersBindingKindMTLSCERT {
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

  export interface WorkersBindingKindR2 {
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

  export interface WorkersBindingKindSecret {
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
      | Settings.WorkersBindingKindAny
      | Settings.WorkersBindingKindAI
      | Settings.WorkersBindingKindAnalyticsEngine
      | Settings.WorkersBindingKindAssets
      | Settings.WorkersBindingKindBrowserRendering
      | Settings.WorkersBindingKindD1
      | Settings.WorkersBindingKindDispatchNamespace
      | Settings.WorkersBindingKindDo
      | Settings.WorkersBindingKindHyperdrive
      | Settings.WorkersBindingKindJson
      | Settings.WorkersBindingKindKVNamespace
      | Settings.WorkersBindingKindMTLSCERT
      | Settings.WorkersBindingKindPlainText
      | Settings.WorkersBindingKindQueue
      | Settings.WorkersBindingKindR2
      | Settings.WorkersBindingKindSecret
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
    export interface WorkersBindingKindAny {
      /**
       * A JavaScript variable name for the binding.
       */
      name: string;

      /**
       * The kind of resource that the binding provides.
       */
      type: string;
      [k: string]: unknown;
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
       * The dataset name to bind to.
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

    export interface WorkersBindingKindDo {
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

    export interface WorkersBindingKindMTLSCERT {
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

    export interface WorkersBindingKindR2 {
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

    export interface WorkersBindingKindSecret {
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
