module.exports = function createDreamTeam(members) {
	if(!Array.isArray(members)) return false;
	let name = '';
	for(let i=0; i<members.length; i++){
		while(typeof(members[i])!='string') i++;
		let a = 0;
		while(members[i][a] == ' '){
		a++;
		}
  		 name+=members[i][a].toUpperCase();
		}
	let arr = name.split('');
	arr.sort();
	name = arr.join('');
	return name;
};