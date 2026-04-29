// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NamespacesAPI from './namespaces/namespaces';
import { BaseNamespaces, Namespaces } from './namespaces/namespaces';

export class BaseKV extends APIResource {
  static override readonly _key: readonly ['kv'] = Object.freeze(['kv'] as const);
}
export class KV extends BaseKV {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

KV.Namespaces = Namespaces;
KV.BaseNamespaces = BaseNamespaces;

export declare namespace KV {
  export { Namespaces as Namespaces, BaseNamespaces as BaseNamespaces };
}
