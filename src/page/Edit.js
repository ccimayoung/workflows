import React from "react";
import GlobalStyles from "../css/GlobalStyle";
import { updateWord } from "../redux/modules/save";
import { useDispatch } from "react-redux";
import {
  AddMidBox,
  AddSmallWrap,
  BigWrap,
  InputBox,
  SmallTitle,
  SqBtn,
  Title,
} from "../AllStyle.js";
import { Link, useParams } from "react-router-dom";

function Add() {
  const edit_word = React.useRef(null);
  const edit_text = React.useRef(null);
  const edit_example = React.useRef(null);

  const dispatch = useDispatch();

  const params = useParams();
  console.log(params);

  const editList = () => {
    dispatch(
      updateWord({
        id: parseInt(params.id),
        new_word: edit_word.current.value,
        new_text: edit_text.current.value,
        new_example: edit_example.current.value,
      })
    );
  };

  return (
    <BigWrap>
      <GlobalStyles />
      <Title>단어 수정하기</Title>
      <AddSmallWrap>
        <AddMidBox>
          <SmallTitle>단어</SmallTitle>
          <InputBox
            ref={edit_word}
            type="text"
            // value={word}
            placeholder="단어를 입력해주세요"
            // onChange={onChangeInput}
          />
        </AddMidBox>
        <AddMidBox>
          <SmallTitle>설명</SmallTitle>
          <InputBox
            ref={edit_text}
            type="text"
            // value={text}
            placeholder="설명을 입력해주세요"
            // onChange={onChangeInput}
          />
        </AddMidBox>
        <AddMidBox>
          <SmallTitle>예시</SmallTitle>
          <InputBox
            ref={edit_example}
            type="text"
            // value={example}
            placeholder="예시를 입력해주세요"
            // onChange={onChangeInput}
          />
        </AddMidBox>
        <Link to="/">
          <SqBtn onClick={editList}>수정</SqBtn>
        </Link>
      </AddSmallWrap>
    </BigWrap>
  );
}

export default Add;
