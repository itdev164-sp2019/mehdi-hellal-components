// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { BaseContainer } from'../BaseContainer'

//better Flow typing using PropTypes with object

export const Address = (props: PropTypes.node) => <BaseContainer as ="address" {...props}/>

Address.propTypes = {
    children: PropTypes.node.isRequired
}