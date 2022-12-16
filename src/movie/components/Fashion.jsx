import { fashionPost, fashionGet } from "../api"
import { useState } from "react"

const Fashion = () => {
    const [inputs, setInputs] = useState({})
    const {test_num} = inputs
    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target 
        setInputs({...inputs, [name]: value})
    }

    const postClick = e => {
        e.preventDefault()
        alert(`입력하신 정보는 \n ${JSON.stringify(test_num)} \n 이 맞습니까?`)
        fashionPost(test_num)
        .then((res) => {
            alert(`옷의 카테고리 : ${JSON.stringify(res.data.result)}`)
        })
        .catch((err) => {
            console.log(err)
            alert('잘못된 접근입니다.')
        })
    }

    const getClick = e => {
        e.preventDefault()
        alert(`입력하신 정보는 \n ${JSON.stringify(test_num)} \n 이 맞습니까?`)
        fashionGet(test_num)
        .then((res)=>{
            alert(`옷의 카테고리 : ${JSON.stringify(res.data.result)}`)
        })
        .catch((err) => {
            console.log(err)
            alert('잘못된 접근입니다.')
        })
    }
    
    return (
    <body>
        <h2>패션 정수 입력</h2>
        <input type="text" name="test_num" placeholder="모델 숫자 입력" onChange={onChange}></input>
        <form method="post">
        <button onClick={postClick}>postClick</button><br/>
        </form>
        <form method="get">
        <button onClick={getClick}>getClick</button>
        </form>
    </body>
    )
}
export default Fashion