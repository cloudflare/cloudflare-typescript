// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as AppConfigurationAPI from './app-configuration';

export class Sites extends APIResource {
  appConfiguration: AppConfigurationAPI.AppConfiguration = new AppConfigurationAPI.AppConfiguration(
    this._client,
  );
}

export namespace Sites {
  export import AppConfiguration = AppConfigurationAPI.AppConfiguration;
  export import AppConfigurationCreateResponse = AppConfigurationAPI.AppConfigurationCreateResponse;
  export import AppConfigurationUpdateResponse = AppConfigurationAPI.AppConfigurationUpdateResponse;
  export import AppConfigurationListResponse = AppConfigurationAPI.AppConfigurationListResponse;
  export import AppConfigurationDeleteResponse = AppConfigurationAPI.AppConfigurationDeleteResponse;
  export import AppConfigurationListResponsesSinglePage = AppConfigurationAPI.AppConfigurationListResponsesSinglePage;
  export import AppConfigurationCreateParams = AppConfigurationAPI.AppConfigurationCreateParams;
  export import AppConfigurationUpdateParams = AppConfigurationAPI.AppConfigurationUpdateParams;
  export import AppConfigurationListParams = AppConfigurationAPI.AppConfigurationListParams;
  export import AppConfigurationDeleteParams = AppConfigurationAPI.AppConfigurationDeleteParams;
}
