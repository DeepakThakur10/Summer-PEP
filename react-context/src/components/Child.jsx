import GrandChild from "./GrandChild";

function Child({ message }) {
  return <GrandChild message={message} />;
}

export default Child;