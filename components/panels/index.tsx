
import Accounts from "./Accounts";
import Hubspot from "./HubSpot";
import Writing from "./Writing";

type PanelsProps = {
    activeTab: number,
};

const Panels = ({ activeTab }: PanelsProps) => {
    return (
        <div className="setting-right-box">
            <div className="setting-body">
                <div id="myTabContent">
                    {activeTab === 0 && <Hubspot />}
                    {activeTab === 1 && <Accounts />}
                    {activeTab === 2 && <Writing />}
                </div>
            </div>
        </div>
    );
};

export default Panels;