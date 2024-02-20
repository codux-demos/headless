import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import type { ItemType } from "antd/es/menu/hooks/useItems";
import { Menu as AntMenu } from "antd";
import "./style.css";

const items: ItemType[] = [
    {
        label: "Navigation",
        key: "sub1",
        icon: <MailOutlined />,
        children: [
            {
                label: "Group A",
                type: "group",
                icon: <MailOutlined />,
                children: [
                    { icon: <MailOutlined />, label: "Option 1", key: "1" },
                    { label: "Option 2", key: "2" },
                ],
            },
            {
                label: "Group B",
                type: "group",
                children: [
                    { label: "Option 3", key: "3" },
                    { label: "Option 4", key: "4" },
                ],
            },
        ],
    },

    {
        label: "Navigation Two",
        key: "sub2",
        icon: <AppstoreOutlined />,
        children: [
            { label: "Option 5", key: "5" },
            { label: "Option 6", key: "6" },
        ],
    },
    {
        label: "Navigation Three",
        key: "sub4",
        icon: <SettingOutlined />,
        children: [
            { label: "Option 9", key: "9" },
            { label: "Option 10", key: "10" },
        ],
    },
];

export const Menu = () => <AntMenu style={{ width: "100%" }} mode="horizontal" items={items} />;
