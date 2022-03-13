import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faMoon, faBackspace, faDivide, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
        cursor: pointer;
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
    display: block;
    width: 100%;
    font-size: 1.4rem;
    color: gray;
    margin-bottom: 6px;
    text-align: right;
`

const BIG = styled.input`
    all: unset;
    text-align: right;
    width: 100%;
    font-size: 3rem;
    color: black;
    margin-bottom: 20px;
    font-weight: bold;
`

const Bottom = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 5fr);
    place-items: center;
    border-top: 1px solid #192a5620;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-top: 10px;
`

const Button = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 50px;
    max-height: 50px;
    min-width: 30px;
    min-height: 30px;
    width: 100%;
    height: 100%;
    padding: 2px;
    font-weight: bold;
    border-radius: 50%;
    cursor: pointer;
    border: none;
`

const SpeB1 = styled(Button)`
    color: black;
    background-color: white;
    font-size: 1.6rem;
`
const SpeB2 = styled(Button)`
    color: #079992;
    background-color: white;
    font-size: 2rem;
`
const SpeB3 = styled(Button)`
    color: #485460;
    background-color: white;
    font-size: 1.8rem;
`



function Calculator() {

    const [tiny, tinyA] = useState("");
    const [big, bigA] = useState("");

    if (big !== "" && big === "0") {
        bigA(cur => cur = "");
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            tinyA(cur => cur = "");
            bigA(cur => cur = "");
        }
    })

    function Calcul(Ele: any) {

        let InputV = Ele.target.innerText;

        const hihihi = (giho: string) => {
            if (big !== "") {
                if (tiny.includes(giho)) {
                    let localMinus: String;
                    switch (giho) {
                        case "-":
                            localMinus = String(parseInt(tiny.substring(0, tiny.indexOf(" "))) - parseInt(big))
                            tinyA(cur => cur = localMinus + " - ");
                            bigA(cur => cur = "");
                            break;
                        case "+":
                            localMinus = String(parseInt(tiny.substring(0, tiny.indexOf(" "))) + parseInt(big))
                            tinyA(cur => cur = localMinus + " + ");
                            bigA(cur => cur = "");
                            break;
                        case "%":
                            localMinus = String(parseInt(tiny.substring(0, tiny.indexOf(" "))) % parseInt(big))
                            tinyA(cur => cur = localMinus + " % ");
                            bigA(cur => cur = "");
                            break;
                        // case "=":
                        //     localMinus = String(parseInt(tiny.substring(0, tiny.indexOf(" "))) % parseInt(big))
                        //     tinyA(cur => cur = localMinus + " % ");
                        //     bigA(cur => cur = "");
                        //     break;
                    }
                } else {
                    tinyA(cur => cur = big + " " + giho + " ");
                    bigA(cur => cur = "");
                }
            } else {
                if (tiny === "") {
                    tinyA(cur => cur = "0 " + giho + " ");
                    bigA(cur => cur = "");
                }
            }
        }

        if (InputV !== undefined || null) {
            if (!isNaN(parseInt(InputV))) {
                if (big.length === 0 && InputV === "0") {
                } else {
                    bigA(cur => cur + InputV)
                }
            } else {
                switch (InputV) {
                    case "AC":
                        tinyA(cur => cur = "");
                        bigA(cur => cur = "");
                        break;
                    case "-":
                        hihihi("-");
                        break;
                    case "+":
                        hihihi("+");
                        break;
                    case "%":
                        hihihi("%");
                        break;
                }
            }
        } else {

        }
    }

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
                    <form className="FORMform">
                        <TinyN>{tiny}</TinyN>
                        <BIG defaultValue={big} placeholder="0"></BIG>
                    </form>
                </Center>
                <Bottom>

                    <SpeB1 onClick={Calcul}>AC</SpeB1>
                    <SpeB1 onClick={Calcul}>
                        <FontAwesomeIcon className="icon" icon={faBackspace} />
                    </SpeB1>
                    <SpeB2 onClick={Calcul}>%</SpeB2>
                    <SpeB2 onClick={Calcul}>
                        <FontAwesomeIcon className="icon" icon={faDivide} />
                    </SpeB2>
                    <SpeB3 onClick={Calcul}>7</SpeB3>
                    <SpeB3 onClick={Calcul}>8</SpeB3>
                    <SpeB3 onClick={Calcul}>9</SpeB3>
                    <SpeB2 onClick={Calcul}>
                        <FontAwesomeIcon className="icon" icon={faTimes} />
                    </SpeB2>
                    <SpeB3 onClick={Calcul}>4</SpeB3>
                    <SpeB3 onClick={Calcul}>5</SpeB3>
                    <SpeB3 onClick={Calcul}>6</SpeB3>
                    <SpeB2 onClick={Calcul}>-</SpeB2>
                    <SpeB3 onClick={Calcul}>1</SpeB3>
                    <SpeB3 onClick={Calcul}>2</SpeB3>
                    <SpeB3 onClick={Calcul}>3</SpeB3>
                    <SpeB2 onClick={Calcul}>+</SpeB2>
                    <SpeB3 onClick={Calcul}>±</SpeB3>
                    <SpeB3 onClick={Calcul}>0</SpeB3>
                    <SpeB3 onClick={Calcul}>.</SpeB3>
                    <SpeB2 onClick={Calcul}>=</SpeB2>
                </Bottom>
            </Box>
        </>
    )
}

export default Calculator;