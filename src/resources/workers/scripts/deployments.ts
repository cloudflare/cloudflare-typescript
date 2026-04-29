// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseDeployments extends APIResource {
  static override readonly _key: readonly ['workers', 'scripts', 'deployments'] = Object.freeze([
    'workers',
    'scripts',
    'deployments',
  ] as const);
}
export class Deployments extends BaseDeployments {}
