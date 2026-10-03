// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  ContainersInstancesV1Pagination,
  type ContainersInstancesV1PaginationParams,
  PagePromise,
  PageTokenPagination,
  type PageTokenPaginationParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseInstances extends APIResource {
  static override readonly _key: readonly ['containers', 'applications', 'instances'] = Object.freeze([
    'containers',
    'applications',
    'instances',
  ] as const);

  /**
   * Lists container instances belonging to an application.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const instanceListResponse of client.containers.applications.instances.list(
   *   'application_id',
   *   { account_id: 'account-123' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    applicationID: string,
    params: InstanceListParams,
    options?: RequestOptions,
  ): PagePromise<InstanceListResponsesPageTokenPagination, InstanceListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/containers/applications/${applicationID}/instances-v2`,
      PageTokenPagination<InstanceListResponse>,
      { query, ...options },
    );
  }

  /**
   * Returns a container instance belonging to an application.
   *
   * @example
   * ```ts
   * const instance =
   *   await client.containers.applications.instances.get(
   *     'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *     {
   *       account_id: 'account-123',
   *       application_id: 'application_id',
   *     },
   *   );
   * ```
   */
  get(
    instanceID: string,
    params: InstanceGetParams,
    options?: RequestOptions,
  ): APIPromise<InstanceGetResponse> {
    const { account_id, application_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/containers/applications/${application_id}/instances/${instanceID}`,
        options,
      ) as APIPromise<{ result: InstanceGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deprecated: use `instances-v2` instead. Lists container instances belonging to
   * an application.
   *
   * @deprecated
   */
  listV1(
    applicationID: string,
    params: InstanceListV1Params,
    options?: RequestOptions,
  ): PagePromise<InstanceListV1ResponsesContainersInstancesV1Pagination, InstanceListV1Response> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/containers/applications/${applicationID}/instances`,
      ContainersInstancesV1Pagination<InstanceListV1Response>,
      { query, ...options },
    );
  }
}
export class Instances extends BaseInstances {}

export type InstanceListResponsesPageTokenPagination = PageTokenPagination<InstanceListResponse>;

export type InstanceListV1ResponsesContainersInstancesV1Pagination =
  ContainersInstancesV1Pagination<InstanceListV1Response>;

/**
 * The last-reported state of a logical container instance.
 */
export interface InstanceListResponse {
  /**
   * A container instance ID (64-character hex Durable Object actor ID).
   */
  id: string;

  /**
   * An Application ID represents an identifier of an application.
   */
  application_id: string;

  /**
   * The image for the current container placement, when one is available.
   */
  image: string;

  /**
   * The latest known status of a container instance.
   */
  status: InstanceListResponse.Status;

  /**
   * The resources allocated to the container instance.
   */
  configuration?: InstanceListResponse.Configuration;

  /**
   * The location of the instance's current container placement.
   */
  location?: InstanceListResponse.Location;

  /**
   * The customer-provided instance name, when available. Its UTF-8 encoding uses at
   * most 1,024 bytes.
   */
  name?: string;

  /**
   * The time at which the current container placement started, when one exists.
   */
  started_at?: string;
}

export namespace InstanceListResponse {
  /**
   * The latest known status of a container instance.
   */
  export interface Status {
    /**
     * The current lifecycle state of a container instance.
     */
    state:
      | 'provisioning'
      | 'running'
      | 'failed'
      | 'stopping'
      | 'stopped'
      | 'unhealthy'
      | 'inactive'
      | 'unknown';

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    updated_at: string;

    /**
     * The process exit code, when the runtime reports one.
     */
    exit_code?: number;
  }

  /**
   * The resources allocated to the container instance.
   */
  export interface Configuration {
    /**
     * Disk allocated to the container instance, in decimal MB.
     */
    disk: number;

    /**
     * Memory allocated to the container instance, in MiB.
     */
    memory: number;

    /**
     * Number of virtual CPUs allocated to the container instance.
     */
    vcpu: number;
  }

  /**
   * The location of the instance's current container placement.
   */
  export interface Location {
    /**
     * Unique location code used to identify locations on a logical level.
     */
    name: string;

    /**
     * Represents a group of datacenters. Choose one of "AFR", "APAC", "EEUR", "ENAM",
     * "WNAM", "ME", "OC", "SAM", or "WEUR".
     */
    region: string;
  }
}

/**
 * The last-reported state of a logical container instance.
 */
export interface InstanceGetResponse {
  /**
   * A container instance ID (64-character hex Durable Object actor ID).
   */
  id: string;

  /**
   * An Application ID represents an identifier of an application.
   */
  application_id: string;

  /**
   * The image for the current container placement, when one is available.
   */
  image: string;

  /**
   * The latest known status of a container instance.
   */
  status: InstanceGetResponse.Status;

  /**
   * The resources allocated to the container instance.
   */
  configuration?: InstanceGetResponse.Configuration;

  /**
   * The location of the instance's current container placement.
   */
  location?: InstanceGetResponse.Location;

  /**
   * The customer-provided instance name, when available. Its UTF-8 encoding uses at
   * most 1,024 bytes.
   */
  name?: string;

  /**
   * The time at which the current container placement started, when one exists.
   */
  started_at?: string;
}

