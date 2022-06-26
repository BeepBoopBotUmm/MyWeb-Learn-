function CheckUnit(ms,Unit) {
    let DataToReturn = 0
    Unit = Unit.toLowerCase()
    if (Unit === 's') {
        DataToReturn = ms * 1000
        return DataToReturn
    }else if (Unit === 'm') {
        DataToReturn = ms * 1000 * 60
        return DataToReturn
    }else if (Unit === 'h') {
        DataToReturn = ms * 1000 * 60 * 60
        return DataToReturn
    }else{
        alert('Error Invalid Unit')
    }
    if (DataToReturn == 0){
        alert('Error')
        return DataToReturn
    }
}

function Wait(ms,Unit) {
    let ChangetoSec = CheckUnit(ms,Unit)
    console.log(ms + ' After ' + ChangetoSec)
    return new Promise(
      resolve => setTimeout(resolve, ChangetoSec)
    );
  }

export default Wait