package com.ing.statistics;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ing.models.Statistics;

@RestController
public class UserStatisticsController {

	@Autowired
	private StatisticsService statisticsService;
	
	@GetMapping("/statistics/{userId}")
	public Statistics getUserStatistics(@PathVariable int userId) {
		return statisticsService.getStatisticsByUserId(userId); 
	}
	
}
