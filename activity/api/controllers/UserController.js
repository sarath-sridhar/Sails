/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

					  // simple controller function that returns the view
					  //  'new': function(req,res){
					  //  	console.log("inside controller!!!!!!!!!!!!!!!");
					  //  	res.view();
					  // },

'create': function (req,res,next) {

/*User-> modelname(User.js)*/
        User.create(req.params.all(),function userCreated(err, user1){//user.create is the command function to create a record
           	//userCreated function is follow up function to be executed after create
           	//if(err) return next(err)//display error message
           	if(err)
           	{
           		console.log(err);
           		req.session.flash={
           			err:err
           		}
           		//console.log("errrrrrr"+req.session.flash())
           		
           	}

           		res.json(user1);
           });
  			
		}
	
};

