// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AccountTagsAPI from './account-tags';
import { AccountTags } from './account-tags';
import * as KeysAPI from './keys';
import { Keys } from './keys';
import * as ValuesAPI from './values';
import { Values } from './values';
import * as ZoneTagsAPI from './zone-tags';
import { ZoneTags } from './zone-tags';

export class ResourceTagging extends APIResource {
  accountTags: AccountTagsAPI.AccountTags = new AccountTagsAPI.AccountTags(this._client);
  zoneTags: ZoneTagsAPI.ZoneTags = new ZoneTagsAPI.ZoneTags(this._client);
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  values: ValuesAPI.Values = new ValuesAPI.Values(this._client);
}

ResourceTagging.AccountTags = AccountTags;
ResourceTagging.ZoneTags = ZoneTags;
ResourceTagging.Keys = Keys;
ResourceTagging.Values = Values;

export declare namespace ResourceTagging {
  export { AccountTags as AccountTags };

  export { ZoneTags as ZoneTags };

  export { Keys as Keys };

  export { Values as Values };
}
