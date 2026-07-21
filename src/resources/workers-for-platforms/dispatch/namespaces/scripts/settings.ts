// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as WorkersAPI from '../../../../workers/workers';
import * as TailAPI from '../../../../workers/scripts/tail';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../../internal/uploads';
import { path } from '../../../../../internal/utils/path';

export class BaseSettings extends APIResource {
  static override readonly _key: readonly [
    'workersForPlatforms',
    'dispatch',
    'namespaces',
    'scripts',
    'settings',
  ] = Object.freeze(['workersForPlatforms', 'dispatch', 'namespaces', 'scripts', 'settings'] as const);

  /**
   * Patch script metadata, such as bindings.
   *
   * @example
   * ```ts
   * const response =
   *   await client.workersForPlatforms.dispatch.namespaces.scripts.settings.edit(
   *     'this-is_my_script-01',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       dispatch_namespace: 'my-dispatch-namespace',
   *     },
   *   );
   * ```
   */
  edit(
    scriptName: string,
    params: SettingEditParams,
    options?: RequestOptions,
  ): APIPromise<SettingEditResponse> {
    const { account_id, dispatch_namespace, ...body } = params;
    return (
      this._client.patch(
        path`/accounts/${account_id}/workers/dispatch/namespaces/${dispatch_namespace}/scripts/${scriptName}/settings`,
        multipartFormRequestOptions({ body, ...options }, this._client),
      ) as APIPromise<{ result: SettingEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get script settings from a script uploaded to a Workers for Platforms namespace.
   *
   * @example
   * ```ts
   * const setting =
   *   await client.workersForPlatforms.dispatch.namespaces.scripts.settings.get(
   *     'this-is_my_script-01',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       dispatch_namespace: 'my-dispatch-namespace',
   *     },
   *   );
   * ```
   */
  get(
    scriptName: string,
    params: SettingGetParams,
    options?: RequestOptions,
  ): APIPromise<SettingGetResponse> {
    const { account_id, dispatch_namespace } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/workers/dispatch/namespaces/${dispatch_namespace}/scripts/${scriptName}/settings`,
        options,
      ) as APIPromise<{ result: SettingGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Settings extends BaseSettings {}

/**
 * Script and version settings for Workers for Platforms namespace scripts. Same as
 * script-and-version-settings-item but without annotations, which are not
 * supported for namespace scripts.
 */
export interface SettingEditResponse {
  /**
   * List of bindings attached to a Worker. You can find more about bindings on our
   * docs:
   * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
   */
  bindings?: Array<
    | SettingEditResponse.WorkersBindingKindAI
    | SettingEditResponse.WorkersBindingKindAISearch
    | SettingEditResponse.WorkersBindingKindAISearchNamespace
    | SettingEditResponse.WorkersBindingKindAnalyticsEngine
    | SettingEditResponse.WorkersBindingKindAssets
    | SettingEditResponse.WorkersBindingKindBrowser
    | SettingEditResponse.WorkersBindingKindD1
    | SettingEditResponse.WorkersBindingKindDataBlob
    | SettingEditResponse.WorkersBindingKindDispatchNamespace
    | SettingEditResponse.WorkersBindingKindDurableObjectNamespace
    | SettingEditResponse.WorkersBindingKindHyperdrive
    | SettingEditResponse.WorkersBindingKindInherit
    | SettingEditResponse.WorkersBindingKindImages
    | SettingEditResponse.WorkersBindingKindJson
    | SettingEditResponse.WorkersBindingKindKVNamespace
    | SettingEditResponse.WorkersBindingKindMedia
    | SettingEditResponse.WorkersBindingKindMTLSCertificate
    | SettingEditResponse.WorkersBindingKindPlainText
    | SettingEditResponse.WorkersBindingKindPipelines
    | SettingEditResponse.WorkersBindingKindQueue
    | SettingEditResponse.WorkersBindingKindRatelimit
    | SettingEditResponse.WorkersBindingKindR2Bucket
    | SettingEditResponse.WorkersBindingKindSecretText
    | SettingEditResponse.WorkersBindingKindSendEmail
    | SettingEditResponse.WorkersBindingKindService
    | SettingEditResponse.WorkersBindingKindTextBlob
    | SettingEditResponse.WorkersBindingKindVectorize
    | SettingEditResponse.WorkersBindingKindVersionMetadata
    | SettingEditResponse.WorkersBindingKindSecretsStoreSecret
    | SettingEditResponse.WorkersBindingKindFlagship
    | SettingEditResponse.WorkersBindingKindSecretKey
    | SettingEditResponse.WorkersBindingKindWorkflow
    | SettingEditResponse.WorkersBindingKindWasmModule
    | SettingEditResponse.WorkersBindingKindVPCService
    | SettingEditResponse.WorkersBindingKindVPCNetwork
  >;

  /**
   * Global CacheW configuration for the Worker. When caching is on, the platform
   * provisions a `cloudflare.app` zone for the Worker. A `type: worker` entry in the
   * `exports` map can override this value for a single entrypoint.
   */
  cache_options?: SettingEditResponse.CacheOptions;

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
   * Summary of the declarative exports reconciliation that ran on this upload.
   * Populated only when the uploaded metadata included an `exports` block. Durable
   * Object entries drive reconciliation; `type: worker` entries do not contribute to
   * this summary.
   */
  exports_reconciliation?: SettingEditResponse.ExportsReconciliation;

  /**
   * Limits to apply for this Worker.
   */
  limits?: SettingEditResponse.Limits;

  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * Observability settings for the Worker.
   */
  observability?: SettingEditResponse.Observability;

  /**
   * Configuration for
   * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
   * Specify mode='smart' for Smart Placement, or one of region/hostname/host.
   */
  placement?:
    | SettingEditResponse.Mode
    | SettingEditResponse.Region
    | SettingEditResponse.Hostname
    | SettingEditResponse.Host
    | SettingEditResponse.UnionMember4
    | SettingEditResponse.UnionMember5
    | SettingEditResponse.UnionMember6
    | SettingEditResponse.UnionMember7;

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

export namespace SettingEditResponse {
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

      /**
       * Controls how inbound trace context (traceparent/tracestate) headers on incoming
       * requests are handled. "authenticated" (default) honors inbound trace context
       * only when accompanied by a valid trace auth token. "accept" unconditionally
       * accepts inbound trace context. Requires the trace propagation feature to be
       * enabled.
       */
      propagation_policy?: 'authenticated' | 'accept';
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

/**
 * Script and version settings for Workers for Platforms namespace scripts. Same as
 * script-and-version-settings-item but without annotations, which are not
 * supported for namespace scripts.
 */
export interface SettingGetResponse {
  /**
   * List of bindings attached to a Worker. You can find more about bindings on our
   * docs:
   * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
   */
  bindings?: Array<
    | SettingGetResponse.WorkersBindingKindAI
    | SettingGetResponse.WorkersBindingKindAISearch
    | SettingGetResponse.WorkersBindingKindAISearchNamespace
    | SettingGetResponse.WorkersBindingKindAnalyticsEngine
    | SettingGetResponse.WorkersBindingKindAssets
    | SettingGetResponse.WorkersBindingKindBrowser
    | SettingGetResponse.WorkersBindingKindD1
    | SettingGetResponse.WorkersBindingKindDataBlob
    | SettingGetResponse.WorkersBindingKindDispatchNamespace
    | SettingGetResponse.WorkersBindingKindDurableObjectNamespace
    | SettingGetResponse.WorkersBindingKindHyperdrive
    | SettingGetResponse.WorkersBindingKindInherit
    | SettingGetResponse.WorkersBindingKindImages
    | SettingGetResponse.WorkersBindingKindJson
    | SettingGetResponse.WorkersBindingKindKVNamespace
    | SettingGetResponse.WorkersBindingKindMedia
    | SettingGetResponse.WorkersBindingKindMTLSCertificate
    | SettingGetResponse.WorkersBindingKindPlainText
    | SettingGetResponse.WorkersBindingKindPipelines
    | SettingGetResponse.WorkersBindingKindQueue
    | SettingGetResponse.WorkersBindingKindRatelimit
    | SettingGetResponse.WorkersBindingKindR2Bucket
    | SettingGetResponse.WorkersBindingKindSecretText
    | SettingGetResponse.WorkersBindingKindSendEmail
    | SettingGetResponse.WorkersBindingKindService
    | SettingGetResponse.WorkersBindingKindTextBlob
    | SettingGetResponse.WorkersBindingKindVectorize
    | SettingGetResponse.WorkersBindingKindVersionMetadata
    | SettingGetResponse.WorkersBindingKindSecretsStoreSecret
    | SettingGetResponse.WorkersBindingKindFlagship
    | SettingGetResponse.WorkersBindingKindSecretKey
    | SettingGetResponse.WorkersBindingKindWorkflow
    | SettingGetResponse.WorkersBindingKindWasmModule
    | SettingGetResponse.WorkersBindingKindVPCService
    | SettingGetResponse.WorkersBindingKindVPCNetwork
  >;

  /**
   * Global CacheW configuration for the Worker. When caching is on, the platform
   * provisions a `cloudflare.app` zone for the Worker. A `type: worker` entry in the
   * `exports` map can override this value for a single entrypoint.
   */
  cache_options?: SettingGetResponse.CacheOptions;

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
   * Summary of the declarative exports reconciliation that ran on this upload.
   * Populated only when the uploaded metadata included an `exports` block. Durable
   * Object entries drive reconciliation; `type: worker` entries do not contribute to
   * this summary.
   */
  exports_reconciliation?: SettingGetResponse.ExportsReconciliation;

  /**
   * Limits to apply for this Worker.
   */
  limits?: SettingGetResponse.Limits;

  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * Observability settings for the Worker.
   */
  observability?: SettingGetResponse.Observability;

  /**
   * Configuration for
   * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
   * Specify mode='smart' for Smart Placement, or one of region/hostname/host.
   */
  placement?:
    | SettingGetResponse.Mode
    | SettingGetResponse.Region
    | SettingGetResponse.Hostname
    | SettingGetResponse.Host
    | SettingGetResponse.UnionMember4
    | SettingGetResponse.UnionMember5
    | SettingGetResponse.UnionMember6
    | SettingGetResponse.UnionMember7;

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

export namespace SettingGetResponse {
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

      /**
       * Controls how inbound trace context (traceparent/tracestate) headers on incoming
       * requests are handled. "authenticated" (default) honors inbound trace context
       * only when accompanied by a valid trace auth token. "accept" unconditionally
       * accepts inbound trace context. Requires the trace propagation feature to be
       * enabled.
       */
      propagation_policy?: 'authenticated' | 'accept';
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

export interface SettingEditParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Path param: Name of the Workers for Platforms dispatch namespace.
   */
  dispatch_namespace: string;

  /**
   * Body param: Script and version settings for Workers for Platforms namespace
   * scripts. Same as script-and-version-settings-item but without annotations, which
   * are not supported for namespace scripts.
   */
  settings?: SettingEditParams.Settings;
}

export namespace SettingEditParams {
  /**
   * Script and version settings for Workers for Platforms namespace scripts. Same as
   * script-and-version-settings-item but without annotations, which are not
   * supported for namespace scripts.
   */
  export interface Settings {
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
     * Global CacheW configuration for the Worker. When caching is on, the platform
     * provisions a `cloudflare.app` zone for the Worker. A `type: worker` entry in the
     * `exports` map can override this value for a single entrypoint.
     */
    cache_options?: Settings.CacheOptions;

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
     * Declarative exports for the Worker. Worker entrypoint entries (`type: worker`)
     * carry cache configuration for that entrypoint.
     */
    exports?: {
      [key: string]:
        | Settings.WorkersWorkerExport
        | Settings.WorkersDurableObjectExport
        | Settings.WorkersDurableObjectDeletedExport
        | Settings.WorkersDurableObjectRenamedExport
        | Settings.WorkersDurableObjectTransferredExport
        | Settings.WorkersDurableObjectExpectingTransferExport;
    };

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

        /**
         * Controls how inbound trace context (traceparent/tracestate) headers on incoming
         * requests are handled. "authenticated" (default) honors inbound trace context
         * only when accompanied by a valid trace auth token. "accept" unconditionally
         * accepts inbound trace context. Requires the trace propagation feature to be
         * enabled.
         */
        propagation_policy?: 'authenticated' | 'accept';
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

export interface SettingGetParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * Name of the Workers for Platforms dispatch namespace.
   */
  dispatch_namespace: string;
}

export declare namespace Settings {
  export {
    type SettingEditResponse as SettingEditResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingEditParams as SettingEditParams,
    type SettingGetParams as SettingGetParams,
  };
}
