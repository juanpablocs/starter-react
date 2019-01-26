import React from 'react';
import { Counter } from './../../components/Counter';
import { Link } from "react-router-dom";
import { Wrapper } from './styled';

export const Home = ()=> (
    <Wrapper>
        <h1>Hello React</h1>
        <Link to='/page'>Link Page</Link>
        <Counter />
    </Wrapper>
);