const validation= (email,password)=>{
    if (/\S+@\S+\.\S+/.test(email))return ''
    if(email.length > 35)return 'muchos caracteres'
    if(email.length < 1) return 'sin caracteres'

    if(password < 1) return 'no valido'
    
}
export default validation