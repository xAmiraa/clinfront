export class Booking {
     constructor(
          public patientnum:Number,
           public name:String,
           public age:Number,
           public address:String,
           public nationality:String,
           public phone:Number,
           public notes:String,

           public time:DateConstructor ,
           public date:DateConstructor,
           public doctorName:String,
           public notesBooking:String,
           public cost:Number
         ){
     
         }
}
