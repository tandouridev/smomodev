'use client'

export default function myImageLoader({ src, width, quality }) {
    return `https://smomo.shop/${src}?w=${width}&q=${quality || 75}`
}