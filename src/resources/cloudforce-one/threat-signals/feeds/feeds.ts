// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RawAPI from './raw';
import { BaseRaw, Raw, RawGetParams, RawGetResponse } from './raw';
import * as SkillsAPI from './skills';
import {
  BaseSkills,
  SkillGetParams,
  SkillGetResponse,
  SkillUpdateParams,
  SkillUpdateResponse,
  Skills,
} from './skills';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, V4PagePagination, type V4PagePaginationParams } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseFeeds extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatSignals', 'feeds'] = Object.freeze([
    'cloudforceOne',
    'threatSignals',
    'feeds',
  ] as const);

  /**
   * Subscribes the account to a custom or curated Threat Signals feed.
   *
   * @example
   * ```ts
   * const feed =
   *   await client.cloudforceOne.threatSignals.feeds.create({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  create(params: FeedCreateParams, options?: RequestOptions): APIPromise<FeedCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/feeds`, {
        body,
        ...options,
      }) as APIPromise<{ result: FeedCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the account's Threat Signals feed subscriptions.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const feedListResponse of client.cloudforceOne.threatSignals.feeds.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: FeedListParams,
    options?: RequestOptions,
  ): PagePromise<FeedListResponsesV4PagePagination, FeedListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/feeds`,
      V4PagePagination<FeedListResponse>,
      { query, ...options },
    );
  }

  /**
   * Unsubscribes the account from a Threat Signals feed and deletes its articles.
   *
   * @example
   * ```ts
   * const feed =
   *   await client.cloudforceOne.threatSignals.feeds.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(feedID: string, params: FeedDeleteParams, options?: RequestOptions): APIPromise<FeedDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/feeds/${feedID}`,
        options,
      ) as APIPromise<{ result: FeedDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a Threat Signals feed subscription.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cloudforceOne.threatSignals.feeds.edit(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  edit(feedID: string, params: FeedEditParams, options?: RequestOptions): APIPromise<FeedEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/feeds/${feedID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: FeedEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Starts an immediate poll of one or all Threat Signals feeds.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cloudforceOne.threatSignals.feeds.poll({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  poll(params: FeedPollParams, options?: RequestOptions): APIPromise<FeedPollResponse> {
    const { account_id, feed_id } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/feeds/poll`, {
        query: { feed_id },
        ...options,
      }) as APIPromise<{ result: FeedPollResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Feeds extends BaseFeeds {
  raw: RawAPI.Raw = new RawAPI.Raw(this._client);
  skills: SkillsAPI.Skills = new SkillsAPI.Skills(this._client);
}

export type FeedListResponsesV4PagePagination = V4PagePagination<FeedListResponse>;

export interface FeedCreateResponse {
  id: string;

  /**
   * Feed category identifier. Null when unset.
   */
  category_id: string | null;

  /**
   * Display name of the feed category. Null when unset or unresolvable.
   */
  category_name: string | null;

  created_at: string;

  /**
   * Curated catalog feed this subscription was created from. Null for custom feeds.
   */
  curated_feed_id: string | null;

  display_name: string | null;

  enabled: boolean;

  last_polled_at: string | null;

  poll_interval_s: number;

  /**
   * `custom` for a feed added by URL, `curated` for a curated catalog feed.
   */
  source_type: string;

  /**
   * Polling health: `active`, or `error` after a failed poll.
   */
  status: string;

  subscribed_at: string | null;

  title: string | null;

  updated_at: string;

  url: string;
}

export interface FeedListResponse {
  /**
   * Number of feeds on this page.
   */
  count: number;

  feeds: Array<FeedListResponse.Feed>;

  page: number;

  per_page: number;

  total_count: number;
}

export namespace FeedListResponse {
  export interface Feed {
    id: string;

    /**
     * Feed category identifier. Null when unset.
     */
    category_id: string | null;

    /**
     * Display name of the feed category. Null when unset or unresolvable.
     */
    category_name: string | null;

    created_at: string;

    /**
     * Curated catalog feed this subscription was created from. Null for custom feeds.
     */
    curated_feed_id: string | null;

    display_name: string | null;

    enabled: boolean;

    last_polled_at: string | null;

    poll_interval_s: number;

    /**
     * `custom` for a feed added by URL, `curated` for a curated catalog feed.
     */
    source_type: string;

    /**
     * Polling health: `active`, or `error` after a failed poll.
     */
    status: string;

    subscribed_at: string | null;

    title: string | null;

    updated_at: string;

    url: string;
  }
}

export interface FeedDeleteResponse {
  id: string;

  /**
   * Feed category identifier. Null when unset.
   */
  category_id: string | null;

  /**
   * Display name of the feed category. Null when unset or unresolvable.
   */
  category_name: string | null;

  created_at: string;

  /**
   * Curated catalog feed this subscription was created from. Null for custom feeds.
   */
  curated_feed_id: string | null;

  display_name: string | null;

  enabled: boolean;

  last_polled_at: string | null;

  poll_interval_s: number;

  /**
   * `custom` for a feed added by URL, `curated` for a curated catalog feed.
   */
  source_type: string;

  /**
   * Polling health: `active`, or `error` after a failed poll.
   */
  status: string;

  subscribed_at: string | null;

  title: string | null;

