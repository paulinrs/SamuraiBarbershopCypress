//massa de teste em javascript. 
//com js tenho o poder da programação para (customizar) contruir massa de teste mais Versáteis.
//em json não.
import _ from 'underscore'

exports.customer = {
    name: 'Lucas Clark',
    email:'lucas.clark@gmail.com',
    password: '002287',
    is_provider: false
}

exports.provider = {
    name: 'Claytom Amorim',
        email: 'claytom.amorim@bugmail.com',
        password: '002287',
        is_provider: true
}

exports.appointment = {
    hour: _.sample(['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'])
}
