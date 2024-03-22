// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/workers/scripts/settings';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Settings extends APIResource {
  /**
   * Patch script metadata or config, such as bindings or usage model
   */
  edit(
    scriptName: string,
    params: SettingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        `/accounts/${account_id}/workers/scripts/${scriptName}/settings`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: SettingEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get script metadata and config, such as bindings or usage model
   */
  get(
    scriptName: string,
    params: SettingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/settings`,
        options,
      ) as Core.APIPromise<{ result: SettingGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SettingEditResponse {
  /**
   * List of bindings attached to this Worker
   */
  bindings?: Array<
    | SettingEditResponse.WorkersKVNamespaceBinding
    | SettingEditResponse.WorkersServiceBinding
    | SettingEditResponse.WorkersDoBinding
    | SettingEditResponse.WorkersR2Binding
    | SettingEditResponse.WorkersQueueBinding
    | SettingEditResponse.WorkersD1Binding
    | SettingEditResponse.WorkersDispatchNamespaceBinding
    | SettingEditResponse.WorkersMTLSCERTBinding
  >;

  /**
   * Opt your Worker into changes after this date
   */
  compatibility_date?: string;

  /**
   * Opt your Worker into specific changes
   */
  compatibility_flags?: Array<string>;

  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * Migrations to apply for Durable Objects associated with this Worker.
   */
  migrations?: SettingEditResponse.WorkersSingleStepMigrations | SettingEditResponse.WorkersSteppedMigrations;

  placement?: SettingEditResponse.Placement;

  /**
   * Tags to help you manage your Workers
   */
  tags?: Array<string>;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<SettingEditResponse.TailConsumer>;

  /**
   * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
   */
  usage_model?: string;
}

export namespace SettingEditResponse {
  export interface WorkersKVNamespaceBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Namespace identifier tag.
     */
    namespace_id: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'kv_namespace';
  }

  export interface WorkersServiceBinding {
    /**
     * Optional environment if the Worker utilizes one.
     */
    environment: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Name of Worker to bind to
     */
    service: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'service';
  }

  export interface WorkersDoBinding {
    /**
     * The exported class name of the Durable Object
     */
    class_name: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'durable_object_namespace';

    /**
     * The environment of the script_name to bind to
     */
    environment?: string;

    /**
     * Namespace identifier tag.
     */
    namespace_id?: string;

    /**
     * The script where the Durable Object is defined, if it is external to this Worker
     */
    script_name?: string;
  }

  export interface WorkersR2Binding {
    /**
     * R2 bucket to bind to
     */
    bucket_name: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'r2_bucket';
  }

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

  export interface WorkersD1Binding {
    /**
     * ID of the D1 database to bind to
     */
    id: string;

    /**
     * A JavaScript variable name for the binding.
     */
    binding: string;

    /**
     * The name of the D1 database associated with the 'id' provided.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'd1';
  }

  export interface WorkersDispatchNamespaceBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Namespace to bind to
     */
    namespace: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'dispatch_namespace';

    /**
     * Outbound worker
     */
    outbound?: WorkersDispatchNamespaceBinding.Outbound;
  }

  export namespace WorkersDispatchNamespaceBinding {
    /**
     * Outbound worker
     */
    export interface Outbound {
      /**
       * Pass information from the Dispatch Worker to the Outbound Worker through the
       * parameters
       */
      params?: Array<string>;

      /**
       * Outbound worker
       */
      worker?: Outbound.Worker;
    }

    export namespace Outbound {
      /**
       * Outbound worker
       */
      export interface Worker {
        /**
         * Environment of the outbound worker
         */
        environment?: string;

        /**
         * Name of the outbound worker
         */
        service?: string;
      }
    }
  }

  export interface WorkersMTLSCERTBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'mtls_certificate';

    /**
     * ID of the certificate to bind to
     */
    certificate_id?: string;
  }

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

export interface SettingGetResponse {
  /**
   * List of bindings attached to this Worker
   */
  bindings?: Array<
    | SettingGetResponse.WorkersKVNamespaceBinding
    | SettingGetResponse.WorkersServiceBinding
    | SettingGetResponse.WorkersDoBinding
    | SettingGetResponse.WorkersR2Binding
    | SettingGetResponse.WorkersQueueBinding
    | SettingGetResponse.WorkersD1Binding
    | SettingGetResponse.WorkersDispatchNamespaceBinding
    | SettingGetResponse.WorkersMTLSCERTBinding
  >;

  /**
   * Opt your Worker into changes after this date
   */
  compatibility_date?: string;

  /**
   * Opt your Worker into specific changes
   */
  compatibility_flags?: Array<string>;

  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * Migrations to apply for Durable Objects associated with this Worker.
   */
  migrations?: SettingGetResponse.WorkersSingleStepMigrations | SettingGetResponse.WorkersSteppedMigrations;

  placement?: SettingGetResponse.Placement;

  /**
   * Tags to help you manage your Workers
   */
  tags?: Array<string>;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<SettingGetResponse.TailConsumer>;

  /**
   * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
   */
  usage_model?: string;
}

export namespace SettingGetResponse {
  export interface WorkersKVNamespaceBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Namespace identifier tag.
     */
    namespace_id: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'kv_namespace';
  }

  export interface WorkersServiceBinding {
    /**
     * Optional environment if the Worker utilizes one.
     */
    environment: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Name of Worker to bind to
     */
    service: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'service';
  }

  export interface WorkersDoBinding {
    /**
     * The exported class name of the Durable Object
     */
    class_name: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'durable_object_namespace';

    /**
     * The environment of the script_name to bind to
     */
    environment?: string;

    /**
     * Namespace identifier tag.
     */
    namespace_id?: string;

    /**
     * The script where the Durable Object is defined, if it is external to this Worker
     */
    script_name?: string;
  }

  export interface WorkersR2Binding {
    /**
     * R2 bucket to bind to
     */
    bucket_name: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'r2_bucket';
  }

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

  export interface WorkersD1Binding {
    /**
     * ID of the D1 database to bind to
     */
    id: string;

    /**
     * A JavaScript variable name for the binding.
     */
    binding: string;

    /**
     * The name of the D1 database associated with the 'id' provided.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'd1';
  }

  export interface WorkersDispatchNamespaceBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Namespace to bind to
     */
    namespace: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'dispatch_namespace';

    /**
     * Outbound worker
     */
    outbound?: WorkersDispatchNamespaceBinding.Outbound;
  }

  export namespace WorkersDispatchNamespaceBinding {
    /**
     * Outbound worker
     */
    export interface Outbound {
      /**
       * Pass information from the Dispatch Worker to the Outbound Worker through the
       * parameters
       */
      params?: Array<string>;

      /**
       * Outbound worker
       */
      worker?: Outbound.Worker;
    }

    export namespace Outbound {
      /**
       * Outbound worker
       */
      export interface Worker {
        /**
         * Environment of the outbound worker
         */
        environment?: string;

        /**
         * Name of the outbound worker
         */
        service?: string;
      }
    }
  }

  export interface WorkersMTLSCERTBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'mtls_certificate';

    /**
     * ID of the certificate to bind to
     */
    certificate_id?: string;
  }

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
    errors: Array<Settings.Error>;

    messages: Array<Settings.Message>;

    result: Settings.Result;

    /**
     * Whether the API call was successful
     */
    success: true;
  }

  export namespace Settings {
    export interface Error {
      code: number;

      message: string;
    }

    export interface Message {
      code: number;

      message: string;
    }

    export interface Result {
      /**
       * List of bindings attached to this Worker
       */
      bindings?: Array<
        | Result.WorkersKVNamespaceBinding
        | Result.WorkersServiceBinding
        | Result.WorkersDoBinding
        | Result.WorkersR2Binding
        | Result.WorkersQueueBinding
        | Result.WorkersD1Binding
        | Result.WorkersDispatchNamespaceBinding
        | Result.WorkersMTLSCERTBinding
      >;

      /**
       * Opt your Worker into changes after this date
       */
      compatibility_date?: string;

      /**
       * Opt your Worker into specific changes
       */
      compatibility_flags?: Array<string>;

      /**
       * Whether Logpush is turned on for the Worker.
       */
      logpush?: boolean;

      /**
       * Migrations to apply for Durable Objects associated with this Worker.
       */
      migrations?: Result.WorkersSingleStepMigrations | Result.WorkersSteppedMigrations;

      placement?: Result.Placement;

      /**
       * Tags to help you manage your Workers
       */
      tags?: Array<string>;

      /**
       * List of Workers that will consume logs from the attached Worker.
       */
      tail_consumers?: Array<Result.TailConsumer>;

      /**
       * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
       */
      usage_model?: string;
    }

    export namespace Result {
      export interface WorkersKVNamespaceBinding {
        /**
         * The class of resource that the binding provides.
         */
        type: 'kv_namespace';
      }

      export interface WorkersServiceBinding {
        /**
         * Optional environment if the Worker utilizes one.
         */
        environment: string;

        /**
         * Name of Worker to bind to
         */
        service: string;

        /**
         * The class of resource that the binding provides.
         */
        type: 'service';
      }

      export interface WorkersDoBinding {
        /**
         * The exported class name of the Durable Object
         */
        class_name: string;

        /**
         * The class of resource that the binding provides.
         */
        type: 'durable_object_namespace';

        /**
         * The environment of the script_name to bind to
         */
        environment?: string;

        /**
         * The script where the Durable Object is defined, if it is external to this Worker
         */
        script_name?: string;
      }

      export interface WorkersR2Binding {
        /**
         * R2 bucket to bind to
         */
        bucket_name: string;

        /**
         * The class of resource that the binding provides.
         */
        type: 'r2_bucket';
      }

      export interface WorkersQueueBinding {
        /**
         * Name of the Queue to bind to
         */
        queue_name: string;

        /**
         * The class of resource that the binding provides.
         */
        type: 'queue';
      }

      export interface WorkersD1Binding {
        /**
         * ID of the D1 database to bind to
         */
        id: string;

        /**
         * The name of the D1 database associated with the 'id' provided.
         */
        name: string;

        /**
         * The class of resource that the binding provides.
         */
        type: 'd1';
      }

      export interface WorkersDispatchNamespaceBinding {
        /**
         * Namespace to bind to
         */
        namespace: string;

        /**
         * The class of resource that the binding provides.
         */
        type: 'dispatch_namespace';

        /**
         * Outbound worker
         */
        outbound?: WorkersDispatchNamespaceBinding.Outbound;
      }

      export namespace WorkersDispatchNamespaceBinding {
        /**
         * Outbound worker
         */
        export interface Outbound {
          /**
           * Pass information from the Dispatch Worker to the Outbound Worker through the
           * parameters
           */
          params?: Array<string>;

          /**
           * Outbound worker
           */
          worker?: Outbound.Worker;
        }

        export namespace Outbound {
          /**
           * Outbound worker
           */
          export interface Worker {
            /**
             * Environment of the outbound worker
             */
            environment?: string;

            /**
             * Name of the outbound worker
             */
            service?: string;
          }
        }
      }

      export interface WorkersMTLSCERTBinding {
        /**
         * The class of resource that the binding provides.
         */
        type: 'mtls_certificate';

        /**
         * ID of the certificate to bind to
         */
        certificate_id?: string;
      }

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
}

export interface SettingGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Settings {
  export import SettingEditResponse = SettingsAPI.SettingEditResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
}
