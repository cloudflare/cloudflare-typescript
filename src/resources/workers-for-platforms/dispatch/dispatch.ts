// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NamespacesAPI from './namespaces/namespaces';
import { BaseNamespaces, Namespaces } from './namespaces/namespaces';

export class BaseDispatch extends APIResource {
  static override readonly _key: readonly ['workersForPlatforms', 'dispatch'] = Object.freeze([
    'workersForPlatforms',
    'dispatch',
  ] as const);
}
export class Dispatch extends BaseDispatch {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

Dispatch.Namespaces = Namespaces;
Dispatch.BaseNamespaces = BaseNamespaces;

export declare namespace Dispatch {
  export { Namespaces as Namespaces, BaseNamespaces as BaseNamespaces };
}
