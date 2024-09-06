// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ScriptsAPI from './scripts';
import * as WorkersAPI from '../workers';
import * as ContentAPI from './content';
import * as DeploymentsAPI from './deployments';
import * as SchedulesAPI from './schedules';
import * as SettingsAPI from './settings';
import * as TailAPI from './tail';
import * as VersionsAPI from './versions';
import { SinglePage } from '../../../pagination';
import { type Response } from '../../../_shims/index';

export class Scripts extends APIResource {
  schedules: SchedulesAPI.Schedules = new SchedulesAPI.Schedules(this._client);
  tail: TailAPI.Tail = new TailAPI.Tail(this._client);
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Upload a worker module. You can find more about the multipart metadata on our
   * docs:
   * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/.
   */
  update(
    scriptName: string,
    params: ScriptUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptUpdateResponse> {
    const { account_id, rollback_to, ...body } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/workers/scripts/${scriptName}`,
        Core.maybeMultipartFormRequestOptions({
          query: { rollback_to },
          body,
          ...options,
          headers: { 'Content-Type': 'application/javascript', ...options?.headers },
        }),
      ) as Core.APIPromise<{ result: ScriptUpdateResponse }>
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
    const { account_id, force } = params;
    return this._client.delete(`/accounts/${account_id}/workers/scripts/${scriptName}`, {
      query: { force },
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
   * Specifies the placement mode for the Worker (e.g. 'smart').
   */
  placement_mode?: string;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<TailAPI.ConsumerScript>;

  /**
   * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
   */
  usage_model?: string;
}

export interface ScriptSetting {
  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<TailAPI.ConsumerScript>;
}

export interface ScriptUpdateResponse {
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
   * Specifies the placement mode for the Worker (e.g. 'smart').
   */
  placement_mode?: string;

  startup_time_ms?: number;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<TailAPI.ConsumerScript>;

  /**
   * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
   */
  usage_model?: string;
}

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
     * `body_part` by part name. Source maps may also be included using the
     * `application/source-map` content type.
     */
    '<any part name>'?: Array<Core.Uploadable>;

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
      bindings?: Array<Metadata.Binding>;

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
      migrations?: WorkersAPI.SingleStepMigrationParam | WorkersAPI.SteppedMigrationParam;

      placement?: WorkersAPI.PlacementConfigurationParam;

      /**
       * List of strings to use as tags for this Worker
       */
      tags?: Array<string>;

      /**
       * List of Workers that will consume logs from the attached Worker.
       */
      tail_consumers?: Array<TailAPI.ConsumerScriptParam>;

      /**
       * Usage model to apply to invocations.
       */
      usage_model?: 'bundled' | 'unbound';

      /**
       * Key-value pairs to use as tags for this version of this Worker
       */
      version_tags?: Record<string, string>;
    }

    export namespace Metadata {
      export interface Binding {
        /**
         * Name of the binding variable.
         */
        name?: string;

        /**
         * Type of binding. You can find more about bindings on our docs:
         * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
         */
        type?: string;
        [k: string]: unknown;
      }
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
  export import Script = ScriptsAPI.Script;
  export import ScriptSetting = ScriptsAPI.ScriptSetting;
  export import ScriptUpdateResponse = ScriptsAPI.ScriptUpdateResponse;
  export import ScriptsSinglePage = ScriptsAPI.ScriptsSinglePage;
  export import ScriptUpdateParams = ScriptsAPI.ScriptUpdateParams;
  export import ScriptListParams = ScriptsAPI.ScriptListParams;
  export import ScriptDeleteParams = ScriptsAPI.ScriptDeleteParams;
  export import ScriptGetParams = ScriptsAPI.ScriptGetParams;
  export import Schedules = SchedulesAPI.Schedules;
  export import Schedule = SchedulesAPI.Schedule;
  export import ScheduleUpdateResponse = SchedulesAPI.ScheduleUpdateResponse;
  export import ScheduleGetResponse = SchedulesAPI.ScheduleGetResponse;
  export import ScheduleUpdateParams = SchedulesAPI.ScheduleUpdateParams;
  export import ScheduleGetParams = SchedulesAPI.ScheduleGetParams;
  export import Tail = TailAPI.Tail;
  export import ConsumerScript = TailAPI.ConsumerScript;
  export import TailCreateResponse = TailAPI.TailCreateResponse;
  export import TailDeleteResponse = TailAPI.TailDeleteResponse;
  export import TailGetResponse = TailAPI.TailGetResponse;
  export import TailCreateParams = TailAPI.TailCreateParams;
  export import TailDeleteParams = TailAPI.TailDeleteParams;
  export import TailGetParams = TailAPI.TailGetParams;
  export import Content = ContentAPI.Content;
  export import ContentUpdateParams = ContentAPI.ContentUpdateParams;
  export import ContentGetParams = ContentAPI.ContentGetParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
  export import Deployments = DeploymentsAPI.Deployments;
  export import Deployment = DeploymentsAPI.Deployment;
  export import DeploymentCreateResponse = DeploymentsAPI.DeploymentCreateResponse;
  export import DeploymentGetResponse = DeploymentsAPI.DeploymentGetResponse;
  export import DeploymentCreateParams = DeploymentsAPI.DeploymentCreateParams;
  export import DeploymentGetParams = DeploymentsAPI.DeploymentGetParams;
  export import Versions = VersionsAPI.Versions;
  export import VersionCreateResponse = VersionsAPI.VersionCreateResponse;
  export import VersionListResponse = VersionsAPI.VersionListResponse;
  export import VersionGetResponse = VersionsAPI.VersionGetResponse;
  export import VersionListResponsesV4PagePagination = VersionsAPI.VersionListResponsesV4PagePagination;
  export import VersionCreateParams = VersionsAPI.VersionCreateParams;
  export import VersionListParams = VersionsAPI.VersionListParams;
  export import VersionGetParams = VersionsAPI.VersionGetParams;
}
