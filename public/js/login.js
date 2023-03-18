btn.onclick = async function render(e) {
    e.preventDefault();
  let datas = await fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      login: login.value,
      password: password.value,
    }),
  })
  login.value = ''
  password.value = ''

  let res = await datas.json()
  if (res.status == 200) {
    window.localStorage.setItem('token', res.data.token)
    window.location = '/'
  } else {
    alert(res.message)
  }
}
