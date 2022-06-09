import styled from "styled-components";
import GlobalStyles from "../css/GlobalStyle";
import { createWord } from "../redux/modules/save";
import React, { useEffect, useCallback } from "react";
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
} from "../AllStyle.js";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import axios from "axios";

function Mydic() {
  const list = useSelector((state) => state.save.list);
  console.log(list);

  const dispatch = useDispatch();

  const addList = useCallback((bb) => dispatch(createWord(bb)), [dispatch]);

  const callList = async () => {
    const newlist = await axios.get("http://localhost:3000/db.json");

    return newlist.data;
  };

  useEffect(() => {
    if (list.length === 0) {
      callList().then((dd) => {
        dd.map((value) => {
          return addList(value);
        });
      });
    }
  }, [addList, list]);

  return (
    <AW>
      <BigWrap>
        <GlobalStyles />
        <Title>내 단어장</Title>

        <DicSmallWrap>
          {list.map((list, index) => {
            return (
              <Dic key={index}>
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

        <Link to="/add">
          <Addbtn size="80" />
        </Link>
      </BigWrap>
    </AW>
  );
}
export default Mydic;

const Addbtn = styled(IoIosAddCircle)`
  color: darkgreen;
  font-size: 80px;
  position: relative;
  margin: 20px 0 20px 500px;
`;
