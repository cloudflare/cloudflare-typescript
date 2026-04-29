// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ResourcesAPI from './resources/resources';
import { Resources } from './resources/resources';

export class User extends APIResource {
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);
}

User.Resources = Resources;

export declare namespace User {
  export { Resources as Resources };
}
