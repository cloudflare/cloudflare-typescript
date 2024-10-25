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
  export type Override = OverridesAPI.Override;
  export type OverrideURL = OverridesAPI.OverrideURL;
  export type RewriteAction = OverridesAPI.RewriteAction;
  export type WAFRule = OverridesAPI.WAFRule;
  export import Packages = PackagesAPI.Packages;
}
