/* Get BEST with event param */
delimiter //
CREATE DEFINER=`rubikvn`@`localhost` PROCEDURE `getResultBest`(
    in param_event varchar(10)
)
begin
	SELECT 
    personName,
    (best/100) as `format`, 
    (value1/100) as value1, 
    (value2/100) as value2,
    (value3/100) as value3,
    (value4/100) as value4,
    (value5/100) as value5,
    C.name as competition
    FROM wca_db.results as B 
	inner join 
	(select personId, min(best) as mbest 
	from wca_db.results 
	where best > 0 and eventId = param_event
	group by personId 
	order by mbest asc) as A 
	on A.personId = B.personId 
	and B.best = A.mbest 
    inner join wca_db.competitions as C on B.competitionId = C.Id
	where eventId = param_event and best > 0 
    order by A.mbest asc //
end 
delimiter ;

/* Get AVERAGE with event param */
delimiter //
CREATE DEFINER=`rubikvn`@`localhost` PROCEDURE `getResultAverage`(
    in param_event varchar(10)
)
begin
	SELECT personName,
    (average/100) as `format`, 
    (value1/100) as value1, 
    (value2/100) as value2,
    (value3/100) as value3,
    (value4/100) as value4,
    (value5/100) as value5,
    C.name as competition
    FROM wca_db.results as B 
	inner join 
	(select personId, min(average) as maverage 
	from wca_db.results 
	where average > 0 and eventId = param_event
	group by personId 
	order by maverage asc) as A 
	on A.personId = B.personId 
	and B.average = A.maverage 
    inner join wca_db.competitions as C on B.competitionId = C.Id
	where eventId = param_event and average > 0 
    order by A.maverage asc //
end
delimiter ;


