 export const getFetchData = async (url,{ headers ,setProductsData}) => {
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