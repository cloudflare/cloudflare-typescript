// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ManagedAPI from './managed/managed';
import { BaseManaged, Managed } from './managed/managed';
import * as UserAPI from './user/user';
import { BaseUser, User } from './user/user';

export class BaseLabels extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'labels'] = Object.freeze([
    'apiGateway',
    'labels',
  ] as const);
}
export class Labels extends BaseLabels {
  user: UserAPI.User = new UserAPI.User(this._client);
  managed: ManagedAPI.Managed = new ManagedAPI.Managed(this._client);
}

Labels.User = User;
Labels.BaseUser = BaseUser;
Labels.Managed = Managed;
Labels.BaseManaged = BaseManaged;

export declare namespace Labels {
  export { User as User, BaseUser as BaseUser };

  export { Managed as Managed, BaseManaged as BaseManaged };
}
