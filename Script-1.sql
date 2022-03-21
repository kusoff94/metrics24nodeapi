INSERT INTO public.metric24_ (metricname,metricnum,metricvalue,dynamics,metricvalue_text_col,strim,dynamic_text_col,supersprint,dynamic_arrow,dynamic_arrow_col) VALUES
	 ('Просто какая-то метрика','1','90%','+7%','text_blue','IT2IT','text_blue','2022.1','1','text_blue'),
	 ('Просто какая-то метрика','2','0%','-7%','text_red','IT2IT','text_red','2022.1','1','text_red'),
	 ('Просто какая-то метрика','3','N/A','-12%','text_grey','IT2IT','text_red','2022.1','2','text_red'),
	 ('Просто какая-то метрика','4','13%','-22%','text_red','IT2IT','text_red','2022.1','2','text_red'),
	 ('Просто какая-то метрика','5','16%','-42%','text_red','IT2IT','text_red','2022.1','2','text_red'),
	 ('Просто какая-то метрика','6','84%','-2%','text_blue','IT2IT','text_red','2022.1','2','text_red'),
	 ('Просто какая-то метрика','7','9%','-42%','text_red','IT2IT','text_red','2022.1','2','text_red'),
	 ('Просто какая-то метрика','8','77%','+66%','text_blue','IT2IT','text_blue','2022.1','1','text_blue'),
	 ('Просто какая-то метрика','9','100%','-77%','text_blue','IT2IT','text_red','2022.1','2','text_red'),
	 ('Просто какая-то метрика','10','77%','-2%','text_blue','IT2IT','text_red','2022.1','2','text_red'),
	 ('Просто какая-то метрика','11.1','25%','-2%','text_red','IT2IT','text_red','2022.1','2','text_red'),
	 ('Просто какая-то метрика','11.2','66%','-2%','text_red','IT2IT','text_red','2022.1','2','text_red'),
	 ('Просто какая-то метрика','11.3','69%','-2%','text_red','IT2IT','text_red','2022.1','2','text_red'),
	 ('Просто какая-то метрика','12','79%','-2%','text_blue','IT2IT','text_red','2022.1','2','text_red'),
	 ('Просто какая-то метрика','13','99%','+27%','text_blue','IT2IT','text_blue','2022.1','1','text_blue'),
	 ('Просто какая-то метрика','14','21%','-2%','text_red','IT2IT','text_red','2022.1','2','text_red'),
	 ('Просто какая-то метрика','15','0%','-2%','text_blue','IT2IT','text_red','2022.1','2','text_red'),
	 ('Просто какая-то метрика','16','43%','-2%','text_red','IT2IT','text_red','2022.1','2','text_red'),
	 ('Просто какая-то метрика','17','26%','-2%','text_red','IT2IT','text_red','2022.1','2','text_red'),
	 ('Просто какая-то метрика','18','90%','-2%','text_blue','IT2IT','text_red','2022.1','2','text_red'),
	 ('Просто какая-то метрика','20','N/D','','text_red','IT2IT','text_black','2022.1','3','text_black'),
	 ('Просто какая-то метрика','21','N/A','','text_grey','IT2IT','text_black','2022.1','3','text_black'),s
	 ('Просто какая-то метрика','19','N/A','','text_grey','IT2IT','text_black','2022.1','3','text_black');


	 delete from public.metric24_  where strim = 'IT2IT' and supersprint = '2022.1'