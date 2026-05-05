// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ResourcesAPI from './resources/resources';
import { BaseResources, Resources } from './resources/resources';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseManaged extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'labels', 'managed'] = Object.freeze([
    'apiGateway',
    'labels',
    'managed',
  ] as const);

  /**
   * Retrieve managed label
   *
   * @example
   * ```ts
   * const managed = await client.apiGateway.labels.managed.get(
   *   'login',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(name: string, params: ManagedGetParams, options?: RequestOptions): APIPromise<ManagedGetResponse> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(path`/zones/${zone_id}/api_gateway/labels/managed/${name}`, {
        query,
        ...options,
      }) as APIPromise<{ result: ManagedGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Managed extends BaseManaged {
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);
}

export interface ManagedGetResponse {
  created_at: string;

  /**
   * The description of the label
   */
  description: string;

  last_updated: string;

  /**
   * Metadata for the label
   */
  metadata: unknown;

  /**
   * The name of the label
   */
  name: string;

  /**
   * - `user` - label is owned by the user
   * - `managed` - label is owned by cloudflare
   */
  source: 'user' | 'managed';

  /**
   * Provides counts of what resources are linked to this label
   */
  mapped_resources?: unknown;
}

export interface ManagedGetParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Query param: Include `mapped_resources` for each label
   */
  with_mapped_resource_counts?: boolean;
}

Managed.Resources = Resources;
Managed.BaseResources = BaseResources;

export declare namespace Managed {
  export { type ManagedGetResponse as ManagedGetResponse, type ManagedGetParams as ManagedGetParams };

  export { Resources as Resources, BaseResources as BaseResources };
}
