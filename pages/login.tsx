import { useEffect } from "react";
// import { gapi } from "gapi-script";
import Image from "next/image";
import GoogleIcon from "@/assets/imges/google.png";
import MicrosoftIcon from "@/assets/imges/microsoft.png";
import { Icon } from "semantic-ui-react";
import Input from "@/components/Input";
import { Fragment, useState } from "react";
import inputFields from "@/_mock/login";
import Head from "next/head";
import Main from "@/components/layout/Main";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import MicrosoftLogin from "react-microsoft-login";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const [inputs, setInputs] = useState<Inputs>({
    email: "",
    password: "",
  });
  const [accessToken, setAccessToken] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [optionsVisibity, setOptionsVisibility] = useState(true);

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const start = () => {
    gapi.client.init({
      clientId:
        "1037111719801-57leuusf3igree0os4oaa7iu2qf8uocs.apps.googleusercontent.com",
      scope: "email",
    });
  };
  useEffect(() => {
    gapi.load("client:auth2", start);
  }, []);

  const authSuccessful = (response: any) => {
    setAccessToken(response.accessToken);
    setOptionsVisibility(false);
  };

  const authHandler = (err: any, data: any) => {
    setAccessToken(data.authResponseWithAccessToken.accessToken);
    setOptionsVisibility(false);
    setAuthorized(true);
  };

  const onFailure = (error: any) => {
    console.log(error);
  };

  const responseGoogle = (response: any) => {
    console.log(response.profileObj.name);
    console.log(response.profileObj.email);

    localStorage.setItem("google_mail", response.profileObj.email);
  };

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
                    </div>
                  </div>
                </div>

                <div className="oauth-btn">
                  <span>--- OR ---</span>

                  <div className="oauth-element">
                    <GoogleLogin
                      clientId="1037111719801-57leuusf3igree0os4oaa7iu2qf8uocs.apps.googleusercontent.com"
                      buttonText="Sign in with Google"
                      scope="profile"
                      onFailure={onFailure}
                      cookiePolicy={"single_host_origin"}
                      onSuccess={responseGoogle}
                      isSignedIn={true}
                      className="oauth-google-element"
                    />
                  </div>

                  <div className="oauth-element">
                    <MicrosoftLogin
                      clientId={"baa3b947-094b-490f-91c6-318f2eabf0fe"}
                      authCallback={authHandler}
                      graphScopes={["user.read", "Files.Read.All"]}
                      children={undefined}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </Main>
  );
};

export default Login;
