// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseScriptAndVersionSettings extends APIResource {
  static override readonly _key: readonly ['workers', 'scripts', 'scriptAndVersionSettings'] = Object.freeze([
    'workers',
    'scripts',
    'scriptAndVersionSettings',
  ] as const);
}
export class ScriptAndVersionSettings extends BaseScriptAndVersionSettings {}