export namespace InstanceGetResponse {
  /**
   * The latest known status of a container instance.
   */
  export interface Status {
    /**
     * The current lifecycle state of a container instance.
     */
    state:
      | 'provisioning'
      | 'running'
      | 'failed'
      | 'stopping'
      | 'stopped'
      | 'unhealthy'
      | 'inactive'
      | 'unknown';

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    updated_at: string;

    /**
     * The process exit code, when the runtime reports one.
     */
    exit_code?: number;
  }

  /**
   * The resources allocated to the container instance.
   */
  export interface Configuration {
    /**
     * Disk allocated to the container instance, in decimal MB.
     */
    disk: number;

    /**
     * Memory allocated to the container instance, in MiB.
     */
    memory: number;

    /**
     * Number of virtual CPUs allocated to the container instance.
     */
    vcpu: number;
  }

  /**
   * The location of the instance's current container placement.
   */
  export interface Location {
    /**
     * Unique location code used to identify locations on a logical level.
     */
    name: string;

    /**
     * Represents a group of datacenters. Choose one of "AFR", "APAC", "EEUR", "ENAM",
     * "WNAM", "ME", "OC", "SAM", or "WEUR".
     */
    region: string;
  }
}

/**
 * The last-reported state of a logical container instance.
 */
export interface InstanceListV1Response {
  /**
   * A container instance ID (64-character hex Durable Object actor ID).
   */
  id: string;

  /**
   * An Application ID represents an identifier of an application.
   */
  application_id: string;

  /**
   * The image for the current container placement, when one is available.
   */
  image: string;

  /**
   * The latest known status of a container instance.
   */
  status: InstanceListV1Response.Status;

  /**
   * The resources allocated to the container instance.
   */
  configuration?: InstanceListV1Response.Configuration;

  /**
   * The location of the instance's current container placement.
   */
  location?: InstanceListV1Response.Location;

  /**
   * The customer-provided instance name, when available. Its UTF-8 encoding uses at
   * most 1,024 bytes.
   */
  name?: string;

  /**
   * The time at which the current container placement started, when one exists.
   */
  started_at?: string;
}

export namespace InstanceListV1Response {
  /**
   * The latest known status of a container instance.
   */
  export interface Status {
    /**
     * The current lifecycle state of a container instance.
     */
    state:
      | 'provisioning'
      | 'running'
      | 'failed'
      | 'stopping'
      | 'stopped'
      | 'unhealthy'
      | 'inactive'
      | 'unknown';

    /**
     * UTC timestamp string in ISO 8601 format.
     */
    updated_at: string;

    /**
     * The process exit code, when the runtime reports one.
     */
    exit_code?: number;
  }

  /**
   * The resources allocated to the container instance.
   */
  export interface Configuration {
    /**
     * Disk allocated to the container instance, in decimal MB.
     */
    disk: number;

    /**
     * Memory allocated to the container instance, in MiB.
     */
    memory: number;

    /**
     * Number of virtual CPUs allocated to the container instance.
     */
    vcpu: number;
  }

  /**
   * The location of the instance's current container placement.
   */
  export interface Location {
    /**
     * Unique location code used to identify locations on a logical level.
     */
    name: string;

    /**
     * Represents a group of datacenters. Choose one of "AFR", "APAC", "EEUR", "ENAM",
     * "WNAM", "ME", "OC", "SAM", or "WEUR".
     */
    region: string;
  }
}

export interface InstanceListParams extends PageTokenPaginationParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;

  /**
   * Query param: Filter instances by a case-sensitive name prefix, falling back to
   * the actor ID when no name is known. Keep the same prefix when using a page
   * token.
   */
  name_prefix?: string;

  /**
   * Query param: Filters instances by lifecycle state. `active` includes
   * provisioning, running, and stopping instances; `not-active` includes stopped and
   * failed instances. When omitted, all instances are returned.
   */
  state?: 'active' | 'not-active';
}

export interface InstanceGetParams {
  /**
   * Account identifier.
   */
  account_id: string;

  /**
   * An Application ID represents an identifier of an application.
   */
  application_id: string;
}

export interface InstanceListV1Params extends ContainersInstancesV1PaginationParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;

  /**
   * Query param: Filter instances by a case-sensitive name prefix, falling back to
   * the actor ID when no name is known. Keep the same prefix when using a page
   * token.
   */
  name_prefix?: string;

  /**
   * Query param: Filters instances by lifecycle state. `active` includes
   * provisioning, running, and stopping instances; `not-active` includes stopped and
   * failed instances. When omitted, all instances are returned.
   */
  state?: 'active' | 'not-active';
}

export declare namespace Instances {
  export {
    type InstanceListResponse as InstanceListResponse,
    type InstanceGetResponse as InstanceGetResponse,
    type InstanceListV1Response as InstanceListV1Response,
    type InstanceListResponsesPageTokenPagination as InstanceListResponsesPageTokenPagination,
    type InstanceListV1ResponsesContainersInstancesV1Pagination as InstanceListV1ResponsesContainersInstancesV1Pagination,
    type InstanceListParams as InstanceListParams,
    type InstanceGetParams as InstanceGetParams,
    type InstanceListV1Params as InstanceListV1Params,
  };
}
