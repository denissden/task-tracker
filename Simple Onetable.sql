create table Task(
	id_task serial primary key,
	task_text varchar not null,
	task_date date not null,
	task_reminder bool not null
);

insert into Task(task_text, task_date, task_reminder) values
('Task 1', '2021-10-24', true),
('Task 2', '2021-10-25', false),
('Task 2', '2021-10-28', true);
