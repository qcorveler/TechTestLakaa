package quentin.lakaa.techtest.service;

import org.springframework.stereotype.Service;
import quentin.lakaa.techtest.model.Indicator;
import quentin.lakaa.techtest.repository.IndicatorRepository;

import java.util.List;

@Service
public class IndicatorService {
    private final IndicatorRepository indicatorRepository;

    public IndicatorService(IndicatorRepository indicatorRepository) {
        this.indicatorRepository = indicatorRepository;
    }

    public Indicator createIndicator(Indicator indicator) {
        return indicatorRepository.save(indicator);
    }

    public List<Indicator> getAllIndicators() {
        return indicatorRepository.findAll();
    }
}
