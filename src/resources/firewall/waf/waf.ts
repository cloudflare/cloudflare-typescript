// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as OverridesAPI from './overrides';
import { Override, OverrideURL, Overrides, RewriteAction, WAFRule } from './overrides';
import * as PackagesAPI from './packages/packages';
import { Packages } from './packages/packages';

export class WAF extends APIResource {
  overrides: OverridesAPI.Overrides = new OverridesAPI.Overrides(this._client);
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
}

WAF.Overrides = Overrides;
WAF.Packages = Packages;

export declare namespace WAF {
  export {
    Overrides as Overrides,
    type Override as Override,
    type OverrideURL as OverrideURL,
    type RewriteAction as RewriteAction,
    type WAFRule as WAFRule,
  };

  export { Packages as Packages };
}
