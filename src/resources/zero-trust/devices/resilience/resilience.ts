// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as GlobalWARPOverrideAPI from './global-warp-override';
import { GlobalWARPOverride } from './global-warp-override';

export class Resilience extends APIResource {
  globalWARPOverride: GlobalWARPOverrideAPI.GlobalWARPOverride = new GlobalWARPOverrideAPI.GlobalWARPOverride(
    this._client,
  );
}

Resilience.GlobalWARPOverride = GlobalWARPOverride;

export declare namespace Resilience {
  export { GlobalWARPOverride as GlobalWARPOverride };
}
