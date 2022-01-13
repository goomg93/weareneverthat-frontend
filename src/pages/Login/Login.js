import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Topnav from '../../components/Topnav/Topnav';
import Footer from '../../components/Footer/Footer';
import './Login.scss';
import { isVisible } from '@testing-library/user-event/dist/utils';

function Login() {
	const [emailValue, setEmailValue] = useState('');
	const [pwValue, setPwValue] = useState('');
	const [isVisibility, setIsVisibility] = useState(false);

	const handleEmailInput = e => {
		setEmailValue(e.target.value);
	};

	const handlePwInput = e => {
		setPwValue(e.target.value);
	};

	const navigate = useNavigate();

	const goToMain = () => {
		navigate('/');
	};

	const loginLogic = () => {
		fetch(`${process.env.REACT_APP_SERVER_HOST}/users/signin`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			mode: 'cors',
			body: JSON.stringify({
				email: emailValue,
				password: pwValue,
			}),
		})
			.then(res => res.json())
			.then(data => {
				if (data.message === 'KEY_ERROR') {
					setIsVisibility(true);
				} else {
					goToMain();
					sessionStorage.setItem('token', data.token);
				}
			});
	};

	return (
		<div className="login">
			<Topnav />
			<div className="Login">
				<div className="pageInfo">Account</div>
				<section className="loginWrapper">
					<form className="inputBox">
						<section className="emailInput">
							<div>이메일</div>
							<input
								type="text"
								placeholder="이메일"
								value={emailValue}
								onChange={handleEmailInput}
							></input>
						</section>
						<section className="passwordInput">
							<div>비밀번호</div>
							<input
								type="password"
								placeholder="비밀번호"
								value={pwValue}
								onChange={handlePwInput}
							></input>
						</section>
					</form>
					<section className="alert" style={{ visibility: isVisibility ? 'visible' : 'hidden' }}>
						<div>이메일 또는 비밀번호가 잘못되었습니다.</div>
					</section>
					<section className="loginBtn">
						<button onClick={loginLogic}>LOGIN</button>
					</section>
					<section>
						<p className="loginDescription">
							이메일, 비밀번호만 설정 후 회원가입 하시면 상품 결제, 주문 확인 및 배송 조회, 적립금
							혜택 <br /> 등 더욱 편리하게 스토어를 이용하실 수 있습니다.
						</p>
					</section>
					<section>
						<Link to="/users/signup">
							<p>회원가입 하기</p>
						</Link>
						<br />
						<a href="#">비밀번호 찾기</a>
					</section>
				</section>
			</div>
			<Footer />
		</div>
	);
}

export default Login;
