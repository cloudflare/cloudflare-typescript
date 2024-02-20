// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { type Response } from 'cloudflare/_shims/index';
import * as ScriptsAPI from 'cloudflare/resources/workers/scripts/scripts';
import * as BindingsAPI from 'cloudflare/resources/workers/scripts/bindings';
import * as SchedulesAPI from 'cloudflare/resources/workers/scripts/schedules';
import * as TailAPI from 'cloudflare/resources/workers/scripts/tail';
import * as UsageModelAPI from 'cloudflare/resources/workers/scripts/usage-model';
import { type Uploadable, maybeMultipartFormRequestOptions } from 'cloudflare/core';

export class Scripts extends APIResource {
  bindings: BindingsAPI.Bindings = new BindingsAPI.Bindings(this._client);
  schedules: SchedulesAPI.Schedules = new SchedulesAPI.Schedules(this._client);
  tail: TailAPI.Tail = new TailAPI.Tail(this._client);
  usageModel: UsageModelAPI.UsageModel = new UsageModelAPI.UsageModel(this._client);

  /**
   * Fetch a list of uploaded workers.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<ScriptListResponse> {
    return (
      this._client.get(`/accounts/${accountId}/workers/scripts`, options) as Core.APIPromise<{
        result: ScriptListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete your worker. This call has no response body on a successful delete.
   */
  delete(
    accountId: string,
    scriptName: string,
    params: ScriptDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { force } = params;
    return this._client.delete(`/accounts/${accountId}/workers/scripts/${scriptName}`, {
      query: { force },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetch raw script content for your worker. Note this is the original script
   * content, not JSON encoded.
   */
  get(accountId: string, scriptName: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/accounts/${accountId}/workers/scripts/${scriptName}`, {
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Upload a worker module.
   */
  replace(
    accountId: string,
    scriptName: string,
    params: ScriptReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptReplaceResponse> {
    const { rollback_to, ...body } = params;
    return (
      this._client.put(
        `/accounts/${accountId}/workers/scripts/${scriptName}`,
        maybeMultipartFormRequestOptions({ query: { rollback_to }, body, ...options }),
      ) as Core.APIPromise<{ result: ScriptReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ScriptListResponse = Array<ScriptListResponse.ScriptListResponseItem>;

export namespace ScriptListResponse {
  export interface ScriptListResponseItem {
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
    tail_consumers?: Array<ScriptListResponseItem.TailConsumer>;

    /**
     * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
     */
    usage_model?: string;
  }

  export namespace ScriptListResponseItem {
    /**
     * A reference to a script that will consume logs from the attached Worker.
     */
    export interface TailConsumer {
      /**
       * Name of Worker that is to be the consumer.
       */
      service: string;

      /**
       * Optional environment if the Worker utilizes one.
       */
      environment?: string;

      /**
       * Optional dispatch namespace the script belongs to.
       */
      namespace?: string;
    }
  }
}

export interface ScriptReplaceResponse {
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
  tail_consumers?: Array<ScriptReplaceResponse.TailConsumer>;

  /**
   * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
   */
  usage_model?: string;
}

export namespace ScriptReplaceResponse {
  /**
   * A reference to a script that will consume logs from the attached Worker.
   */
  export interface TailConsumer {
    /**
     * Name of Worker that is to be the consumer.
     */
    service: string;

    /**
     * Optional environment if the Worker utilizes one.
     */
    environment?: string;

    /**
     * Optional dispatch namespace the script belongs to.
     */
    namespace?: string;
  }
}

export interface ScriptDeleteParams {
  /**
   * If set to true, delete will not be stopped by associated service binding,
   * durable object, or other binding. Any of these associated bindings/durable
   * objects will be deleted along with the script.
   */
  force?: boolean;
}

export type ScriptReplaceParams = ScriptReplaceParams.Variant0 | ScriptReplaceParams.Variant1;

export namespace ScriptReplaceParams {
  export interface Variant0 {
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
    metadata?: ScriptReplaceParams.Variant0.Metadata;
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
      migrations?: Metadata.WorkersSingleStepMigrations | Metadata.WorkersSteppedMigrations;

      placement?: Metadata.Placement;

      /**
       * List of strings to use as tags for this Worker
       */
      tags?: Array<string>;

      /**
       * List of Workers that will consume logs from the attached Worker.
       */
      tail_consumers?: Array<Metadata.TailConsumer>;

      /**
       * Usage model to apply to invocations.
       */
      usage_model?: 'bundled' | 'unbound';

      /**
       * Key-value pairs to use as tags for this version of this Worker
       */
      version_tags?: unknown;
    }

    export namespace Metadata {
      /**
       * A single set of migrations to apply.
       */
      export interface WorkersSingleStepMigrations {
        /**
         * A list of classes to delete Durable Object namespaces from.
         */
        deleted_classes?: Array<string>;

        /**
         * A list of classes to create Durable Object namespaces from.
         */
        new_classes?: Array<string>;

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
         * A list of classes with Durable Object namespaces that were renamed.
         */
        renamed_classes?: Array<WorkersSingleStepMigrations.RenamedClass>;

        /**
         * A list of transfers for Durable Object namespaces from a different Worker and
         * class to a class defined in this Worker.
         */
        transferred_classes?: Array<WorkersSingleStepMigrations.TransferredClass>;
      }

      export namespace WorkersSingleStepMigrations {
        export interface RenamedClass {
          from?: string;

          to?: string;
        }

        export interface TransferredClass {
          from?: string;

          from_script?: string;

          to?: string;
        }
      }

      export interface WorkersSteppedMigrations {
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
        steps?: Array<WorkersSteppedMigrations.Step>;
      }

      export namespace WorkersSteppedMigrations {
        export interface Step {
          /**
           * A list of classes to delete Durable Object namespaces from.
           */
          deleted_classes?: Array<string>;

          /**
           * A list of classes to create Durable Object namespaces from.
           */
          new_classes?: Array<string>;

          /**
           * A list of classes with Durable Object namespaces that were renamed.
           */
          renamed_classes?: Array<Step.RenamedClass>;

          /**
           * A list of transfers for Durable Object namespaces from a different Worker and
           * class to a class defined in this Worker.
           */
          transferred_classes?: Array<Step.TransferredClass>;
        }

        export namespace Step {
          export interface RenamedClass {
            from?: string;

            to?: string;
          }

          export interface TransferredClass {
            from?: string;

            from_script?: string;

            to?: string;
          }
        }
      }

      export interface Placement {
        /**
         * Enables
         * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
         * Only `"smart"` is currently supported
         */
        mode?: 'smart';
      }

      /**
       * A reference to a script that will consume logs from the attached Worker.
       */
      export interface TailConsumer {
        /**
         * Name of Worker that is to be the consumer.
         */
        service: string;

        /**
         * Optional environment if the Worker utilizes one.
         */
        environment?: string;

        /**
         * Optional dispatch namespace the script belongs to.
         */
        namespace?: string;
      }
    }
  }

  export interface Variant1 {
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

export namespace Scripts {
  export import ScriptListResponse = ScriptsAPI.ScriptListResponse;
  export import ScriptReplaceResponse = ScriptsAPI.ScriptReplaceResponse;
  export import ScriptDeleteParams = ScriptsAPI.ScriptDeleteParams;
  export import ScriptReplaceParams = ScriptsAPI.ScriptReplaceParams;
  export import Bindings = BindingsAPI.Bindings;
  export import BindingListResponse = BindingsAPI.BindingListResponse;
  export import Schedules = SchedulesAPI.Schedules;
  export import ScheduleListResponse = SchedulesAPI.ScheduleListResponse;
  export import ScheduleReplaceResponse = SchedulesAPI.ScheduleReplaceResponse;
  export import ScheduleReplaceParams = SchedulesAPI.ScheduleReplaceParams;
  export import Tail = TailAPI.Tail;
  export import TailCreateResponse = TailAPI.TailCreateResponse;
  export import TailListResponse = TailAPI.TailListResponse;
  export import TailDeleteResponse = TailAPI.TailDeleteResponse;
  export import UsageModel = UsageModelAPI.UsageModel;
  export import UsageModelGetResponse = UsageModelAPI.UsageModelGetResponse;
  export import UsageModelReplaceResponse = UsageModelAPI.UsageModelReplaceResponse;
  export import UsageModelReplaceParams = UsageModelAPI.UsageModelReplaceParams;
}
