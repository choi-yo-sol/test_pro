import "./Join.css";
import {
  Form,
  Input,
  Label,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

function Join() {
  // 뒤로가기
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // django 연결
  const [id, setId] = useState(""); // 아이디
  const [password, setPassword] = useState(""); // 비밀번호
  const [passwordCheck, setPasswordCheck] = useState(""); // 비밀번호 체크
  const [email, setEmail] = useState('') //이메일

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: id,
      password: password,
      password2: passwordCheck,
      email: email,
    };

     // 유효성 검사
    if(password !== passwordCheck) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다')
        return false
      }

    axios
      .post("http://127.0.0.1:8000/users/register/", user)
      
      .then((res) => {
        if (res.data.key) {
          localStorage.clear();
          localStorage.setItem("token", res.data.key);
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          // window.location.replace("/");
          document.location.href = "/";
        } else {
          setId("");
          setPassword("");
          setPasswordCheck("");
          setEmail('');
          localStorage.clear();
        }
      })
      .catch((err) => {
        console.clear();
        alert("아이디 혹은 비밀번호가 일치하지 않습니다");
      });
  };

  return (
    <div className="join-div">
      <div className="form-div1">
        <h5>회원가입</h5>
        <hr />
        <Form onSubmit={onSubmit}>
          {/* <p className="name-error">이름은 필수 입력 요소입니다.</p> */}
          <Label className="join-label">아이디</Label>
          <Input
            className="join-id"
            type="string"
            value={id}
            onChange={onChangeId}
          />
          <Label className="join-label">비밀번호</Label>
          <Input
            className="join-pw"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
          <Label className="join-label">비밀번호 확인</Label>
          <Input
            className="join-pwcheck"
            type="password"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />
          <Label className="join-label">이메일</Label>
          <Input
            className="join-pwcheck"
            type="string"
            value={email}
            onChange={onChangeEmail}
          />
          {/* <Label className="join-label">
                    좋아하는 메뉴
                    </Label>
                    <div className="like-menu">
                        <Input className="like1" type="string"/>
                        <Input className="like2" type="string"/>
                        <Input className="like3" type="string"/>
                    </div> */}
          {/* 가입 버튼 */}
          <Button className="join-btn" >회원가입</Button>
          <Button className="back-btn" onClick={goBack}>
            가입취소
          </Button>
        </Form>
      </div>
      
    </div>
  );
}

export default Join;