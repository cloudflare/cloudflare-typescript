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
   * Upload a worker module.
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
        maybeMultipartFormRequestOptions({ query: { rollback_to }, body, ...options }),
      ) as Core.APIPromise<{ result: ScriptUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a list of uploaded workers.
   */
  list(params: ScriptListParams, options?: Core.RequestOptions): Core.APIPromise<ScriptListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/workers/scripts`, options) as Core.APIPromise<{
        result: ScriptListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
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
  tail_consumers?: Array<ScriptUpdateResponse.TailConsumer>;

  /**
   * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
   */
  usage_model?: string;
}

export namespace ScriptUpdateResponse {
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

export interface ScriptUpdateParams {
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
   * Body param: Rollback message to be associated with this deployment. Only parsed
   * when query param `"rollback_to"` is present.
   */
  message?: string;

  /**
   * Body param: JSON encoded metadata about the uploaded parts and Worker
   * configuration.
   */
  metadata?: ScriptUpdateParams.Metadata;
}

export namespace ScriptUpdateParams {
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
  export import ScriptUpdateResponse = ScriptsAPI.ScriptUpdateResponse;
  export import ScriptListResponse = ScriptsAPI.ScriptListResponse;
  export import ScriptUpdateParams = ScriptsAPI.ScriptUpdateParams;
  export import ScriptListParams = ScriptsAPI.ScriptListParams;
  export import ScriptDeleteParams = ScriptsAPI.ScriptDeleteParams;
  export import ScriptGetParams = ScriptsAPI.ScriptGetParams;
  export import Bindings = BindingsAPI.Bindings;
  export import BindingListResponse = BindingsAPI.BindingListResponse;
  export import BindingListParams = BindingsAPI.BindingListParams;
  export import Schedules = SchedulesAPI.Schedules;
  export import ScheduleUpdateResponse = SchedulesAPI.ScheduleUpdateResponse;
  export import ScheduleListResponse = SchedulesAPI.ScheduleListResponse;
  export import ScheduleUpdateParams = SchedulesAPI.ScheduleUpdateParams;
  export import ScheduleListParams = SchedulesAPI.ScheduleListParams;
  export import Tail = TailAPI.Tail;
  export import TailCreateResponse = TailAPI.TailCreateResponse;
  export import TailListResponse = TailAPI.TailListResponse;
  export import TailDeleteResponse = TailAPI.TailDeleteResponse;
  export import TailCreateParams = TailAPI.TailCreateParams;
  export import TailListParams = TailAPI.TailListParams;
  export import TailDeleteParams = TailAPI.TailDeleteParams;
  export import UsageModel = UsageModelAPI.UsageModel;
  export import UsageModelUpdateResponse = UsageModelAPI.UsageModelUpdateResponse;
  export import UsageModelGetResponse = UsageModelAPI.UsageModelGetResponse;
  export import UsageModelUpdateParams = UsageModelAPI.UsageModelUpdateParams;
  export import UsageModelGetParams = UsageModelAPI.UsageModelGetParams;
}
