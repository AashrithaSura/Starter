function getUser(){
  return new Promise((resolve,reject)=>{
    setTimeout(() =>{
      resolve({ userId:1,name:'Aashritha'});
    },1000);
  });
}

function getOrders(userId){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(userId!==1){
        reject("User not found!");
      }else{
        resolve(['Order1','Order2']);
      }
    },1000);
  });
}

async function showUserData(){
  try {
    const user = await getUser();
    const [userData,orders] = await Promise.all([
      Promise.resolve(user),        
      getOrders(user.userId)        
    ]);

    console.log("User:", userData);
    console.log("Orders:", orders);
  }catch (error){
    console.error("Something went wrong:", error);
    throw new Error("Failed to fetch user data or orders.");
  }
}

showUserData();
