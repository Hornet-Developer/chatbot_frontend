import ChatbotDemo from "./chatbotdemo";
import Writing from "./Writing";
import ReChatbot from "./rechatbot";
import Dashboard from "./dashboard";

type PanelsProps = {
    activeTab: number,
};

const Panels = ({ activeTab }: PanelsProps) => {
    return (
        <div className="setting-right-box">
            <div className="setting-body">
                <div id="myTabContent">
                    {activeTab === 0 && <ChatbotDemo />}
                    {activeTab === 1 && <Writing />}
                    {activeTab === 2 && <Dashboard />}
                    {activeTab === 3 && <ReChatbot />}
                </div>
            </div>
        </div>
    );
};

export default Panels;