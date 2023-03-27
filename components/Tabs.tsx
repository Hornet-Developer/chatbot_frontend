import useToggle from "@/hooks/useToggle";

type TabsProps = {
    activeTab: number,
    handleTabChange: (tabIndex: number) => void,
};

const Tabs = ({ activeTab, handleTabChange }: TabsProps) => {
    const { isOpen, onToggle, onClose } = useToggle();

    return (
        <div className="setting-left-box">
            <div className="setting-tittle" onClick={onToggle}>
                <h4>
                    Settings
                </h4>
                <div className="responsive-arrow">
                    <svg id="SvgjsSvg1026" width="30" height="30"
                        xmlns="http://www.w3.org/2000/svg" version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    // xmlns:svgjs="http://svgjs.com/svgjs"
                    >
                        <defs id="SvgjsDefs1027"></defs>
                        <g id="SvgjsG1028"><svg xmlns="http://www.w3.org/2000/svg"
                            enableBackground="new 0 0 24 24" viewBox="0 0 24 24"
                            width="30" height="30">
                            <path
                                d="M9.9,17.2c-0.6,0-1-0.4-1-1c0-0.3,0.1-0.5,0.3-0.7l3.5-3.5L9.2,8.5c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l4.2,4.2	c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0l-4.2,4.2C10.4,17.1,10.1,17.2,9.9,17.2z"
                                fill="#000" className="color000 svgShape"></path>
                        </svg></g>
                    </svg>
                </div>
            </div>
            <div className={`setting-listing-box yykk ${isOpen ? 'open' : ''}`}>
                <ul className="flex-column">
                    <li
                        onClick={() => handleTabChange(0)}>
                        <a className={`${activeTab === 0 ? 'active' : ''}`}>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                role="img"
                                viewBox="0 0 24 24"
                                height="17"
                                width="17"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title></title>
                                <path
                                    d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z">
                                </path>
                            </svg>
                            Connected HubSpot Accounts
                        </a>
                    </li>
                    <li
                        onClick={() => handleTabChange(1)}>
                        <a className={`${activeTab === 1 ? 'active' : ''}`}>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                height="17"
                                width="17"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="2"
                                    d="M10,21 C7.50000053,23.5 5.00000002,23 3,21 C0.999999977,19 0.500000114,16.5 3.00000004,14 C5.49999997,11.5 5.99999998,11 5.99999998,11 L13.0000005,18 C13.0000005,18 12.4999995,18.5 10,21 Z M14.0003207,3 C16.5,0.499999776 19,0.999999776 21.001068,3 C23.002136,5.00000022 23.5,7.49999978 21.001068,10 C18.5021359,12.5000002 18.0007478,13 18.0007478,13 L11,6 C11,6 11.5006414,5.50000022 14.0003207,3 Z M11,9.9999 L8.5,12.4999999 L11,9.9999 Z M14,13 L11.5,15.5 L14,13 Z"
                                >
                                </path>
                            </svg>Connect Accounts</a>
                    </li>
                    <li onClick={() => handleTabChange(2)}>
                        <a className={`${activeTab === 2 ? 'active' : ''}`}>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                height="17"
                                width="17"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M964.256 49.664C929.392 16.256 890.933-.672 849.877-.672c-64.192 0-111.024 41.472-123.841 54.176-18.032 17.856-633.152 633.2-633.152 633.2a33.011 33.011 0 0 0-8.447 14.592C70.565 752.559 1.077 980.016.387 982.304c-3.567 11.648-.384 24.337 8.208 32.928a32.336 32.336 0 0 0 22.831 9.44c3.312 0 6.655-.496 9.919-1.569 2.352-.767 237.136-76.655 275.775-88.19a32.736 32.736 0 0 0 13.536-8.033c24.416-24.128 598.128-591.456 636.208-630.784 39.392-40.592 58.96-82.864 58.208-125.616-.784-42.208-21.248-82.848-60.816-120.816zM715.845 155.84c16.304 3.952 54.753 16.862 94.017 56.479 39.68 40.032 50.416 85.792 52.416 96.208-125.824 125.168-415.456 411.728-529.632 524.672-10.544-24.56-27.584-54.144-54.993-81.76-33.471-33.728-67.536-52.783-93.808-63.503 112.992-113.008 408.08-408.224 532-532.096zM140.39 741.95c17.584 4.672 54.111 18.224 91.344 55.76 28.672 28.912 42.208 60.8 48.288 80.24-44.48 14.304-141.872 47.92-203.76 67.872 18.336-60.336 49.311-154.304 64.128-203.872zm780.031-491.584a1748.764 1748.764 0 0 1-6.065 6.16c-10.113-26.049-27.857-59.52-58.577-90.496-31.391-31.648-63.231-50.32-88.75-61.36 2.175-2.16 3.855-3.857 4.511-4.496 3.664-3.617 36.897-35.376 78.32-35.376 23.84 0 47.248 10.88 69.617 32.32 26.511 25.424 40.175 50.512 40.624 74.592.431 24.576-12.913 51.04-39.68 78.656z">
                                </path>
                            </svg>Writing</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Tabs;