const contacts = [
    "zian-512462",
    "afif-231451",
    "leo-132456"
]

const splitcontacts = contacts.map((x)=>x.split("-"))
console.log(splitcontacts)
console.log(splitcontacts[0][0])
console.log(splitcontacts[0][1])
console.log(splitcontacts[2][1])