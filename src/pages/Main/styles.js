import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
    width: 320px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 0 14px 0 rgba(0,0,0, 0.2);
    padding: 30px 20px;

    strong {
        font-size: 20px;
        text-align: center;
        color: #333;
        display: block;
    }

    form {
        margin-top: 30px;

        input {
            background: rgba(0, 0, 0, 0.1);
            font-size: 14px;
            width: 100%;
            height: 32px;
            border: 0;
            padding: 0 15px;
            border-radius: 4px;
            margin-bottom: 10px;
        }

        button {
            margin-top: 10px;
            width: 100%;
            height: 32px;
            font-size: 16px;
            border-radius: 4px;
            border: 0;
            background: #3b9eff;
            color: #fff;
            font-weight: bold;

            &:hover {
                background: ${darken(0.06, '#3b9eff')};
            }
        }
    }

    @media(max-width: 1000px){
        width: 100%;
    }
`;

export const Location = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
`;