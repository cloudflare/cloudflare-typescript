// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseVersions extends APIResource {
  static override readonly _key: readonly ['containers', 'applications', 'versions'] = Object.freeze([
    'containers',
    'applications',
    'versions',
  ] as const);

  /**
   * Returns all versions for a scheduler-backed application with
   * `scheduling_policy: "default"`. Versions and rollouts do not apply to
   * applications with `scheduling_policy: "durable_object"`.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const versionListResponse of client.containers.applications.versions.list(
   *   'application_id',
   *   { account_id: 'account-123' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    applicationID: string,
    params: VersionListParams,
    options?: RequestOptions,
  ): PagePromise<VersionListResponsesSinglePage, VersionListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/containers/applications/${applicationID}/versions`,
      SinglePage<VersionListResponse>,
      options,
    );
  }
}
export class Versions extends BaseVersions {}

export type VersionListResponsesSinglePage = SinglePage<VersionListResponse>;

/**
 * An application with the configuration of its version.
 */
export interface VersionListResponse {
  /**
   * User-specified container configuration changes.
   */
  configuration: VersionListResponse.Configuration;

  percentage: number;

  version: number;
}

export namespace VersionListResponse {
  /**
   * User-specified container configuration changes.
   */
  export interface Configuration {
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
}

export interface VersionListParams {
  /**
   * Account identifier.
   */
  account_id: string;
}

export declare namespace Versions {
  export {
    type VersionListResponse as VersionListResponse,
    type VersionListResponsesSinglePage as VersionListResponsesSinglePage,
    type VersionListParams as VersionListParams,
  };
}
