 export const getFetchData = async ({ headers ,setProductsData},url) => {
	try {
		const result = await fetch(url, { headers });
		const products = await result.json();
		setProductsData(products);
        console.log("data fetched:", products);
        //return list;
	} catch (error) {
		console.log('error', error);
	}
};

export const getFetchUser = async ({ headers ,setUserData},url) => {
	try {
		const result = await fetch(url, { headers });
		const user = await result.json();
		setUserData(user);
        console.log("data fetched:", user);
        //return list;
	} catch (error) {
		console.log('error', error);
	}
};

export const getHistory = async ({headers,setHistoryData}, url)=>{
	try{
		const result = await fetch(url, { headers });
		const history = await result.json();
		setHistoryData(history);
        console.log("data fetched:", history);
	}catch(error){
		console.log('error',error);
	}
}