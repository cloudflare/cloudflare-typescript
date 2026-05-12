// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ApplicationsAPI from './applications';
import {
  ApplicationGetParams,
  ApplicationGetResponse,
  ApplicationListParams,
  ApplicationListResponse,
  ApplicationListResponsesSinglePage,
  Applications,
} from './applications';
import * as CategoriesAPI from './categories';
import {
  Categories,
  CategoryGetParams,
  CategoryGetResponse,
  CategoryListParams,
  CategoryListResponse,
  CategoryListResponsesSinglePage,
} from './categories';

export class ResourceLibrary extends APIResource {
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
}

ResourceLibrary.Applications = Applications;
ResourceLibrary.ApplicationListResponsesSinglePage = ApplicationListResponsesSinglePage;
ResourceLibrary.Categories = Categories;
ResourceLibrary.CategoryListResponsesSinglePage = CategoryListResponsesSinglePage;

export declare namespace ResourceLibrary {
  export {
    Applications as Applications,
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationGetResponse as ApplicationGetResponse,
    ApplicationListResponsesSinglePage as ApplicationListResponsesSinglePage,
    type ApplicationListParams as ApplicationListParams,
    type ApplicationGetParams as ApplicationGetParams,
  };

  export {
    Categories as Categories,
    type CategoryListResponse as CategoryListResponse,
    type CategoryGetResponse as CategoryGetResponse,
    CategoryListResponsesSinglePage as CategoryListResponsesSinglePage,
    type CategoryListParams as CategoryListParams,
    type CategoryGetParams as CategoryGetParams,
  };
}
