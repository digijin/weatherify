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
		if(!time){
			return undefined;
		}
		date = new Date();
		// alter date to be start of the day
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);
		if(time === 'today'){
			return date.getTime()/1000;
		}
		day = days.indexOf(time.substr(0, 3)); //so days can be both long and short
		if(day>-1){
			dayDiff = date.getDay() - day;
			date.setDate(date.getDate() + dayDiff);
			return date.getTime()/1000;
		}
	}
};