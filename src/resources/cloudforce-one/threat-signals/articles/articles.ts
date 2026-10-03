// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ContentAPI from './content';
import { BaseContent, Content, ContentGetParams, ContentGetResponse } from './content';
import * as SkillOutputsAPI from './skill-outputs';
import {
  BaseSkillOutputs,
  SkillOutputGetParams,
  SkillOutputGetResponse,
  SkillOutputs,
} from './skill-outputs';
import * as TagsAPI from './tags';
import {
  BaseTags,
  TagCreateParams,
  TagCreateResponse,
  TagDeleteParams,
  TagDeleteResponse,
  TagGenerateParams,
  TagGenerateResponse,
  Tags,
} from './tags';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseArticles extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatSignals', 'articles'] = Object.freeze([
    'cloudforceOne',
    'threatSignals',
    'articles',
  ] as const);

  /**
   * Lists articles from the account's Threat Signals feeds.
   *
   * @example
   * ```ts
   * const articles =
   *   await client.cloudforceOne.threatSignals.articles.list({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  list(params: ArticleListParams, options?: RequestOptions): APIPromise<ArticleListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/articles`, {
        query,
        ...options,
      }) as APIPromise<{ result: ArticleListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Marks up to 50 Threat Signals articles as read or unread.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cloudforceOne.threatSignals.articles.bulkEdit(
   *     {
   *       account_id: 'account_id',
   *       article_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
   *       read: true,
   *     },
   *   );
   * ```
   */
  bulkEdit(params: ArticleBulkEditParams, options?: RequestOptions): APIPromise<ArticleBulkEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/articles`, {
        body,
        ...options,
      }) as APIPromise<{ result: ArticleBulkEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Marks a Threat Signals article as read or unread.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cloudforceOne.threatSignals.articles.edit(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id', read: true },
   *   );
   * ```
   */
  edit(
    articleID: string,
    params: ArticleEditParams,
    options?: RequestOptions,
  ): APIPromise<ArticleEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/articles/${articleID}`,
        { body, ...options },
      ) as APIPromise<{ result: ArticleEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a Threat Signals article with its summary, tags and indicator status.
   *
   * @example
   * ```ts
   * const article =
   *   await client.cloudforceOne.threatSignals.articles.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(articleID: string, params: ArticleGetParams, options?: RequestOptions): APIPromise<ArticleGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/articles/${articleID}`,
        options,
      ) as APIPromise<{ result: ArticleGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Articles extends BaseArticles {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  skillOutputs: SkillOutputsAPI.SkillOutputs = new SkillOutputsAPI.SkillOutputs(this._client);
}

export interface ArticleListResponse {
  articles: Array<ArticleListResponse.Article>;

  has_more: boolean;

  next_cursor: string | null;

  total_count: number | null;

  total_count_is_exact: boolean;
}

export namespace ArticleListResponse {
  export interface Article {
    id: string;

    /**
     * Threat Events dataset identifier for the article redirect. Null when the account
     * feeds dataset mapping is unavailable.
     */
    dataset_id: string | null;

    /**
     * Threat Events event identifier associated with this article for a UI redirect.
     * Null when no event has been linked.
     */
    event_id: string | null;

    feed_display_name: string | null;

    feed_id: string;

    fetched_at: string;

    link: string | null;

    published_at: string | null;

    read: boolean;

    read_at: string | null;

    /**
     * Persisted enrichment summary. Null until enrichment produces a summary.
     */
    summary: string | null;

    tags: Array<Article.Tag>;

    title: string | null;
  }

  export namespace Article {
    export interface Tag {
      applied_by: 'ai' | 'analyst' | 'system';

      categoryId: string | null;

      uuid: string;

      value: string;
    }
  }
}

export interface ArticleBulkEditResponse {
  updated_count: number;
}

export interface ArticleEditResponse {
  id: string;

  bullet_points: ArticleEditResponse.BulletPoints | null;

  content_r2_key: string | null;

  feed_display_name: string | null;

  feed_id: string;

  fetched_at: string;

  /**
   * Progress of the article's indicator extraction and IOC contextualization run.
   * complete and failed are terminal; unknown means no run has been recorded.
   */
  indicator_extraction_status: 'in_progress' | 'complete' | 'failed' | 'unknown';

  link: string | null;

  metadata: { [key: string]: unknown } | null;

  published_at: string | null;

  read: boolean;

  read_at: string | null;

  source_count: number;

  /**
   * Persisted enrichment summary. Null until enrichment produces a summary.
   */
  summary: string | null;

  summary_r2_key: string | null;

  tags: Array<ArticleEditResponse.Tag>;

  title: string | null;

  skill_version?: string | null;

  tag_skill_version?: string | null;
}

export namespace ArticleEditResponse {
  export interface BulletPoints {
    impact: string;

    what_happened: string;

    who_affected: string;
  }

  export interface Tag {
    applied_by: 'ai' | 'analyst' | 'system';

    categoryId: string | null;

    uuid: string;

    value: string;
  }
}

export interface ArticleGetResponse {
  id: string;

  bullet_points: ArticleGetResponse.BulletPoints | null;

  content_r2_key: string | null;

  feed_display_name: string | null;

  feed_id: string;

  fetched_at: string;

  /**
   * Progress of the article's indicator extraction and IOC contextualization run.
   * complete and failed are terminal; unknown means no run has been recorded.
   */
  indicator_extraction_status: 'in_progress' | 'complete' | 'failed' | 'unknown';

  link: string | null;

  metadata: { [key: string]: unknown } | null;

  published_at: string | null;

  read: boolean;

  read_at: string | null;

  source_count: number;

  /**
   * Persisted enrichment summary. Null until enrichment produces a summary.
   */
  summary: string | null;

  summary_r2_key: string | null;

  tags: Array<ArticleGetResponse.Tag>;

  title: string | null;

  skill_version?: string | null;

  tag_skill_version?: string | null;
}

export namespace ArticleGetResponse {
  export interface BulletPoints {
    impact: string;

    what_happened: string;

    who_affected: string;
  }

  export interface Tag {
    applied_by: 'ai' | 'analyst' | 'system';

    categoryId: string | null;

    uuid: string;

    value: string;
  }
}

export interface ArticleListParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param: Repeatable article UUID filter. Returns the union of matching
   * account-owned articles; use this to list every Threat Signals article referenced
   * by an indicator's sources.
   */
  article_id?: Array<string>;

  /**
   * Query param: Opaque cursor from a previous response's `next_cursor`. When
   * provided, pagination, ordering, totals, and article filters come from the
   * cursor. Sending `per_page`, `sort`, `include_total`, or any article filter
   * alongside it returns a 400 `CursorFilterConflictError`.
   */
  cursor?: string;

  /**
   * Query param
   */
  feed_category?: string;

  /**
   * Query param
   */
  feed_id?: string;

  /**
   * Query param
   */
  fetched_after?: string;

  /**
   * Query param
   */
  fetched_before?: string;

  /**
   * Query param
   */
  include_total?: boolean;

  /**
   * Query param
   */
  per_page?: number;

  /**
   * Query param
   */
  published_after?: string;

  /**
   * Query param
   */
  published_before?: string;

  /**
   * Query param
   */
  read?: boolean;

  /**
   * Query param
   */
  search?: string;

  /**
   * Query param
   */
  sort?: string;

  /**
   * Query param
   */
  source_type?: 'curated' | 'custom';

  /**
   * @deprecated Query param: Legacy human-readable tag-value filter. Ignored when
   * tag_id is supplied; prefer tag_id.
   */
  tag?: string;

  /**
   * Query param: Assignment provenance filter. When combined with tag_id or
   * tag_category_id, the matching assignment must have this provenance.
   */
  tag_applied_by?: 'ai' | 'analyst' | 'system';

  /**
   * @deprecated Query param: Legacy category-name disambiguator for tag. It has no
   * effect without tag; prefer tag_category_id.
   */
  tag_category?: string;

  /**
   * Query param: Repeatable tag-category UUID filter. An article matches any
   * selected category; when tag_id is also present, the tag and category groups are
   * ANDed.
   */
  tag_category_id?: Array<string>;

  /**
   * Query param: Repeatable tag UUID filter. An article matches any selected tag.
   */
  tag_id?: Array<string>;
}

export interface ArticleBulkEditParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  article_ids: Array<string>;

  /**
   * Body param
   */
  read: boolean;
}

export interface ArticleEditParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  read: boolean;
}

export interface ArticleGetParams {
  account_id: string;
}

Articles.Content = Content;
Articles.BaseContent = BaseContent;
Articles.Tags = Tags;
Articles.BaseTags = BaseTags;
Articles.SkillOutputs = SkillOutputs;
Articles.BaseSkillOutputs = BaseSkillOutputs;

export declare namespace Articles {
  export {
    type ArticleListResponse as ArticleListResponse,
    type ArticleBulkEditResponse as ArticleBulkEditResponse,
    type ArticleEditResponse as ArticleEditResponse,
    type ArticleGetResponse as ArticleGetResponse,
    type ArticleListParams as ArticleListParams,
    type ArticleBulkEditParams as ArticleBulkEditParams,
    type ArticleEditParams as ArticleEditParams,
    type ArticleGetParams as ArticleGetParams,
  };

  export {
    Content as Content,
    BaseContent as BaseContent,
    type ContentGetResponse as ContentGetResponse,
    type ContentGetParams as ContentGetParams,
  };

  export {
    Tags as Tags,
    BaseTags as BaseTags,
    type TagCreateResponse as TagCreateResponse,
    type TagDeleteResponse as TagDeleteResponse,
    type TagGenerateResponse as TagGenerateResponse,
    type TagCreateParams as TagCreateParams,
    type TagDeleteParams as TagDeleteParams,
    type TagGenerateParams as TagGenerateParams,
  };

  export {
    SkillOutputs as SkillOutputs,
    BaseSkillOutputs as BaseSkillOutputs,
    type SkillOutputGetResponse as SkillOutputGetResponse,
    type SkillOutputGetParams as SkillOutputGetParams,
  };
}
