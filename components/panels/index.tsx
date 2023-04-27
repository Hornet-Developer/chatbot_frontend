import ChatbotDemo from "./chatbotdemo";
import Accounts from "./Accounts";
import Hubspot from "./HubSpot";
import Writing from "./Writing";
import ReChatbot from "./rechatbot";

type PanelsProps = {
    activeTab: number,
};

const Panels = ({ activeTab }: PanelsProps) => {
    return (
        <div className="setting-right-box">
            <div className="setting-body">
                <div id="myTabContent">
                    {activeTab === 0 && <ChatbotDemo />}
                    {activeTab === 1 && <Accounts />}
                    {activeTab === 2 && <Writing />}
                    {activeTab === 3 && <ReChatbot />}
                </div>
            </div>
        </div>
    );
};

export default Panels;