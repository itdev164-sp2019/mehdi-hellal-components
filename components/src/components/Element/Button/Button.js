// @flow
import React from 'react'
import PropTypes from 'prop-types'
import {ButtonBase} from './ButtonBase'
import styled from 'styled-components'


/*const StyledButton = styled(ButtonBase)`
padding: 8px;
color: ${props => (props.variant === 'primary' ? 'black' : 'white')};
border: solid 1px 
${props => (props.variant === 'primary' ? 'black' : 'white')};
`
*/

const StyledButton = styled(ButtonBase)`

${props => props.theme.variants.button[props.variant || 'primary']};
`

// simple Flow typing
export const Button = (props:any) => <StyledButton {...props}/>
            
Button.propTypes = {
   variant: PropTypes.string
    }
    
    