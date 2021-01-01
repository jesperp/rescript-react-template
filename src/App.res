let elem = <div>{React.string("HI")}</div>

switch (ReactDOM.querySelector("#app")) {
  | Some(root) => ReactDOM.render(elem, root)
  | None => ()
}
