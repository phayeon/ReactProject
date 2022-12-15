import { fashionPost } from "../api"
import { useState } from "react"

const Fashion = () => {
    const [inputs, setInputs] = useState({})
    const {testNum} = inputs;

    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target 
        setInputs({...inputs, [name]: value})
    }

    const onClick = e => {
        e.preventDefault()
        const Request = {testNum}
        alert(`입력하신 정보는 \n ${JSON.stringify(Request)} \n 이 맞습니까?`)
        fashionPost(Request)
        .then((res) => {
            console.log(`response is ${res.data.result}`)
            localStorage.setItem('token', JSON.stringify(res.data.result))
        })
        .catch((err) => {
            console.log(err)
            alert('잘못된 접근입니다.')
        })
    }
    
    return (
    <body>
        <h2>패션 정수 입력</h2>
        <input type="number" name="testNum" placeholder="모델 숫자 입력" onChange={onChange}></input>
        <button onClick={onClick}>입력</button>
    </body>
    )
}
export default Fashion