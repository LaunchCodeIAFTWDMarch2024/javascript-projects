function getFullName(fName, lName, title = '') {
    let fullName = ''
    console.log(fullName)
    if (title !== '') {
        fullName += `${title} `
    }
    console.log(fullName)
    fullName += `${fName} ${lName}`
    return fullName
}

console.log(getFullName('Jane', 'Smith', 'Dr.'))