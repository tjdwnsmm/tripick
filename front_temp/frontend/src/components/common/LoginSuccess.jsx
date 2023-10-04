import React, { useEffect, useNavigate, useState } from 'react';
import * as utils from 'utils';
import * as api from 'api';
import { useGoogleLogin } from '@react-oauth/google';
import { create } from 'lodash';

const LoginSuccess = () => {
    const navigate = useNavigate();
    const [ memberId, setMemberId,] = useState('');
    const [ nickname, setNickname,] = useState('');
    const [ email, setEmail,] = useState('');
    const [ profileImage, setProfileImage,] = useState('');
    const [ createdAt, setCreatedAt,] = useState('');

    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get('code');
        if (code) {
            api.apis
                .createLoginRequest(code)
                .then(response => {
                    console.log(response);
                    // response를 state에 저장
                    setMemberId(response.memberId);
                    setNickname(response.nickname);
                    setEmail(response.email);
                    setProfileImage(response.profileImage);
                    setCreatedAt(response.createdAt);
                    
                    navigate(utils.URL.HOME.LANDING);
                })
                .catch(error => console.error(error));
        }
        
    }, []);
    return <div></div>;
};

export default LoginSuccess;
