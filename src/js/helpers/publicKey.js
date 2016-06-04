const publicKey = () => {
  if(window.__webpack_env === "production") {
    return "33c638d9ddd88eac2fdc";
  } else {
    return "93de78d30efb124b8e58";
  }
  
}

export default publicKey;
