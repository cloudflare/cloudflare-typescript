// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseEvents extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'datasets', 'events'] =
    Object.freeze(['cloudforceOne', 'threatEvents', 'datasets', 'events'] as const);

  /**
   * Retrieves a specific event by its UUID.
   *
   * @example
   * ```ts
   * const event =
   *   await client.cloudforceOne.threatEvents.datasets.events.get(
   *     'event_id',
   *     { account_id: 'account_id', dataset_id: 'dataset_id' },
   *   );
   * ```
   */
  get(eventID: string, params: EventGetParams, options?: RequestOptions): APIPromise<EventGetResponse> {
    const { account_id, dataset_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/cloudforce-one/events/dataset/${dataset_id}/events/${eventID}`,
      options,
    );
  }
}
export class Events extends BaseEvents {}

export interface EventGetResponse {
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

export interface EventGetParams {
  /**
   * Account ID.
   */
  account_id: string;

  /**
   * Dataset ID.
   */
  dataset_id: string;
}

export declare namespace Events {
  export { type EventGetResponse as EventGetResponse, type EventGetParams as EventGetParams };
}
