'use client'
import React, { Children, PropsWithChildren } from 'react'
import Cliploader from 'react-spinners/ClipLoader';
import { twMerge } from 'tailwind-merge'

export type BadgeType = 'primary'|'secondary'|'default'|'accent'|'info'|'warning'|'danger'|'success';
export type BadgeSize = 'large'|'small'|'default'|'extra-small';
export type BadgeVarient = 'fill'|'outlined'|'ghost';

const badgeTypeClassMap: {[key in BadgeType]: string} = {
        'accent': 'badge-accent',
        'primary': 'badge-primary',
        'secondary': 'badge-secondary',
        'info': 'badge-info',
        'success': 'badge-success',
        'danger': 'badge-danger',
        'default': '',
        'warning': 'badge-warning'
}

const badgeSizeClassMap: {[key in BadgeSize]: string} = {
    'default': 'badge-md',
    'extra-small': 'badge-xs',
    'small': 'badge-sm',
    'large': 'badge-lg'
}

const badgeVariantClassMap: {[key in BadgeVarient]: string} = {
    'fill': '',
    'ghost': 'badge-ghost',
    'outlined': 'badge-outline'
}

export type BadgeProps = {
    type?: BadgeType,
    size?: BadgeSize,
    variant?: BadgeVarient,
    value?: React.ReactNode,
    className?: string,
    loading?: boolean
}

const Badge = ({
    type= 'primary',
    size='default',
    variant='fill',
    children,
    value,
    className,
    loading
}: PropsWithChildren<BadgeProps>) => {

const Spinner = <Cliploader size={16} color='#000'/>
const badgeElement = <div className={`badge ${badgeTypeClassMap[type]} ${badgeSizeClassMap[size]} ${badgeVariantClassMap[variant]}`}> {loading ? Spinner : value} </div>;
    

  return (
    <>
        {
            !children ? badgeElement 
            : <div className={twMerge('inline-block relative', className)}>
                {children}
                <span className="absolute top-0 left-0 -translate-y-1/2 translate-x-1/2" >
                    {badgeElement}
                </span>
            </div>
        }
    </>
  )
}

export default Badge
