// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as OverridesAPI from './overrides';
import * as PackagesAPI from './packages/packages';

export class WAF extends APIResource {
  overrides: OverridesAPI.Overrides = new OverridesAPI.Overrides(this._client);
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
}

export namespace WAF {
  export import Overrides = OverridesAPI.Overrides;
  export import Override = OverridesAPI.Override;
  export import OverrideURL = OverridesAPI.OverrideURL;
  export import RewriteAction = OverridesAPI.RewriteAction;
  export import WAFRule = OverridesAPI.WAFRule;
  export import Packages = PackagesAPI.Packages;
}
