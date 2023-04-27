import React, { Fragment, useContext, useEffect, useRef, useState } from "react";
import { SideMenuContext } from "@/context";
import useToggle from "@/hooks/useToggle";
import { trim } from "lodash";
import { ParagraphType, MarkupType, TableType } from "@/_mock/answers";
import Head from "next/head";
import useTime from "@/hooks/useTime";
import Custom from "@/components/layout/Custom";
import Unknow from "@/assets/imges/unknow.png";
import Image from "next/image";
import Main from "@/components/layout/Main";
import Link from "next/link";

export type AnswerType = {
    type: string,
    data: ParagraphType | MarkupType | TableType,
    respondTime: string,
};

export type ChatDataType = {
    question: string,
    askTime: string,
    answer: AnswerType,
}[];


const Chatbot = () => {
    const [init, setInit] = useState<boolean>(false);
    const [input, setInput] = useState<string>('');
    const [chatData, setChatData] = useState<ChatDataType | []>([]);
    const { isSideMenuVisible } = useContext(SideMenuContext);
    const isNotInput = trim(input) === '';
    const askTime = useTime();
    const lastQuestionRef = useRef<HTMLDivElement>(null);

    const chatbotname = 'Chatbot Name';

    const handleKeyDown = async (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey && !isNotInput) {
            await handleRequest();
        }
    };

    const handleRequest = async () => {
        const newRequest = {
            question: input,
            askTime,
        };

        const response = await fetch('./api/chatbot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRequest),
        });

        const data = await response.json();
        setChatData(prev => ([...prev, data]));
        setInput('');
    };

    useEffect(() => {
        if (lastQuestionRef.current) {
            lastQuestionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatData]);

    return (
        <Main>
            <Fragment>
                <Head>
                    <title>Chatbot</title>
                </Head>
                <section id="chatbotPage">
                    <div className="widget">
                        <div id="chatbot-title">
                            <div>
                                <span className="title"><b>My Chatbots</b></span>
                            </div>
                            { init ? 
                                '' : 
                                <div className="new-btn">
                                    <a href="/newchatbot">New Chatbot</a>
                                </div>
                            }
                        </div>
                        <hr />
                        <div id="chatbot-main">
                            { init ? 
                                <div className="init">
                                    <div className="new-btn">
                                        <a href="/newchatbot">New Chatbot</a>
                                    </div>
                                </div> : 
                                <div className="chatbot-list">
                                    <div className="chatbot">
                                        <Image className="chatbot-image" src={Unknow} alt="chatbot" title="chatbot" />
                                        <span className="title">{chatbotname}</span>
                                    </div>
                                    <div className="chatbot">
                                        <Image className="chatbot-image" src={Unknow} alt="chatbot" title="chatbot" />
                                        <span className="title">{chatbotname}</span>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </section>
            </Fragment>
        </Main>
    )
}

export default Chatbot;
