import publicKey from './publicKey';

// Build a URL in the format
// http://slackr-api.thefirehoseproject.com/:public_key/:path
const urlFor = (path) => {
  return "http://slackr-api.thefirehoseproject.com/" + publicKey() + path;
}

export default urlFor;
