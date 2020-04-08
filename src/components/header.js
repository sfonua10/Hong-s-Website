import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Logo from "../images/Logo.png"

const NavLink = styled(Link)`
  color: #222;
  font-weight: ${props => props.fontWeight || "normal"};
  padding: 0.25rem;
  text-decoration: none;
  color: white;
  &.current-page {
    border-bottom: 2px solid #222;
  }
`

const Header = ({ siteTitle }) => (
  <header
    css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
  >
    <NavLink
      to="/"
      css={css`
        display: flex;
        align-items: center;
        padding: 0 1rem;
      `}
    >
      <img
        src={Logo}
        css={css`
          height: 60px;
          width: 60px;
        `}
      />
      <span
        css={css`
          color: black;
          padding: 1rem;
        `}
      >
        Hong Fonua
      </span>
    </NavLink>
    <nav
    // css={css`
    //   margin-top: 0;
    // `}
    >
      <NavLink
        to="/train"
        activeClassName="current-page"
        css={css`
          padding-right: 3rem;
        `}
      >
        Train
      </NavLink>
      <NavLink
        to="/about"
        activeClassName="current-page"
        css={css`
          margin-right: 2rem;
          padding: 0 2rem;
        `}
      >
        About
      </NavLink>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
