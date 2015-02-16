module.exports = {
	format: function(time){
		if(time === 'today'){
			return new Date().getTime();
		}
	}
}