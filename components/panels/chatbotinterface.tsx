import React from "react";

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
                        <input className="chatbot-colorpicker" type="color" list="presetColors" defaultValue={"#3B81F6"}/>
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
                <div className="interface"></div>
            </div>
        </div>
    )
}

export default ChatInterface;