import React from 'react';
import './icon.css';
import PropTypes from 'prop-types';
import {  iconNames } from './IconUtils';
import * as All from 'react-icons/fa6';

// const iconNames =['Fa0', 'Fa1', 'Fa2', 'Fa3', 'Fa4', 'Fa42Group', 'Fa5', 'Fa500Px', 'Fa6', 'Fa7', 'Fa8', 'Fa9', 'FaA', 'FaAccessibleIcon', 'FaAccusoft', 'FaAddressBook', 'FaAddressCard', 'FaAdn', 'FaAdversal', 'FaAffiliatetheme',]
export const Icon = ({ iconname, height, width, bgColor, color }) => {
  const IconComponent = All[iconname];
  if (!IconComponent) {
    console.warn(`Icon '${iconname}' not found`);
    return (<><div>Icon not found!</div></>);
  }
  return (
    <>
      <IconComponent style={{ backgroundColor: bgColor, color: color, height: height, width: width }} />
    </>
  )
};

Icon.propTypes = {
  iconname: PropTypes.oneOf(iconNames).isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};

// Icon.defaultProps = {
//   height: 16,
//   width: 16,
//   bgColor: 'white',
//   color: 'gray',
// };
