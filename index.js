import rwClient from "./app.js";

const tweet = async () => {
  try{
    await rwClient.v2.tweet('hi this is timot')
  }
  catch(e){
    console.log(e);
  }
}

tweet()