import React, { Fragment, useState } from "react";
import Head from "next/head";

import Title from "./Title";

const Dashboard = () => {

    const [totalNumber, setTotalNumber] = useState<number>(0);
    const [avgNumber, setAvgNumber] = useState<number>(0);

    return (
        <Fragment>
            <Head>
                <title>Setting</title>
            </Head>
            <section id="dashboardPage">
                <div className="widget">
                    <Title title="Dashboard" />
                    <div className="description">
                        <span>Currently dashboard doesn't show conversations that happended through the API</span>
                    </div>
                    <div className="form">
                        <span className="title">Last 7 days</span>
                        <div className="log-form">
                            <div className="log-element">
                                <span className="log-title">Total Conversations</span>
                                <span className="log-number">{totalNumber}</span>
                            </div>
                            <div className="log-element">
                                <span className="log-title">Avg. Messages / Conversations</span>
                                <span className="log-number">{avgNumber}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Dashboard;
