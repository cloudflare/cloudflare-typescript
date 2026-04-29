// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TestsAPI from './tests';
import { Tests } from './tests';

export class Pages extends APIResource {
  tests: TestsAPI.Tests = new TestsAPI.Tests(this._client);
}

Pages.Tests = Tests;

export declare namespace Pages {
  export { Tests as Tests };
}
