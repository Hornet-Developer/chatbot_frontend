import Head from "next/head";
import { Fragment } from "react"
import Title from "./Title";

import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

const Share = () => {
    return (
        <Fragment>
            <Head>Share Chatbot</Head>
            <section id="share">
                <div className="widget">
                    <Title title="Share Chatbot" />
                    <div className="element">
                        <span className="topic">Change chatbot visibility</span>
                        <span className="title">By continuing your chatbot will become public</span>
                        <div className="main">
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                label=""
                                style={{margin: 'auto'}}
                            />
                            <span className="description"><b>Require login for someone to use your chatbot</b> (If you don't require login, the messages they send will count for your account)</span>
                        </div>
                        <div className="btn-form">
                            <button className="full-btn">Save changes</button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Share;