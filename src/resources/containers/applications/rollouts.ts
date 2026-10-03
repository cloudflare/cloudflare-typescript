// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseRollouts extends APIResource {
  static override readonly _key: readonly ['containers', 'applications', 'rollouts'] = Object.freeze([
    'containers',
    'applications',
    'rollouts',
  ] as const);

  /**
   * Creates a rollout to update the application's configuration across instances
   * with minimal downtime. Rollouts apply only to scheduler-backed applications with
   * `scheduling_policy: "default"`. Versions and rollouts do not apply to
   * applications with `scheduling_policy: "durable_object"`.
   *
   * @example
   * ```ts
   * const rollout =
   *   await client.containers.applications.rollouts.create(
   *     'application_id',
   *     {
   *       account_id: 'account-123',
   *       description: 'description',
   *       strategy: 'rolling',
   *       target_configuration: {},
   *     },
   *   );
   * ```
   */
  create(
    applicationID: string,
    params: RolloutCreateParams,
    options?: RequestOptions,
  ): APIPromise<RolloutCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/containers/applications/${applicationID}/rollouts`, {
        body,
        ...options,
      }) as APIPromise<{ result: RolloutCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Rollouts extends BaseRollouts {}

/**
 * Represents the status and metadata of a rollout process for an application. For
 * "rolling" strategy: includes steps and progress with instance counts. For
 * "new_instances" strategy: the response omits steps and progress. Use percentage,
 * version_distribution, and health.summary for status.
 */
export interface RolloutCreateResponse {
  /**
   * An identifier for a specific rollout within an application.
   */
  id: string;

  /**
   * UTC timestamp string in ISO 8601 format.
   */
  created_at: string;

  /**
   * User-specified container configuration changes.
   */
  current_configuration: RolloutCreateResponse.CurrentConfiguration;

  /**
   * Current application version before the rollout.
   */
  current_version: number;

  description: string;

  health: RolloutCreateResponse.Health;

  /**
   * Kind of the rollout process.
   *
   * - "full_auto": For rolling rollouts, starts progressing steps upon rollout
   *   creation. For new_instances rollouts, advances percentage targets
   *   automatically after target-version health is observed.
   * - "full_manual": Requires manually progressing each step in the rollout using
   *   the UpdateRollout's action paramater.
   * - "durable_objects_auto": Default when the application is a DO application.
   */
  kind: 'full_auto' | 'full_manual' | 'durable_objects_auto';

  /**
   * Timestamp of the most recent update to status, health, or progress.
   */
  last_updated_at: string;

  /**
   * Current status of the rollout.
   */
  status: 'pending' | 'progressing' | 'completed' | 'reverted' | 'replaced';

  /**
   * The rollout strategy.
   *
   * - "rolling": Step-based rollout with health gates. Actively replaces instances
   *   to reach each step's target percentage. Response includes steps and progress.
   * - "new_instances": Percentage control over version distribution. Version sync
   *   actively replaces instances to match the configured percentage. "full_auto"
   *   ramps through fixed percentage targets after target-version health is
   *   observed. Response includes percentage, version_distribution, and
   *   health.summary.
   */
  strategy: 'rolling' | 'new_instances';

  /**
   * User-specified container configuration changes.
   */
  target_configuration: RolloutCreateResponse.TargetConfiguration;

  /**
   * Target application version after the rollout is complete and applied to all
   * current instances.
   */
  target_version: number;

  /**
   * Current target version percentage (0-100). Only present for "new_instances"
   * strategy.
   */
  percentage?: number;

  /**
   * Progress details of an application rollout.
   */
  progress?: RolloutCreateResponse.Progress;

  /**
   * Timestamp when the rollout started.
   */
  started_at?: string;

  steps?: Array<RolloutCreateResponse.Step>;

  /**
   * Version percentage distribution. Only present for "new_instances" strategy. For
   * "rolling" strategy, see progress.version_distribution instead.
   */
  version_distribution?: RolloutCreateResponse.VersionDistribution;
}

export namespace RolloutCreateResponse {
  /**
   * User-specified container configuration changes.
   */
  export interface CurrentConfiguration {
    authorized_keys?: Array<CurrentConfiguration.AuthorizedKey>;

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
    environment_variables?: Array<CurrentConfiguration.EnvironmentVariable>;

    /**
     * Image url.
     */
    image?: string;

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
    observability?: CurrentConfiguration.Observability;
  }

  export namespace CurrentConfiguration {
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
   * User-specified container configuration changes.
   */
  export interface TargetConfiguration {
    authorized_keys?: Array<TargetConfiguration.AuthorizedKey>;

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
    environment_variables?: Array<TargetConfiguration.EnvironmentVariable>;

    /**
     * Image url.
     */
    image?: string;

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
    observability?: TargetConfiguration.Observability;
  }

  export namespace TargetConfiguration {
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

  /**
   * Progress details of an application rollout.
   */
  export interface Progress {
    /**
     * Current step being executed in the rollout process. Initialized to 0.
     */
    current_step: number;

    /**
     * Total number of instances the rollout affects.
     */
    total_instances: number;

    /**
     * Total number of steps in the rollout.
     */
    total_steps: number;

    /**
     * Number of instances updated in the rollout process.
     */
    updated_instances: number;

    /**
     * Expected distribution of instances per version, based on the current percentage
     * split. Populated during active rollouts. Values derive from the version
     * percentage weights rather than actual running instance counts.
     */
    version_distribution?: Progress.VersionDistribution;
  }

  export namespace Progress {
    /**
     * Expected distribution of instances per version, based on the current percentage
     * split. Populated during active rollouts. Values derive from the version
     * percentage weights rather than actual running instance counts.
     */
    export interface VersionDistribution {
      /**
       * Expected number of instances remaining on the current (old) version based on the
       * current percentage split. Only populated for "rolling" strategy.
       */
      current_version_instances?: number;

      /**
       * The percentage of new instances being scheduled on the current version (100 -
       * target_version_percentage). Only populated for "new_instances" strategy.
       */
      current_version_percentage?: number;

      /**
       * Expected number of instances scheduled for the target (new) version based on the
       * current percentage split. Only populated for "rolling" strategy.
       */
      target_version_instances?: number;

      /**
       * The active percentage of new instances being scheduled on the target version.
       * For "rolling", this reflects the step_size.percentage of the current active
       * step. For "new_instances", this reflects the user-set percentage.
       */
      target_version_percentage?: number;
    }
  }

  /**
   * Steps within the rollout process.
   */
  export interface Step {
    /**
     * The sequential order of the rollout step, automatically assigned starting from
     * 1, based on the total number of steps in the rollout process.
     */
    id: number;

    /**
     * Description of the rollout step.
     */
    description: string;

    /**
     * Status of the rollout step.
     */
    status: 'pending' | 'progressing' | 'reverting' | 'completed' | 'reverted';

    step_size: Step.StepSize;

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    completed_at?: string;

    /**
     * Reason for the step's current status.
     */
    reason?: string;

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    started_at?: string;
  }

  export namespace Step {
    export interface StepSize {
      /**
       * Percentage of instances affected in this step. Min 10% and Max 100%.
       */
      percentage: number;
    }
  }

  /**
   * Version percentage distribution. Only present for "new_instances" strategy. For
   * "rolling" strategy, see progress.version_distribution instead.
   */
  export interface VersionDistribution {
    /**
     * Percentage of instances on the current (old) version.
     */
    current_version_percentage: number;

    /**
     * Percentage of instances on the target (new) version.
     */
    target_version_percentage: number;
  }
}

export interface RolloutCreateParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;

  /**
   * Body param: Description of the rollout process.
   */
  description: string;

  /**
   * Body param: Strategy used for the rollout.
   *
   * - "rolling": Step-based rollout with health gates. Actively replaces instances
   *   to reach each step's target percentage.
   * - "new_instances": Percentage control over version distribution. Version sync
   *   actively replaces instances to match the configured percentage. The
   *   "full_auto" kind advances through fixed percentage targets after
   *   target-version health is observed.
   */
  strategy: 'rolling' | 'new_instances';

  /**
   * Body param: User-specified container configuration changes.
   */
  target_configuration: RolloutCreateParams.TargetConfiguration;

  /**
   * Body param: Kind of the rollout process. Defaults to "full_auto".
   *
   * - "full_auto": For rolling rollouts, starts progressing steps upon rollout
   *   creation. For new_instances rollouts, advances percentage targets
   *   automatically after target-version health is observed.
   * - "full_manual": Requires manually progressing each step in the rollout using
   *   the UpdateRollout's action parameter.
   */
  kind?: 'full_auto' | 'full_manual';

  /**
   * Body param: Initial target version percentage (0-100). Version sync actively
   * replaces instances to match. Required when strategy is "new_instances" and kind
   * is "full_manual". When strategy is "new_instances" and kind is "full_auto",
   * omitted percentage starts at 10% or the smallest percentage that targets at
   * least one instance. Unused for "rolling".
   */
  percentage?: number;

  /**
   * Body param: Percentage of rollout to increase in each step when "steps" is
   * absent. Applicable values: 5, 10, 20, 25, 50, 100. These create rollouts with
   * 20, 10, 5, 4, 2, 1 steps respectively. Only valid for "rolling" strategy.
   */
  step_percentage?: 5 | 10 | 20 | 25 | 50 | 100;

  /**
   * Body param: Steps defining the rollout process, used when "step_percentage" is
   * absent. Specify only one of "step_percentage" or "steps" when creating a
   * rollout. "steps" allow granular control over each step. Only valid for "rolling"
   * strategy.
   */
  steps?: Array<RolloutCreateParams.Step>;
}

export namespace RolloutCreateParams {
  /**
   * User-specified container configuration changes.
   */
  export interface TargetConfiguration {
    authorized_keys?: Array<TargetConfiguration.AuthorizedKey>;

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
    environment_variables?: Array<TargetConfiguration.EnvironmentVariable>;

    /**
     * Image url.
     */
    image?: string;

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
    observability?: TargetConfiguration.Observability;
  }

  export namespace TargetConfiguration {
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

  /**
   * Steps defining the rollout process.
   */
  export interface Step {
    /**
     * Description of the rollout step.
     */
    description: string;

    step_size: Step.StepSize;
  }

  export namespace Step {
    export interface StepSize {
      /**
       * Percentage of instances affected in this step. Min 10% and Max 100%.
       */
      percentage: number;
    }
  }
}

export declare namespace Rollouts {
  export {
    type RolloutCreateResponse as RolloutCreateResponse,
    type RolloutCreateParams as RolloutCreateParams,
  };
}
