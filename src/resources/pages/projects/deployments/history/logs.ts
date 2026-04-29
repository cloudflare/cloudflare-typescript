// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';

export class BaseLogs extends APIResource {
  static override readonly _key: readonly ['pages', 'projects', 'deployments', 'history', 'logs'] =
    Object.freeze(['pages', 'projects', 'deployments', 'history', 'logs'] as const);
}
export class Logs extends BaseLogs {}
