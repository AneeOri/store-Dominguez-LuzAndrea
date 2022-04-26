 export const getFetchData = async ({ headers ,setProductsData},url) => {
	try {
		const result = await fetch(url, { headers });
		const products = await result.json();
		setProductsData(products);
	} catch (error) {
		console.log('error', error);
	}
};

export const getFetchUser = async ({ headers ,setUserData},url) => {
	try {
		const result = await fetch(url, { headers });
		const user = await result.json();
		setUserData(user);
	} catch (error) {
		console.log('error', error);
	}
};

export const getHistory = async ({headers,setHistoryData}, url) => {
	try{
		const result = await fetch(url, { headers });
		const history = await result.json();
		setHistoryData(history);
	}catch(error){
		console.log('error',error);
	}
}
export const postReedem = async ({id,headers},url) => {
   try{
      let raw = JSON.stringify({productId: id});
      
      const requestOptions ={
		method: 'POST',
		body: raw,
		headers: headers
	}

	     await fetch(url,requestOptions);
		 return true;

   }catch(error){
		console.log('error',error);
		return false;
	}
}

export const postPoints = async({amount,headers, userData, setUserData},url) => {
	try{
		let raw = JSON.stringify({amount: amount});

		const requestOptions ={
			method: 'POST',
			body: raw,
			headers: headers
		}

         const response =await fetch(url,requestOptions);
		 const newPoints = await response.json();

		 const newPointsUser = {...userData};
		 newPointsUser.points = newPoints['New Points'];
		 setUserData(newPointsUser);
	}catch(error){
		console.log('error',error);
	}
}