import Parent from './Parent';

function GrandParent() {
  const message = "Hello from GrandParent";

  return <Parent message={message} />;
}

export default GrandParent;