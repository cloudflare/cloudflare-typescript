// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DetectionsAPI from './detections';
import { Detections } from './detections';

export class LeakedCredentialChecks extends APIResource {
  detections: DetectionsAPI.Detections = new DetectionsAPI.Detections(this._client);
}

LeakedCredentialChecks.Detections = Detections;

export declare namespace LeakedCredentialChecks {
  export { Detections as Detections };
}
