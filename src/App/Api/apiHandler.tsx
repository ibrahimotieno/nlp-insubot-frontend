export const makeGetRequest = async (apiUrl:string, headers?:any): Promise<any | string> => {
	try{
		const apiResponse = await fetch(apiUrl,
			{
				headers: {
					...headers,
				 }
			}	
		)
		const data = await apiResponse.json()
		return data
	}catch(error:any){
		if(error){
			return error.message;
		}
	}
} 

export const makePostRequest = async (apiUrl:string, body:any, headers?:any): Promise<any | string> => {
	try{
		const apiResponse = await fetch(
			apiUrl,
			{	
				method: 'POST', // *GET, POST, PUT, DELETE, etc.
			    headers: {
                   ...headers,
			      'Content-Type': 'application/json'
			    },
				body: JSON.stringify(body),
			}
		)
		const data = await apiResponse.json()
		return data
	}catch(error:any){ 
		if(error){
			return error.message;
		}
	}
} 