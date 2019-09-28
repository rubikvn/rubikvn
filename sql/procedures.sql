/* Get BEST with event param */
delimiter //
create procedure getResultBest(
    in param_event varchar(10)
)
begin
	SELECT personName, best, value1, value2, value3, value4, value5, competitionId 
    FROM wca_db.results as B 
	inner join 
	(select personId, min(best) as mbest 
	from wca_db.results 
	where best > 0 and eventId = param_event
	group by personId 
	order by mbest asc) as A 
	on A.personId = B.personId 
	and B.best = A.mbest 
	where eventId = param_event and best > 0 order by A.mbest asc;
end //
delimiter ;

/* Get AVERAGE with event param */
delimiter //
create procedure getResultAverage(
    in param_event varchar(10)
)
begin
	SELECT personName, average, value1, value2, value3, value4, value5, competitionId 
    FROM wca_db.results as B 
	inner join 
	(select personId, min(average) as maverage 
	from wca_db.results 
	where average > 0 and eventId = param_event
	group by personId 
	order by maverage asc) as A 
	on A.personId = B.personId 
	and B.average = A.maverage 
	where eventId = param_event and average > 0 order by A.maverage asc;
end //
delimiter ;



/* Test */
drop procedure getResultBest;
call getResultBest('333');
call getResultAverage('333');

