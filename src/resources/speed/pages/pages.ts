// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TestsAPI from './tests';
import { BaseTests, Tests } from './tests';

export class BasePages extends APIResource {
  static override readonly _key: readonly ['speed', 'pages'] = Object.freeze(['speed', 'pages'] as const);
}
export class Pages extends BasePages {
  tests: TestsAPI.Tests = new TestsAPI.Tests(this._client);
}

Pages.Tests = Tests;
Pages.BaseTests = BaseTests;

export declare namespace Pages {
  export { Tests as Tests, BaseTests as BaseTests };
}
