// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ObjectsAPI from './objects';
import { BaseObjects, Objects } from './objects';

export class BaseNamespaces extends APIResource {
  static override readonly _key: readonly ['durableObjects', 'namespaces'] = Object.freeze([
    'durableObjects',
    'namespaces',
  ] as const);
}
export class Namespaces extends BaseNamespaces {
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
}

Namespaces.Objects = Objects;
Namespaces.BaseObjects = BaseObjects;

export declare namespace Namespaces {
  export { Objects as Objects, BaseObjects as BaseObjects };
}
