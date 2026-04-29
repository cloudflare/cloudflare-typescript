// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as KeysAPI from './keys';
import { BaseKeys, Keys } from './keys';
import * as MetadataAPI from './metadata';
import { BaseMetadata, Metadata } from './metadata';
import * as ValuesAPI from './values';
import { BaseValues, Values } from './values';

export class BaseNamespaces extends APIResource {
  static override readonly _key: readonly ['kv', 'namespaces'] = Object.freeze(['kv', 'namespaces'] as const);
}
export class Namespaces extends BaseNamespaces {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
  values: ValuesAPI.Values = new ValuesAPI.Values(this._client);
}

Namespaces.Keys = Keys;
Namespaces.BaseKeys = BaseKeys;
Namespaces.Metadata = Metadata;
Namespaces.BaseMetadata = BaseMetadata;
Namespaces.Values = Values;
Namespaces.BaseValues = BaseValues;

export declare namespace Namespaces {
  export { Keys as Keys, BaseKeys as BaseKeys };

  export { Metadata as Metadata, BaseMetadata as BaseMetadata };

  export { Values as Values, BaseValues as BaseValues };
}
