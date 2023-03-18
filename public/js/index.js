const token = localStorage.getItem('token');
if (!token) window.location = "/register";
(async () => {
  let check = await fetch('http://localhost:5000/check', {
    method: 'GET',
    headers: {
      token: localStorage.getItem('token'),
    },
  })
  let res = await check.json()
  if (res.status == 404) window.location = '/register'
})()



btn.onsubmit = async (e) => {
    try {
        e.preventDefault()
        let formData = new FormData();
    formData.append('file', file.files[0])
      formData.append('title', title.value);
    let check = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      headers: {
        token: localStorage.getItem('token'),
      },
      body: formData,
    }) 
  } catch (error) {
    console.log(error.message)
  }
}