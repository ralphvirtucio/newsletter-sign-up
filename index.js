const form = document.querySelector('#form')


function handleSubmit(e) {
  e.preventDefault();

  const validEndEmail = ['gmail.com', 'outlook.com', 'yahoo.com']

  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData)

  if(!data.email.includes("@")) {
      console.log('invalid')
  } 

  console.log('valid')

}


form.addEventListener('submit', handleSubmit)