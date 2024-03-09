import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import {Button as NextButton}  from "@nextui-org/react";
import { renderLabel, setSize, toggleButtonState } from './ButtonUtils';
import {Tooltip} from "@nextui-org/react";
/**
 * type UI component for user interactions
 */
export const Button = ({ type, backgroundColor, fontColor, size, label, onMouseEnter, onClick,toolTipText,isToolTip ,state, classes,variant,border,borderColor}) => {
  console.log(isToolTip);
  console.log(toolTipText);
  return (
    <>
      <Tooltip content={toolTipText} isDisabled={!isToolTip}>
          <NextButton variant={variant} color={type} className = {classes} style={{background:backgroundColor,color:fontColor,border:border,borderColor:borderColor}} size = {setSize(size)} onClick={onClick} onMouseEnter={onMouseEnter} isLoading={toggleButtonState(state,'isLoading') } isDisabled={toggleButtonState(state, 'isDisabled')}>
          {renderLabel(state,label)}
          </NextButton>
      </Tooltip>
    </>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  type: PropTypes.string,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  state: PropTypes.oneOf(['enabled', 'disabled', 'loading']),
  classes: PropTypes.arrayOf(),
  isToolTip: PropTypes.bool,
  toolTipText : PropTypes.string,
  variant:  PropTypes.oneOf(['solid', 'bordered' , 'light' , 'flat' , 'faded' , 'shadow' , 'ghost']),
  border: PropTypes.string,
  borderColor: PropTypes.string,
  
};

Button.defaultProps = {
  backgroundColor: null,
  fontColor:null, 
  type: "default",
  size: 'medium',
  onClick: ()=>{console.log('clicking');},
  onMouseEnter:()=>{console.log('hovering');},
  isToolTip:false,
  toolTipText:'tooltip text',
  variant: 'solid',
  border: null,
  borderColor: null,
  
};

