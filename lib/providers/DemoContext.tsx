'use client'

import { PropsWithChildren } from "react"
import {useAtom} from 'jotai';



const DemoProvider = ({children}: PropsWithChildren) => {

    return <>
        {children}
    </>
}


export default DemoProvider;