import styled from "styled-components";
import GlobalStyles from "../css/GlobalStyle";
import { createWord, removeWord } from "../redux/modules/save";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BigWrap,
  Dic,
  DicSmallWrap,
  Example,
  SmallTitle,
  Text,
  Title,
  AW,
  AddbtnBox,
  TrashbtnBox,
  EditbtnBox,
  BtnWrap,
} from "../AllStyle.js";
import { useNavigate } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";

function Mydic() {
  const list = useSelector((state) => state.save.list);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const callList = async () => {
    const newlist = await axios.get(
      // "http://localhost:3000//db.json"
      "http://ccimayoung.shop.s3-website.ap-northeast-2.amazonaws.com/db.json"
    );
    newlist.data.map((v) => {
      return dispatch(createWord(v));
    });
  };

  useEffect(() => {
    if (list.length === 0) {
      callList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AW>
      <BigWrap>
        <GlobalStyles />
        <Title>내 단어장</Title>

        <DicSmallWrap>
          {list.map((list, index) => {
            return (
              <Dic key={index}>
                <BtnWrap>
                  <TrashbtnBox>
                    <BsTrash
                      onClick={() => {
                        dispatch(removeWord(list.id));
                      }}
                      size="25"
                    ></BsTrash>
                  </TrashbtnBox>
                  <EditbtnBox
                    onClick={() => {
                      nav("/edit/" + parseInt(list.id));
                    }}
                  >
                    <AiOutlineEdit size="25"></AiOutlineEdit>
                  </EditbtnBox>
                </BtnWrap>
                <SmallTitle>단어</SmallTitle>
                <Text>{list.new_word}</Text>
                <SmallTitle>설명</SmallTitle>
                <Text>{list.new_text}</Text>
                <SmallTitle>예시</SmallTitle>
                <Example>{list.new_example}</Example>
              </Dic>
            );
          })}
        </DicSmallWrap>
        <AddbtnBox>
          <Addbtn
            onClick={() => {
              nav("/add");
            }}
            size="80"
          />
        </AddbtnBox>
      </BigWrap>
    </AW>
  );
}
export default Mydic;

const Addbtn = styled(IoIosAddCircle)`
  color: darkgreen;
  border-radius: 50%;
  cursor: pointer;
`;
