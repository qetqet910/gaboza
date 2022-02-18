const express = require("express")
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");
})

const HiFunc = () => {
    console.log("서버가 실행되었습니다.");
}

app.listen(3000, HiFunc)