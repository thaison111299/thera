function removeElement(array, element) {

    if (array.indexOf(element) !== -1) {
        array.splice(array.indexOf(element), 1)
    }
}
function indexObject(list, field, value) {
    for (let i = 0; i < list.length; i++) {
        if (list[i][field] === value) {
            return i
        }
    }
    return -1
}



function removeObject(list, object, refFeild) {
    let value = object[refFeild]
    let index = indexObject(list, refFeild, value)
    list.splice(index, 1)

}


const thera = { removeObject, removeElement, indexObject }
module.exports = thera
// removeElement(chatrooms, 'tieng anh')
// console.log(chatrooms)