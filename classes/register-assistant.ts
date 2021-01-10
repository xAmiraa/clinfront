export class RegisterAssistant {
     constructor(
   public name:String,
   public nationalID:Number,
   public email:String,
   public phone:Number,
   public specialization:String,
   public city:String,
   public address:String,
          public  password :String,
          public password2 : String 
         ){}
}
export class Errors {
     msg : String 
    
 
 }
