import { irisGet, irisPost } from "../api"
import { useState } from "react"

const Iris = () => {
    const [inputs, setInputs] = useState({})
    const {sl, sw, pl, pw} = inputs;

    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target 
        setInputs({...inputs, [name]: value})
    }

    const onClick = e => {
        e.preventDefault()
        const Request = {sl, sw, pl, pw}
        alert(`입력하신 정보는 \n ${JSON.stringify(Request)} \n 이 맞습니까?`)
        irisPost(Request)
        .then((res) => {
            console.log(`response is ${res.config.data}`)
            localStorage.setItem('token', JSON.stringify(res.config.data))
        })
        .catch((err) => {
            console.log(err)
            alert('잘못된 접근입니다.')
        })
    }

    const getClick = e => {
        e.preventDefault()
        alert(`작업 요청`)
        irisGet(Request)
    }
    
    return (
    <body>
        <h2>아이리스 속성 값 입력</h2>
        <button onClick={getClick}>작업 요청</button><br/><br/>
        <input type="text" name="sl" placeholder="꽃받침 길이" onChange={onChange}></input><br/>
        <input type="text" name="sw" placeholder="꽃받침 넓이" onChange={onChange}></input><br/>
        <input type="text" name="pl" placeholder="꽃잎 길이" onChange={onChange}></input><br/>
        <input type="text" name="pw" placeholder="꽃잎 넓이" onChange={onChange}></input>
        <button onClick={onClick}>입력</button>

    </body>
    )
}
export default Iris