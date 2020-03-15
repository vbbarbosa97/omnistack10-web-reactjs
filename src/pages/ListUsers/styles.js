import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    flex: 1;
    margin-left: 20px;

    @media(max-width: 1000px){
        margin-left: 0;
        margin-top: 30px;
    }
    @media(max-width: 650px){
        ul {
            grid-template-columns: 1fr;
        }
    }
`;

export const ListUser = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    list-style: none;

    li {
        background: #fff;
        border-radius: 4px;
        padding: 20px;
        box-shadow: 0 0 14px 0 rgba(0,0,0, 0.2);

        header {
            display: flex;
            flex-direction: row;
            align-items: center;

            img {
                width: 54px;
                height: 54px;
                border-radius: 50%;
            }

            div {
                margin-left : 10px;

                strong {
                    display: block;
                    font-size: 16px;
                    color: #333;
                }

                span {
                    font-size: 13px;
                    color: #999;
                    margin-top: 2px;
                }
            }
        }

        p {
            color: #666;
            font-size: 14px;
            line-height: 20px;
            margin: 10px 0; 
        }

        a {
            color: #3b9eff;
            font-size: 14px;
            text-decoration: none;

            &:hover {
                color: ${darken(0.06, '#3b9eff')};
            }
        }
    }
`;