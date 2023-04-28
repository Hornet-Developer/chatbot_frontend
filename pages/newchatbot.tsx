import Custom from "@/components/layout/Custom";
import Head from "next/head";
import React, { Fragment, useState, useEffect } from "react";
import Backbtn from "@/components/backbtn";
import Main from "@/components/layout/Main";
import Image from "next/image";
import BackIcon from "@/assets/imges/back.png";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { create_botSetting } from "@/redux/reducer/settingReducer";
import { uploadPdfs } from "../redux/actions/fileActions";
import { send } from "process";

const NewChatbot = () => {
  const [url, setUrl] = React.useState("");
  const [text, setText] = React.useState("");
  const [length, setLength] = React.useState();
  const [pdfCollection, setPdfCollection] = useState("");

  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;
    if (!files) return;
    files.length > 0 && setUrl(URL.createObjectURL(files[0]));
    console.log(files.length);
    setPdfCollection(files);
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

  const create_bot = (emebedding_type: any) => {
    var formData = new FormData();
    let mail = localStorage.getItem("google_mail");
    formData.append("mail", mail);
    formData.append("embedding_type", emebedding_type);

    if (emebedding_type == 0) {
      for (const key of Object.keys(pdfCollection)) {
        formData.append("pdfCollection", pdfCollection[key]);
      }
    } else if (emebedding_type == 1) {
      let chatbot_name = document.getElementById("chatbot_name").value;
      let content = document.getElementById("chatbot_data").value;
      formData.append("content", content);
      formData.append("chatbot_name", chatbot_name);
    } else if (emebedding_type == 2) {
      formData.append("content", "Web Scraping");
    }
    dispatch(create_botSetting(formData));
    // uploadPdfs(formData).then((res) => {
    //   console.log(res.data);
    // });

    // const mail = localStorage.getItem("google_mail");

    // if (mail) {
    //   const sendData = {
    //     chatbot_name: "Bill",
    //     characters_number: 2200,
    //     mail: mail,
    //     embedding_type: data,
    //   };

    //   dispatch(create_botSetting(sendData));
    // } else {
    //   alert("Sign In ...");
    // }
  };

  return (
    <Main>
      <Fragment>
        <Head>
          <title>Create New Chatbot</title>
        </Head>
        <section id="newchatbotPage">
          <div className="widget">
            <div id="title">
              <span className="title">Create New Chatbot</span>
            </div>
            <hr />
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
                <div className="upload">
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
                  <form onSubmit={() => create_bot(0)}>
                    <input
                      type="file"
                      id="myPdf"
                      name="pdfConllection"
                      accept=".pdf"
                      onChange={onChange}
                      multiple
                    />
                    <br />
                    <span className="attach-txt">
                      NOTE: Uploading a PDF using safari doesn't work, we're
                      looking into the issue.Make sure the text is OCR'd, i.e.
                      you can copy it.
                    </span>
                    <button className="btn" type="submit">
                      Create Chatbot
                    </button>
                  </form>
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
                <input
                  className="title"
                  placeholder="Chatbot Name"
                  id="chatbot_name"
                />
                <textarea
                  className="data"
                  placeholder="Data"
                  id="chatbot_data"
                />
                <button className="btn" onClick={() => create_bot(1)}>
                  Create Chatbot
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
                    <button className="sbtn">Add</button>
                  </div>
                  <div className="input-form">
                    <input
                      className="input"
                      placeholder="https://www.example.com"
                    />
                    <button className="wbtn"> + Fetch More Links</button>
                  </div>
                  <button className="bbtn" onClick={() => create_bot(2)}>
                    Create Chatbot
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </Main>
  );
};

export default NewChatbot;
