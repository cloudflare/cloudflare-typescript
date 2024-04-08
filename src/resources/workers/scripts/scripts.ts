// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { type Response } from 'cloudflare/_shims/index';
import * as ScriptsAPI from 'cloudflare/resources/workers/scripts/scripts';
import * as Shared from 'cloudflare/resources/shared';
import * as WorkersAPI from 'cloudflare/resources/workers/workers';
import * as BindingsAPI from 'cloudflare/resources/workers/scripts/bindings';
import * as ContentAPI from 'cloudflare/resources/workers/scripts/content';
import * as DeploymentsAPI from 'cloudflare/resources/workers/scripts/deployments';
import * as SchedulesAPI from 'cloudflare/resources/workers/scripts/schedules';
import * as SettingsAPI from 'cloudflare/resources/workers/scripts/settings';
import * as TailAPI from 'cloudflare/resources/workers/scripts/tail';
import * as UsageModelAPI from 'cloudflare/resources/workers/scripts/usage-model';
import * as VersionsAPI from 'cloudflare/resources/workers/scripts/versions';
import { type Uploadable, maybeMultipartFormRequestOptions } from 'cloudflare/core';
import { SinglePage } from 'cloudflare/pagination';

export class Scripts extends APIResource {
  bindings: BindingsAPI.Bindings = new BindingsAPI.Bindings(this._client);
  schedules: SchedulesAPI.Schedules = new SchedulesAPI.Schedules(this._client);
  tail: TailAPI.Tail = new TailAPI.Tail(this._client);
  usageModel: UsageModelAPI.UsageModel = new UsageModelAPI.UsageModel(this._client);
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Upload a worker module.
   */
  update(
    scriptName: string,
    params: ScriptUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Script> {
    const { account_id, rollback_to, ...body } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/workers/scripts/${scriptName}`,
        maybeMultipartFormRequestOptions({ query: { rollback_to }, body, ...options }),
      ) as Core.APIPromise<{ result: Script }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a list of uploaded workers.
   */
  list(params: ScriptListParams, options?: Core.RequestOptions): Core.PagePromise<ScriptsSinglePage, Script> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/workers/scripts`, ScriptsSinglePage, options);
  }

