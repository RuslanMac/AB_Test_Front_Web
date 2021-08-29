class CommonApiService {
   getUsers() {
   return  fetch('https://studious-tape-324410.appspot.com/api/User/Get').then((res) => res.json());
  }
  getData() {
    return fetch('https://studious-tape-324410.appspot.com/api/User/GetData').then((res) => res.json());
  }

  getRRMetric() {
    return fetch('https://studious-tape-324410.appspot.com/api/User/GetMetrics').then((res) => res.json());
  }

   updateUser(items) {
    fetch('https://studious-tape-324410.appspot.com/api/User/Save', {
    
      method: 'post',
      body: JSON.stringify(items),
      headers: { 'Content-type': 'application/json',
                  'Accept': 'application-json',
                },
           
               
    });
  }
}

export default new CommonApiService();
