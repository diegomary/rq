import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import {moment} from 'meteor/momentjs:moment';
import {$} from 'meteor/jquery';
import { Session } from 'meteor/session'

import '.././main.html';

let chat_subscription_handler = {};

 Template.chat.onCreated(function() {

     this.checkConversation = new ReactiveVar(0);
     chat_subscription_handler = Meteor.subscribe('chatchannel', ()=> { });

});

Template.chat.onRendered(function() {

    this.$("#datepicker").datepicker();
    let convDiv = Template.instance().find('.conversation-frame');
    setInterval(()=> { convDiv.scrollTop = convDiv.scrollHeight; },500);

});

Template.chat.onDestroyed(function() {});


Template.chat.helpers({

    getchatcontent() {

        let conversation  =  ChatLive.find({}).fetch();
        let textConversation = '';
        for (let row of conversation) {

            textConversation += row.statement;
        }

        return  textConversation
    },

});


Template.chat.events({

    'keyup .js-chat-reactive': function(event,template) {
        if (event.which === 13) {

            let statement = event.target.value;
            event.target.value='';

            Meteor.call('insert-conversation-statement',statement , (err, res) => {
                if (err) console.log('error'); else  console.log('statement added');
            });

            event.stopPropagation();
            return false;
        }
    },

});