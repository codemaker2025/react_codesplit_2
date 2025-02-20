import React from 'react';
import { Dropdown, ButtonGroup, Row, Col } from 'react-bootstrap';
import { useIntl } from 'react-intl';

const LanguageSwitcher = ({ handleLanguageChange }) => {
  const { formatMessage, locale } = useIntl(); // Get the current language

  console.log(locale,"selected language");
  
  return (
    <Row className="mb-3">
      <Col md={6}>
        <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {locale === 'en' ? 'English' : 'العربية'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange('ar')}>العربية</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default LanguageSwitcher;
