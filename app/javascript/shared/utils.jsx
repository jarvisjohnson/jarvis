const makeList = (m, i) => <li key={i}>{m}</li>

const mapTo = SomeComponent => (props, i) => 
  <SomeComponent key={i} {...props} />