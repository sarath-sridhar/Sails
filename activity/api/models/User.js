/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
schema: true,//only stores whats in the schema throws unwanted data from requests away
  attributes: {

  			   //schema for your data base
  	           name: {
  	           		type:'string'	
  	           },
  	           email: {
  	           	type:'string',
  	           	email:'true',
  	           	required:'true'
  	           },


  	           toJSON: function(){//restricts the data returned to the client 
  	           	var obj= this.toObject();//useful to prevent secure information
  	           	delete obj.email;
  	           	return obj;
  	           }

  }
};

