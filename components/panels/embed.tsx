import Head from "next/head";
import { Fragment, useEffect } from "react"
import Title from "./Title";

import React from "react";

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Embed = () => {
    const [successOpen, setSuccessOpen] = React.useState(false);
    const [faildOpen, setFaildOpen] = React.useState(false);
    const [domain, setDomain] = React.useState("");

    const [chatbotId, setChatbotId] = React.useState("");

    const [link, setLink] = React.useState("");
    var domainLink = "";

    const handleClick = () => {
        setSuccessOpen(true);
    };

    const onChangeDomain = (e: React.ChangeEvent<HTMLInputElement>) => {
        domainLink = e.target.value;
        setDomain(domainLink);
    }

    const handleDomainClick = () => {
        setDomain(domainLink);
        if (domain) {
            setChatbotId("4rPHhnrCB_5q8Fhm6fJFg");
            console.log(domain);
        } else {
            setFaildOpen(true);
        }
    };

    return (
        <Fragment>
            <Head>Embed on Website</Head>
            <section id="embed">
                <div className="widget">
                    <Title title="Embed on Website" />
                    <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={successOpen}
                        autoHideDuration={1000}           
                    >
                        <Alert severity="success" style={{minWidth: 300}}>
                            <AlertTitle>Success</AlertTitle>
                            Chatbot visibility updated
                        </Alert>
                    </Snackbar>
                    <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={faildOpen}
                        autoHideDuration={1000}           
                    >
                        <Alert severity="warning" style={{minWidth: 300}}>
                            <AlertTitle>Warning</AlertTitle>
                            Domain invaild
                        </Alert>
                    </Snackbar>
                    {!successOpen ? (<div className="element">
                        <span className="topic">Change chatbot visibility</span>
                        <span className="title">Visibilty</span>
                        <select className="chatbot-select" defaultValue={0}>
                            <option value="private_but_can_be_embedded">Private but can be embedded on website</option>
                            <option value="public">public</option>
                        </select>
                        <span className="description">'Private but can be embedded on website' means other people can't access your chatbot if they have the link, but visitors on your website can access it.</span>
                        <div className="btn-form">
                            <button className="full-btn" onClick={handleClick}>Save changes</button>
                        </div>
                    </div>) : !chatbotId ?
                    (<div className="element">
                        <span className="topic">Set your domains</span>
                        <span className="description">Enter each domain in a new line.</span>
                        <textarea className="embed-textarea" placeholder="example.com" onChange={onChangeDomain}></textarea>
                        <div className="btn-form">
                            <button className="full-btn" onClick={handleDomainClick}>Set domains</button>
                        </div>
                    </div>) : 
                    (<div className="element">
                        <span className="description">To add the chatbot any where on your website, add this iframe to your html code</span>
                        <pre className="code-form">
                        &lt;iframe<br/>
                        &ensp;src="https://www.chatbase.co/chatbot-iframe/{chatbotId}"<br/>
                        &ensp;width="100%"<br/>
                        &ensp;height="700"<br/>
                        &ensp;frameborder="0"<br/>
                            &gt;&lt;/iframe&gt;
                        </pre>
                        <span className="description">To add a chat bubble to the bottom right of your website add this script tag to your html</span>
                        <pre className="code-form">
                        &lt;script&gt;<br/>
                        &ensp;window.chatbaseConfig = &#123;<br/>
                        &ensp;	&ensp;chatbotId: "{chatbotId}",<br/>
                                    &#125;<br/>
                            &lt;/script&gt;<br/>
                            &lt;script<br/>
                            &ensp;src="https://www.chatbase.co/embed.min.js"<br/>
                            &ensp;id="{chatbotId}"<br/>
                            &ensp;defer&gt;<br/>
                            &lt;/script&gt;
                        </pre>
                    </div>)
                    }
                    
                </div>
            </section>
        </Fragment>
    )
}

export default Embed;