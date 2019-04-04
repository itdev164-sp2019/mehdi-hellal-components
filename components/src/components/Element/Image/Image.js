// @flow
import React from 'react'
import PropTypes from 'prop-types'
import {Image as ImageBase } from 'rebass'

export const Image =({ src, ...props} : {src: string, props: any}) => <ImageBase src={src} {...props} />

Image.propTypes ={
    src: PropTypes.string.isRequired
}