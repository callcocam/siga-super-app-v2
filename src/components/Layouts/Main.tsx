import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import { FaBars } from 'react-icons/fa';

const Main = ({
    header,
    collapsed,
    rtl,
    image,
    handleToggleSidebar,
    handleCollapsedChange,
    handleRtlChange,
    handleImageChange,
    children
}: any) => {
    const intl = useIntl();
    return (
        <main className='w-full block clear-both'>
            {/* Page Heading */}
            <header className="bg-white shadow">
                <div className="w-full justify-between items-center flex md:max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 relative">
                    {header}
                    <div className='flex space-x-2'>
                        <div className="btn-toggle block md:hidden" onClick={() => handleToggleSidebar(true)}>
                            <FaBars className='h-10 w-10 cursor-pointer' />
                        </div>

                        <div className="hidden md:block">
                            <Switch
                                height={16}
                                width={30}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                onChange={handleCollapsedChange}
                                checked={collapsed}
                                onColor="#219de9"
                                offColor="#bbbbbb"
                            />
                            {/* <span> {intl.formatMessage({ id: 'collapsed' })}</span> */}
                        </div>
                        {/* <div className="block">
                            <Switch
                                height={16}
                                width={30}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                onChange={handleRtlChange}
                                checked={rtl}
                                onColor="#219de9"
                                offColor="#bbbbbb"
                            />
                            <span> {intl.formatMessage({ id: 'rtl' })}</span>
                        </div> */}
                        {/* <div className="block">
                            <Switch
                                height={16}
                                width={30}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                onChange={handleImageChange}
                                checked={image}
                                onColor="#219de9"
                                offColor="#bbbbbb"
                            />
                            <span> {intl.formatMessage({ id: 'image' })}</span>
                        </div> */}
                    </div>
                </div>
            </header>
            <div>
                {children}
            </div>
        </main>

    );
};

export default Main;