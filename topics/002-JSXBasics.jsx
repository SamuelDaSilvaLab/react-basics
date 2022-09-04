const sayMyName = (name) => {
  return name;
};

const user = {
  name: "Samuel",
  age: 22,
  email: "samuel@com.br"
};

export default function JSXBasics() {
  return (
    <>
      <p>{2 + 2}</p>
      <p>{sayMyName("Samuel")}</p>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.email}</p>
    </>
  );
}
