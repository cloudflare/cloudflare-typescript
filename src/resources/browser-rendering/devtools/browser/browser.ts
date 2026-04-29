// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PageAPI from './page';
import { BasePage, Page } from './page';
import * as TargetsAPI from './targets';
import { BaseTargets, Targets } from './targets';

export class BaseBrowser extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'devtools', 'browser'] = Object.freeze([
    'browserRendering',
    'devtools',
    'browser',
  ] as const);
}
export class Browser extends BaseBrowser {
  page: PageAPI.Page = new PageAPI.Page(this._client);
  targets: TargetsAPI.Targets = new TargetsAPI.Targets(this._client);
}

Browser.Page = Page;
Browser.BasePage = BasePage;
Browser.Targets = Targets;
Browser.BaseTargets = BaseTargets;

export declare namespace Browser {
  export { Page as Page, BasePage as BasePage };

  export { Targets as Targets, BaseTargets as BaseTargets };
}
