const getDataForm = () => {
    const txtName = document.getElementById("txtName").value
    const txtEmail = document.getElementById("txtEmail").value
    const txtDescription = document.getElementById("txtTask").value
    const acceptConditions = document.getElementById("acceptConditions").checked
    const typeA = document.getElementById("typeA").value
    const typeB = document.getElementById("typeB").value
    const period = document.getElementById("semester").value


    // JSON {clave:valor}
    const data = {
        name: txtName,
        email: txtEmail,
        description: txtDescription,
        acceptConditions,
        typeA,
        typeB,
        period
    }

    console.log(data);
}