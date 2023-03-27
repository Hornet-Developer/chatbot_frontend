import Head from "next/head";
import { Fragment, useState } from "react";
import Tabs from "@/components/Tabs";
import Panels from "@/components/panels";
import Main from "@/components/layout/Main";

const Settings = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabChange = (tabIndex: number) => {
        console.log('tabIndex : ', tabIndex);
        setActiveTab(tabIndex);
    };

    return (
        <Main>
            <Fragment>
                <Head>
                    <title>Settings</title>
                </Head>
                <section id="settingsPage">
                    <div className="setting-main-box">
                        <div className="container">
                            <div className="row pd-box">
                                <div className="col-lg-4">
                                    <Tabs activeTab={activeTab} handleTabChange={handleTabChange} />
                                </div>
                                <div className="col-lg-8">
                                    <Panels activeTab={activeTab} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        </Main>
    );
};

export default Settings;
