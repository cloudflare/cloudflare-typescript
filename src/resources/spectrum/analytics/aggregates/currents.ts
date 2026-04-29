// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseCurrents extends APIResource {
  static override readonly _key: readonly ['spectrum', 'analytics', 'aggregates', 'currents'] = Object.freeze(
    ['spectrum', 'analytics', 'aggregates', 'currents'] as const,
  );
}
export class Currents extends BaseCurrents {}
