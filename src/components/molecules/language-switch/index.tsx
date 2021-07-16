import React from 'react'
import styled from 'styled-components'
import Dropdown from 'react-bootstrap/Dropdown'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { locales } from '../../../../lingui.config'

const StyledDropdownToggle = styled(Dropdown.Toggle)`
    &:after {
      display: none;
    }
`

const LanguageSwitch = () => {
    const { locale, asPath } = useRouter();

    return (
        <div className="container">
            <Dropdown>
                <StyledDropdownToggle className="p-3" variant="light">
                    <img src={`assets/flags/${locale}.svg`} alt={locale} width={22} height={22} />
                </StyledDropdownToggle>
                <Dropdown.Menu>
                    {locales.map((lang) => (
                      <Dropdown.Item key={`lang${lang}`}>
                          <Link href={asPath} locale={lang}>
                              <div className="d-flex align-items-center">
                                <img className="me-3" src={`assets/flags/${lang}.svg`} alt={locale} width={22} height={22} />
                                <span>Englisch</span>
                              </div>
                          </Link>
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default LanguageSwitch