// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';

export class BaseAses extends APIResource {
  static override readonly _key: readonly ['radar', 'attacks', 'layer7', 'top', 'ases'] = Object.freeze([
    'radar',
    'attacks',
    'layer7',
    'top',
    'ases',
  ] as const);
}
export class Ases extends BaseAses {}
