const MainLink = '/MyWeb-Learn-'

async function Nav(useNavigate,Direct){
    console.log('pass 1')
    if (Direct === '' || Direct === undefined || Direct === null){
        console.warn('Error Invalid Link');
        return ''
    }else {
        if (Direct.charAt(0) === '/'){
            console.log('pass 2')
            let NewDir = MainLink + Direct
            let navigate = useNavigate()
            //console.log(NewDir)
            navigate(NewDir)
        }else{
            console.warn('Error Invalid Link')
            return ''
        }
    }
}

export default Nav