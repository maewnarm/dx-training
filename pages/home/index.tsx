import { toast } from "react-toastify";

const showToast = () => {
    toast('Toast is shown !!')
}

const Home = () => {
    return (
        <>
            <h1>This page is home</h1>
            <button onClick={showToast}>Click to show Toast</button>
        </>
    )
}

export default Home;