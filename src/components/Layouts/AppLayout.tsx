import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import Header from './Header'
import Aside from './Sidebar/Layout/Aside';
import Main from './Main';

export default function AppLayout({ header, children }: any) {
    const { user } = useAuth({ middleware: 'auth' })
    const [rtl, setRtl] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [image, setImage] = useState<any>(false);
    const [toggled, setToggled] = useState(false);

    const handleCollapsedChange = (checked: any) => {
        setCollapsed(checked);
    };

    const handleRtlChange = (checked: any) => {
        setRtl(checked);
        //setLocale(checked ? 'ar' : 'en');
    };
    const handleImageChange = (checked: any) => {
        setImage(checked);
    };

    const handleToggleSidebar = (value: any) => {
        setToggled(value);
    };

    return (
        <div className="bg-gray-100 flex flex-col min-h-screen w-full">
            <Header user={user} />
            <div className='flex  min-h-screen relative'>
                <Aside
                    image={image}
                    collapsed={collapsed}
                    rtl={rtl}
                    toggled={toggled}
                    handleToggleSidebar={handleToggleSidebar}
                />
                {/* Page Content */}
                <Main
                    header={header}
                    image={image}
                    toggled={toggled}
                    collapsed={collapsed}
                    rtl={rtl}
                    handleToggleSidebar={handleToggleSidebar}
                    handleCollapsedChange={handleCollapsedChange}
                    handleRtlChange={handleRtlChange}
                    handleImageChange={handleImageChange}
                >
                    {children}
                </Main>

            </div>
        </div>
    )
}