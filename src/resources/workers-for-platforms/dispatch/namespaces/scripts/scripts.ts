// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AssetUploadAPI from './asset-upload';
import { AssetUpload, BaseAssetUpload } from './asset-upload';
import * as BindingsAPI from './bindings';
import { BaseBindings, Bindings } from './bindings';
import * as ContentAPI from './content';
import { BaseContent, Content } from './content';
import * as SecretsAPI from './secrets';
import { BaseSecrets, Secrets } from './secrets';
import * as SettingsAPI from './settings';
import { BaseSettings, Settings } from './settings';
import * as TagsAPI from './tags';
import { BaseTags, Tags } from './tags';

export class BaseScripts extends APIResource {
  static override readonly _key: readonly ['workersForPlatforms', 'dispatch', 'namespaces', 'scripts'] =
    Object.freeze(['workersForPlatforms', 'dispatch', 'namespaces', 'scripts'] as const);
}
export class Scripts extends BaseScripts {
  assetUpload: AssetUploadAPI.AssetUpload = new AssetUploadAPI.AssetUpload(this._client);
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  bindings: BindingsAPI.Bindings = new BindingsAPI.Bindings(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
}

Scripts.AssetUpload = AssetUpload;
Scripts.BaseAssetUpload = BaseAssetUpload;
Scripts.Content = Content;
Scripts.BaseContent = BaseContent;
Scripts.Settings = Settings;
Scripts.BaseSettings = BaseSettings;
Scripts.Bindings = Bindings;
Scripts.BaseBindings = BaseBindings;
Scripts.Secrets = Secrets;
Scripts.BaseSecrets = BaseSecrets;
Scripts.Tags = Tags;
Scripts.BaseTags = BaseTags;

export declare namespace Scripts {
  export { AssetUpload as AssetUpload, BaseAssetUpload as BaseAssetUpload };

  export { Content as Content, BaseContent as BaseContent };

  export { Settings as Settings, BaseSettings as BaseSettings };

  export { Bindings as Bindings, BaseBindings as BaseBindings };

  export { Secrets as Secrets, BaseSecrets as BaseSecrets };

  export { Tags as Tags, BaseTags as BaseTags };
}
