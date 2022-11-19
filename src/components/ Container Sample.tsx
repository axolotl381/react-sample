const Container = (props: { title: string; children: React.ReactNode }) => {
  const { title, children } = props;
  return (
    <div style={{ background: "red" }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  );
};

const Parent = () => {
  return (
    <Container title="Hello">
      <p>背景を赤にする</p>
    </Container>
  );
};

export default Parent;
