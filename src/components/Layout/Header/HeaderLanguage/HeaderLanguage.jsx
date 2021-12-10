import React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

const HeaderLanguage = () => {
  
  const { languages, originalPath } = useI18next();
  
  return (
    <div className="nav_lang">
      <ul class="languages">
        {languages.map((lng) => (
          <li key={lng} className="lang-item">
            <Link className="lang-links" to={originalPath} language={lng}>
              <span className="lang-link">{lng}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderLanguage;
