import Head from "next/head";
import { Fragment } from "react"
import Title from "./Title";

const Embed = () => {
    return (
        <Fragment>
            <Head>Embed on Website</Head>
            <section id="embed">
                <div className="widget">
                    <Title title="Embed on Website" />
                    <div className="element">
                        <span className="topic">Change chatbot visibility</span>
                        <span className="title">Visibilty</span>
                        <select className="chatbot-select" defaultValue={0}>
                            <option value="private_but_can_be_embedded">Private but can be embedded on website</option>
                            <option value="public">public</option>
                        </select>
                        <span className="description">'Private but can be embedded on website' means other people can't access your chatbot if they have the link, but visitors on your website can access it.</span>
                        <div className="btn-form">
                            <button className="full-btn">Save changes</button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Embed;