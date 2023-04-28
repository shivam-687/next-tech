'use client'
import React, { PropsWithChildren } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaFilter } from 'react-icons/fa'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const MobileNavDrawer = (props: PropsWithChildren) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <div className="block md:hidden fixed left-5 bottom-5">
            <button title='toggle filter sidebar' type='button' className='btn btn-circle btn-primary' onClick={toggleDrawer}><span className='text-lg'><AiOutlineMenu/></span></button>
            </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bg-red-500'
            >
                <div className='p-3 overflow-y-auto ' >{props.children}</div>
            </Drawer>
        </>
    )
}

export default MobileNavDrawer