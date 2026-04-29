// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ManagedAPI from './managed/managed';
import { Managed } from './managed/managed';
import * as UserAPI from './user/user';
import { User } from './user/user';

export class Labels extends APIResource {
  user: UserAPI.User = new UserAPI.User(this._client);
  managed: ManagedAPI.Managed = new ManagedAPI.Managed(this._client);
}

Labels.User = User;
Labels.Managed = Managed;

export declare namespace Labels {
  export { User as User };

  export { Managed as Managed };
}
