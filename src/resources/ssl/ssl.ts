// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AnalyzeAPI from './analyze';
import { Analyze } from './analyze';
import * as RecommendationsAPI from './recommendations';
import { Recommendations } from './recommendations';
import * as VerificationAPI from './verification';
import { Verification } from './verification';
import * as CertificatePacksAPI from './certificate-packs/certificate-packs';
import { CertificatePacks } from './certificate-packs/certificate-packs';
import * as UniversalAPI from './universal/universal';
import { Universal } from './universal/universal';

export class SSL extends APIResource {
  analyze: AnalyzeAPI.Analyze = new AnalyzeAPI.Analyze(this._client);
  certificatePacks: CertificatePacksAPI.CertificatePacks = new CertificatePacksAPI.CertificatePacks(
    this._client,
  );
  recommendations: RecommendationsAPI.Recommendations = new RecommendationsAPI.Recommendations(this._client);
  universal: UniversalAPI.Universal = new UniversalAPI.Universal(this._client);
  verification: VerificationAPI.Verification = new VerificationAPI.Verification(this._client);
}

SSL.Analyze = Analyze;
SSL.CertificatePacks = CertificatePacks;
SSL.Recommendations = Recommendations;
SSL.Universal = Universal;
SSL.Verification = Verification;

export declare namespace SSL {
  export { Analyze as Analyze };

  export { CertificatePacks as CertificatePacks };

  export { Recommendations as Recommendations };

  export { Universal as Universal };

  export { Verification as Verification };
}
