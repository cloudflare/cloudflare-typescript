// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ApplicationsAPI from './applications';
import {
  ApplicationGetParams,
  ApplicationGetResponse,
  ApplicationListParams,
  ApplicationListResponse,
  ApplicationListResponsesSinglePage,
  Applications,
  BaseApplications,
} from './applications';
import * as CategoriesAPI from './categories';
import {
  BaseCategories,
  Categories,
  CategoryGetParams,
  CategoryGetResponse,
  CategoryListParams,
  CategoryListResponse,
  CategoryListResponsesSinglePage,
} from './categories';

export class BaseResourceLibrary extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'resourceLibrary'] = Object.freeze([
    'zeroTrust',
    'resourceLibrary',
  ] as const);
}
export class ResourceLibrary extends BaseResourceLibrary {
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
}

ResourceLibrary.Applications = Applications;
ResourceLibrary.BaseApplications = BaseApplications;
ResourceLibrary.Categories = Categories;
ResourceLibrary.BaseCategories = BaseCategories;

export declare namespace ResourceLibrary {
  export {
    Applications as Applications,
    BaseApplications as BaseApplications,
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationGetResponse as ApplicationGetResponse,
    type ApplicationListResponsesSinglePage as ApplicationListResponsesSinglePage,
    type ApplicationListParams as ApplicationListParams,
    type ApplicationGetParams as ApplicationGetParams,
  };

  export {
    Categories as Categories,
    BaseCategories as BaseCategories,
    type CategoryListResponse as CategoryListResponse,
    type CategoryGetResponse as CategoryGetResponse,
    type CategoryListResponsesSinglePage as CategoryListResponsesSinglePage,
    type CategoryListParams as CategoryListParams,
    type CategoryGetParams as CategoryGetParams,
  };
}