  updated_at: string;

  url: string;
}

export interface FeedEditResponse {
  id: string;

  /**
   * Feed category identifier. Null when unset.
   */
  category_id: string | null;

  /**
   * Display name of the feed category. Null when unset or unresolvable.
   */
  category_name: string | null;

  created_at: string;

  /**
   * Curated catalog feed this subscription was created from. Null for custom feeds.
   */
  curated_feed_id: string | null;

  display_name: string | null;

  enabled: boolean;

  last_polled_at: string | null;

  poll_interval_s: number;

  /**
   * `custom` for a feed added by URL, `curated` for a curated catalog feed.
   */
  source_type: string;

  /**
   * Polling health: `active`, or `error` after a failed poll.
   */
  status: string;

  subscribed_at: string | null;

  title: string | null;

  updated_at: string;

  url: string;
}

export interface FeedPollResponse {
  errors: number;

  feeds: Array<FeedPollResponse.Feed>;

  triggered: number;
}

export namespace FeedPollResponse {
  export interface Feed {
    feed_id: string;

    status: 'workflow_created' | 'error';

    workflow_id: string;

    feed_enabled?: boolean;
  }
}

export interface FeedCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: One of the predefined Threat Signals feed categories; see GET
   * /:account_id/v2/threat-signals/categories.
   */
  category_id?:
    | 'b12a0fd6-f7b9-5393-9ef3-f888d506c550'
    | 'd5b70eaa-626f-5761-b55b-6d9590df49fb'
    | '3b572d2b-890d-5286-9433-f18c85079030'
    | '17f90d3b-37d3-5241-8ad4-7d6abbc2006c'
    | 'c68f28e9-7e8f-5d4b-853b-f3076893a9ee'
    | 'bb0e4a94-38ab-5c14-80a7-28cee9f4b139'
    | 'b1ef66d9-a73c-58dc-b269-22d34dfd11f4'
    | 'ab02a976-0a20-5c76-a553-7f6325afacfe'
    | null;

  /**
   * Body param
   */
  curated_feed_id?: string;

  /**
   * Body param
   */
  display_name?: string | null;

  /**
   * Body param
   */
  enabled?: boolean;

  /**
   * Body param
   */
  poll_interval_s?: number;

  /**
   * Body param
   */
  title?: string | null;

  /**
   * Body param
   */
  url?: string;
}

export interface FeedListParams extends V4PagePaginationParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param
   */
  category?: string;

  /**
   * Query param
   */
  enabled?: boolean;

  /**
   * Query param
   */
  limit?: number;

  /**
   * Query param
   */
  sort?: string;

  /**
   * Query param
   */
  source_type?: 'curated' | 'custom';

  /**
   * Query param
   */
  status?: string;
}

export interface FeedDeleteParams {
  account_id: string;
}

export interface FeedEditParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: One of the predefined Threat Signals feed categories; see GET
   * /:account_id/v2/threat-signals/categories.
   */
  category_id?:
    | 'b12a0fd6-f7b9-5393-9ef3-f888d506c550'
    | 'd5b70eaa-626f-5761-b55b-6d9590df49fb'
    | '3b572d2b-890d-5286-9433-f18c85079030'
    | '17f90d3b-37d3-5241-8ad4-7d6abbc2006c'
    | 'c68f28e9-7e8f-5d4b-853b-f3076893a9ee'
    | 'bb0e4a94-38ab-5c14-80a7-28cee9f4b139'
    | 'b1ef66d9-a73c-58dc-b269-22d34dfd11f4'
    | 'ab02a976-0a20-5c76-a553-7f6325afacfe'
    | null;

  /**
   * Body param
   */
  display_name?: string | null;

  /**
   * Body param
   */
  enabled?: boolean;

  /**
   * Body param
   */
  poll_interval_s?: number;

  /**
   * Body param
   */
  title?: string | null;
}

export interface FeedPollParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param
   */
  feed_id?: (string & {}) | 'all';
}

Feeds.Raw = Raw;
Feeds.BaseRaw = BaseRaw;
Feeds.Skills = Skills;
Feeds.BaseSkills = BaseSkills;

export declare namespace Feeds {
  export {
    type FeedCreateResponse as FeedCreateResponse,
    type FeedListResponse as FeedListResponse,
    type FeedDeleteResponse as FeedDeleteResponse,
    type FeedEditResponse as FeedEditResponse,
    type FeedPollResponse as FeedPollResponse,
    type FeedListResponsesV4PagePagination as FeedListResponsesV4PagePagination,
    type FeedCreateParams as FeedCreateParams,
    type FeedListParams as FeedListParams,
    type FeedDeleteParams as FeedDeleteParams,
    type FeedEditParams as FeedEditParams,
    type FeedPollParams as FeedPollParams,
  };

  export {
    Raw as Raw,
    BaseRaw as BaseRaw,
    type RawGetResponse as RawGetResponse,
    type RawGetParams as RawGetParams,
  };

  export {
    Skills as Skills,
    BaseSkills as BaseSkills,
    type SkillUpdateResponse as SkillUpdateResponse,
    type SkillGetResponse as SkillGetResponse,
    type SkillUpdateParams as SkillUpdateParams,
    type SkillGetParams as SkillGetParams,
  };
}
