// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ResourcesAPI from './resources/resources';
import { BaseResources, Resources } from './resources/resources';

export class BaseManaged extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'labels', 'managed'] = Object.freeze([
    'apiGateway',
    'labels',
    'managed',
  ] as const);
}
export class Managed extends BaseManaged {
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);
}

Managed.Resources = Resources;
Managed.BaseResources = BaseResources;

export declare namespace Managed {
  export { Resources as Resources, BaseResources as BaseResources };
}
