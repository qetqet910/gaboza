import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faMoon } from "@fortawesome/free-solid-svg-icons";

const Box = styled.section`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5% 30% 65%;
    width: 300px;
    height: 500px;
    padding: 10px 10px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 6px 6px 12px #dcdde1;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    .icon{
        font-size: 1.6rem;
        color: #192a56;
    }
`

const DarkLight = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: transparent;
`

const Center = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    border-bottom: 1px solid #192a5620;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

const TinyN = styled.span`
    font-size: 1.2rem;
    color: #ced6e0;
`

const BigN = styled.span`
    font-size: 2.2rem;
    color: black;
    margin-bottom: 20px;
`

const Bottom = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 5fr);
    border-top: 1px solid #192a5620;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-top: 10px;
`

function Calculator() {
    // const [Test, TestIn] = useState();
    return (
        <>
            <Box>
                <Top>
                    <FontAwesomeIcon className="icon" icon={faAlignLeft} />
                    <DarkLight>
                        <FontAwesomeIcon className="icon" icon={faMoon} />
                    </DarkLight>
                </Top>
                <Center>
                    <TinyN>60 + 20 + 30 + 50</TinyN>
                    <BigN>160</BigN>
                </Center>
                <Bottom></Bottom>
            </Box>
        </>
    )
}

export default Calculator;