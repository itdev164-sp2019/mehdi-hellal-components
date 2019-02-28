import React from 'react'
import PropTypes from 'prop-types'
import{ Box } from 'rebass'
import styled from 'styled-components'
import { Link } from 'rebass'

const Outer = styled(Box)`
height: ${props => props.height};
width: 100%;
background-color: rebeccapurple;
margin-bottom: 1.45em;
`

const StyledLink = styled(Link)`
color: white;
textDecoration: none;
`

export const Masthead = ({ height, siteTitle}) =>{
    return (
        <Outer height={height}>
       <StyledLink href="/">{siteTitle}</StyledLink>
        
        </Outer>
        
    )
}

Masthead.propTypes={
    height: PropTypes.string.isRequired,
    siteTitle: PropTypes.string

}