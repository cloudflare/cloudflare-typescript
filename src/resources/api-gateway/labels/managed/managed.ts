// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ResourcesAPI from './resources/resources';
import { Resources } from './resources/resources';

export class Managed extends APIResource {
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);

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
  get(
    name: string,
    params: ManagedGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ManagedGetResponse> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/api_gateway/labels/managed/${name}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: ManagedGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
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

export declare namespace Managed {
  export { type ManagedGetResponse as ManagedGetResponse, type ManagedGetParams as ManagedGetParams };

  export { Resources as Resources };
}
