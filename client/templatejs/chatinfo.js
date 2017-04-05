import { Mongo } from 'meteor/mongo';
import {moment} from 'meteor/momentjs:moment';
import {$} from 'meteor/jquery';
import { Session } from 'meteor/session'

import '.././main.html';

let chat_subscription_handler = {};
let users_connected_subscription_handler= {};

Template.chatinfo.onCreated(function() {

    this.checkCounter = new ReactiveVar(0);
    chat_subscription_handler = Meteor.subscribe('chatchannel', ()=> { });
    users_connected_subscription_handler = Meteor.subscribe('clientsconnected', ()=> { });

});

Template.chatinfo.onRendered(function() {

});

Template.chatinfo.onDestroyed(function() {});

Template.chatinfo.helpers({

    conversationRows() {

        let counter = ChatLive.find({}).count();
        Template.instance().checkCounter.set(counter);
        return counter;
    },

    usersConnected() {

        let counter = ConnectedClients.find({}).count();
        return counter;
    },


});


Template.chatinfo.events({


});