// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AppsAPI from './apps/apps';
import {
  AppCreateParams,
  AppCreateResponse,
  AppDeleteParams,
  AppDeleteResponse,
  AppGetParams,
  AppGetResponse,
  AppListParams,
  AppListResponse,
  AppListResponsesSinglePage,
  AppUpdateParams,
  AppUpdateResponse,
  Apps,
} from './apps/apps';

export class Flagship extends APIResource {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
}

Flagship.Apps = Apps;
Flagship.AppListResponsesSinglePage = AppListResponsesSinglePage;

export declare namespace Flagship {
  export {
    Apps as Apps,
    type AppCreateResponse as AppCreateResponse,
    type AppUpdateResponse as AppUpdateResponse,
    type AppListResponse as AppListResponse,
    type AppDeleteResponse as AppDeleteResponse,
    type AppGetResponse as AppGetResponse,
    AppListResponsesSinglePage as AppListResponsesSinglePage,
    type AppCreateParams as AppCreateParams,
    type AppUpdateParams as AppUpdateParams,
    type AppListParams as AppListParams,
    type AppDeleteParams as AppDeleteParams,
    type AppGetParams as AppGetParams,
  };
}
