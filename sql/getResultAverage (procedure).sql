CREATE DEFINER=`rubikvn`@`localhost` PROCEDURE `getResultAverage`(
    in param_event varchar(10)
)
begin
	SELECT 
    B.personId,
    personName,
    CASE 
    WHEN best = 0 then ''
    WHEN best = -1 then 'DNF'
    WHEN best = -2 then 'DNS'
    ELSE truncate(average/100, 2)
	END as `format`, 
    CASE 
    WHEN value1 = 0 then ''
    WHEN value1 = -1 then 'DNF'
    WHEN value1 = -2 then 'DNS'
    ELSE truncate(value1/100, 2)
	END as value1, 
    CASE 
    WHEN value2 = 0 then ''
    WHEN value2 = -1 then 'DNF'
    WHEN value2 = -2 then 'DNS'
    ELSE truncate(value2/100, 2)
	END as value2, 
    CASE 
    WHEN value3 = 0 then ''
    WHEN value3 = -1 then 'DNF'
    WHEN value3 = -2 then 'DNS'
    ELSE truncate(value3/100, 2)
	END as value3, 
    CASE 
    WHEN value4 = 0 then ''
    WHEN value4 = -1 then 'DNF'
    WHEN value4 = -2 then 'DNS'
    ELSE truncate(value4/100, 2)
	END as value4, 
    CASE 
    WHEN value5 = 0 then ''
    WHEN value5 = -1 then 'DNF'
    WHEN value5 = -2 then 'DNS'
    ELSE truncate(value5/100, 2)
	END as value5,  
    competitionId,
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
    order by A.maverage asc
end