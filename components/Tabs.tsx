type TabsProps = {
    activeTab: number,
    handleTabChange: (tabIndex: number) => void,
};

const Tabs = ({ activeTab, handleTabChange }: TabsProps) => {

    return (
            <div className="scroll-bar-wrap aside-bar scroll-box side-bar-list head-dis-main-box heading">
                <li
                    onClick={() => handleTabChange(0)}>
                    <a className={`${activeTab === 0 ? 'active' : ''}`}>
                        <div className="dis">
                            Chatbot
                        </div>
                    </a>
                </li>
                <li
                    onClick={() => handleTabChange(1)}>
                    <a className={`${activeTab === 1 ? 'active' : ''}`}>
                        <div className="dis">
                            Setting
                        </div>
                    </a>
                </li>
                <li
                    onClick={() => handleTabChange(2)}>
                    <a className={`${activeTab === 2 ? 'active' : ''}`}>
                        <div className="dis">
                            Dashboard
                        </div>
                    </a>
                </li>
                <li
                    onClick={() => handleTabChange(3)}>
                    <a className={`${activeTab === 3 ? 'active' : ''}`}>
                        <div className="dis">
                            Replace Data
                        </div>
                    </a>
                </li>
                <li
                    onClick={() => handleTabChange(4)}>
                    <a className={`${activeTab === 4 ? 'active' : ''}`}>
                        <div className="dis">
                            Embed on website
                        </div>
                    </a>
                </li>
                <li
                    onClick={() => handleTabChange(5)}>
                    <a className={`${activeTab === 5 ? 'active' : ''}`}>
                        <div className="dis">
                            Share Chatbot
                        </div>
                    </a>
                </li>
                <li
                    onClick={() => handleTabChange(6)}>
                    <a className={`${activeTab === 6 ? 'active' : ''}`}>
                        <div className="dis">
                            Delete Chatbot
                        </div>
                    </a>
                </li>
            </div>
    );
};

export default Tabs;