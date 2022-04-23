export default function breakdown(string) {
  let stringlength = string.length;
  let stringlist = [""];
  let wordindex = 0;

  for (let i = 0; i < stringlength; i++) {
    if (string.charAt(i) == " ") {
      wordindex++;
      stringlist[wordindex] = " ";
      continue;
    }
    stringlist[wordindex] += string.charAt(i);
  }

  return stringlist;
}