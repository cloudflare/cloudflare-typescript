// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Tags extends APIResource {
  /**
   * Creates a new tag to be used accross threat events.
   *
   * @example
   * ```ts
   * const tag =
   *   await client.cloudforceOne.threatEvents.tags.create({
   *     account_id: 'account_id',
   *     value: 'APT28',
   *   });
   * ```
   */
  create(params: TagCreateParams, options?: Core.RequestOptions): Core.APIPromise<TagCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/cloudforce-one/events/tags/create`, {
      body,
      ...options,
    });
  }
}

export interface TagCreateResponse {
  uuid: string;

  value: string;

  activeDuration?: string;

  actorCategory?: string;

  aliasGroupNames?: Array<string>;

  aliasGroupNamesInternal?: Array<string>;

  analyticPriority?: number;

  attributionConfidence?: string;

  attributionOrganization?: string;

  categoryName?: string;

  externalReferenceLinks?: Array<string>;

  internalDescription?: string;

  motive?: string;

  opsecLevel?: string;

  originCountryISO?: string;

  priority?: number;

  sophisticationLevel?: string;
}

export interface TagCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param:
   */
  value: string;

  /**
   * Body param:
   */
  activeDuration?: string;

  /**
   * Body param:
   */
  actorCategory?: string;

  /**
   * Body param:
   */
  aliasGroupNames?: Array<string>;

  /**
   * Body param:
   */
  aliasGroupNamesInternal?: Array<string>;

  /**
   * Body param:
   */
  analyticPriority?: number;

  /**
   * Body param:
   */
  attributionConfidence?: string;

  /**
   * Body param:
   */
  attributionOrganization?: string;

  /**
   * Body param:
   */
  categoryUuid?: string;

  /**
   * Body param:
   */
  externalReferenceLinks?: Array<string>;

  /**
   * Body param:
   */
  internalDescription?: string;

  /**
   * Body param:
   */
  motive?: string;

  /**
   * Body param:
   */
  opsecLevel?: string;

  /**
   * Body param:
   */
  originCountryISO?: string;

  /**
   * Body param:
   */
  priority?: number;

  /**
   * Body param:
   */
  sophisticationLevel?: string;
}

export declare namespace Tags {
  export { type TagCreateResponse as TagCreateResponse, type TagCreateParams as TagCreateParams };
}
