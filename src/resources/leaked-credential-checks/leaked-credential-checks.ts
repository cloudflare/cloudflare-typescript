// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DetectionsAPI from './detections';
import { BaseDetections, Detections } from './detections';

export class BaseLeakedCredentialChecks extends APIResource {
  static override readonly _key: readonly ['leakedCredentialChecks'] = Object.freeze([
    'leakedCredentialChecks',
  ] as const);
}
export class LeakedCredentialChecks extends BaseLeakedCredentialChecks {
  detections: DetectionsAPI.Detections = new DetectionsAPI.Detections(this._client);
}

LeakedCredentialChecks.Detections = Detections;
LeakedCredentialChecks.BaseDetections = BaseDetections;

export declare namespace LeakedCredentialChecks {
  export { Detections as Detections, BaseDetections as BaseDetections };
}
