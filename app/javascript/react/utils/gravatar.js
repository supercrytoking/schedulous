import md5 from "blueimp-md5";

export default function gravatar(email) {
  return `//gravatar.com/avatar/${md5(email)}?s=300&d=robohash&r=g"`;
}
