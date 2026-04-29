// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ObjectsAPI from './objects';
import { Objects } from './objects';

export class Namespaces extends APIResource {
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
}

Namespaces.Objects = Objects;

export declare namespace Namespaces {
  export { Objects as Objects };
}
