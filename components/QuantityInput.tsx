'use client'

import React, { HTMLAttributes, InputHTMLAttributes, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

export type QuantityInputProps = {
    onValueChange?: (value: number) => void,
    onIncrease?: (value: number) => void,
    onDecrease?: (value: number) => void,
    loading?: boolean,
    containerClass?: string,
    min?: number,
    max?: number,
    value?: number,
    size?: 'sm'|'md'
}

const sizeClassMap = {
    'sm': {
        button: 'btn-sm',
        container: 'px-3'
    },
    'md': {
        button: '',
        container: 'px-5'
    }
}

const QuantityInput = ({
    onValueChange,
    onIncrease,
    onDecrease,
    min=1,
    max=20,
    value=1,
    loading,
    containerClass,
    size='md'
}:QuantityInputProps) => {
    const [localValue, setLocalValue] = useState(value);

    const change = (value: number) => {
        if(localValue >= max) return; 
        if(localValue < min) return;
        setLocalValue(value);
        onValueChange?.(Number(value));
    }

    const increase = () => {
        if(Number(localValue) >= Number(max)) return; 
        const val = localValue + 1;
        change(val);
        onIncrease?.(val);
    }

    const decrease = () => {
        if(Number(localValue) <= Number(min)) return; 
        const val = localValue - 1;
        change(val);
        onDecrease?.(val)
    }


  return (
    <div className={twMerge('inline-flex items-stretch border ',containerClass)}>
        <button disabled={loading || Number(localValue) <= Number(min)} type='button' title="Decrease Quantity" className={`btn btn-ghost btn-square ${sizeClassMap[size].button}`} onClick={decrease}><FaMinus/></button>
        <div className={`border-x inline-flex items-center justify-center ${sizeClassMap[size].container}`}>{localValue}</div>
        <button disabled={loading || Number(localValue) >= Number(max)} type='button' title="Increase Quantity" className={`btn btn-ghost btn-square ${sizeClassMap[size].button}`} onClick={increase}><FaPlus/></button>
    </div>
  )
}

export default QuantityInput