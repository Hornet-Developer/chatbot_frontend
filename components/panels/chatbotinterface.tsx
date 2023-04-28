import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

const ChatInterface = (props: any) => {
    const [url, setUrl] = React.useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let files = e.target.files;
        if (!files) return;
        files.length > 0 && setUrl(URL.createObjectURL(files[0]));
        console.log(files.length);
    };

    const onCheck = () => {
        var status = document.getElementById('avatar')?.style.display;
        if ( status == 'flex' ) {
            status = 'none';
        }

        if ( status == 'none' ) {
            status = 'flex';
        }
    };

    return (
        <div id="chatinterface">
            <div className="topic-form">
                <span className="interface-topic">Chat Interface</span>
                <span className="description">applies when embedded on a website</span>
            </div>
            <div className="form">
                <div className="setting">
                    <div className="element">
                        <div className="topic">
                            <span>Initial Messages</span>
                            <button className="reset">Reset</button>
                        </div>
                        <textarea className="chatbot-textarea" defaultValue={props.initMsg} />
                        <span className="description">Enter each message in a new line.</span>
                    </div>
                    <div className="element">
                        <div className="topic">
                            <span>Suggested Messages</span>
                        </div>
                        <textarea className="chatbot-textarea" placeholder="What is example.com?,How does it work?" />
                        <span className="description">Enter each message in a new line.</span>
                    </div>
                    <div className="element">
                        <div className="topic">
                            <span>Theme</span>
                        </div>
                        <select className="chatbot-select" defaultValue={0}>
                            <option value="light">light</option>
                            <option value="dark">dark</option>
                        </select>
                    </div>
                    <div className="element" id="profileicon">
                        <div className="topic">
                            <span>Update chatbot profile picture</span>
                        </div>
                        <input type="file" className="chatbot-input" onChange={onChange}/>
                    </div>
                    <div className="element">
                        <div className="topic">
                            <span>Remove Chatbot Profile Picture</span>
                        </div>
                        <input id="profileiconcheck" className="interface-checkbox" type="checkbox" onChange={onCheck} />
                    </div>
                    <div className="element">
                        <div className="topic">
                            <span>Display name</span>
                        </div>
                        <input className="chatbot-input" />
                    </div>
                    <div className="element">
                        <div className="topic">
                            <span>User Message Color</span>
                            <button className="reset">Reset</button>
                        </div>
                        <input className="chatbot-colorpicker" type="color" list="presetColors" defaultValue={"#4f45e4"}/>
                    </div>
                    <div className="element">
                        <span className="reference">**If the changes here don't show up immediately on your website try clearing your browser cache or use incognito. (New users will see the changes immediately)**</span>
                    </div>
                    <div className="element" id="chaticon">
                        <div className="topic">
                            <span>Update chatbot profile picture</span>
                        </div>
                        <input type="file" className="chatbot-input" onChange={onChange}/>
                    </div>
                    <div className="element">
                        <div className="topic">
                            <span>Remove Chatbot Profile Picture</span>
                        </div>
                        <input id="chaticoncheck" className="interface-checkbox" type="checkbox" onChange={onCheck} />
                    </div>
                    <div className="element">
                        <div className="topic">
                            <span>User Message Color</span>
                            <button className="reset">Reset</button>
                        </div>
                        <input className="chatbot-colorpicker" type="color" list="presetColors" defaultValue={"#000000"}/>
                    </div>
                    <div className="element">
                        <div className="topic">
                            <span>Align Chat Bubble Button</span>
                        </div>
                        <select className="chatbot-select" defaultValue={0}>
                            <option value="right">right</option>
                            <option value="left">left</option>
                        </select>
                    </div>
                    <div className="initmag-form">
                        <span>Auto show initial messages after</span>
                        <div className="limit-form">
                            <input className="limit-input" type="number" defaultValue={props.initMsgShowtime}/>
                            <span>seconds (negative to disable)</span>
                        </div>
                    </div>
                </div>
                <div className="interface">
                    <div id="chatinterface-container">                    
                        <div className="widget">
                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <ArrowPathIcon className="reload"/>
                            </div>
                            <hr />
                            {/* Render the messages */}
                            <div className="chat-widget">
                                <div className="chat-content">
                                    <div className="message bot">Hi! What can I help you with?</div>
                                    <div className="message user">Hi!</div>
                                </div>
                            </div>
                            <div>
                            {/* Input for sending messages */}
                            <div className="help-box-container">
                                <div className="help-box">
                                    {" "}
                                    What questions can you answer for me?{" "}
                                </div>
                            </div>
                            <div className="input-container">
                                <input
                                id="input1"
                                type="text"
                                className="input-text"
                                placeholder="Type your message here..."
                                />
                                <button
                                id="myBtn"
                                className="send-button"
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    width="1.25rem"
                                    height="1.25rem"
                                >
                                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="chaticon-form">
                        <div className="chaticon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="white" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ChatInterface;