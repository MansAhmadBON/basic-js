module.exports = function createDreamTeam(members) {
  let arrStr = [];
  if (!members) {
    return false
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      arrStr.push(members[i])
    }
  }
  return arrStr.map(elem => {
    let a = elem.replace(/\s/g, '');
    let firstChar = a[0];
    return firstChar.toUpperCase();
  }).sort().join('')
};