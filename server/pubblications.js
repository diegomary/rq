Meteor.publish('booking-public', function() {

    return Bookings.find();

});

Meteor.publish('bookingnumber', function() {

    return BookingNumber.find();

});


Meteor.publish('chatchannel', function() {

    return ChatLive.find();

});

Meteor.publish('clientsconnected', function() {

    return ConnectedClients.find();

});

