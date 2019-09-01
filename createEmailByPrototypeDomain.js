function spook(rank, firstname, lastname, jumpnumber){
    this.rank = rank;
    this.firstname = firstname;
    this.lastname = lastname;
    this.jumpnumber = jumpnumber;
}
var jason = new spook('SFC', 'Jason', 'Borne', '002')

spook.prototype.emailDomian = '@genuis.com';

spook.prototype.getEmail = function() {
  return this.rank + this.lastname + this.jumpnumber + this.emailDomian;  
}

jason.getEmail();
