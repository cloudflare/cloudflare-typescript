// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ViewsAPI from './views';
import { Views } from './views';

export class Account extends APIResource {
  views: ViewsAPI.Views = new ViewsAPI.Views(this._client);
}

Account.Views = Views;

export declare namespace Account {
  export { Views as Views };
}
