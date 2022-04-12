import React from 'react';
import { useIntl } from 'react-intl';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import sidebarBg from '@/assets/bg2.jpg';
import {
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent, Sidebar
} from '@/components/Layouts/Sidebar';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }: any) => {
    const intl = useIntl();

    const { logout } = useAuth()

    return (
        <Sidebar
            image={image ? sidebarBg : false}
            rtl={rtl}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {intl.formatMessage({ id: 'sidebarTitle' })}
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaTachometerAlt />}
                        suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
                    >
                        <Link href={`/dashboard`} >
                            <a>{intl.formatMessage({ id: 'dashboard' })}</a>
                        </Link>
                    </MenuItem>
                    <MenuItem icon={<FaGem />}>
                        <Link href={`/posts`} >
                            <a> {intl.formatMessage({ id: 'components' })}</a>
                        </Link>
                    </MenuItem>
                    <MenuItem icon={<FaUserAlt />}>
                        <Link href={`/users`} >
                            <a> {intl.formatMessage({ id: 'Users' })}</a>
                        </Link>
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu
                        suffix={<span className="badge yellow">3</span>}
                        title={intl.formatMessage({ id: 'withSuffix' })}
                        icon={<FaRegLaughWink />}
                    >
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
                    </SubMenu>
                    <SubMenu
                        prefix={<span className="badge gray">3</span>}
                        title={intl.formatMessage({ id: 'withPrefix' })}
                        icon={<FaHeart />}
                    >
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
                    </SubMenu>
                    <SubMenu title={intl.formatMessage({ id: 'multiLevel' })} icon={<FaList />}>
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
                        <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
                            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
                            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
                            <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>
                            </SubMenu>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                    <button
                        onClick={logout}
                        className="sidebar-btn flex items-center space-x-3"
                    >
                        <FaSignOutAlt className='h-8 w-8' />
                        <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            {intl.formatMessage({ id: 'SignOut' })}
                        </span>
                    </button>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
};

export default Aside;