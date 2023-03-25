let array = [];


for (let i = 0; i < Infinity; i++) {
   let command = prompt();
   let commandArr = command.split(', ');
   let username = commandArr.pop();
   if (command == `add, ${username}`) {
    array.push(`${username}`);
    console.log(array);
   } else if (command == `del, ${username}`) {
    for(let key in array) {
        array[key] == `${username}` ? array.splice(key, 1) : '';
    }
    console.log(array);
   } else if (command == 'stop') {
    console.log(array);
    break;
   } 
}

