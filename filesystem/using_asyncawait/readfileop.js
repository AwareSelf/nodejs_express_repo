const fs = require("node:fs/promises");
async function readMyFile() {

  /* either you can handle using try-catch here or you can 
    simply write code here and deal with exception in it's caller function */
  
 //   try{
      const data = await fs.readFile("./readme.txt","utf-8");
      console.log(data);
      return data;
  /*  }
    catch(err)
    {
      console.log(err);
    } */
}
module.exports = readMyFile;