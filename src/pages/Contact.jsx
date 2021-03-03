import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import LinkItem from '../components/LinkItem';

const links = [
  {
    icon: './static/facebook.svg',
    title: '페이스북 페이지',
    link: <A href = 'fb.com/implude'> fb.com/implude </A>,
  },
  {
    icon: './static/messenger.svg',
    title: '페이스북 메신저',
    link: <A href = 'm.me/implude'> m.me/implude </A>,
  },
  {
    icon: './static/kakaotalk.svg',
    title: '카카오톡 1:1 오픈채팅',
    link: <A href = 'open.kakao.com/o/sdNUzv0c'> open.kakao.com/o/sdNUzv0c </A>,
  },
  {
    icon: './static/instagram.svg',
    title: '인스타그램',
    link: <A href = 'instagram.com/dimigoimplude'> instagram.com/dimigoimplude </A>,
  },
];

const ContactPage = () => {
  useEffect(autoHeightTextArea);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('emailName').value;
    const title = document.getElementById('emailTitle').value;
    const content = document.getElementById('emailContent').value;
    const body = `이름 : ${name}\n\n내용\n${content}`;
    window.open(`mailto:dimigoimplude@gmail.com?subject=${title}&body=${body.replaceAll('\n', '%0A')}`, '_self');
  };
  return (
    <>
      <NavBar />
      <Title>Contact</Title>
      <ContentWrapper>
        <Links>
          {links.map((data) => (
            <LinkItem itemData={data} />
          ))}
        </Links>
        <EmailForm onSubmit={handleEmailSubmit}>
          <EmailTitle>이메일</EmailTitle>
          <TextInput id="emailName" type="text" placeholder="이름" />
          <TextInput id="emailTitle" type="text" placeholder="제목" />
          <TextInputArea id="emailContent" rows="1" type="text" placeholder="내용" />
          <SubmitButton value="전송" />
        </EmailForm>
      </ContentWrapper>
    </>
  );
};

const autoHeightTextArea = () => {
  const tx = document.getElementsByTagName('textarea');
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute('style', 'height:' + tx[i].scrollHeight + 'px;overflow-y:hidden;');
    tx[i].addEventListener('input', onInput, false);
  }

  function onInput() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  }
};

const Title = styled.p`
  font-size: 3rem;
  font-weight: 900;
  margin: calc(var(--nav-height) + 5rem) 0 0;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: 5rem 0;
  justify-content: space-evenly;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmailForm = styled.form`
  width: 20rem;
  box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.13);
  padding: 1.5rem;
`;

const EmailTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
`;

const TextInput = styled.input.attrs({ type: 'text' })`
  width: 100%;
  box-sizing: border-box;
  display: block;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.3rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #d0d0d0;
  transition: border 0.1s;
  &:focus {
    border-bottom: 1px solid var(--primary-color);
  }
`;

const TextInputArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  display: block;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.3rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #d0d0d0;
  transition: border 0.1s;
  resize: none;

  &:focus {
    border-bottom: 1px solid var(--primary-color);
  }
`;

const SubmitButton = styled.input.attrs({ type: 'submit' })`
  width: 100%;
  height: 2.5rem;
  margin-top: 1.5rem;
  border: none;
  outline: none;
  color: white;
  font-size: 1rem;
  background-color: var(--primary-color);
  box-shadow: 0 3px 9px 0 rgba(55, 108, 230, 0.5);
  transition: box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 5px 0 rgba(55, 108, 230, 0.5);
  }

  &:active {
    box-shadow: 0 1px 5px 0 rgba(55, 108, 230, 0.3);
  }
`;

export default ContactPage;
