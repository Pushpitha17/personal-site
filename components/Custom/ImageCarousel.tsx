'use client'
import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import { ReactImageGalleryItem } from 'react-image-gallery'

function ImageCarousel(props: { images: ReactImageGalleryItem[] }) {
  return (
    <ReactImageGallery items={props.images} showFullscreenButton={true} showNav={false} showPlayButton={false}></ReactImageGallery>
  )
}

export default ImageCarousel
