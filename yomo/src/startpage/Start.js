import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import style from '../App.css';

export default function Start() {
	return (
		<div>
			<Body>
				<Altbox>로그인을 먼저 진행해주세요</Altbox>
				<Altbox>게시판은 학교 인증 후에 사용 가능합니다 </Altbox>
			</Body>
		</div>
	);
}

// style

export const Body = styled.div`
	position: fixed;
	box-sizing: border-box;
	background-color: #fff9f1;
	height: 1042px;
	width: 100%;
`;

export const Altbox = styled.div`
	box-sizing: border-box;
	display: block;
	background-color: #ffc3c3;
	height: 190px;
	width: 1156px;
	border-radius: 0px;
	text-align: center;
	font-size: 30px;
	margin: auto;
	margin-top: 100px;
	padding: 70px;
`;

// const
