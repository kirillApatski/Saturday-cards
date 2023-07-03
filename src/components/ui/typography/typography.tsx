import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './typography.module.scss'

type VariantType =
  | 'large'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'
  | 'link1'
  | 'link2'

type ColorType = 'primary' | 'secondary' | 'inherit' | 'error' | 'link'

type TypographyType<T> = {
  as?: T
  variant?: VariantType
  className?: string
  color?: ColorType
}

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyType<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyType<T>>
) => {
  const {
    variant = 'body1',
    as: Component = 'p',
    className = '',
    color = 'inherit',
    ...rest
  } = props

  const cn = `${s[variant]} ${className} ${s[color]}`

  return <Component className={cn} {...rest}></Component>
}
