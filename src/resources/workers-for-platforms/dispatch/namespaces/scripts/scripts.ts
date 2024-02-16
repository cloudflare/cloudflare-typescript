// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ContentAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/content';
import * as SettingsAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/settings';

export class Scripts extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

export namespace Scripts {
  export import Content = ContentAPI.Content;
  export import ContentUpdateResponse = ContentAPI.ContentUpdateResponse;
  export import ContentUpdateParams = ContentAPI.ContentUpdateParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingUpdateResponse = SettingsAPI.SettingUpdateResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
}
