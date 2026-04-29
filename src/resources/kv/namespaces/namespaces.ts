// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as KeysAPI from './keys';
import { Keys } from './keys';
import * as MetadataAPI from './metadata';
import { Metadata } from './metadata';
import * as ValuesAPI from './values';
import { Values } from './values';

export class Namespaces extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
  values: ValuesAPI.Values = new ValuesAPI.Values(this._client);
}

Namespaces.Keys = Keys;
Namespaces.Metadata = Metadata;
Namespaces.Values = Values;

export declare namespace Namespaces {
  export { Keys as Keys };

  export { Metadata as Metadata };

  export { Values as Values };
}
