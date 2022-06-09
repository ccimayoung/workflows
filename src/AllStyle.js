import styled from "styled-components";

export const AW = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(230, 255, 230);
  display: flex;
`;

export const BigWrap = styled.div`
  width: 800px;
  height: 700px;

  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(225, 255, 198);
  border: 2px solid darkgreen;
`;

export const Title = styled.h1`
  margin-top: 0;
  font-size: 50px;
  text-align: left;
  width: 100%;
  color: white;
  background-color: #006400;
`;

export const AddSmallWrap = styled.form`
  width: 80%;
  margin: auto;
`;

export const AddMidBox = styled.div`
  height: 130px;
  margin: 20px 0;
  background-color: white;
`;

export const SmallTitle = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
  color: darkgreen;
  text-decoration: underline;
  margin-left: 10px;
`;

export const InputBox = styled.input`
  box-sizing: border-box;
  margin-left: 20px;
  width: 90%;
  height: 50px;
  border: 2px solid gray;
  border-radius: 5px;
`;

export const SqBtn = styled.button`
  height: 50px;
  width: 100%;
  margin-top: 30px;
  font-size: 25px;
  background-color: darkgreen;
  color: white;
  cursor: pointer;
`;

export const AddbtnBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 20px 0 20px 500px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DicSmallWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  column-gap: 5%;
  row-gap: 30px;
  padding: 0 20px;
  width: 80%;
  margin: auto;
`;

export const Dic = styled.div`
  box-sizing: border-box;
  width: 30%;
  gap: 200px;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
  background-color: white;
  text-align: left;
  border: 2px solid gray;
  border-radius: 5px;
`;

export const TrashbtnBox = styled.div`
  margin-left: 120px;
  width: 30px;
  height: 30px;
`;

export const Text = styled.p`
  font-size: 15px;
  margin-left: 10px;
  white-space: pre-line;
`;

export const Example = styled.p`
  font-size: 15px;
  margin-left: 10px;
  color: yellowgreen;
`;
