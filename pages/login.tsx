import Image from "next/image";
import GoogleIcon from "@/assets/imges/google.png";
import Input from "@/components/Input";
import { Fragment, useState } from "react";
import inputFields from "@/_mock/login";
import Head from "next/head";
import Main from "@/components/layout/Main";

type Inputs = {
    email: string,
    password: string,
};

const Login = () => {
    const [inputs, setInputs] = useState<Inputs>(
        {
            email: "",
            password: "",
        },
    );

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(prev => ({ ...prev, [name]: value }));
    }

    return (
        <Main>
            <Fragment>
                <Head>
                    <title>Login</title>
                </Head>
                <section id="loginPage">
                    <div className="login-main-box">
                        <div className="container">
                            <div className="log-google">
                                <div className="flex">
                                    <div className="login">
                                        <div className="login-title">
                                            <h4>Login</h4>
                                        </div>
                                        <form action="#">
                                            <div className="form">
                                                {inputFields.map((field, index) => (
                                                    <Input
                                                        key={index}
                                                        value={inputs[field.name as keyof Inputs]}
                                                        onChange={handleChange}
                                                        {...field}
                                                    />
                                                ))}

                                                <span>
                                                    <a href="#">Forgot password?</a>
                                                </span>
                                            </div>
                                        </form>
                                        <div className="login-google">
                                            <div className="Login-btn">
                                                <a href="#">Login</a>
                                            </div>
                                            <span>Don&apos;t have an account <a href="#">Sign Up?</a></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="google-btn">
                                    <span>--- OR ---</span>
                                    <a href="#"><Image src={GoogleIcon} alt="google" title="google" /> Sign In with
                                        Google</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        </Main>
    )
}

export default Login;
