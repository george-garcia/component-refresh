import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <Button primary rounded>Click me!!!</Button>
      <Button secondary outline>Buy now</Button>
      <Button warning outline>See deal</Button>
      <Button success>yay</Button>
      <Button danger rounded>are you sure?</Button>
      <div>ButtonPage</div>
    </div>
  );
}

export default ButtonPage;
