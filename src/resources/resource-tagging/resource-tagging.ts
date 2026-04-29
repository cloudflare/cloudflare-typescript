// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountTagsAPI from './account-tags';
import { AccountTags, BaseAccountTags } from './account-tags';
import * as KeysAPI from './keys';
import { BaseKeys, Keys } from './keys';
import * as ValuesAPI from './values';
import { BaseValues, Values } from './values';
import * as ZoneTagsAPI from './zone-tags';
import { BaseZoneTags, ZoneTags } from './zone-tags';

export class BaseResourceTagging extends APIResource {
  static override readonly _key: readonly ['resourceTagging'] = Object.freeze(['resourceTagging'] as const);
}
export class ResourceTagging extends BaseResourceTagging {
  accountTags: AccountTagsAPI.AccountTags = new AccountTagsAPI.AccountTags(this._client);
  zoneTags: ZoneTagsAPI.ZoneTags = new ZoneTagsAPI.ZoneTags(this._client);
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  values: ValuesAPI.Values = new ValuesAPI.Values(this._client);
}

ResourceTagging.AccountTags = AccountTags;
ResourceTagging.BaseAccountTags = BaseAccountTags;
ResourceTagging.ZoneTags = ZoneTags;
ResourceTagging.BaseZoneTags = BaseZoneTags;
ResourceTagging.Keys = Keys;
ResourceTagging.BaseKeys = BaseKeys;
ResourceTagging.Values = Values;
ResourceTagging.BaseValues = BaseValues;

export declare namespace ResourceTagging {
  export { AccountTags as AccountTags, BaseAccountTags as BaseAccountTags };

  export { ZoneTags as ZoneTags, BaseZoneTags as BaseZoneTags };

  export { Keys as Keys, BaseKeys as BaseKeys };

  export { Values as Values, BaseValues as BaseValues };
}
