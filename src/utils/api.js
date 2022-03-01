  export const getFetchData = async (url,{ headers ,list,setList}) => {
	try {
		const result = await fetch(url, { headers });
		const products = await result.json();
		setList(products);
        console.log("data fetched:", list);
        return list;
	} catch (error) {
		console.log('error', error);
	}
};