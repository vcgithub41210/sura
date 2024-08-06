create table user_account(
	usr_id int auto increment,
	name varchar(15),
	email_id varchar(30),
	password varchar(30),
);

select name,email_id,usr_id from user_account where usr_id = usr_id;
