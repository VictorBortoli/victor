import styled from 'styled-components';
import {shade} from 'polished';

export const Title = styled.h1 `
font-size: 48px;
color: #3a3a3a;
font-weight: bold;
max-width: 450px;
line-weight: 56px;


margin-top: 80px;
`;

export const Form = styled.form `
margin-top: 40px;
max-width: 700px;

display: flex;

input {
flex: 1;
height:70px;
padding: 0 24px;

border: 0;
border-radius: 5px 0 0 5px;
color: #3a3a3a;


}

button{
    width: 210px;
    height: 70px;
    background: #04D361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;

    transition: bacground-color 0.2s;
    &:hover{
        background:${shade(0.2,"#04D361")};
    }
}
`;

export const Repositories = styled.div`
margin-top: 80px;
max-widht: 700px;


`;
