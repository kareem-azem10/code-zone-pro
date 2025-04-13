let Name = "kareem azem";
console.log(Name.split("").reverse().join(""));

const NameWithLoop = () => {
    let reversed = "";
    for (let i = Name.length - 1; i >= 0; i--) {
      reversed += Name[i];
    }
    console.log(reversed);
};
NameWithLoop(Name.split(""));