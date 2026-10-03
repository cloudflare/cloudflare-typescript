// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InstancesAPI from './instances';
import {
  BaseInstances,
  InstanceGetParams,
  InstanceGetResponse,
  InstanceListParams,
  InstanceListResponse,
  InstanceListResponsesPageTokenPagination,
  InstanceListV1Params,
  InstanceListV1Response,
  InstanceListV1ResponsesContainersInstancesV1Pagination,
  Instances as InstancesAPIInstances,
} from './instances';
import * as RolloutsAPI from './rollouts';
import { BaseRollouts, RolloutCreateParams, RolloutCreateResponse, Rollouts } from './rollouts';
import * as VersionsAPI from './versions';
import {
  BaseVersions,
  VersionListParams,
  VersionListResponse,
  VersionListResponsesSinglePage,
  Versions,
} from './versions';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, PageTokenPagination, type PageTokenPaginationParams } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseApplications extends APIResource {
  static override readonly _key: readonly ['containers', 'applications'] = Object.freeze([
    'containers',
    'applications',
  ] as const);

  /**
   * Create a Containers application.
   *
   * Use `scheduling_policy: "default"` for a scheduler-backed application. The
   * Containers scheduler maintains the requested instance count and manages
   * deployment configuration, placement, scaling, versions, and rollouts.
   *
   * Use `scheduling_policy: "durable_object"` for a Durable Object-managed
   * application. Each Durable Object creates and manages the lifecycle of its
   * container instance. Supply `name`, `scheduling_policy`, and `durable_objects`,
   * with optional `configuration` and optional top-level `observability` settings.
   * Deployment configuration, scaling, constraints, versions, and rollouts do not
   * apply.
   *
   * @example
   * ```ts
   * const application =
   *   await client.containers.applications.create({
   *     account_id: 'account-123',
   *     configuration: { image: 'image' },
   *     instances: 0,
   *     max_instances: 0,
   *     name: 'name',
   *     scheduling_policy: 'default',
   *   });
   * ```
   */
  create(params: ApplicationCreateParams, options?: RequestOptions): APIPromise<ApplicationCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/containers/applications`, {
        body,
        ...options,
      }) as APIPromise<{ result: ApplicationCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all the applications that are associated with your account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const applicationListResponse of client.containers.applications.list(
   *   { account_id: 'account-123' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ApplicationListParams,
    options?: RequestOptions,
  ): PagePromise<ApplicationListResponsesPageTokenPagination, ApplicationListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/containers/applications`,
      PageTokenPagination<ApplicationListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes a single application by id.
   *
   * @example
   * ```ts
   * const application =
   *   await client.containers.applications.delete(
   *     'application_id',
   *     { account_id: 'account-123' },
   *   );
   * ```
   */
  delete(
    applicationID: string,
    params: ApplicationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ApplicationDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/containers/applications/${applicationID}`,
        options,
      ) as APIPromise<{ result: ApplicationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modifies a single application by id. Durable Object-managed application settings
   * are published to runtime metadata without creating deployments or rollouts.
   * Top-level `observability` for these applications supports only `logs.enabled`.
   * The supported fields depend on the existing application's scheduling policy. For
   * scheduler-backed applications, changes that replace instance deployment
   * configuration, including the image, require a rollout.
   *
   * @example
   * ```ts
   * const response = await client.containers.applications.edit(
   *   'application_id',
   *   { account_id: 'account-123' },
   * );
   * ```
   */
  edit(
    applicationID: string,
    params: ApplicationEditParams,
    options?: RequestOptions,
  ): APIPromise<ApplicationEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/containers/applications/${applicationID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: ApplicationEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a single application by id.
   *
   * @example
   * ```ts
   * const application =
   *   await client.containers.applications.get(
   *     'application_id',
   *     { account_id: 'account-123' },
   *   );
   * ```
   */
  get(
    applicationID: string,
    params: ApplicationGetParams,
    options?: RequestOptions,
  ): APIPromise<ApplicationGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/containers/applications/${applicationID}`,
        options,
      ) as APIPromise<{ result: ApplicationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Applications extends BaseApplications {
  instances: InstancesAPI.Instances = new InstancesAPI.Instances(this._client);
  rollouts: RolloutsAPI.Rollouts = new RolloutsAPI.Rollouts(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
}

export type ApplicationListResponsesPageTokenPagination = PageTokenPagination<ApplicationListResponse>;

/**
 * The public Containers API returns an application.
 */
export type ApplicationCreateResponse =
  | ApplicationCreateResponse.CcScheduledApplication
  | ApplicationCreateResponse.CcDurableObjectApplication;

export namespace ApplicationCreateResponse {
  /**
   * Describes an application and the parameters that govern how it places its
   * instances.
   */
  export interface CcScheduledApplication {
    /**
     * An Application ID represents an identifier of an application.
     */
    id: string;

    /**
     * A unique identifier for the user's account.
     */
    account_id: string;

    /**
     * User-specified container configuration.
     */
    configuration: CcScheduledApplication.Configuration;

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    created_at: string;

    /**
     * Number of deployments to create.
     */
    instances: number;

    /**
     * The application name.
     */
    name: string;

    /**
     * The scheduling policy to use for an application.
     */
    scheduling_policy: 'default' | 'durable_object';

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    updated_at: string;

    version: number;

    /**
     * An identifier for a specific rollout within an application.
     */
    active_rollout_id?: string;

    constraints?: CcScheduledApplication.Constraints;

    /**
     * Durable object configuration stored on and returned from a Cloudchamber
     * application.
     */
    durable_objects?: CcScheduledApplication.DurableObjects;

    health?: CcScheduledApplication.Health;

    /**
     * Maximum number of instances the application allows. This is relevant for
     * applications that auto-scale.
     */
    max_instances?: number;

    /**
     * Top-level observability settings for the application. This field is mutually
     * exclusive with configuration.observability.
     */
    observability?: CcScheduledApplication.Observability;

    /**
     * Grace period for active instances to stay alive before becoming eligible for
     * shutdown signal due to a rollout, in seconds. Defaults to 0.
     */
    rollout_active_grace_period?: number;
  }

  export namespace CcScheduledApplication {
    /**
     * User-specified container configuration.
     */
    export interface Configuration {
      /**
       * Image url.
       */
      image: string;

      authorized_keys?: Array<Configuration.AuthorizedKey>;

      /**
       * The command that runs when the container starts, passed to the entrypoint. You
       * can override this at run-time. If you override only the command, it gets passed
       * to the default entrypoint specified in the image.
       */
      command?: Array<string>;

      /**
       * The entry point for the container, specifying the executable to run when the
       * container starts. You can override this at run-time. If you do, the default
       * command from the image is ignored. Specify both entrypoint and command at
       * run-time to completely replace the image defaults.
       */
      entrypoint?: Array<string>;

      /**
       * Container environment variables.
       */
      environment_variables?: Array<Configuration.EnvironmentVariable>;

      /**
       * The instance type configures vCPU, memory, and disk.
       *
       * - "lite": 1/16 vCPU, 256 MiB memory, 2 GB disk
       * - "basic": 1/4 vCPU, 1 GiB memory, 4 GB disk
       * - "standard-1": 1/2 vCPU, 4 GiB memory, 8 GB disk
       * - "standard-2": 1 vCPU, 6 GiB memory, 12 GB disk
       * - "standard-3": 2 vCPU, 8 GiB memory, 16 GB disk
       * - "standard-4": 4 vCPU, 12 GiB memory, 20 GB disk
       */
      instance_type?: 'lite' | 'basic' | 'standard-1' | 'standard-2' | 'standard-3' | 'standard-4';

      /**
       * Settings for deployment observability such as logging.
       */
      observability?: Configuration.Observability;
    }

    export namespace Configuration {
      /**
       * User-provided SSH public key.
       */
      export interface AuthorizedKey {
        /**
         * An SSH public key.
         */
        public_key: string;

        /**
         * Optional human readable name for this key.
         */
        name?: string;
      }

      /**
       * An environment variable with a value set.
       */
      export interface EnvironmentVariable {
        /**
         * An environment variable name.
         */
        name: string;

        /**
         * An environment variable value.
         */
        value: string;
      }

      /**
       * Settings for deployment observability such as logging.
       */
      export interface Observability {
        /**
         * Observability logging settings.
         */
        logs?: Observability.Logs;
      }

      export namespace Observability {
        /**
         * Observability logging settings.
         */
        export interface Logs {
          enabled?: boolean;
        }
      }
    }

    export interface Constraints {
      /**
       * Restricts placement to datacenters in the selected jurisdiction. Choose "eu",
       * "fedramp", or "us". When combined with regions, EU supports EEUR and WEUR while
       * FedRAMP and US support ENAM and WNAM.
       */
      jurisdiction?: string;

      regions?: Array<string>;
    }

    /**
     * Durable object configuration stored on and returned from a Cloudchamber
     * application.
     */
    export interface DurableObjects {
      /**
       * The namespace ID of the durable object namespace to use for this application.
       */
      namespace_id: string;
    }

    export interface Health {
      errors: Array<Health.Error>;

      /**
       * Shows a count of application instance states.
       */
      instances: Health.Instances;

      /**
       * High-level health assessment. Only populated for "new_instances" strategy. Based
       * on a sample of target-version instances rather than a full count.
       *
       * - "pending": Zero target-version instances exist yet.
       * - "healthy": Every sampled target-version instance reports running or active.
       * - "degraded": Some sampled instances remain starting or scheduling.
       * - "unhealthy": One or more sampled instances have failed.
       */
      summary?: 'healthy' | 'degraded' | 'unhealthy' | 'pending';
    }

    export namespace Health {
      export interface Error {
        /**
         * An event within a Placement or a Job.
         */
        event: Error.Event;

        /**
         * An instance ID represents an identifier of an instance configuration that
         * maintains an underlying placement.
         */
        instance_id: string;
      }

      export namespace Error {
        /**
         * An event within a Placement or a Job.
         */
        export interface Event {
          id: string;

          details: { [key: string]: unknown };

          message: string;

          /**
           * Name of the event that describes the kind event that happened.
           *
           * - SchedulerPlaced: It's the first event that creates a container placement. It
           *   happens when the Containers runtime was able to retrieve deployment resources
           *   and start verifying everything is correct.
           * - NetworkingIPAssigned: It's sent when the Containers runtime maps the IP to the
           *   container.
           * - VMStarted: It's sent when the Containers runtime starts the VM. The container
           *   might remain unhealthy at this point.
           * - ImagePulled: It's sent when the Containers runtime pulls the image
           *   successfully.
           * - ImagePullError: It's sent when the Containers runtime is having issues pulling
           *   the image. The message and details have more information on what happened for
           *   debugging.
           * - VMFailedToStart: It's sent when the Containers runtime was unable to boot the
           *   VM.
           * - VMStopping: It's sent when the scheduler is stopping the VM.
           * - VMStopped: It's sent when the VM finally exits.
           * - VMFailed: It's sent when the scheduling of the VM failed in the current
           *   location.
           * - RuntimeStartFailed: It's sent when the runtime hits an internal error.
           * - SSHStarted: It's sent when the container gains network connectivity and opens
           *   the SSH port. Containers only send this event when SSH keys exist.
           * - CheckUpdate: Sent when the status of a health or readiness check changes. This
           *   may also affect the health status of the placement.
           * - DurableObjectConnected: Sent when a durable object instance connects and gains
           *   control of the deployment. This event is only sent for durable object
           *   deployments. It is sent after VMStarted.
           * - ContainerStarted: It's sent when the container starts running.
           */
          name:
            | 'SchedulerPlaced'
            | 'NetworkingIPAssigned'
            | 'VMStarted'
            | 'ImagePulled'
            | 'ImagePullError'
            | 'VMFailedToStart'
            | 'NetworkingIPAssignmentFailed'
            | 'VMRunning'
            | 'VMStopping'
            | 'VMStopped'
            | 'VMFailed'
            | 'RuntimeStartFailed'
            | 'SSHStarted'
            | 'ServiceHealthUpdates'
            | 'CheckUpdate'
            | 'DurableObjectConnected'
            | 'ContainerStarted';

          statusChange: { [key: string]: unknown };

          /**
           * UTC timestamp string in ISO 8601 format.
           */
          time: string;

          type: 'Info' | 'Error' | 'Warn' | 'UserError' | 'SystemError';
        }
      }

      /**
       * Shows a count of application instance states.
       */
      export interface Instances {
        /**
         * Number of instances whose runtime reports the container as running
         * (container_status = "running"). This is a subset of the placements that remain
         * up: an instance that is already bound to a Durable Object and serving traffic is
         * counted under "assigned" until its container_status catches up to "running", so
         * container_status can briefly lag Durable Object attachment under churn. To
         * estimate running, Durable-Object-bound instances, sum "active" + "assigned"
         * rather than reading "active" alone.
         */
        active: number;

        /**
         * Number of instances bound to a Durable Object with a running placement whose
         * container_status remains behind "running". These count as live, serving
         * instances; "active" + "assigned" approximates the running, Durable-Object-bound
         * count.
         */
        assigned: number;
      }
    }

    /**
     * Top-level observability settings for the application. This field is mutually
     * exclusive with configuration.observability.
     */
    export interface Observability {
      /**
       * Observability logging settings.
       */
      logs?: Observability.Logs;
    }

    export namespace Observability {
      /**
       * Observability logging settings.
       */
      export interface Logs {
        enabled?: boolean;
      }
    }
  }

  /**
   * Each Durable Object creates and manages the lifecycle of its container instance.
   */
  export interface CcDurableObjectApplication {
    /**
     * An Application ID represents an identifier of an application.
     */
    id: string;

    /**
     * A unique identifier for the user's account.
     */
    account_id: string;

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    created_at: string;

    /**
     * Durable object configuration using a namespace ID.
     */
    durable_objects: CcDurableObjectApplication.DurableObjects;

    /**
     * The application name.
     */
    name: string;

    /**
     * Selects a Durable Object-managed application. Each Durable Object creates and
     * manages the lifecycle of its container instance. Configure application-wide
     * observability settings here. Deployment configuration, scaling, placement
     * constraints, versions, and rollouts do not apply.
     */
    scheduling_policy: 'durable_object';

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    updated_at: string;

    /**
     * Application-wide settings for a Durable Object-managed application.
     */
    configuration?: CcDurableObjectApplication.Configuration;

    /**
     * Aggregate current activity for the latest observed placement of each instance.
     * Runtime snapshots feed periodic background sweeps. Counts refresh after each
     * complete sweep. Instance listings retain their separate three-month history for
     * failure discovery.
     */
    health?: CcDurableObjectApplication.Health;

    /**
     * Application-wide logging settings for a Durable Object-managed application. The
     * application publishes these settings to its runtime metadata. Updating them does
     * not create a deployment or rollout.
     */
    observability?: CcDurableObjectApplication.Observability;
  }

  export namespace CcDurableObjectApplication {
    /**
     * Durable object configuration using a namespace ID.
     */
    export interface DurableObjects {
      /**
       * The namespace ID of the durable object namespace to use for this application.
       */
      namespace_id: string;
    }

    /**
     * Application-wide settings for a Durable Object-managed application.
     */
    export interface Configuration {
      authorized_keys?: Array<Configuration.AuthorizedKey>;

      /**
       * Configuration properties for connecting with SSH to a container using Wrangler.
       */
      wrangler_ssh?: Configuration.WranglerSSH;
    }

    export namespace Configuration {
      /**
       * User-provided SSH public key.
       */
      export interface AuthorizedKey {
        /**
         * An SSH public key.
         */
        public_key: string;

        /**
         * Optional human readable name for this key.
         */
        name?: string;
      }

      /**
       * Configuration properties for connecting with SSH to a container using Wrangler.
       */
      export interface WranglerSSH {
        enabled?: boolean;

        port?: number;
      }
    }

    /**
     * Aggregate current activity for the latest observed placement of each instance.
     * Runtime snapshots feed periodic background sweeps. Counts refresh after each
     * complete sweep. Instance listings retain their separate three-month history for
     * failure discovery.
     */
    export interface Health {
      /**
       * Counts of observed non-terminal instances.
       */
      instances: Health.Instances;

      /**
       * Present as pending until the first activity sweep completes; omitted afterward.
       */
      summary?: 'pending';
    }

    export namespace Health {
      /**
       * Counts of observed non-terminal instances.
       */
      export interface Instances {
        /**
         * Number of instances whose runtime reports running or stopping.
         */
        active: number;

        /**
         * Number of instances whose runtime reports starting.
         */
        starting: number;
      }
    }

    /**
     * Application-wide logging settings for a Durable Object-managed application. The
     * application publishes these settings to its runtime metadata. Updating them does
     * not create a deployment or rollout.
     */
    export interface Observability {
      /**
       * Application-wide logging settings.
       */
      logs?: Observability.Logs;
    }

    export namespace Observability {
      /**
       * Application-wide logging settings.
       */
      export interface Logs {
        enabled?: boolean;
      }
    }
  }
}

/**
 * The public Containers API returns an application.
 */
export type ApplicationListResponse =
  | ApplicationListResponse.CcScheduledApplication
  | ApplicationListResponse.CcDurableObjectApplication;

export namespace ApplicationListResponse {
  /**
   * Describes an application and the parameters that govern how it places its
   * instances.
   */
  export interface CcScheduledApplication {
    /**
     * An Application ID represents an identifier of an application.
     */
    id: string;

    /**
     * A unique identifier for the user's account.
     */
    account_id: string;

    /**
     * User-specified container configuration.
     */
    configuration: CcScheduledApplication.Configuration;

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    created_at: string;

    /**
     * Number of deployments to create.
     */
    instances: number;

    /**
     * The application name.
     */
    name: string;

    /**
     * The scheduling policy to use for an application.
     */
    scheduling_policy: 'default' | 'durable_object';

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    updated_at: string;

    version: number;

    /**
     * An identifier for a specific rollout within an application.
     */
    active_rollout_id?: string;

    constraints?: CcScheduledApplication.Constraints;

    /**
     * Durable object configuration stored on and returned from a Cloudchamber
     * application.
     */
    durable_objects?: CcScheduledApplication.DurableObjects;

    health?: CcScheduledApplication.Health;

    /**
     * Maximum number of instances the application allows. This is relevant for
     * applications that auto-scale.
     */
    max_instances?: number;

    /**
     * Top-level observability settings for the application. This field is mutually
     * exclusive with configuration.observability.
     */
    observability?: CcScheduledApplication.Observability;

    /**
     * Grace period for active instances to stay alive before becoming eligible for
     * shutdown signal due to a rollout, in seconds. Defaults to 0.
     */
    rollout_active_grace_period?: number;
  }

  export namespace CcScheduledApplication {
    /**
     * User-specified container configuration.
     */
    export interface Configuration {
      /**
       * Image url.
       */
      image: string;

      authorized_keys?: Array<Configuration.AuthorizedKey>;

      /**
       * The command that runs when the container starts, passed to the entrypoint. You
       * can override this at run-time. If you override only the command, it gets passed
       * to the default entrypoint specified in the image.
       */
      command?: Array<string>;

      /**
       * The entry point for the container, specifying the executable to run when the
       * container starts. You can override this at run-time. If you do, the default
       * command from the image is ignored. Specify both entrypoint and command at
       * run-time to completely replace the image defaults.
       */
      entrypoint?: Array<string>;

      /**
       * Container environment variables.
       */
      environment_variables?: Array<Configuration.EnvironmentVariable>;

      /**
       * The instance type configures vCPU, memory, and disk.
       *
       * - "lite": 1/16 vCPU, 256 MiB memory, 2 GB disk
       * - "basic": 1/4 vCPU, 1 GiB memory, 4 GB disk
       * - "standard-1": 1/2 vCPU, 4 GiB memory, 8 GB disk
       * - "standard-2": 1 vCPU, 6 GiB memory, 12 GB disk
       * - "standard-3": 2 vCPU, 8 GiB memory, 16 GB disk
       * - "standard-4": 4 vCPU, 12 GiB memory, 20 GB disk
       */
      instance_type?: 'lite' | 'basic' | 'standard-1' | 'standard-2' | 'standard-3' | 'standard-4';

      /**
       * Settings for deployment observability such as logging.
       */
      observability?: Configuration.Observability;
    }

    export namespace Configuration {
      /**
       * User-provided SSH public key.
       */
      export interface AuthorizedKey {
        /**
         * An SSH public key.
         */
        public_key: string;

        /**
         * Optional human readable name for this key.
         */
        name?: string;
      }

      /**
       * An environment variable with a value set.
       */
      export interface EnvironmentVariable {
        /**
         * An environment variable name.
         */
        name: string;

        /**
         * An environment variable value.
         */
        value: string;
      }

      /**
       * Settings for deployment observability such as logging.
       */
      export interface Observability {
        /**
         * Observability logging settings.
         */
        logs?: Observability.Logs;
      }

      export namespace Observability {
        /**
         * Observability logging settings.
         */
        export interface Logs {
          enabled?: boolean;
        }
      }
    }

    export interface Constraints {
      /**
       * Restricts placement to datacenters in the selected jurisdiction. Choose "eu",
       * "fedramp", or "us". When combined with regions, EU supports EEUR and WEUR while
       * FedRAMP and US support ENAM and WNAM.
       */
      jurisdiction?: string;

      regions?: Array<string>;
    }

    /**
     * Durable object configuration stored on and returned from a Cloudchamber
     * application.
     */
    export interface DurableObjects {
      /**
       * The namespace ID of the durable object namespace to use for this application.
       */
      namespace_id: string;
    }

    export interface Health {
      errors: Array<Health.Error>;

      /**
       * Shows a count of application instance states.
       */
      instances: Health.Instances;

      /**
       * High-level health assessment. Only populated for "new_instances" strategy. Based
       * on a sample of target-version instances rather than a full count.
       *
       * - "pending": Zero target-version instances exist yet.
       * - "healthy": Every sampled target-version instance reports running or active.
       * - "degraded": Some sampled instances remain starting or scheduling.
       * - "unhealthy": One or more sampled instances have failed.
       */
      summary?: 'healthy' | 'degraded' | 'unhealthy' | 'pending';
    }

    export namespace Health {
      export interface Error {
        /**
         * An event within a Placement or a Job.
         */
        event: Error.Event;

        /**
         * An instance ID represents an identifier of an instance configuration that
         * maintains an underlying placement.
         */
        instance_id: string;
      }

      export namespace Error {
        /**
         * An event within a Placement or a Job.
         */
        export interface Event {
          id: string;

          details: { [key: string]: unknown };

          message: string;

          /**
           * Name of the event that describes the kind event that happened.
           *
           * - SchedulerPlaced: It's the first event that creates a container placement. It
           *   happens when the Containers runtime was able to retrieve deployment resources
           *   and start verifying everything is correct.
           * - NetworkingIPAssigned: It's sent when the Containers runtime maps the IP to the
           *   container.
           * - VMStarted: It's sent when the Containers runtime starts the VM. The container
           *   might remain unhealthy at this point.
           * - ImagePulled: It's sent when the Containers runtime pulls the image
           *   successfully.
           * - ImagePullError: It's sent when the Containers runtime is having issues pulling
           *   the image. The message and details have more information on what happened for
           *   debugging.
           * - VMFailedToStart: It's sent when the Containers runtime was unable to boot the
           *   VM.
           * - VMStopping: It's sent when the scheduler is stopping the VM.
           * - VMStopped: It's sent when the VM finally exits.
           * - VMFailed: It's sent when the scheduling of the VM failed in the current
           *   location.
           * - RuntimeStartFailed: It's sent when the runtime hits an internal error.
           * - SSHStarted: It's sent when the container gains network connectivity and opens
           *   the SSH port. Containers only send this event when SSH keys exist.
           * - CheckUpdate: Sent when the status of a health or readiness check changes. This
           *   may also affect the health status of the placement.
           * - DurableObjectConnected: Sent when a durable object instance connects and gains
           *   control of the deployment. This event is only sent for durable object
           *   deployments. It is sent after VMStarted.
           * - ContainerStarted: It's sent when the container starts running.
           */
          name:
            | 'SchedulerPlaced'
            | 'NetworkingIPAssigned'
            | 'VMStarted'
            | 'ImagePulled'
            | 'ImagePullError'
            | 'VMFailedToStart'
            | 'NetworkingIPAssignmentFailed'
            | 'VMRunning'
            | 'VMStopping'
            | 'VMStopped'
            | 'VMFailed'
            | 'RuntimeStartFailed'
            | 'SSHStarted'
            | 'ServiceHealthUpdates'
            | 'CheckUpdate'
            | 'DurableObjectConnected'
            | 'ContainerStarted';

          statusChange: { [key: string]: unknown };

          /**
           * UTC timestamp string in ISO 8601 format.
           */
          time: string;

          type: 'Info' | 'Error' | 'Warn' | 'UserError' | 'SystemError';
        }
      }

      /**
       * Shows a count of application instance states.
       */
      export interface Instances {
        /**
         * Number of instances whose runtime reports the container as running
         * (container_status = "running"). This is a subset of the placements that remain
         * up: an instance that is already bound to a Durable Object and serving traffic is
         * counted under "assigned" until its container_status catches up to "running", so
         * container_status can briefly lag Durable Object attachment under churn. To
         * estimate running, Durable-Object-bound instances, sum "active" + "assigned"
         * rather than reading "active" alone.
         */
        active: number;

        /**
         * Number of instances bound to a Durable Object with a running placement whose
         * container_status remains behind "running". These count as live, serving
         * instances; "active" + "assigned" approximates the running, Durable-Object-bound
         * count.
         */
        assigned: number;
      }
    }

    /**
     * Top-level observability settings for the application. This field is mutually
     * exclusive with configuration.observability.
     */
    export interface Observability {
      /**
       * Observability logging settings.
       */
      logs?: Observability.Logs;
    }

    export namespace Observability {
      /**
       * Observability logging settings.
       */
      export interface Logs {
        enabled?: boolean;
      }
    }
  }

  /**
   * Each Durable Object creates and manages the lifecycle of its container instance.
   */
  export interface CcDurableObjectApplication {
    /**
     * An Application ID represents an identifier of an application.
     */
    id: string;

    /**
     * A unique identifier for the user's account.
     */
    account_id: string;

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    created_at: string;

    /**
     * Durable object configuration using a namespace ID.
     */
    durable_objects: CcDurableObjectApplication.DurableObjects;

    /**
     * The application name.
     */
    name: string;

    /**
     * Selects a Durable Object-managed application. Each Durable Object creates and
     * manages the lifecycle of its container instance. Configure application-wide
     * observability settings here. Deployment configuration, scaling, placement
     * constraints, versions, and rollouts do not apply.
     */
    scheduling_policy: 'durable_object';

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    updated_at: string;

    /**
     * Application-wide settings for a Durable Object-managed application.
     */
    configuration?: CcDurableObjectApplication.Configuration;

    /**
     * Aggregate current activity for the latest observed placement of each instance.
     * Runtime snapshots feed periodic background sweeps. Counts refresh after each
     * complete sweep. Instance listings retain their separate three-month history for
     * failure discovery.
     */
    health?: CcDurableObjectApplication.Health;

    /**
     * Application-wide logging settings for a Durable Object-managed application. The
     * application publishes these settings to its runtime metadata. Updating them does
     * not create a deployment or rollout.
     */
    observability?: CcDurableObjectApplication.Observability;
  }

  export namespace CcDurableObjectApplication {
    /**
     * Durable object configuration using a namespace ID.
     */
    export interface DurableObjects {
      /**
       * The namespace ID of the durable object namespace to use for this application.
       */
      namespace_id: string;
    }

    /**
     * Application-wide settings for a Durable Object-managed application.
     */
    export interface Configuration {
      authorized_keys?: Array<Configuration.AuthorizedKey>;

      /**
       * Configuration properties for connecting with SSH to a container using Wrangler.
       */
      wrangler_ssh?: Configuration.WranglerSSH;
    }

    export namespace Configuration {
      /**
       * User-provided SSH public key.
       */
      export interface AuthorizedKey {
        /**
         * An SSH public key.
         */
        public_key: string;

        /**
         * Optional human readable name for this key.
         */
        name?: string;
      }

      /**
       * Configuration properties for connecting with SSH to a container using Wrangler.
       */
      export interface WranglerSSH {
        enabled?: boolean;

        port?: number;
      }
    }

    /**
     * Aggregate current activity for the latest observed placement of each instance.
     * Runtime snapshots feed periodic background sweeps. Counts refresh after each
     * complete sweep. Instance listings retain their separate three-month history for
     * failure discovery.
     */
    export interface Health {
      /**
       * Counts of observed non-terminal instances.
       */
      instances: Health.Instances;

      /**
       * Present as pending until the first activity sweep completes; omitted afterward.
       */
      summary?: 'pending';
    }

    export namespace Health {
      /**
       * Counts of observed non-terminal instances.
       */
      export interface Instances {
        /**
         * Number of instances whose runtime reports running or stopping.
         */
        active: number;

        /**
         * Number of instances whose runtime reports starting.
         */
        starting: number;
      }
    }

    /**
     * Application-wide logging settings for a Durable Object-managed application. The
     * application publishes these settings to its runtime metadata. Updating them does
     * not create a deployment or rollout.
     */
    export interface Observability {
      /**
       * Application-wide logging settings.
       */
      logs?: Observability.Logs;
    }

    export namespace Observability {
      /**
       * Application-wide logging settings.
       */
      export interface Logs {
        enabled?: boolean;
      }
    }
  }
}

/**
 * Result of starting asynchronous deletion for a Containers application.
 */
export interface ApplicationDeleteResponse {
  message: string;
}

/**
 * The public Containers API returns an application.
 */
export type ApplicationEditResponse =
  | ApplicationEditResponse.CcScheduledApplication
  | ApplicationEditResponse.CcDurableObjectApplication;

export namespace ApplicationEditResponse {
  /**
   * Describes an application and the parameters that govern how it places its
   * instances.
   */
  export interface CcScheduledApplication {
    /**
     * An Application ID represents an identifier of an application.
     */
    id: string;

    /**
     * A unique identifier for the user's account.
     */
    account_id: string;

    /**
     * User-specified container configuration.
     */
    configuration: CcScheduledApplication.Configuration;

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    created_at: string;

    /**
     * Number of deployments to create.
     */
    instances: number;

    /**
     * The application name.
     */
    name: string;

    /**
     * The scheduling policy to use for an application.
     */
    scheduling_policy: 'default' | 'durable_object';

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    updated_at: string;

    version: number;

    /**
     * An identifier for a specific rollout within an application.
     */
    active_rollout_id?: string;

    constraints?: CcScheduledApplication.Constraints;

    /**
     * Durable object configuration stored on and returned from a Cloudchamber
     * application.
     */
    durable_objects?: CcScheduledApplication.DurableObjects;

    health?: CcScheduledApplication.Health;

    /**
     * Maximum number of instances the application allows. This is relevant for
     * applications that auto-scale.
     */
    max_instances?: number;

    /**
     * Top-level observability settings for the application. This field is mutually
     * exclusive with configuration.observability.
     */
    observability?: CcScheduledApplication.Observability;

    /**
     * Grace period for active instances to stay alive before becoming eligible for
     * shutdown signal due to a rollout, in seconds. Defaults to 0.
     */
    rollout_active_grace_period?: number;
  }

  export namespace CcScheduledApplication {
    /**
     * User-specified container configuration.
     */
    export interface Configuration {
      /**
       * Image url.
       */
      image: string;

      authorized_keys?: Array<Configuration.AuthorizedKey>;

      /**
       * The command that runs when the container starts, passed to the entrypoint. You
       * can override this at run-time. If you override only the command, it gets passed
       * to the default entrypoint specified in the image.
       */
      command?: Array<string>;

      /**
       * The entry point for the container, specifying the executable to run when the
       * container starts. You can override this at run-time. If you do, the default
       * command from the image is ignored. Specify both entrypoint and command at
       * run-time to completely replace the image defaults.
       */
      entrypoint?: Array<string>;

      /**
       * Container environment variables.
       */
      environment_variables?: Array<Configuration.EnvironmentVariable>;

      /**
       * The instance type configures vCPU, memory, and disk.
       *
       * - "lite": 1/16 vCPU, 256 MiB memory, 2 GB disk
       * - "basic": 1/4 vCPU, 1 GiB memory, 4 GB disk
       * - "standard-1": 1/2 vCPU, 4 GiB memory, 8 GB disk
       * - "standard-2": 1 vCPU, 6 GiB memory, 12 GB disk
       * - "standard-3": 2 vCPU, 8 GiB memory, 16 GB disk
       * - "standard-4": 4 vCPU, 12 GiB memory, 20 GB disk
       */
      instance_type?: 'lite' | 'basic' | 'standard-1' | 'standard-2' | 'standard-3' | 'standard-4';

      /**
       * Settings for deployment observability such as logging.
       */
      observability?: Configuration.Observability;
    }

    export namespace Configuration {
      /**
       * User-provided SSH public key.
       */
      export interface AuthorizedKey {
        /**
         * An SSH public key.
         */
        public_key: string;

        /**
         * Optional human readable name for this key.
         */
        name?: string;
      }

      /**
       * An environment variable with a value set.
       */
      export interface EnvironmentVariable {
        /**
         * An environment variable name.
         */
        name: string;

        /**
         * An environment variable value.
         */
        value: string;
      }

      /**
       * Settings for deployment observability such as logging.
       */
      export interface Observability {
        /**
         * Observability logging settings.
         */
        logs?: Observability.Logs;
      }

      export namespace Observability {
        /**
         * Observability logging settings.
         */
        export interface Logs {
          enabled?: boolean;
        }
      }
    }

    export interface Constraints {
      /**
       * Restricts placement to datacenters in the selected jurisdiction. Choose "eu",
       * "fedramp", or "us". When combined with regions, EU supports EEUR and WEUR while
       * FedRAMP and US support ENAM and WNAM.
       */
      jurisdiction?: string;

      regions?: Array<string>;
    }

    /**
     * Durable object configuration stored on and returned from a Cloudchamber
     * application.
     */
    export interface DurableObjects {
      /**
       * The namespace ID of the durable object namespace to use for this application.
       */
      namespace_id: string;
    }

    export interface Health {
      errors: Array<Health.Error>;

      /**
       * Shows a count of application instance states.
       */
      instances: Health.Instances;

      /**
       * High-level health assessment. Only populated for "new_instances" strategy. Based
       * on a sample of target-version instances rather than a full count.
       *
       * - "pending": Zero target-version instances exist yet.
       * - "healthy": Every sampled target-version instance reports running or active.
       * - "degraded": Some sampled instances remain starting or scheduling.
       * - "unhealthy": One or more sampled instances have failed.
       */
      summary?: 'healthy' | 'degraded' | 'unhealthy' | 'pending';
    }

    export namespace Health {
      export interface Error {
        /**
         * An event within a Placement or a Job.
         */
        event: Error.Event;

        /**
         * An instance ID represents an identifier of an instance configuration that
         * maintains an underlying placement.
         */
        instance_id: string;
      }

      export namespace Error {
        /**
         * An event within a Placement or a Job.
         */
        export interface Event {
          id: string;

          details: { [key: string]: unknown };

          message: string;

          /**
           * Name of the event that describes the kind event that happened.
           *
           * - SchedulerPlaced: It's the first event that creates a container placement. It
           *   happens when the Containers runtime was able to retrieve deployment resources
           *   and start verifying everything is correct.
           * - NetworkingIPAssigned: It's sent when the Containers runtime maps the IP to the
           *   container.
           * - VMStarted: It's sent when the Containers runtime starts the VM. The container
           *   might remain unhealthy at this point.
           * - ImagePulled: It's sent when the Containers runtime pulls the image
           *   successfully.
           * - ImagePullError: It's sent when the Containers runtime is having issues pulling
           *   the image. The message and details have more information on what happened for
           *   debugging.
           * - VMFailedToStart: It's sent when the Containers runtime was unable to boot the
           *   VM.
           * - VMStopping: It's sent when the scheduler is stopping the VM.
           * - VMStopped: It's sent when the VM finally exits.
           * - VMFailed: It's sent when the scheduling of the VM failed in the current
           *   location.
           * - RuntimeStartFailed: It's sent when the runtime hits an internal error.
           * - SSHStarted: It's sent when the container gains network connectivity and opens
           *   the SSH port. Containers only send this event when SSH keys exist.
           * - CheckUpdate: Sent when the status of a health or readiness check changes. This
           *   may also affect the health status of the placement.
           * - DurableObjectConnected: Sent when a durable object instance connects and gains
           *   control of the deployment. This event is only sent for durable object
           *   deployments. It is sent after VMStarted.
           * - ContainerStarted: It's sent when the container starts running.
           */
          name:
            | 'SchedulerPlaced'
            | 'NetworkingIPAssigned'
            | 'VMStarted'
            | 'ImagePulled'
            | 'ImagePullError'
            | 'VMFailedToStart'
            | 'NetworkingIPAssignmentFailed'
            | 'VMRunning'
            | 'VMStopping'
            | 'VMStopped'
            | 'VMFailed'
            | 'RuntimeStartFailed'
            | 'SSHStarted'
            | 'ServiceHealthUpdates'
            | 'CheckUpdate'
            | 'DurableObjectConnected'
            | 'ContainerStarted';

          statusChange: { [key: string]: unknown };

          /**
           * UTC timestamp string in ISO 8601 format.
           */
          time: string;

          type: 'Info' | 'Error' | 'Warn' | 'UserError' | 'SystemError';
        }
      }

      /**
       * Shows a count of application instance states.
       */
      export interface Instances {
        /**
         * Number of instances whose runtime reports the container as running
         * (container_status = "running"). This is a subset of the placements that remain
         * up: an instance that is already bound to a Durable Object and serving traffic is
         * counted under "assigned" until its container_status catches up to "running", so
         * container_status can briefly lag Durable Object attachment under churn. To
         * estimate running, Durable-Object-bound instances, sum "active" + "assigned"
         * rather than reading "active" alone.
         */
        active: number;

        /**
         * Number of instances bound to a Durable Object with a running placement whose
         * container_status remains behind "running". These count as live, serving
         * instances; "active" + "assigned" approximates the running, Durable-Object-bound
         * count.
         */
        assigned: number;
      }
    }

    /**
     * Top-level observability settings for the application. This field is mutually
     * exclusive with configuration.observability.
     */
    export interface Observability {
      /**
       * Observability logging settings.
       */
      logs?: Observability.Logs;
    }

    export namespace Observability {
      /**
       * Observability logging settings.
       */
      export interface Logs {
        enabled?: boolean;
      }
    }
  }

  /**
   * Each Durable Object creates and manages the lifecycle of its container instance.
   */
  export interface CcDurableObjectApplication {
    /**
     * An Application ID represents an identifier of an application.
     */
    id: string;

    /**
     * A unique identifier for the user's account.
     */
    account_id: string;

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    created_at: string;

    /**
     * Durable object configuration using a namespace ID.
     */
    durable_objects: CcDurableObjectApplication.DurableObjects;

    /**
     * The application name.
     */
    name: string;

    /**
     * Selects a Durable Object-managed application. Each Durable Object creates and
     * manages the lifecycle of its container instance. Configure application-wide
     * observability settings here. Deployment configuration, scaling, placement
     * constraints, versions, and rollouts do not apply.
     */
    scheduling_policy: 'durable_object';

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    updated_at: string;

    /**
     * Application-wide settings for a Durable Object-managed application.
     */
    configuration?: CcDurableObjectApplication.Configuration;

    /**
     * Aggregate current activity for the latest observed placement of each instance.
     * Runtime snapshots feed periodic background sweeps. Counts refresh after each
     * complete sweep. Instance listings retain their separate three-month history for
     * failure discovery.
     */
    health?: CcDurableObjectApplication.Health;

    /**
     * Application-wide logging settings for a Durable Object-managed application. The
     * application publishes these settings to its runtime metadata. Updating them does
     * not create a deployment or rollout.
     */
    observability?: CcDurableObjectApplication.Observability;
  }

  export namespace CcDurableObjectApplication {
    /**
     * Durable object configuration using a namespace ID.
     */
    export interface DurableObjects {
      /**
       * The namespace ID of the durable object namespace to use for this application.
       */
      namespace_id: string;
    }

    /**
     * Application-wide settings for a Durable Object-managed application.
     */
    export interface Configuration {
      authorized_keys?: Array<Configuration.AuthorizedKey>;

      /**
       * Configuration properties for connecting with SSH to a container using Wrangler.
       */
      wrangler_ssh?: Configuration.WranglerSSH;
    }

    export namespace Configuration {
      /**
       * User-provided SSH public key.
       */
      export interface AuthorizedKey {
        /**
         * An SSH public key.
         */
        public_key: string;

        /**
         * Optional human readable name for this key.
         */
        name?: string;
      }

      /**
       * Configuration properties for connecting with SSH to a container using Wrangler.
       */
      export interface WranglerSSH {
        enabled?: boolean;

        port?: number;
      }
    }

    /**
     * Aggregate current activity for the latest observed placement of each instance.
     * Runtime snapshots feed periodic background sweeps. Counts refresh after each
     * complete sweep. Instance listings retain their separate three-month history for
     * failure discovery.
     */
    export interface Health {
      /**
       * Counts of observed non-terminal instances.
       */
      instances: Health.Instances;

      /**
       * Present as pending until the first activity sweep completes; omitted afterward.
       */
      summary?: 'pending';
    }

    export namespace Health {
      /**
       * Counts of observed non-terminal instances.
       */
      export interface Instances {
        /**
         * Number of instances whose runtime reports running or stopping.
         */
        active: number;

        /**
         * Number of instances whose runtime reports starting.
         */
        starting: number;
      }
    }

    /**
     * Application-wide logging settings for a Durable Object-managed application. The
     * application publishes these settings to its runtime metadata. Updating them does
     * not create a deployment or rollout.
     */
    export interface Observability {
      /**
       * Application-wide logging settings.
       */
      logs?: Observability.Logs;
    }

    export namespace Observability {
      /**
       * Application-wide logging settings.
       */
      export interface Logs {
        enabled?: boolean;
      }
    }
  }
}

/**
 * The public Containers API returns an application.
 */
export type ApplicationGetResponse =
  | ApplicationGetResponse.CcScheduledApplication
  | ApplicationGetResponse.CcDurableObjectApplication;

export namespace ApplicationGetResponse {
  /**
   * Describes an application and the parameters that govern how it places its
   * instances.
   */
  export interface CcScheduledApplication {
    /**
     * An Application ID represents an identifier of an application.
     */
    id: string;

    /**
     * A unique identifier for the user's account.
     */
    account_id: string;

    /**
     * User-specified container configuration.
     */
    configuration: CcScheduledApplication.Configuration;

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    created_at: string;

    /**
     * Number of deployments to create.
     */
    instances: number;

    /**
     * The application name.
     */
    name: string;

    /**
     * The scheduling policy to use for an application.
     */
    scheduling_policy: 'default' | 'durable_object';

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    updated_at: string;

    version: number;

    /**
     * An identifier for a specific rollout within an application.
     */
    active_rollout_id?: string;

    constraints?: CcScheduledApplication.Constraints;

    /**
     * Durable object configuration stored on and returned from a Cloudchamber
     * application.
     */
    durable_objects?: CcScheduledApplication.DurableObjects;

    health?: CcScheduledApplication.Health;

    /**
     * Maximum number of instances the application allows. This is relevant for
     * applications that auto-scale.
     */
    max_instances?: number;

    /**
     * Top-level observability settings for the application. This field is mutually
     * exclusive with configuration.observability.
     */
    observability?: CcScheduledApplication.Observability;

    /**
     * Grace period for active instances to stay alive before becoming eligible for
     * shutdown signal due to a rollout, in seconds. Defaults to 0.
     */
    rollout_active_grace_period?: number;
  }

  export namespace CcScheduledApplication {
    /**
     * User-specified container configuration.
     */
    export interface Configuration {
      /**
       * Image url.
       */
      image: string;

      authorized_keys?: Array<Configuration.AuthorizedKey>;

      /**
       * The command that runs when the container starts, passed to the entrypoint. You
       * can override this at run-time. If you override only the command, it gets passed
       * to the default entrypoint specified in the image.
       */
      command?: Array<string>;

      /**
       * The entry point for the container, specifying the executable to run when the
       * container starts. You can override this at run-time. If you do, the default
       * command from the image is ignored. Specify both entrypoint and command at
       * run-time to completely replace the image defaults.
       */
      entrypoint?: Array<string>;

      /**
       * Container environment variables.
       */
      environment_variables?: Array<Configuration.EnvironmentVariable>;

      /**
       * The instance type configures vCPU, memory, and disk.
       *
       * - "lite": 1/16 vCPU, 256 MiB memory, 2 GB disk
       * - "basic": 1/4 vCPU, 1 GiB memory, 4 GB disk
       * - "standard-1": 1/2 vCPU, 4 GiB memory, 8 GB disk
       * - "standard-2": 1 vCPU, 6 GiB memory, 12 GB disk
       * - "standard-3": 2 vCPU, 8 GiB memory, 16 GB disk
       * - "standard-4": 4 vCPU, 12 GiB memory, 20 GB disk
       */
      instance_type?: 'lite' | 'basic' | 'standard-1' | 'standard-2' | 'standard-3' | 'standard-4';

      /**
       * Settings for deployment observability such as logging.
       */
      observability?: Configuration.Observability;
    }

    export namespace Configuration {
      /**
       * User-provided SSH public key.
       */
      export interface AuthorizedKey {
        /**
         * An SSH public key.
         */
        public_key: string;

        /**
         * Optional human readable name for this key.
         */
        name?: string;
      }

      /**
       * An environment variable with a value set.
       */
      export interface EnvironmentVariable {
        /**
         * An environment variable name.
         */
        name: string;

        /**
         * An environment variable value.
         */
        value: string;
      }

      /**
       * Settings for deployment observability such as logging.
       */
      export interface Observability {
        /**
         * Observability logging settings.
         */
        logs?: Observability.Logs;
      }

      export namespace Observability {
        /**
         * Observability logging settings.
         */
        export interface Logs {
          enabled?: boolean;
        }
      }
    }

    export interface Constraints {
      /**
       * Restricts placement to datacenters in the selected jurisdiction. Choose "eu",
       * "fedramp", or "us". When combined with regions, EU supports EEUR and WEUR while
       * FedRAMP and US support ENAM and WNAM.
       */
      jurisdiction?: string;

      regions?: Array<string>;
    }

    /**
     * Durable object configuration stored on and returned from a Cloudchamber
     * application.
     */
    export interface DurableObjects {
      /**
       * The namespace ID of the durable object namespace to use for this application.
       */
      namespace_id: string;
    }

    export interface Health {
      errors: Array<Health.Error>;

      /**
       * Shows a count of application instance states.
       */
      instances: Health.Instances;

      /**
       * High-level health assessment. Only populated for "new_instances" strategy. Based
       * on a sample of target-version instances rather than a full count.
       *
       * - "pending": Zero target-version instances exist yet.
       * - "healthy": Every sampled target-version instance reports running or active.
       * - "degraded": Some sampled instances remain starting or scheduling.
       * - "unhealthy": One or more sampled instances have failed.
       */
      summary?: 'healthy' | 'degraded' | 'unhealthy' | 'pending';
    }

    export namespace Health {
      export interface Error {
        /**
         * An event within a Placement or a Job.
         */
        event: Error.Event;

        /**
         * An instance ID represents an identifier of an instance configuration that
         * maintains an underlying placement.
         */
        instance_id: string;
      }

      export namespace Error {
        /**
         * An event within a Placement or a Job.
         */
        export interface Event {
          id: string;

          details: { [key: string]: unknown };

          message: string;

          /**
           * Name of the event that describes the kind event that happened.
           *
           * - SchedulerPlaced: It's the first event that creates a container placement. It
           *   happens when the Containers runtime was able to retrieve deployment resources
           *   and start verifying everything is correct.
           * - NetworkingIPAssigned: It's sent when the Containers runtime maps the IP to the
           *   container.
           * - VMStarted: It's sent when the Containers runtime starts the VM. The container
           *   might remain unhealthy at this point.
           * - ImagePulled: It's sent when the Containers runtime pulls the image
           *   successfully.
           * - ImagePullError: It's sent when the Containers runtime is having issues pulling
           *   the image. The message and details have more information on what happened for
           *   debugging.
           * - VMFailedToStart: It's sent when the Containers runtime was unable to boot the
           *   VM.
           * - VMStopping: It's sent when the scheduler is stopping the VM.
           * - VMStopped: It's sent when the VM finally exits.
           * - VMFailed: It's sent when the scheduling of the VM failed in the current
           *   location.
           * - RuntimeStartFailed: It's sent when the runtime hits an internal error.
           * - SSHStarted: It's sent when the container gains network connectivity and opens
           *   the SSH port. Containers only send this event when SSH keys exist.
           * - CheckUpdate: Sent when the status of a health or readiness check changes. This
           *   may also affect the health status of the placement.
           * - DurableObjectConnected: Sent when a durable object instance connects and gains
           *   control of the deployment. This event is only sent for durable object
           *   deployments. It is sent after VMStarted.
           * - ContainerStarted: It's sent when the container starts running.
           */
          name:
            | 'SchedulerPlaced'
            | 'NetworkingIPAssigned'
            | 'VMStarted'
            | 'ImagePulled'
            | 'ImagePullError'
            | 'VMFailedToStart'
            | 'NetworkingIPAssignmentFailed'
            | 'VMRunning'
            | 'VMStopping'
            | 'VMStopped'
            | 'VMFailed'
            | 'RuntimeStartFailed'
            | 'SSHStarted'
            | 'ServiceHealthUpdates'
            | 'CheckUpdate'
            | 'DurableObjectConnected'
            | 'ContainerStarted';

          statusChange: { [key: string]: unknown };

          /**
           * UTC timestamp string in ISO 8601 format.
           */
          time: string;

          type: 'Info' | 'Error' | 'Warn' | 'UserError' | 'SystemError';
        }
      }

      /**
       * Shows a count of application instance states.
       */
      export interface Instances {
        /**
         * Number of instances whose runtime reports the container as running
         * (container_status = "running"). This is a subset of the placements that remain
         * up: an instance that is already bound to a Durable Object and serving traffic is
         * counted under "assigned" until its container_status catches up to "running", so
         * container_status can briefly lag Durable Object attachment under churn. To
         * estimate running, Durable-Object-bound instances, sum "active" + "assigned"
         * rather than reading "active" alone.
         */
        active: number;

        /**
         * Number of instances bound to a Durable Object with a running placement whose
         * container_status remains behind "running". These count as live, serving
         * instances; "active" + "assigned" approximates the running, Durable-Object-bound
         * count.
         */
        assigned: number;
      }
    }

    /**
     * Top-level observability settings for the application. This field is mutually
     * exclusive with configuration.observability.
     */
    export interface Observability {
      /**
       * Observability logging settings.
       */
      logs?: Observability.Logs;
    }

    export namespace Observability {
      /**
       * Observability logging settings.
       */
      export interface Logs {
        enabled?: boolean;
      }
    }
  }

  /**
   * Each Durable Object creates and manages the lifecycle of its container instance.
   */
  export interface CcDurableObjectApplication {
    /**
     * An Application ID represents an identifier of an application.
     */
    id: string;

    /**
     * A unique identifier for the user's account.
     */
    account_id: string;

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    created_at: string;

    /**
     * Durable object configuration using a namespace ID.
     */
    durable_objects: CcDurableObjectApplication.DurableObjects;

    /**
     * The application name.
     */
    name: string;

    /**
     * Selects a Durable Object-managed application. Each Durable Object creates and
     * manages the lifecycle of its container instance. Configure application-wide
     * observability settings here. Deployment configuration, scaling, placement
     * constraints, versions, and rollouts do not apply.
     */
    scheduling_policy: 'durable_object';

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    updated_at: string;

    /**
     * Application-wide settings for a Durable Object-managed application.
     */
    configuration?: CcDurableObjectApplication.Configuration;

    /**
     * Aggregate current activity for the latest observed placement of each instance.
     * Runtime snapshots feed periodic background sweeps. Counts refresh after each
     * complete sweep. Instance listings retain their separate three-month history for
     * failure discovery.
     */
    health?: CcDurableObjectApplication.Health;

    /**
     * Application-wide logging settings for a Durable Object-managed application. The
     * application publishes these settings to its runtime metadata. Updating them does
     * not create a deployment or rollout.
     */
    observability?: CcDurableObjectApplication.Observability;
  }

  export namespace CcDurableObjectApplication {
    /**
     * Durable object configuration using a namespace ID.
     */
    export interface DurableObjects {
      /**
       * The namespace ID of the durable object namespace to use for this application.
       */
      namespace_id: string;
    }

    /**
     * Application-wide settings for a Durable Object-managed application.
     */
    export interface Configuration {
      authorized_keys?: Array<Configuration.AuthorizedKey>;

      /**
       * Configuration properties for connecting with SSH to a container using Wrangler.
       */
      wrangler_ssh?: Configuration.WranglerSSH;
    }

    export namespace Configuration {
      /**
       * User-provided SSH public key.
       */
      export interface AuthorizedKey {
        /**
         * An SSH public key.
         */
        public_key: string;

        /**
         * Optional human readable name for this key.
         */
        name?: string;
      }

      /**
       * Configuration properties for connecting with SSH to a container using Wrangler.
       */
      export interface WranglerSSH {
        enabled?: boolean;

        port?: number;
      }
    }

    /**
     * Aggregate current activity for the latest observed placement of each instance.
     * Runtime snapshots feed periodic background sweeps. Counts refresh after each
     * complete sweep. Instance listings retain their separate three-month history for
     * failure discovery.
     */
    export interface Health {
      /**
       * Counts of observed non-terminal instances.
       */
      instances: Health.Instances;

      /**
       * Present as pending until the first activity sweep completes; omitted afterward.
       */
      summary?: 'pending';
    }

    export namespace Health {
      /**
       * Counts of observed non-terminal instances.
       */
      export interface Instances {
        /**
         * Number of instances whose runtime reports running or stopping.
         */
        active: number;

        /**
         * Number of instances whose runtime reports starting.
         */
        starting: number;
      }
    }

    /**
     * Application-wide logging settings for a Durable Object-managed application. The
     * application publishes these settings to its runtime metadata. Updating them does
     * not create a deployment or rollout.
     */
    export interface Observability {
      /**
       * Application-wide logging settings.
       */
      logs?: Observability.Logs;
    }

    export namespace Observability {
      /**
       * Application-wide logging settings.
       */
      export interface Logs {
        enabled?: boolean;
      }
    }
  }
}

export type ApplicationCreateParams =
  | ApplicationCreateParams.CcContainersCreateScheduledApplicationRequest
  | ApplicationCreateParams.CcContainersCreateDurableObjectApplicationRequest;

export declare namespace ApplicationCreateParams {
  export interface CcContainersCreateScheduledApplicationRequest {
    /**
     * Path param: Account identifier.
     */
    account_id: string;

    /**
     * Body param: Defines the deployment configuration for every deployment in this
     * application.
     */
    configuration: CcContainersCreateScheduledApplicationRequest.Configuration;

    /**
     * Body param: The initial number of deployments to create.
     */
    instances: number;

    /**
     * Body param: Sets the maximum number of instances that the application can run.
     */
    max_instances: number;

    /**
     * Body param: The name for this application.
     */
    name: string;

    /**
     * Body param: Selects a scheduler-backed application. Use `default` when the
     * Containers scheduler should maintain the requested number of instances and
     * manage deployment configuration, placement, scaling, versions, and rollouts.
     */
    scheduling_policy: 'default';

    /**
     * Body param
     */
    constraints?: CcContainersCreateScheduledApplicationRequest.Constraints;

    /**
     * Body param: Optionally associates this scheduler-backed application with a
     * Durable Object namespace.
     */
    durable_objects?:
      | CcContainersCreateScheduledApplicationRequest.CcDurableObjectsConfigurationNamespaceID
      | CcContainersCreateScheduledApplicationRequest.CcDurableObjectsConfigurationScriptAndClass;

    /**
     * Body param: Top-level observability settings for the application. This field is
     * mutually exclusive with configuration.observability.
     */
    observability?: CcContainersCreateScheduledApplicationRequest.Observability;

    /**
     * Body param: Grace period for active instances to stay alive before becoming
     * eligible for shutdown signal due to a rollout, in seconds. Defaults to 0.
     */
    rollout_active_grace_period?: number;
  }

  export namespace CcContainersCreateScheduledApplicationRequest {
    /**
     * Defines the deployment configuration for every deployment in this application.
     */
    export interface Configuration {
      /**
       * Image url.
       */
      image: string;

      authorized_keys?: Array<Configuration.AuthorizedKey>;

      /**
       * The command that runs when the container starts, passed to the entrypoint. You
       * can override this at run-time. If you override only the command, it gets passed
       * to the default entrypoint specified in the image.
       */
      command?: Array<string>;

      /**
       * The entry point for the container, specifying the executable to run when the
       * container starts. You can override this at run-time. If you do, the default
       * command from the image is ignored. Specify both entrypoint and command at
       * run-time to completely replace the image defaults.
       */
      entrypoint?: Array<string>;

      /**
       * Container environment variables.
       */
      environment_variables?: Array<Configuration.EnvironmentVariable>;

      /**
       * The instance type configures vCPU, memory, and disk.
       *
       * - "lite": 1/16 vCPU, 256 MiB memory, 2 GB disk
       * - "basic": 1/4 vCPU, 1 GiB memory, 4 GB disk
       * - "standard-1": 1/2 vCPU, 4 GiB memory, 8 GB disk
       * - "standard-2": 1 vCPU, 6 GiB memory, 12 GB disk
       * - "standard-3": 2 vCPU, 8 GiB memory, 16 GB disk
       * - "standard-4": 4 vCPU, 12 GiB memory, 20 GB disk
       */
      instance_type?: 'lite' | 'basic' | 'standard-1' | 'standard-2' | 'standard-3' | 'standard-4';

      /**
       * Settings for deployment observability such as logging.
       */
      observability?: Configuration.Observability;
    }

    export namespace Configuration {
      /**
       * User-provided SSH public key.
       */
      export interface AuthorizedKey {
        /**
         * An SSH public key.
         */
        public_key: string;

        /**
         * Optional human readable name for this key.
         */
        name?: string;
      }

      /**
       * An environment variable with a value set.
       */
      export interface EnvironmentVariable {
        /**
         * An environment variable name.
         */
        name: string;

        /**
         * An environment variable value.
         */
        value: string;
      }

      /**
       * Settings for deployment observability such as logging.
       */
      export interface Observability {
        /**
         * Observability logging settings.
         */
        logs?: Observability.Logs;
      }

      export namespace Observability {
        /**
         * Observability logging settings.
         */
        export interface Logs {
          enabled?: boolean;
        }
      }
    }

    export interface Constraints {
      /**
       * Restricts placement to datacenters in the selected jurisdiction. Choose "eu",
       * "fedramp", or "us". When combined with regions, EU supports EEUR and WEUR while
       * FedRAMP and US support ENAM and WNAM.
       */
      jurisdiction?: string;

      regions?: Array<string>;
    }

    /**
     * Durable object configuration using a namespace ID.
     */
    export interface CcDurableObjectsConfigurationNamespaceID {
      /**
       * The namespace ID of the durable object namespace to use for this application.
       */
      namespace_id: string;
    }

    /**
     * Durable object configuration using script and class names.
     */
    export interface CcDurableObjectsConfigurationScriptAndClass {
      /**
       * The class name of the durable object.
       */
      class_name: string;

      /**
       * The script name where the durable object class is defined.
       */
      script_name: string;
    }

    /**
     * Top-level observability settings for the application. This field is mutually
     * exclusive with configuration.observability.
     */
    export interface Observability {
      /**
       * Observability logging settings.
       */
      logs?: Observability.Logs;
    }

    export namespace Observability {
      /**
       * Observability logging settings.
       */
      export interface Logs {
        enabled?: boolean;
      }
    }
  }

  export interface CcContainersCreateDurableObjectApplicationRequest {
    /**
     * Path param: Account identifier.
     */
    account_id: string;

    /**
     * Body param: The customer-owned Durable Object namespace that owns this
     * application and its instances.
     */
    durable_objects:
      | CcContainersCreateDurableObjectApplicationRequest.CcDurableObjectsConfigurationNamespaceID
      | CcContainersCreateDurableObjectApplicationRequest.CcDurableObjectsConfigurationScriptAndClass;

    /**
     * Body param: The name for this application.
     */
    name: string;

    /**
     * Body param: Selects a Durable Object-managed application. Each Durable Object
     * creates and manages the lifecycle of its container instance. Configure
     * application-wide observability settings here. Deployment configuration, scaling,
     * placement constraints, versions, and rollouts do not apply.
     */
    scheduling_policy: 'durable_object';

    /**
     * Body param: Configuration for a Durable Object-managed application.
     */
    configuration?: CcContainersCreateDurableObjectApplicationRequest.Configuration;

    /**
     * Body param: Application-wide logging settings for a Durable Object-managed
     * application. The application publishes these settings to its runtime metadata.
     * Updating them does not create a deployment or rollout.
     */
    observability?: CcContainersCreateDurableObjectApplicationRequest.Observability;
  }

  export namespace CcContainersCreateDurableObjectApplicationRequest {
    /**
     * Durable object configuration using a namespace ID.
     */
    export interface CcDurableObjectsConfigurationNamespaceID {
      /**
       * The namespace ID of the durable object namespace to use for this application.
       */
      namespace_id: string;
    }

    /**
     * Durable object configuration using script and class names.
     */
    export interface CcDurableObjectsConfigurationScriptAndClass {
      /**
       * The class name of the durable object.
       */
      class_name: string;

      /**
       * The script name where the durable object class is defined.
       */
      script_name: string;
    }

    /**
     * Configuration for a Durable Object-managed application.
     */
    export interface Configuration {
      authorized_keys?: Array<Configuration.AuthorizedKey>;

      /**
       * Configuration properties for connecting with SSH to a container using Wrangler.
       */
      wrangler_ssh?: Configuration.WranglerSSH;
    }

    export namespace Configuration {
      /**
       * User-provided SSH public key.
       */
      export interface AuthorizedKey {
        /**
         * An SSH public key.
         */
        public_key: string;

        /**
         * Optional human readable name for this key.
         */
        name?: string;
      }

      /**
       * Configuration properties for connecting with SSH to a container using Wrangler.
       */
      export interface WranglerSSH {
        enabled?: boolean;

        port?: number;
      }
    }

    /**
     * Application-wide logging settings for a Durable Object-managed application. The
     * application publishes these settings to its runtime metadata. Updating them does
     * not create a deployment or rollout.
     */
    export interface Observability {
      /**
       * Application-wide logging settings.
       */
      logs?: Observability.Logs;
    }

    export namespace Observability {
      /**
       * Application-wide logging settings.
       */
      export interface Logs {
        enabled?: boolean;
      }
    }
  }
}

export interface ApplicationListParams extends PageTokenPaginationParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;

  /**
   * Query param: Filter applications by image.
   */
  image?: string;

  /**
   * Query param: Filter applications by name.
   */
  name?: string;
}

export interface ApplicationDeleteParams {
  /**
   * Account identifier.
   */
  account_id: string;
}

export interface ApplicationEditParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;

  /**
   * Body param: Application configuration fields you can change without creating a
   * rollout.
   */
  configuration?: ApplicationEditParams.Configuration;

  /**
   * Body param
   */
  constraints?: ApplicationEditParams.Constraints;

  /**
   * Body param: Maximum number of instances that an autoscaling application can run.
   */
  max_instances?: number;

  /**
   * Body param: Top-level application observability settings. Scheduler-backed
   * applications hot-reload these settings across existing instances. An existing
   * Durable Object-managed application accepts only `logs.enabled` and publishes
   * these settings to runtime metadata without creating deployments or rollouts.
   */
  observability?: ApplicationEditParams.Observability;

  /**
   * Body param: Grace period for active instances to stay alive before becoming
   * eligible for shutdown signal due to a rollout, in seconds. Defaults to 0.
   */
  rollout_active_grace_period?: number;
}

export namespace ApplicationEditParams {
  /**
   * Application configuration fields you can change without creating a rollout.
   */
  export interface Configuration {
    authorized_keys?: Array<Configuration.AuthorizedKey>;

    /**
     * Configuration properties for connecting with SSH to a container using Wrangler.
     */
    wrangler_ssh?: Configuration.WranglerSSH;
  }

  export namespace Configuration {
    /**
     * User-provided SSH public key.
     */
    export interface AuthorizedKey {
      /**
       * An SSH public key.
       */
      public_key: string;

      /**
       * Optional human readable name for this key.
       */
      name?: string;
    }

    /**
     * Configuration properties for connecting with SSH to a container using Wrangler.
     */
    export interface WranglerSSH {
      enabled?: boolean;

      port?: number;
    }
  }

  export interface Constraints {
    /**
     * Restricts placement to datacenters in the selected jurisdiction. Choose "eu",
     * "fedramp", or "us". When combined with regions, EU supports EEUR and WEUR while
     * FedRAMP and US support ENAM and WNAM.
     */
    jurisdiction?: string;

    regions?: Array<string>;
  }

  /**
   * Top-level application observability settings. Scheduler-backed applications
   * hot-reload these settings across existing instances. An existing Durable
   * Object-managed application accepts only `logs.enabled` and publishes these
   * settings to runtime metadata without creating deployments or rollouts.
   */
  export interface Observability {
    /**
     * Observability logging settings.
     */
    logs?: Observability.Logs;
  }

  export namespace Observability {
    /**
     * Observability logging settings.
     */
    export interface Logs {
      enabled?: boolean;
    }
  }
}

export interface ApplicationGetParams {
  /**
   * Account identifier.
   */
  account_id: string;
}

Applications.Instances = InstancesAPIInstances;
Applications.BaseInstances = BaseInstances;
Applications.Rollouts = Rollouts;
Applications.BaseRollouts = BaseRollouts;
Applications.Versions = Versions;
Applications.BaseVersions = BaseVersions;

export declare namespace Applications {
  export {
    type ApplicationCreateResponse as ApplicationCreateResponse,
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationDeleteResponse as ApplicationDeleteResponse,
    type ApplicationEditResponse as ApplicationEditResponse,
    type ApplicationGetResponse as ApplicationGetResponse,
    type ApplicationListResponsesPageTokenPagination as ApplicationListResponsesPageTokenPagination,
    type ApplicationCreateParams as ApplicationCreateParams,
    type ApplicationListParams as ApplicationListParams,
    type ApplicationDeleteParams as ApplicationDeleteParams,
    type ApplicationEditParams as ApplicationEditParams,
    type ApplicationGetParams as ApplicationGetParams,
  };

  export {
    InstancesAPIInstances as Instances,
    BaseInstances as BaseInstances,
    type InstanceListResponse as InstanceListResponse,
    type InstanceGetResponse as InstanceGetResponse,
    type InstanceListV1Response as InstanceListV1Response,
    type InstanceListResponsesPageTokenPagination as InstanceListResponsesPageTokenPagination,
    type InstanceListV1ResponsesContainersInstancesV1Pagination as InstanceListV1ResponsesContainersInstancesV1Pagination,
    type InstanceListParams as InstanceListParams,
    type InstanceGetParams as InstanceGetParams,
    type InstanceListV1Params as InstanceListV1Params,
  };

  export {
    Rollouts as Rollouts,
    BaseRollouts as BaseRollouts,
    type RolloutCreateResponse as RolloutCreateResponse,
    type RolloutCreateParams as RolloutCreateParams,
  };

  export {
    Versions as Versions,
    BaseVersions as BaseVersions,
    type VersionListResponse as VersionListResponse,
    type VersionListResponsesSinglePage as VersionListResponsesSinglePage,
    type VersionListParams as VersionListParams,
  };
}
