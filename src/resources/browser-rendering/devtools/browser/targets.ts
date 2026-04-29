// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseTargets extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'devtools', 'browser', 'targets'] =
    Object.freeze(['browserRendering', 'devtools', 'browser', 'targets'] as const);
}
export class Targets extends BaseTargets {}
