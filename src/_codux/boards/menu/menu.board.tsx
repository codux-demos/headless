import { createBoard } from '@wixc3/react-board';
import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './style.css'

type MenuItem = Required<MenuProps>['items'][number];

function asItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    asItem(
        'Navigation',
        'sub1',
        <MailOutlined />,
        [
            asItem(
                'Group A',
                null,
                <MailOutlined />,
                [asItem('Option 1', '1', <MailOutlined />), asItem('Option 2', '2')],
                'group'
            ),
            asItem(
                'Group B',
                null,
                null,
                [asItem('Option 3', '3'), asItem('Option 4', '4')],
                'group'
            ),
        ]
    ),

    asItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        asItem('Option 5', '5'),
        asItem('Option 6', '6'),
        asItem('Submenu', 'sub3', null, [asItem('Option 7', '7'), asItem('Option 8', '8')]),
    ]),

    asItem('Navigation Three', 'sub4', <SettingOutlined />, [
        asItem('Option 9', '9'),
        asItem('Option 10', '10'),
        asItem('Option 11', '11'),
        asItem('Option 12', '12'),
    ]),
];

export default createBoard({
    name: 'Ant Design Menu',
    Board: () => <Menu style={{ width: 512 }} mode="horizontal" items={items} />,
    environmentProps: {
        canvasHeight: 145,
    },
});
