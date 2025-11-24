// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as DetectionsAPI from './detections';
import { Detections } from './detections';
import * as MoveAPI from './move';
import { Move } from './move';
import * as PreviewAPI from './preview';
import { Preview } from './preview';
import * as RawAPI from './raw';
import { Raw } from './raw';
import * as ReclassifyAPI from './reclassify';
import { Reclassify } from './reclassify';
import * as ReleaseAPI from './release';
import { Release } from './release';
import * as TraceAPI from './trace';
import { Trace } from './trace';

export class Investigate extends APIResource {
  detections: DetectionsAPI.Detections = new DetectionsAPI.Detections(this._client);
  preview: PreviewAPI.Preview = new PreviewAPI.Preview(this._client);
  raw: RawAPI.Raw = new RawAPI.Raw(this._client);
  trace: TraceAPI.Trace = new TraceAPI.Trace(this._client);
  move: MoveAPI.Move = new MoveAPI.Move(this._client);
  reclassify: ReclassifyAPI.Reclassify = new ReclassifyAPI.Reclassify(this._client);
  release: ReleaseAPI.Release = new ReleaseAPI.Release(this._client);
}

Investigate.Detections = Detections;
Investigate.Preview = Preview;
Investigate.Raw = Raw;
Investigate.Trace = Trace;
Investigate.Move = Move;
Investigate.Reclassify = Reclassify;
Investigate.Release = Release;

export declare namespace Investigate {
  export { Detections as Detections };

  export { Preview as Preview };

  export { Raw as Raw };

  export { Trace as Trace };

  export { Move as Move };

  export { Reclassify as Reclassify };

  export { Release as Release };
}
