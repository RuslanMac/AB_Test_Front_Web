class CommonApiService {
   getUsers() {
   return  fetch('https://localhost:44375/api/User/Get').then((res) => res.json());
  }
  getData() {
    return fetch('https://localhost:44375/api/User/GetData').then((res) => res.json());
  }

  getRRMetric() {
    return fetch('https://localhost:44375/api/User/GetMetrics').then((res) => res.json());
  }

   updateUser(items) {
    fetch('https://localhost:44375/api/User/Save', {
    
      method: 'post',
      body: JSON.stringify(items),
      headers: { 'Content-type': 'application/json',
                  'Accept': 'application-json',
                },
           
               
    });
  }
}

export default new CommonApiService();
