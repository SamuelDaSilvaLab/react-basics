const sayHello = () => {
    alert('Hello!');
}

const SayHello = () => {
    return (
        <button onClick={() => sayHello()}>Say Hello</button>
    );
}

export default SayHello;
