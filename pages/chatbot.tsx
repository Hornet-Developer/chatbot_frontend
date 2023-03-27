import React, { Fragment, useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import BulbIcon from "@/assets/imges/bulbIcon.svg";
import ChatbotIcon from "@/assets/imges/icon.svg";
import ArrowDownIcon from "@/assets/imges/arrowDownIcon.svg";
import MicIcon from "@/assets/imges/mic.svg";
import SendIcon from "@/assets/imges/send.svg";
import DisabledSendIcon from "@/assets/imges/disabled-send.svg";
import dropdowns from "@/_mock/dropdowns";
import SideMenu from "@/components/SideMenu";
import { SideMenuContext } from "@/context";
import OutSideClickHandler from "react-outside-click-handler";
import useToggle from "@/hooks/useToggle";
import { trim } from "lodash";
import { ParagraphType, MarkupType, TableType } from "@/_mock/answers";
import Chats from "@/components/Chats";
import Head from "next/head";
import useTime from "@/hooks/useTime";
import Custom from "@/components/layout/Custom";

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
    const [input, setInput] = useState<string>('');
    const [chatData, setChatData] = useState<ChatDataType | []>([]);
    const { isOpen, onClose, onToggle } = useToggle();
    const { isSideMenuVisible } = useContext(SideMenuContext);
    const isNotInput = trim(input) === '';
    const askTime = useTime();
    const lastQuestionRef = useRef<HTMLDivElement>(null);

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
        <Custom>
            <Fragment>
                <Head>
                    <title>Chatbot</title>
                </Head>
                <section id="chatbotPage">
                    <div className="row">
                        <div className={`col-lg-2 left-aside-bar ${isSideMenuVisible ? 'slide-right' : ''}`}>
                            <div className="scroll-bar-wrap">
                                <div className="aside-bar scroll-box">
                                    <div className="warning-box">
                                        <div className="warning-img-box">
                                            <Image src={BulbIcon} alt="warning" />
                                        </div>
                                        <p>Don&apos;t stray too far from the samples. I&apos;m still learning</p>
                                    </div>
                                    <OutSideClickHandler onOutsideClick={onClose}>
                                        <div className="dropdown">
                                            <button
                                                id="dropdown-btn"
                                                onClick={onToggle}
                                                className={`dropbtn ${isOpen ? 'show-sign' : ''}`}
                                            >Suggested
                                                <Image src={ArrowDownIcon} alt="toggle-options" />
                                            </button>
                                            <div id="myDropdown" className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                                                {dropdowns.map(({ href, label }, index) => (
                                                    <a href={href} key={index}>{label}</a>
                                                ))}
                                            </div>
                                        </div>
                                    </OutSideClickHandler>
                                    <SideMenu />
                                </div>
                                <div className="cover-bar"></div>
                            </div>
                        </div>
                        <div className="col-lg-10 right-side">
                            <div className="right-side-content">
                                <div className="chatbot">
                                    <div className="chat-header">
                                        <div className="log">
                                            <Image src={ChatbotIcon} alt="logo" title="logo" />
                                        </div>
                                        <div className="text">
                                            <h3>
                                                Welcome to Chatbox! Enter help to get started.
                                            </h3>
                                            <span>10:30 am</span>
                                        </div>
                                    </div>

                                    <div className="scroll-bar-wrap">
                                        <Chats chatData={chatData} ref={lastQuestionRef} />
                                    </div>

                                    <div className="chat-footer">
                                        <div className="input-group">
                                            <textarea
                                                name="#"
                                                cols={30}
                                                rows={10}
                                                className="form-control type_msg"
                                                placeholder="Type a message"
                                                value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                                onKeyDown={handleKeyDown}
                                            ></textarea>
                                        </div>
                                        <div className="input-group-append">
                                            <div className="inputimg-box">
                                                <Image src={MicIcon} alt="voice" />
                                            </div>
                                            <div className="inputimg-box">
                                                <button
                                                    className="actionBtn"
                                                    onClick={handleRequest}
                                                    disabled={isNotInput}
                                                >
                                                    <Image
                                                        src={isNotInput ? DisabledSendIcon : SendIcon}
                                                        alt="send"
                                                        width={24}
                                                        height={24}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        </Custom>
    )
}

export default Chatbot;
