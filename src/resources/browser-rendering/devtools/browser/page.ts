// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BasePage extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'devtools', 'browser', 'page'] = Object.freeze(
    ['browserRendering', 'devtools', 'browser', 'page'] as const,
  );
}
export class Page extends BasePage {}
