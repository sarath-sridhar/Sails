/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

					  // simple controller function that returns the view
					  // 'new': function(req,res){
					  //  	console.log("inside controller!!!!!!!!!!!!!!!");
					  //  	res.view();
					  // }

'flash' : function(req,res){
	    console.log("errrrrrrrrr");
		res.locals.flash = _.clone(req.session.flash);//_.clone used to pass parameter as a copy instead of the actual value		
        res.view('index');  
        req.session.flash={}; 		
},				  

'create': function (req,res,next) {

/*User-> modelname(User.js)*/
        User.create(req.params.all(),function userCreated(err, user1){//user.create is the command function to create a record
           	//userCreated function is follow up function to be executed after create
           	//if(err) return next(err)//display error message
           	if(err)
           	{
           		
           		req.session.flash={//validation error with flash messages
           			err:err
           		}
           		return res.redirect('/flash');//used to redirect user to a page
           	}
           		res.json(user1);
           		req.session.flash={}; 
           });
  			
		}
	
};

