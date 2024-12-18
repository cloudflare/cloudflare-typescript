// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import * as WorkersAPI from '../../../../workers/workers';
import * as ScriptsAPI from '../../../../workers/scripts/scripts';
import * as TailAPI from '../../../../workers/scripts/tail';
import * as BindingsAPI from './bindings';
import { BindingGetParams, BindingGetResponse, Bindings } from './bindings';
import * as ContentAPI from './content';
import { Content, ContentGetParams, ContentUpdateParams } from './content';
import * as SecretsAPI from './secrets';
import {
  SecretGetParams,
  SecretGetResponse,
  SecretListParams,
  SecretListResponse,
  SecretListResponsesSinglePage,
  SecretUpdateParams,
  SecretUpdateResponse,
  Secrets,
  WorkersSecretModel,
} from './secrets';
import * as SettingsAPI from './settings';
import {
  SettingEditParams,
  SettingEditResponse,
  SettingGetParams,
  SettingGetResponse,
  Settings,
} from './settings';
import * as TagsAPI from './tags';
import {
  TagDeleteParams,
  TagDeleteResponse,
  TagListParams,
  TagListResponse,
  TagListResponsesSinglePage,
  TagUpdateParams,
  TagUpdateResponse,
  Tags,
} from './tags';

export class Scripts extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  bindings: BindingsAPI.Bindings = new BindingsAPI.Bindings(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  /**
   * Upload a worker module to a Workers for Platforms namespace. You can find more
   * about the multipart metadata on our docs:
   * https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/.
   */
  update(
    dispatchNamespace: string,
    scriptName: string,
    params: ScriptUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}`,
        Core.maybeMultipartFormRequestOptions({
          body,
          ...options,
          headers: { 'Content-Type': 'application/javascript', ...options?.headers },
        }),
      ) as Core.APIPromise<{ result: ScriptUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a worker from a Workers for Platforms namespace. This call has no
   * response body on a successful delete.
   */
  delete(
    dispatchNamespace: string,
    scriptName: string,
    params: ScriptDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id, force } = params;
    return this._client.delete(
      `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}`,
      { query: { force }, ...options, headers: { Accept: '*/*', ...options?.headers } },
    );
  }

  /**
   * Fetch information about a script uploaded to a Workers for Platforms namespace.
   */
  get(
    dispatchNamespace: string,
    scriptName: string,
    params: ScriptGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Script> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}`,
        options,
      ) as Core.APIPromise<{ result: Script }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Details about a worker uploaded to a Workers for Platforms namespace.
 */
export interface Script {
  /**
   * When the script was created.
   */
  created_on?: string;

  /**
   * Name of the Workers for Platforms dispatch namespace.
   */
  dispatch_namespace?: string;

  /**
   * When the script was last modified.
   */
  modified_on?: string;

  script?: ScriptsAPI.Script;
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
   * Whether a Worker contains assets.
   */
  has_assets?: boolean;

  /**
   * Whether a Worker contains modules.
   */
  has_modules?: boolean;

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
   * Usage model for the Worker invocations.
   */
  usage_model?: 'bundled' | 'unbound';
}

export type ScriptUpdateParams = ScriptUpdateParams.Variant0 | ScriptUpdateParams.Variant1;

export namespace ScriptUpdateParams {
  export interface Variant0 {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param: JSON encoded metadata about the uploaded parts and Worker
     * configuration.
     */
    metadata: ScriptUpdateParams.Variant0.Metadata;
  }

  export namespace Variant0 {
    /**
     * JSON encoded metadata about the uploaded parts and Worker configuration.
     */
    export interface Metadata {
      /**
       * Configuration for assets within a Worker
       */
      assets?: Metadata.Assets;

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
       * Retain assets which exist for a previously uploaded Worker version; used in lieu
       * of providing a completion token.
       */
      keep_assets?: boolean;

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
      migrations?: WorkersAPI.SingleStepMigrationParam | Metadata.WorkersMultipleStepMigrations;

      /**
       * Observability settings for the Worker.
       */
      observability?: Metadata.Observability;

      placement?: WorkersAPI.PlacementConfigurationParam;

      /**
       * List of strings to use as tags for this Worker.
       */
      tags?: Array<string>;

      /**
       * List of Workers that will consume logs from the attached Worker.
       */
      tail_consumers?: Array<TailAPI.ConsumerScriptParam>;

      /**
       * Usage model for the Worker invocations.
       */
      usage_model?: 'bundled' | 'unbound';

      /**
       * Key-value pairs to use as tags for this version of this Worker.
       */
      version_tags?: Record<string, string>;
    }

    export namespace Metadata {
      /**
       * Configuration for assets within a Worker
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
           * When true and the incoming request matches an asset, that will be served instead
           * of invoking the Worker script. When false, requests will always invoke the
           * Worker script.
           */
          serve_directly?: boolean;
        }
      }

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
    }
  }

  export interface Variant1 {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param: Rollback message to be associated with this deployment. Only parsed
     * when query param `"rollback_to"` is present.
     */
    message?: string;
  }
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

Scripts.Content = Content;
Scripts.Settings = Settings;
Scripts.Bindings = Bindings;
Scripts.Secrets = Secrets;
Scripts.SecretListResponsesSinglePage = SecretListResponsesSinglePage;
Scripts.Tags = Tags;
Scripts.TagListResponsesSinglePage = TagListResponsesSinglePage;

export declare namespace Scripts {
  export {
    type Script as Script,
    type ScriptUpdateResponse as ScriptUpdateResponse,
    type ScriptUpdateParams as ScriptUpdateParams,
    type ScriptDeleteParams as ScriptDeleteParams,
    type ScriptGetParams as ScriptGetParams,
  };

  export {
    Content as Content,
    type ContentUpdateParams as ContentUpdateParams,
    type ContentGetParams as ContentGetParams,
  };

  export {
    Settings as Settings,
    type SettingEditResponse as SettingEditResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingEditParams as SettingEditParams,
    type SettingGetParams as SettingGetParams,
  };

  export {
    Bindings as Bindings,
    type BindingGetResponse as BindingGetResponse,
    type BindingGetParams as BindingGetParams,
  };

  export {
    Secrets as Secrets,
    type WorkersSecretModel as WorkersSecretModel,
    type SecretUpdateResponse as SecretUpdateResponse,
    type SecretListResponse as SecretListResponse,
    type SecretGetResponse as SecretGetResponse,
    SecretListResponsesSinglePage as SecretListResponsesSinglePage,
    type SecretUpdateParams as SecretUpdateParams,
    type SecretListParams as SecretListParams,
    type SecretGetParams as SecretGetParams,
  };

  export {
    Tags as Tags,
    type TagUpdateResponse as TagUpdateResponse,
    type TagListResponse as TagListResponse,
    type TagDeleteResponse as TagDeleteResponse,
    TagListResponsesSinglePage as TagListResponsesSinglePage,
    type TagUpdateParams as TagUpdateParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
  };
}
