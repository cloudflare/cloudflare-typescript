// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ResourcesAPI from './resources/resources';
import { BaseResources, Resources } from './resources/resources';

export class BaseUser extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'labels', 'user'] = Object.freeze([
    'apiGateway',
    'labels',
    'user',
  ] as const);
}
export class User extends BaseUser {
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);
}

User.Resources = Resources;
User.BaseResources = BaseResources;

export declare namespace User {
  export { Resources as Resources, BaseResources as BaseResources };
}
