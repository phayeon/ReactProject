import { strokeCheck } from "../api"

const Stroke = () => {

    const onClick = e => {
        e.preventDefault()
        alert(`뇌졸중 체크 시작`)
        strokeCheck(Request)
    }

    return (
    <body>
        <h2>뇌졸중</h2>
        <button onClick={onClick}>시작</button>
    </body>
    )
}
export default Stroke