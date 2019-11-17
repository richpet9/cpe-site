import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ navItems }) => {
  return (
    <header>
      <nav>
        <ul>
          {navItems.map(item => {
            return (
              <li key={item.copy}>
                <a href={item.url} title={item.copy}>
                  {item.copy}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      copy: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Header;
