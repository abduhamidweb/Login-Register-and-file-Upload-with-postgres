btn.onclick = async function render(e) {
  e.preventDefault()
  let datas = await fetch('http://localhost:5000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      username: username.value,
      login: login.value,
      password: password.value,
    }),
  })
  username.value = ''
  login.value = ''
  password.value = ''
    window.localStorage.clear();
  let res = await datas.json()
  console.log('res :', res);
  if (res.status == 200) {
    window.localStorage.setItem('token', res.data.token)
    window.location = '/'
  } else {
    alert(res.message)
  }
}
