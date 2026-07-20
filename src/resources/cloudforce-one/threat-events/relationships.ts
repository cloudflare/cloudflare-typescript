// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseRelationships extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'relationships'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'relationships',
  ] as const);

  /**
   * The `event_id` must be defined (to list existing events (and their IDs), use the
   * [`Filter and List Events`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/methods/list/)
   * endpoint). Also, must provide query parameters.
   *
   * @example
   * ```ts
   * const relationships =
   *   await client.cloudforceOne.threatEvents.relationships.list(
   *     'event_id',
   *     { account_id: 'account_id', datasetId: 'datasetId' },
   *   );
   * ```
   */
  list(
    eventID: string,
    params: RelationshipListParams,
    options?: RequestOptions,
  ): APIPromise<RelationshipListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/${eventID}/relationships`, {
      query,
      ...options,
    });
  }
}
export class Relationships extends BaseRelationships {}

export type RelationshipListResponse = Array<RelationshipListResponse.RelationshipListResponseItem>;

export namespace RelationshipListResponse {
  export interface RelationshipListResponseItem {
    attacker: string;

    attackerCountry: string;

    attackerCountryAlpha3: string;

    category: string;

    datasetId: string;

    date: string;

    event: string;

    hasChildren: boolean;

    indicator: string;

    indicatorType: string;

    indicatorTypeId: number;

    killChain: number;

    mitreAttack: Array<string>;

    mitreCapec: Array<string>;

    numReferenced: number;

    numReferences: number;

    rawId: string;

    referenced: Array<string>;

    referencedIds: Array<number>;

    references: Array<string>;

    referencesIds: Array<number>;

    tags: Array<string>;

    targetCountry: string;

    targetCountryAlpha3: string;

    targetIndustry: string;

    tlp: string;

    uuid: string;

    insight?: string;

    releasabilityId?: string;
  }
}

export interface RelationshipListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: The dataset ID to search within.
   */
  datasetId: string;

  /**
   * Query param: The direction to traverse the graph. Defaults to 'both' to search
   * all.
   */
  direction?: 'ancestors' | 'descendants' | 'both';

  /**
   * Query param: Whether to include the starting event in the results. Defaults to
   * true.
   */
  includeParent?: boolean;

  /**
   * Query param: An optional array of indicator type IDs to filter the results by.
   */
  indicatorTypeIds?: Array<string>;

  /**
   * Query param: The maximum depth to traverse. Defaults to 5.
   */
  maxDepth?: number;

  /**
   * Query param
   */
  page?: number;

  /**
   * Query param
   */
  pageSize?: number;

  /**
   * Query param: An optional array of relationship types to filter by.
   */
  relationshipTypes?: string | Array<string>;
}

export declare namespace Relationships {
  export {
    type RelationshipListResponse as RelationshipListResponse,
    type RelationshipListParams as RelationshipListParams,
  };
}
