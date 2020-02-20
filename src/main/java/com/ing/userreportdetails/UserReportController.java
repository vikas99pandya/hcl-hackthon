package com.ing.userreportdetails;

import com.ing.models.Statistics;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserReportController {
    @Autowired
    private StatisticsService statisticsService;

    @GetMapping("/statistics/{userId}")
    public Statistics getUserStatistics(@PathVariable int userId) {
        return statisticsService.getStatisticsByUserId(userId);
    }
}
