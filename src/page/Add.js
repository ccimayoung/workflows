import React, { useCallback } from "react";
import GlobalStyles from "../css/GlobalStyle";
import { createWord } from "../redux/modules/save";
import { useDispatch, useSelector } from "react-redux";
import {
  AddMidBox,
  AddSmallWrap,
  BigWrap,
  InputBox,
  SmallTitle,
  SqBtn,
  Title,
} from "../AllStyle.js";
import { Link } from "react-router-dom";

function Add() {
  const new_word = React.useRef(null);
  const new_text = React.useRef(null);
  const new_example = React.useRef(null);

  const dispatch = useDispatch();

  const list = useSelector((state) => state.save.list);
  console.log(list);
  console.log(list);

  const addsList = useCallback((bb) => dispatch(createWord(bb)), [dispatch]);

  const addList = () => {
    const cc = {
      id: list[list.length - 1].id + 1,
      new_word: new_word.current.value,
      new_text: new_text.current.value,
      new_example: new_example.current.value,
    };
    addsList(cc);
  };

  console.log(new_word, new_text, new_example);

  return (
    <BigWrap>
      <GlobalStyles />
      <Title>단어 추가하기</Title>
      <AddSmallWrap>
        <AddMidBox>
          <SmallTitle>단어</SmallTitle>
          <InputBox
            ref={new_word}
            type="text"
            // value={word}
            placeholder="단어를 입력해주세요"
            // onChange={onChangeInput}
          />
        </AddMidBox>
        <AddMidBox>
          <SmallTitle>설명</SmallTitle>
          <InputBox
            ref={new_text}
            type="text"
            // value={text}
            placeholder="설명을 입력해주세요"
            // onChange={onChangeInput}
          />
        </AddMidBox>
        <AddMidBox>
          <SmallTitle>예시</SmallTitle>
          <InputBox
            ref={new_example}
            type="text"
            // value={example}
            placeholder="예시를 입력해주세요"
            // onChange={onChangeInput}
          />
        </AddMidBox>
        <Link to="/mydic">
          <SqBtn onClick={addList}>추가하기</SqBtn>
        </Link>
      </AddSmallWrap>
    </BigWrap>
  );
}

export default Add;
