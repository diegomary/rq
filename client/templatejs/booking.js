import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import {moment} from 'meteor/momentjs:moment';
import {$} from 'meteor/jquery';
import '.././main.html';

let bn_subscription_handler={};

Template.booking.onCreated(function() {

  Meteor.subscribe('booking-public', () => {});

  bn_subscription_handler = Meteor.subscribe('bookingnumber', ()=> {

      let bn = BookingNumber.find().count();
      if(bn === 0) { Meteor.call('insert-booking-number', 'initial', (err, res) => { if (err) { console.log('error') } else { console.log('added') } });}

  });

  this.booking_number = new ReactiveVar('');

});

Template.booking.onRendered(function() { this.$("#datepicker").datepicker();});

Template.booking.onDestroyed(function() {});


Template.booking.helpers({

  bookings() {  return  Bookings.find({});  },
  bookingNumber() { if(bn_subscription_handler.ready()) { return BookingNumber.find().fetch()[0].BookingNumber } },


});


Template.booking.events({

  'click .js-book-button'(event, template) {

  let name = template.find('.js-book-name').value;
  let isoStringDate = template.find('.js-book-date').value;
  let isodate = new Date(isoStringDate);

      Meteor.call('insert-booking', name,isodate, (err, res) => {
          if (err) {
              console.log('error')
          } else {

              console.log('added')
          }
      });
  },

  'input .js-booking_number'(event,template){

      template.booking_number.set(event.target.value);
      Meteor.call('update-booking-number', event.target.value, (err, res) => {

          if (err) {
              console.log('error')
          } else {

              console.log('updated')
          }
      });

  },

  'click .js-remove-booking-c'(event,template) {

      Meteor.call('remove-booking', this._id, (err, res) => {
          if (err) {
              console.log('error')
          } else {

             console.log('removed')
          }
      });
  },

  'click .js-remove-booking-a'(event,template) {

    Meteor.apply('remove-booking',[this._id],{wait:true} ,function(err,result){ console.log(result); });

  },


});
