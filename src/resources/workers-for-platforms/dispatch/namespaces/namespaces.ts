// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ScriptsAPI from './scripts/scripts';
import { BaseScripts, Scripts } from './scripts/scripts';

export class BaseNamespaces extends APIResource {
  static override readonly _key: readonly ['workersForPlatforms', 'dispatch', 'namespaces'] = Object.freeze([
    'workersForPlatforms',
    'dispatch',
    'namespaces',
  ] as const);
}
export class Namespaces extends BaseNamespaces {
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);
}

Namespaces.Scripts = Scripts;
Namespaces.BaseScripts = BaseScripts;

export declare namespace Namespaces {
  export { Scripts as Scripts, BaseScripts as BaseScripts };
}