  /**
   * Delete your worker. This call has no response body on a successful delete.
   */
  delete(
    scriptName: string,
    params: ScriptDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id, body, force } = params;
    return this._client.delete(`/accounts/${account_id}/workers/scripts/${scriptName}`, {
      query: { force },
      body: body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetch raw script content for your worker. Note this is the original script
   * content, not JSON encoded.
   */
  get(scriptName: string, params: ScriptGetParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/workers/scripts/${scriptName}`, {
      ...options,
      __binaryResponse: true,
    });
  }
}

export class ScriptsSinglePage extends SinglePage<Script> {}

/**
 * A binding to allow the Worker to communicate with resources
 */
export type BindingItem =
  | WorkersAPI.KVNamespaceBinding
  | WorkersAPI.ServiceBinding
  | WorkersAPI.DurableObjectBinding
  | WorkersAPI.R2Binding
  | BindingItem.WorkersQueueBinding
  | WorkersAPI.D1Binding
  | WorkersAPI.DispatchNamespaceBinding
  | WorkersAPI.MTLSCERTBinding;

export namespace BindingItem {
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
}

/**
 * A flag to opt into a specific change
 */
export type CompatibilityFlagsItem = string;

export interface Script {
  /**
   * The id of the script in the Workers system. Usually the script name.
   */
  id?: string;

  /**
   * When the script was created.
   */
  created_on?: string;

  /**
   * Hashed script content, can be used in a If-None-Match header when updating.
   */
  etag?: string;

  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * When the script was last modified.
   */
  modified_on?: string;

  /**
   * Deprecated. Deployment metadata for internal usage.
   */
  pipeline_hash?: string;

  /**
   * Specifies the placement mode for the Worker (e.g. 'smart').
   */
  placement_mode?: string;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<TailAPI.ConsumerScriptItem>;

  /**
   * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
   */
  usage_model?: string;
}

export interface Setting {
  errors: Array<Shared.UnnamedSchemaRef3248f24329456e19dfa042fff9986f72>;

  messages: Array<Shared.UnnamedSchemaRef3248f24329456e19dfa042fff9986f72>;

  result: SettingsItem;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export interface SettingsItem {
  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<TailAPI.ConsumerScriptItem>;
}

/**
 * Tag to help you manage your Worker
 */
export type TagsItem = string;

export type ScriptUpdateParams = ScriptUpdateParams.Variant0 | ScriptUpdateParams.Variant1;

export namespace ScriptUpdateParams {
  export interface Variant0 {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Query param: Rollback to provided deployment based on deployment ID. Request
     * body will only parse a "message" part. You can learn more about deployments
     * [here](https://developers.cloudflare.com/workers/platform/deployments/).
     */
    rollback_to?: string;

    /**
     * Body param: A module comprising a Worker script, often a javascript file.
     * Multiple modules may be provided as separate named parts, but at least one
     * module must be present and referenced in the metadata as `main_module` or
     * `body_part` by part name.
     */
    '<any part name>'?: Array<Uploadable>;

    /**
     * Body param: JSON encoded metadata about the uploaded parts and Worker
     * configuration.
     */
    metadata?: ScriptUpdateParams.Variant0.Metadata;
  }

  export namespace Variant0 {
    /**
     * JSON encoded metadata about the uploaded parts and Worker configuration.
     */
    export interface Metadata {
      /**
       * List of bindings available to the worker.
       */
      bindings?: Array<unknown>;

      /**
       * Name of the part in the multipart request that contains the script (e.g. the
       * file adding a listener to the `fetch` event). Indicates a
       * `service worker syntax` Worker.
       */
      body_part?: string;

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
       * Whether Logpush is turned on for the Worker.
       */
      logpush?: boolean;

      /**
       * Name of the part in the multipart request that contains the main module (e.g.
       * the file exporting a `fetch` handler). Indicates a `module syntax` Worker.
       */
      main_module?: string;

      /**
       * Migrations to apply for Durable Objects associated with this Worker.
       */
      migrations?: WorkersAPI.SingleStepMigration | WorkersAPI.SteppedMigration;

      placement?: WorkersAPI.PlacementConfiguration;

      /**
       * List of strings to use as tags for this Worker
       */
      tags?: Array<string>;

      /**
       * List of Workers that will consume logs from the attached Worker.
       */
      tail_consumers?: Array<TailAPI.ConsumerScriptItem>;

      /**
       * Usage model to apply to invocations.
       */
      usage_model?: 'bundled' | 'unbound';

      /**
       * Key-value pairs to use as tags for this version of this Worker
       */
      version_tags?: unknown;
    }
  }

  export interface Variant1 {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Query param: Rollback to provided deployment based on deployment ID. Request
     * body will only parse a "message" part. You can learn more about deployments
     * [here](https://developers.cloudflare.com/workers/platform/deployments/).
     */
    rollback_to?: string;

    /**
     * Body param: Rollback message to be associated with this deployment. Only parsed
     * when query param `"rollback_to"` is present.
     */
    message?: string;
  }
}

export interface ScriptListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ScriptDeleteParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;

  /**
   * Query param: If set to true, delete will not be stopped by associated service
   * binding, durable object, or other binding. Any of these associated
   * bindings/durable objects will be deleted along with the script.
   */
  force?: boolean;
}

export interface ScriptGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Scripts {
  export import BindingItem = ScriptsAPI.BindingItem;
  export import CompatibilityFlagsItem = ScriptsAPI.CompatibilityFlagsItem;
  export import Script = ScriptsAPI.Script;
  export import Setting = ScriptsAPI.Setting;
  export import SettingsItem = ScriptsAPI.SettingsItem;
  export import TagsItem = ScriptsAPI.TagsItem;
  export import ScriptsSinglePage = ScriptsAPI.ScriptsSinglePage;
  export import ScriptUpdateParams = ScriptsAPI.ScriptUpdateParams;
  export import ScriptListParams = ScriptsAPI.ScriptListParams;
  export import ScriptDeleteParams = ScriptsAPI.ScriptDeleteParams;
  export import ScriptGetParams = ScriptsAPI.ScriptGetParams;
  export import Bindings = BindingsAPI.Bindings;
  export import Binding = BindingsAPI.Binding;
  export import BindingGetResponse = BindingsAPI.BindingGetResponse;
  export import BindingGetParams = BindingsAPI.BindingGetParams;
  export import Schedules = SchedulesAPI.Schedules;
  export import UnnamedSchemaRefC8302c265937f9d6f96fd69644e56b26 = SchedulesAPI.UnnamedSchemaRefC8302c265937f9d6f96fd69644e56b26;
  export import ScheduleUpdateResponse = SchedulesAPI.ScheduleUpdateResponse;
  export import ScheduleGetResponse = SchedulesAPI.ScheduleGetResponse;
  export import ScheduleUpdateParams = SchedulesAPI.ScheduleUpdateParams;
  export import ScheduleGetParams = SchedulesAPI.ScheduleGetParams;
  export import Tail = TailAPI.Tail;
  export import ConsumerScript = TailAPI.ConsumerScript;
  export import ConsumerScriptItem = TailAPI.ConsumerScriptItem;
  export import TailCreateResponse = TailAPI.TailCreateResponse;
  export import TailGetResponse = TailAPI.TailGetResponse;
  export import TailCreateParams = TailAPI.TailCreateParams;
  export import TailDeleteParams = TailAPI.TailDeleteParams;
  export import TailGetParams = TailAPI.TailGetParams;
  export import UsageModel = UsageModelAPI.UsageModel;
  export import UsageModelUpdateResponse = UsageModelAPI.UsageModelUpdateResponse;
  export import UsageModelGetResponse = UsageModelAPI.UsageModelGetResponse;
  export import UsageModelUpdateParams = UsageModelAPI.UsageModelUpdateParams;
  export import UsageModelGetParams = UsageModelAPI.UsageModelGetParams;
  export import Content = ContentAPI.Content;
  export import ContentUpdateParams = ContentAPI.ContentUpdateParams;
  export import ContentGetParams = ContentAPI.ContentGetParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
  export import Deployments = DeploymentsAPI.Deployments;
  export import UnnamedSchemaRefFda1c6f6758e763ae3b2964521f2fdd8 = DeploymentsAPI.UnnamedSchemaRefFda1c6f6758e763ae3b2964521f2fdd8;
  export import DeploymentCreateResponse = DeploymentsAPI.DeploymentCreateResponse;
  export import DeploymentGetResponse = DeploymentsAPI.DeploymentGetResponse;
  export import DeploymentCreateParams = DeploymentsAPI.DeploymentCreateParams;
  export import DeploymentGetParams = DeploymentsAPI.DeploymentGetParams;
  export import Versions = VersionsAPI.Versions;
  export import VersionCreateResponse = VersionsAPI.VersionCreateResponse;
  export import VersionListResponse = VersionsAPI.VersionListResponse;
  export import VersionGetResponse = VersionsAPI.VersionGetResponse;
  export import VersionCreateParams = VersionsAPI.VersionCreateParams;
  export import VersionListParams = VersionsAPI.VersionListParams;
  export import VersionGetParams = VersionsAPI.VersionGetParams;
}
