import Head from "next/head";
import React, { Fragment, useEffect } from "react";
import Main from "@/components/layout/Main";
import Image from "next/image";
import BackIcon from "@/assets/imges/back.png";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { useAppDispatch } from "@/redux/hooks";
import { create_botSetting } from "@/redux/reducer/settingReducer";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import Title from "./Title";

const ReChatbot = () => {
    const [url, setUrl] = React.useState("");

    const [linkList, setLinkList] = React.useState([
        { link: 'https://mui.com/material-ui/react-switch/' },
        { link: 'https://mui.com/material-ui/react-typography/' },
        { link: 'https://mui.com/material-ui/react-dialog/' },
        { link: 'https://mui.com/material-ui/react-button-group/' },
        { link: 'https://mui.com/material-ui/react-divider/' },
        { link: 'https://mui.com/material-ui/react-skeleton/' },
    ]);

    const deleteAll = () => {
        setLinkList([]);
    }

    const deleteOne = async (index: any) => {
   debugger
        linkList.splice(index,1);
        setLinkList([])
        setLinkList([...linkList]);
    }
    
    const linkChange = (e: React.ChangeEvent<HTMLInputElement>,index:any)=>{
        linkList[index].link = e.target.value;
        setLinkList([...linkList])
    }

    console.log(linkList);

    const add = () => {
        setLinkList(linkList.concat({ link: '' }));
    }

    const dispatch = useAppDispatch();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let files = e.target.files;
        if (!files) return;
        files.length > 0 && setUrl(URL.createObjectURL(files[0]));
        console.log(files.length);
    };

    const onFiles = () => {
        let state = document.getElementById("files").style.display;

        if (state === "none") {
            document.getElementById("list").style.display = "none";
            document.getElementById("files").style.display = "flex";
        } else {
            document.getElementById("list").style.display = "flex";
            document.getElementById("files").style.display = "none";
        }
    };

    const onWebsite = () => {
        let state = document.getElementById("website").style.display;

        if (state === "none") {
            document.getElementById("list").style.display = "none";
            document.getElementById("website").style.display = "flex";
        } else {
            document.getElementById("list").style.display = "flex";
            document.getElementById("website").style.display = "none";
        }
    };

    const onText = () => {
        let state = document.getElementById("text").style.display;

        if (state === "none") {
            document.getElementById("list").style.display = "none";
            document.getElementById("text").style.display = "flex";
        } else {
            document.getElementById("list").style.display = "flex";
            document.getElementById("text").style.display = "none";
        }
    };

    const create_bot = () => {
        console.log("AAA");

        const sendData = {
            name: "Bill",
            characters_number: 2200,
        };

        dispatch(create_botSetting(sendData));
    };

    return (
        <Fragment>
            <Head>
                <title>Setting</title>
            </Head>
            <section id="rechatbotPage">
                <div className="widget">
                    <Title title="Replace Data" />
                    <div id="main">
                        <div id="list">
                            <span className="title">Data source</span>
                            <button className="btn" onClick={onFiles}>
                                Files
                            </button>
                            <button className="btn" onClick={onText}>
                                Text
                            </button>
                            <button className="btn" onClick={onWebsite}>
                                Website
                            </button>
                        </div>
                        <div id="files" style={{ display: "none" }}>
                            <div className="back">
                                <button className="back-btn" onClick={onFiles}>
                                    <Image
                                        className="back-btn-img"
                                        src={BackIcon}
                                        alt="back"
                                        title="back"
                                    />
                                    <span className="back-btn-txt">Back</span>
                                </button>
                            </div>
                            <div className="file-widget">
                                <div>
                                    {url ? (
                                        <div
                                            style={{
                                                margin: "auto",
                                                width: 244,
                                            }}
                                        >
                                            <Document file={url}>
                                                <Page
                                                    pageNumber={1}
                                                    scale={0.4}
                                                    renderTextLayer={false}
                                                    renderAnnotationLayer={false}
                                                />
                                            </Document>
                                        </div>
                                    ) : (
                                        <div
                                            style={{
                                                alignItems: "center",
                                                border: "2px dashed rgba(0, 0, 0, .3)",
                                                display: "flex",
                                                height: 150,
                                                justifyContent: "center",
                                                width: 244,
                                                margin: "auto",
                                            }}
                                        >
                                            Preview area
                                        </div>
                                    )}
                                </div>
                                <br />
                                <span className="upload-txt">Upload Files</span>
                                <br />
                                <span className="attach-txt">
                                    Attach a file to see how many characters are in it
                                </span>
                                <br />
                                <input
                                    type="file"
                                    id="myPdf"
                                    accept=".pdf"
                                    onChange={onChange}
                                />
                                <br />
                                <span className="attach-txt">
                                    NOTE: Uploading a PDF using safari doesn't work, we're
                                    looking into the issue.Make sure the text is OCR'd, i.e. you
                                    can copy it.
                                </span>

                                <button className="btn" onClick={create_bot}>
                                    Retrain Chatbot
                                </button>
                            </div>
                        </div>
                        <div id="text" style={{ display: "none" }}>
                            <div className="back">
                                <button className="back-btn" onClick={onText}>
                                    <Image
                                        className="back-btn-img"
                                        src={BackIcon}
                                        alt="back"
                                        title="back"
                                    />
                                    <span className="back-btn-txt">Back</span>
                                </button>
                            </div>
                            <input className="title" placeholder="Chatbot Name" />
                            <textarea className="data" placeholder="Data" />
                            <button className="btn" onClick={create_bot}>
                                Retrain Chatbot
                            </button>
                        </div>
                        <div id="website" style={{ display: "none" }}>
                            <div className="back">
                                <button className="back-btn" onClick={onWebsite}>
                                    <Image
                                        className="back-btn-img"
                                        src={BackIcon}
                                        alt="back"
                                        title="back"
                                    />
                                    <span className="back-btn-txt">Back</span>
                                </button>
                            </div>
                            <span className="header-description">
                                Max crawl/scrape time is 45 seconds (limit will increase soon)
                            </span>
                            <div className="element">
                                <span className="title">Crawl</span>
                                <div className="input-form">
                                    <input
                                        className="input"
                                        placeholder="https://www.example.com"
                                    />
                                    <button className="btn">Fetch Links</button>
                                </div>
                                <span className="description">
                                    This will crawl all the links starting with the URL (not
                                    including files on the website). Has to be server side
                                    rendered website
                                </span>
                            </div>
                            <div className="or">
                                <hr className="or-hr" />
                                <span className="or-text">OR</span>
                                <hr className="or-hr" />
                            </div>
                            <div className="element">
                                <span className="title">Submit Sitemap</span>
                                <div className="input-form">
                                    <input
                                        className="input"
                                        placeholder="https://www.example.com/sitemap.xml"
                                    />
                                    <button className="btn">Load Sitemap</button>
                                </div>
                            </div>
                            <div className="element">
                                <span className="title">Links to include</span>
                                <div className="sbtn-widget">
                                    {
                                        linkList.length != 0 ?
                                            (<button className="del-all" onClick={deleteAll}>Delete all</button>)
                                            :
                                            (<div />)
                                    }
                                </div>
                                {
                                    linkList.map((link, index) => {
                                        debugger
                                       return  <div key={index} className="link-form">
                                            <input className="link-input" value={link.link} onChange={(e)=>{
                                                linkChange(e,index)
                                            }} placeholder="https://www.example.com/privacy-policy" />
                                            <IconButton type="submit" style={{ marginLeft: 4 }} onClick={() => deleteOne(index)}>
                                                <DeleteIcon className="link-delete" />
                                            </IconButton>
                                        </div>
})
                                }
                                <div className="sbtn-widget">
                                    <button className="sbtn" onClick={add}>Add</button>
                                </div>
                            </div>
                            <hr />
                            <button className="bbtn">
                                Retrain Chatbot
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default ReChatbot;
