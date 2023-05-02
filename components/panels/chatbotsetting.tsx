import Head from "next/head"
import { Fragment, useState } from "react"
import Title from "./Title"
import NumberFormat from "react-number-format"

import ChatInterface from "./chatbotinterface"

const ChatbotSetting = () => {
    const [chatbotId, setChatbotId] = useState("Vb8rKFKEWkXu3nFT4k7H5");
    const [charNum, setCharNum] = useState<number>(3553);
    const [chatbotName, setChatbotName] = useState("cv_Philip_henry.pdf");
    const [basePrompt, setBasePrompt] = useState(`I want you to act as a document that I am having a conversation with. Your name is "AI Assistant". You will provide me with answers from the given info. If the answer is not included, say exactly "Hmm, I am not sure." and stop after that. Refuse to answer any question not about the info. Never break character.`);
    const [msgLimit, setMsgLimit] = useState<number>(20);
    const [timeLimit, setTimeLimit] = useState<number>(240);
    const [limitHint, setLimitHint] = useState("Too many messages in a row");

    const [initMsg, setInitMsg] = useState('Hi! What can I help you with?');
    const [sugMsg, setSugMsg] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [backColor, setBackColor] = useState('#FFFFFF');
    const [userMsgColor, setUserMsgColor] = useState('#4B3D8F');
    const [iconColor, setIconColor] = useState("#37A987");
    const [iconPos, seticonPos] = useState("flex-end");
    const [checkProfileIcon, setCheckProfileIcon] = useState<boolean>(false);
    const [checkChatIcon, setCheckChatIcon] = useState<boolean>(false);
    const [profileIconUrl, setProfileIconUrl] = useState("");    
    const [chatIconUrl, setChatIconUrl] = useState("");


    const [initMsgShowtime, setInitMsgShowtime] = useState<number>(3);

    var nf = new Intl.NumberFormat();
    nf.format(charNum);

    return (
        <Fragment>
            <Head>
                <title>Setting</title>
            </Head>
            <section id="chatbotsetting">
                <div className="widget">
                    <Title title="Setting" />
                    <div className="element" style={{paddingTop: 32}}>
                        <span className="topic">Chatbot ID</span>
                        <span className="chatbot-id">{chatbotId}</span>
                    </div>
                    <div className="element">
                        <span className="topic">Number of characters</span>
                        <span className="chatbot-id">{nf.format(charNum)}</span>
                    </div>
                    <div className="element">
                        <span className="topic">Name</span>
                        <input className="chatbot-input" defaultValue={chatbotName} />
                    </div>
                    <div className="element">
                        <div className="topic">
                            <span>Base Prompt (system message)</span>
                            <button className="reset">Reset</button>
                        </div>
                        <textarea className="chatbot-textarea" style={{minHeight: 110}} defaultValue={basePrompt} />
                    </div>
                    <div className="element">
                        <span className="suggest">gpt-4 is much better at following the base prompt and not hallucinating</span>
                        <span className="topic">Model</span>
                        <select className="chatbot-select" defaultValue={0}>
                            <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
                            <option value="gpt-4">gpt-4</option>
                        </select>
                        <span className="description">1 message using gpt-3.5-turbo costs 1 message credit. 1 message using gpt-4 costs 20 message credits.</span>
                    </div>
                    <div className="element">
                        <span className="topic">Visibilty</span>
                        <select className="chatbot-select" defaultValue={2}>
                            <option value="Private">Private</option>
                            <option value="private_but_can_be_embedded">private but can be embedded</option>
                            <option value="public">public</option>
                        </select>
                        <span className="description">'Private': No one can access your chatbot except you (your account)</span>
                        <span className="description">'Private but can be embedded on website': Other people can't access your chatbot if you send them the link, but you can still embed it on your website and your website visitors will be able to use it. (make sure to set your domains)</span>
                        <span className="description">''Public': Anyone with the link can access it on chatbase.co and can be embedded on your website.</span>
                        <span className="description">Set to public if you want to be able to send a link of your chatbot to someone to try it.</span>
                    </div>
                    <div className="element">
                        <span className="topic">Domains</span>
                        <textarea className="chatbot-textarea" placeholder="example.com" />
                        <span className="description">Enter each domain in a new line</span>
                        <span className="description">Domains you want to embed your chatbot on. Your chatbot visibility has to be 'Public' or 'Private but can be embedded on website' for this to work.</span>
                    </div>
                    <div className="element">
                        <div className="topic">
                            <span>Rate Limiting</span>
                            <button className="reset">Reset</button>
                        </div>
                        <span className="description">Limit the number of messages sent from one device on the iframe and chat bubble (this limit will not be applied to you on chatbase.co, only on your website for your users to prevent abuse).</span>
                        <div className="limit-form">
                            <span className="title">Limit to only</span>
                            <input className="limit-input" type="number" defaultValue={msgLimit} />
                            <span className="title">messages every</span>
                            <input className="limit-input" type="number" defaultValue={timeLimit} />
                            <span className="title">seconds.</span>
                        </div>
                        <div className="limithint-form">
                            <span className="title">Show this message to show when limit is hit</span>
                            <input className="limithint-input" defaultValue={limitHint} />
                        </div>
                    </div>
                    <ChatInterface 
                        initMsg={initMsg} 
                        setInitMsg={setInitMsg}
                        initMsgShowtime={initMsgShowtime}
                        setInitMsgShowtime={setInitMsgShowtime}
                        sugMsg={sugMsg}
                        setSugMsg={setSugMsg}
                        displayName={displayName}
                        setDisplayName={setDisplayName}
                        backColor={backColor}
                        setBackColor={setBackColor}
                        setUserMsgColor={setUserMsgColor}
                        userMsgColor={userMsgColor}
                        iconColor={iconColor}
                        setIconColor={setIconColor}
                        iconPos={iconPos}
                        setIconPos={seticonPos}
                        checkProfileIcon={checkProfileIcon}
                        setCheckProfileIcon={setCheckProfileIcon}
                        checkChatIcon={checkChatIcon}
                        setCheckChatIcon={setCheckChatIcon}
                        profileIconUrl={profileIconUrl}
                        setProfileIconUrl={setProfileIconUrl}
                        chatIconUrl={chatIconUrl}
                        setChatIconUrl={setChatIconUrl}
                    />
                    <div className="btn-form">
                        <button className="btn">Save Changes</button>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ChatbotSetting;