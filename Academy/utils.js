module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)
    
        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()
    
        if((month < 0) || (month == 0 && today.getDate() < birthDate.getDate())) {
            age--
        }
    
        return age
    },
    date: function(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()

        const month = (date.getUTCMonth()+1) > 9 ? date.getUTCMonth()+1 : `0${date.getUTCMonth()+1}`

        const day = date.getUTCDate() > 9 ? date.getUTCDate() : `0${date.getUTCDate()}`

        return {
            birthDay: `${day}/${month}`,
            iso: `${year}-${month}-${day}`
        }
    },
    blood: function(bloodSelection) {
        switch (bloodSelection) {
            case "AP":
                return "A+"
                break;
            case "AN":
                return "A-"
                break;
            case "BP":
                return "B+"
                break;
            case "BN":
                return "B-"
                break;
            case "ABP":
                return "AB+"
                break;
            case "ABN":
                return "AB-"
                break;
            case "OP":
                return "O+"
                break;
            case "ON":
                return "O-"
                break;
            default:
                return "NS"
                break;
        }
    }
}