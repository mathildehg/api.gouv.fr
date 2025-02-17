import constants from '../../constants';

const Footer = () => {
  return (
    <footer className="fr-footer" role="contentinfo">
      <div className="fr-container">
        <div className="fr-footer__body">
          <div className="fr-footer__brand fr-enlarge-link">
            <a href="/" title="Retour à l’accueil">
              <p className="fr-logo" title="république française">
                république
                <br />
                française
              </p>
            </a>
            <div className="footer__social">
              <a href="https://twitter.com/apigouv" title="Twitter">
                <img
                  src="/images/social/twitter.svg"
                  alt="Twitter"
                  className="icon icon-twitter"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/api-gouv-fr/"
                title="Linkedin"
              >
                <img
                  src="/images/social/linkedin.svg"
                  alt="Linkedin"
                  className="icon icon-linkedin"
                />
              </a>
              <a href="https://github.com/betagouv/api.gouv.fr" title="Github">
                <img
                  src="/images/social/github.svg"
                  alt="Github"
                  className="icon icon-github"
                />
              </a>
              <a href="/contact" title="Nous contacter">
                <img
                  src="/images/social/email.svg"
                  alt="Email"
                  className="icon icon-mail"
                />
              </a>
            </div>
          </div>
          <div className="fr-footer__content">
            <p className="fr-footer__content-desc">
              Crée en 2016, <a href="/">api.gouv.fr</a> est le site qui
              référence les API du service public, mises à la disposition des
              collectivités, des ministères et des entreprises pour construire
              des services informatiques au service de tous.
            </p>
            <ul className="fr-footer__content-list">
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" href="/feuille-de-route">
                  Notre feuille de route
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" href="/equipe">
                  Notre équipe
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" href="/statistiques">
                  Nos chiffres clés
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" href="/nouvelle-api">
                  Ajouter une API
                </a>
              </li>
            </ul>
            <div className="public-partners">
              <br />
              partenaires&nbsp;:
            </div>
            <ul className="fr-footer__content-list">
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  href="https://beta.gouv.fr/"
                >
                  beta.gouv.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  href="https://www.etalab.gouv.fr/"
                >
                  etalab.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  href="https://service-public.fr"
                >
                  service-public.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  href="https://data.gouv.fr"
                >
                  data.gouv.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  href="https://numerique.gouv.fr/"
                >
                  La DINUM
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fr-footer__bottom">
          <ul className="fr-footer__bottom-list">
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="/mentions-legales">
                Mentions Légales
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="/vie-privee">
                Audience & vie privée
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a
                className="fr-footer__bottom-link"
                href="https://github.com/betagouv/api.gouv.fr"
              >
                Code source
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="/contact/">
                Nous contacter
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a
                className="fr-footer__bottom-link"
                href="https://beta.gouv.fr/recrutement"
              >
                Nous rejoindre
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="/documentation">
                Documentation des API
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="/services">
                Réalisations
              </a>
            </li>
          </ul>
          <div className="fr-footer__bottom-copy">
            <p>
              Sauf mention contraire, tous les textes de ce site sont sous{' '}
              <a
                href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
                target="_blank"
                rel="noreferrer noopener"
              >
                licence etalab-2.0
              </a>
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer__social {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: end;
          margin-left: 40px;
        }
        .fr-footer .footer__social a {
          margin-right: 1rem;
        }
        .fr-footer .fr-footer__brand a:before {
          display: none;
        }

        .fr-footer .footer__social .icon {
          width: 20px;
          height: 20px;
        }

        .public-partners {
          font-variant: small-caps;
          color: ${constants.colors.darkGrey};
          font-weight: bold;
          width: 100%;
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
