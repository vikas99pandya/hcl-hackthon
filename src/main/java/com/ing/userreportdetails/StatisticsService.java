package com.ing.userreportdetails;
import java.util.Arrays;
import java.util.List;
import org.springframework.stereotype.Service;
import com.ing.models.Statistics;

@Service
public class StatisticsService {

    private List<Statistics> statistics = Arrays.asList(
            new Statistics(132, 12, false, 1),
            new Statistics(520, 600, false, 2)
    );

    public Statistics getStatisticsByUserId(int userId){
        return statistics.stream().filter(s -> s.getUser().getId() == userId).findFirst().get();
    }
}