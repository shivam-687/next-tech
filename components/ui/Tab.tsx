'use client'
import React, { ReactNode, useState } from 'react'
import SectionTitle from '../SectionTitle';
import { nanoid } from 'nanoid';


export type TabItem = {
    lable: ReactNode,
    content?: ReactNode,
    key: string
}

export type TabPosition = 'left' | 'right' | 'center';


export type TabProps = {
    items: TabItem[],
    onTabClick?: (tabItem: TabItem) => void,
    defaultKey?: string,
    title?: string,
    subTitle?: string,
    tabPosition?: TabPosition,
    loading?: boolean
}



const getTabByKey = (key?: string, tabs?: TabItem[]) => {
    if (!tabs) return undefined;
    if (!key && tabs && tabs.length > 0) return tabs[0];

    return tabs.find(tab => tab.key === key);
}

const getTabPositionClass = (position: TabPosition) => {
    const positionClassMap: { [key in TabPosition]: string } = {
        'left': 'md:justify-start',
        'center': 'md:justify-center',
        'right': 'md:justify-end'
    };
    return positionClassMap[position];
}
const Tab = ({
    items = [],
    onTabClick,
    defaultKey,
    tabPosition = 'left',
    title,
    subTitle,
    loading
}: TabProps) => {

    const [activeTab, setActiveTab] = useState<TabItem | undefined>(getTabByKey(defaultKey, items));

    const selectTab = (key: string) => {
        const tab = getTabByKey(key, items);
        setActiveTab(tab);
        if (tab) onTabClick?.(tab);

        console.log({tab})
    }


    return (
        <div className='w-full'>
            <div className={`flex items-center gap-5 flex-col md:flex-row`}>
                {
                    title && <div className='flex-grow-0 max-w-lg w-full'>
                        <SectionTitle title={title} subTitle={subTitle} />
                    </div>
                }
                <div className={` flex flex-grow w-full justify-center ${getTabPositionClass(tabPosition)}`}>
                    <div className="tabs">
                        {
                            loading && Array(4).fill(null).map(() => {
                                return <a className='tab' key={nanoid()}>loading</a>
                            })
                        }
                        {
                            !loading && items.map(tab => {
                                return <a onClick={() => selectTab(tab.key)} key={tab.key} className={`tab ${(activeTab && activeTab.key === tab.key) ? 'tab-active' : ''}`}>{tab.lable}</a>
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="mt-5">
                {
                    activeTab && activeTab.content
                }
            </div>
        </div>
    )
}

export default Tab