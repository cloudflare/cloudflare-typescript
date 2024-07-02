// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ProfileAPI from './profile';

export class Profile extends APIResource {
  /**
   * Accesses your billing profile object.
   */
  get(options?: Core.RequestOptions): Core.APIPromise<ProfileGetResponse> {
    return (
      this._client.get('/user/billing/profile', options) as Core.APIPromise<{ result: ProfileGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ProfileGetResponse = unknown | string | null;

export namespace Profile {
  export import ProfileGetResponse = ProfileAPI.ProfileGetResponse;
}
