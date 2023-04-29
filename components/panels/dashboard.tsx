import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

import Title from "./Title";

import Modal from '@mui/material/Modal';
import { Box } from "@mui/material";

const Dashboard = () => {

    const [totalNumber, setTotalNumber] = useState<number>(0);
    const [avgNumber, setAvgNumber] = useState<number>(0);

    const [modalState, setModalState] = useState<boolean>(false);

    const [logList, setLogList] = useState([
        { conversation_id: "1", usermsg: "Hello", botmsg: "Hello, What can I help you?", msgtime: "Just now"},
        { conversation_id: "2", usermsg: "Hello, What's your name?", botmsg: "The technologies used in the given context include Sidekiq, Redis, Caching, Elasticsearch, Pusher, Memcached, Ruby on Rails, TailwindCSS, RSpec, Capybara, Pheonix Liveview, Node.js, React, Vue.js, Redux, API, GraphQL, PostgreSQL, MySQL, Redis, MongoDB, Kibana, SQS, ECS, Beanstalk, and CI/CD.", msgtime: "5 hours age"},
        { conversation_id: "3", usermsg: "who are you?", botmsg: "My name is AI Assistant. I am here to assist you with any questions you have regarding the given information.", msgtime: "8 hours age"},
    ])

    const handleClose = () => setModalState(false);

    const [messages, setMessages] = useState([
        { content: "Hi! What can I answer for you today?", role: "bot" },
        { content: "what tech?", role: "user" },
        { content: "The technologies used in the given context include Sidekiq, Redis, Caching, Elasticsearch, Pusher, Memcached, Ruby on Rails, TailwindCSS, RSpec, Capybara, Pheonix Liveview, Node.js, React, Vue.js, Redux, API, GraphQL, PostgreSQL, MySQL, Redis, MongoDB, Kibana, SQS, ECS, Beanstalk, and CI/CD.", role: "bot" },
      ]);

    const log_select = async (conversation_id: any) => {
        localStorage.setItem("conversation_id", conversation_id);
        console.log(conversation_id);
        setModalState(true);
        console.log(modalState);
    };

    return (
        <Fragment>
            <Head>
                <title>Setting</title>
            </Head>
            <Modal open={modalState} onClose={handleClose} >
                <Box id="chatlog-container">
                    <div className="chatlog-widget">
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <ArrowPathIcon className="reload" />
                        </div>
                        <hr />
                        <div className="chat-content">
                            {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${
                                message.role === "user" ? "user" : "bot"
                                }`}
                            >
                                {message.content}
                            </div>
                            ))}
                        </div>
                    </div>
                </Box>
            </Modal>
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
                                <li key={index} className="msglog-form" onClick={() => log_select(log["conversation_id"])}>
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
