import { IIconSizing } from '@app/interface/components/icon.interface'
import React from 'react'

export default function FolderIcon({width='18'}:IIconSizing) {
  return (
    <svg width={width} height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.849 12.6101C16.849 15.5918 15.0915 17.3493 12.1099 17.3493H5.62488C2.63571 17.3493 0.874878 15.5918 0.874878 12.6101V6.11008C0.874878 3.13258 1.96988 1.37508 4.95238 1.37508H6.61904C7.21738 1.37592 7.78071 1.65675 8.13904 2.13592L8.89988 3.14758C9.25988 3.62592 9.82321 3.90758 10.4215 3.90842H12.7799C15.769 3.90842 16.8724 5.43008 16.8724 8.47258L16.849 12.6101Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5.23413 11.5525H12.5133" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
