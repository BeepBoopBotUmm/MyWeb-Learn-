const MainLink = '/MyWeb-Learn-'

async function Nav(navigate,Direct){
    console.log('pass 1')
    if (Direct === '' || Direct === undefined || Direct === null){
        console.warn('Error Invalid Link');
        return ''
    }else {
        if (Direct.charAt(0) === '/'){
            console.log('pass 2')
            let NewDir = MainLink + Direct
            //console.log(NewDir)
            navigate(NewDir)
        }else{
            console.warn('Error Invalid Link')
            return ''
        }
    }
}

export default Nav