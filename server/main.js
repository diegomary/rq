import { Meteor } from 'meteor/meteor';
Meteor.startup(() => {     });

// Server Connection
Meteor.onConnection(function (conn) {

    conn.onClose(function () {

        console.log(conn.clientAddress, 'user left');
        let client = ConnectedClients.findOne({ConnectionId: conn.id});
        ConnectedClients.remove(client._id);

    });
    console.log('New connection %s from %s', conn.id, conn.clientAddress);
    ConnectedClients.insert({ ConnectionId: conn.id, ClientAddress: conn.clientAddress, HttpHeaders: conn.httpHeaders })


});
