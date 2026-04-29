// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyzeAPI from './analyze';
import { Analyze, BaseAnalyze } from './analyze';
import * as RecommendationsAPI from './recommendations';
import { BaseRecommendations, Recommendations } from './recommendations';
import * as VerificationAPI from './verification';
import { BaseVerification, Verification } from './verification';
import * as CertificatePacksAPI from './certificate-packs/certificate-packs';
import { BaseCertificatePacks, CertificatePacks } from './certificate-packs/certificate-packs';
import * as UniversalAPI from './universal/universal';
import { BaseUniversal, Universal } from './universal/universal';

export class BaseSSL extends APIResource {
  static override readonly _key: readonly ['ssl'] = Object.freeze(['ssl'] as const);
}
export class SSL extends BaseSSL {
  analyze: AnalyzeAPI.Analyze = new AnalyzeAPI.Analyze(this._client);
  certificatePacks: CertificatePacksAPI.CertificatePacks = new CertificatePacksAPI.CertificatePacks(
    this._client,
  );
  recommendations: RecommendationsAPI.Recommendations = new RecommendationsAPI.Recommendations(this._client);
  universal: UniversalAPI.Universal = new UniversalAPI.Universal(this._client);
  verification: VerificationAPI.Verification = new VerificationAPI.Verification(this._client);
}

SSL.Analyze = Analyze;
SSL.BaseAnalyze = BaseAnalyze;
SSL.CertificatePacks = CertificatePacks;
SSL.BaseCertificatePacks = BaseCertificatePacks;
SSL.Recommendations = Recommendations;
SSL.BaseRecommendations = BaseRecommendations;
SSL.Universal = Universal;
SSL.BaseUniversal = BaseUniversal;
SSL.Verification = Verification;
SSL.BaseVerification = BaseVerification;

export declare namespace SSL {
  export { Analyze as Analyze, BaseAnalyze as BaseAnalyze };

  export { CertificatePacks as CertificatePacks, BaseCertificatePacks as BaseCertificatePacks };

  export { Recommendations as Recommendations, BaseRecommendations as BaseRecommendations };

  export { Universal as Universal, BaseUniversal as BaseUniversal };

  export { Verification as Verification, BaseVerification as BaseVerification };
}
