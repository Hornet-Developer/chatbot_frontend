import SettingIcon from "@/assets/imges/settingIcon.svg";
import ChatIcon from "@/assets/imges/chatIcon.svg";

type menuListType = {
    href: string,
    src: string,
    alt: string,
    text: string,
}[];

const menuList: menuListType = [
    {
        href: "/chatbot",
        src: ChatIcon,
        alt: "chat",
        text: "Chat"
    },
    {
        href: "/settings",
        src: SettingIcon,
        alt: "settings",
        text: "Settings"
    },
];

export default menuList;