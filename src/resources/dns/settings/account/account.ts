// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ViewsAPI from './views';
import { BaseViews, Views } from './views';

export class BaseAccount extends APIResource {
  static override readonly _key: readonly ['dns', 'settings', 'account'] = Object.freeze([
    'dns',
    'settings',
    'account',
  ] as const);
}
export class Account extends BaseAccount {
  views: ViewsAPI.Views = new ViewsAPI.Views(this._client);
}

Account.Views = Views;
Account.BaseViews = BaseViews;

export declare namespace Account {
  export { Views as Views, BaseViews as BaseViews };
}
