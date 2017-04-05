import { Meteor } from 'meteor/meteor';


Meteor.methods({
    'remove-booking'(booking_id) {

        Bookings.remove(booking_id);
        return('Done successfully');

    },

    'insert-booking'(name,date) {
        let resource = ['axtrws','bctdgs','qn3gdfe'];
        let max = resource.length;
        let min = 0;
        let choiche= Math.floor(Math.random() * (max-min)) + min;
        Bookings.insert({ name: name, bookingdate:date , booking_number:resource[choiche] });
        return('Done successfully');

    },

    'insert-booking-number'(bn) {
        BookingNumber.insert({ BookingNumber: bn });
        return('Done successfully');

    },

    'update-booking-number'(bn) {

        let id= BookingNumber.find().fetch()[0]._id;
        BookingNumber.update(id, { $set: { BookingNumber: bn } });
        return('Updated successfully');

    },

    'insert-conversation-statement'(statement) {
        ChatLive.insert({ statement: statement });
        return('Done successfully');

    },


});