import React from "react";
import GlobalStyles from "../css/GlobalStyle";
import { createWord } from "../redux/modules/save";
import { useDispatch, useSelector } from "react-redux";
import {
  AddMidBox,
  AddSmallWrap,
  BigWrap,
  Dic,
  Example,
  InputBox,
  SmallTitle,
  SqBtn,
  Text,
  Title,
} from "../AllStyle.js";

function Add() {
  const new_word = React.useRef(null);
  const new_text = React.useRef(null);
  const new_example = React.useRef(null);

  const dispatch = useDispatch();
  const list = useSelector((state) => state.save.list);

  const addList = () => {
    dispatch(
      createWord({
        new_word: new_word.current.value,
        new_text: new_text.current.value,
        new_example: new_example.current.value,
      })
    );
  };

  console.log(new_word, new_text, new_example);

  return (
    <div>
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
          <SqBtn onClick={addList}>추가하기</SqBtn>
        </AddSmallWrap>
      </BigWrap>

      <Dic>
        <SmallTitle>단어</SmallTitle>
        <Text>{list.word}</Text>
        <SmallTitle>설명</SmallTitle>
        <Text>{list.text}</Text>
        <SmallTitle>예시</SmallTitle>
        <Example>{list.example}</Example>
      </Dic>
    </div>
  );
}

export default Add;
