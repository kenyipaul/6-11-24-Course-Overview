/* eslint-disable react/prop-types */
import "./style.css";
import { useRef } from "react"

export default function App() {

    const age = 12;

    const users = [
        {
            id: 1,
            name: "John",
            age: 25,
        },
        {
            id: 2,
            name: "Billy",
            age: 51,
        },
        {
            id: 3,
            name: "James",
            age: 51,
        },
        {
            id: 4,
            name: "Jane",
            age: 35,
        }
    ]



    const emailRef = useRef(); // INITIALIZATION OF A REFERENCE CALLED emailRef
    
    const submit = () => {
        let email = emailRef.current.value;
        console.log(email)
    }

    return (
        <>
            {/* The ref={emailRef} attribute in the code below 
            links the input element to the initialized emailRef above */}
            <input ref={emailRef} type="email" name="email" id="email" />
            <button onClick={submit}>Click Me</button> {/* The onClick on this line is a jsx event targeting the submit function before the return statement above */}
            
            {/* THE CODE BELOW MAPS DATA FROM THE 
            ARRAY OF OBJECTS WE CREATED 👆 ABOVE WITH THE NAME users */}
            {
                users.map((data, index) => {
                    return <div key={index}>
                        <p>ID: {data.id}</p>
                        <h2>AGE: {data.age}</h2>
                        <h1>NAME: {data.name}</h1>
                    </div>
                })
            }


            {/* THIS CODEBLOCK BELOW IS AN EXAMPLE OF
            CONDITIONAL RENDERING BASED ON THE AGE VARIABLE AT THE 👆 TOP OF THE FILE */}
            
            {
                age < 12 ?
                <Card name="Card 2" img="/stewie.jpg" />
                : <Card name="Card 3" bg="#9900ff" img="/valorant_key_art_phoenix_and_jett_by_su_ke_ddrykj9.jpg" />

            }

            {/* THE LINES BELOW ARE CALLS TO THE CARD 
            COMPONENT CREATED BELOW  */}
            <Card name="Card 1" bg="#0f0" img="/macos-monterey-stock-pink-light-layers-5k-8k-7680x7680-5892.jpg" />
            <Card name="Card 2" img="/stewie.jpg" />
            <Card name="Card 3" bg="#9900ff" img="/valorant_key_art_phoenix_and_jett_by_su_ke_ddrykj9.jpg" />
        </>

    )
}

// The line below is an example of 
// a functional component with props

function Card(props) {
    return (
        <div className="card" style={{ backgroundColor: props.bg  }}>
            <div className="header">
                <h1>{props.title}</h1>
                <div style={{ backgroundImage: `url(${props.img})` }} className="image"></div>
                <Info /> {/* This line is a reference to the Info component down below  */}
            </div>
        </div>
    )
}

function Info() {
    return (
        <div className="info">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat ipsa optio atque tenetur delectus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat ipsa optio atque tenetur delectus.</p>
            <button>Click Me</button>
        </div>
    )
}