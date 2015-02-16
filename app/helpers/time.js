days = [
'sat',
'mon',
'tue',
'wed',
'thu',
'fri',
'sat'
];

module.exports = {
	format: function(time){
		if(time === 'today'){
			return new Date().getTime();
		}
		day = days.indexOf(time.substr(0, 3)); //so days can be in many formats
		if(day>-1){
			return day;
		}
	}
};