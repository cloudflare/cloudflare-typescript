// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CategoriesAPI from './categories';
import { BaseCategories, Categories, CategoryListParams, CategoryListResponse } from './categories';
import * as IndicatorsAPI from './indicators';
import { BaseIndicators, IndicatorListParams, IndicatorListResponse, Indicators } from './indicators';
import * as SearchAPI from './search';
import { BaseSearch, Search, SearchSearchParams, SearchSearchResponse } from './search';
import * as ArticlesAPI from './articles/articles';
import {
  ArticleBulkEditParams,
  ArticleBulkEditResponse,
  ArticleEditParams,
  ArticleEditResponse,
  ArticleGetParams,
  ArticleGetResponse,
  ArticleListParams,
  ArticleListResponse,
  Articles,
  BaseArticles,
} from './articles/articles';
import * as FeedsAPI from './feeds/feeds';
import {
  BaseFeeds,
  FeedCreateParams,
  FeedCreateResponse,
  FeedDeleteParams,
  FeedDeleteResponse,
  FeedEditParams,
  FeedEditResponse,
  FeedListParams,
  FeedListResponse,
  FeedListResponsesV4PagePagination,
  FeedPollParams,
  FeedPollResponse,
  Feeds,
} from './feeds/feeds';
import * as SkillsAPI from './skills/skills';
import {
  BaseSkills,
  SkillCreateParams,
  SkillCreateResponse,
  SkillDeleteParams,
  SkillDeleteResponse,
  SkillEditParams,
  SkillEditResponse,
  SkillGetParams,
  SkillGetResponse,
  SkillListParams,
  SkillListResponse,
  SkillListResponsesV4PagePagination,
  Skills,
} from './skills/skills';

/**
 * Threat Signals API for managing threat intelligence feeds, articles, indicators, and AI skills in Cloudforce One.
 *
 * ## Prerequisites
 *
 * 1. **API token** — requests must use an API token with Cloudforce One permissions; write operations (creating, editing, or deleting feeds, skills, and tags) require write access.
 * 2. **Plan limits** — access on the Free plan is limited; feed quotas and managed default skills apply.
 */
export class BaseThreatSignals extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatSignals'] = Object.freeze([
    'cloudforceOne',
    'threatSignals',
  ] as const);
}
/**
 * Threat Signals API for managing threat intelligence feeds, articles, indicators, and AI skills in Cloudforce One.
 *
 * ## Prerequisites
 *
 * 1. **API token** — requests must use an API token with Cloudforce One permissions; write operations (creating, editing, or deleting feeds, skills, and tags) require write access.
 * 2. **Plan limits** — access on the Free plan is limited; feed quotas and managed default skills apply.
 */
export class ThreatSignals extends BaseThreatSignals {
  search: SearchAPI.Search = new SearchAPI.Search(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
  feeds: FeedsAPI.Feeds = new FeedsAPI.Feeds(this._client);
  articles: ArticlesAPI.Articles = new ArticlesAPI.Articles(this._client);
  indicators: IndicatorsAPI.Indicators = new IndicatorsAPI.Indicators(this._client);
  skills: SkillsAPI.Skills = new SkillsAPI.Skills(this._client);
}

ThreatSignals.Search = Search;
ThreatSignals.BaseSearch = BaseSearch;
ThreatSignals.Categories = Categories;
ThreatSignals.BaseCategories = BaseCategories;
ThreatSignals.Feeds = Feeds;
ThreatSignals.BaseFeeds = BaseFeeds;
ThreatSignals.Articles = Articles;
ThreatSignals.BaseArticles = BaseArticles;
ThreatSignals.Indicators = Indicators;
ThreatSignals.BaseIndicators = BaseIndicators;
ThreatSignals.Skills = Skills;
ThreatSignals.BaseSkills = BaseSkills;

export declare namespace ThreatSignals {
  export {
    Search as Search,
    BaseSearch as BaseSearch,
    type SearchSearchResponse as SearchSearchResponse,
    type SearchSearchParams as SearchSearchParams,
  };

  export {
    Categories as Categories,
    BaseCategories as BaseCategories,
    type CategoryListResponse as CategoryListResponse,
    type CategoryListParams as CategoryListParams,
  };

  export {
    Feeds as Feeds,
    BaseFeeds as BaseFeeds,
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
    Articles as Articles,
    BaseArticles as BaseArticles,
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
    Indicators as Indicators,
    BaseIndicators as BaseIndicators,
    type IndicatorListResponse as IndicatorListResponse,
    type IndicatorListParams as IndicatorListParams,
  };

  export {
    Skills as Skills,
    BaseSkills as BaseSkills,
    type SkillCreateResponse as SkillCreateResponse,
    type SkillListResponse as SkillListResponse,
    type SkillDeleteResponse as SkillDeleteResponse,
    type SkillEditResponse as SkillEditResponse,
    type SkillGetResponse as SkillGetResponse,
    type SkillListResponsesV4PagePagination as SkillListResponsesV4PagePagination,
    type SkillCreateParams as SkillCreateParams,
    type SkillListParams as SkillListParams,
    type SkillDeleteParams as SkillDeleteParams,
    type SkillEditParams as SkillEditParams,
    type SkillGetParams as SkillGetParams,
  };
}
