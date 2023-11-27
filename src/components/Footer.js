import React from 'react';
import '../index.css'; 
import { useTranslation } from 'react-i18next';

export default function Footer(props) {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="footer-container">
                <h1 aria-label="Contact us">{t('footer.title')}</h1>
                <p><a href=" " aria-label={t('footer.email-aria-label')}>unicycle@uw.edu</a ></p >
                <p><a href="tel:206-123-1234" aria-label={t('footer.phone-aria-label')}> 206-123-1234</a ></p >
                <p>&copy; Unicycle AU23</p >
            </div>
        </footer>
    );
}