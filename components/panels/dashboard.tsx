import React, { Fragment, useState } from "react";
import Head from "next/head";

import Title from "./Title";

const Dashboard = () => {

    const [totalNumber, setTotalNumber] = useState<number>(0);
    const [avgNumber, setAvgNumber] = useState<number>(0);

    const [logList, setLogList] = useState([
        { usermsg: "Hello", botmsg: "Hello, What can I help you?", msgtime: "Just now"},
        { usermsg: "Hello, What's your name?", botmsg: "The technologies used in the given context include Sidekiq, Redis, Caching, Elasticsearch, Pusher, Memcached, Ruby on Rails, TailwindCSS, RSpec, Capybara, Pheonix Liveview, Node.js, React, Vue.js, Redux, API, GraphQL, PostgreSQL, MySQL, Redis, MongoDB, Kibana, SQS, ECS, Beanstalk, and CI/CD.", msgtime: "5 hours age"},
        { usermsg: "who are you?", botmsg: "TMy name is AI Assistant. I am here to assist you with any questions you have regarding the given information.", msgtime: "8 hours age"},
    ])

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
                    <div className="form">
                        <span className="title">Conversations</span>
                        <ul className="msglog-list">
                            {logList.map((log, index) => (
                                <li key={index} className="msglog-form">
                                    <div className="msg-1">
                                        <span className="user-msg">{"User: " + log.usermsg}</span>
                                        <span className="msg-time">{log.msgtime}</span>
                                    </div>
                                    <div className="msg-2">
                                        <span className="bot-msg">{"Bot: " + log.botmsg}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Dashboard;
