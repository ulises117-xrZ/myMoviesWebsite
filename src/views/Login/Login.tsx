import React, { useState, useEffect } from 'react';
import './styles/Login.scss';
import { FormComponent } from './components/FormComponent';

const Login = () => {

	return <div className='layout'>
		<div className='login'>
			<div className='login_left'>

			</div>
			<FormComponent />
		</div>
	</div >;
};

export default Login;
