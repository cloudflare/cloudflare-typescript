// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DetectionsAPI from './detections';
import { BaseDetections, Detections } from './detections';
import * as MoveAPI from './move';
import { BaseMove, Move } from './move';
import * as PreviewAPI from './preview';
import { BasePreview, Preview } from './preview';
import * as RawAPI from './raw';
import { BaseRaw, Raw } from './raw';
import * as ReclassifyAPI from './reclassify';
import { BaseReclassify, Reclassify } from './reclassify';
import * as ReleaseAPI from './release';
import { BaseRelease, Release } from './release';
import * as TraceAPI from './trace';
import { BaseTrace, Trace } from './trace';

export class BaseInvestigate extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'investigate'] = Object.freeze([
    'emailSecurity',
    'investigate',
  ] as const);
}
export class Investigate extends BaseInvestigate {
  detections: DetectionsAPI.Detections = new DetectionsAPI.Detections(this._client);
  preview: PreviewAPI.Preview = new PreviewAPI.Preview(this._client);
  raw: RawAPI.Raw = new RawAPI.Raw(this._client);
  trace: TraceAPI.Trace = new TraceAPI.Trace(this._client);
  move: MoveAPI.Move = new MoveAPI.Move(this._client);
  reclassify: ReclassifyAPI.Reclassify = new ReclassifyAPI.Reclassify(this._client);
  release: ReleaseAPI.Release = new ReleaseAPI.Release(this._client);
}

Investigate.Detections = Detections;
Investigate.BaseDetections = BaseDetections;
Investigate.Preview = Preview;
Investigate.BasePreview = BasePreview;
Investigate.Raw = Raw;
Investigate.BaseRaw = BaseRaw;
Investigate.Trace = Trace;
Investigate.BaseTrace = BaseTrace;
Investigate.Move = Move;
Investigate.BaseMove = BaseMove;
Investigate.Reclassify = Reclassify;
Investigate.BaseReclassify = BaseReclassify;
Investigate.Release = Release;
Investigate.BaseRelease = BaseRelease;

export declare namespace Investigate {
  export { Detections as Detections, BaseDetections as BaseDetections };

  export { Preview as Preview, BasePreview as BasePreview };

  export { Raw as Raw, BaseRaw as BaseRaw };

  export { Trace as Trace, BaseTrace as BaseTrace };

  export { Move as Move, BaseMove as BaseMove };

  export { Reclassify as Reclassify, BaseReclassify as BaseReclassify };

  export { Release as Release, BaseRelease as BaseRelease };
}
