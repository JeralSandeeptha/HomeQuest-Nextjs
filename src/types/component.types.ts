import { CSSProperties } from "react"

export type HeadingProps = {
    text: string,
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
    style?: CSSProperties,
    color?: 'black' | 'white'
}

export type ParagraphProps = {
    text: string,
    style?: CSSProperties,
    color?: 'black' | 'white'
    type: 'large' | 'medium' | 'small' | 'extra-small'
}

export type ButtonProps = {
    text: string,
    link: string,
    type: 'primary' | 'secondary' | 'link',
    isIcon: boolean,
    style?: CSSProperties,
}