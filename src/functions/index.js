const GoTo = (pathname) => {
    let {history} = this.props;
    history.push({
      pathname,
      search: "?ok"
    })
}

  export default GoTo;