// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
  BaseApps,
} from './apps/apps';

export class BaseFlagship extends APIResource {
  static override readonly _key: readonly ['flagship'] = Object.freeze(['flagship'] as const);
}
export class Flagship extends BaseFlagship {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
}

Flagship.Apps = Apps;
Flagship.BaseApps = BaseApps;

export declare namespace Flagship {
  export {
    Apps as Apps,
    BaseApps as BaseApps,
    type AppCreateResponse as AppCreateResponse,
    type AppUpdateResponse as AppUpdateResponse,
    type AppListResponse as AppListResponse,
    type AppDeleteResponse as AppDeleteResponse,
    type AppGetResponse as AppGetResponse,
    type AppListResponsesSinglePage as AppListResponsesSinglePage,
    type AppCreateParams as AppCreateParams,
    type AppUpdateParams as AppUpdateParams,
    type AppListParams as AppListParams,
    type AppDeleteParams as AppDeleteParams,
    type AppGetParams as AppGetParams,
  };
}
