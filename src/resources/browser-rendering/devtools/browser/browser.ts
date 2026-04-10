// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PageAPI from './page';
import { Page } from './page';
import * as TargetsAPI from './targets';
import { Targets } from './targets';

export class Browser extends APIResource {
  page: PageAPI.Page = new PageAPI.Page(this._client);
  targets: TargetsAPI.Targets = new TargetsAPI.Targets(this._client);
}

Browser.Page = Page;
Browser.Targets = Targets;

export declare namespace Browser {
  export { Page as Page };

  export { Targets as Targets };
}
