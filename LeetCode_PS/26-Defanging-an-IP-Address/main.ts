function defangIPaddr(address: string): string {
  let defanged: string = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      defanged += "[.]";
    } else {
      defanged += address[i];
    }
  }
  return defanged;
}

console.log(defangIPaddr("1.1.1.1")); // "1[.]1[.]1[.]1"

// Big-O = O(n) - Linear
