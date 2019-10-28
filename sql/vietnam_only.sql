use wca_db;

delete from wca_db.results where personCountryId != 'Vietnam';
delete from wca_db.persons where countryId != 'Vietnam';
delete from wca_db.competitions where countryId != 'Vietnam';