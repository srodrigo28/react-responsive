import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
`;

export const Logo = styled.div`
    margin-right: 2px;
    .menu {
        background-color: #1c1c1c;
        padding: 10px;
        transition: 0.5s;
        margin-top: 23px;
            
        &:hover{
            border-radius: 45%;
            background-color: #666;

            cursor: pointer;

            animation: entrada 5s;
        }
    }

    .menu2{
        background-color: #1c1c1c;
        color: #4bb4ca;
        padding: 10px;
        transition: 0.5s;
        font-size: 32px;
        margin-top: 23px;
        margin-left: -320px;
            
        &:hover{
            border-radius: 45%;
            color: #4bb4ca;
            background-color: #666;
            cursor: pointer;
            animation: entrada 5s;
        }

        @keyframes entrada{
            from {
                transform: scaleY(1);
                // opacity: 0;
            }
            to {
                transform: scaleY(1);
                // opacity: 0;
            }
        }        
    }
`;

export const Tittle = styled.h1`
    color: blue;
    width: 26%;
    padding: 10px;
    margin-top: 23px;
`;