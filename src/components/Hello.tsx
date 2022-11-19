const hello: React.FC = () => {
  const onClick = () => {
    alert("Hello");
  };
  const text = "https://www.webcreatorbox.com/tech/react-analogue-clock";

  return <div onClick={onClick}>{text}</div>;
};

export default hello;
