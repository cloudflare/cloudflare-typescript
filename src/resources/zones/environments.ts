// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ItemsAPI from '../rules/lists/items';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Environments extends APIResource {
  /**
   * Create zone environments
   *
   * @example
   * ```ts
   * const environment = await client.zones.environments.create({
   *   zone_id: 'zone_id',
   *   environments: [
   *     {
   *       expression: 'expression',
   *       locked_on_deployment: true,
   *       name: 'name',
   *       position: {},
   *       ref: 'ref',
   *       version: 0,
   *     },
   *   ],
   * });
   * ```
   */
  create(params: EnvironmentCreateParams, options?: RequestOptions): APIPromise<EnvironmentCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/environments`, { body, ...options }) as APIPromise<{
        result: EnvironmentCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Upsert zone environments
   *
   * @example
   * ```ts
   * const environment = await client.zones.environments.update({
   *   zone_id: 'zone_id',
   *   environments: [
   *     {
   *       expression: 'expression',
   *       locked_on_deployment: true,
   *       name: 'name',
   *       position: {},
   *       ref: 'ref',
   *       version: 0,
   *     },
   *   ],
   * });
   * ```
   */
  update(params: EnvironmentUpdateParams, options?: RequestOptions): APIPromise<EnvironmentUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/environments`, { body, ...options }) as APIPromise<{
        result: EnvironmentUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List zone environments
   *
   * @example
   * ```ts
   * const environments = await client.zones.environments.list({
   *   zone_id: 'zone_id',
   * });
   * ```
   */
  list(params: EnvironmentListParams, options?: RequestOptions): APIPromise<EnvironmentListResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/environments`, options) as APIPromise<{
        result: EnvironmentListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete zone environment
   *
   * @example
   * ```ts
   * const environment = await client.zones.environments.delete(
   *   'environment_id',
   *   { zone_id: 'zone_id' },
   * );
   * ```
   */
  delete(
    environmentID: string,
    params: EnvironmentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(path`/zones/${zone_id}/environments/${environmentID}`, options) as APIPromise<{
        result: EnvironmentDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Partially update zone environments
   *
   * @example
   * ```ts
   * const response = await client.zones.environments.edit({
   *   zone_id: 'zone_id',
   *   environments: [
   *     {
   *       expression: 'expression',
   *       locked_on_deployment: true,
   *       name: 'name',
   *       position: {},
   *       ref: 'ref',
   *       version: 0,
   *     },
   *   ],
   * });
   * ```
   */
  edit(params: EnvironmentEditParams, options?: RequestOptions): APIPromise<EnvironmentEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/environments`, { body, ...options }) as APIPromise<{
        result: EnvironmentEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Roll back zone environment
   *
   * @example
   * ```ts
   * const response = await client.zones.environments.rollback(
   *   'environment_id',
   *   { zone_id: 'zone_id' },
   * );
   * ```
   */
  rollback(
    environmentID: string,
    params: EnvironmentRollbackParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentRollbackResponse> {
    const { zone_id } = params;
    return (
      this._client.post(
        path`/zones/${zone_id}/environments/${environmentID}/rollback`,
        options,
      ) as APIPromise<{ result: EnvironmentRollbackResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface EnvironmentCreateResponse {
  environments: Array<EnvironmentCreateResponse.Environment>;
}

export namespace EnvironmentCreateResponse {
  export interface Environment {
    expression: string;

    locked_on_deployment: boolean | null;

    name: string;

    position: ItemsAPI.ListCursor;

    ref: string;

    version: number | null;

    http_application_id?: string | null;
  }
}

export interface EnvironmentUpdateResponse {
  environments: Array<EnvironmentUpdateResponse.Environment>;
}

export namespace EnvironmentUpdateResponse {
  export interface Environment {
    expression: string;

    locked_on_deployment: boolean | null;

    name: string;

    position: ItemsAPI.ListCursor;

    ref: string;

    version: number | null;

    http_application_id?: string | null;
  }
}

export interface EnvironmentListResponse {
  environments: Array<EnvironmentListResponse.Environment>;
}

export namespace EnvironmentListResponse {
  export interface Environment {
    expression: string;

    locked_on_deployment: boolean | null;

    name: string;

    position: ItemsAPI.ListCursor;

    ref: string;

    version: number | null;

    http_application_id?: string | null;
  }
}

export interface EnvironmentDeleteResponse {
  environments: Array<EnvironmentDeleteResponse.Environment>;
}

export namespace EnvironmentDeleteResponse {
  export interface Environment {
    expression: string;

    locked_on_deployment: boolean | null;

    name: string;

    position: ItemsAPI.ListCursor;

    ref: string;

    version: number | null;

    http_application_id?: string | null;
  }
}

export interface EnvironmentEditResponse {
  environments: Array<EnvironmentEditResponse.Environment>;
}

export namespace EnvironmentEditResponse {
  export interface Environment {
    expression: string;

    locked_on_deployment: boolean | null;

    name: string;

    position: ItemsAPI.ListCursor;

    ref: string;

    version: number | null;

    http_application_id?: string | null;
  }
}

export interface EnvironmentRollbackResponse {
  environments: Array<EnvironmentRollbackResponse.Environment>;
}

export namespace EnvironmentRollbackResponse {
  export interface Environment {
    expression: string;

    locked_on_deployment: boolean | null;

    name: string;

    position: ItemsAPI.ListCursor;

    ref: string;

    version: number | null;

    http_application_id?: string | null;
  }
}

export interface EnvironmentCreateParams {
  /**
   * Path param: Identifier of the zone.
   */
  zone_id: string;

  /**
   * Body param
   */
  environments: Array<EnvironmentCreateParams.Environment>;
}

export namespace EnvironmentCreateParams {
  export interface Environment {
    expression: string;

    locked_on_deployment: boolean | null;

    name: string;

    position: ItemsAPI.ListCursorParam;

    ref: string;

    version: number | null;

    http_application_id?: string | null;
  }
}

export interface EnvironmentUpdateParams {
  /**
   * Path param: Identifier of the zone.
   */
  zone_id: string;

  /**
   * Body param
   */
  environments: Array<EnvironmentUpdateParams.Environment>;
}

export namespace EnvironmentUpdateParams {
  export interface Environment {
    expression: string;

    locked_on_deployment: boolean | null;

    name: string;

    position: ItemsAPI.ListCursorParam;

    ref: string;

    version: number | null;

    http_application_id?: string | null;
  }
}

export interface EnvironmentListParams {
  /**
   * Identifier of the zone.
   */
  zone_id: string;
}

export interface EnvironmentDeleteParams {
  /**
   * Identifier of the zone.
   */
  zone_id: string;
}

export interface EnvironmentEditParams {
  /**
   * Path param: Identifier of the zone.
   */
  zone_id: string;

  /**
   * Body param
   */
  environments: Array<EnvironmentEditParams.Environment>;
}

export namespace EnvironmentEditParams {
  export interface Environment {
    expression: string;

    locked_on_deployment: boolean | null;

    name: string;

    position: ItemsAPI.ListCursorParam;

    ref: string;

    version: number | null;

    http_application_id?: string | null;
  }
}

export interface EnvironmentRollbackParams {
  /**
   * Identifier of the zone.
   */
  zone_id: string;
}

export declare namespace Environments {
  export {
    type EnvironmentCreateResponse as EnvironmentCreateResponse,
    type EnvironmentUpdateResponse as EnvironmentUpdateResponse,
    type EnvironmentListResponse as EnvironmentListResponse,
    type EnvironmentDeleteResponse as EnvironmentDeleteResponse,
    type EnvironmentEditResponse as EnvironmentEditResponse,
    type EnvironmentRollbackResponse as EnvironmentRollbackResponse,
    type EnvironmentCreateParams as EnvironmentCreateParams,
    type EnvironmentUpdateParams as EnvironmentUpdateParams,
    type EnvironmentListParams as EnvironmentListParams,
    type EnvironmentDeleteParams as EnvironmentDeleteParams,
    type EnvironmentEditParams as EnvironmentEditParams,
    type EnvironmentRollbackParams as EnvironmentRollbackParams,
  };
}
