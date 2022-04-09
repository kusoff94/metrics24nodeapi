-- public.metric24_ definition

-- Drop table

-- DROP TABLE public.metric24_;

CREATE TABLE public.metric24_ (
	metricname varchar NULL,
	metricnum varchar NULL,
	metricvalue varchar NULL,
	dynamics varchar NULL,
	metricvalue_text_col varchar NULL,
	strim varchar NULL,
	dynamic_text_col varchar NULL,
	supersprint varchar NULL,
	dynamic_arrow varchar NULL,
	dynamic_arrow_col varchar NULL
);


drop table movies
CREATE TABLE movies (
    movieID varchar(50) NOT NULL,
    movieName varchar(50) NOT NULL
)


INSERT INTO movies (
    movieID,
    movieName
)
values
    ('1', 'movie1'),
    ('2', 'movie2'),
    ('3', 'movie3'),
    ('4', 'movie4');
    
   
  select * from movies 
  
  
  
CREATE TABLE public.metrics24chart (
	strim varchar NOT NULL,
	sprint varchar NOT NULL,
	supersprint varchar NOT NULL,
	value numeric NOT NULL
);

insert into public.metrics24chart (
	strim ,
	sprint ,
	supersprint ,
	value
)
values
    ('IT2IT', '2022.1.1','2022.1',1),
    ('IT2IT', '2022.1.2','2022.1',7),
    ('IT2IT', '2022.1.3','2022.1',8),
    ('IT2IT', '2022.1.4','2022.1',11),
    ('IT2IT', '2022.1.5','2022.1',5),
    ('IT2IT', '2022.1.6','2022.1',12);
